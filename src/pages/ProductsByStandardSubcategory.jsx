import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Services6 from '../components/Services6';
import Footer3 from '../components/Footer3';

function ProductsByStandardSubcategory() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Sub Categories" heading="Sub Categories"  />
            <Services6 />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default ProductsByStandardSubcategory;
