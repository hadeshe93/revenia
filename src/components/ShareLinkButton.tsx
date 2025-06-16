"use client";

import React, { useState } from 'react';
import { CheckIcon, LinkIcon } from '@heroicons/react/24/outline';
import { copyToClipboard } from '../lib/utils';

export interface ShareLinkButtonProps {
  link?: string;
  className?: string;
}

const ShareLinkButton: React.FC<ShareLinkButtonProps> = ({ link, className = '' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const currentContent = link || window.location.href;
    const success = await copyToClipboard(currentContent);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex items-center justify-center p-2 rounded-full bg-neutral-500 text-white hover:bg-neutral-600 transition-colors ${className}`}
    >
      
      {isCopied ? <CheckIcon className='w-4 h-4' /> : <LinkIcon className='w-4 h-4' />}
    </button>
  );
};

export default ShareLinkButton;