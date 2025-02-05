import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacebookFeed.css';
import testfab from '../assets/img/home1/testfab.jpg';
import { FaFacebook } from 'react-icons/fa';

const FacebookFeed = () => {
  const [posts, setPosts] = useState([]);
  // const pageId = '401722289700437'; // Your Page ID
  // const accessToken = 'EAASCj3LGvCQBO0K9Nb2o5fnNYQBLWNZCHhkqdiVIPlCJBKSCwtMlUrS6ZCoHJSjZBkQFWUqYHNuSEMpJBzZAdwunccFLevTu9FY5lYgZAxYZAnTp8LzKOa2bpJmZCzBgL9DWbd2kl3RtnAYiSqPSXTjaoQIZBlBI51b2Ml3RvyMAJWZCDrXUcqZAGNJ0mZBJn9RxZA5LZANxtUzUX'; // Your Access Token

  const pageId = '125484653983679'; // Your Page ID
  const accessToken = "EAAIl1CMU7lkBO5SELkiMY1a0r7PUUMML9qzV2lcOYEPuzo8ZCj6mBDWWSianLUmQT93ZCdHg9yN0rlwL6k33LwEEBeVgVO1XuZBgQo8zlh8F45BDG4VPl5tgSMITzW1juxzwpzaU4RtB8zYUgE1PENZCgAOigNymZBi1kMnZCQaOKsqMuogKFqY0u4Y0L5UpsZBTZAX4VKoxddZAvrRW8nAucJ0kZD"
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.facebook.com/v12.0/${pageId}/posts`,
          {
            params: {
              access_token: accessToken,
              fields: 'id,message,full_picture', // Fetch message and full picture
            }
          }
        );
        console.log("response data",response.data)
        setPosts(response.data.data || []);

      } catch (error) {
        console.error('Error fetching Facebook posts:', error);
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
