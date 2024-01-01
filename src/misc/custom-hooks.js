import { useState, useCallback } from 'react';

export function useStateModal(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false); // Changed to false to close the modal
  }, []);

  return { open, close, isOpen };
}
