import React from 'react';

function ServiceContact({ icon, title, text }) {
    return (
        <div className="single-contact-info">
            <div className="icon">{icon}</div>
            <div className="contact-info">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ServiceContact;
