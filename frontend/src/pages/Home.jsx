import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <h1>Welcome to MySocial</h1>
        <p>Connect with friends and the world around you.</p>
        <Link to="/register" className={styles.homeButton}>Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
