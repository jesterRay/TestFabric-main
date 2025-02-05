import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function WidgetAbout({ text, fbLink, twitterLink, instaLink, youtubeLink }) {
    return (
        <>
            <div className="col-md-6 col-xl-3 col-12">
                <div className="single-footer-wid">
                    <div className="wid-title">
                        <h4>About Us</h4>
                    </div>
                    <p>{text}</p>
                    <div className="social_link">
                        <a href={fbLink} target='_blank'>
                            <FaFacebookF />
                        </a>
                        <a href={twitterLink} target='_blank'>
                            <FaTwitter />
                        </a>
                        <a href={instaLink} target='_blank'>
                            <FaInstagram />
                        </a>
                        <a href={youtubeLink} target='_blank'>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetAbout;
