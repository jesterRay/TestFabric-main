import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

function WidNewsletter() {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="single-footer-wid newsletter_widget">
            <div className="wid-title">
                <h4>Weekly Newsletter</h4>
            </div>
            <div className="newsletter_box">
                <p>
                    There are many variations of passages of lorem ipsum available, but the majority
                    have suffered alteration in some form by injected.
                </p>
                <form action="#">
                    <input
                        value={email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email address"
                        required
                    />
                    <button onSubmit={handleSubmit} className="submit-btn" type="submit">
                        <i className="fas fa-envelope" />
                        <FaEnvelope />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WidNewsletter;
