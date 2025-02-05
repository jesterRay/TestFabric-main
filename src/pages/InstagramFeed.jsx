// src/InstagramFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacebookFeed.css';
// import profileImage from '../assets/img/home1/instagram-profile.jpg';
import { FaInstagram } from 'react-icons/fa';
import testfab from '../assets/img/home1/testfab.jpg'


const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media`,
          {
            params: {
              access_token: accessToken,
              fields: 'id,caption,media_url,thumbnail_url', // Request caption and image URLs
            }
          }
        );
        setPosts(response.data.data || []);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, [accessToken]);

  return (
    <div className="instagram-feed-container">
      <div className="feed-header">
        <img
          src={testfab}
          alt="Instagram Profile"
          className="page-profile-img"
        />
        <span className="page-name">Testfabrics</span>
        <button className="follow-button">Follow Us</button>
      </div>
      <div className="posts-marquee">
        <div className="posts-row">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              {post.media_url && (
                <img src={post.media_url} alt="Instagram Post" className="post-image" />
              )}
              <p className="post-caption">
                {post.caption || 'No caption available.'}
              </p>
              <FaInstagram className="instagram-icon" />
            </div>
          ))}
          {/* Duplicate posts for infinite loop effect */}
          {posts.map((post) => (
            <div className="post-card" key={`${post.id}-duplicate`}>
              {post.media_url && (
                <img src={post.media_url} alt="Instagram Post" className="post-image" />
              )}
              <p className="post-caption">
                {post.caption || 'No caption available.'}
              </p>
              <FaInstagram className="instagram-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
