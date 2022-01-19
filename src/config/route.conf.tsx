import React from "react";

// Page Components
import Home from "../components/home";
import { CheckoutPayment } from "../components/checkout/payment";
import { PaypalCallback } from "../components/checkout/paypalcallback";
import { StripeCallback } from "../components/checkout/stripecallback";

const RouteConfigProvider = [
    {
        title: 'Home',
        pathname: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Secure Payment',
        pathname: '/checkout/payment',
        exact: true,
        component: CheckoutPayment
    },
    {
        title: 'Paypal Callback',
        pathname: '/checkout/paypal/callback',
        exact: true,
        component: PaypalCallback
    },
    {
        title: 'Stripe Callback',
        pathname: '/checkout/stripe/callback',
        exact: true,
        component: StripeCallback
    }
];



export { RouteConfigProvider };