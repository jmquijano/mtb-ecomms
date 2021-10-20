using Newtonsoft.Json;


namespace MoreThanBefore.FormInputInterface.SellerCenter.Products
{
    public class CreateProduct
    {
        [JsonProperty("prodName")]
        public string prodName { get; set; }

        [JsonProperty("prodDesc")]
        public string prodDesc { get; set; }

        [JsonProperty("prodUnit")]
        public int prodUnit { get; set; }

        [JsonProperty("prodPricePerUnit")]
        public decimal prodPricePerUnit { get; set; }

        [JsonProperty("prodCurrency")]
        public int prodCurrency { get; set; }

        [JsonProperty("isActive")]
        public bool isActive { get; set; }

    }
}