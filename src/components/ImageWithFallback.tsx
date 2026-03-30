'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  fallbackClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className,
  priority,
  fallbackClassName = 'absolute inset-0 bg-gradient-to-br from-bulls-card to-bulls-blue-hover/30',
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={fallbackClassName}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
