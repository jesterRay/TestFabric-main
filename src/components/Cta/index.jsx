import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import BgImg from '../../assets/img/subscribe_bg.jpg';

function Cta() {
    return (
        <section className="cta-wrapper">
            <div className="container">
                <div
                    className="cta-content bg-cover"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-7 pl-xl-3 col-12 text-center text-xl-left">
                            <h1 className="cta-heading">Get an easy quotation for your industry</h1>
                        </div>
                        <div className="col-xl-4 pl-xl-0 mt-4 mt-xl-0 col-12 text-center text-xl-left">
                            <div className="contact-info">
                                <div className="icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="contact-number">
                                    <a href="/">(+1) 555 234-8765</a>
                                    <span>Call Us Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
