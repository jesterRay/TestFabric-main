import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import PageBanner from '../components/PageBanner';
import ProjectFilter from '../components/ProjectFilter';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function Projects() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="Case Study" currentPage="Project" />
            <ProjectFilter />
            <Footer3 />
        </>
    );
}

export default Projects;
