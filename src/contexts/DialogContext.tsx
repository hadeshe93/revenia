'use client';

import { createContext, useState, useCallback } from 'react';
import Modal from '@/components/Modal';

interface DialogOptions {
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

interface DialogContextType {
  show: (options: DialogOptions) => void;
  hide: () => void;
}

export const DialogContext = createContext<DialogContextType | null>(null);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialogState, setDialogState] = useState<DialogOptions & { isOpen: boolean }>({
    isOpen: false,
    content: null,
  });

  const show = useCallback((options: DialogOptions) => {
    setDialogState({
      ...options,
      isOpen: true,
    });
  }, []);

  const hide = useCallback(() => {
    setDialogState(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const onClose = useCallback(() => {
    hide();
  }, [hide]);

  return (
    <DialogContext.Provider value={{ show, hide }}>
      {children}
      <Modal
        title={dialogState.title || ''}
        isOpen={dialogState.isOpen}
        onClose={onClose}
      >
        {dialogState.content}
        {dialogState.footer}
      </Modal>
    </DialogContext.Provider>
  );
} 