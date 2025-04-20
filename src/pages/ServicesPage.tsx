import { useEffect } from 'react';
import { ArrowRight, BarChart2, Zap, Globe, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailCard = ({ 
  title, 
  description, 
  icon, 
  benefits,
  isReversed = false
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  benefits: string[];
  isReversed?: boolean;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${isReversed ? 'md:order-2' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-500 mr-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          {description}
        </p>
        <div className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle size={18} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <Link 
          to="/contact" 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Get Started
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className={`${isReversed ? 'md:order-1' : ''} bg-neutral-100 dark:bg-neutral-700 rounded-xl p-8 transition-transform hover:scale-105 duration-300`}>
        <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
          <div className="text-primary-400 dark:text-primary-300 opacity-80">
            {React.cloneElement(icon as React.ReactElement, { size: 120, strokeWidth: 1 })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Our Services | Nexus Consulting';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Strategic Consulting",
      description: "We help businesses develop comprehensive strategies aligned with their long-term vision and market opportunities. Our consultants analyze market trends, competitive landscapes, and internal capabilities to create actionable plans.",
      icon: <BarChart2 size={24} />,
      benefits: [
        "Comprehensive market and competitive analysis",
        "Clear strategic roadmaps with measurable milestones",
        "Risk assessment and mitigation planning",
        "Alignment of organizational capabilities with market opportunities"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business operations through strategic implementation of digital technologies. We guide organizations through the entire transformation journey, from assessment to implementation and optimization.",
      icon: <Zap size={24} />,
      benefits: [
        "Technology stack assessment and recommendations",
        "Process automation and workflow optimization",
        "Data-driven decision making frameworks",
        "Change management and user adoption strategies"
      ]
    },
    {
      title: "Market Expansion",
      description: "Enter new markets with confidence through our comprehensive expansion strategies. We analyze market potential, cultural factors, regulatory environments, and competitive dynamics to create successful entry plans.",
      icon: <Globe size={24} />,
      benefits: [
        "In-depth market opportunity analysis",
        "Localization strategies for products and services",
        "Regulatory compliance guidance",
        "Channel development and partnership strategies"
      ]
    },
    {
      title: "Organizational Excellence",
      description: "Optimize your organizational structure, culture, and talent to drive performance and innovation. We help businesses build resilient, adaptable teams aligned with strategic goals.",
      icon: <Users size={24} />,
      benefits: [
        "Organizational structure optimization",
        "Talent assessment and development planning",
        "Culture transformation programs",
        "Leadership coaching and development"
      ]
    },
    {
      title: "Growth Strategy",
      description: "Accelerate business growth with data-driven insights and proven methodologies. We design tailored growth strategies that leverage your unique capabilities and market opportunities.",
      icon: <TrendingUp size={24} />,
      benefits: [
        "Growth opportunity identification and prioritization",
        "Customer acquisition and retention strategies",
        "Revenue diversification planning",
        "Scalable business model development"
      ]
    },
    {
      title: "Brand Positioning",
      description: "Differentiate your brand and capture market share with compelling positioning. We help businesses define their unique value proposition and communicate it effectively to target audiences.",
      icon: <Award size={24} />,
      benefits: [
        "Brand audit and competitive positioning analysis",
        "Value proposition development",
        "Messaging strategy and framework",
        "Brand experience and touchpoint optimization"
      ]
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-neutral-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-neutral-300 mb-8">
              We offer comprehensive consulting solutions tailored to your business needs.
              Our expertise spans across multiple domains to help you achieve sustainable growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceDetailCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a personalized consultation with our expert team.
            We'll help you identify the best solutions for your unique business needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-medium rounded-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;