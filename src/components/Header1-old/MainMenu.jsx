import React from 'react';
import { FaTh } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function MainMenu({ hanldeOffset }) {
    return (
        <>
            <div className="main-menu-area">
                <div className="row align-center">
                    <div className="col-6 col-md-8 col-lg-10">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/">home 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/home-2">home 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/home-3">home 3</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Pages</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/team">team</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">faq</Link>
                                        </li>
                                        <li>
                                            <Link to="/projects">projects</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/news">News</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-8 col-lg-2 icon-wrapper">
                        <button type="button" className="search-btn">
                            <i>
                                <FiSearch />
                            </i>
                        </button>
                        <button type="button" onClick={hanldeOffset} className="side-menu-toggle">
                            <FaTh />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainMenu;
