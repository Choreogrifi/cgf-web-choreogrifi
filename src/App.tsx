import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Chatbot from './components/chat/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  // Show the chatbot after 5 seconds of user being on the page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-neutral-900 text-neutral-800 dark:text-white transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          {showChatbot && <Chatbot />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;