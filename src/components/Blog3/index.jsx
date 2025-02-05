import React from 'react';
import blogThreeData from './blogThreeData';
import BlogThreeItem from './BlogThreeItem';

function Blog3() {
    return (
        <section className="blog-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 mb-20">
                        <div className="section-title-3">
                            <p>News</p>
                            <h1>Blog Insights</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogThreeData.map((data) => (
                        <BlogThreeItem
                            key={data.id}
                            thumb={data.thumbnail}
                            title={data.title}
                            author={data.author}
                            meta={data.meta}
                            postLink={data.link}
                            category={data.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog3;
