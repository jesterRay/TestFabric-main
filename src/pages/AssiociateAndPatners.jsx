import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from '../components/Services2';
import Services1 from '../components/Services1';

import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function AssiociateAndPatners() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Categories" heading="MASTER CATEGORIES" />
            <Services1 heading1={"Assiociate And Patners"} heading2={"Our Patners"} heading3={"Assiociate And Patners"} apiName={"associations_and_partners"} />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default AssiociateAndPatners;
