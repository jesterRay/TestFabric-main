import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SinglePost({
    featurdImg,
    category,
    heading,
    views,
    comments,
    meta,
    post,
    author,
    authorImg,
    postLink,
}) {
    return (
        <div className="single-blog-post">
            <div
                className="post-featured-thumb bg-cover"
                style={{
                    backgroundImage: `url(${featurdImg})`,
                }}
            />
            <div className="post-content">
                <div className="post-cat">
                    <Link to="/news">{category}</Link>
                </div>
                <h2>
                    <Link to="/news-details">{heading}</Link>
                </h2>
                <div className="post-meta">
                    <span>
                        <BsEye
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        {views} Views
                    </span>
                    <span>
                        <FaRegComments
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        {comments} Comments
                    </span>
                    <span>
                        <BiCalendar
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        {meta}
                    </span>
                </div>
                <p>{post}</p>
                <div className="d-flex justify-content-between align-items-center mt-30">
                    <div className="author-info">
                        <div
                            className="author-img"
                            style={{
                                backgroundImage: `url(${authorImg})`,
                            }}
                        />
                        <h5>
                            <Link to="/news-details">by {author}</Link>
                        </h5>
                    </div>
                    <div className="post-link">
                        <Link to={postLink}>
                            <BsArrowRight style={{ fontSize: '25px' }} /> Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
