import React from 'react';
import authorImg from '../../assets/img/blog/author_img.jpg';
import AuthorWidget from './AuthorWidget';
import CategoryWidget from './CategoryWidget';
import feedsData from './feedsData';
import FeedsWidget from './FeedsWidget';
import InstaWidget from './InstaWidget';
import SearchWidget from './SearchWidget';
import SocialWidget from './SocialWidget';

function BlogSidebar() {
    return (
        <div className="col-12 col-lg-4">
            <div className="main-sidebar">
                <AuthorWidget
                    title="About Me"
                    authorImg={authorImg}
                    authorName="Rosalina D. Willaimson"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
                    fbLink="/"
                    twitterLink="/"
                    linkedinLink="/"
                    YoutubeLink="/"
                />
                <SearchWidget />
                <div className="single-sidebar-widget">
                    <div className="wid-title">
                        <h3>Popular Feeds</h3>
                    </div>
                    <div className="popular-posts">
                        {feedsData.map((data) => (
                            <FeedsWidget
                                key={data.id}
                                thumbnail={data.thumbnail}
                                heading={data.heading}
                                meta={data.meta}
                            />
                        ))}
                    </div>
                </div>
                <div className="single-sidebar-widget">
                    <div className="wid-title">
                        <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                        <ul>
                            <CategoryWidget postLink="/news" category="Consaltant" num="23" />
                            <CategoryWidget postLink="/news" category="Help" num="24" />
                            <CategoryWidget postLink="/news" category="Education" num="11" />
                            <CategoryWidget postLink="/news" category="Technology" num="05" />
                            <CategoryWidget postLink="/news" category="Business" num="06" />
                            <CategoryWidget postLink="/news" category="Events" num="10" />
                        </ul>
                    </div>
                </div>
                <div className="single-sidebar-widget">
                    <div className="wid-title">
                        <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                        <SocialWidget />
                    </div>
                </div>
                <div className="single-sidebar-widget instagram-widget">
                    <div className="wid-title">
                        <h3>Instagram Feeds</h3>
                    </div>
                    <InstaWidget />
                </div>
                <div className="single-sidebar-widget">
                    <div className="wid-title">
                        <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                        <a href="/">event</a>
                        <a href="/">help</a>
                        <a href="/">ux</a>
                        <a href="/">food</a>
                        <a href="/">ui</a>
                        <a href="/">water</a>
                        <a href="/">charity</a>
                        <a href="/">donate</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSidebar;
