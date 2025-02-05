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
                        <a href={fbLink}>
                            <FaFacebookF />
                        </a>
                        <a href={twitterLink}>
                            <FaTwitter />
                        </a>
                        <a href={instaLink}>
                            <FaInstagram />
                        </a>
                        <a href={youtubeLink}>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetAbout;
