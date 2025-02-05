import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import Location from '../pages/location'

function Contact() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="Contact Us" currentPage="Contact" />
            <ContactUs />
            {/* <Location/> */}
            <ContactForm title="Write Message" heading="Get In Touch" />
            <Footer3 />
        </>
    );
}

export default Contact;
