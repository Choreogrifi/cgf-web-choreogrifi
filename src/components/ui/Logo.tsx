import { TrendingUp, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-10 w-10" }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <TrendingUp 
          className="text-primary-500 transform rotate-12 scale-110" 
          strokeWidth={2.5}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Zap 
          className="text-neutral-700 dark:text-white opacity-90 transform -rotate-6 scale-75" 
          strokeWidth={2.5}
          fill="currentColor"
        />
      </div>
    </div>
  );
};

export default Logo;