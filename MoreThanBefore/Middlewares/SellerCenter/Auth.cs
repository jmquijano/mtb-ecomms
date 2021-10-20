using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using MoreThanBefore.Models;

namespace MoreThanBefore.Middlewares.SellerCenter
{
    public class Auth
    {
        // "context" is a private variable which uses SellerCenterDbContext.

        /**
         * @method: GetUserInfo
         * @param: context (HttpRequestHeaders)
         * @description: This method will fetch the specific user information on the database, parse token is provided by the ParseJWT.
         */
        public static dynamic GetUserInfo(HttpRequestHeaders context)
        {
            var dbContext = new Models.SellerCenter.SellerCenterDbContext();
            var parsedToken = ParseJWT(context.Authorization.Parameter);
            int userid = (int) parsedToken.id;

            // Find User by ID
            var findUserById = dbContext.tbl_sc_users.FirstOrDefault(d => d.id == userid);

            // Return
            return findUserById;
        }

        public static int CurrentUserID(HttpRequestHeaders context)
        {
            var dbContext = new Models.SellerCenter.SellerCenterDbContext();
            var parsedToken = ParseJWT(context.Authorization.Parameter);
            int userid = (int)parsedToken.id;

            // Find User by ID
            var findUserById = dbContext.tbl_sc_users.FirstOrDefault(d => d.id == userid);

            // Return
            return (int) findUserById.id;
        }

        public static int CurrentUserIDTokenOnly(String token)
        {
            var dbContext = new Models.SellerCenter.SellerCenterDbContext();
            var parsedToken = ParseJWT(token);
            int userid = (int)parsedToken.id;

            // Find User by ID
            var findUserById = dbContext.tbl_sc_users.FirstOrDefault(d => d.id == userid);

            // Return
            return (int)findUserById.id;
        }

        /**
         * @method: CreateJWT
         * @param: claim (dynamic), exp (DateTime)
         * @description: This method will create/generate JWT token.
         */
        public static dynamic CreateJWT(dynamic claim, DateTime exp)
        {
            // Secret Key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(ApiConfiguration.SellerCenterJwtSecretKey));

            // Signing Credentials
            var signatureCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            // Token Initialization
            var token = new JwtSecurityToken(
                issuer: ApiConfiguration.SellerCenterJwtIssuer, // Issuer
                audience: ApiConfiguration.SellerCenterJwtAudience, // Audience
                claims: claim, // Claims (JWT Data Payload)
                expires: exp,
                signingCredentials: signatureCredentials
                );

            // JWT
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }

        /**
         * @method: ParseJWT
         * @param: token (string)
         * @description: This method will validate and parse the JWT token supplied on parameter token.
         * @return: dynamic
         */
        public static dynamic ParseJWT(string token)
        {
            if (token == null)
            {
                return null;
            }


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
                    return new
                    {
                        id = Convert.ToInt16(jwtToken.Claims.First(x => x.Type == "id").Value),
                        userName = Convert.ToString(jwtToken.Claims.First(x => x.Type == "userName").Value)
                    };
                }
            }
            catch (Exception e)
            {
                return null;
            }



            return null;
        }
    }
}