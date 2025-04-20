import { BarChart2, Zap, Globe, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
      <div 
        className={`flex items-center justify-center w-14 h-14 rounded-lg mb-4 text-primary-500 transition-all duration-300 ${
          isHovered ? 'bg-primary-500 text-white' : 'bg-primary-50 dark:bg-primary-900/30'
        }`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
      >
        Learn more
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart2 size={28} />,
      title: "Strategic Consulting",
      description: "Develop future-proof strategies aligned with your business objectives and market opportunities."
    },
    {
      icon: <Zap size={28} />,
      title: "Digital Transformation",
      description: "Leverage cutting-edge technology to modernize operations and create competitive advantages."
    },
    {
      icon: <Globe size={28} />,
      title: "Market Expansion",
      description: "Enter new markets with confidence through our research-backed expansion strategies."
    },
    {
      icon: <Users size={28} />,
      title: "Organizational Excellence",
      description: "Optimize your team structure and culture to maximize productivity and innovation."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Growth Strategy",
      description: "Accelerate business growth with data-driven insights and actionable roadmaps."
    },
    {
      icon: <Award size={28} />,
      title: "Brand Positioning",
      description: "Differentiate your brand and capture market share with compelling positioning."
    }
  ];
  
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-primary-500 font-medium mb-2">OUR EXPERTISE</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions for Modern Businesses</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            We offer a wide range of consulting services to help businesses navigate complex challenges
            and achieve sustainable growth in today's dynamic market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;