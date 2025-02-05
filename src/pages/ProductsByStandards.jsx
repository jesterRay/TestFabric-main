import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Services5 from '../components/Services5';
import Footer3 from '../components/Footer3';

function ProductsByStandards() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="STANDARD TEST METHOD" heading="STANDARD TEST METHOD" />

            <Services5 heading1={""} heading2={""} heading3={""} apiName={"products_by_standard_methods"} />
            
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default ProductsByStandards;
