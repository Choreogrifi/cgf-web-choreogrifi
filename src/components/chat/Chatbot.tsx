import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! 👋 How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Predefined responses for the demo chatbot
  const getBotResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase();
    
    if (normalizedMessage.includes('service') || normalizedMessage.includes('offering')) {
      return "We offer strategic consulting, digital transformation, market analysis, and operational excellence services. Would you like to know more about any specific service?";
    } else if (normalizedMessage.includes('price') || normalizedMessage.includes('cost') || normalizedMessage.includes('pricing')) {
      return "Our pricing varies based on project scope and requirements. Would you like to schedule a free consultation to discuss your specific needs?";
    } else if (normalizedMessage.includes('contact') || normalizedMessage.includes('call') || normalizedMessage.includes('talk')) {
      return "You can reach us at (555) 123-4567 or email info@nexusconsulting.com. Alternatively, you can fill out the contact form on our website.";
    } else if (normalizedMessage.includes('hello') || normalizedMessage.includes('hi') || normalizedMessage.includes('hey')) {
      return "Hello there! How can I assist you with our consulting services today?";
    } else if (normalizedMessage.includes('thanks') || normalizedMessage.includes('thank you')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "Thanks for your message. Our team would be happy to address your specific question. Would you like us to contact you directly?";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { id: messages.length + 1, text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, text: getBotResponse(input), isBot: true };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all z-20"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-white dark:bg-neutral-800 rounded-lg shadow-xl flex flex-col z-20 animate-fade-in overflow-hidden">
          {/* Chat header */}
          <div className="bg-primary-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-semibold">Chat with Nexus</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-neutral-200">
              <X size={18} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`mb-3 max-w-[85%] ${message.isBot ? 'ml-0' : 'ml-auto'}`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-white' 
                      : 'bg-primary-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-3 max-w-[85%]">
                <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-white">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-neutral-200 dark:border-neutral-700 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-l-md bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <button 
              type="submit"
              className="px-3 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;