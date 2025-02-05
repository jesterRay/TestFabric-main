import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ApprochCard({ thumbnail, icon, heading, text, btnText, pageLink }) {
    return (
        <>
            <div className="col-md-6 col-xl-6 col-12">
                <div className="single-approch-card">
                    <div
                        className="card-thumb bg-cover"
                        style={{
                            backgroundImage: `url(${thumbnail})`,
                        }}
                    />
                    <div className="content">
                        {/* <div className="case-cat">
                            <Link to="/project-details">{icon}</Link>
                        </div> */}
                        <h3>
                            <Link to={pageLink}>{heading}</Link>
                        </h3>
                        <p>{text}</p>
                        {/* <Link to={pageLink} className="read-btn">
                            {btnText} <BsArrowRight />
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApprochCard;
