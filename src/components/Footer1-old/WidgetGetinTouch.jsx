import React from 'react';

function WidgetGetinTouch({ heading, text, icon }) {
    return (
        <>
            <div className="single-contact-info">
                <div className="icon">{icon}</div>
                <div className="contact-info">
                    <span>{heading}</span>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

export default WidgetGetinTouch;
