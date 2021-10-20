using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoreThanBefore.FormInputInterface.SellerCenter.Products
{
    public class EditProduct
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

        [JsonProperty("isActive", NullValueHandling = NullValueHandling.Include)]
        public bool isActive { get; set; }
    }
}