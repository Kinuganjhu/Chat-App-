import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue, off } from 'firebase/database'; // Adjusted import

import { auth, database } from '../misc/firebase';
import PropTypes from 'prop-types';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let userRef; // Declare userRef outside the useEffect to maintain reference

  useEffect(() => {
    const authUnsub = onAuthStateChanged(auth, (authObj) => {
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);
        onValue(userRef, (snap) => {
          const userData = snap.val();
          if (userData) {
            const { name, createdAt } = userData;
            const data = {
              name,
              createdAt,
              uid: authObj.uid,
              email: authObj.email,
            };
            setProfile(data);
          } else {
            setProfile(null);
          }
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          off(userRef); // Detach the listener if userRef exists
        }
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();
      if (userRef) {
        off(userRef); // Clean up the listener when unmounting
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProfile = () => useContext(ProfileContext);
