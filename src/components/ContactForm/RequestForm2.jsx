/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';

function RequestForm2({ title, heading }) {
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

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">
                            <form action="" className="row conact-form">
                                <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="* Product Lot Number:"
                                    placeholder="Enter Name"
                                    id="fullname"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="* Title"
                                    placeholder="Enter Title"
                                    id="email"
                                />
                                 <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="* Address"
                                    placeholder="Enter Address"
                                    id="fullname"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="* City"
                                    placeholder="Enter City"
                                    id="email"
                                />
                                 <FormInput
                                    type="text"
                                    labelFor="fullname"
                                    label="* State"
                                    placeholder="Enter State"
                                    id="fullname"
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
                                    labelFor="fullname"
                                    label="* Fax"
                                    placeholder="Enter Fax Number"
                                    id="fullname"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="* Email Address"
                                    placeholder="Enter Email Address"
                                    id="email"
                                />
                                

                                <FormInput
                                    type="text"
                                    labelFor="subject"
                                    label="* Product Name :"
                                    placeholder="Enter Subject"
                                    id="subject"
                                />
{/* 
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
                                </div> */}

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

export default RequestForm2;
