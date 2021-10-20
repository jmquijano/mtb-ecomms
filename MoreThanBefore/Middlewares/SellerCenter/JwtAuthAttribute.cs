using System;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using System.Web.Http.Controllers;
using Newtonsoft.Json;

namespace MoreThanBefore.Middlewares.SellerCenter
{
    public class JwtAuthAttribute : AuthorizeAttribute
    {
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
                // Validate the variable token. 
                if (ValidateJWT(token.ToString()))
                {
                    // If token is valid then set state to true.
                    state = true;
                }
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
                Message = "You have supplied an invalid token."
            });

            // Create a Response
            actionContext.Response = new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.Forbidden,
                Content = new StringContent(json, Encoding.UTF8, "application/json")
            };
        }


        /**
         * @method: ValidateJWT
         * @params: token (string)
         * @description: This method validates the JWT token supplied in parameter token (string).
         * @return: boolean
         */
        private bool ValidateJWT(string token)
        {
            if (token == null)
                return false;

            // Secret Key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ApiConfiguration.SellerCenterJwtSecretKey));

            // Signing Credentials
            var signatureCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityTokenHandler();
            
            try
            {
                jwt.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = securityKey,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = jwtToken.Claims.First(x => x.Type == "id").Value;

                if (userId != null)
                {
                    return true;
                }
            } catch (Exception e)
            {
                return false;
            }

            

            return false;
        }

        
    }
}