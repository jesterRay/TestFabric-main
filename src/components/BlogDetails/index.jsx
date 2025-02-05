import React from 'react';
import { FaComments } from 'react-icons/fa';
import thumb1 from '../../assets/img/blog/p1.jpg';
import thumb2 from '../../assets/img/blog/p2.jpg';
import BlogSidebar from '../BlogSidebar';
import CommentInput from './CommentInput';
import Comments from './Comments';
import RelatedPost from './RelatedPost';
import SinglePost from './SinglePost';
import TagShare from './TagShare';

function BlogDetails() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="blog-post-details border-wrap">
                            <SinglePost />
                            <TagShare
                                tag1="water"
                                tag2="charity"
                                tag3="donate"
                                fbLink="/"
                                twitterLink=""
                                instaLink=""
                                linkedInLink=""
                            />

                            <div className="related-post-wrap">
                                <h3>Releted Post</h3>

                                <div className="row">
                                    <RelatedPost
                                        thumbnail={thumb1}
                                        postDate="27th March 2021"
                                        title="How To Provide Fresh Water In Nigeria"
                                        text="Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing."
                                        postLink="/news-details"
                                    />
                                    <RelatedPost
                                        thumbnail={thumb2}
                                        postDate="27th March 2021"
                                        title="How To Provide Fresh Water In Nigeria"
                                        text="Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing."
                                        postLink="news-deitals"
                                    />
                                </div>
                            </div>
                            {/* COMMENTS */}
                            <Comments />
                            <div className="comment-form-wrap mt-40">
                                <h3>Post Comment</h3>

                                <form action="#" className="comment-form">
                                    <div className="single-form-input">
                                        <textarea placeholder="Type your comments...." />
                                    </div>
                                    <CommentInput type="text" placeholder="Type your name..." />
                                    <CommentInput type="email" placeholder="Type your email..." />
                                    <CommentInput type="text" placeholder="Type your websitee..." />
                                    <button
                                        onSubmit={handleSubmit}
                                        className="submit-btn"
                                        type="submit"
                                    >
                                        <FaComments
                                            style={{ marginTop: '-5px', marginRight: '10px' }}
                                        />
                                        Post Comment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* SIDEBAR */}
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
}

export default BlogDetails;
