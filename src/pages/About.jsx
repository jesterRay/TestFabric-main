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
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: HERITAGE`}</title>
            </Helmet>
            <Header3 />
            {/* <PageBanner  /> */}
            {/* <AboutFeatured /> */}
            {/* <Approch /> */}
            {/* <SkillSet /> */}
            <Timeline />
            {/* <Sponsors /> */}
            
            <Footer3 />
        </>
    );
}

export default About;
