import { forwardRef } from 'react';

interface HexagonFrameProps {
  className?: string;
  strokeWidth?: number;
  strokeColor?: string;
  fill?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const HexagonFrame = forwardRef<SVGSVGElement, HexagonFrameProps>(
  (
    {
      className = '',
      strokeWidth = 2,
      strokeColor = 'var(--rooman-navy)',
      fill = 'none',
      size = 'lg',
      animated = true,
    },
    ref
  ) => {
    const sizes = {
      sm: { width: 80, height: 92 },
      md: { width: 120, height: 138 },
      lg: { width: 200, height: 230 },
      xl: { width: 400, height: 460 },
    };

    const { width, height } = sizes[size];
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - strokeWidth;

    const points = Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      return `${centerX + radius * Math.cos(angle)},${centerY + radius * Math.sin(angle)}`;
    }).join(' ');

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={`${className} ${animated ? 'hexagon-animate' : ''}`}
        style={{
          filter: animated ? 'drop-shadow(0 0 10px rgba(26, 50, 92, 0.4))' : 'none',
        }}
      >
        <polygon
          points={points}
          fill={fill}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? 'hexagon-stroke' : ''}
        />
      </svg>
    );
  }
);

HexagonFrame.displayName = 'HexagonFrame';

export default HexagonFrame;
