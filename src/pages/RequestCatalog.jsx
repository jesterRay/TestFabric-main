import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import RequestForm from '../components/ContactForm/RequestForm';
import RequestForm2 from '../components/ContactForm/RequestForm2';
import CatalogForm from '../components/ContactForm/CatalogForm';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function RequestCatalog({bannerHeading,currentPage,formTitle,formHeading}) {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${currentPage.slice(0,60).toUpperCase()}`}</title>
            </Helmet>

            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={''} currentPage={currentPage} />
            {/* <ContactUs /> */}
            <br/>
            <CatalogForm title={formTitle} heading={formHeading} />
            <Footer3 />
        </>
    );
}

export default RequestCatalog;
