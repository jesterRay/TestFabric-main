import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import SearchService from '../components/SearchService';

function Search() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Search" heading="Search" />
            <SearchService />
            {/* <Process />
            <ProjectFilter2 /> */}
            <Footer3 />
        </>
    );
}

export default Search;
