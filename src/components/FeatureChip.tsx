import { forwardRef } from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureChipProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  delay?: number;
}

const FeatureChip = forwardRef<HTMLDivElement, FeatureChipProps>(
  ({ icon: Icon, label, className = '', delay = 0 }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg bg-[#1a1f2e]/90 light:bg-[#0d1117]/90 backdrop-blur-sm border border-white/10 light:border-white/20 group ${className}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Hexagon Icon Badge */}
        <div className="relative w-10 h-11 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 40 46"
          >
            <polygon
              points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5"
              className="transition-all duration-300 fill-transparent stroke-gray-800 light:stroke-white/70 group-hover:fill-gray-800/10 light:group-hover:fill-white/10 group-hover:stroke-gray-900 light:group-hover:stroke-white"
              strokeWidth="1.5"
            />
          </svg>
          <Icon className="w-4 h-4 text-rooman-orange relative z-10" />
        </div>

        {/* Label */}
        <span className="text-sm font-medium text-white light:text-white group-hover:text-gray-300 light:group-hover:text-gray-200 transition-colors duration-300">
          {label}
        </span>
      </div>
    );
  }
);

FeatureChip.displayName = 'FeatureChip';

export default FeatureChip;
