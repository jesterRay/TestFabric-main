import React from 'react';
import { Link } from 'react-router-dom';

function WidPages() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Pages</h4>
            </div>
            <ul>
                <li>
                    <Link to="/home-2">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/team">Pricing</Link>
                </li>
                <li>
                    <Link to="/about">Insights</Link>
                </li>
            </ul>
        </div>
    );
}

export default WidPages;
