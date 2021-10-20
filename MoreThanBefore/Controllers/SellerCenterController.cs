using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

using MoreThanBefore.Middlewares.SellerCenter;
namespace MoreThanBefore.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix(ApiConfiguration.SellerCenterBaseUrl)]
    public class SellerCenterController : ApiController
    {
        // "context" is a private variable which utilizes SellerCenterDbContext.
        private Models.SellerCenter.SellerCenterDbContext context = new Models.SellerCenter.SellerCenterDbContext();

        #region Authentication and Permission
        /**
         * @method AuthenticationLogin 
         * @description: This module creates a JWT when the user gives the correct account credentials.
         * @route: {api_base}/login
         * @method: POST
         */
        [Route("login")]
        [HttpPost]
        public dynamic AuthenticationLogin([FromBody] FormInputInterface.SellerCenter.Authentication.Login body)
        {
            var status = false;
            var message = "You have entered an incorrect username and/or password.";
            dynamic data = new { };

            // Find User
            var findUser = context.tbl_sc_users.FirstOrDefault(d => d.userName.Equals(body.username) || d.emailAddress.Equals(body.username));

            if (findUser != null)
            {
                // Validate Password
                bool validate = BCrypt.Net.BCrypt.Verify(text: body.password, hash: findUser?.hashedPassword);

                if (validate)
                {
                    // Claims
                    var claims = new List<Claim>();
                    claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                    claims.Add(new Claim("id", Convert.ToString(findUser?.id)));
                    claims.Add(new Claim("userName", Convert.ToString(findUser?.userName)));
                    claims.Add(new Claim("emailAddress", Convert.ToString(findUser?.emailAddress)));

                    status = true;
                    message = "Successful Authentication";
                    data = new
                    {
                        Token = Auth.CreateJWT(claims, DateTime.Now.AddHours(6))
                    };

                } else
                {
                    message = "Password is incorrect.";
                }

            } else
            {
                message = "No user was found with the supplied parameter [" + body.username + "]";
            }

            return Request.CreateResponse(HttpStatusCode.OK, new
            {
                Status = status,
                Message = message,
                Data = data
            }, "application/json");
        }

      
        /**
         * @method GetUserPermission
         * @description: This module retrieves current user permissions (a.k.a. ACL)
         * @route: {api_base}/my/permission
         */
        [JwtAuth]
        [Route("my/permission")]
        [HttpGet]
        public dynamic GetUserPermission()
        {
            // Pre-define variables and its default values.
            var status = false;
            var message = "Your account do not have any permissions.";
            dynamic data = null;

            var CurrentUser = Auth.CurrentUserID(Request.Headers);

            #region permissions (LiNQ)
            // Get Permissions
            var permissions = context.tbl_sc_roles_userassign
                               .Where(d => d.createdBy == CurrentUser)
                               .GroupJoin(
                                    context.tbl_sc_users,
                                    a => a.user,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        user = new
                                        {
                                            b.FirstOrDefault().id,
                                            b.FirstOrDefault().userName
                                        },
                                        a.role,
                                        a.createdBy,
                                        a.createdAt,
                                        a.isActive
                                    }
                               )
                               .Join(
                                    context.tbl_sc_roles,
                                    a => a.role,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.user,
                                        role = new
                                        {
                                            b.id,
                                            b.systemCode,
                                            b.description
                                        },
                                        a.createdBy,
                                        a.createdAt,
                                        a.isActive
                                    }
                               )
                               .Join(
                                    context.tbl_sc_acl_roleassign,
                                    a => a.role.id,
                                    b => b.role,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.user,
                                        a.role,
                                        aclRoleAssign = new
                                        {
                                            b.id,
                                            b.role,
                                            b.acl
                                        },
                                        a.createdBy,
                                        a.createdAt,
                                        a.isActive
                                    }
                               )
                               .Join(
                                    context.tbl_sc_acl,
                                    a => a.aclRoleAssign.acl,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.user,
                                        a.role,
                                        a.aclRoleAssign,
                                        permission = new
                                        {
                                            b.id,
                                            b.aclSystemCode,
                                            b.description
                                        },
                                        a.createdBy,
                                        a.createdAt,
                                        a.isActive
                                    }
                               )
                               .Select(d => new
                               {
                                   userId = d.user.id,
                                   d.user.userName,
                                   d.permission.aclSystemCode
                               });
            #endregion

            if (permissions.Count() >= 1)
            {
                status = true;
                message = "You have one or more permission(s) within the system.";
                data = permissions.Select(d => d.aclSystemCode).ToList();
            }

            return Request.CreateResponse((status ? HttpStatusCode.OK : HttpStatusCode.NotFound), new
            {
                Status = status,
                Message = message,
                Data = data
            }, "application/json");
        }
        #endregion

        #region Products (My)
        /**
         * @method GetAllCurrentUserProducts
         * @description: This module fetches all products created by the current authenticated user.
         * @route: {api_base}/my/product/all
         * @method: GET
         */
        [JwtAuth]
        [Route("my/product/all")]
        [HttpGet]
        public dynamic GetAllCurrentUserProducts()
        {
            // Pre-define variables and its default values.
            var status = false;
            var message = "No product found.";
            dynamic data = null;

            var auth = Auth.GetUserInfo(Request.Headers);
            var CurrentUser = Auth.CurrentUserID(Request.Headers);

            if (auth?.id == null)
            {
                throw new HttpResponseException(HttpStatusCode.Unauthorized);

            }

            // Find Products Created by Current Authenticated User
            var findProducts = context.tbl_products
                                .Where(d => d.createdBy == CurrentUser && d.isDeleted == false)
                                .GroupJoin(
                                    context.tbl_ecombase_currency,
                                    a => a.prodCurrency,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        a.prodUnit,
                                        a.prodPricePerUnit,
                                        prodCurrency = new
                                        {
                                            b.FirstOrDefault().shortname,
                                            b.FirstOrDefault().description
                                        },
                                        a.isActive,
                                        a.createdAt,
                                        a.createdBy
                                    }
                                )
                                .GroupJoin(
                                    context.tbl_ecombase_produnit,
                                    a => a.prodUnit,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        prodUnit = new
                                        {
                                            b.FirstOrDefault().shortname,
                                            b.FirstOrDefault().description
                                        },
                                        a.prodPricePerUnit,
                                        a.prodCurrency,
                                        a.isActive,
                                        a.createdAt,
                                        a.createdBy
                                        
                                    }
                                )
                                .GroupJoin(
                                    context.tbl_sc_users,
                                    a => a.createdBy,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        
                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        a.prodUnit,
                                        a.prodPricePerUnit,
                                        a.prodCurrency,
                                        a.isActive,
                                        a.createdAt,
                                        createdBy = new
                                        {
                                            b.FirstOrDefault().id,
                                            b.FirstOrDefault().userName,
                                            b.FirstOrDefault().firstName,
                                            b.FirstOrDefault().middleName,
                                            b.FirstOrDefault().lastName,
                                            b.FirstOrDefault().emailAddress
                                        }
                                })
                                .Select(d => new
                                {
                                    d.id,
                                    d.prodName,
                                    d.prodDesc,
                                    d.prodUnit,
                                    d.prodPricePerUnit,
                                    d.prodCurrency,
                                    d.isActive,
                                    d.createdAt,
                                    d.createdBy
                                    
                                });

            

            if (findProducts.Count() >= 1)
            {
                status = true;
                message = findProducts.Count() + " products found."; // [x] products found.
                data = findProducts.ToList();

            }

            return Request.CreateResponse((status ? HttpStatusCode.OK : HttpStatusCode.NotFound), new
            {
                Status = status,
                Message = message,
                Data = data
            }, "application/json");
        }

        /**
         * @method CreateProduct
         * @description: This module create product, user authentication is required.
         */
        [JwtAuth]
        [Route("my/product/create")]
        [HttpPost]
        public dynamic CreateProduct([FromBody] FormInputInterface.SellerCenter.Products.CreateProduct body) 
        {
            var CurrentUser = Auth.CurrentUserID(Request.Headers);

            // Pre-define variables and its default values.
            var status = false;
            var message = "Unable to create product.";

            try
            {
                // Initialize tbl_products (LiNQ)
                Models.SellerCenter.tbl_products create = new Models.SellerCenter.tbl_products();

                create.prodName = body.prodName;
                create.prodDesc = body.prodDesc;
                create.prodUnit = body.prodUnit;
                create.prodPricePerUnit = body.prodPricePerUnit;
                create.prodCurrency = body.prodCurrency;
                create.isActive = body.isActive;
                create.isDeleted = false;
                create.createdAt = DateTime.Now;
                create.createdBy = CurrentUser;

                context.tbl_products.Add(create);

                if (context.SaveChanges() == 1)
                {
                    status = true;
                    message = "Product '" + body.prodName + "' has been created.";
                }
            } catch (Exception e)
            {

            }

            return Request.CreateResponse((status ? HttpStatusCode.OK : HttpStatusCode.BadRequest), new
            {
                Status = status,
                Message = message
            }, "application/json");
        }

        /**
         * @method DeleteSpecificProduct
         * @description: This module delete a specific product (item) by its ID.
         * @route: {api_base}/my/product/{id}/delete
         */
        [JwtAuth]
        [Route("my/product/{id}/delete")]
        [HttpGet]
        public dynamic DeleteSpecificProduct(int id)
        {
            // Auth Middleware (Current User ID)
            var CurrentUser = Auth.CurrentUserID(Request.Headers);
            
            // Declare variables and its default values.
            var statusCode = HttpStatusCode.BadRequest;
            var status = false;
            var message = "Unable to proceed with product deletion due to invalid parameters were supplied.";

            // findProduct (LiNQ) Query
            var findProduct = context.tbl_products.Where(d => d.id == id && d.isDeleted == false);

            // Check if the product has one or more entry.
            if (findProduct.Count() >= 1)
            {
                // Check if the specified product ID was created by the Current User.
                if (findProduct.Where(d => d.createdBy == CurrentUser).Count() >= 1)
                {
                    // Update (LiNQ)
                    var update = findProduct.SingleOrDefault();
                    if (update != null)
                    {
                        update.isDeleted = true;
                        context.SaveChanges();
                    }

                    statusCode = HttpStatusCode.OK;
                    status = true;
                    message = "The product has been successfully deleted.";
                } else
                {
                    statusCode = HttpStatusCode.Forbidden;
                    message = "You are attempting to delete a product which is not created by you, you may not have enough permission to delete the product.";

                }
            } else
            {
                statusCode = HttpStatusCode.NotFound;
                message = "You have supplied a non-existent product ID, it may have already been deleted.";
            }
            

            return Request.CreateResponse(statusCode, new
            {
                Status = status,
                Message = message
            }, "application/json");
        }
        
        /**
         * @method EditSpecificProduct
         * @description: This module controls the editing of the specific product (item) by its ID.
         * @route: {api_base}/my/product/{id}/edit
         */
        [JwtAuth]
        [Route("my/product/{id}/edit")]
        [HttpPost]
        public dynamic EditSpeicifcProduct([FromBody] FormInputInterface.SellerCenter.Products.EditProduct body, int id)
        {
            // Auth Middleware (Current User ID)
            var CurrentUser = Auth.CurrentUserID(Request.Headers);

            // Declare variables and its default values.
            var statusCode = HttpStatusCode.BadRequest;
            var status = false;
            var message = "Unable to proceed with product editing due to invalid parameters were supplied.";
            var data = new { };

            // findProduct (LiNQ) Query
            var findProduct = context.tbl_products.Where(d => d.id == id && d.isDeleted == false);

            // Check if the product has one or more entry.
            if (findProduct.Count() >= 1)
            {
                // Check if the specified product ID was created by the Current User.
                if (findProduct.Where(d => d.createdBy == CurrentUser).Count() >= 1)
                {
                    // Update (LiNQ)
                    var update = findProduct.SingleOrDefault();
                    if (update != null)
                    {
                        try
                        {
                            update.prodName = body.prodName ?? update.prodName;
                            update.prodDesc = body.prodDesc ?? update.prodDesc;
                            update.prodUnit = (body.prodUnit >= 1 ? body.prodUnit : update.prodUnit);
                            update.prodPricePerUnit = (body.prodPricePerUnit >= 1 ? body.prodPricePerUnit : update.prodPricePerUnit);
                            update.prodCurrency = (body.prodCurrency >= 1 ? body.prodCurrency : update.prodCurrency); ;
                            update.isActive = body.isActive;
                            context.SaveChanges();

                            statusCode = HttpStatusCode.OK;
                            status = true;
                            message = "The product has been successfully updated.";
                        } catch (Exception e)
                        {
                            message = "There was an error on the backend.";
                        }
                    }
                }
                else
                {
                    statusCode = HttpStatusCode.Forbidden;
                    message = "You are attempting to edit a product which is not created by you, you may not have enough permission to delete the product.";
                }
            }
            else
            {
                statusCode = HttpStatusCode.NotFound;
                message = "You have supplied a non-existent product ID, it may have already been deleted.";
            }

            return Request.CreateResponse(statusCode, new
            {
                Status = status,
                Message = message
            }, "application/json");
        }
        #endregion

        #region Products (*) - For user with specific ACL.
        /**
         * @method GetAllProducts
         * @description: This module fetches all products.
         * @route: {api_base}/product/all
         */
        [JwtAuth]
        [JwtHasPermission("product:can_view_all", "product:can_edit_all", "superadmin")]
        [Route("product/all")]
        [HttpGet]
        public dynamic GetAllProducts()
        {
            // Pre-define variables and its default values.
            var status = false;
            var message = "No product found.";
            dynamic data = null;

            #region findProducts (LiNQ)
            // Find All Products 
            var findProducts = context.tbl_products
                                .Where(d => d.isDeleted == false)
                                .GroupJoin(
                                    context.tbl_ecombase_currency,
                                    a => a.prodCurrency,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        a.prodUnit,
                                        a.prodPricePerUnit,
                                        prodCurrency = new
                                        {
                                            b.FirstOrDefault().shortname,
                                            b.FirstOrDefault().description
                                        },
                                        a.isActive,
                                        a.createdAt,
                                        a.createdBy
                                    }
                                )
                                .GroupJoin(
                                    context.tbl_ecombase_produnit,
                                    a => a.prodUnit,
                                    b => b.id,
                                    (a, b) => new
                                    {
                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        prodUnit = new
                                        {
                                            b.FirstOrDefault().shortname,
                                            b.FirstOrDefault().description
                                        },
                                        a.prodPricePerUnit,
                                        a.prodCurrency,
                                        a.isActive,
                                        a.createdAt,
                                        a.createdBy

                                    }
                                )
                                .GroupJoin(
                                    context.tbl_sc_users,
                                    a => a.createdBy,
                                    b => b.id,
                                    (a, b) => new
                                    {

                                        a.id,
                                        a.prodName,
                                        a.prodDesc,
                                        a.prodUnit,
                                        a.prodPricePerUnit,
                                        a.prodCurrency,
                                        a.isActive,
                                        a.createdAt,
                                        createdBy = new
                                        {
                                            b.FirstOrDefault().id,
                                            b.FirstOrDefault().userName,
                                            b.FirstOrDefault().firstName,
                                            b.FirstOrDefault().middleName,
                                            b.FirstOrDefault().lastName,
                                            b.FirstOrDefault().emailAddress
                                        }
                                    })
                                .Select(d => new
                                {
                                    d.id,
                                    d.prodName,
                                    d.prodDesc,
                                    d.prodUnit,
                                    d.prodPricePerUnit,
                                    d.prodCurrency,
                                    d.isActive,
                                    d.createdAt,
                                    d.createdBy

                                });
            #endregion

            if (findProducts.Count() >= 1)
            {
                status = true;
                message = findProducts.Count() + " product(s) found."; // [x] products found.
                data = findProducts.ToList();
            }

            return Request.CreateResponse((status ? HttpStatusCode.OK : HttpStatusCode.NotFound), new
            {
                Status = status,
                Message = message,
                Data = data
            }, "application/json");
        }
        
        /**
         * @method DeleteSpecificProductWithHardDelete
         * @description: This module delete a specific product by its ID with optional hard delete.
         * @orute: {api_base}/product/{id}/delete
         */
        [JwtAuth]
        [JwtHasPermission("product:can_delete_all", "product:can_harddelete_all")]
        [Route("product/{id}/delete")]
        [HttpGet]
        public dynamic DeleteSpecificProductWithHardDelete(int id, bool hardDelete = false)
        {
            // Auth Middleware (Current User ID)
            var CurrentUser = Auth.CurrentUserID(Request.Headers);

            // Declare variables and its default values.
            var statusCode = HttpStatusCode.BadRequest;
            var status = false;
            var message = "Unable to proceed with product deletion due to invalid parameters were supplied.";

            // findProduct (LiNQ) Query
            var findProduct = context.tbl_products.Where(d => d.id == id);

            // Check if the product has one or more entry.
            if (findProduct.Count() >= 1)
            {
                // Check if the product was soft deleted.
                if (findProduct.SingleOrDefault().isDeleted == true)
                {
                    /**
                     * If the product was soft deleted already, hardDelete must be set to true (bool).
                     * Check if hardDelete was set to true.
                     */
                    if (hardDelete)
                    {
                        // Proceed with hard deletion.
                        var delete = context.tbl_products.Remove(findProduct.SingleOrDefault());
                        context.SaveChanges();

                        statusCode = HttpStatusCode.OK;
                        status = true;
                        message = "The product has been permanently deleted successfully.";
                    } else
                    {
                        /** 
                         * Show error. If the product was soft deleted already, 
                         * the allowed action is to permenanently delete the product (a.k.a Hard deletion)
                         */
                        statusCode = HttpStatusCode.BadRequest;
                        status = true;
                        message = "The product was already softly deleted, you may opt to delete the product permanently.";
                    }
                } else
                {
                    if (hardDelete)
                    {
                        // Hard Delete.
                        var delete = context.tbl_products.Remove(findProduct.SingleOrDefault());
                        context.SaveChanges();

                        statusCode = HttpStatusCode.OK;
                        status = true;
                        message = "The product has been permanently deleted successfully.";
                    } else
                    {
                        // Update (LiNQ)
                        var update = findProduct.SingleOrDefault();
                        if (update != null)
                        {
                            update.isDeleted = true;
                            context.SaveChanges();
                        }

                        statusCode = HttpStatusCode.OK;
                        status = true;
                        message = "The product has been successfully deleted.";
                    }
                    
                }
                
                
                
            }
            else
            {
                statusCode = HttpStatusCode.NotFound;
                message = "You have supplied a non-existent product ID, it may have already been deleted.";
            }


            return Request.CreateResponse(statusCode, new
            {
                Status = status,
                Message = message
            }, "application/json");
        }
        #endregion
    }
}