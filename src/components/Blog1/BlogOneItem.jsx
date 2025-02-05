import React from 'react';
import { Link } from 'react-router-dom';

function BlogOneItem({ thumb, date, month, category, author, title, link }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-blog-card">
                    <div
                        className="featured-img bg-cover"
                        style={{
                            backgroundImage: `url(${thumb})`,
                        }}
                    />
                    <div className="post-content">
                        <div className="post-date">
                            <span>{date}</span>
                            {month}
                        </div>
                        <div className="post-meta">
                            <Link to={link} className="post-cat">
                                {category}
                            </Link>{' '}
                            /
                            <Link to={link} className="post-author">
                                {author}
                            </Link>
                        </div>
                        <h3>
                            <Link to={link}>{title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogOneItem;
