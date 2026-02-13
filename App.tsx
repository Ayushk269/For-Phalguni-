
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Message } from './components/Message';
import { Footer } from './components/Footer';
import { MusicToggle } from './components/MusicToggle';
import { BackgroundDecor } from './components/BackgroundDecor';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Auto-play blocked", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Attempt auto-play on first click anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-pink-200">
      <audio ref={audioRef} src="input_file_0.m4a" />
      
      <BackgroundDecor />
      
      <main className="relative z-10">
        <Hero name="Phalguni" subtitle="A tiny unofficial farewell 💫" />
        
        <Gallery images={[
          'input_file_1.png',
          'input_file_2.png',
          'input_file_3.png',
          'input_file_4.png',
          'input_file_5.png',
          'input_file_6.png'
        ]} />
        
        <Message />
        
        <Footer />
      </main>

      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      
      {/* Custom Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFB6D9] z-50 origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
};

// Custom hook to track scroll progress
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export default App;
