import React from 'react';
import { Link } from 'react-router-dom';

function CategoryWidget({ postLink, category, num }) {
    return (
        <li>
            <Link to={postLink}>
                {category} <span>{num}</span>
            </Link>
        </li>
    );
}

export default CategoryWidget;
