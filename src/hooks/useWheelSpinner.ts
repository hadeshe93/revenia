import { useContext } from 'react';
import { WheelSpinnerContext } from '@/contexts/WheelSpinnerContext';

export function useWheelSpinner() {
  const context = useContext(WheelSpinnerContext);
  if (!context) {
    throw new Error('useWheelSpinner must be used within WheelSpinnerProvider');
  }

  return {
    ...context,
  };
} 