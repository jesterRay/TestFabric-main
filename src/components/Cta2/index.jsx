import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import img from '../../assets/img/home2/cup.png';

function Cta2() {
    return (
        <div className="cta-funfact-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-white">
                        <div className="fun-fact d-flex align-items-center justify-content-center">
                            <img src={img} alt="" />
                            <span>92</span>
                            <p>
                                Years Of <br /> Experience
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 p-lg-0">
                        <div className="cta-wrap d-flex justify-content-center justify-content-md-around align-items-center">
                            <h2 className="text-white">Get Your Project Done</h2>
                            <a href="contact.html" className="">
                                Get A Quote <BsArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta2;
