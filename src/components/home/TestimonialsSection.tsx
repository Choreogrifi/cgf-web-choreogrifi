import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Nexus Consulting transformed our business strategy. Their insights helped us pivot at a crucial time and achieve 137% growth within a year.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "The digital transformation roadmap Nexus created for us was incredibly thorough. They understood our technical constraints and helped modernize our entire operation.",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Rivera",
      position: "Marketing Director",
      company: "Global Brands",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Their market analysis was spot-on. We were able to identify untapped segments and develop targeted campaigns that increased our market share considerably.",
      rating: 5
    }
  ];
  
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    autoPlayRef.current = setTimeout(next, 5000);
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [current]);
  
  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-primary-400 font-medium mb-2">TESTIMONIALS</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-300">
            We've helped businesses of all sizes achieve remarkable results. 
            Here's what some of our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-neutral-800 rounded-xl p-8 md:p-10 relative">
                    <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-primary-500 opacity-20 blur-xl"></div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} className="text-primary-400 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-xl mb-6 italic text-neutral-100">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-neutral-400">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-primary-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  current === i ? 'bg-primary-500' : 'bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button 
              onClick={next}
              className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;