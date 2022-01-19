import React, { RefCallback } from "react";
import { TitleComponent } from "../routes/title";
import { ApiConfigProvider } from '../../config/api.conf';
import Logo from "../../assets/media/logo/1080x1080.png";
import CircularProgress from '@mui/material/CircularProgress';
import { Portal } from "@material-ui/core";
import { FaExclamationTriangle, FaHome, FaPrint, FaRegCheckCircle } from 'react-icons/fa';

interface IOrderData {
    emailAddress: string;
    firstName: string;
    lastName: string;
    seatToken: string;
}

interface IState {
    stripeData?: IOrderData[];
    loaderState: boolean;
    showPaymentDetails: boolean;
    paymentState: boolean;
    paymentMessage: any;
}

class StripeCallback extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            stripeData: [],
            loaderState: false,
            showPaymentDetails: false,
            paymentState: false,
            paymentMessage: ''
        };

        this.paymentDetailsRef = React.createRef();
        this.paymentDetailsPrintAreaRef = React.createRef();
    }

    paymentDetailsPrintAreaRef: any;

    paymentDetailsRef: any;

    componentDidMount() {
        this.setState({
            loaderState: true
        });

        const params = new URLSearchParams(this.props.location.search);

        setTimeout(() => {
            fetch(ApiConfigProvider.BaseUrl.Stripe + "payment/info", {
                method: 'POST',
                body: JSON.stringify({
                    clientSecret: params.get("payment_intent_client_secret")
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((res) => {
                if (res.Status) {
                    this.setState({
                        showPaymentDetails: true,
                        paymentState: true,
                        stripeData: res.Data,
                        paymentMessage: res.Message
                    });
                } else {
                    this.setState({
                        showPaymentDetails: true,
                        paymentState: false,
                        paymentMessage: res.Message
                    })
                }
            })
            .finally(() => {
                this.setState({
                    loaderState: false
                });
            });
        }, 10000);

        
    }

    render() {
        
        return (
            <React.Fragment>
                <TitleComponent title={'Stripe Payment Verification'} />
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
                    <div className={(this.state.loaderState ? 'd-flex' : 'd-none') +' align-items-center justify-content-center'} style={{
                        height: '80vh',
                        visibility: this.state.loaderState ? 'visible' : 'hidden',
                    }}>
                        <div className={'container text-center'}>
                            <div className={'d-flex align-items-center justify-content-center'}>
                                <CircularProgress />

                                <span className={'mtb-checkout-loading-text ms-3'}>Connecting to Stripe</span>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </>
                <>
                    {/* When payment is successful */}
                    <div className={'container'} ref={this.paymentDetailsRef}></div>

                    {(this.state.paymentState ? 
                        <Portal container={this.paymentDetailsRef.current}>
                            <div className={(this.state.showPaymentDetails ? 'd-flex' : 'd-none') + ' align-items-center justify-content-center mx-auto'} style={{
                                maxWidth: 600,
                                height: '80vh',
                                visibility: this.state.showPaymentDetails ? 'visible' : 'hidden',
                            }}>
                                <div className={'row gy-3 text-center'}>
                                    <div className={'col-12'}>
                                        <FaRegCheckCircle style={{
                                            fontSize: 60,
                                            color: '#013763'
                                        }} />
                                    </div>
                                    <div className={'col-12'}>
                                        <span className={'mtb-checkout-text text-center'} style={{
                                            maxWidth: 500
                                        }}>
                                            {this.state.paymentMessage}
                                        </span>
                                    </div>
                                    <div className={'col-12'} id={'orderDetailsPrint'}>
                                        <div className={'card px-3 py-3 mx-auto'} style={{
                                                maxWidth: 400
                                            }}>
                                            <span className={'mtb-checkout-text text-center'} style={{
                                                fontWeight: 600
                                            }}>Order Details</span>

                                            <div className={'row gy-3 mt-5 p-0'}>
                                                {this.state.stripeData?.map((data, i) => {
                                                    return(
                                                        <div className={'col-12 text-start'}>
                                                            <span className={'mtb-checkout-text text-start d-block'} style={{
                                                                fontWeight: 400,
                                                                lineHeight: '50%'
                                                            }}>
                                                                {data?.firstName} {data?.lastName}
                                                            </span>
                                                            <span className={'mtb-checkout-text text-start d-inline'} style={{
                                                                fontWeight: 400,
                                                                fontSize: '70%'
                                                            }}>
                                                                Seat Token: 
                                                            </span>
                                                            <span className={'mtb-checkout-text text-start d-inline ms-1'} style={{
                                                                fontWeight: 600,
                                                                fontSize: '70%'
                                                            }}>
                                                                {data?.seatToken}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-12'}>
                                        <span onClick={() => {
                                            window.location.href = "/";
                                        }} className={'mtb-checkout-text text-center'} style={{
                                            maxWidth: 400,
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}>
                                            <FaHome className={'me-2'} />
                                            Return
                                        </span>
                                        <span onClick={() => {
                                            window.print();
                                            
                                        }} className={'mtb-checkout-text text-center ms-3 border-left'} style={{
                                            maxWidth: 400,
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            color: '#F24F37'
                                        }}>
                                            <FaPrint className={'me-2'} />
                                            Print
                                        </span>
                                    </div>
                                </div>
                                

                            </div>
                        </Portal> 
                        : 
                        <Portal container={this.paymentDetailsRef.current}>
                            <div className={(this.state.showPaymentDetails ? 'd-flex' : 'd-none') + ' align-items-center justify-content-center'} style={{
                                height: '80vh',
                                visibility: this.state.showPaymentDetails ? 'visible' : 'hidden',
                            }}>
                                <div className={'row gy-3 text-center'}>
                                    <div className={'col-12'}>
                                        <FaExclamationTriangle style={{
                                            fontSize: 60,
                                            color: '#013763'
                                        }} />
                                    </div>
                                    <div className={'col-12'}>
                                        <span className={'mtb-checkout-text text-center'} style={{
                                            maxWidth: 500
                                        }}>
                                            {this.state.paymentMessage}
                                        </span>
                                    </div>
                                    <div className={'col-12'}>
                                        <span onClick={() => {
                                            window.location.href = "/";
                                        }} className={'mtb-checkout-text text-center'} style={{
                                            maxWidth: 400,
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            color: '#F24F37'
                                        }}>
                                            Back to Home
                                        </span>
                                    </div>
                                </div>
                                

                            </div>
                        </Portal> )}
                </>
            </React.Fragment>
        );
    }
}

export { StripeCallback }

