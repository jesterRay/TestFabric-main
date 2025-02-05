import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function RelatedPost({ thumbnail, postDate, title, text, postLink }) {
    return (
        <div className="col-md-6 col-12">
            <div className="single-related-post">
                <div
                    className="featured-thumb bg-cover"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                />
                <div className="post-content">
                    <div className="post-date">
                        <span>
                            <BiCalendar
                                style={{
                                    marginRight: '5px',
                                    fontSize: '18px',
                                    marginTop: '-5px',
                                }}
                            />
                            {postDate}
                        </span>
                    </div>
                    <h4>
                        <Link to={postLink}>{title}</Link>
                    </h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default RelatedPost;
