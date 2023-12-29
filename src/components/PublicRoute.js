import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  // Add other prop validations for routeProps if needed
};

export default PublicRoute;
