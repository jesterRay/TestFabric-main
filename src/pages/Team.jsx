import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Portfolio1 from '../components/Portfolio1';
import SkillSet from '../components/SkillSet';
import TeamMembers from '../components/TeamMembers';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function Team() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="Our Expert Team" currentPage="Team" />
            <TeamMembers />
            {/* <SkillSet /> */}
            {/* <Portfolio1 /> */}
            <Footer3 />
        </>
    );
}

export default Team;
