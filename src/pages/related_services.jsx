import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';

import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import ProjectFilter2 from '../components/ProjectFilter2';
import Services2 from '../components/Services2';
import Header3 from '../components/Header3';
import { useLocation } from 'react-router-dom';
import Parser from 'html-react-parser';
import { Container } from '@material-ui/core';
import Footer3 from '../components/Footer3';


function RelatedServices() {
    const location = useLocation()
    // console.log("locationn:",location?.state)
  const { data,name } = location?.state||null;
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Related Documents" heading={name} />
            <Container style={{padding:"2rem 0"}}>
                {data && Parser(data?.data)}
            </Container>
            <Footer3 />
        </>
    );
}

export default RelatedServices;
