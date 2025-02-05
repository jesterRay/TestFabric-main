import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/home3/hero-3.jpg';
import { motion } from 'framer-motion';
import { textVariant,planetVariants } from '../../helpers/motion';
function Hero3() {
    return (
        <section className="hero-slide-wrapper hero-3">
            <div className="slide-items">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row align-items-center text-center text-xl-start">
                            <div className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                            {/* <motion.div
                                variants={planetVariants("left")}
                                initial="hidden"
                                whileInView="show"
                            > */}
                                <div className="hero-contents bounceUp ">
                                    <p style={{fontWeight:"bold",fontSize:"18px"}}>Your Source for Quality Test Materials</p>
                                    <h1>Standard Fabrics, Soiled Fabrics and much more!</h1>
                                    <Link to="/intro-detail" className="theme-btn theme-3" style={{color:"white",backgroundColor:"#001659",borderColor:"#001659"}} >
                                        More Detail <BsArrowRight />
                                    </Link>
                                    {/* <Link to="/about" className="theme-btn theme-3">
                                        learn more
                                    </Link> */}
                                </div>
                            {/* </motion.div> */}
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div
                                    className="hero-img bg-cover"
                                    style={{ backgroundImage: `url(${heroImg})` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
