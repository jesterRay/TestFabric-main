import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogDetails from '../components/BlogDetails';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function NewsDetails() {
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: NEWS DETAILS`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="News Details" currentPage="News Details" />
            <BlogDetails />
            <Footer3 />
        </>
    );
}

export default NewsDetails;
