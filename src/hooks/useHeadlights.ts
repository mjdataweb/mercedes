import { useState, useEffect } from 'react';

export function useHeadlights(transitionDuration: number = 1000) {
  const [isOn, setIsOn] = useState(false);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setIsOn(prev => !prev);
    }, 3000);

    return () => clearInterval(toggleInterval);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / transitionDuration, 1);

      if (isOn) {
        setIntensity(progress * 2);
      } else {
        setIntensity(2 - progress * 2);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isOn, transitionDuration]);

  return { isOn, intensity };
}