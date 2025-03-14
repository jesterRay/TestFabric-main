import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Approch';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';
import Sponsors from '../components/Sponsors';
import Timeline from '../components/Timeline';
import Header3 from '../components/Header3';
import Downloads from '../components/Downloads/Downloads';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function DownloadPage() {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${"download".toUpperCase()}`}</title>

            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Downloads" heading="" />
            <Downloads/>
            {/* <AboutFeatured />
            <Approch />
            <SkillSet />
            <Sponsors />
            <Timeline /> */}
            <Footer3 />
        </>
    );
}

export default DownloadPage;
