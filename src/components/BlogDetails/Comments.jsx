import React from 'react';
import { FaReply } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img2 from '../../assets/img/blog/author2.jpg';
import img3 from '../../assets/img/blog/author3.jpg';
import img1 from '../../assets/img/blog/author_img.jpg';
import ReplayComment from './ReplayComment';

function Comments() {
    return (
        <div className="comments-section-wrap pt-40">
            <div className="comments-heading">
                <h3>03 Comments</h3>
            </div>
            <ul className="comments-item-list">
                <li className="single-comment-item">
                    <div className="author-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="author-info-comment">
                        <div className="info">
                            <h5>
                                <Link to="/news-details">Rosalina Kelian</Link>
                            </h5>
                            <span>19th May 2018</span>
                            <Link to="/news-details" className="theme-btn minimal-btn">
                                <FaReply style={{ marginTop: '-3px', marginRight: '5px' }} />
                                Reply
                            </Link>
                        </div>
                        <div className="comment-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad
                                minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="single-comment-item">
                    <div className="author-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="author-info-comment">
                        <div className="info">
                            <h5>
                                <Link to="/news-details">Arista Williamson</Link>
                            </h5>
                            <span>21th Feb 2020</span>
                            <Link to="/news-details" className="theme-btn minimal-btn">
                                <FaReply style={{ marginTop: '-3px', marginRight: '5px' }} />
                                Reply
                            </Link>
                        </div>
                        <div className="comment-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                    <ReplayComment
                        authorImg={img3}
                        date="29th Jan 2021"
                        name="Salman"
                        comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.."
                    />
                </li>
            </ul>
        </div>
    );
}

export default Comments;
