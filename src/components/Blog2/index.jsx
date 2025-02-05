import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cardImg from '../../assets/img/card_blog.jpg';
import blogTwoData from './blogTwoData';
import BlogTwoItem from './BlogTwoItem';

function Blog2() {
    return (
        <section className="blog-section section-bg section-padding">
            <div className="container">
                <div className="row align-items-center mb-30">
                    <div className="col-md-7 col-lg-6 col-12">
                        <div className="section-title style-2">
                            <p>Our Insights</p>
                            <h1>Insights News</h1>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6 mt-4 mt-md-0 text-md-end col-12">
                        <Link to="/news" className="theme-btn theme-2">
                            Blog Insights <BsArrowRight style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 pr-3 pl-3 pr-lg-5">
                        <div
                            className="single-blog-vcard bg-cover"
                            style={{
                                backgroundImage: `linear-gradient( 0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${cardImg})`,
                            }}
                        >
                            <div className="post-content text-white">
                                <div className="post-meta d-flex">
                                    <div className="post-author mr-2">
                                        <FaUser
                                            style={{
                                                marginRight: '5px',

                                                marginTop: '-3px',
                                            }}
                                        />
                                        <a href="/">Salman Ahmed</a>
                                    </div>
                                    |
                                    <div className="post-date ml-2">
                                        <BiCalendar
                                            style={{
                                                marginRight: '5px',

                                                marginTop: '-2px',
                                            }}
                                        />
                                        <span>24th June 2021</span>
                                    </div>
                                </div>
                                <h3>
                                    <Link to="/news-details">
                                        Should one hire a professional cleaning company
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-list-view">
                            {blogTwoData.map((data) => (
                                <BlogTwoItem
                                    key={data.id}
                                    thumb={data.thumbnail}
                                    author={data.author}
                                    meta={data.meta}
                                    title={data.title}
                                    postLink={data.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog2;
