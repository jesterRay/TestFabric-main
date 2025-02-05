import React,{createContext, useState} from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTopRoute from './components/ScrollTopRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Location from './pages/location';
import DetailPage from './pages/pageDetail';
// import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ProductsByCategory from './pages/ProductsByCategory';
import ProductsBySubcategory from './pages/ProductsBySubcategory';
import { Button } from '@material-ui/core';
import ServicesDetails from './pages/ServicesDetails';
import Team from './pages/Team';
import ProductsByEqipment from './pages/ProductsByEqipment';
// import AssiociateAndPatners from './pages/AssiociateAndPatners';
import RequestCertificte from './pages/RequestCertificte';
// import RequestCertifice2 from './pages/RequestCertificte2';

// import Blog3 from './components/Blog3';
import DownloadPage from './pages/DownloadPage';
// import RequestCertificte2 from './pages/RequestCertificte2'; 
import TrackOrder from './pages/TrackOrder';
import ChooseRegion from './pages/ChooseRegion';
import RequestSwetch from './pages/RequestSwetch';
import RequestOrder from './pages/RequestOrder';

import RequestInquiry from './pages/RequestInquiry';
import Calculator from './pages/Calculator';
import RelatedServices from './pages/related_services';
import TellAFriend from './pages/TellAFriend';
import ProductsByStandards from './pages/ProductsByStandards';
import ProductsByStandardSubcategory from './pages/ProductsByStandardSubcategory';
import Associates from './pages/Associates';
// import CarrerCard from './components/Card/CarrerCard';
import Carrers from './pages/Carrers';
import Events from './pages/events';
import StandardProducts from './pages/StandardProducts';
import NewsPage from './pages/newsPage';
import PagesData from './pages/PagesData';
import Search from './pages/Search'
import Country from './pages/Country';
import RequestCertificte3 from './pages/RequestCertificte3';
import Chatbot from './pages/chatbotfile';
import Verification from './pages/Verification'
import ProductsByIntrestGroup from './pages/ProductsByIntrestGroup';
import ProductsByStandardMethods from './pages/ProductsByStandardMethods';
import SubcategoryByIntrest from './pages/SubcategoryByIntrest';
import RequestCatalog from './pages/RequestCatalog';
import NewLanding from './pages/NewLanding';
import RequestQuote from './pages/RequestQuote';
import ContactLocation from './pages/ContactLocation';
import CustomerForm1 from './pages/CustomerForm1';
import MenuServicesPage from './pages/MenuServicesPage';
import ServicesPage from './pages/ServicesPage';
import SupportPage from './pages/SupportPage';
import ServiceCardDetails from './pages/Service.CardDetails';
import CookieConsent from 'react-cookie-consent';
import BuyForm from './pages/BuyForm';
import CategoriesCards from './pages/CategoriesCard'
import CookiePage from './pages/CookiePage';
import MapPage from './pages/MapPage';

import SearchPage from './components/ServiceDetails/SearchPage';
import AgentPortal from './components/Portal/AgentPortal';
import CustomerPortal from './components/Portal/CustomerProtal';
import CareerDetail from './components/Career/CareerDetail';
// import DealerMap from './components/Map/Map';



export const UserContext = createContext(null);

function App() {

    const [values,setValues] = useState({})
    return (

        <UserContext.Provider value={{values,setValues}}>
            <HashRouter basename='/'>
                {/* <ScrollToTopRoute /> */}
                <Switch>
                    {/* <Route exact path="/home-2">
                        <Home2 />
                        
                    </Route> */}

                        <Route exact path='/home-2'>
                             <Home3 />
                        </Route>

                        <Route exact path='/services'>
                            <ServicesPage />
                        </Route>

                        <Route exact path = "/services/:id">
                            <ServiceCardDetails />
                        </Route>

                        <Route exact path='/support'>

                        <SupportPage/>
                        
                        </Route>

                    <Route exact path='/international-distribution'>
                        <MapPage/>
                    </Route>

                    <Route exact path="/home-3">
                        <Home1 />
                </Route>

               <Route exact path='/categories-card'>
                        <CategoriesCards/>
               </Route>

                <Route exact path='/customerComplaint'>
                    <CustomerForm1 />
                </Route>
                   
                    <Route exact path ='/request-quote'>
                        <RequestQuote   />
                    </Route>
                    <Route exact path='/menuServices'>
                        <MenuServicesPage/>
                    </Route>
                    <Route exact path="/heritage">
                        <About />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                    <Route exact path="/faq">
                        <Faq />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/product/:id">
                        <Services />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/standard-product/:id">
                        <StandardProducts/>
                    </Route>
                    <Route exact path="/event">
                        <Events />
                    </Route>
                    <Route exact path="/product-by-subcategory/:id">
                        <ProductsBySubcategory />
                    </Route>
                    <Route exact path="/subcategory-by-interest/:id">
                        <SubcategoryByIntrest />
                    </Route>
                    <Route exact path="/product-by-standards-subcategory/:id">
                        <ProductsByStandardSubcategory />
                    </Route>
                    <Route exact path="/products-by-standard-methods/:id">
                        <ProductsByStandardMethods/>      
                    </Route>
                    <Route exact path="/product-by-category">
                        <ProductsByCategory />
                    </Route>
                    <Route exact path="/product-by-interest-group">
                        <ProductsByIntrestGroup />
                    </Route>
                    <Route exact path="/product-by-standards">
                        <ProductsByStandards />
                    </Route>
                    <Route exact path="/equipment-category">
                        <ProductsByEqipment />
                    </Route>
                    <Route exact path="/product-details/:id">
                        <ServicesDetails />
                    </Route>
                    <Route exact path="/country">
                        <Country />
                    </Route>

                    <Route exact path="/services/:serviceName">
                        <ProjectDetails />
                    </Route>

                    <Route exact path="/news">
                        {/* <News /> */}
                        <NewsPage />
                    </Route>
                    <Route exact path="/news-details">
                        <NewsDetails />
                    </Route>
                    <Route exact path="/product-detail">
                        <DetailPage />
                    </Route>
                    <Route exact path="/product-verification">
                        <Verification/>
                    </Route>
                    <Route exact path="/request-certifiate">
                        <RequestCertificte bannerHeading="Request Certificate" currentPage="Request Certificate of Conformity" formTitle="Fields with (*) are required to be completed." formHeading="Request Certificate of Conformity" url="request_certificate_conformity" />
                    </Route>
                    <Route exact path="/msds-request">
                        <RequestCertificte3 bannerHeading="MSDS Request" currentPage="REQUEST MATERIAL SAFETY DATA SHEET(MSDS)" formTitle="Fields with (*) are required to be completed." formHeading="MSDS Request" url="testfabrics_msds" />
                    </Route>
                    <Route exact path="/track-order">
                        <TrackOrder bannerHeading="Track Your Oder" currentPage="Track Order" formTitle="Fields with (*) are required to be completed." formHeading="Track Order" url="testfabrics_track_your_order" />
                    </Route>
                    <Route exact path="/choose-region/:country">
                        <Location bannerHeading="Welcome to Testfabrics Global Netwrok!" currentPage="Select Country" />
                    </Route>
                    <Route exact path="/choose-country">
                        <ChooseRegion bannerHeading="Welcome to Testfabrics Global Netwrok!" currentPage="Select Country" />
                    </Route>
                    <Route exact path="/swatch-request">
                        <RequestSwetch bannerHeading="Fabric Swatch Request" currentPage="Fabric Swatch Request" formTitle="Fields with (*) are required to be completed." formHeading="Fabric Swatch Request" />
                    </Route>
                    <Route exact path="/order-request">
                        <RequestOrder bannerHeading="Order Request" currentPage="Order Request" formTitle="Fields with (*) are required to be completed." formHeading="Order Request" />
                    </Route>
                    <Route exact path='/buy-form'>
                        <BuyForm bannerHeading='Buy' />
                    </Route>

                    <Route exact path="/quote-request">
                        <RequestOrder bannerHeading="Quote Request" currentPage="Quote Request" formTitle="Fields with (*) are required to be completed." formHeading="Quote Request" />
                    </Route>
                    <Route exact path="/catalog-request">
                        <RequestCatalog bannerHeading="Catalog Request" currentPage="Catalog Request" formTitle="Only available for US & Canada for anywhere else contact nearest one of the International Agents Fields with (*) are required to be completed." formHeading="Catalog Request" />
                    </Route>
                    <Route exact path="/business-inquiry">
                        <RequestInquiry bannerHeading="Business Inquiry Form" currentPage="Business Inquiry Form" formTitle="Fields with (*) are required to be completed." formHeading="Business Inquiry Form" />
                    </Route>
                    <Route exact path="/ContactLocation">
                        <ContactLocation  bannerHeading="Welcome to Testfabrics Global Netwrok!" currentPage="Select Country" />
                    </Route>
                    <Route exact path="/downloads">
                        <DownloadPage />
                    </Route>
                    <Route exact path="/">
                       
                        <NewLanding/>
                    </Route>
                    <Route exact path="/calculator">
                        <Calculator/>
                    </Route>
                    <Route exact path="/service-details">
                        <RelatedServices/>
                    </Route>
                    <Route exact path="/tell-a-friend">
                        <TellAFriend bannerHeading="Invite a Friend" currentPage="Invite a Friend" formTitle="Fields with (*) are required to be completed." formHeading="Invite your Friend" url="tell_a_friend" />
                    </Route>
                    <Route exact path="/associate-and-patners">
                        <Associates  currentPage="Associate and Patners" bannerHeading=""  />
                    </Route>
                    <Route exact path="/carrers">
                        <Carrers currentPage="career" bannerHeading=""  />
                    </Route>
                    <Route exact path="/career-detail">
                        <CareerDetail />
                    </Route>
                    <Route exact path="/privacy-policy">
                        <PagesData currentPage="Privacy Policy" bannerHeading="Privacy Policy" pageId={38}  />
                    </Route>
                    <Route exact path="/terms-condition">
                        <PagesData currentPage="Terms Condition" bannerHeading="Terms Condition" pageId={37} />
                    </Route>
                    <Route exact path ='/cookie-policy'>
                        <CookiePage/>
                    </Route>
                    <Route exact path="/intro-detail">
                        <PagesData currentPage="Intro" bannerHeading="Intro Detail" pageId={42} />
                    </Route>

                    <Route exact path="/search-page">
                        <SearchPage/>
                    </Route>
                    <Route exact path="/customer-portal">
                        <CustomerPortal/>
                    </Route>
                    <Route exact path="/agent-portal">
                        <AgentPortal/>
                    </Route>
                </Switch>
            </HashRouter>

            
            <CookieConsent
                    location="bottom"
                    buttonText="Accept All Cookies"
                    declineButtonText="Decline All Cookies"
                    cookieName="userCookieConsent"
                    style={{
                        background: '#ffffff',
                        color: '#333',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '15px 20px',
                        borderTop: '1px solid #eaeaea',
                        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                    }}
                    buttonStyle={{
                        background: '#007BFF',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderRadius: '4px',
                        padding: '10px 15px',
                        transition: 'background-color 0.3s ease',
                    }}
                    declineButtonStyle={{
                        background: '#d9534f',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderRadius: '4px',
                        padding: '10px 15px',
                        transition: 'background-color 0.3s ease',
                        marginLeft: '10px',
                    }}
                    expires={150}
                >
                    <div style={{ flex: 1 }}>
                        This website uses cookies to enhance your browsing experience. 
                        <span style={{ fontSize: '12px', display: 'block', marginTop: '5px' }}>
                            You can choose to accept all cookies or select additional cookies for specific preferences.
                        </span>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            style={{
                                color: '#007BFF',
                                borderColor: '#007BFF',
                                marginLeft: '10px',
                                transition: 'background-color 0.3s ease',
                            }}
                            onClick={() => {
                                // Logic to show additional cookie options
                            }}
                        >
                           Only Additional Cookies
                        </Button>
                    </div>
                </CookieConsent>
            
            {/* <ScrollIndicator /> */}
            {/* <Chatbot/> */}
        </UserContext.Provider>

    );
}

export default App;
