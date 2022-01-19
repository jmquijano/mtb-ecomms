import React, { RefCallback } from "react";
import { TitleComponent } from "../routes/title";
import { ApiConfigProvider } from '../../config/api.conf';
import Logo from "../../assets/media/logo/1080x1080.png";
import CircularProgress from '@mui/material/CircularProgress';
import "../../assets/css/antd.css";
import "../../assets/css/custom.css";
import "../../assets/bootstrap/bootstrap.css";

// Stripe
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer, PaymentElement} from '@stripe/react-stripe-js';

interface IPaypalLink {
    href: string;
    rel: string;
    method: string;
}

interface IPaypalPaymentIntent {
    id?: string;
    intent?: string;
    links?: IPaypalLink[],
    token?: string;
}

interface IStripePaymentIntent {
    clientSecret?: string;
    amount?: number;
    amountCapturable?: number;
    amountReceived?: number;
    applicationFeeAmount?: number;
    currency?: string;
}

interface IMembershipForm {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    emailAddress?: string;
    birthdate?: any;
    countryCode?: any;
    streetAddress?: any;
    city?: any;
    state?: any;
    zipCode?: any;
}

interface IOrderContextDataStructure {
    promoCode?: string;
    orderDetails?: IMembershipForm[];
}

interface IState {
    showStripeForm: boolean;
    showLoadingState: boolean;
    paymentMethod?: number;
    paypalPaymentIntentContext?: IPaypalPaymentIntent;
    stripePaymentIntentContext?: IStripePaymentIntent;
    orderContext?: IOrderContextDataStructure;
    cartContext?: any;
}

class CheckoutPayment extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showStripeForm: false,
            showLoadingState: false,
            paymentMethod: 0,
            paypalPaymentIntentContext: {},
            stripePaymentIntentContext: {},
            orderContext: {},
            cartContext: {}
        };
    }

    componentDidMount() {
        this.setState({
            showLoadingState: true
        });

        const params = new URLSearchParams(this.props.location.search);
        // console.log(params.get('id') + " | " + params.get('hmac'));

        fetch(ApiConfigProvider.BaseUrl.Checkout + "info", {
            method: 'POST',
            body: JSON.stringify({
                transactionId: params.get('id'),
                transactionHMAC: params.get('hmac')
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((res) => {
            if ((res.Data?.payment?.provider).toLowerCase() == "paypal") {
                // alert("Paypal");
                const paypalContext = res.Data?.payment?.context?.paypalPaymentIntentContext;
                
                if (paypalContext.id !== null) {
                    // console.log(paypalContext.links);
                    paypalContext.links.map((data: any, i: number) => {
                        
                        if (data?.method == "REDIRECT") {
                            window.location.href = data?.href;
                        }
                    })
                } else {
                    alert("There was an error connecting to Paypal server. Please try a different provider.");
                    window.location.href = "/";
                }
            }

            if ((res.Data?.payment?.provider).toLowerCase() == "stripe") {
                // alert("Stripe");
                const stripeContext = res.Data?.payment?.context?.stripePaymentIntent;

                if (stripeContext.clientSecret !== null) {
                    this.setState({
                        showStripeForm: true,
                        stripePaymentIntentContext: stripeContext,
                        orderContext: res.Data?.cart,
                        cartContext: res.Data?.payment
                    });
                }
            }
        })
        .catch((error) => {

        })
        .finally(() => {
            this.setState({
                showLoadingState: false
            });
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <TitleComponent title={'Secure Payment'} />
                <>
                    <div className={'masthead mtb-checkout-header py-3 py-md-4 mt-0'}>
                        <div className={'container'}>
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <div className={'logo'}>
                                    <div className={'logoInner'}>
                                        <img className={'logoImage'} src={Logo} height={55} width={'auto'} />
                                        <span className={'mtb-checkout-header-title d-inline d-md-inline'}>Secure <br />Payment <br />Gateway</span>
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </>
                <>
                    {/* Payment Facility */}
                    <div className={(this.state.showLoadingState ? 'd-flex' : 'd-none') + ' align-items-center justify-content-center'} style={{
                        height: '80vh',
                        visibility: (this.state.showLoadingState ? 'visible' : 'hidden')
                    }}>
                        <div className={'container text-center'}>
                            <div className={'d-flex align-items-center justify-content-center'}>
                                <CircularProgress />

                                <span className={'mtb-checkout-loading-text ms-3'}>Connecting to Payment Facility</span>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </>

                <>
                    {/* Stripe Form */}
                    {this.state.showStripeForm ? (
                        <div className={'container mt-5'}>
                            <div className={'row gx-3 gy-4 mx-auto d-flex justify-content-center'}>
                                
                                <div className={'col-12 col-md-5'}>
                                    <div className={'card p-4'} style={{
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderBottom: 'none'
                                    }}>
                                        <span className={'mtb-checkout-text'}>Total Amount</span>
                                        <span className={'mtb-checkout-text'} style={{
                                            fontSize: '120%',
                                            fontWeight: 600
                                        }}>
                                            ${this.state.cartContext?.totalAmount}
                                        </span>
                                        <span className={'mtb-checkout-text'} style={{
                                            fontSize: '70%',
                                            fontWeight: 400
                                        }}>In Australian Dollars (AUD)</span>
                                    </div>
                                    <div className={'card p-4'} style={{
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0
                                    }}>
                                        <Elements stripe={stripePromise} options={{
                                            clientSecret: this.state.stripePaymentIntentContext?.clientSecret
                                        }}>
                                            <InjectedCheckoutForm />
                                        </Elements>
                                    </div>
                                    
                                </div>
                                <div className={'col-12 text-center'}>
                                <span className={'mtb-checkout-text text-center'} style={{
                                    fontWeight: 400
                                }}>Powered by <b>Stripe</b></span>
                                </div>
                                
                            </div>
                            
                        </div>
                    ) : ''}
                </>
            </React.Fragment>
        )
    }
}

class StripeCheckoutForm extends React.Component<any, any> {
    handleSubmit = async (event : any) => {
        event.preventDefault();
        const {stripe, elements, clientSecret} = this.props;

        if (!stripe && !elements) {
            return;
        }
        
        const paymentElement = elements.getElement(CardElement);
        
        /* const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        }); */

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: ApiConfigProvider.BaseUrl.FrontendUI + '/checkout/stripe/callback'
            }
        });
    };
    
  
    render() {
      const {stripe, elements} = this.props;
      return (
        <form onSubmit={this.handleSubmit}>
          <PaymentElement />
          {stripe == null && elements == null ? '' : 
            <div className={'d-block d-grid'}>
                <button className={'btn mtb-button mt-3'} style={{
                    borderRadius: 8,
                    visibility: (elements ? "visible" : "hidden")
                }} type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
            
          }
          
        </form>
      );
    }
  }

const InjectedCheckoutForm = (props: any) => (
    <ElementsConsumer>
        {({stripe, elements}) => (stripe !== null && elements !== null ?
            <StripeCheckoutForm stripe={stripe} elements={elements} /> : ''
        )}
    </ElementsConsumer>
);

const stripePromise = loadStripe('pk_live_CIU5OUEBAEhrE7TAHXha5RVg');

export { CheckoutPayment };