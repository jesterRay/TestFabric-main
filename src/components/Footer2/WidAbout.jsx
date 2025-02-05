import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/f_logo.png';

function WidAbout() {
    return (
        <div className="single-footer-wid site_info_box">
            <Link to="/home-2" className="f_logo">
                <img src={logo} alt="logo" />
            </Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore.
            </p>
            <Link to="/contact" className="theme-btn theme-2 mt-30">
                Get In Touch <BsArrowRight style={{ marginLeft: '5px' }} />
            </Link>
            <div className="social_link">
                <a href="/">
                    <FaFacebookF />
                </a>
                <a href="/">
                    <FaTwitter />
                </a>
                <a href="/">
                    <FaInstagram />
                </a>
                <a href="/">
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
}

export default WidAbout;
