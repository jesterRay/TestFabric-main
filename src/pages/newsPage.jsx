import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services7 from '../components/Services7';
import Header3 from '../components/Header3';
import Services9 from '../components/Services9';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function NewsPage() {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: NEWS`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="News" heading="News" />
            <Services9 />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default NewsPage;
