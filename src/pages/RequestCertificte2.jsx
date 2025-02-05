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
import Footer3 from '../components/Footer3';

function RequestCertificte2({bannerHeading,currentPage,formTitle,formHeading}) {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={bannerHeading} currentPage={currentPage} />
            {/* <ContactUs /> */}
            <br/>
            <RequestForm2 title={formTitle} heading={formHeading} />
            <Footer3 />
        </>
    );
}

export default RequestCertificte2;
