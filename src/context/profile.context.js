import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ProfileContext = createContext(); // Correct usage of createContext

export const ProfileProvider = ({ children }) => {
  const [profile] = useState(false); // Updated to include a setter function

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Prop validation for ProfileProvider
ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is required and of type node
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context.profile;
};
