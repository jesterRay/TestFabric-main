import React from 'react';

function IconBox({ icon, heading, text }) {
    return (
        <div className="single-icon-box">
            <div className="icon">{icon}</div>
            <div className="content">
                <h3>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default IconBox;
