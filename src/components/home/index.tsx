import React from "react";
import moment from "moment";

import "../../assets/css/antd.css";
import "../../assets/css/custom.css";
import "../../assets/bootstrap/bootstrap.css";

import Logo from "../../assets/media/logo/1200x1200.png";
import HeroImage from "../../assets/media/biracial1@2x.png";
import MouseDownIcon from "../../assets/media/icons8_mouse_scrolling_120px.png";

// Featured Brand Logo Image Imports
import FTB_Amazon from "../../assets/media/amazon-2@2x.png"; // 1
import FTB_MasterCard from "../../assets/media/mastercard-2@2x.png"; // 2
import FTB_Microsoft from "../../assets/media/microsoft@2x.png"; // 3
import FTB_AlaskaAirlines from "../../assets/media/alaska-airlines-4@2x.png"; // 4
import FTB_BookingDotCom from "../../assets/media/bookingcom@2x.png"; // 5

// Educator's Message
import VideoThumb from "../../assets/media/videothumb@2x.png";
import EducatorMessageVideo from '../../assets/media/videos/sample_video.mp4';

// About Us
import AboutUsImage from '../../assets/media/aboutus1@2x.png';

// Vision & Mission
import VisionMissionImage from '../../assets/media/Component 3 – 1@2x.png';

// Why Choose Us
import MoneyIcon from '../../assets/media/icons8_money_120px@2x.png';
import MoneyFreedomIcon from '../../assets/media/icons8_dove_120px@2x.png';
import HandlingFinancesIcon from '../../assets/media/icons8_brain_120px@2x.png';
import EnjoyingMoneyIcon from '../../assets/media/icons8_box_important_120px@2x.png';

// Event Details
import EventDetailsImage1 from '../../assets/media/EventDetailsImage@2x.png';
import EventDetailsImage2 from '../../assets/media/Component 5 – 1@2x.png';
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

import { FaCheck, FaPlus, FaMinus, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaUserAlt, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

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


const styles = (theme: any) => ({
  root: {
    backgroundColor: "red"
  }
});

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
    majorSponsors: ISponsorsDataStructure[];
    minorSponsors: ISponsorsDataStructure[];
    footerLinkSitemap: IFooterLinkDataStructure[];
    footerLinkProduct: IFooterLinkDataStructure[];
    footerLinkHelp: IFooterLinkDataStructure[];
    sidenavExpand: boolean;
}

interface Props extends WithStyles<typeof styles>{ }

class Home extends React.Component<typeof styles, IHomeState> {
    pricingTableContainer: any;

    faqItemContainer: any;

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
                    start: '12/6/2021'
                },
                icon: EventTimelineFloatIcon
            },
            {
                title: 'Budgeting and Saving',
                paragraph: 'Learn on how to live a quality life on a budget.',
                week: 'Week 2',
                date: {
                    start: '12/13/2021'
                },
                icon: EventTimelineSaveMoneyIcon
                
            },
            {
                title: 'Generate passive income while Studying',
                paragraph: 'Get to learn about stocks and how to invest in stock market.',
                week: 'Week 3',
                date: {
                    start: '12/20/2021'
                },
                icon: EventTimelineStudyIcon
            },
            {
                title: 'BREAK!',
                paragraph: 'Enjoy your Christmas and the New Year!',
                week: 'Week 3-4',
                date: {
                    start: '12/27/2021',
                    end: '01/03/2022'
                } 
            },
            {
                title: 'Train your Financial Muscles',
                paragraph: 'Get to workout your financials in a group with a financial advisor.',
                week: 'Week 5',
                date: {
                    start: '01/10/2022'
                },
                icon: EventTimelineWhistleIcon
            },
            {
                title: 'Change your weakness into your key strengths',
                paragraph: 'Learn about mindsets and how to play your strengths by knowing your weaknesses.',
                week: 'Week 6',
                date: {
                    start: '01/12/2022'
                },
                icon: EventTimelineMuslceIcon
            },
            {
                title: 'How to be wise while you are young',
                paragraph: 'Learn key principles of handling money and how to see money.',
                week: 'Week 7',
                date: {
                    start: '01/12/2022'
                },
                icon: EventTimelineGraduationIcon
            }
        ];

        var productPricingLocalData = {
            individual: [
                {
                    id: 1,
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
                    content: 'The program lasts for 6 weeks. From Dec. 6, 2021 to Jan. 24, 2022 with 2 weeks holiday break. You and your instructors will meet once a week, every Monday via Zoom. And even after the program, we will offer continuous support to you for 12 months to monitor your progress as a complementary service for joining our pioneer batch.'
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
                    content: 'The program lasts for 6 weeks. From Dec. 6, 2021 to Jan. 24, 2022 with 2 weeks holiday break. The students and the instructors will meet once a week, every Monday via Zoom. And even after the program, we will offer your kid continuous support for 12 months through the MTB community to monitor their progress as a complementary service for letting them join our pioneer batch.'
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
                content: (<span>tristan@purposeadvisory.com.au</span>)
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

        var majorSponsorsLocalData = [
            {
                title: 'Microsoft',
                imageContext: SponsorMicrosoftLogo
            },
            {
                title: 'Amazon',
                imageContext: SponsorAmazonLogo
            },
            {
                title: 'FedEx',
                imageContext: SponsorFedexLogo
            }
        ];

        var minorSponsorsLocalData = [
            {
                title: 'Alaska',
                imageContext: SponsorAlaskaLogo
            },
            {
                title: 'Booking.com',
                imageContext: SponsorBookingLogo
            },
            {
                title: 'MasterCard',
                imageContext: SponsorMastercardLogo
            },
            {
                title: 'DHL',
                imageContext: SponsorDHLLogo
            }
        ]

        var footerLinkSitemapLocalData = [
            {
                title: 'About',
                action: ''
            },
            {
                title: 'Event Details',
                action: ''
            },
            {
                title: 'FAQ',
                action: ''
            },
            {
                title: 'Contact Us',
                action: ''
            }
        ];

        var footerLinkProductLocalData = [
            {
                title: 'Pricing',
                action: ''
            },
            {
                title: 'Services',
                action: ''
            },
            {
                title: 'Reservations',
                action: ''
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
            sidenavExpand: false
        };

        this.pricingTableContainer = React.createRef();
        this.faqItemContainer = React.createRef();
    }

    componentDidMount() {
        this.setState({tabPricingActive: 1, faqActive: 1});
    }

    render() {

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
            sidenavExpand 
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

        // let pricingTableContainer = React.useRef(null);

        return (
            <React.Fragment>
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
                                    <span className={'logoText d-none d-md-inline'}>mtb</span>
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
                
                <div className={'mtb-drawer'}>
                    <Drawer
                        anchor={'right'}
                        open={sidenavExpand}
                        onClose={() => {
                            this.setState({
                                sidenavExpand: false
                            });
                        }}
                        
                    >
                        <div className={'mtb-drawer-inner px-2 py-4'}>
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
                                    <Link className="btn nav-link text-start" to={'mtb-hp-educatorsmessage'}>
                                        About
                                    </Link>
                                    
                                </li>

                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" to={'mtb-hp-eventdetails'}>
                                        Event Details
                                    </Link>
                                    
                                </li>
                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" to={'mtb-hp-faq'}>
                                        FAQ
                                    </Link>
                                    
                                </li>

                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start" to={'mtb-hp-contactform'}>
                                        Contact
                                    </Link>
                                    
                                </li>
                                <li className={'mtb-nav list-group-item border-0 ps-0 px-0 py-0'}>
                                    <Link className="btn nav-link text-start d-grid d-block" to={'mtb-hp-pricing'}>
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
            
                <div className={'mtb-hp-hero pt-4 pb-4'}>
                    <div className={'container mt-4'}>
                        <div className={'row d-flex align-items-center mt-0 mt-md-5 mb-5 mb-md-0 pb-5 pb-md-0'}>
                            <div className={'col-12 col-lg-6 col-md-12 col-sm-12 mt-5 mt-lg-1 pt-5 pt-lg-1 pt-sm-5'}>
                                <span className={'mtb-hp-hero-text1'}>
                                    This would help whitespaces
                                </span>
                                <h1 className={'mt-1 mtb-hp-hero-title'} style={{
                                    
                                }}>
                                <span className={'mtb-text-color-primary'}>More than Before</span> : A Real Life Financial Education for the Upcoming Adults
                                </h1>
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

                <div className={'mtb-main-content'}>
                    <Element name={'mtb-hp-educatorsmessage'}>
                    <section id={'mtb-hp-educatorsmessage'} className={'py-5'}>
                        <div className={'container py-5'}>
                            <div className={'row gx-5 gy-3 d-flex align-items-center justify-content-center'}>
                                <div className={'col-12 col-lg-6 col-md-12 col-sm-12'}>
                                    
                                    <ReactPlayer playing={false} light={false} url={EducatorMessageVideo} width="100%" height="auto" controls={true} />
                                    
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
                                            Sed id mauris sit amet mauris dignissim sagittis quis a lectus. Integer vestibulum justo sed elit commodo faucibus.Vestibulum eu vehicula nunc, in convallis mi. Aliquam facilisis eu dolor ac porttitor.
                                        </p>

                                        <p className={'mtb-hp-paragraph'}>
                                            Pellentesque non augue est. Nam euismod molestie tortor. Curabitur dapibus risus quis lacus fringilla placerat. Mauris ac sollicitudin libero, eget imperdiet.
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
                                            "More than Before" is an education and mentoring company for teenagers, focused on providing relational support, practical education and guidance on life direction and wealth creation.
                                        </p>
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
                                            We aim to support teens and young adults and teach them the skills they need to identify their direction in life, build wealth, with the goal of them succeeding in their career and relationships.
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            This will equip our teens and young adults to be more capable parents one day who can pass on these skills and insights to their children, creating generational change.
                                        </p>
                                        <p className={'mtb-hp-paragraph'}>
                                            As a result, we will see Australia become a more free, empowered, health and prosperous nation.
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
                                            The More than Before Event is a 6-week program that starts on the 6th of December 2021 until the 24th of January 2022.
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
                    
                    <Element name={'mtb-hp-pricing'}>
                    <section id={'mtb-hp-pricing'} className={'mt-0 py-5'}>
                        <div className={'container py-5'}>
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
                                    {(individual ? 
                                    (individual.map((d, index) => {
                                        // console.log(d);

                                        const currentDate = moment().format('ll');
                                        const hasEnded = (moment(d?.date?.end).diff(currentDate, 'days') >= 1 ? false : true);
                                        const hasStarted = (moment(d?.date?.start).diff(currentDate, 'days') <= 0 ? true : false)
                                        const hasStarted2 = moment(d?.date?.start).diff(currentDate, 'days');
                                        
                                        /*
                                        // Disable this when not debugging.
                                        console.log(hasEnded);
                                        console.log(hasStarted2 + ' : ' + hasStarted);
                                        */

                                        return (
                                        <div className={'col-auto'}>
                                            <div style={{
                                                borderRadius: 20
                                            }} className={'shadow mtb-hp-pricingcard ' + (hasStarted ? (!hasEnded ? 'mtb-hp-pricingcard-highlighted' : '') : '')}>
                                                <span style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '130%',
                                                    fontWeight: 500,
                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
                                                    display: 'block'
                                                }} className={'text-center mb-3'}>
                                                    {d?.title}
                                                </span>
                                                <span style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '220%',
                                                    fontWeight: 600,
                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
                                                    display: 'block'
                                                }} className={'text-center'}>
                                                    ${(d.price ?? 0).toFixed(2)}
                                                </span>

                                                {d?.features ? 
                                                (<ul className={'list-group list-group-flush mt-4 mb-4'}>
                                                    {d.features.map((f, i) => {
                                                        return (<li style={{
                                                            background: 'transparent'
                                                        }} className={'list-group-item border-0 ps-0 d-flex justify-content-start align-items-center'}>
                                                            <div style={{
                                                                marginRight: 10
                                                            }}>
                                                                <FaCheck style={{
                                                                    fontSize: 25,
                                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#37D451') : '#37D451')
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
                                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
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
                                                    <button disabled={(hasEnded ? true : false)} type={'button'} style={{
                                                        fontSize: '90%',
                                                        fontWeight: 600
                                                    }} className={'btn mtb-button-border-radius py-3 ' + (hasStarted ? (!hasEnded ? 'mtb-button-white' : 'mtb-button') : 'mtb-button')}>Register</button>

                                                </div>
                                            </div>
                                        </div>
                                        );

                                    }))
                                     : '')
                                    }
                                </div>
                            </Portal> : '')}
                            
                            {(tabPricingActive == 2 ? <Portal container={this.pricingTableContainer.current}>
                                <div className={'row d-flex justify-content-center gx-5 gy-5'}>
                                    {(group ? 
                                    (group.map((d, index) => {
                                        console.log(d);

                                        const currentDate = moment().format('ll');
                                        const hasEnded = (moment(d?.date?.end).diff(currentDate, 'days') >= 1 ? false : true);
                                        const hasStarted = (moment(d?.date?.start).diff(currentDate, 'days') <= 0 ? true : false)
                                        const hasStarted2 = moment(d?.date?.start).diff(currentDate, 'days');
                                        
                                        /*
                                        // Disable this when not debugging.
                                        console.log(hasEnded);
                                        console.log(hasStarted2 + ' : ' + hasStarted);
                                        */

                                        return (
                                        <div className={'col-auto'}>
                                            <div style={{
                                                borderRadius: 20
                                            }} className={'shadow mtb-hp-pricingcard ' + (hasStarted ? (!hasEnded ? 'mtb-hp-pricingcard-highlighted' : '') : '')}>
                                                <span style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '130%',
                                                    fontWeight: 500,
                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
                                                    display: 'block'
                                                }} className={'text-center mb-3'}>
                                                    {d?.title}
                                                </span>
                                                <span style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '220%',
                                                    fontWeight: 600,
                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
                                                    display: 'block'
                                                }} className={'text-center'}>
                                                    ${(d.price ?? 0).toFixed(2)}
                                                </span>

                                                {d?.features ? 
                                                (<ul className={'list-group list-group-flush mt-4 mb-4'}>
                                                    {d.features.map((f, i) => {
                                                        return (<li style={{
                                                            background: 'transparent'
                                                        }} className={'list-group-item border-0 ps-0 d-flex justify-content-start align-items-center'}>
                                                            <div style={{
                                                                marginRight: 10
                                                            }}>
                                                                <FaCheck style={{
                                                                    fontSize: 25,
                                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#37D451') : '#37D451')
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
                                                                    color: (hasStarted ? (!hasEnded ? '#ffffff' : '#013763') : '#013763'),
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
                                                    <button type={'button'} style={{
                                                        fontSize: '90%',
                                                        fontWeight: 600
                                                    }} className={'btn mtb-button-border-radius py-3 ' + (hasStarted ? (!hasEnded ? 'mtb-button-white' : 'mtb-button') : 'mtb-button')}>Register</button>

                                                </div>
                                            </div>
                                        </div>
                                        );

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
                                    *On Sale until November 15, 2021 (AEDT).
                                </span>
                                <span className={'mtb-hp-text1'} style={{
                                    fontSize: '100%',
                                    fontWeight: 400
                                }}>
                                    **Will be on Sale starting November 16, 2021 (AEDT).
                                </span>
                            </div>

                            <div id={'mtb-hp-reservation'} style={{
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right, bottom',
                                height: '90%'
                                
                            }} className={'mb-5 px-0 px-md-4 py-3 mt-5 position-relative'}>
                                <div className={'w-100 position-absolute h-100'} style={{
                                    backgroundImage: "linear-gradient(161deg, rgba(1,55,99,1) 0%, rgba(239,73,46,1) 100%)",
                                    zIndex: -1,
                                    overflow: 'hidden',
                                    borderRadius: 30,
                                    opacity: 0.8
                                }}></div>
                                <div className={'d-none d-lg-block w-100 position-absolute h-100 px-0 px-md-5 text-sm-end text-center'} style={{
                                    zIndex: -2,
                                    overflow: 'hidden',
                                    borderRadius: 30,
                                    opacity: 1,
                                    marginRight: 40
                                    
                                }}>
                                    <img src={ProductReservePersonPic} height={'100%'} width={'auto'} />
                                </div>

                                <div className={'w-100 position-absolute h-100 d-flex align-items-center px-4 px-md-5'} style={{
                                    paddingTop: 50,
                                    paddingBottom: 50
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
                                                <button className={'btn mtb-button-white-2 mtb-button-border-radius px-5 py-3'} style={{
                                                    fontSize: '90%',
                                                    fontWeight: 600,
                                                    color: '#806D7A'
                                                }}>Reserve here</button>
                                                <button className={'btn mtb-button-white-outline mtb-button-border-radius px-5 py-3 ms-0 ms-md-2 mt-3 mt-md-0'} style={{
                                                    fontSize: '90%',
                                                    fontWeight: 600
                                                }}>Contact Us</button>
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                            <div className={'d-block text-center mx-auto'} style={{
                                marginTop: 70,
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
                    </Element>
                    
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
                                                    <Form.Control autoComplete={'off'} className={'border-0 outline-0 ps-1'} type="text" onChange={(e) => {
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
                                                    <Form.Control autoComplete={'off'} className={'border-0 outline-0 ps-1'} type="email" onChange={(e) => {
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
                                                    <Form.Control autoComplete={'off'} className={'border-0 outline-0 ps-1'} as={'textarea'} rows={3} onChange={(e) => {
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
                                                console.log(contactForm);
                                            }}>Submit</button>
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
                                            <div className={'col-12 col-md-4 '}>
                                                <div className={'mtb-hp-majorsponsor-box shadow p-5 p-md-4 p-lg-5 text-center'}>
                                                    <img src={d?.imageContext} style={{
                                                        maxWidth: '100%',
                                                        maxHeight: '100%'
                                                    }} />
                                                </div>
                                            </div>
                                        );
                                    })
                                
                                : '')}
                                
                                
                            </div>

                            <div className={'row gx-0 gy-1 d-flex align-items-stretch justify-content-center mt-3'}>
                                {(minorSponsors ? 
                                    minorSponsors.map((d, index) => {
                                        return (
                                            <div className={'col-12 col-sm-12 col-md-auto d-flex justify-content-center'}>
                                                <div className={'mtb-hp-minorsponsor-box shadow p-5 py-5 py-md-4 p-md-4 text-center d-flex align-items-center justify-content-center'}>
                                                    <img src={d?.imageContext} />
                                                </div>
                                            </div>
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
                                            Lorem ipsum dolor sit amet, cour aing elit. Sed nunc nisl, rutrum nec dolor a, Sed nunc nisl, rutrum nec dolor a.
                                        </span>
                                    </div>

                                    <div className={'mt-4'}>
                                        <span className={'mtb-footer-copyright'}>© 2021 <b>More Than Before</b>.</span>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                                    <li className={'list-group-item border-0 ps-0 ms-0 py-1 d-flex justify-content-start align-items-center'} onClick={(e) => {
                                                        console.log(e);
                                                    }}>
                                                        {d?.title}
                                                    </li>
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
                                            Lorem ipsum dolor sit amet, cour aing elit. Sed nunc nisl, rutrum nec dolor a, Sed nunc nisl, rutrum nec dolor a.
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
                                        <span className={'mtb-footer-copyright'}>© 2021 <b>More Than Before</b>.</span>
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

// export { Home };
export default withStyles(styles, { withTheme: true })(Home);
