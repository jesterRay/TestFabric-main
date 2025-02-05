import React from 'react';
import { Link } from 'react-router-dom';

function VideoFeaturedItem({ icon, heading, text }) {
    return (
        <div className="col-12 col-md-6">
            <div className="single-feature-item">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <div className="content">
                    <h3>
                        <Link to="/">{heading}</Link>
                    </h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoFeaturedItem;
