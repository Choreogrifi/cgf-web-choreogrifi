import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, Zap, Users } from 'lucide-react';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary-400/10 dark:bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ease-out ${animationComplete ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <h5 className="text-primary-500 font-medium mb-2">INNOVATIVE CONSULTANCY</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-primary-500">Business</span> Strategy
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl">
              We help startups and enterprises navigate complex challenges with innovative solutions 
              that drive growth and create lasting value.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Our Services
                <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white font-medium rounded-lg border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <span className="mr-2">Trusted by leading companies worldwide</span>
              <div className="h-px bg-neutral-300 dark:bg-neutral-600 flex-grow"></div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ease-out ${animationComplete ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-2xl p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Our Expert Services</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <BarChart2 className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Analysis</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">Comprehensive market insights and competitive positioning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Zap className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Growth Acceleration</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">Scalable strategies to drive rapid and sustainable growth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                    <Users className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Organizational Design</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">Optimize your structure for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;