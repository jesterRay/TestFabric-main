import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import BlogPosts from '../components/BlogPosts';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function News() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="News Feeds" currentPage="News" />
            <BlogPosts />
            <Footer3 />
        </>
    );
}

export default News;
