import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from '../components/Services2';
import Services1 from '../components/Services1';

import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import Footer2 from '../components/Footer2';
import Footer1 from '../components/Footer1';
function ProductsByEqipment() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Equipment Categories" heading="EQUIPMENT CATEGORIES" />
            <Services1 heading1={"Equipment Categories"} heading2={"EQUIPMENT Categories"} heading3={"EQUIPMENT CATEGORIES"} apiName={"equipment_category"} />
            {/* <Process />
            <ProjectFilter2 /> */}
            {/* <Footer2 /> */}
            {/* <Footer1/> */}
            <Footer3/>
        </>
    );
}

export default ProductsByEqipment;
