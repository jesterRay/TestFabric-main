import React from 'react';
import faqImg from '../../assets/img/home3/faq_man.png';
import faqBg from '../../assets/img/map_faq.png';
import FaqAccordion from '../FaqAccordion';

function Faq2() {
    return (
        <section
            className="faq-section faq-2 section-padding bg-contain"
            style={{ backgroundImage: `url(${faqBg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12 d-none d-xl-block">
                        <div className="faq-left-img">
                            <div className="man-img">
                                <img src={faqImg} alt="man" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-12">
                        <div className="section-title-3 mb-40">
                            <p>faq</p>
                            <h1>Get Every Answer</h1>
                        </div>

                        <div className="faq-content">
                            <FaqAccordion
                                question="What are Testfabrics's goals?"
                                answer="Testfabrics's goal is to be the world's leading provider of textile testing services. They are committed to providing their clients with the highest quality products and services, and they are always looking for ways to improve their services."
                            />
                            <FaqAccordion
                                question="Who are Testfabrics's target customers?"
                                answer="Testfabrics's target customers include dye and chemical producers, textile mills, dyers, printers, and their suppliers. They also provide services to museum community consumers, such as conservators, exhibit builders/designers, storage and maintenance, art handlers, and movers and installers."
                            />
                            {/* <FaqAccordion
                                question="You Can Rely On Amwerk As A Critical Part?"
                                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi."
                            /> */}
                            <FaqAccordion
                                question="What are Testfabrics's goals?"
                                answer="Testfabrics's goal is to be the world's leading provider of textile testing services. They are committed to providing their clients with the highest quality products and services, and they are always looking for ways to improve their services."
                            />
                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq2;
