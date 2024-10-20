'use client';

import React from 'react';

interface BadgeProps {
  letter: string;
  color: 'blue' | 'green';
}

const Badge: React.FC<BadgeProps> = ({ letter, color }) => {
  const bgColor = color === 'blue' ? 'bg-blue-100' : 'bg-green-100';
  const textColor = color === 'blue' ? 'text-blue-800' : 'text-green-800';

  return (
    <span
      className={`${bgColor} ${textColor} w-8 h-8 rounded-full mr-2 flex-shrink-0 flex items-center justify-center`}
    >
      {letter}
    </span>
  );
};

export default Badge;
