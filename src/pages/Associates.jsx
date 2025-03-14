import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import InviteFriendForm from '../components/ContactForm/InviteFriendForm';
import AssociateCard from '../components/Card';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function Associates({bannerHeading,currentPage}) {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${currentPage.slice(0,60).toUpperCase()}`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={bannerHeading} currentPage={currentPage} />
            {/* <ContactUs /> */}
            <AssociateCard/>
            <br/>
            <Footer3 />
        </>
    );
}

export default Associates;
