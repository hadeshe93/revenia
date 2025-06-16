"use client";

import React, { useState, type ReactNode } from 'react';
import { ShareIcon } from '@heroicons/react/24/outline';
import { copyToClipboard } from '../lib/utils';

export interface ShareButtonProps {
  i18nText: {
    share: ReactNode;
    copied: ReactNode;
  };
  content?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ i18nText, content, className = '' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const currentContent = content || window.location.href;
    const success = await copyToClipboard(currentContent);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex flex-nowrap items-center justify-center gap-1 md:gap-2 px-2 py-2 rounded-md bg-green-500 text-white text-nowrap font-bold hover:bg-green-600 transition-colors text-sm ${className}`}
    >
      <ShareIcon className='w-4 h-4' />
      {isCopied ? i18nText.copied : i18nText.share}
    </button>
  );
};

export default ShareButton;