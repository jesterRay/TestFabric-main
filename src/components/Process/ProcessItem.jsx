import React from 'react';

function ProcessItem({ number, heading, text }) {
    return (
        <div className="single-process-item">
            <div className="setp-number">
                <h1>{number}</h1>
            </div>
            <div className="content">
                <h3>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ProcessItem;
