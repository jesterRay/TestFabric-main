import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import InviteFriendForm from '../components/ContactForm/InviteFriendForm';
import AssociateCard from '../components/Card';
import CarrerCard from '../components/Card/CarrerCard';
import Footer3 from '../components/Footer3';
import PagesDataDb from '../components/PagesDataDb';

function PagesData({bannerHeading,currentPage,pageId}) {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={bannerHeading} currentPage={currentPage}  />
            {/* <ContactUs /> */}
            <PagesDataDb pageId={pageId}/>
            <br/>
            <Footer3 />
        </>
    );
}

export default PagesData;
