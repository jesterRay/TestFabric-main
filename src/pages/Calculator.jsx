import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer1';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import ServiceDetails from '../components/ServiceDetails';
import ServiceSidebar from '../components/ServiceSidebar';
import Header3 from '../components/Header3';
import DetailsCarousel from '../components/ServiceDetails/DetailsCarousel';
import LengthConversionCalculator from '../components/calculator/LengthConversionCalculator';
import Footer3 from '../components/Footer3';

function Calculator() {
    return (
        <>
            <Header3 />
            <PageBanner
                bannerBg={bannerBg}
                heading="Product Details"
                currentPage="Product Details"
            />
            <section className="service-details-wrapper section-padding">
                <LengthConversionCalculator/>
            </section>
            <Footer3 />
        </>
    );
}

export default Calculator;
