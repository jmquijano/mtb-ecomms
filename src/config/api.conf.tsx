import React from "react";

class ApiConfigProvider extends React.Component {
    static readonly BaseUrl = {
        SellerCenter: "https://api.morethanbefore.com.au/api/v1/sellercenter/",
        Purchase: "https://api.morethanbefore.com.au/api/v1/purchase/",
        Testing: "https://api.morethanbefore.com.au/api/v1/test/",
        Message: "https://api.morethanbefore.com.au/api/v1/message/",
        Stripe: "https://api.morethanbefore.com.au/api/v1/stripe/",
        Paypal: "https://api.morethanbefore.com.au/api/v1/paypal/",
        Assets: "https://assets.morethanbefore.com.au/",
        Checkout: "https://api.morethanbefore.com.au/api/v1/checkout/",
        FrontendUI: "https://frontend-live-staging.morethanbefore.com.au"
    }
}

export { ApiConfigProvider }