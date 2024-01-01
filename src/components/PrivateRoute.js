import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useProfile} from '../context/profile.context'
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = useProfile();
  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  // Add other prop validations for routeProps if needed
};

export default PrivateRoute;
