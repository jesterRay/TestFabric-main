import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FaQuoteLeft, FaRegComments } from 'react-icons/fa';

function QuotePost({ quoteHeading, quoteViews, quoteComments, postDate }) {
    return (
        <div className="single-blog-post quote-post format-quote">
            <div className="post-content text-white bg-cover">
                <div className="quote-content">
                    <div className="icon">
                        <FaQuoteLeft />
                    </div>
                    <div className="quote-text">
                        <h2>{quoteHeading}</h2>
                        <div className="post-meta">
                            <span>
                                <BsEye
                                    style={{
                                        marginRight: '5px',
                                        fontSize: '18px',
                                        marginTop: '-2px',
                                    }}
                                />
                                {quoteViews} Views
                            </span>
                            <span>
                                <FaRegComments
                                    style={{
                                        marginRight: '5px',
                                        fontSize: '18px',
                                        marginTop: '-2px',
                                    }}
                                />
                                {quoteComments} Comments
                            </span>
                            <span>
                                <BiCalendar
                                    style={{
                                        marginRight: '5px',
                                        fontSize: '18px',
                                        marginTop: '-2px',
                                    }}
                                />
                                {postDate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuotePost;
