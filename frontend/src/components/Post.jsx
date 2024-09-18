import React from 'react';
import styles from '../styles/Post.module.css';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={post.author.profilePic} alt="profile" className={styles.profilePic} />
        <div>
          <h4>{post.author.username}</h4>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      </div>
      <div className={styles.postContent}>
        <p>{post.content}</p>
        {post.media && <img src={post.media} alt="post-media" className={styles.postMedia} />}
      </div>
      <div className={styles.postActions}>
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  );
};

export default Post;
