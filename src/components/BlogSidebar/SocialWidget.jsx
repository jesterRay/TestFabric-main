import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function SocialWidget() {
    return (
        <>
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
                <FaLinkedinIn />
            </a>
            <a href="/">
                <FaYoutube />
            </a>
        </>
    );
}

export default SocialWidget;
