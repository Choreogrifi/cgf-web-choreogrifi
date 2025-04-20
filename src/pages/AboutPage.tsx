import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Target, CheckCircle, Award } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, position, image, bio }: TeamMemberProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden group">
      <div className="relative overflow-hidden aspect-w-3 aspect-h-4 bg-neutral-100 dark:bg-neutral-700">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <p className="text-white text-sm line-clamp-4">{bio}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary-500 mb-3">{position}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | Nexus Consulting';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Alex founded Nexus Consulting with a vision to help businesses navigate complex challenges with innovative solutions. With over 15 years of experience in strategic consulting, Alex has helped dozens of companies achieve sustainable growth."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Strategy",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Sarah leads our strategy division with her exceptional analytical skills and deep market insights. Her background in both tech and finance gives her a unique perspective on digital transformation and growth strategies."
    },
    {
      name: "Michael Chen",
      position: "Digital Transformation Lead",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Michael specializes in guiding businesses through their digital transformation journey. With expertise in emerging technologies and process optimization, he helps clients leverage digital tools to gain competitive advantages."
    },
    {
      name: "Jessica Rivera",
      position: "Market Research Director",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Jessica heads our market research initiatives, bringing data-driven insights to client strategies. Her background in consumer psychology and analytics helps businesses understand their target audiences and market dynamics."
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-neutral-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexus Consulting</h1>
            <p className="text-lg text-neutral-300">
              We're a team of strategic thinkers and problem solvers dedicated to transforming businesses.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-primary-500 font-medium mb-2">OUR STORY</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Businesses Since 2015</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Nexus Consulting was founded with a clear mission: to help businesses navigate the rapidly evolving marketplace with innovative strategies and practical solutions. What began as a small team of strategic advisors has grown into a comprehensive consultancy serving clients across multiple industries and markets.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Our approach combines deep industry knowledge with cutting-edge methodologies to deliver results that matter. We believe in building lasting partnerships with our clients, understanding their unique challenges, and developing tailored strategies that drive sustainable growth.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Today, we're proud to work with organizations of all sizes — from startups to Fortune 500 companies — helping them transform challenges into opportunities and achieve their full potential.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="rounded-xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-primary-500 font-medium mb-2">OUR VALUES</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Principles That Guide Us</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Our values shape everything we do, from how we work with clients to how we collaborate as a team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-md">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-block mb-4 text-primary-500">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We believe in building true partnerships with our clients, becoming an extension of their team and fully investing in their success.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-md">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-block mb-4 text-primary-500">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We constantly seek new ideas, approaches, and technologies to solve complex problems and create differentiated value.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-md">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-block mb-4 text-primary-500">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Results Focus</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We measure our success by the tangible outcomes we deliver for our clients, focusing on practical solutions with real impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h5 className="text-primary-500 font-medium mb-2">OUR TEAM</h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Experts</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Our team brings together diverse expertise and perspectives to deliver innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="text-primary-500 font-medium mb-2">WHY CHOOSE US</h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Tailored Approach</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      We don't believe in one-size-fits-all solutions. Every strategy we develop is customized to your specific needs and objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Cross-Industry Expertise</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Our consultants bring insights from diverse industries, allowing us to apply proven approaches in new contexts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Implementation Focus</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      We don't just provide recommendations — we work alongside you to implement solutions and ensure real-world success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Measurable Results</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      We establish clear metrics for success and track progress to ensure our work delivers tangible value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Projects Completed</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">25+</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Expert Consultants</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Countries Served</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">8+</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our consulting expertise can help your business achieve its goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-medium rounded-lg hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;