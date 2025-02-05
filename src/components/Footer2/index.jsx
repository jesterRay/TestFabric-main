import React from 'react';
import { Link } from 'react-router-dom';
import WidAbout from './WidAbout';
import WidGetTouch from './WidGetTouch';
import WidNewsletter from './WidNewsletter';
import WidPages from './WidPages';

function Footer2() {
    return (
        <footer className="footer-2 footer-wrap">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 col-12">
                            <WidAbout />
                        </div>
                        <div className="col-md-6 col-xl-2 col-12">
                            <WidPages />
                        </div>
                        <div className="col-md-6 col-xl-3 col-12 pr-xl-3">
                            <WidNewsletter />
                        </div>
                        <div className="col-md-6 col-xl-3 col-12 pl-xl-4">
                            <WidGetTouch />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12 text-center text-lg-left">
                            <div className="copyright-info">
                                <p>
                                    &copy; Copyright and Design By <Link to="/">TestFabric</Link>{' '}
                                    - 2023
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 text-center text-lg-right">
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <Link to="/faq">Faq</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">Terms and Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">Privacy and Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;
