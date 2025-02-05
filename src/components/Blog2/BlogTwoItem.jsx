import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BlogTwoItem({ thumb, author, meta, title, postLink }) {
    return (
        <div className="single-blog-item">
            <div className="featured-thumb bg-cover" style={{ backgroundImage: `url(${thumb})` }} />
            <div className="post-content">
                <div className="post-meta">
                    <div className="post-author">
                        <FaUser
                            style={{
                                marginRight: '5px',

                                marginTop: '-3px',
                            }}
                        />
                        <a href="/">{author}</a>
                    </div>
                    <div className="post-date">
                        <BiCalendar
                            style={{
                                marginRight: '5px',

                                marginTop: '-2px',
                            }}
                        />
                        <span>{meta}</span>
                    </div>
                </div>
                <h3>
                    <Link to={postLink}>{title}</Link>
                </h3>
            </div>
        </div>
    );
}

export default BlogTwoItem;
