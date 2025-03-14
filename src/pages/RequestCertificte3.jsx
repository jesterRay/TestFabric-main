import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import RequestForm4 from '../components/ContactForm/RequestForm4';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function RequestCertificte3({bannerHeading,currentPage,formTitle,formHeading,url}) {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${currentPage.slice(0,60).toUpperCase()}`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={''} currentPage={currentPage} />
            {/* <ContactUs /> */}
            <br/>
                <RequestForm4 title={formTitle} heading={formHeading} url={url} input1={'Product Item Code /Style#:'} />

            <Footer3 />
        </>
    );
}

export default RequestCertificte3;
