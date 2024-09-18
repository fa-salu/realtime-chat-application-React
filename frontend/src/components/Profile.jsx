import React from 'react';
import styles from '../styles/Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <img src={user.profilePic} alt="profile" className={styles.profileImage} />
      <h3>{user.username}</h3>
      <p>{user.bio}</p>
      <div className={styles.followInfo}>
        <span>Following: {user.following.length}</span>
        <span>Followers: {user.followers.length}</span>
      </div>
    </div>
  );
};

export default Profile;
