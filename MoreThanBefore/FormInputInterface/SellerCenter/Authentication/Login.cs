using Newtonsoft.Json;

namespace MoreThanBefore.FormInputInterface.SellerCenter.Authentication
{
    public class Login
    {
        [JsonProperty("username")]
        public string username { get; set; }

        [JsonProperty("password")]
        public string password { get; set; }
    }
}