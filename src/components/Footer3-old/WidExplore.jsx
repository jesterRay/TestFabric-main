import React from 'react';
import { Link } from 'react-router-dom';

function WidExplore() {
    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Explore Other Pages</h4>
            </div>
            <div className="splite-menu d-flex justify-content-between">
                <ul>
                    <li>
                        <Link to={'/associate-and-patners'}>ASSOCIATION AND PARTNERS</Link>
                    </li>
                    <li>
                        <Link to={'/carrers'}>CAREERS</Link>
                    </li>
                    <li><Link to="/choose-region" >Chose Your Country or Region</Link></li>
                    <li><Link to="/swatch-request" >FABRIC SWATCH REQUEST</Link></li>
                    <li><Link to="/catalog-request">CATALOG REQUEST</Link></li>
                    <li><Link to="/business-inquiry">BUSINESSINQUIRY REQUEST</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default WidExplore;
