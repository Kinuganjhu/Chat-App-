import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'rsuite';
import DashboardToggle from './dashboard/DashboardToggle';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const [height, setHeight] = useState(0);
  const topSidebarRef = useRef(null);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

Sidebar.propTypes = {
  aboveElHeight: PropTypes.number.isRequired,
};

export default Sidebar;
