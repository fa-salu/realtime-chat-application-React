import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">MySocial</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/profile" className={styles.navLink}>Profile</Link>
        <Link to="/feed" className={styles.navLink}>Feed</Link>
        <Link to="/logout" className={styles.navLink}>Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
