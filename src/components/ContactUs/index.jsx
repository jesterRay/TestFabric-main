/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import contactData from './contactData';
import ContactItem from './ContactItem';
import Map from './Map';

function ContactUs() {
    return (
        <section className="contact-page-wrap section-padding">
            <div className="container">
                <div className="row">
                    {contactData.map((data) => (
                        <ContactItem
                            key={data.id}
                            heading={data.heading}
                            text={data.text}
                            icon={data.icon}
                            item1={data?.item1}
                            item2={data?.item2}
                            hrefTag={data?.hrefTag}
                        />
                    ))}
                </div>

                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="contact-map-wrap">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
