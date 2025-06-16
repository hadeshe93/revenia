'use client';
import { useState, ReactNode } from 'react';
import Show from '@/components/Show';
import Switch from '@/components/Switch';
import { cn } from '@/lib/style';

export interface MessageDetail {
  content: ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export interface MessageProps {
  messages: MessageDetail[];
}

export default function Message({ messages }: MessageProps) {
  return (
    <Show when={messages.length > 0} fallback={null}>
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
        {messages.map((message, index) => {
          const className = 'mt-2 py-1 px-4';
          return (
            <Switch key={`switch-${index}`} conditions={[{
              when: message.type === 'success',
              children: <MessageSuccess key={`success-${index}`} className={className}>{message.content}</MessageSuccess>,
            }, {
              when: message.type === 'error',
              children: <MessageError key={`error-${index}`} className={className}>{message.content}</MessageError>,
            }, {
              when: message.type === 'warning',
              children: <MessageWarning key={`warning-${index}`} className={className}>{message.content}</MessageWarning>,
            }, {
              when: message.type === 'info',
              children: <MessageInfo key={`info-${index}`} className={className}>{message.content}</MessageInfo>,
            }]} />
          )
        })}
      </div>
    </Show>
  );
}

interface MessageItemProps {
  children?: ReactNode;
  className?: string;
}
function MessageSuccess(props: MessageItemProps) {
  return <div className={cn('alert alert-success', props.className)}>{props.children}</div>;
}
function MessageError(props: MessageItemProps) {
  return <div className={cn('alert alert-error', props.className)}>{props.children}</div>;
}
function MessageWarning(props: MessageItemProps) {
  return <div className={cn('alert alert-warning', props.className)}>{props.children}</div>;
}
function MessageInfo(props: MessageItemProps) {
  return <div className={cn('alert alert-info', props.className)}>{props.children}</div>;
}
