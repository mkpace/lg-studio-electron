'use client';

import React, { ReactNode } from 'react';
import Badge from '../atoms/badge';

interface MessageProps {
  type: 'P' | 'A';
  children: ReactNode;
}

const Message: React.FC<MessageProps> = ({ type, children }) => {
  return (
    <div className="mb-4 flex items-start">
      <Badge letter={type} color={type === 'P' ? 'blue' : 'green'} />
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default Message;
