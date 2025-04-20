import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

const StatCounter = ({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        animateValue();
        hasAnimated.current = true;
      }
    }, { threshold: 0.5 });
    
    if (countRef.current) {
      observer.current.observe(countRef.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  
  const animateValue = () => {
    let startTime: number;
    const startValue = 0;
    const endValue = value;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    window.requestAnimationFrame(step);
  };
  
  return <span ref={countRef}>{count}{suffix}</span>;
};

const Stat = ({ icon, value, suffix, label, duration }: StatProps) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl mr-5 text-primary-500">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-1">
          <StatCounter value={value} suffix={suffix} duration={duration} />
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">{label}</p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-700 dark:to-neutral-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Through dedicated partnership with our clients, we've achieved remarkable results 
              that demonstrate our commitment to excellence and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Stat 
              icon={<TrendingUp size={32} />}
              value={43}
              suffix="%"
              label="Average ROI Increase"
            />
            <Stat 
              icon={<Users size={32} />}
              value={250}
              suffix="+"
              label="Clients Worldwide"
            />
            <Stat 
              icon={<Globe size={32} />}
              value={15}
              suffix="+"
              label="Countries Served"
            />
            <Stat 
              icon={<Award size={32} />}
              value={98}
              suffix="%"
              label="Client Satisfaction"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;