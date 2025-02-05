import React from 'react';
import { FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ReplayComment({ authorImg, name, date, comment }) {
    return (
        <ul className="replay-comment">
            <li className="single-comment-item">
                <div className="author-img">
                    <img src={authorImg} alt="" />
                </div>
                <div className="author-info-comment">
                    <div className="info">
                        <h5>
                            <Link to="/news-details">{name}</Link>
                        </h5>
                        <span>{date}</span>
                        <Link to="/news-details" className="theme-btn minimal-btn">
                            <FaReply style={{ marginTop: '-3px', marginRight: '5px' }} />
                            Reply
                        </Link>
                    </div>
                    <div className="comment-text">
                        <p>{comment}</p>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default ReplayComment;
