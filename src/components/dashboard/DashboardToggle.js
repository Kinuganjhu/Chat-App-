import React, { useCallback } from "react";
import { Button, Icon, Drawer, Alert } from 'rsuite';
import PropTypes from 'prop-types';

import { useModalState, useMediaQuery } from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';
import Dashboard from '.';

const DashboardToggle = ({ onSignOut }) => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const handleSignOut = useCallback(() => {
    auth.signOut();
    Alert.info('Signed out', 4000);

    close();
  }, [onSignOut, close]);

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
        <Drawer.Body>
          <Dashboard onSignOut={handleSignOut} />
        </Drawer.Body>
      </Drawer>
    </>
  );
};

DashboardToggle.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default DashboardToggle;
