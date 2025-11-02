// components/StatsCard.tsx
"use client";

import { useCountAnimation } from '@/hooks/useCountAnimation';
import Image from 'next/image';

interface StatsCardProps {
  iconSrc: string;
  iconAlt: string;
  value: string;
  label: string;
  className?: string;
  animate?: boolean;
  duration?: number;
}

export function StatsCard({
  iconSrc,
  iconAlt,
  value,
  label,
  className = "",
  animate = true,
  duration = 2000
}: StatsCardProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  const { count, elementRef } = useCountAnimation({
    endValue: numericValue,
    duration,
    startOnView: animate,
    enabled: animate
  });

  const formattedValue = count.toLocaleString('en-US');

  return (
    <div 
      ref={elementRef}
      className={`flex items-center w-[255px] ${className}`}
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={48}
        height={48}
        className="h-12 w-12 mr-4 shrink-0"
        priority
      />
      <div className="min-w-0">
        <h3 className="text-headline-3 text-d-grey leading-headline-3 font-semibold truncate">
          {formattedValue}
        </h3>
        <div className="body-2 text-n-grey dark:text-l-grey truncate">
          {label}
        </div>
      </div>
    </div>
  );
}