import { useState } from 'react';

interface FallbackImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function FallbackImage({ src, fallbackSrc, alt, width, height, className }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setCurrentSrc(fallbackSrc)}
      style={{ objectFit: 'cover' }} // to mimic Next.js Image behavior
    />
  );
}
