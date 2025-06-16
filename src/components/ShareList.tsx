'use client';
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  XIcon,
  FacebookIcon,
  WhatsappIcon,
} from 'react-share';
import ShareLinkButton from './ShareLinkButton';

export interface ShareListProps {
  className?: string;
}
export default function ShareList(props: ShareListProps) {
  const { className } = props;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'Check out Flagle - An immersive flag guessing game 🚩';
  return (
    <div className={`flex justify-center items-center mt-4 gap-6 ${className || ''}`}>
      <ShareLinkButton />
      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
