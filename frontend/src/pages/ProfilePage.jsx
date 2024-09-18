import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import { getUser } from '../Utils/api';
import styles from '../styles/ProfilePage.module.css';

const ProfilePage = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(match.params.userId);
      setUser(response.data);
    };

    fetchUser();
  }, [match.params.userId]);

  return (
    <div className={styles.profilePage}>
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;
