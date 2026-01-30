
import React from 'react';

interface ShapeProps {
  className?: string;
  type?: 'mirror' | 'tooth' | 'spatula';
}

const BackgroundShapes: React.FC<ShapeProps> = ({ className, type = 'tooth' }) => {
  const getShape = () => {
    switch (type) {
      case 'mirror':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1px]">
            <circle cx="50" cy="35" r="25" />
            <line x1="50" y1="60" x2="50" y2="100" />
          </svg>
        );
      case 'spatula':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1px]">
            <path d="M40 10 L60 10 L65 40 L65 90 C65 95 35 95 35 90 L35 40 Z" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[1px]">
            <path d="M30 20 C30 5, 70 5, 70 20 C70 40, 60 45, 60 70 C60 85, 40 85, 40 70 C40 45, 30 40, 30 20 Z" />
          </svg>
        );
    }
  };

  return (
    <div className={`pointer-events-none opacity-[0.03] select-none ${className}`}>
      {getShape()}
    </div>
  );
};

export default BackgroundShapes;
