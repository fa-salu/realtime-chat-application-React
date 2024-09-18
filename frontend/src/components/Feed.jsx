import React, { useEffect, useState } from 'react';
import { getPosts } from '../Utils/api';
import Post from './Post';
import styles from '../styles/Feed.module.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.feed}>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
