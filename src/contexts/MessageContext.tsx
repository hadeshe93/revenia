'use client';

import { createContext, useState, useRef, useEffect } from 'react';
import Message, { MessageDetail } from '@/components/Message';
import { nanoid } from 'nanoid';

interface MessageOptions extends MessageDetail {
  duration?: number;
}

interface MessageContextType {
  show: (options: MessageOptions) => void;
}

export const MessageContext = createContext<MessageContextType | null>(null);

export function MessageProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Array<MessageDetail & { id: string }>>([]);
  const timerRef = useRef<NodeJS.Timeout[]>([]);
  const removeFuncRef = useRef<((id: string) => void)>();

  const show = (options: MessageOptions) => {
    const { duration = 2000, ...rest } = options;
    const id = nanoid();
    const newMessages = [...messages, { id, ...rest }];
    setMessages(newMessages);
    timerRef.current.push(setTimeout(() => {
      removeFuncRef.current?.(id);
    }, duration));
  };

  const hide = (id: string) => {
    const newMessages = messages.filter(item => item.id !== id);
    setMessages(newMessages);
  };

  useEffect(() => {
    removeFuncRef.current = hide;
  }, [hide]);

  return (
    <MessageContext.Provider value={{ show }}>
      {children}
      <Message messages={messages} />
    </MessageContext.Provider>
  );
} 