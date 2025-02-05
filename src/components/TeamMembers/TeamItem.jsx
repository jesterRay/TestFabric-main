import React from 'react';
import { FaBehance, FaFacebookF, FaPlus, FaTwitter, FaYoutube } from 'react-icons/fa';

function TeamItem({ img, position, name, fbLink, twitterLink, behanceLink, youtubeLink }) {
    return (
        <div className="col-xl-4 col-md-6 col-12">
            <div className="single-team-member">
                <div className="member-img">
                    <img src={img} alt="member" />
                </div>
                <div className="member-details">
                    <span>{position}</span>
                    <h3>{name}</h3>
                </div>
                <div className="social-icons">
                    <div className="plus-icon">
                        <FaPlus />
                    </div>
                    <div className="top">
                        <a href={fbLink}>
                            <FaFacebookF />
                        </a>
                        <a href={twitterLink}>
                            <FaTwitter />
                        </a>
                    </div>
                    <div className="right">
                        <a href={behanceLink}>
                            <FaBehance />
                        </a>
                        <a href={youtubeLink}>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamItem;
