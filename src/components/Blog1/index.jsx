import React from 'react';
import blogOneData from './BlogOneData';
import BlogOneItem from './BlogOneItem';

function Blog1() {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <span>News</span>
                            <p>News Feed</p>
                            <h1>Blog Insights</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogOneData.map((data) => (
                        <BlogOneItem
                            key={data.id}
                            thumb={data.thumbnail}
                            date={data.date}
                            month={data.month}
                            category={data.category}
                            author={data.author}
                            title={data.title}
                            link={data.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog1;
