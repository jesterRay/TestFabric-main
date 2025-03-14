import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacebookFeed.css';
import testfab from '../assets/img/home1/testfab.jpg';
import { FaFacebook } from 'react-icons/fa';

const FacebookFeed = () => {
  const [posts, setPosts] = useState([]);
  // const pageId = '401722289700437'; // Your Page ID
  // const accessToken = 'EAASCj3LGvCQBO0K9Nb2o5fnNYQBLWNZCHhkqdiVIPlCJBKSCwtMlUrS6ZCoHJSjZBkQFWUqYHNuSEMpJBzZAdwunccFLevTu9FY5lYgZAxYZAnTp8LzKOa2bpJmZCzBgL9DWbd2kl3RtnAYiSqPSXTjaoQIZBlBI51b2Ml3RvyMAJWZCDrXUcqZAGNJ0mZBJn9RxZA5LZANxtUzUX'; // Your Access Token

  const pageId = '17841457642551464'; // Your Page ID
  const accessToken = "EAAIl1CMU7lkBOZBHEmMG2suEPZAZBPVAVzab4h14mXZBtPZAooljQW0AbeMMxi4L5S6Io9q2bFt1cNqd4QGgaS0dqO5X2GW6MhjL9OaeRCsO9DCIGlnQn5rGE3t0Rt6ORG7zgjwCjOI9wZBeWuWy11OiUtinOohWKkVu4NaVZBErwEEEm6RyXIEfwwd00g8eDJed5c4TiVCmMGTctZCtxvmGykQOitkZD"
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v12.0/${pageId}/media`,
          {
            params: {
              access_token: accessToken,
              fields: 'id,caption,media_url,permalink,timestamp,media_type', // Instagram fields
            }
          }
        );
        console.log("response data", response.data);
        
        // Map Instagram fields to match your existing Facebook structure
        const mappedPosts = response.data.data.map(post => ({
          id: post.id,
          message: post.caption || '', // 'caption' in Instagram is equivalent to 'message' in Facebook
          full_picture: post.media_url || '', // 'media_url' in Instagram is equivalent to 'full_picture' in Facebook
          permalink: post.permalink, // Additional useful field
          timestamp: post.timestamp,
          media_type: post.media_type
        }));
        
        setPosts(mappedPosts || []);
  
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };
  
    fetchPosts();
  }, [pageId, accessToken]);

  return (
    <div className="facebook-feed-container">
      <div className="feed-header">
        <img
          src={testfab} 
          alt="Page Profile"
          className="page-profile-img"
        />
        <span className="page-name">Testfabrics, Inc. </span>
        {/* <button className="follow-button">
          <a href="https://web.facebook.com/p/Testfabrics-Inc-100070179757613/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            Follow Us
          </a>
        </button> */}
      </div>
      <div className="posts-marquee">
        <div className="posts-row">
          {posts.map((post) => (
            <a
              href="https://web.facebook.com/p/Testfabrics-Inc-100070179757613/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              className="post-card-link"
            >
              <div className="post-card">
                {post.full_picture && (
                  <img src={post.full_picture} alt="Post" className="post-image" />
                )}
                <p className="post-message">
                  {post.message || 'No message available.'}
                </p>
                <FaFacebook className="facebook-icon" />
              </div>
            </a>
          ))}
          {/* Duplicate posts for infinite loop effect */}
          {posts.map((post) => (
            <a
              href="https://web.facebook.com/p/Testfabrics-Inc-100070179757613/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              key={`${post.id}-duplicate`}
              className="post-card-link"
            >
              <div className="post-card">
                {post.full_picture && (
                  <img src={post.full_picture} alt="Post" className="post-image" />
                )}
                <p className="post-message">
                  {post.message || 'No message available.'}
                </p>
                <FaFacebook className="facebook-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacebookFeed;
