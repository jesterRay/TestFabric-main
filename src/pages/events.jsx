import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services7 from '../components/Services7';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function Events() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Events" heading="Events" />
            <Services7 />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default Events;
