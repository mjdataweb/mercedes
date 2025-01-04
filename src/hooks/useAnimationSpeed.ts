import { useState, useEffect } from 'react';

export function useAnimationSpeed(initialSpeed: number = 1) {
  const [speed, setSpeed] = useState(initialSpeed);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setSpeed(prev => Math.min(prev + 0.5, 5));
      } else if (e.key === 'ArrowDown') {
        setSpeed(prev => Math.max(prev - 0.5, 0.5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return speed;
}