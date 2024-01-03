import { off, onValue, ref } from 'firebase/database';
import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = ref(database, 'rooms');

    onValue(roomListRef, snap => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    });

    return () => {
      off(roomListRef);
    };
  }, []);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

RoomsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Prop type validation for children prop
};

export const useRooms = () => useContext(RoomsContext);
