import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {
    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="content-block">
                            <p>Get Answers</p>
                            <h1>Get every single answers from here.</h1>
                            <div className="bg-img">
                                <img src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-4 mt-xl-0">
                        <div className="faq-content">
                            <FaqAccordion
                                question="What are Testfabrics's goals?"
                                answer="Testfabrics's goal is to be the world's leading provider of textile testing services. They are committed to providing their clients with the highest quality products and services, and they are always looking for ways to improve their services."
                            />
                            <FaqAccordion
                                question="Who are Testfabrics's target customers?"
                                answer="Testfabrics's target customers include dye and chemical producers, textile mills, dyers, printers, and their suppliers. They also provide services to museum community consumers, such as conservators, exhibit builders/designers, storage and maintenance, art handlers, and movers and installers."
                            />
                            <FaqAccordion
                                question="What are Testfabrics's strengths?"
                                answer="Testfabrics is a world-leading producer and distributor of textile testing media. They have a wide range of experience and expertise in textile testing, and they offer a wide range of services to meet the needs of their clients."
                            />
                            {/* <FaqAccordion
                                question="What are Testfabrics's goals?"
                                answer="Testfabrics is a world-leading producer and distributor of textile testing media. They offer a wide range of textile testing services to meet the needs of their clients, including quality assurance testing, colorfastness testing, physical testing, and flammability testing."
                            /> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
