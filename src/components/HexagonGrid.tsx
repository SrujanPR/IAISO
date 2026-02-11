import { forwardRef } from 'react';

interface HexagonGridProps {
  className?: string;
  opacity?: number;
  side?: 'left' | 'right';
}

const HexagonGrid = forwardRef<SVGSVGElement, HexagonGridProps>(
  ({ className = '', opacity = 0.1, side = 'right' }, ref) => {
    const hexSize = 60;
    const hexWidth = hexSize * 2;
    const hexHeight = hexSize * Math.sqrt(3);

    return (
      <svg
        ref={ref}
        className={`absolute pointer-events-none ${
          side === 'right' ? 'right-0' : 'left-0'
        } ${className}`}
        width="600"
        height="800"
        viewBox="0 0 600 800"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="hexPattern"
            width={hexWidth * 0.75}
            height={hexHeight}
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points={`${hexSize},0 ${hexSize * 1.5},${hexHeight / 4} ${hexSize * 1.5},${
                (hexHeight * 3) / 4
              } ${hexSize},${hexHeight} ${hexSize * 0.5},${(hexHeight * 3) / 4} ${hexSize * 0.5},${
                hexHeight / 4
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-rooman-navy"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="600" height="800" fill="url(#hexPattern)" />
      </svg>
    );
  }
);

HexagonGrid.displayName = 'HexagonGrid';

export default HexagonGrid;
