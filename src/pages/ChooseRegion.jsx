import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import RequestForm3 from '../components/ContactForm/RequestForm3';
import CountrySection from '../components/ChooseRegion';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function ChooseRegion({bannerHeading,currentPage}) {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: COUNTRY`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={bannerHeading} currentPage={currentPage} />
            <br/>
            {/* <RequestForm3 title={formTitle} heading={formHeading} url={url} /> */}
            <CountrySection/>
            <Footer3 />
        </>
    );
}

export default ChooseRegion;
