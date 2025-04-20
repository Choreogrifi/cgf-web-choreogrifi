import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    interest: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  
  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | Nexus Consulting';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate successful form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        interest: ''
      });
    }, 1000);
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-neutral-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-neutral-300">
              Have questions or ready to start a project? Contact us today
              and let's discuss how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-2">(555) 123-4567</p>
              <p className="text-neutral-600 dark:text-neutral-300">Monday - Friday, 9AM - 6PM ET</p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-2">info@nexusconsulting.com</p>
              <p className="text-neutral-600 dark:text-neutral-300">We'll respond within 24 hours</p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-2">123 Innovation Drive</p>
              <p className="text-neutral-600 dark:text-neutral-300">San Francisco, CA 94103</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-md order-2 lg:order-1">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="mb-4 text-primary-500">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-md">
                    Your message has been received. One of our consultants will get back to you within 24 hours to discuss your needs.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">I'm interested in *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Strategic Consulting">Strategic Consulting</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Market Expansion">Market Expansion</option>
                      <option value="Organizational Excellence">Organizational Excellence</option>
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Brand Positioning">Brand Positioning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow hover:shadow-lg"
                  >
                    Send Message
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div 
                className={`w-full h-96 bg-neutral-100 dark:bg-neutral-700 rounded-xl overflow-hidden shadow-md relative ${
                  mapVisible ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
              >
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-600 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-neutral-500 dark:text-neutral-300">Interactive map would be displayed here</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-neutral-800 shadow-md">
                  <h3 className="font-bold mb-1">Nexus Consulting HQ</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    123 Innovation Drive, San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md">
                <h3 className="font-bold mb-3">Schedule a Visit</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Prefer to meet in person? Schedule a visit to our office to discuss your business needs face-to-face.
                </p>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">Monday - Friday:</span>
                    <span className="text-neutral-600 dark:text-neutral-400">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">Saturday:</span>
                    <span className="text-neutral-600 dark:text-neutral-400">10:00 AM - 3:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">Sunday:</span>
                    <span className="text-neutral-600 dark:text-neutral-400">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Find answers to common questions about our consulting services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">What industries do you serve?</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We work across multiple industries including technology, healthcare, finance, retail, manufacturing, and professional services. Our consultants bring specialized knowledge in these areas.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Project timelines vary based on scope and complexity. Strategic assessments may take 4-6 weeks, while comprehensive transformations can span 6-12 months. We'll provide clear timelines during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you work with startups?</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Yes! We have specialized packages for startups and early-stage companies. Our approach is scaled to fit your current phase while positioning you for future growth.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">How do you measure success?</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We establish clear KPIs and success metrics at the outset of each project. These may include financial outcomes, operational improvements, market share growth, or other relevant indicators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;