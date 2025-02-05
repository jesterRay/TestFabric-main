import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function WidNewsletter() {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="single-footer-wid newsletter_widget pr-3">
            <div className="wid-title">
                <h4>Newsletter</h4>
            </div>
            <div className="newsletter_box">
                <p>Subscribe our newsletter to get our latest updates and news.</p>
                <form action="#">
                    <input
                        value={email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email address"
                        required
                    />
                    <button onSubmit={handleSubmit} className="submit-btn" type="submit">
                        <FaPaperPlane />
                    </button>
                </form>
                <span>*** We never gonna spamming</span>
            </div>
        </div>
    );
}

export default WidNewsletter;
