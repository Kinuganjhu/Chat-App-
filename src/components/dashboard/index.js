import React from 'react';
import { Button, Drawer, Divider } from 'rsuite';
import PropTypes from 'prop-types'; // Import PropTypes
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';
const onSave = (newData)=>{
  
}
const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>
          Dashboard
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
      
        <EditableInput
        name ='Nickname' initialValue ={profile.name} onSave ={onSave}
        
        label ={<h6 className ="mb-2">Nickname</h6>}/>
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
