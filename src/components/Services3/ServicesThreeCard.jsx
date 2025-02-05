import React from 'react';

function ServicesThreeCard({ thumb, heading, index, text }) {
    return (
        <div className="single-service-box bg-cover" style={{ backgroundImage: `url(${thumb})` }}>
            <div className="service-title">
                <h2>{heading}</h2>
            </div>
            <div className="hover-flip-content text-left">
                <div className="icon">
                    <h1>{index}</h1>
                </div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ServicesThreeCard;
