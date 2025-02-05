import React from 'react';

function WidQuestions({ icon, title, text }) {
    return (
        <div className="single-contact-info">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="contact-info">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default WidQuestions;
