import React from 'react';
import About2 from '../components/About2';
import Blog2 from '../components/Blog2';
import BrandCarousel from '../components/BrandCarousel';
import CoreFeature from '../components/CoreFeature';
import Cta2 from '../components/Cta2';
import Cta3 from '../components/Cta3';
import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';
import Hero2 from '../components/Hero2';
import ProjectFilter2 from '../components/ProjectFilter2';
import TeamMembers2 from '../components/TeamMembers2';

function Home2() {
    return (
        <>
            <Header2 />
            <Hero2 />
            <About2 />
            <Cta2 />
            <CoreFeature />
            <ProjectFilter2 />
            <BrandCarousel />
            <Cta3 />
            <TeamMembers2 />
            <Blog2 />
            <Footer2 />
        </>
    );
}

export default Home2;
