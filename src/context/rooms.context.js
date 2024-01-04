import { off, onValue, ref } from 'firebase/database';
import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = ref(database, 'rooms');

    const handleSnapshot = (snap) => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    };

    onValue(roomListRef, handleSnapshot);

    // Cleanup function
    return () => {
      off(roomListRef, 'value', handleSnapshot);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

RoomsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useRooms = () => useContext(RoomsContext);
