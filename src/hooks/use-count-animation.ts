// hooks/useCountAnimation.ts
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountAnimationProps {
  endValue: number;
  duration?: number;
  startOnView?: boolean;
  enabled?: boolean;
}

export function useCountAnimation({
  endValue,
  duration = 2000,
  startOnView = true,
  enabled = true
}: UseCountAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement>(null);

  // Easing function reutilizável
  const easeOutCubic = useCallback((t: number): number => 1 - Math.pow(1 - t, 3), []);

  // Observer para iniciar quando visível
  useEffect(() => {
    if (!enabled) {
      setCount(endValue);
      return;
    }

    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    const element = elementRef.current;
    if (!element) return;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [startOnView, hasStarted, enabled, endValue]);

  // Controlador da animação
  useEffect(() => {
    if (!hasStarted || !enabled) return;

    const startTime = performance.now();
    
    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(endValue * easeOutCubic(progress));
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [hasStarted, enabled, duration, endValue, easeOutCubic]);

  return {
    count,
    elementRef,
    isAnimating: hasStarted && count < endValue
  };
}