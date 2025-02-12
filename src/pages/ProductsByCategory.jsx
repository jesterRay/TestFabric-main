import React, { useEffect } from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';

import Services1 from '../components/Services1';

import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function ProductsByCategory() {
    useEffect(()=>{
        window.scrollTo(0,  (window.innerHeight / 2));
    },[])
    return (
        <>
            <Header3 />
            {/* <PageBanner bannerBg={bannerBg} currentPage="Categories" heading="MASTER CATEGORIES" /> */}
            {/* <section
            className="page-banner-wrap-2 "
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {"Interest Group Category"}
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
            {/* <PageBanner bannerBg={bannerBg} currentPage="Interest Group Category" heading="Interest Group Category" /> */}
            
            <PageBanner bannerBg={bannerBg} currentPage="Product Category" heading="Product Category" />

            <Services1 
                heading1={"Categories"} 
                heading2={"Our Categories"} 
                heading3={"MASTER CATEGORIES"} 
                apiName={"products_by_categories"} 
            />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default ProductsByCategory;
