import { useContext } from 'react';
import { MessageContext } from '@/contexts/MessageContext';

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within MessageProvider');
  }

  return {
    show: context.show,
  };
} 