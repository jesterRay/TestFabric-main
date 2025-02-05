import React from 'react';

function PortfolioDetailsCard({ icon, num, heading, text }) {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="single-process-box">
                <div className="icon">
                    <img src={icon} alt="" />
                    <span>{num}</span>
                </div>
                <div className="content">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetailsCard;
