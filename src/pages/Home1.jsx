import React from 'react';
import Analytics from '../components/Analytics';
import Blog1 from '../components/Blog1';
import Cta from '../components/Cta';
import Faq from '../components/Faq';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import Hero1 from '../components/Hero1';
import Portfolio1 from '../components/Portfolio1';
import Pricing from '../components/Pricing';
import Promo from '../components/Promo';
import Services1 from '../components/Services1';
import Subscribe from '../components/Subscribe';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function Home1() {
    return (
        <>
            <Header3 />
            <Hero1 />
            <Promo />
            <Services1 />
            <Cta />
            <Faq />
            <Portfolio1 />
            <Pricing />
            <Analytics />
            <Subscribe />
            <Blog1 />
            <Footer3 />
        </>
    );
}

export default Home1;
