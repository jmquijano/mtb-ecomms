using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace MoreThanBefore.Middlewares.SellerCenter
{
    public class JwtHasPermissionAttribute : AuthorizeAttribute
    {
        private String[] _acl;

        /**
         * @method: JwtHasPermissionAttribute (Constructor)
         * @params: token (params String[])
         */
        public JwtHasPermissionAttribute(params String[] acl)
        {
            _acl = acl;
        }

        /**
         * @method: HasCapability
         * @params: token (String)
         * @description: This method will check if the user has certain permission as specified on the variable "_acl".
         * @return: boolean
         */
        private bool HasCapability(String token)
        {
            var dbContext = new Models.SellerCenter.SellerCenterDbContext();
            var CurrentUser = Auth.CurrentUserIDTokenOnly(token);

            #region Get Permission (LiNQ)
            // Get Permissions
            var permissions = dbContext.tbl_sc_roles_userassign
                               .Where(d => d.createdBy == CurrentUser)
                               .GroupJoin(
                                    dbContext.tbl_sc_users,
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
                                    dbContext.tbl_sc_roles,
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
                                    dbContext.tbl_sc_acl_roleassign,
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
                                    dbContext.tbl_sc_acl,
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

            var hasACL = permissions.Select(d => d.aclSystemCode).ToList();
            #endregion

            return _acl.Any(x => hasACL.Contains(x));
        }


        /**
         * @method: IsAuthorized
         * @params: actionContext (HttpActionContext)
         * @description: This method was inherited from AuthorizeAttribute.
         * @return: boolean
         */
        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            // Pre-define the variable and its default values.
            var state = false;
            var token = actionContext.Request.Headers?.Authorization?.Parameter;

            // Check whether the variable token has corresponding value.
            if (token != null)
            {
                state = HasCapability(token);
            }

            // Return the boolean value of the variable state.
            return state;
        }

        /**
         * @method: HandleUnauthorizedRequest
         * @params: actionContext (HttpActionContext)
         * @description: This method doesn't have a return value, this method was inherited from AuthorizeAttribute
         */
        protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        {
            // Create a JSON response
            var json = JsonConvert.SerializeObject(new
            {
                Status = false,
                Message = "You do not have sufficient permission to initiate the transaction request."
            });

            // Create a Response
            actionContext.Response = new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.Forbidden,
                Content = new StringContent(json, Encoding.UTF8, "application/json")
            };
        }

    }
}