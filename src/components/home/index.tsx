import React, { RefCallback } from "react";
import moment from "moment";
import { TitleComponent } from "../routes/title";

import { ApiConfigProvider } from '../../config/api.conf';

import "../../assets/css/antd.css";
import "../../assets/css/custom.css";
import "../../assets/bootstrap/bootstrap.css";

import Logo from "../../assets/media/logo/1080x1080.png";
import HeroImage from "../../assets/media/Hero Content.png";
import MouseDownIcon from "../../assets/media/icons8_mouse_scrolling_120px.png";

// Featured Brand Logo Image Imports
import FTB_Amazon from "../../assets/media/amazon-2@2x.png"; // 1
import FTB_MasterCard from "../../assets/media/mastercard-2@2x.png"; // 2
import FTB_Microsoft from "../../assets/media/microsoft@2x.png"; // 3
import FTB_AlaskaAirlines from "../../assets/media/alaska-airlines-4@2x.png"; // 4
import FTB_BookingDotCom from "../../assets/media/bookingcom@2x.png"; // 5

// Educator's Message
import EducatorsPic from "../../assets/media/julius.png";
import VideoThumb from "../../assets/media/videothumb@2x.png";
import EducatorMessageVideo from '../../assets/media/videos/sample_video.mp4';

// About Us
import AboutUsImage from '../../assets/media/aboutus1@2x.png';
import PAAcademyLogo from '../../assets/media/logo/pa-academy.png';
import PALogo from '../../assets/media/logo/pa-logo.png';

// Vision & Mission
import VisionMissionImage from '../../assets/media/Component 3 – 1@2x.png';

// Why Choose Us
import MoneyIcon from '../../assets/media/icons8_money_120px@2x.png';
import MoneyFreedomIcon from '../../assets/media/icons8_dove_120px@2x.png';
import HandlingFinancesIcon from '../../assets/media/icons8_brain_120px@2x.png';
import EnjoyingMoneyIcon from '../../assets/media/icons8_confetti_120px_2.png';

// Event Details
import EventDetailsImage1 from '../../assets/media/EventDetailsImage@2x.png';
import EventDetailsImage2 from '../../assets/media/WelcomeKit.png';
import EventGoalCheckIcon from '../../assets/media/icons8_checkmark_120px@2x.png';

// Event Timeline
import EventTimelineMoneyIcon from '../../assets/media/icons8_money_120px@2x.png';
import EventTimelineFloatIcon from '../../assets/media/event-timeline/icons8_float_120px_1@2x.png';
import EventTimelineSaveMoneyIcon from '../../assets/media/event-timeline/icons8_money_120px@2x.png';
import EventTimelineStudyIcon from '../../assets/media/event-timeline/icons8_study_120px@2x.png';
import EventTimelineWhistleIcon from '../../assets/media/event-timeline/icons8_whistle_120px@2x.png';
import EventTimelineMuslceIcon from '../../assets/media/event-timeline/icons8_muscle_120px_1@2x.png';
import EventTimelineGraduationIcon from '../../assets/media/event-timeline/icons8_graduation_cap_120px@2x.png';

// React Player
import ReactPlayer from 'react-player';

/* Timeline - Material UI */
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// Pricing Table
import Portal from '@mui/material/Portal';
import ProductFeaturesCheckIcon from '../../assets/media/icons8_checkmark_120px@2x.png';
import ProductReservePersonPic from '../../assets/media/PersonReserve.png';

import { FaCheck, FaPlus, FaMinus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaUserAlt, FaChevronDown, FaBars, FaTimes, FaEnvelope as MailIcon, FaArrowRight, FaStripeS, FaPaypal, FaTrashAlt } from 'react-icons/fa';
import {IoIosWarning} from 'react-icons/io';
// FAQ
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Contact Form
import { Form, InputGroup } from 'react-bootstrap';

// Sponsors
import SponsorMicrosoftLogo from '../../assets/media/sponsors/microsoft@2x.png';
import SponsorAmazonLogo from '../../assets/media/sponsors/amazon-2@2x.png';
import SponsorFedexLogo from '../../assets/media/sponsors/fedex-express-6@2x.png';

// Minor
import SponsorAlaskaLogo from '../../assets/media/sponsors/alaska-airlines-4@2x.png';
import SponsorBookingLogo from '../../assets/media/sponsors/bookingcom@2x.png';
import SponsorMastercardLogo from '../../assets/media/sponsors/mastercard-2@2x.png';
import SponsorDHLLogo from '../../assets/media/sponsors/dhl-express@2x.png';

// Footer
import FooterMTBLogo from '../../assets/media/logo/mtb-logo-iteration-white@2x.png';
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

// Scroller
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Drawer
import Drawer from '@mui/material/Drawer';

// Product Modal
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/DatePicker';




const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: "black"
    },
    barColorPrimary: {
      backgroundColor: "red"
    }
  })(LinearProgress);


interface IFeaturedBrandsDataStructure {
    name?: string;
    imageContext?: string;
    width?: any;
    height?: any;
    align?: any;
}

interface IWhyChoseUsDataStructure {
    title?: string;
    description?: any;
    imageContext?: string;
    width?: any;
    height?: any;
    align?: any;
}

interface ILearningGoalsDataStructure {
    text?: any;
    icon?: any;
}

interface IEventTimelineDataStructure {
    title?: any;
    paragraph?: any;
    week?: any;
    date?: {
        start?: any;
        end?: any;
    };
    icon?: any;
}

interface IProductPricingDataStructure {
    id?: any;
    promoCode?: any;
    title?: string;
    price?: number;
    date?: {
        start?: any;
        end?: any;
    },
    features?: IProductFeaturesDataStructure[]
}

interface IProductFeaturesDataStructure {
    checked?: boolean;
    text?: any;
}

interface IFaqDataStructure {
    title?: string;
    content?: any;
}

interface IContactLinksDataStructure {
    icon?: any;
    title?: string;
    content?: any;
    url?: any;
}

interface ISponsorsDataStructure {
    imageContext?: any;
    title?: any;
    description?: any;
    url?: string;
}

interface IFooterLinkDataStructure {
    title?: any;
    action?: any;
}

interface IProductDataStructure {
    counter?: {
        remainingEventSeat?: number;
    };
    validation?: {
        promoDates?: boolean;
        promoUtilizationCount?: boolean;
        eventSeatCount?: boolean;
    };
    product?: {
        promoCode?: string;
        minQuantity?: number;
        maxQuantity?: number;
        prodName?: string;
        prodDesc?: string;
        price?: {
            unitCost?: number;
            unitType?: string;
            currency?: string;
        }
    }
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

interface ICountryDataStructure {
    id?: string;
    name?: string;
    code?: string;
}

interface IOrderContextDataStructure {
    promoCode?: string;
    orderDetails?: IMembershipForm[];
}

interface IHomeProps {
    
}

interface IHomeState {
    featuredBrands: IFeaturedBrandsDataStructure[];
    whyChooseUs: IWhyChoseUsDataStructure[];
    learningGoals: ILearningGoalsDataStructure[];
    eventTimeline: IEventTimelineDataStructure[];
    tabPricingActive: number;
    productPricing: {
        individual?: IProductPricingDataStructure[];
        group?: IProductPricingDataStructure[];
    };
    faqActive: number;
    faqItem: {
        faqStudents?: IFaqDataStructure[];
        faqParents?: IFaqDataStructure[];
    };
    faqItemAccordionExpanded: number;
    contact: {
        contactForm?: {
            name?: string;
            email?: string;
            message?: any;
        };
        contactLinks?: {
            primary: IContactLinksDataStructure[];
            social: IContactLinksDataStructure[];
        }
    };
    majorSponsors?: ISponsorsDataStructure[];
    minorSponsors?: ISponsorsDataStructure[];
    footerLinkSitemap: IFooterLinkDataStructure[];
    footerLinkProduct: IFooterLinkDataStructure[];
    footerLinkHelp: IFooterLinkDataStructure[];
    sidenavExpand: boolean;
    productsFromDb?: {
        individual?: IProductDataStructure[],
        group?: IProductDataStructure[]
    },
    selectedProductModal?: IProductDataStructure;
    productModalOpenState: boolean;
    productModalRenderHere: any;
    mainLoaderState: boolean;
    individualMembershipForm: IMembershipForm;
    groupMembershipForm: IMembershipForm;
    countries?: ICountryDataStructure[];
    orderContext?: IOrderContextDataStructure;
    paymentSelectionModal: boolean;
    paymentOptionLoadState: boolean;
    reservationModalOpenState: boolean;
    groupFullCapacityModal: boolean;
    individualFullCapacityModal: boolean;
    reservationFullCapacityModal: boolean;
    messageFormBusyState?: boolean;
}



interface Props extends WithStyles<typeof styles>{ 

}

class Home extends React.Component<any, IHomeState> {
    pricingTableContainer: any;

    faqItemContainer: any;

    drawerRef: any;

    constructor(props: any){
        super(props);

        var featuredBrandsLocalData = [
            {
                name: 'Amazon',
                imageContext: FTB_Amazon,
                height: 30
            },
            {
                name: 'MasterCard',
                imageContext: FTB_MasterCard,
                height: 55,
                align: 'left'
            },
            {
                name: 'Microsoft',
                imageContext: FTB_Microsoft,
                height: 30,
                align: 'left'
            },
            {
                name: 'Alaska Airlines',
                imageContext: FTB_AlaskaAirlines,
                height: 35,
                align: 'center'
            },
            {
                name: 'Booking.com',
                imageContext: FTB_BookingDotCom,
                height: 20,
                align: 'right'
            },
            
        ];

        var whyChooseUsLocalData = [
            {
                title: 'Experience Money',
                description: (<p>See, feel and experience the world of money.</p>),
                imageContext: MoneyIcon
            },
            {
                title: 'Money Freedom',
                description: (<p>Financial freedom and independence.</p>),
                imageContext: MoneyFreedomIcon
            },
            {
                title: 'Handling Finances',
                description: (<p>Become money smart and learn to invest.</p>),
                imageContext: HandlingFinancesIcon
            },
            {
                title: 'Enjoying Money',
                description: (<p>Enjoy life without compromising your finances.</p>),
                imageContext: EnjoyingMoneyIcon
            }
        ]

        var learningGoalsLocalData = [
            {
                text: 'Develop the skills to earn a living wage, doing rewarding work they enjoy.'
            },
            {
                text: 'Save and manage their money without undue stress.'
            },
            {
                text: 'Become and/or remain personal-debt-free.'
            },
            {
                text: 'Invest their money with confidence.'
            },
            {
                text: 'Obtain the freedom and financial independence.'
            },
            {
                text: 'Develop a confident knowledge and awareness of money, investing and building wealth.'
            },
            {
                text: 'Develop an abundant mindset and outlook in life.'
            }
        ]

        var eventTimelineLocalData = [
            {
                title: 'Life On Your Terms',
                paragraph: 'Build a clear picture on what you want your financial future to look',
                week: 'Week 1',
                date: {
                    start: '02/01/2022'
                },
                icon: EventTimelineFloatIcon
            },
            {
                title: 'Budgeting and Saving',
                paragraph: 'Learn on how to live a quality life on a budget.',
                week: 'Week 2',
                date: {
                    start: '02/08/2022'
                },
                icon: EventTimelineSaveMoneyIcon
                
            },
            {
                title: 'Generate passive income while Studying',
                paragraph: 'Get to learn about stocks and how to invest in stock market.',
                week: 'Week 3',
                date: {
                    start: '02/15/2022'
                },
                icon: EventTimelineStudyIcon
            },
            {
                title: 'Train your Financial Muscles',
                paragraph: 'Get to workout your financials in a group with a financial advisor.',
                week: 'Week 4',
                date: {
                    start: '02/22/2022'
                },
                icon: EventTimelineWhistleIcon
            },
            {
                title: 'Change your weakness into your key strengths',
                paragraph: 'Learn about mindsets and how to play your strengths by knowing your weaknesses.',
                week: 'Week 5',
                date: {
                    start: '03/01/2022'
                },
                icon: EventTimelineMuslceIcon
            },
            {
                title: 'How to be wise while you are young',
                paragraph: 'Learn key principles of handling money and how to see money.',
                week: 'Week 6',
                date: {
                    start: '03/08/2022'
                },
                icon: EventTimelineGraduationIcon
            }
        ];

        var productPricingLocalData = {
            individual: [
                {
                    id: 1,
                    promoCode: 'WON0QLCZAMXJ78VA2MF2',
                    title: 'Early Bird*',
                    price: 250.00,
                    date: {
                        start: '10/24/2021',
                        end: '11/15/2021'
                    },
                    features: [
                        {
                            checked: true,
                            text: 'Welcome Kit'
                        },
                        {
                            checked: true,
                            text: 'Exclusive Community'
                        },
                        {
                            checked: true,
                            text: 'Course resources'
                        },
                        {
                            checked: true,
                            text: '24/7 support'
                        },
                        {
                            checked: true,
                            text: 'Worksheets, Recordings'
                        },
                    ]
                },
                {
                    id: 2,
                    promoCode: '51KNT27NFNA617O6YTOD',
                    title: 'Regular**',
                    price: 300.00,
                    date: {
                        start: '11/16/2021',
                        end: '12/15/2021'
                    },
                    features: [
                        {
                            checked: true,
                            text: 'Welcome Kit'
                        },
                        {
                            checked: true,
                            text: 'Exclusive Community'
                        },
                        {
                            checked: true,
                            text: 'Course resources'
                        },
                        {
                            checked: true,
                            text: '24/7 support'
                        },
                        {
                            checked: true,
                            text: 'Worksheets, Recordings'
                        },
                    ]
                },
            ],
            group: [
                {
                    id: 3,
                    promoCode: 'F597H0U2V2MDGVEQZN76',
                    title: 'Early Bird*',
                    price: 225.00,
                    date: {
                        start: '10/24/2021',
                        end: '11/15/2021'
                    },
                    features: [
                        {
                            checked: true,
                            text: 'Welcome Kit'
                        },
                        {
                            checked: true,
                            text: 'Exclusive Community'
                        },
                        {
                            checked: true,
                            text: 'Course resources'
                        },
                        {
                            checked: true,
                            text: '24/7 support'
                        },
                        {
                            checked: true,
                            text: 'Worksheets, Recordings'
                        },
                    ]
                },
                {
                    id: 4,
                    promoCode: 'I90QZT1SDQI4XOIL3MB1',
                    title: 'Regular**',
                    price: 275.00,
                    date: {
                        start: '11/16/2021',
                        end: '12/15/2021'
                    },
                    features: [
                        {
                            checked: true,
                            text: 'Welcome Kit'
                        },
                        {
                            checked: true,
                            text: 'Exclusive Community'
                        },
                        {
                            checked: true,
                            text: 'Course resources'
                        },
                        {
                            checked: true,
                            text: '24/7 support'
                        },
                        {
                            checked: true,
                            text: 'Worksheets, Recordings'
                        },
                    ]
                },
            ]
        }

        var faqItemLocalData = {
            faqStudents: [
                {
                    title: 'Is this program right for me?',
                    content: 'If you are aged 17 to 21 years old and have big dreams, ambitious, driven, and determined then our program is for you! Our program aims to teach our youth about the right mindset when it comes to money and how you can best leverage it to achieve your goals and dreams.'
                },
                {
                    title: 'What will I get from this program?',
                    content: 'Through this program, you will be able to learn practical skills on how you should manage your money and earn it at the same time. You might think that “I don’t have the money or wealth to manage right now so I don’t see how beneficial this will be for me.”, however, time will still surely come when you need to earn or manage your own money. Maybe save for college, a new gadget, or for that trip you’ve been dreaming of taking after COVID, we will help you on how you can effectively and efficiently save for those goals.'
                },
                {
                    title: 'How long will the program last?',
                    content: 'The program lasts for 6 weeks. From Feb. 1 to Mar. 8, 2022 with 2 weeks holiday break. You and your instructors will meet once a week, every Monday via Zoom. And even after the program, we will offer continuous support to you for 12 months to monitor your progress as a complementary service for joining our pioneer batch.'
                },
                {
                    title: 'What will I get from this program?',
                    content: 'After signing up, you will get to receive your “MTB Program Box” which contains your More than Before goodies. Plus, you will also get to join the MTB community which will serve as your safe space to discuss things about money and career with your peers. And by the end of the program, you’ll get to be equipped with practical tools and skills when it comes to money so you’ll be ready for the real world.'
                },
                {
                    title: 'The seats are full! Can I reserve for the next batch?',
                    content: 'Yes! Please feel free to click on this link here to get on our waiting list. We’ll email you once the program is open again.'
                }
            ],
            faqParents: [
                {
                    title: 'Is this program right for my child?',
                    content: 'This program is right for your child if they are aged 17 to 21 years old and have big dreams, ambitious, driven, and determined. Our program aims to teach our youth about the right mindset when it comes to money and how they can practically leverage it to achieve their goals and dreams.'
                },
                {
                    title: 'What will my child get from this program?',
                    content: 'Through this program, your kid will be able to learn practical skills on how they should manage their money and earn it at the same time. You might think that your kid might not have the wealth or the money to manage at present, however, time will surely come when they do. And as adults, it’s our responsibility to help and teach our youth about money and so they can avoid the money traps they might experience.'
                },
                {
                    title: 'Why should I enroll my kid?',
                    content: 'Our program offers guidance and is taught by a licensed financial advisor. Although the internet is abundant with information, with just one Google search, you or your kid can easily find information about money and how to budget, save or earn it. However, unguided consumption of this information can do more harm than good and may lead to impulsive investments or impractical money decisions. Thus, this program came into fruition. To guide the youth and minimize the risks of them falling into money-traps.'
                },
                {
                    title: 'How long will the program last?',
                    content: 'The program lasts for 6 weeks. From Feb. 1 to Mar. 8, 2022 with 2 weeks holiday break. The students and the instructors will meet once a week, every Monday via Zoom. And even after the program, we will offer your kid continuous support for 12 months through the MTB community to monitor their progress as a complementary service for letting them join our pioneer batch.'
                },
                {
                    title: 'What if I am not happy with the results? Can I get my money back?',
                    content: 'We do not offer money-backs. However, we ensure that every student that graduates from our program is equipped with the right knowledge and skills and that the objectives of the program are met by the student. In the event that you are not happy with your child’s result, we’re happy to have a chat with you and discuss what we can do to be able to deliver the result that you want.'
                }
            ]
        }

        var contactPrimaryLocalData = [
            {
                icon: <FaMapMarkerAlt />,
                title: 'Location',
                content: (<span>9/17 Power Avenue, Alexandria <br /> New South Wales 2015, Australia</span>)
            },
            {
                icon: <FaEnvelope />,
                title: 'Email',
                content: (<span>hello@morethanbefore.com.au</span>)
            },
            {
                icon: <FaPhoneAlt />,
                title: 'Phone',
                content: '+0403 956 469'
            }
        ];

        var contactSocialLocalData = [
            {
                icon: <FaFacebook />,
                url: 'https://www.facebook.com/purposeadvisory/'
            },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/purposeadvisory/'
            },
            {
                icon: <FaLinkedin />,
                url: 'https://au.linkedin.com/company/purposeadvisory'
            }
        ];

        var majorSponsorsLocalData = [{}];

        var minorSponsorsLocalData = [{}];

        var footerLinkSitemapLocalData = [
            {
                title: 'About',
                action: 'mtb-hp-educatorsmessage'
            },
            {
                title: 'Event Details',
                action: 'mtb-hp-eventdetails'
            },
            {
                title: 'FAQ',
                action: 'mtb-hp-faq'
            },
            {
                title: 'Contact Us',
                action: 'mtb-hp-contactform'
            }
        ];

        var footerLinkProductLocalData = [
            {
                title: 'Pricing',
                action: 'mtb-hp-pricing'
            },
            {
                title: 'Services',
                action: ''
            },
            {
                title: 'Reservations',
                action: 'mtb-hp-reservation'
            }
        ];

        var footerLinkHelpLocalData = [
            {
                title: 'FAQ',
                action: ''
            },
            {
                title: 'Contact Us',
                action: ''
            }
        ]

        this.state = {
            featuredBrands: featuredBrandsLocalData,
            whyChooseUs: whyChooseUsLocalData,
            learningGoals: learningGoalsLocalData,
            eventTimeline: eventTimelineLocalData,
            tabPricingActive: 1,
            productPricing: productPricingLocalData,
            faqActive: 1,
            faqItem: faqItemLocalData,
            faqItemAccordionExpanded: 0,
            contact: {
                contactForm: {
                    name: '',
                    email: '',
                    message: ''
                },
                contactLinks: {
                    primary: contactPrimaryLocalData,
                    social: contactSocialLocalData
                }
            },
            majorSponsors: majorSponsorsLocalData,
            minorSponsors: minorSponsorsLocalData,
            footerLinkSitemap: footerLinkSitemapLocalData,
            footerLinkProduct: footerLinkProductLocalData,
            footerLinkHelp: footerLinkHelpLocalData,
            sidenavExpand: false,
            productModalOpenState: false,
            productModalRenderHere: null,
            mainLoaderState: false,
            individualMembershipForm: {
                firstName: undefined,
                middleName: undefined,
                lastName: undefined,
                emailAddress: undefined,
                birthdate: null,
                countryCode: null,
                streetAddress: null,
                city: null,
                state: null,
                zipCode: null
            },
            groupMembershipForm: {
                firstName: undefined,
                middleName: undefined,
                lastName: undefined,
                emailAddress: undefined,
                birthdate: null,
                countryCode: null,
                streetAddress: null,
                city: null,
                state: null,
                zipCode: null
            },
            countries: [],
            orderContext: {
                promoCode: undefined,
                orderDetails: []
            },
            paymentSelectionModal: false,
            paymentOptionLoadState: false,
            reservationModalOpenState: false,
            groupFullCapacityModal: false,
            individualFullCapacityModal: false,
            reservationFullCapacityModal: false,
            messageFormBusyState: false
        };

        

        this.pricingTableContainer = React.createRef();
        this.faqItemContainer = React.createRef();
        this.drawerRef = React.createRef();
    }

    getProductInfos(type: number, callback: any) {
        // Set Loader State
        this.setState({
            mainLoaderState: true
        });

        fetch(ApiConfigProvider.BaseUrl.Purchase + "getproductinfos/" + type + "?tag[]=landing_page", {
            method: 'GET'
        })
        .then(response => response.json())
        .then((res) => {
            callback(res);

            
        })
        .finally(() => {
            // Set Loader State
            this.setState({
                mainLoaderState: false
            });
        })
        .catch((error) => {

        });
    }

    getCountries() {
        fetch(ApiConfigProvider.BaseUrl.Purchase + "countries", {
            method: 'GET'
        })
        .then(response => response.json())
        .then((res) => {
            this.setState({
                countries: res.Data
            });
        })
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log('begin', arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
            console.log('end', arguments);
        });
    
        scrollSpy.update();
        this.setState({tabPricingActive: 1, faqActive: 1});

        this.getProductInfos(1, (d: any) => {
            // console.log(d);
            this.setState(initialState => ({
                productsFromDb: {
                    ...initialState.productsFromDb,
                    individual: d.Data
                }
            }))
        });

        this.getProductInfos(2, (d: any) => {
            // console.log(d);
            this.setState(initialState => ({
                productsFromDb: {
                    ...initialState.productsFromDb,
                    group: d.Data
                }
            }))
        });

        this.getCountries();
    }



    handleContactForm() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        // Set Message Form Busy State
        this.setState({
            messageFormBusyState: true
        });

        if (re.test((this.state.contact?.contactForm?.email ?? ""))) {
            fetch(ApiConfigProvider.BaseUrl.Message + "contactform", {
                method: 'POST',
                body: JSON.stringify(this.state.contact.contactForm),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then((res) => {
                // Set Message Form Busy State
                this.setState({
                    messageFormBusyState: false
                });

                if (res.Status) {
                    alert(res.Message);
                    this.setState({
                        contact: {
                            contactLinks: (this.state.contact.contactLinks),
                            contactForm: {
                                name: '',
                                message: '',
                                email: ''
                            }
                        }
                    });
                } else {
                    alert(res.Message);
                }
            });
        }
    }

    openProductModal(promoCode: string) {
        this.setState({
            mainLoaderState: true
        });
        fetch(ApiConfigProvider.BaseUrl.Purchase + promoCode + "/info", {
            method: 'GET'
        })
        .then(response => response.json())
        .then((res) => {
            this.setState({
                selectedProductModal: res.Data,
                productModalOpenState: true
            });
        })
        .finally(() => {
            this.setState({
                mainLoaderState: false
            });
        })

        
    }

    openReservationModal(promoCode: string) {
        this.setState({
            mainLoaderState: true
        });
        fetch(ApiConfigProvider.BaseUrl.Purchase + promoCode + "/info", {
            method: 'GET'
        })
        .then(response => response.json())
        .then((res) => {
            this.setState({
                selectedProductModal: res.Data,
                reservationModalOpenState: true
            });
        })
        .finally(() => {
            this.setState({
                mainLoaderState: false
            });
        })

        
    }
    
    processCheckout(provider: number) {
        this.setState({
            paymentOptionLoadState: true
        });

        fetch(ApiConfigProvider.BaseUrl.Checkout + "create/" + (provider == 1 ? "stripe" : (provider == 2 ? "paypal" : "")), {
            method: 'POST',
            body: JSON.stringify(this.state.orderContext),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then((res) => {
            if (res.Status) {
                window.location.href = "/checkout/payment?id=" + res.Data.checkout.id + "&hmac=" + res.Data.checkout.hmac;
            }
        })
        .finally(() => {
            this.setState({
                paymentOptionLoadState: true
            });
        })
    }

    handleCheckEmailDuplicate(email : string) {
        return this.state.orderContext?.orderDetails?.some(item => email === item.emailAddress) ?? false;
    }

    render() {
        const fixedDataProductfeatures = [
            {
                checked: true,
                text: 'Welcome Kit'
            },
            {
                checked: true,
                text: 'Exclusive Community'
            },
            {
                checked: true,
                text: 'Course resources'
            },
            {
                checked: true,
                text: '24/7 support'
            },
            {
                checked: true,
                text: 'Worksheets, Recordings'
            },
        ]

        const { 
            featuredBrands, 
            whyChooseUs, 
            learningGoals, 
            eventTimeline, 
            tabPricingActive, 
            productPricing, 
            faqActive, 
            faqItem, 
            faqItemAccordionExpanded, 
            contact, 
            majorSponsors, 
            minorSponsors,
            footerLinkSitemap,
            footerLinkProduct,
            footerLinkHelp,
            sidenavExpand,
            productsFromDb
        } = this.state;

        const { 
            individual, 
            group 
        } = productPricing;

        const { 
            faqStudents, 
            faqParents 
        } = faqItem;

        const {
            contactForm, 
            contactLinks
        } = contact;

        const handleFAQItemAcordionExpanded = (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            if (isExpanded) {
                this.setState({faqItemAccordionExpanded: index});
            } else {
                this.setState({faqItemAccordionExpanded: 0});
            }
            
        }

        const useStyles = makeStyles(theme => ({
            paper: {
                padding: "6px 16px"
            },
            secondaryTail: {
                backgroundColor: theme.palette.secondary.main
            },
            verticallyCenterContent: {
                margin: "auto 0"
            },
            MuiAccordionroot: {
                "&.MuiAccordion-root:before": {
                backgroundColor: "white"
                }
            }
        }));
        

        let isEven = (num: number) => {
            return num % 2 == 0;
        }

        const { classes } = this.props;

        return (
            <React.Fragment>
                <TitleComponent title={'Home | More Than Before'} />
                <>
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        visibility: (this.state.mainLoaderState ? 'visible' : 'hidden')
                    }}>
                        <LinearProgress className={'mtb-loader'} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
                    </div>
                    

                </>
                <>
                    <Dialog
                        fullWidth={true}
                        maxWidth={'xs'}
                        open={this.state.paymentSelectionModal}
                        onClose={() => {
                            this.setState({
                                paymentSelectionModal: false
                            });
                        }}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "0px"
                            }
                        }}
                    >
                        <div style={{
                                
                            width: '100%',
                            visibility: (this.state.paymentOptionLoadState ? 'visible' : 'hidden')
                        }}>
                            <LinearProgress className={'mtb-loader'} sx={{
                                height: '5px'
                            }} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
                        </div>
                        <DialogContent>
                            
                            <div className={'row mx-0'} style={{
                                width: '100%'
                            }}>
                                <div className={'col-6'}>
                                    <img src={Logo} width={'auto'} height={'40px'} />
                                </div>
                                <div className={'col-6'}></div>
                                <div className={'col-12 my-4'}>
                                    <h1 className={'mtb-hp-title'} style={{
                                        fontSize: '180%'
                                    }}>
                                        Membership <span className={'mtb-text-color-primary'}>Payment</span>
                                    </h1>
                                    <span className={'mtb-hp-text1'} style={{
                                        fontSize: '100%'
                                    }}>
                                        Choose your payment method.
                                    </span>
                                    
                                </div>
                                <div className={'col-12 my-3 d-grid d-block'}>
                                    <button disabled={(this.state.paymentOptionLoadState)} onClick={() => {
                                        this.processCheckout(1);
                                    }} className="btn mtb-button mtb-button mtb-button-border-radius px-5 py-3 ms-0 ms-md-2" style={{
                                        fontWeight: 'bold'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            marginLeft: '-10%'
                                        }}>
                                            

                                        </span>
                                        <span style={{
                                            fontSize: '90%',
                                            fontWeight: 600
                                        }}>

                                            <FaStripeS style={{
                                                fontSize: '180%',
                                                paddingRight: 10,
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                marginRight: 0,
                                                borderRight: '0px solid'
                                            }} />

                                            Pay with Stripe
                                        </span>
                                    
                                    </button>
                                    <div className={'mtb-hp-payment-ortext mt-4'}>
                                        
                                        <span>or</span>
                                    </div>

                                    {/* this.state.paymentOptionLoadState */}
                                    <button disabled={true} onClick={() => {
                                        this.processCheckout(2);
                                    }}  className="btn mtb-button mtb-button-outline mtb-button-border-radius px-5 py-3 ms-0 ms-md-2" style={{
                                        fontWeight: 'bold'
                                    }}>
                                        <span style={{
                                            fontSize: '90%',
                                            fontWeight: 600
                                        }}>
                                            <FaPaypal style={{
                                                fontSize: '180%',
                                                paddingRight: 10,
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                marginRight: 0,
                                                borderRight: '0px solid'
                                            }} />
                                            Pay with PayPal
                                        </span>
                                    
                                    </button>
                                    <span className={'text-center mt-3 d-block'}>Our PayPal payment is currently under maintenance, please use Stripe as a payment method.</span>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>
                
                {/** Dialog/Modal for Contact Us Form (Reservation) */}
                <>
                <Dialog 
                        fullWidth={true}
                        maxWidth={'sm'}
                        open={this.state.reservationFullCapacityModal}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "10px"
                            }
                        }}
                        onClose={() => {
                            this.setState({
                                reservationFullCapacityModal: false
                            });
                        }}
                    >
                        <DialogContent>
                            <div className={'row mx-0'} style={{
                                width: '100%'
                            }}>
                                <div className={'col-12 my-2 d-block d-md-flex align-items-center justify-content-center'}>
                                    
                                    <span className={'mtb-hp-text1 text-center text-md-start ms-0'}>
                                        Reservations are full. We only cater limited reservations.
                                        For more inquiries, you may contact us. 
                                    </span>

                                </div>
                                <div className={'col-12'}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="contactFormName">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Name
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaUserAlt />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.name} type="text" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                name: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Email
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaEnvelope />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.email} type="email" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                email: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400,
                                                
                                            }}>
                                                Message
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield align-items-start">
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'off'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.message} as={'textarea'} rows={3} onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                message: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>
                                    <div className={'d-grid d-block'}>
                                        <button className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                            fontWeight: 600,
                                            fontSize: '100%'
                                        }} onClick={() => {
                                            this.handleContactForm();
                                            this.setState({
                                                reservationFullCapacityModal: false
                                            })
                                            // console.log(contactForm);
                                        }}>
                                            {this.state.messageFormBusyState ? (
                                                <div style={{
                            
                                                    width: '100%',
                                                    visibility: 'visible'
                                                }}>
                                                    <CircularProgress size={30} className={'mtb-loader'} sx={{
                                                        color: '#fff'
                                                    }} />
                                                </div>
                                            ) : (
                                                <span>Submit</span>
                                            ) }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>

                {/** Dialog/Modal for Contact Us Form (When the seat count available is 0, for Individual Membership) */}
                <>
                <Dialog 
                        fullWidth={true}
                        maxWidth={'sm'}
                        open={this.state.individualFullCapacityModal}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "10px"
                            }
                        }}
                        onClose={() => {
                            this.setState({
                                individualFullCapacityModal: false
                            });
                        }}
                    >
                        <DialogContent>
                            <div className={'row mx-0'} style={{
                                width: '100%'
                            }}>
                                <div className={'col-12 my-2 d-block d-md-flex align-items-center justify-content-center'}>
                                    
                                    <span className={'mtb-hp-text1 text-center text-md-start ms-0'}>
                                        The current available seats are full for this batch but don't worry we will have another batch.
                                        You may contact us to join the next batch.
                                    </span>

                                </div>
                                <div className={'col-12'}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="contactFormName">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Name
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaUserAlt />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.name} type="text" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                name: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Email
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaEnvelope />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.email} type="email" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                email: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400,
                                                
                                            }}>
                                                Message
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield align-items-start">
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'off'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.message} as={'textarea'} rows={3} onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                message: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>
                                    <div className={'d-grid d-block'}>
                                        <button className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                            fontWeight: 600,
                                            fontSize: '100%'
                                        }} onClick={() => {
                                            this.handleContactForm();
                                            this.setState({
                                                individualFullCapacityModal: false
                                            })
                                            // console.log(contactForm);
                                        }}>
                                            {this.state.messageFormBusyState ? (
                                                <div style={{
                            
                                                    width: '100%',
                                                    visibility: 'visible'
                                                }}>
                                                    <CircularProgress size={30} className={'mtb-loader'} sx={{
                                                        color: '#fff'
                                                    }} />
                                                </div>
                                            ) : (
                                                <span>Submit</span>
                                            ) }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>

                {/** Dialog/Modal for Contact Us Form (When the total number of members exceeded the current available seats) */}
                <>
                    <Dialog 
                        fullWidth={true}
                        maxWidth={'sm'}
                        open={this.state.groupFullCapacityModal}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "10px"
                            }
                        }}
                        onClose={() => {
                            this.setState({
                                groupFullCapacityModal: false
                            });
                        }}
                    >
                        <DialogContent>
                            <div className={'row mx-0'} style={{
                                width: '100%'
                            }}>
                                <div className={'col-12 my-2 d-block d-md-flex align-items-center justify-content-center'}>
                                    
                                    <span className={'mtb-hp-text1 text-center text-md-start ms-0'}>The number of your group's members exceeded the current available capacity. 
                                    You may contact us to have your group in a special batch.
                                    </span>

                                </div>
                                <div className={'col-12'}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="contactFormName">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Name
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaUserAlt />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.name} type="text" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                name: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Email
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent'
                                                }}>
                                                    <FaEnvelope />
                                                </InputGroup.Text>
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.email} type="email" onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                email: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="contactFormEmail">
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400,
                                                
                                            }}>
                                                Message
                                            </Form.Label>
                                            <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield align-items-start">
                                                <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'off'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.message} as={'textarea'} rows={3} onChange={(e) => {
                                                    // console.log(e.target.value);
                                                    this.setState({
                                                        contact: {
                                                            contactForm: {
                                                                ...contactForm,
                                                                message: e.target.value
                                                            },
                                                            contactLinks: contactLinks
                                                        }
                                                    });
                                                    
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>
                                    <div className={'d-grid d-block'}>
                                        <button className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                            fontWeight: 600,
                                            fontSize: '100%'
                                        }} onClick={() => {
                                            this.handleContactForm();
                                            this.setState({
                                                groupFullCapacityModal: false
                                            })
                                            // console.log(contactForm);
                                        }}>
                                            {this.state.messageFormBusyState ? (
                                                <div style={{
                            
                                                    width: '100%',
                                                    visibility: 'visible'
                                                }}>
                                                    <CircularProgress size={30} className={'mtb-loader'} sx={{
                                                        color: '#fff'
                                                    }} />
                                                </div>
                                            ) : (
                                                <span>Submit</span>
                                            ) }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>
                {/** Dialog/Modal for Reservation */}
                <>
                    <Dialog
                        fullWidth={true}
                        maxWidth={(this.state.selectedProductModal?.product?.minQuantity ?? 0) <= 1 ? 'sm' : 'lg'}
                        open={this.state.reservationModalOpenState}
                        onClose={() => {
                            this.setState({
                                productModalOpenState: false,
                                individualMembershipForm: {
                                    firstName: undefined,
                                    middleName: undefined,
                                    lastName: undefined,
                                    emailAddress: undefined,
                                    birthdate: null,
                                    countryCode: null,
                                    streetAddress: undefined,
                                    city: undefined,
                                    state: null,
                                    zipCode: null
                    
                                }
                            });
                        }}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "10px"
                            }
                        }}
                    >
                        <DialogContent>
                            <div className={'row mx-0'} style={{
                                width: '100%'
                            }}>
                                <div className={'col-6'}>
                                    <img src={Logo} width={'auto'} height={'40px'} />
                                </div>
                                <div className={'col-6'}></div>
                                <div className={'col-12 my-4'}>
                                    <h1 className={'mtb-hp-title'}>
                                        Reserve <span className={'mtb-text-color-primary'}>Now</span>
                                    </h1>
                                    <span className={'mtb-hp-text1'}>Reserve now and pay the remaining amount 2 weeks before the event.</span>
                                </div>
                                <Form className={'col-12 row mx-auto px-0'}>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfFirstName'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            First name
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        firstName: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfLastName'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Last name
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        lastName: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfBirthdate'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Birthdate
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-contactform-textfield">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <MobileDatePicker
                                                inputFormat={'dd/mm/yyyy'}
                                                label={'Birthdate'}
                                                value={this.state.individualMembershipForm.birthdate}
                                                onChange={(newValue) => {
                                                    // Use dd/mm/yyyy format
                                                    let formatDate = moment(newValue).format("DD/MM/YYYY");
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            birthdate: formatDate
                                                        }
                                                    });
                                                }}
                                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                                <>
                                                    <InputGroup.Text className={'border-0'} style={{
                                                        background: 'transparent',
                                                        cursor: 'pointer',
                                                        marginLeft: -20
                                                    }}>
                                                        {InputProps?.endAdornment}
                                                    </InputGroup.Text>
                                                    <Form.Control ref={inputRef} {...inputProps} autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" value={this.state.individualMembershipForm.birthdate} onChange={(e) => {
                                                        this.setState({
                                                            individualMembershipForm: {
                                                                ...this.state.individualMembershipForm,
                                                                birthdate: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </>
                                                )}
                                            />
                                        </LocalizationProvider>
                                            
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfEmail'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Email
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">
                                            <InputGroup.Text className={'border-0'} style={{
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}>
                                                <MailIcon />
                                            </InputGroup.Text>
                                            <Form.Control type={'email'} autoComplete={'on'} className={'border-0 outline-0 ps-1'} onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        emailAddress: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfCountry'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Country
                                        </Form.Label>
                                        <InputGroup className={'py-1 px-2 mtb-hp-membership-textfield'}>
                                            <InputGroup.Text className={'border-0'} style={{
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}>
                                                {this.state.individualMembershipForm.countryCode ? 
                                                <img src={"https://assets.morethanbefore.com.au/country-flags/" + this.state.individualMembershipForm.countryCode + ".svg"} width={25} height={25} />
                                                : ''}
                                            </InputGroup.Text>
                                            <Form.Control autoComplete={'on'} as={'select'} onChange={(e) => {
                                                console.log(e.target.value);
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        countryCode: e.target.value
                                                    },
                                                });
                                            }} className={'border-0 outline-0 ps-1'}>
                                                <option></option>
                                                {this.state.countries ?
                                                (this.state.countries.map((d,index) => {
                                                    const flagImage = d.code != null ? "https://assets.morethanbefore.com.au/country-flags/" + d.code.toLowerCase() + '.svg' : '';
                                                    return (
                                                        <option value={d?.code}>
                                                            
                                                            {d?.name}
                                                        </option>
                                                    );
                                                }))
                                                : ''}
                                                
                                            </Form.Control>
                                        </InputGroup>
                                        
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfCity'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            City
                                        </Form.Label>
                                        <InputGroup className="py-2 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        city: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-12'} controlId={'imfStreetAddress'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Street Address
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        streetAddress: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfState'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            State
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        state: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className={'col-12 col-sm-6'} controlId={'imfZipCode'}>
                                        <Form.Label className={'mtb-hp-text1'} style={{
                                            fontWeight: 400
                                        }}>
                                            Zip code
                                        </Form.Label>
                                        <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                            <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                this.setState({
                                                    individualMembershipForm: {
                                                        ...this.state.individualMembershipForm,
                                                        zipCode: e.target.value
                                                    }
                                                });
                                            }} />
                                        </InputGroup>
                                    </Form.Group>
                                    <div className={'mt-3 col-12 d-grid d-block'}>
                                        <button type={'button'} className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                            fontWeight: 600,
                                            fontSize: '100%'
                                        }} onClick={() => {
                                            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                            if (re.test(this.state.individualMembershipForm.emailAddress ?? "")) {
                                                // Further Validation
                                                const orderCount : number = (this.state.orderContext?.orderDetails?.length ?? 0);
                                                const minimumQuantity : number = (this.state.selectedProductModal?.product?.minQuantity ?? 0);
                                                const maximumQuantity : number = (this.state.selectedProductModal?.product?.maxQuantity ?? 0);
                                                const remainingSeats : number = (this.state.selectedProductModal?.counter?.remainingEventSeat ?? 0);
                                                
                                                // Validations
                                                let maximumQuantityValidationState : boolean = false;
                                                let minimumQuantityValidationState : boolean = false;
                                                let remainingSeatValidationState : boolean = false;
                                                
                                                if (remainingSeats >= orderCount) {
                                                    remainingSeatValidationState = true;
                                                }

                                                if (!remainingSeatValidationState) {
                                                    this.setState({
                                                        productModalOpenState: false,
                                                        individualFullCapacityModal: true
                                                    })
                                                }

                                                if (remainingSeatValidationState) {
                                                    this.setState({
                                                        paymentSelectionModal: true,
                                                        productModalOpenState: false,
                                                        orderContext: {
                                                            promoCode: this.state.selectedProductModal?.product?.promoCode,
                                                            orderDetails: [this.state.individualMembershipForm]
                                                        }
                                                    });
                                                }

                                                
                                            } else {
                                                // Invalid Email Address
                                                alert("Invalid Email Address");
                                            }
                                        }}>
                                            Proceed to Checkout
                                            <FaArrowRight style={{
                                                marginLeft: 10
                                            }} />
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </DialogContent>
                    </Dialog>
                </>

                {/** Dialog/Modal for Selected Product */}
                <>
                    <Dialog
                        fullWidth={true}
                        maxWidth={(this.state.selectedProductModal?.product?.minQuantity ?? 0) <= 1 ? 'sm' : 'lg'}
                        open={this.state.productModalOpenState}
                        onClose={() => {
                            this.setState({
                                productModalOpenState: false,
                                individualMembershipForm: {
                                    firstName: undefined,
                                    middleName: undefined,
                                    lastName: undefined,
                                    emailAddress: undefined,
                                    birthdate: null,
                                    countryCode: null,
                                    streetAddress: undefined,
                                    city: undefined,
                                    state: null,
                                    zipCode: null
                    
                                }
                            });
                        }}
                        PaperProps={{
                            style: {
                                borderRadius: 10,
                                padding: "10px"
                            }
                        }}
                    >
                        <DialogContent>
                            {(this.state.selectedProductModal?.product?.minQuantity ?? 0) <= 1 ? (
                                <div className={'row mx-0'} style={{
                                    width: '100%'
                                }}>
                                    <div className={'col-6'}>
                                        <img src={Logo} width={'auto'} height={'40px'} />
                                    </div>
                                    <div className={'col-6 text-end'}>
                                        <span onClick={() => {
                                            this.setState({
                                                productModalOpenState: false
                                            })
                                        }} style={{
                                            cursor: 'pointer'
                                        }}>
                                            <FaTimes />
                                        </span>
                                    </div>
                                    <div className={'col-12 my-4'}>
                                        <h1 className={'mtb-hp-title'}>
                                            Individual <span className={'mtb-text-color-primary'}>Membership</span>
                                        </h1>
                                        <span className={'mtb-hp-text1'}>Register to become a part of our event.</span>
                                    </div>
                                    <Form className={'col-12 row mx-auto px-0'}>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfFirstName'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                First name
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            firstName: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfLastName'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Last name
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            lastName: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfBirthdate'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Birthdate
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-contactform-textfield">
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <MobileDatePicker
                                                    inputFormat={'MM/dd/yyyy'}
                                                    label={'Birthdate'}
                                                    value={this.state.individualMembershipForm.birthdate}
                                                    onChange={(newValue) => {
                                                        // Use dd/mm/yyyy format
                                                        let formatDate = moment(newValue).format("DD/MM/YYYY");

                                                        this.setState({
                                                            individualMembershipForm: {
                                                                ...this.state.individualMembershipForm,
                                                                birthdate: formatDate
                                                            }
                                                        });
                                                    }}
                                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                                    <>
                                                        <InputGroup.Text className={'border-0'} style={{
                                                            background: 'transparent',
                                                            cursor: 'pointer',
                                                            marginLeft: -20
                                                        }}>
                                                            {InputProps?.endAdornment}
                                                        </InputGroup.Text>
                                                        <Form.Control ref={inputRef} {...inputProps} autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" value={this.state.individualMembershipForm.birthdate} onChange={(e) => {
                                                            this.setState({
                                                                individualMembershipForm: {
                                                                    ...this.state.individualMembershipForm,
                                                                    birthdate: e.target.value
                                                                }
                                                            });
                                                        }} />
                                                    </>
                                                    )}
                                                />
                                            </LocalizationProvider>
                                                
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfEmail'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Email
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent',
                                                    cursor: 'pointer'
                                                }}>
                                                    <MailIcon />
                                                </InputGroup.Text>
                                                <Form.Control type={'email'} autoComplete={'on'} className={'border-0 outline-0 ps-1'} onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            emailAddress: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfCountry'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Country
                                            </Form.Label>
                                            <InputGroup className={'py-1 px-2 mtb-hp-membership-textfield'}>
                                                <InputGroup.Text className={'border-0'} style={{
                                                    background: 'transparent',
                                                    cursor: 'pointer'
                                                }}>
                                                    {this.state.individualMembershipForm.countryCode ? 
                                                    <img src={"https://assets.morethanbefore.com.au/country-flags/" + this.state.individualMembershipForm.countryCode + ".svg"} width={25} height={25} />
                                                    : ''}
                                                </InputGroup.Text>
                                                <Form.Control autoComplete={'on'} as={'select'} onChange={(e) => {
                                                    console.log(e.target.value);
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            countryCode: e.target.value
                                                        },
                                                    });
                                                }} className={'border-0 outline-0 ps-1'}>
                                                    <option></option>
                                                    {this.state.countries ?
                                                    (this.state.countries.map((d,index) => {
                                                        const flagImage = d.code != null ? "https://assets.morethanbefore.com.au/country-flags/" + d.code.toLowerCase() + '.svg' : '';
                                                        return (
                                                            <option value={d?.code}>
                                                                
                                                                {d?.name}
                                                            </option>
                                                        );
                                                    }))
                                                    : ''}
                                                    
                                                </Form.Control>
                                            </InputGroup>
                                            
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfCity'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                City
                                            </Form.Label>
                                            <InputGroup className="py-2 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            city: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-12'} controlId={'imfStreetAddress'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Street Address
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            streetAddress: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfState'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                State
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            state: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className={'col-12 col-sm-6'} controlId={'imfZipCode'}>
                                            <Form.Label className={'mtb-hp-text1'} style={{
                                                fontWeight: 400
                                            }}>
                                                Zip code
                                            </Form.Label>
                                            <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                    this.setState({
                                                        individualMembershipForm: {
                                                            ...this.state.individualMembershipForm,
                                                            zipCode: e.target.value
                                                        }
                                                    });
                                                }} />
                                            </InputGroup>
                                        </Form.Group>
                                        <div className={'mt-3 col-12 d-grid d-block'}>
                                            <button type={'button'} className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                                fontWeight: 600,
                                                fontSize: '100%'
                                            }} onClick={() => {
                                                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                if (re.test(this.state.individualMembershipForm.emailAddress ?? "")) {
                                                    // Further Validation
                                                    const orderCount : number = (this.state.orderContext?.orderDetails?.length ?? 0);
                                                    const minimumQuantity : number = (this.state.selectedProductModal?.product?.minQuantity ?? 0);
                                                    const maximumQuantity : number = (this.state.selectedProductModal?.product?.maxQuantity ?? 0);
                                                    const remainingSeats : number = (this.state.selectedProductModal?.counter?.remainingEventSeat ?? 0);
                                                    
                                                    // Validations
                                                    let maximumQuantityValidationState : boolean = false;
                                                    let minimumQuantityValidationState : boolean = false;
                                                    let remainingSeatValidationState : boolean = false;

                                                    if (remainingSeats >= orderCount) {
                                                        remainingSeatValidationState = true;
                                                    }

                                                    if (!remainingSeatValidationState) {
                                                        this.setState({
                                                            productModalOpenState: false,
                                                            individualFullCapacityModal: true
                                                        })
                                                    }

                                                    if (remainingSeatValidationState) {
                                                        this.setState({
                                                            paymentSelectionModal: true,
                                                            productModalOpenState: false,
                                                            orderContext: {
                                                                promoCode: this.state.selectedProductModal?.product?.promoCode,
                                                                orderDetails: [this.state.individualMembershipForm]
                                                            }
                                                        });
                                                    }
                                                    
                                                } else {
                                                    // Invalid Email Address
                                                    alert("Invalid Email Address");
                                                }
                                            }}>
                                                Proceed to Checkout
                                                <FaArrowRight style={{
                                                    marginLeft: 10
                                                }} />
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            ) : (
                                <div className={'row mx-0 d-flex align-items-start'} style={{
                                    width: '100%'
                                }}>
                                    <div className={'col-12 col-md-6 row mx-0 px-0'}>
                                        <div className={'col-6'}>
                                            <img src={Logo} width={'auto'} height={'40px'} />
                                        </div>
                                        <div className={'col-6'}></div>
                                        <div className={'col-12 my-4'}>
                                            <h1 className={'mtb-hp-title'}>
                                                Group <span className={'mtb-text-color-primary'}>Membership</span>
                                            </h1>
                                            <span className={'mtb-hp-text1'}>Register to become a part of our event.</span>
                                            
                                        </div>
                                        <Form className={'col-12 row mx-auto px-0'}>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfFirstName'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    First name
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                firstName: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfLastName'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Last name
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                lastName: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfBirthdate'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Birthdate
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-contactform-textfield">
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <MobileDatePicker
                                                        inputFormat={'MM/dd/yyyy'}
                                                        label={'Birthdate'}
                                                        value={this.state.groupMembershipForm.birthdate}
                                                        onChange={(newValue) => {
                                                            // Use dd/mm/yyyy format
                                                            let formatDate = moment(newValue).format("DD/MM/YYYY");
                                                            
                                                            this.setState({
                                                                groupMembershipForm: {
                                                                    ...this.state.groupMembershipForm,
                                                                    birthdate: formatDate
                                                                }
                                                            });
                                                        }}
                                                        renderInput={({ inputRef, inputProps, InputProps }) => (
                                                        <>
                                                            <InputGroup.Text className={'border-0'} style={{
                                                                background: 'transparent',
                                                                cursor: 'pointer',
                                                                marginLeft: -20
                                                            }}>
                                                                {InputProps?.endAdornment}
                                                            </InputGroup.Text>
                                                            <Form.Control ref={inputRef} {...inputProps} autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" value={this.state.groupMembershipForm.birthdate} onChange={(e) => {
                                                                this.setState({
                                                                    groupMembershipForm: {
                                                                        ...this.state.groupMembershipForm,
                                                                        birthdate: e.target.value
                                                                    }
                                                                });
                                                            }} />
                                                        </>
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                                    
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfEmail'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Email
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">
                                                    <InputGroup.Text className={'border-0'} style={{
                                                        background: 'transparent',
                                                        cursor: 'pointer'
                                                    }}>
                                                        <MailIcon />
                                                    </InputGroup.Text>
                                                    <Form.Control type={'email'} autoComplete={'on'} className={'border-0 outline-0 ps-1'} onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                emailAddress: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfCountry'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Country
                                                </Form.Label>
                                                <InputGroup className={'py-1 px-2 mtb-hp-membership-textfield'}>
                                                    <InputGroup.Text className={'border-0'} style={{
                                                        background: 'transparent',
                                                        cursor: 'pointer'
                                                    }}>
                                                        {this.state.groupMembershipForm.countryCode ? 
                                                        <img src={"https://assets.morethanbefore.com.au/country-flags/" + this.state.individualMembershipForm.countryCode + ".svg"} width={25} height={25} />
                                                        : ''}
                                                    </InputGroup.Text>
                                                    <Form.Control autoComplete={'on'} as={'select'} onChange={(e) => {
                                                        console.log(e.target.value);
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                countryCode: e.target.value
                                                            },
                                                        });
                                                    }} className={'border-0 outline-0 ps-1'}>
                                                        <option></option>
                                                        {this.state.countries ?
                                                        (this.state.countries.map((d,index) => {
                                                            const flagImage = d.code != null ? "https://assets.morethanbefore.com.au/country-flags/" + d.code.toLowerCase() + '.svg' : '';
                                                            return (
                                                                <option value={d?.code}>
                                                                    
                                                                    {d?.name}
                                                                </option>
                                                            );
                                                        }))
                                                        : ''}
                                                        
                                                    </Form.Control>
                                                </InputGroup>
                                                
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfCity'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    City
                                                </Form.Label>
                                                <InputGroup className="py-2 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                city: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-12'} controlId={'imfStreetAddress'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Street Address
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                streetAddress: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfState'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    State
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                state: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className={'col-12 col-sm-6'} controlId={'imfZipCode'}>
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Zip code
                                                </Form.Label>
                                                <InputGroup className="py-1 px-2 mtb-hp-membership-textfield">

                                                    <Form.Control autoComplete={'on'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
                                                        this.setState({
                                                            groupMembershipForm: {
                                                                ...this.state.groupMembershipForm,
                                                                zipCode: e.target.value
                                                            }
                                                        });
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                            <div className={'mt-3 col-12 d-grid d-block'}>
                                                <button type={'button'} className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                                    fontWeight: 600,
                                                    fontSize: '100%'
                                                }} onClick={() => {
                                                    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                    
                                                    

                                                    if (re.test(this.state.groupMembershipForm.emailAddress ?? "")) {
                                                        if (this.handleCheckEmailDuplicate(this.state.groupMembershipForm.emailAddress ?? "")) {
                                                            alert("Email " + this.state.groupMembershipForm.emailAddress + " had already exist.");
                                                        } else {
                                                            console.log("Email ok");
                                                            this.setState(prevState => ({
                                                                orderContext: {
                                                                    promoCode: this.state.selectedProductModal?.product?.promoCode,
                                                                    orderDetails: [...(prevState.orderContext?.orderDetails ?? []), this.state.groupMembershipForm]
                                                                }
                                                            }));
                                                        }
                                                        
                                                       

                                                    } else {
                                                        // Invalid Email Address
                                                        alert("Invalid Email Address");
                                                    }
                                                }}>
                                                    Add Member
                                                    <FaPlus style={{
                                                        marginLeft: 10
                                                    }} />
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className={'col-12 col-md-6 row mx-0 px-0 d-flex align-items-start'}>
                                        <div className={'col-6 my-3'}></div>
                                        <div className={'col-6 my-3 text-end'}>
                                            <span onClick={() => {
                                                this.setState({
                                                    productModalOpenState: false
                                                })
                                            }} style={{
                                                cursor: 'pointer'
                                            }}>
                                                <FaTimes />
                                            </span>
                                        </div>
                                        <div className={'col-12 my-4'}>
                                            <h1 className={'mtb-hp-title'}>
                                                Group <span className={'mtb-text-color-primary'}>Members</span>
                                                
                                            </h1>
                                        </div>

                                        <div className={'col-12 my-0'}>
                                                {(this.state.orderContext?.orderDetails !== null ?
                                                (<ul className="list-group list-group-flush">
                                                    {this.state.orderContext?.orderDetails?.map((data, idx) => {
                                                        const index_nbr = idx + 1;
                                                        console.log(index_nbr);
                                                        console.log(this.state.orderContext);
                                                        return (data?.emailAddress !== undefined ? (
                                                            <li className="list-group-item d-block d-md-flex justify-content-between align-items-center">
                                                                <div className="ms-0">
                                                                    <div className="mtb-cartordergroup-text-title" style={{
                                                                        fontSize: '90%'
                                                                    }}>
                                                                        #{index_nbr}
                                                                    </div>
                                                                </div>
                                                                <div className="ms-0 ms-md-3">
                                                                    <div className="mtb-cartordergroup-text-title">
                                                                        {data?.firstName} {data?.lastName}
                                                                    </div>
                                                                    <span className={'mtb-cartordergroup-text-sub'}>Member</span>
                                                                </div>
                                                                <div className="ms-0 ms-md-3 me-auto">
                                                                    <div className="mtb-cartordergroup-text-title">
                                                                        {data?.emailAddress}
                                                                    </div>
                                                                    <span className={'mtb-cartordergroup-text-sub'}>Email Address</span>
                                                                </div>
                                                                <span onClick={() => {
                                                                    if ((this.state.orderContext?.orderDetails?.length ?? 0) >= 2) {
                                                                        if (idx !== -1) {
                                                                            let orderArray = (this.state.orderContext?.orderDetails ?? []);
                                                                            orderArray.splice(idx, 1);
                                                                            this.setState({
                                                                                orderContext: {
                                                                                    promoCode: this.state.selectedProductModal?.product?.promoCode,
                                                                                    orderDetails: orderArray
                                                                                }
                                                                            });
                                                                        }
                                                                        
                                                                    } else {
                                                                        this.setState({
                                                                            orderContext: {
                                                                                promoCode: this.state.selectedProductModal?.product?.promoCode,
                                                                                orderDetails: []
                                                                            }
                                                                        });
                                                                    }
                                                                    
                                                                }} style={{
                                                                    cursor: 'pointer',
                                                                    color: '#F24F37'
                                                                }}>
                                                                    <FaTrashAlt />
                                                                </span>
                                                            </li>
                                                        ) : '');
                                                    })}
                                                </ul>)
                                                :
                                                '')}

                                                {(this.state.orderContext?.orderDetails?.length == 0 ? (<span className={'mtb-cartordergroup-text-sub'}>No added members.</span>) : 
                                                (
                                                    <>
                                                        <div className={'d-grid d-block mt-3'}>
                                                            <button type={'button'} onClick={() => {
                                                                console.log(this.state.selectedProductModal);
                                                                console.log(this.state.orderContext?.orderDetails?.length ?? 0);
                                                                console.log((this.state.selectedProductModal?.product?.minQuantity ?? 0));

                                                                console.log(this.state.orderContext?.orderDetails);

                                                                const orderCount : number = (this.state.orderContext?.orderDetails?.length ?? 0);
                                                                const minimumQuantity : number = (this.state.selectedProductModal?.product?.minQuantity ?? 0);
                                                                const maximumQuantity : number = (this.state.selectedProductModal?.product?.maxQuantity ?? 0);
                                                                const remainingSeats : number = (this.state.selectedProductModal?.counter?.remainingEventSeat ?? 0);
                                                                
                                                                // Validations
                                                                let maximumQuantityValidationState : boolean = false;
                                                                let minimumQuantityValidationState : boolean = false;
                                                                let remainingSeatValidationState : boolean = false;
                                                                
                                                                // If maximum count is greater than or equal to 1 then further check the orderCount and maximumQuantity.
                                                                // Else (0) no maximum count set.
                                                                if (maximumQuantity >= 1) {
                                                                    // Check order count
                                                                    if (orderCount <= maximumQuantity) {
                                                                        maximumQuantityValidationState = true;
                                                                    }
                                                                } else {
                                                                    maximumQuantityValidationState = true;
                                                                }
                                                                
                                                                // If minimum count is greater than or equal to 1 then further check the orderCount and minimumQuantity.
                                                                // Else (0) no minimum count set.
                                                                if (minimumQuantity >= 1) {
                                                                    if (orderCount >= minimumQuantity) {
                                                                        minimumQuantityValidationState = true;
                                                                    }
                                                                } else {
                                                                    minimumQuantityValidationState = true;
                                                                }

                                                                if (remainingSeats >= orderCount) {
                                                                    remainingSeatValidationState = true;
                                                                }

                                                                if (!minimumQuantityValidationState) {
                                                                    alert("Minimum number of members was not met.")
                                                                }

                                                                if (!maximumQuantityValidationState) {
                                                                    alert("Maximum number of members exceeded the set limit.");
                                                                }

                                                                if (!remainingSeatValidationState) {
                                                                    this.setState({
                                                                        productModalOpenState: false,
                                                                        groupFullCapacityModal: true
                                                                    })
                                                                }
                                                                
                                                                if (minimumQuantityValidationState && maximumQuantityValidationState && remainingSeatValidationState) {
                                                                    this.setState({
                                                                        paymentSelectionModal: true,
                                                                        productModalOpenState: false
                                                                    });
                                                                }
                                                                
                                                            }} disabled={
                                                                (this.state.orderContext?.orderDetails?.length ?? 0) >= (this.state.selectedProductModal?.product?.minQuantity ?? 0) 
                                                                ? false : true
                                                                } className={'btn mtb-button-outline mtb-button-border-radius py-3'} style={{
                                                                fontWeight: 600
                                                            }}>
                                                                Proceed to checkout
                                                                <FaArrowRight className={'ms-2'} />
                                                            </button>
                                                        </div>
                                                    </>
                                                ))}
                                                
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </>
                <div className={'masthead position-absolute pt-3 pt-md-4 mt-2'}>
                    <div className={'container'}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <div className={'logo'}>
                                <div className={'logoInner'}>
                                    <img className={'logoImage'} src={Logo} height={55} width={'auto'} />
                                    {/* <span className={'logoText d-none d-md-inline'}>mtb</span> */}
                                </div>
                                
                            </div>
                            <div className={'navWrapper text-right navbar navbar-expand-lg'}>
                                <div className={'mtb-nav navbar-nav ms-auto flex-nowrap d-none d-lg-flex'}>
                                    <Link className="btn nav-link" to={'mtb-hp-educatorsmessage'} smooth={false} duration={300}>
                                        About
                                    </Link>
                                    
                                    <Link className="btn nav-link" to={'mtb-hp-eventdetails'} smooth={true} duration={300}>
                                        Event Details
                                    </Link>
                                    <Link className="btn nav-link" to={'mtb-hp-faq'} smooth={true} duration={300}>
                                        FAQ
                                    </Link>
                                    <Link className="btn nav-link" to={'mtb-hp-contactform'} smooth={true} duration={300}>
                                        Contact
                                    </Link>
                                    
                                    <Link to={'mtb-hp-pricing'} smooth={true} duration={300} className="btn mtb-button px-4 ms-3 d-flex align-items-center shadow" style={{
                                        borderRadius: 8
                                    }}>
                                        <span style={{
                                            fontSize: '90%',
                                            fontWeight:500
                                        }}>
                                            Register
                                        </span>
                                    </Link>
                                </div>

                                <div className={'mtb-nav navbar-nav ms-auto flex-nowrap d-flex d-lg-none'}>
                                    <button onClick={() => {
                                        this.setState({
                                            sidenavExpand: true
                                        });
                                    }} className={'btn'}>
                                        <FaBars style={{
                                            fontSize: '150%'
                                        }} />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className={'mtb-drawer'} >
                    <Drawer

                        variant={'persistent'}
                        anchor={'right'}
                        open={sidenavExpand}
                        onClose={() => {
                            this.setState({
                                sidenavExpand: false
                            });
                        }}
                        
                    >
                        <div className={'mtb-drawer-inner px-4 py-4'}>
                            <ul className={'list-group list-group-flush text-start'}>
                                <li className={'mtb-nav list-group-item text-start border-0 ps-1 px-0 py-0'}>
                                    <button onClick={() => {
                                        this.setState({
                                            sidenavExpand: false
                                        });
                                    }} className={'btn'}>
                                        <FaTimes style={{
                                            fontSize: '150%',
                                            color: '#01376'
                                        }} />
                                    </button>
                                </li>
                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" spy={true} to={'mtb-hp-educatorsmessage'}>
                                        About
                                    </Link>
                                    
                                </li>

                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" spy={true} to={'mtb-hp-eventdetails'}>
                                        Event Details
                                    </Link>
                                    
                                </li>
                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" spy={true} to={'mtb-hp-faq'}>
                                        FAQ
                                    </Link>
                                    
                                </li>

                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" to={'mtb-hp-contactform'}>
                                        Contact
                                    </Link>
                                    
                                </li>
                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start d-grid d-block" spy={true} to={'mtb-hp-pricing'}>
                                        <button className="btn mtb-button mtb-button-border-radius px-4">
                                            <span style={{
                                                fontSize: '90%',
                                                fontWeight:500
                                            }}>
                                                Register
                                            </span>
                                        </button>
                                    </Link>
                                    
                                </li>

                            </ul>
                        </div>
                        
                    </Drawer>
                </div>
            
                <div className={'mtb-hp-hero pt-4 pt-md-4 pt-lg-0 pb-4'}>
                    <div className={'container mt-4 mt-md-4 mt-lg-0'}>
                        <div className={'row d-flex align-items-center mt-0 mt-md-5 mb-5 mb-md-0 pb-5 pb-md-0'}>
                            <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-1 pt-5 pt-lg-1 pt-sm-5'}>
                                
                                <h1 className={'mt-1 mtb-hp-hero-title'} style={{
                                    
                                }}>
                                <span className={'mtb-text-color-primary'}>More than Before</span> : Real Life Financial Education for Year 12 Leavers
                                </h1>
                                <p className={'mt-1 mtb-hp-text1'}>
                                    "A fun and practical small group learning experience."
                                </p>
                                <div className={'d-grid gap-2 d-block d-lg-inline-block mt-4'}>
                                    
                                    <Link to={'mtb-hp-educatorsmessage'} className="btn mtb-button mtb-button-border-radius px-5 py-3" style={{
                                            fontWeight: 'bold',
                                            
                                        }}>
                                        <span style={{
                                            fontSize: '90%',
                                            fontWeight: 600
                                        }}>
                                            Learn more
                                        </span>
                                    </Link>

                                    
                                    <Link to={'mtb-hp-contactform'} className="btn mtb-button mtb-button-outline mtb-button-border-radius px-5 py-3 ms-0 ms-md-2" style={{
                                        fontWeight: 'bold',
                                        
                                    }}>
                                        <span style={{
                                            fontSize: '90%',
                                            fontWeight: 600
                                        }}>
                                            Contact Us
                                        </span>
                                    
                                    </Link>
                                </div>
                                
                                
                                
                            </div>
                            <div className={'col-12 col-lg-6 col-md-12 col-sm-12 py-3'}>
                                <img src={HeroImage} height={'auto%'} width={'100%'}/>
                            </div>
                        </div>
                        <div className={'d-block'} style={{
                            marginTop: '-5em',
                            paddingBottom: '3em'
                        }}>
                            <img style={{
                                display: 'inline',
                                height: 30,
                                width: 'auto',
                                marginRight: 5
                            }} src={MouseDownIcon} />
                            <span style={{
                                fontFamily: 'Poppins',
                                fontSize: '80%',
                                fontWeight: 600,
                                display: 'inline-block',
                                color: '#013763'
                                
                            }}>
                                Scroll down below
                            </span>
                        </div>
                        
                    </div>
                    
                </div>
                
                {/*
                <div className={'mtb-hp-featuredbrands'}>
                    <div className={'container'}>
                        <div className={'row gutter-3 gy-4 gx-5 py-4 d-flex align-items-center justify-content-center justify-content-md-between'}>
                        {featuredBrands.map((d) => {
                            return (
                                <div className={'col-lg-auto col-md-auto col-sm-6 col-auto text-center ' + 'text-md-' + (d?.align ?? 'left')} style={{
                                        
                                }}>
                                    <img src={d?.imageContext} height={d?.height ?? 40} width={d?.width ?? 'auto'} />
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
                */}

                <div className={'mtb-main-content'}>
                    <Element name={'mtb-hp-educatorsmessage'}>
                    <section id={'mtb-hp-educatorsmessage'} className={'py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-3 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12'}>
                                    
                                    
                                    <ReactPlayer playing={false} light={false} url={"https://assets.morethanbefore.com.au/media/mtb-julius-rev1.m4v"} width="100%" height="auto" controls={true} />
                                    
                                    {/* <img src={EducatorsPic} width={'100%'} height={'100%'} /> */}
                                </div>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            Educator's Message
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Hi, I am <span className={'mtb-text-color-primary'}>Julius</span>
                                        </h1>
                                        <p className={'mtb-hp-paragraph'}>
                                        Julius Owusu is a passionate Financial Coach that used to work with one of the biggest banks in Australia as a Web Engineer. However, after a series of events in Julius' life, he found himself that his true calling was in Finance. Teaching young people how to become money smart.
                                        </p>

                                        <p className={'mtb-hp-paragraph'}>
                                        Julius understands that working hard is good but working smart is better. And believe it or not, understanding money and learning how to get it to work for you is a crucial first step to financial independence.
                                        </p>

                                        <p className={'mtb-hp-paragraph'}>
                                        And so, through the More Than Before program, it is designed to help parents and their kids create a legacy for the generations that will follow them. A treasure that can build them a generational and purposeful wealth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-aboutus'}>
                    <section id={'mtb-hp-aboutus'} className={'mtb-hp-wrapper-bg-alt mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-3 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 px-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            Who we are
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            About <span className={'mtb-text-color-primary'}>Us</span>
                                        </h1>
                                        <p className={'mtb-hp-paragraph'}>
                                            "More Than Before" is the leading project to come out of Purpose Advisory's Educational Launchpad. Purpose Advisory, an Australian financial advice and life coaching business partnered with Julius Owusu, founder of MTB, to help change the experience school leavers have of entering the workforce, and to help more people live and achieve the fulfilled life.
                                        </p>
                                        <div className={'d-block'}>
                                            <div className={'d-inline-block'}>
                                                <span className={'me-4'}><img src={PALogo} width="auto" height="50px" /></span>
                                                <span><img src={PAAcademyLogo} width="auto" height="80px" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 text-center mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                    <img src={AboutUsImage} height={'100%'} width={'100%'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Element>

                    <Element name={'mtb-hp-vision'}>
                    <section id={'mtb-hp-vision'} className={'mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 text-center mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 650,
                                        alignItems: 'center'
                                    }}>
                                    <img src={VisionMissionImage} height={'100%'} width={'100%'} />
                                    </div>
                                </div>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 px-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            What we Aim
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Our <span className={'mtb-text-color-primary'}>Vision</span> & <span className={'mtb-text-color-primary'}>Mission</span>
                                        </h1>
                                        <p className={'mtb-hp-paragraph'}>
                                            “We find people who are passionate about teaching and we empower them to do it.”
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            We aim to provide support and knowledge to teach our teens the additional neccessary skills that they needed to identify their direction in life, and wealth building with the goal of them succeeding in their career and relationships.
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            This will equip our teens and young adults to be more capable, creating generational change. As a result, we will see Australia become a more free, empowered, health and prosperous nation.
                                        </p>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-whyus'}>
                    <section id={'mtb-hp-whyus'} className={'mtb-hp-wrapper-bg-alt mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'left'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            Why Choose Us
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Why <span className={'mtb-text-color-primary'}>More than Before</span>
                                        </h1>
                                        <p className={'mtb-hp-paragraph'}>
                                            For parents with teens who have big dreams, goal-driven, and determined then, More than Before can help your child to guide them achieve their goals by learning how to properly leverage their tools such as knowledge and skills to obtain freedom and financial independence they desire.
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 px-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'left'
                                    }}>
                                        <div className={'row mx-auto d-flex gy-5 align-items-top justify-content-start'}>
                                            {whyChooseUs.map((d) => {
                                                return (<div className={'col-12 col-md-6 col-sm-auto px-0'}>
                                                    <div style={{
                                                        maxWidth: 220
                                                    }}>
                                                        <div className={'mb-3'} style={{
                                                            maxWidth: 60,
                                                            maxHeight: 60,
                                                            padding: 13,
                                                            background: "rgba(248, 92, 73, 0.10)",
                                                            borderRadius: 20
                                                        }}>
                                                            <img src={d?.imageContext} width={'100%'} height={'100%'} />
                                                        </div>
                                                        <h1 className={'mb-2'} style={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '110%',
                                                            fontWeight: 600,
                                                            color:'#013763'
                                                        }}>{d?.title}</h1>
                                                        <p style={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '100%',
                                                            fontWeight: 500,
                                                            color:'#93ACC1'
                                                        }}>{d?.description}</p>
                                                    </div>
                                                </div>)
                                            })}
                                            
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-eventdetails'}>
                    <section id={'mtb-hp-eventdetails'} className={'mt-0 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 400,
                                        alignItems: 'center'
                                    }}>
                                    <img src={EventDetailsImage1} height={'100%'} width={'100%'} />
                                    </div>
                                </div>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            About the Event
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Event <span className={'mtb-text-color-primary'}>Details</span>
                                        </h1>
                                        <p className={'mtb-hp-paragraph fst-italic'}>
                                            "Wealth is not dependent on "good grades" - you don't need good grades to become wealthy."
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            The More than Before Event is a 6-week program that starts on the 11th of January 2022 until the 15th of February 2022.
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            Participants will meet with our Facilitators once every week throughout the program duration.
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            The event will be delivered via Zoom, plus our students will receive "Welcome Kits" plus exclusive access to our community for continuous support of their growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'row mt-3 gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <p className={'mtb-hp-paragraph'}>
                                        And by the end of the program, our graduates are expected to develop the following learning goals:
                                        </p>

                                        <ul className={'list-group list-group-flush'}>
                                            {learningGoals.map((d) => {
                                                return (
                                                    <li className={'list-group-item border-0 ps-0 d-flex justify-content-start align-items-center'}>
                                                        <div style={{
                                                            maxWidth: 40,
                                                            marginRight: 20
                                                        }}>
                                                            <img style={{
                                                                display: 'inline-block'
                                                            }} src={EventGoalCheckIcon} width={'25px'} height={'25px'} />
                                                        </div>
                                                        
                                                        <div style={{
                                                            float: 'left'
                                                        }}>
                                                            <span style={{
                                                                fontFamily: 'Poppins',
                                                                fontSize: '100%',
                                                                fontWeight: 600,
                                                                display: 'inline-block',
                                                                color: '#013763',
                                                                lineHeight: '170%'
                                                            }}>
                                                                {d.text ?? ''}
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                            
                                            
                                        </ul>

                                    </div>
                                </div>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mx-auto'}>
                                    <div className={'mx-auto'} style={{
                                        maxWidth: 400,
                                        alignItems: 'center'
                                    }}>
                                    <img src={EventDetailsImage2} height={'100%'} width={'100%'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-eventtimeline'}>
                    <section id={'mtp-hp-eventtimeline'} className={'mtb-hp-wrapper-bg-alt mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                 <div className={'mx-auto text-center'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            What to Expect
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Event <span className={'mtb-text-color-primary'}>Timeline</span>
                                        </h1>
                                </div>

                            </div>
                            <div className={'mx-auto mt-5'}>
                                <Timeline className={'px-0'} position="alternate">
                                    {eventTimeline.map((d, index) => {
                                        let idx = index+1;
                                        const isItEven = isEven(idx);
                                        const currentDate = moment().format('ll');
                                        const dateParsed = moment(d?.date?.start).format('ll');

                                        var previousDate = (index == 0 ? null : eventTimeline[index-1]);
                                        const dateDifference = moment(d?.date?.start).diff(currentDate, 'days');
                                        const dateDifferencePrev = moment(previousDate?.date?.start).diff(currentDate, 'days');

                                        // With end date
                                        const withEndDateFinalString = moment(d?.date?.start).format('MMM DD') + ' to ' + moment(d?.date?.end).format('MMM DD, YYYY');
                                        const isLastItem = () => {
                                            if (eventTimeline.length == idx) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        } 

                                        /*
                                        // Disable this when not debugging.
                                        console.log(dateParsed);
                                        console.log(currentDate);
                                        console.log(dateDifference);
                                        console.log('previous');
                                        console.log(dateDifferencePrev);
                                        console.log(isEven(idx) + ' ' + idx);
                                        */

                                        return (
                                            <TimelineItem>
                                                    <TimelineOppositeContent 
                                                        sx={{ m: 'auto 0' }}
                                                        align="right"
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        <span style={{
                                                            fontSize: '90%',
                                                            fontWeight: 600
                                                        }} className={'mtb-hp-text1 ' + (!isItEven ? 'text-end' : 'text-start')}>
                                                            {d?.week}
                                                        </span>
                                                        <span style={{
                                                            fontFamily: 'Poppins',
                                                            fontSize: '100%',
                                                            fontWeight: 'bold',
                                                            color: '#013763',
                                                            display: 'block'
                                                        }} className={(!isItEven ? 'text-end' : 'text-start')}>
                                                            {(d?.date?.end != null ? withEndDateFinalString : dateParsed)}
                                                        </span>
                                                    </TimelineOppositeContent>
                                                    <TimelineSeparator sx={{
                                                        alignItems: 'center'
                                                    }}>
                                                        <TimelineConnector sx={{
                                                            visibility: (idx == 1 ? 'hidden' : 'visible'),
                                                            width: 0,
                                                            background: 'transparent',
                                                            borderRight: '3px dotted ' + (dateDifference > 0 ? (dateDifferencePrev <=-1 ? '#EF492E' : '#93ACC1') : '#EF492E')

                                                        }} />
                                                        <TimelineDot variant={'outlined'} sx={{
                                                            padding: (dateDifference >= 0 ? (dateDifference == 0 ? '4px' : '3px') : '4px'),
                                                            borderWidth: (dateDifference >= 0 ? (dateDifference == 0 ? 3.5 : 2) : 3.5),
                                                            borderColor: (dateDifference >= 0 ? (dateDifference == 0 ? '#EF492E' : '#93ACC1') : '#EF492E'),
                                                            backgroundColor: (dateDifference >= 0 ? (dateDifference == 0 ? '#fff' : 'transparent') : '#fff')
                                                        }} />
                                                        
                                                        <TimelineConnector sx={{
                                                            visibility: (isLastItem() ? 'hidden' : 'visible'),
                                                            width: 0,
                                                            background: 'transparent',
                                                            borderRight: '3px dotted ' + (dateDifference >= 0 ? '#93ACC1' : '#EF492E')
                                                        }} />
                                                    </TimelineSeparator>
                                                    <TimelineContent>
                                                        <div className={(!isItEven ? 'mtb-hp-eventtimeline-card shadow' : 'mtb-hp-eventtimeline-card-alternate shadow')}>
                                                            <div className={'d-flex ' + (!isItEven ? 'justify-content-start' : 'justify-content-end')}>
                                                                <div className={'mb-2 mtb-hp-eventtimeline-icon d-flex align-items-center'}>
                                                                    <img src={d?.icon ?? EventTimelineMoneyIcon} height={'100%'} width={'100%'} />
                                                                </div>
                                                            </div>
                                                            <span style={{
                                                                fontFamily: 'Poppins',
                                                                fontSize: '100%',
                                                                fontWeight: 600,
                                                                color: (!isItEven ? '#ffffff' : '#013763'),
                                                                display: 'block'
                                                            }} className={(!isItEven ? 'text-start' : 'text-end')}>
                                                                {d?.title}
                                                            </span>
                                                            <p style={{
                                                                fontFamily: 'Poppins',
                                                                fontSize: '80%',
                                                                fontWeight: 400,
                                                                color: (!isItEven ? '#ffffff' : '#93ACC1'),
                                                                display: 'block'
                                                            }} className={'mb-0 ' + (!isItEven ? 'text-start' : 'text-end')}>
                                                                {d?.paragraph}
                                                            </p>
                                                        </div>
                                                    </TimelineContent>
                                                </TimelineItem>
                                        )

                                        
                                    })}
                                    

                                    

                                    
                                </Timeline>
                                
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    
                    <section id={'mtb-hp-pricing'} className={'mt-0 py-5'}>
                        <div className={'container py-5'}>
                                <Element name={'mtb-hp-pricing'}>
                                <div className={'d-flex align-items-center justify-content-center'}>
                                    <div className={'mx-auto text-center'} style={{
                                            maxWidth: 515,
                                            alignItems: 'center'
                                        }}>
                                            <span className={'mtb-hp-text1 mb-2'}>
                                                Choose your Package
                                            </span>
                                            <h1 className={'mtb-hp-title'}>
                                                Our <span className={'mtb-text-color-primary'}>Pricing</span>
                                            </h1>
                                    </div>

                                </div>
                                </Element>
                                <div className={'row mt-5 d-flex gx-5 align-items-center justify-content-center mx-auto'}>
                                    <div className={'col-auto px-4'} onClick={() => {
                                        this.setState({tabPricingActive: 1});
                                    }}>
                                        <span className={'mtb-hp-tab-title ' + (tabPricingActive == 1 ? 'mtb-hp-tab-title-active' : 'mtb-hp-tab-title-nonactive')} style={{
                                            fontSize: '120%',
                                            fontWeight: 600,
                                            position: 'relative'
                                        }}>
                                            Individual
                                        </span>
                                    </div>
                                    <div className={'col-auto px-4'} onClick={() => {
                                        this.setState({tabPricingActive: 2});
                                    }}>
                                        <span className={'mtb-hp-tab-title ' + (tabPricingActive == 2 ? 'mtb-hp-tab-title-active' : 'mtb-hp-tab-title-nonactive')} style={{
                                            fontSize: '120%',
                                            fontWeight: 600
                                        }}>
                                            For groups
                                        </span>
                                    </div>
                                </div>

                                <div ref={this.pricingTableContainer} className={'mx-auto mt-5'}></div>
                            
                                {(tabPricingActive == 1 ? <Portal container={this.pricingTableContainer.current}>
                                    <div className={'row d-flex justify-content-center gx-5 gy-5'}>
                                        {(productsFromDb ?
                                        (productsFromDb.individual?.map((d, index) => {
                                            const promoDateValid = d?.validation?.promoDates ?? false;
                                            
                                            return (
                                            <div className={'col-auto'}>
                                                <div style={{
                                                    borderRadius: 20
                                                }} className={'shadow mtb-hp-pricingcard ' + (promoDateValid ? 'mtb-hp-pricingcard-highlighted' : '')}>
                                                    <span style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '130%',
                                                        fontWeight: 500,
                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                        display: 'block'
                                                    }} className={'text-center mb-3'}>
                                                        {d?.product?.prodName}
                                                    </span>
                                                    <span style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '220%',
                                                        fontWeight: 600,
                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                        display: 'block'
                                                    }} className={'text-center'}>
                                                        ${(d?.product?.price?.unitCost ?? 0).toFixed(2)}
                                                    </span>

                                                    {fixedDataProductfeatures ? 
                                                    (<ul className={'list-group list-group-flush mt-4 mb-4'}>
                                                        {fixedDataProductfeatures.map((f, i) => {
                                                            return (<li style={{
                                                                background: 'transparent'
                                                            }} className={'list-group-item border-0 ps-0 d-flex justify-content-start align-items-center'}>
                                                                <div style={{
                                                                    marginRight: 10
                                                                }}>
                                                                    <FaCheck style={{
                                                                        fontSize: 25,
                                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#37D451') : '#37D451')
                                                                    }} />
                                                                </div>
                                                                
                                                                <div style={{
                                                                    float: 'left'
                                                                }}>
                                                                    <span style={{
                                                                        fontFamily: 'Poppins',
                                                                        fontSize: '90%',
                                                                        fontWeight: 600,
                                                                        display: 'inline-block',
                                                                        color: (promoDateValid? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                                        lineHeight: '170%'
                                                                    }}>
                                                                        {f?.text}
                                                                    </span>
                                                                </div>
                                                            </li>)
                                                        })}
                                                    </ul>)
                                                    : ''}
                                                    
                                                    
                                                    <div className={'d-grid d-block'}>
                                                        <button onClick={(event) => {
                                                            // console.log(d);
                                                            this.openProductModal(d?.product?.promoCode ?? "");
                                                            
                                                        }} disabled={(!promoDateValid ? true : false)} type={'button'} style={{
                                                            fontSize: '90%',
                                                            fontWeight: 600
                                                        }} className={'btn mtb-button-border-radius py-3 ' + (promoDateValid ? (promoDateValid ? 'mtb-button-white' : 'mtb-button') : 'mtb-button')}>Register</button>

                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })) 
                                        : '')}
                                        
                                    </div>
                                </Portal> : '')}
                            
                                {(tabPricingActive == 2 ? <Portal container={this.pricingTableContainer.current}>
                                    <div className={'row d-flex justify-content-center gx-5 gy-5'}>
                                        {(productsFromDb ?
                                        (productsFromDb.group?.map((d, index) => {
                                            const promoDateValid = d?.validation?.promoDates ?? false;
                                            
                                            return (
                                                <div className={'col-auto'}>
                                                <div style={{
                                                    borderRadius: 20
                                                }} className={'shadow mtb-hp-pricingcard ' + (promoDateValid ? 'mtb-hp-pricingcard-highlighted' : '')}>
                                                    <span style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '130%',
                                                        fontWeight: 500,
                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                        display: 'block'
                                                    }} className={'text-center mb-3'}>
                                                        {d?.product?.prodName}
                                                    </span>
                                                    <span style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: '220%',
                                                        fontWeight: 600,
                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                        display: 'block'
                                                    }} className={'text-center'}>
                                                        ${(d?.product?.price?.unitCost ?? 0).toFixed(2)}
                                                    </span>

                                                    {fixedDataProductfeatures ? 
                                                    (<ul className={'list-group list-group-flush mt-4 mb-4'}>
                                                        {fixedDataProductfeatures.map((f, i) => {
                                                            return (<li style={{
                                                                background: 'transparent'
                                                            }} className={'list-group-item border-0 ps-0 d-flex justify-content-start align-items-center'}>
                                                                <div style={{
                                                                    marginRight: 10
                                                                }}>
                                                                    <FaCheck style={{
                                                                        fontSize: 25,
                                                                        color: (promoDateValid ? (promoDateValid ? '#ffffff' : '#37D451') : '#37D451')
                                                                    }} />
                                                                </div>
                                                                
                                                                <div style={{
                                                                    float: 'left'
                                                                }}>
                                                                    <span style={{
                                                                        fontFamily: 'Poppins',
                                                                        fontSize: '90%',
                                                                        fontWeight: 600,
                                                                        display: 'inline-block',
                                                                        color: (promoDateValid? (promoDateValid ? '#ffffff' : '#013763') : '#013763'),
                                                                        lineHeight: '170%'
                                                                    }}>
                                                                        {f?.text}
                                                                    </span>
                                                                </div>
                                                            </li>)
                                                        })}
                                                    </ul>)
                                                    : ''}
                                                    
                                                    
                                                    <div className={'d-grid d-block'}>
                                                        <button onClick={(event) => {
                                                            // console.log(d);
                                                            this.openProductModal(d?.product?.promoCode ?? "");
                                                            
                                                        }} disabled={(!promoDateValid ? true : false)} type={'button'} style={{
                                                            fontSize: '90%',
                                                            fontWeight: 600
                                                        }} className={'btn mtb-button-border-radius py-3 ' + (promoDateValid ? (promoDateValid ? 'mtb-button-white' : 'mtb-button') : 'mtb-button')}>Register</button>

                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })) 
                                        : '')
                                        }
                                        
                                    </div>
                                </Portal> : '')}
                                <div className={'d-block text-center mx-auto'} style={{
                                    marginTop: 70,
                                    maxWidth: '85%'
                                }}>
                                    <span className={'mtb-hp-text1'} style={{
                                        fontSize: '100%',
                                        fontWeight: 400
                                    }}>
                                        *On Sale until December 31, 2021 (AEDT).
                                    </span>
                                    <span className={'mtb-hp-text1'} style={{
                                        fontSize: '100%',
                                        fontWeight: 400
                                    }}>
                                        **Will be on Sale starting January 1, 2022 (AEDT).
                                    </span>
                                </div>

                            <div id={'mtb-hp-reservation'} style={{
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right, bottom',
                                height: '90%'
                                
                            }} className={'mb-5 px-0 px-md-4 py-3 mt-5 position-relative'}>
                                <div className={'w-100 position-absolute mtb-h-70'} style={{
                                    backgroundImage: "linear-gradient(161deg, rgba(1,55,99,1) 0%, rgba(239,73,46,1) 100%)",
                                    zIndex: -1,
                                    overflow: 'hidden',
                                    borderRadius: 30,
                                    opacity: 0.8
                                }}></div>
                                <div className={'d-none d-lg-block w-100 position-absolute mtb-h-70 px-0 px-md-5 text-sm-end text-center'} style={{
                                    zIndex: -2,
                                    overflow: 'hidden',
                                    borderRadius: 30,
                                    opacity: 1,
                                    marginRight: 40
                                    
                                }}>
                                    <img src={ProductReservePersonPic} height={'100%'} width={'auto'} />
                                </div>
                                
                                <Element name={'mtb-hp-reservation'}>
                                <div className={'w-100 position-absolute mtb-h-70 d-flex align-items-center px-4 px-md-5'} style={{
                                    paddingTop: 50,
                                    paddingBottom: 50,
                                }}>
                                    <div className={'d-block row gy-3'} style={{
                                        maxWidth: 700
                                    }}>
                                        <div className={'col-12'}>
                                            <h1 className={'mtb-hp-title'} style={{
                                                color: '#fff',
                                                fontSize: '200%'
                                            }}>
                                                Reserve your seat for $50!
                                            </h1>
                                            
                                        </div>
                                        <div className={'col-12'}>
                                            <div style={{
                                                maxWidth: 500
                                            }}>
                                                <span className={'mtb-hp-paragraph'} style={{
                                                    color: '#fff',
                                                    fontSize: '80%'
                                                }}>
                                                    Don't have the funds right now? 
                                                    Get to reserve a spot for only $50.00 and pay the remaining amount 2 weeks before the event!
                                                </span>
                                            </div>
                                        </div>
                                        <div className={'col-12'}>
                                            <div className={'d-grid d-md-inline-block d-block'}>
                                                <button onClick={() => {
                                                    this.openReservationModal("PDWAY4HM9HW7VVKP5PRU"); // replace this whenever a new promo code has been created.
                                                }} className={'btn mtb-button-white-2 mtb-button-border-radius px-5 py-3'} style={{
                                                    fontSize: '90%',
                                                    fontWeight: 600,
                                                    color: '#806D7A'
                                                }}>Reserve here</button>
                                                <Link smooth={false} duration={300} to={'mtb-hp-contactform'} className={'btn mtb-button-white-outline mtb-button-border-radius px-5 py-3 ms-0 ms-md-2 mt-3 mt-md-0'} style={{
                                                    fontSize: '90%',
                                                    fontWeight: 600
                                                }}>Contact Us</Link>
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                                </Element>
                            </div>
                            
                            <div className={'d-block text-center mx-auto'} style={{
                                marginTop: -90,
                                maxWidth: '85%'
                            }}>
                                <span className={'mtb-hp-text1'} style={{
                                    fontSize: '100%',
                                    fontWeight: 400
                                }}>
                                    *Our seats are limited to 20 students only for this event. Due to the small group and we want to cater students who are sure to take the program, we can only allocate 5 seats for reservation.
                                </span>
                            </div>
                            
                            

                        </div>
                    </section>
                    <div className={'text-center mx-auto'}>
                        {/** For Staging Purposes (Remove this on production build) */}
                        {/*}
                        <div>
                            <button onClick={() => {
                                this.openProductModal("CMA44C7K9MEBXT4NV1IV");
                            }} className={'btn mtb-button mtb-button-border-radius px-5 py-3'}>Payment for Staging Purposes</button>
                        </div>
                        */}
                    </div>

                    <Element name={'mtb-hp-faq'}>
                    <section id={'mtb-hp-faq'} className={'mtb-hp-wrapper-bg-alt mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                 <div className={'col-12 mx-auto text-center'} style={{
                                        maxWidth: 700,
                                        alignItems: 'center'
                                    }}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            What they always ask
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Frequently Asked <span className={'mtb-text-color-primary'}>Questions</span>
                                        </h1>
                                </div>

                                <div className={'row mt-5 d-flex gx-5 align-items-center justify-content-center mx-auto'}>
                                    <div className={'col-auto px-4'} onClick={() => {
                                        this.setState({faqActive: 1});
                                    }}>
                                        <span className={'mtb-hp-tab-title ' + (faqActive == 1 ? 'mtb-hp-tab-title-active' : 'mtb-hp-tab-title-nonactive')} style={{
                                            fontSize: '120%',
                                            fontWeight: 600,
                                            position: 'relative'
                                        }}>
                                            
                                            For students
                                        </span>
                                    </div>
                                    <div className={'col-auto px-4'} onClick={() => {
                                        this.setState({faqActive: 2});
                                    }}>
                                        <span className={'mtb-hp-tab-title ' + (faqActive == 2 ? 'mtb-hp-tab-title-active' : 'mtb-hp-tab-title-nonactive')} style={{
                                            fontSize: '120%',
                                            fontWeight: 600
                                        }}>
                                            For parents
                                        </span>
                                    </div>
                                </div>

                                <div ref={this.faqItemContainer} className={'mx-auto mt-5'} style={{
                                    maxWidth: 750
                                }}></div>

                                {(faqActive == 1 ? (
                                    <Portal container={this.faqItemContainer.current}>
                                        {(faqStudents ? (
                                            faqStudents.map((d, index) => {
                                                const id = index + 1;

                                                return (
                                                    <Accordion elevation={0} className={'mtb-hp-accordion-border-radius'} onChange={handleFAQItemAcordionExpanded(id)} sx={{
                                                            px: 1,
                                                            py: 1,
                                                            mb: 3
                                                    }}>
                                                        <AccordionSummary
                                                            expandIcon={faqItemAccordionExpanded === id ? <FaMinus style={{color: '#EF492E'}} /> : <FaPlus />}
                                                        >
                                                            <span className={'mtb-hp-faq-title ' + (faqItemAccordionExpanded === id ? 'mtb-hp-faq-title-active' : 'mtb-hp-faq-title-inactive')}>
                                                                {d?.title}
                                                            </span>
                                                        </AccordionSummary>
                                                        <AccordionDetails >
                                                            <div className={'mtb-hp-faq-content'}>
                                                                {d?.content}
                                                            </div>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                )
                                            })
                                        ) : '')}
                                        
                                    </Portal>
                                ) : '')}
                                {(faqActive == 2 ? (
                                    <Portal container={this.faqItemContainer.current}>
                                        {(faqParents ? (
                                            faqParents.map((d, index) => {
                                                const id = index + 1;

                                                return (
                                                    <Accordion elevation={0} className={'mtb-hp-accordion-border-radius'} onChange={handleFAQItemAcordionExpanded(id)} sx={{
                                                            px: 1,
                                                            py: 1,
                                                            mb: 3
                                                    }}>
                                                        <AccordionSummary
                                                            expandIcon={faqItemAccordionExpanded === id ? <FaMinus style={{color: '#EF492E'}} /> : <FaPlus />}
                                                            className={''}
                                                        >
                                                            <span className={'mtb-hp-faq-title ' + (faqItemAccordionExpanded === id ? 'mtb-hp-faq-title-active' : 'mtb-hp-faq-title-inactive')}>
                                                                {d?.title}
                                                            </span>
                                                        </AccordionSummary>
                                                        <AccordionDetails >
                                                            <div className={'mtb-hp-faq-content'}>
                                                                {d?.content}
                                                            </div>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                )
                                            })
                                        ) : '')}
                                    </Portal>
                                ) : '')}
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-contactform'}>
                    <section id={'mtb-hp-contactform'} className={'mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                 <div className={'col-12 col-md-6 mx-auto text-center text-md-start'} style={{
                                        maxWidth: 515,
                                        alignItems: 'center'
                                    }}>
                                        <div className={'d-block'}>
                                            <span className={'mtb-hp-text1 mb-2'}>
                                                Talk to Us
                                            </span>
                                            <h1 className={'mtb-hp-title'}>
                                                Our <span className={'mtb-text-color-primary'}>Contact</span>
                                            </h1>
                                        </div>

                                        <div className={'d-block mt-4'}>
                                            <ul className={'list-group list-group-flush mb-4'}>
                                                {contactLinks?.primary ? 
                                                    contactLinks.primary.map((d, index) => {
                                                        return (
                                                            <li style={{
                                                                width: '100%'
                                                            }} className={'list-group-item border-0 px-0 d-flex justify-content-center justify-content-md-start align-items-center'}>
                                                                
                                                                <div className={'d-grid d-block d-md-flex'}>
                                                                    <div className={'me-0 me-md-4'} style={{
                                                                        fontSize: '150%',
                                                                        color: '#EF492E'
                                                                    }}>
                                                                        {d?.icon}
                                                                    </div>
                                                                    
                                                                    <div style={{
                                                                        float: 'left'
                                                                    }}>
                                                                        <span style={{
                                                                            fontFamily: 'Poppins',
                                                                            fontSize: '100%',
                                                                            fontWeight: 600,
                                                                            display: 'block',
                                                                            color: '#013763',
                                                                            lineHeight: '170%'
                                                                        }}>
                                                                            {d?.title}
                                                                        </span>
                                                                        <span style={{
                                                                            fontFamily: 'Poppins',
                                                                            fontSize: '90%',
                                                                            fontWeight: 500,
                                                                            display: 'block',
                                                                            color: '#93ACC1',
                                                                            lineHeight: '170%'
                                                                        }}>
                                                                            {d?.content}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                
                                                            </li>
                                                        );
                                                    })
                                                 : ''}
                                            </ul>
                                        </div>
                                        <div className={'row gx-4 gy-2'}>
                                            {contactLinks?.social ? 
                                                contactLinks.social.map((d, index) => {
                                                    return (
                                                    <div onClick={(e) => {
                                                        console.log(d);

                                                        if (d.url != null) {
                                                            window.open(d.url, '_blank');
                                                        }

                                                    }} className={'col col-md-auto'} style={{
                                                        fontSize: '150%',
                                                        color: '#EF492E',
                                                        cursor: 'pointer'
                                                    }}>
                                                        {d?.icon ?? ''}
                                                    </div>
                                                    );
                                                })
                                            : ''}
                                            
                                        </div>
                                        
                                </div>

                                <div className={'col-12 col-md-6 mx-auto'} style={{
                                    maxWidth: 600,
                                    alignItems: 'center'
                                }}>
                                    {/** Contact Form Section */}
                                    
                                    <div className={'mtb-hp-contactform px-5 px-md-5 py-5 py-md-5 shadow'}>
                                        
                                        <Form>
                                            <Form.Group className="mb-3" controlId="contactFormName">
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Name
                                                </Form.Label>
                                                <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                    <InputGroup.Text className={'border-0'} style={{
                                                        background: 'transparent'
                                                    }}>
                                                        <FaUserAlt />
                                                    </InputGroup.Text>
                                                    <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.name} type="text" onChange={(e) => {
                                                        // console.log(e.target.value);
                                                        this.setState({
                                                            contact: {
                                                                contactForm: {
                                                                    ...contactForm,
                                                                    name: e.target.value
                                                                },
                                                                contactLinks: contactLinks
                                                            }
                                                        });
                                                        
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="contactFormEmail">
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400
                                                }}>
                                                    Email
                                                </Form.Label>
                                                <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield">
                                                    <InputGroup.Text className={'border-0'} style={{
                                                        background: 'transparent'
                                                    }}>
                                                        <FaEnvelope />
                                                    </InputGroup.Text>
                                                    <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'on'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.email} type="email" onChange={(e) => {
                                                        // console.log(e.target.value);
                                                        this.setState({
                                                            contact: {
                                                                contactForm: {
                                                                    ...contactForm,
                                                                    email: e.target.value
                                                                },
                                                                contactLinks: contactLinks
                                                            }
                                                        });
                                                        
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="contactFormEmail">
                                                <Form.Label className={'mtb-hp-text1'} style={{
                                                    fontWeight: 400,
                                                    
                                                }}>
                                                    Message
                                                </Form.Label>
                                                <InputGroup className="mb-2 py-2 px-2 mtb-hp-contactform-textfield align-items-start">
                                                    <Form.Control disabled={this.state.messageFormBusyState} autoComplete={'off'} className={'border-0 outline-0 ps-1'} value={this.state.contact?.contactForm?.message} as={'textarea'} rows={3} onChange={(e) => {
                                                        // console.log(e.target.value);
                                                        this.setState({
                                                            contact: {
                                                                contactForm: {
                                                                    ...contactForm,
                                                                    message: e.target.value
                                                                },
                                                                contactLinks: contactLinks
                                                            }
                                                        });
                                                        
                                                    }} />
                                                </InputGroup>
                                            </Form.Group>
                                        </Form>
                                        <div className={'d-grid d-block'}>
                                            
                                            <button disabled={this.state.messageFormBusyState} className={'btn mtb-button mtb-button-border-radius py-3'} style={{
                                                fontWeight: 600,
                                                fontSize: '100%',
                                                position: 'relative'
                                            }} onClick={() => {
                                                this.handleContactForm();
                                                // console.log(contactForm);
                                            }}>
                                                {this.state.messageFormBusyState ? (
                                                    <div style={{
                                
                                                        width: '100%',
                                                        visibility: 'visible'
                                                    }}>
                                                        <CircularProgress size={30} className={'mtb-loader'} sx={{
                                                            color: '#fff'
                                                        }} />
                                                    </div>
                                                ) : (
                                                    <span>Submit</span>
                                                ) }
                                                
                                                
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-sponsors'}>
                    <section id={'mtb-hp-sponsors'} className={'mtb-hp-wrapper-bg-alt mt-5 py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-4 d-flex align-items-center justify-content-center'}>
                                 <div className={'col-12 mx-auto text-center'} style={{
                                    maxWidth: 600,
                                    alignItems: 'center'
                                }}>
                                    <div className={'d-block'}>
                                        <span className={'mtb-hp-text1 mb-2'}>
                                            Our Sponsors
                                        </span>
                                        <h1 className={'mtb-hp-title'}>
                                            Thanks to <span className={'mtb-text-color-primary'}>Our Sponsors</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            

                            <div className={'row gx-2 gy-4 d-flex align-items-stretch justify-content-center mt-3'}>
                                {(majorSponsors ? 
                                    majorSponsors.map((d, index) => {
                                        return (
                                            (d?.title === undefined ?
                                                ""
                                            : <div className={'col-12 col-md-4 '}>
                                                <div className={'mtb-hp-majorsponsor-box shadow p-5 p-md-4 p-lg-5 text-center'}>
                                                    <img src={d?.imageContext} style={{
                                                        maxWidth: '100%',
                                                        maxHeight: '100%'
                                                    }} />
                                                </div>
                                            </div>)
                                        );
                                    })
                                
                                : '')}
                                
                                
                            </div>

                            <div className={'row gx-0 gy-1 d-flex align-items-stretch justify-content-center mt-3'}>
                                {(minorSponsors ? 
                                    minorSponsors.map((d, index) => {
                                        return (
                                            (d?.title === undefined ?
                                                ""
                                            :
                                            <div className={'col-12 col-sm-12 col-md-auto d-flex justify-content-center'}>
                                                <div className={'mtb-hp-minorsponsor-box shadow p-5 py-5 py-md-4 p-md-4 text-center d-flex align-items-center justify-content-center'}>
                                                    <img src={d?.imageContext} />
                                                </div>
                                            </div>
                                            )
                                        );
                                    })
                                : '')}
                            </div>
                        </div>
                    </section>
                    </Element>
                    
                    <Element name={'mtb-hp-footer'}>
                    <footer className={'mtb-footer py-5'}>
                        <div className={'container'}>
                            <div className={'row gx-4 d-none d-lg-flex align-items-start justify-content-start'}>
                                <div className={'col-md-4'}>
                                    <div className={'d-block'} style={{
                                        maxWidth: 270
                                    }}>
                                        <img src={FooterMTBLogo} height={70} width={70} />
                                        <span className={'mtb-footer-companyinfo'}>
                                        More Than Before is a subsidiary of Purpose Advisory.
                                        </span>
                                    </div>

                                    <div className={'mt-4'}>
                                        <span className={'mtb-footer-copyright'}>© {new Date().getFullYear()} <b>More Than Before</b>.</span>
                                    </div>
                                    
                                </div>
                                <div className={'col-md-5'}>
                                    <div className={'row'}>
                                        <div className={'col-md-4'}>
                                        {(footerLinkSitemap ? (
                                        <>
                                            <span className={'mtb-footer-text1'} style={{fontSize: '130%', fontWeight: 600}}>
                                                Sitemap
                                            </span>
                                            <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkSitemap.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'}>
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}

                                            </ul>
                                        </>
                                            
                                        ) : '')}
                                            
                                        </div>
                                        <div className={'col-md-4'}>
                                        {(footerLinkProduct ? (
                                        <>
                                            <span className={'mtb-footer-text1'} style={{fontSize: '130%', fontWeight: 600}}>
                                                Product
                                            </span>
                                            <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkProduct.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} >
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}

                                            </ul>
                                        </>
                                            
                                        ) : '')}
                                            
                                        </div>
                                        <div className={'col-md-4'}>
                                        {(footerLinkHelp ? (
                                        <>
                                            <span className={'mtb-footer-text1'} style={{fontSize: '130%', fontWeight: 600}}>
                                                Help
                                            </span>
                                            <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkHelp.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'}>
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}

                                            </ul>
                                        </>
                                            
                                        ) : '')}
                                            
                                        </div>
                                    </div>

                                    
                                    
                                </div>
                                <div className={'col-md-3'}>
                                    <div className={'row gx-4 gy-0 mt-0 d-flex align-items-start justify-content-end'}>
                                        {contactLinks?.social ? 
                                            contactLinks.social.map((d, index) => {
                                                return (
                                                <div onClick={(e) => {
                                                    console.log(d);

                                                    if (d.url != null) {
                                                        window.open(d.url, '_blank');
                                                    }

                                                }} className={'col col-md-auto mt-0'} style={{
                                                    fontSize: '150%',
                                                    color: '#fff',
                                                    cursor: 'pointer'
                                                }}>
                                                    {d?.icon ?? ''}
                                                </div>
                                                );
                                            })
                                        : ''}
                                        
                                    </div> 
                                </div>
                            </div>
                            <div className={'row d-flex d-lg-none'}>
                                
                                <div className={'col-12'}>
                                    <Accordion disableGutters={true} className={'mtb-footer-accordion mx-0 mt-4 px-0 py-0'} elevation={0} sx={{
                                            px: 3,
                                            py: 2,
                                            mb: 3
                                    }}>
                                        <AccordionSummary
                                            className={'mtb-footer-accordion-summary px-0 py-0'}
                                            expandIcon={<FaChevronDown style={{
                                                color: '#fff'
                                            }} />}
                                        >
                                            <span className={'mtb-footer-text1'}>
                                                Sitemap
                                            </span>
                                        </AccordionSummary>
                                        <AccordionDetails className={'px-0'} >
                                            <div className={'mtb-hp-footer-accordion-content'}>
                                                <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkSitemap.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'}>
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                                <div className={'col-12'} style={{
                                    marginTop: -10
                                }}>
                                    <Accordion disableGutters={true} className={'mtb-footer-accordion mx-0 mt-0 px-0 py-0'} elevation={0} sx={{
                                            px: 3,
                                            py: 2,
                                            mb: 3
                                    }}>
                                        <AccordionSummary
                                            className={'mtb-footer-accordion-summary px-0 py-0'}
                                            expandIcon={<FaChevronDown style={{
                                                color: '#fff'
                                            }} />}
                                        >
                                            <span className={'mtb-footer-text1'}>
                                                Product
                                            </span>
                                        </AccordionSummary>
                                        <AccordionDetails className={'px-0'} >
                                            <div className={'mtb-hp-footer-accordion-content'}>
                                                <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkProduct.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'}>
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}
                                                </ul>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                                <div className={'col-12'} style={{
                                    marginTop: -10
                                }}>
                                    <Accordion disableGutters={true} className={'mtb-footer-accordion mx-0 mt-0 px-0 py-0'} elevation={0} sx={{
                                            px: 3,
                                            py: 2,
                                            mb: 3
                                    }}>
                                        <AccordionSummary
                                            className={'mtb-footer-accordion-summary px-0 py-0'}
                                            expandIcon={<FaChevronDown style={{
                                                color: '#fff'
                                            }} />}
                                        >
                                            <span className={'mtb-footer-text1'}>
                                                Help
                                            </span>
                                        </AccordionSummary>
                                        <AccordionDetails className={'px-0'} >
                                            <div className={'mtb-hp-footer-accordion-content'}>
                                                {(footerLinkHelp ? (
                                                <ul className={'mtb-footer-navlist list-group-flush m-0 p-0'}>
                                                {footerLinkHelp.map((d, index) => {
                                                    return (
                                                    <Link smooth={false} duration={300} to={d?.action} className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'}>
                                                        {d?.title}
                                                    </Link>
                                                    );
                                                    
                                                })}
                                                </ul>
                                                ) 
                                                
                                                : '')}
                                                
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                                <div className={'col-12'}>
                                    <div className={'d-block'} style={{
                                        maxWidth: 270
                                    }}>
                                        <img src={FooterMTBLogo} height={70} width={70} />
                                        <span className={'mtb-footer-companyinfo'}>
                                            More Than Before is a subsidiary of Purpose Advisory.
                                        </span>
                                    </div>

                                    
                                </div>

                                <div className={'col-12'}>
                                    <div className={'row mt-2'}>
                                        {contactLinks?.social ? 
                                            contactLinks.social.map((d, index) => {
                                                return (
                                                <div onClick={(e) => {
                                                    console.log(d);

                                                    if (d.url != null) {
                                                        window.open(d.url, '_blank');
                                                    }

                                                }} className={'col-auto mt-0'} style={{
                                                    fontSize: '200%',
                                                    color: '#fff',
                                                    cursor: 'pointer'
                                                }}>
                                                    {d?.icon ?? ''}
                                                </div>
                                                );
                                            })
                                        : ''}
                                    </div>
                                </div>

                                <div className={'col-12'}>
                                    <div className={'mt-3'}>
                                        <span className={'mtb-footer-copyright'}>© {new Date().getFullYear()} <b>More Than Before</b>.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    </Element>
                </div>

                
            </React.Fragment>
        );

        
    }

    
}

const styles = (props : any) => ({
    colorPrimary: {
        backgroundColor: '#f5c0b8 !important',
    },
    barColorPrimary: {
        backgroundColor: '#EF492E !important',
    }
});

// export { Home };
export default withStyles(styles)(Home);
