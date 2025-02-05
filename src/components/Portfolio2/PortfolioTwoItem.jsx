import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function PortfolioTwoItem({ name, cost, heading, img }) {
    return (
        <div className="single-project-item constructions medical">
            <div className="project-thumb bg-cover" style={{ backgroundImage: `url(${img})` }} />
            <div className="project-details">
                <Link to="/project-details" className="icon">
                    <BsArrowRight />
                </Link>
                <div className="meta">
                    <span>{name}</span> | <span>{cost}</span>
                </div>
                <h3>
                    <Link to="/project-details">{heading}</Link>
                </h3>
            </div>
        </div>
    );
}

export default PortfolioTwoItem;
