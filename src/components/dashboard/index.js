import React from 'react';
import { Button, Drawer, Divider, Alert } from 'rsuite';
import { database } from '../../misc/firebase';
import PropTypes from 'prop-types'; // Import PropTypes
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import { ref, set } from 'firebase/database'; // Correct import for ref and set functions
import ProviderBlock from './ProviderBlock';
const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async newData => {
    const userNicknameRef = ref(database, `/profiles/${profile.uid}/name`);
    try {
      await set(userNicknameRef, newData);
      Alert.success('Nickname has been updated', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>
          Dashboard
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock/>
        <Divider />

        <EditableInput
          name='Nickname'
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <AvatarUploadBtn/>
      </Drawer.Body>
      <Drawer.Footer>
        {/* Ensure the onSignOut function is used */}
        <Button block color="red" onClick={onSignOut}>
          Sign Out
        </Button>
      </Drawer.Footer>
    </>
  );
};

// Add PropTypes for the onSignOut function
Dashboard.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default Dashboard;
