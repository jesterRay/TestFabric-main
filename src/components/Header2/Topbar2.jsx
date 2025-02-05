import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {
    FaBehance,
    FaFacebookF,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaTwitter,
    // eslint-disable-next-line prettier/prettier
    FaYoutube
} from 'react-icons/fa';

function Topbar2() {
    return (
        <div className="top-bar d-none d-lg-block">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                        <div className="contact-data">
                            <ul>
                                <li>
                                    <AiOutlineMail
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />
                                    info@testfabrics.com
                                </li>
                                <li>
                                    <AiOutlinePhone
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    +1 (570) 603 0432
                                </li>
                                <li>
                                    <FaMapMarkerAlt
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    415 Delaware Avenue,
West Pittston, PA 18643, USA
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-0 col-12 justify-content-between justify-content-lg-end d-flex align-items-center">
                        <div className="social_link mr-20">
                            <a href="/home-2">
                                <FaFacebookF />
                            </a>
                            <a href="/home-2">
                                <FaTwitter />
                            </a>
                            <a href="home-2">
                                <FaLinkedinIn />
                            </a>
                            <a href="home-2">
                                <FaBehance />
                            </a>
                            <a href="home-2">
                                <FaYoutube />
                            </a>
                        </div>

                        <div className="lan-select-menu">
                            <form>
                                <select id="lan">
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Bangla</option>
                                    <option>Hindi</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar2;
