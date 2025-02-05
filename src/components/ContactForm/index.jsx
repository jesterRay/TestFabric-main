/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';

function ContactForm({ title, heading }) {
    // STATES
    const [message, setMessage] = useState('');

    // HANDLER
    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact-form-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-left mb-20">
                        <span>{title}</span>
                        <h1>{heading}</h1>
                    </div>

                    <div className="row-12 col-lg-12">
                        <div className="contact-form">
                            <form action="" className="row conact-form">
                                <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="Full Name"
                                    placeholder="Enter Name"
                                    id="fullname"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="Email Address"
                                    placeholder="Enter Email Address"
                                    id="email"
                                />
                                <FormInput
                                    type="text"
                                    labelFor="phone"
                                    label="Phone Number"
                                    placeholder="Enter Number"
                                    id="phone"
                                />

                                <FormInput
                                    type="text"
                                    labelFor="subject"
                                    label="Subject"
                                    placeholder="Enter Subject"
                                    id="subject"
                                />

                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="subject">Enter Message</label>
                                        <textarea
                                            value={message}
                                            onChange={onChangeHandler}
                                            id="subject"
                                            placeholder="Enter message"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Get A Quote"
                                        onSubmit={onSubmitHandler}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
