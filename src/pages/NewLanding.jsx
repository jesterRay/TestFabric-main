import React, { useState } from 'react';
import Cta from '../components/Cta';
import Faq from '../components/Faq';
import Hero1 from '../components/Hero1';
import Promo from '../components/Promo';

import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import About2 from '../components/About2';
import Sponsors from '../components/Sponsors';

// import Portfolio2 from '../components/Portfolio2';
import Portfolio4 from '../components/Portfolio4';
import CategoriesCards from '../components/CategoriesCard';
import DealerMap from '../components/Map/Map';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import FacebookFeed from './FacebookFeed';
import InstagramFeed from './InstagramFeed';


function NewLanding() {

    
    return (
        <>
            <Header3 />
            {/* <Hero1 /> */}
            <Promo />
            <About2/>
          {/* <FacebookFeed/> */}
          {/* <InstagramFeed/> */}
            {/* <Services1 /> */}
            {/* <Cta /> */}
            {/* <Faq /> */}
            {/* <Portfolio4/> */}
            {/* <Portfolio2/> */}
            {/* <CategoriesCards/> */}
            {/* <Sponsors/> */}
           {/* <DealerMap/> */}
           <ProductSlider/> 
        
            <Footer3 />

           
        </>
    );
}

export default NewLanding;
