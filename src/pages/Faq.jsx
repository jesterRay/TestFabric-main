import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import ContactForm from '../components/ContactForm';
import FaqAccordion from '../components/FaqAccordion';
import Header1 from '../components/Header1';
import PageBanner from '../components/PageBanner';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';

function Faq() {
    return (
        <>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading="Get Answers" currentPage="Faq" />
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="faq-content">
                                <FaqAccordion
                                    question="Can I Use This Product Before Purchase?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                                <FaqAccordion
                                    question="What Is Your Marketing Campaign Execution Process?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                                <FaqAccordion
                                    question="What Kind Of Reports Will I Receive?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp">
                            <div className="faq-content">
                                <FaqAccordion
                                    question="What Does Your New Client Onboarding Process Consist?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                                <FaqAccordion
                                    question="What Kind Of Reports Will I Receive?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                                <FaqAccordion
                                    question="How To Buy Construction Products?"
                                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm title="Get Quote" heading="Get More Answers" />
            <Footer3 />
        </>
    );
}

export default Faq;
