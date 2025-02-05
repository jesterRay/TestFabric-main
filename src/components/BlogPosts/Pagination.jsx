import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Pagination() {
    return (
        <div className="page-nav-wrap mt-60 text-center">
            <ul>
                <li>
                    <Link to="/news">
                        <BsArrowLeft />
                    </Link>
                </li>
                <li>
                    <Link to="/news">01</Link>
                </li>
                <li>
                    <Link to="/news">02</Link>
                </li>
                <li>
                    <Link to="/news">..</Link>
                </li>
                <li>
                    <Link to="/news">10</Link>
                </li>
                <li>
                    <Link to="news">11</Link>
                </li>
                <li>
                    <Link to="news">
                        <BsArrowRight />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
