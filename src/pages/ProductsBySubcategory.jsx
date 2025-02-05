import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';
import Services4 from '../components/Services4';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import { useLocation, useParams } from 'react-router-dom';

function ProductsBySubcategory() {
    // let location = useLocation();
    // let {categoryId} = useParams()

    return (
        <>
            <Header3 />
            {/* hshshs{location?.state?.params} */}
            {/* <PageBanner bannerBg={bannerBg} currentPage="Sub Categories" heading="SUB-CATEGORIES" breadCrumb={false} /> */}
            <Services4 />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default ProductsBySubcategory;
