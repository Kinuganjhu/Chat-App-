import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false);
  
  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useProfile = ()=>useContext(ProfileContext);