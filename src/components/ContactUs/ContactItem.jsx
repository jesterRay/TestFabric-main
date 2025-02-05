import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function ContactItem({ icon, heading, text, item1, item2, hrefTag }) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
                <div className="top-part">
                    <div className="icon">{icon}</div>
                    <div className="title">
                        <h4>{heading}</h4>
                        <span><a href={hrefTag}>{text}</a></span>
                    </div>
                </div>
                {/* <div className="bottom-part">
                    <div className="info">
                        <p>{item1}</p>
                        <p>{item2}</p>
                    </div>
                    <div className="icon">
                        <BsArrowRight />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ContactItem;
