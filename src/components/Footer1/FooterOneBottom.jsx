import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function FooterOneBottom({ name, year, logo }) {
    return (
        <>
            <div className="col-lg-4 col-12 text-center text-lg-left">
                <div className="copyright-info">
                    <p>
                        &copy; Copyright By <Link to="/">{name}</Link> - {year}
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="Dustrix" />
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block col-12">
                <div className="scroll-up-btn text-md-right text-center">
                    <Link to="/">
                        <AiOutlineArrowUp />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FooterOneBottom;
