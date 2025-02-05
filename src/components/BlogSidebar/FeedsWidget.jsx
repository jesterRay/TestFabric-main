import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function FeedsWidget({ thumbnail, heading, meta }) {
    return (
        <div className="single-post-item">
            <div
                className="thumb bg-cover"
                style={{
                    backgroundImage: `url(${thumbnail})`,
                }}
            />
            <div className="post-content">
                <h5>
                    <Link to="/news-details">{heading}</Link>
                </h5>
                <div className="post-date">
                    <BiCalendar />
                    {meta}
                </div>
            </div>
        </div>
    );
}

export default FeedsWidget;
