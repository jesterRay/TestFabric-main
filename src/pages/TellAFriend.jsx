import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import InviteFriendForm from '../components/ContactForm/InviteFriendForm';
import Footer3 from '../components/Footer3';

function TellAFriend({bannerHeading,currentPage,formTitle,formHeading,url}) {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={bannerHeading} currentPage={currentPage} />
            {/* <ContactUs /> */}
            <br/>
            <InviteFriendForm title={formTitle} heading={formHeading} url={url} />
            <Footer3 />
        </>
    );
}

export default TellAFriend;
