import React from 'react';
import PropTypes from 'prop-types';
import RoomItem from './RoomItem';
import { Nav } from 'rsuite';

const ChatRoomList = ({ aboveElHeight }) => {
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
    >
      <Nav.Item>
        <RoomItem />
      </Nav.Item>
    </Nav>
  );
}

ChatRoomList.propTypes = {
  aboveElHeight: PropTypes.number.isRequired,
};

export default ChatRoomList;
