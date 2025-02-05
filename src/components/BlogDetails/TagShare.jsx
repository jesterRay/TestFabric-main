import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TagShare({ tag1, tag2, tag3, fbLink, twitterLink, instaLink, linkedInLink }) {
    return (
        <>
            <div className="row tag-share-wrap">
                <div className="col-lg-6 col-12">
                    <h4>Releted Tags</h4>
                    <div className="tagcloud">
                        <Link to="/news-details">{tag1}</Link>
                        <Link to="/news-details">{tag2}</Link>
                        <Link to="/news-details">{tag3}</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 text-end">
                    <h4>Social Share</h4>
                    <div className="social-share">
                        <a href={fbLink}>
                            <FaFacebookF />
                        </a>
                        <a href={twitterLink}>
                            <FaTwitter />
                        </a>
                        <a href={instaLink}>
                            <FaInstagram />
                        </a>
                        <a href={linkedInLink}>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default TagShare;
