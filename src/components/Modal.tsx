import React from 'react';

interface ModalProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-base-content flex items-center justify-center z-50">
      <div className="bg-base-100 rounded-lg p-2 md:p-6 w-[95%] md:max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-base-content hover:text-base-content-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-base-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

