import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

function WidGetTouch() {
    return (
        <div className="single-footer-wid site_info_widget">
            <div className="wid-title">
                <h4>Get In Touch</h4>
            </div>
            <div className="contact-us">
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-phone" />
                        <AiOutlinePhone />
                    </div>
                    <div className="contact-info">
                        <span>Phone Number</span>
                        <p>+1 (570) 603 0432</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                        <i className="fal fa-envelope" />
                        <AiOutlineMail />
                    </div>
                    <div className="contact-info">
                        <span>Email Address</span>
                        <p> info@testfabrics.com</p>
                    </div>
                </div>
                <div className="single-contact-info">
                    <div className="icon">
                        <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info">
                        <span>Office Address</span>
                        <p>415 Delaware Avenue,
West Pittston, PA 18643, USA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WidGetTouch;
