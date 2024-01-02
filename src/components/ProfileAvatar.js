import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'rsuite';
import { getNameInitials } from '../misc/helpers';

const ProfileAvatar = ({ name, ...avatarProps }) => {
  return (
    <Avatar circle {...avatarProps}>
      {getNameInitials(name)}
    </Avatar>
  );
};

ProfileAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  // Add other PropTypes for additional props if needed
};

export default ProfileAvatar;
