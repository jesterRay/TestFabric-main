import React from 'react';
import img1 from '../../assets/img/home3/about-3.jpg';
import img3 from '../../assets/img/home3/about-4.jpg';
import img2 from '../../assets/img/home3/about-5.jpg';
import ProcessContent from './ProcessContent';
import ProcessGrid2 from './ProcessGrid2';

function Process2() {
    return (
        <section className="promo-featured-wrapper section-padding" style={{margin:"6rem 0 5rem 0"}}>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-5 col-12 text-center">
                        <ProcessGrid2 img1={img1} img2={img2} img3={img3} />
                    </div>
                    <div className="col-xl-7 col-12 mt-5 mt-xl-0">
                        <div className="block-contents ml-xl-5 ml-50">
                            <div className="section-title-3">
                                <p className="pl-50 pr-50">Company Insights</p>
                                <h1>Our Company Work Process.</h1>
                            </div>
                            <ProcessContent
                                heading=" Testfabrics Textile Testing Services for Textile Dyes and Chemicals"
                                text=" Testfabrics is a world-leading producer and distributor of textile testing media. We offer a wide range of textile testing services to meet the needs of their clients, including quality assurance testing, colorfastness testing, physical testing, and flammability testing.

"
                            />
                            {/* <a href="contact.html" className="theme-btn theme-3">
                                Learn More
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process2;
