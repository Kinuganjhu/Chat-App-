import React from 'react';
import { useTimeAgo } from 'next-timeago';

const RoomItem = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">Room Name</h3>
        <TimeAgo
          datetime={new Date()}
          className="font-normal text-black-45"
        />
      </div>
      <div className="d-flex align-items-center text-black-70">
        <span>no messages yet...</span>
      </div>
    </div>
  );
}

export default RoomItem;
