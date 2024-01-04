import React from 'react';
import { useTimeAgo } from 'next-timeago';
import PropTypes from 'prop-types'; // Import PropTypes

const RoomItem = ({ room }) => {
  const { TimeAgo } = useTimeAgo();
  const { name, createdAt } = room;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{name}</h3>
        <TimeAgo
          datetime={new Date(createdAt)}
          className="font-normal text-black-45"
        />
      </div>
      <div className="d-flex align-items-center text-black-70">
        <span>no messages yet...</span>
      </div>
    </div>
  );
};

RoomItem.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    // Add more specific prop types if available for other room properties
  }).isRequired,
};

export default RoomItem;
