import React from 'react';
import heroBg from '../../assets/img/home2/hero1.jpg';

function Hero2() {
    return (
        <section className="hero-slide-wrapper hero-2">
            <div className="single-slide bg-cover" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-7">
                            <div className="hero-contents">
                                <h1>Dustrix</h1>
                                <a href="contact.html" className="theme-btn theme-2">
                                    Make Appointment
                                </a>
                                <h1>Constuction</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero2;
