import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';
import bg from '../../assets/img/subscribe_bg.jpg';
import img from '../../assets/img/subscribe_left_bg.jpg';

function Subscribe() {
    // States
    const [email, setEmail] = useState('');
    // Handler
    const onChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section
            className="subscribe-box-wrapper text-white bg-overlay section-padding bg-cover"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div
                className="subscribe_left_bg d-none d-xl-block bg-cover"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-12 offset-xl-5">
                        <div className="cta-contents text-center text-xl-left">
                            <div className="icon">
                                <FaComments />
                            </div>
                            <h1>Get Weekly Newsletter</h1>
                            <p>Get your answer directly or get weekly updates.</p>

                            <div className="subscribe-form">
                                <form action="#">
                                    <input
                                        value={email}
                                        onChange={onChangeHandler}
                                        type="email"
                                        placeholder="Enter email address"
                                        required
                                    />
                                    <button
                                        className="submit-btn"
                                        type="submit"
                                        onSubmit={onSubmitHandler}
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
