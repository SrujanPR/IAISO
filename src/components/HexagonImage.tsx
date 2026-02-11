import { forwardRef } from 'react';

interface HexagonImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  frameOpacity?: number;
}

const HexagonImage = forwardRef<HTMLDivElement, HexagonImageProps>(
  ({ src, alt, className = '', size = 'lg', frameOpacity = 0.7 }, ref) => {
    const sizes = {
      sm: 'w-20 h-[92px]',
      md: 'w-32 h-[184px]',
      lg: 'w-64 md:w-80 lg:w-[500px] h-[280px] md:h-[350px] lg:h-[450px]',
      xl: 'w-80 md:w-[500px] lg:w-[700px] h-[350px] md:h-[450px] lg:h-[600px]',
    };

    return (
      <div ref={ref} className={`relative ${sizes[size]} ${className}`}>
        {/* Hexagon Frame */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 173"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="hexClip">
              <polygon points="100,0 200,43.25 200,129.75 100,173 0,129.75 0,43.25" />
            </clipPath>
          </defs>
          {/* Frame outline */}
          <polygon
            points="100,0 200,43.25 200,129.75 100,173 0,129.75 0,43.25"
            fill="none"
            stroke="var(--rooman-navy)"
            strokeWidth="3"
            opacity={frameOpacity}
          />
        </svg>

        {/* Image container with hexagon clip */}
        <div
          className="absolute inset-[3px] overflow-hidden"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
);

HexagonImage.displayName = 'HexagonImage';

export default HexagonImage;
