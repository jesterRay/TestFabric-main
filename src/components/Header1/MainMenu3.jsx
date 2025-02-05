import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-3.png';
import MobileMenu from '../MobileMenu';

function MainMenu3() {
    return (
        <header className="header-wrap header-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-5 col-md-4">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" width={"100%"} height={80} style={{margin:"10px 5px"}} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 pl-lg-3 header-none">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>Vision & Mission</Link>
                                        </li>
                                        <li>
                                            <Link >Team</Link>
                                        </li>
                                        <li>
                                            <Link >History </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="">Products</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/product-by-category">Browse By Product Category</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">Browse By Standard test Method</Link>
                                        </li>
                                       
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">Equipment</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/team">Browse By Equipment Category</Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                    <ul>
                                    <li>
                                    <Link to="/news">Custom Dyeing</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Custom Padding</Link>
                                </li>
                                    </ul>
                                </li>

                               
                                <li>
                                    <Link to="/about">Support</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/order-request">Order Request</Link>
                                        </li>
                                        <li>
                                            <Link >Quote Request</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">
                            Get A Quote
                        </Link>

                        <div className="col mobile-menu-bar">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu3;
