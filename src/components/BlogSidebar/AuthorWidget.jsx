import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function AuthorWidget({
    title,
    authorImg,
    authorName,
    text,
    fbLink,
    twitterLink,
    instaLink,
    linkedinLink,
    YoutubeLink,
}) {
    return (
        <div className="single-sidebar-widget author-box-widegts">
            <div className="wid-title">
                <h3>{title}</h3>
            </div>
            <div className="author-info text-center">
                <div
                    className="author-img"
                    style={{
                        backgroundImage: `url(${authorImg})`,
                    }}
                />
                <h4>{authorName}</h4>
                <p>{text}</p>
                <div className="social-profile">
                    <a href={fbLink}>
                        <FaFacebookF />
                    </a>
                    <a href={twitterLink}>
                        <FaTwitter />
                    </a>
                    <a href={instaLink}>
                        <FaInstagram />
                    </a>
                    <a href={linkedinLink}>
                        <FaLinkedinIn />
                    </a>
                    <a href={YoutubeLink}>
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AuthorWidget;
