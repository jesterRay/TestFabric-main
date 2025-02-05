import React from 'react';

function WidgetGetinTouch({ heading, text, icon, type }) {
    return (
        <>
            <div className="single-contact-info">
                <div className="icon">{icon}</div>
                <div className="contact-info">
                    <span>{heading}</span>
                    <a href={type==1?"tel:"+text:type==2?"mailto:"+text:""}>{text}</a>
                </div>
            </div>
        </>
    );
}

export default WidgetGetinTouch;
