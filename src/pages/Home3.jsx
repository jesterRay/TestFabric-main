import React from 'react';
import Footer3 from '../components/Footer3';
import Header3 from '../components/Header3';
import Sponsors2 from '../components/Sponsors2';
import Portfolio3 from '../components/Portfolio3';
import Hero1 from '../components/Hero1';
import Portfolio4 from '../components/Portfolio4';

function Home3() {
    return (
        <>
            <Header3 />
            <div style={{ background: "#F6F6F6" }}>
                <Hero1 />
                <Portfolio3 />
                <Portfolio4 />
            </div>

            <Sponsors2 />

            <Footer3 />
        </>
    );
}

export default Home3;
