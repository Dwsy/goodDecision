import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { SystemsComparison } from './components/SystemsComparison';
import { BiasExplorer } from './components/BiasExplorer';
import { FrameworkSection } from './components/FrameworkSection';
import { MetacognitionLab } from './components/MetacognitionLab';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <Hero />
      <SystemsComparison />
      <BiasExplorer />
      <FrameworkSection />
      <MetacognitionLab />
      <Footer />
    </div>
  );
}

export default App;
