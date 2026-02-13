
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ name, subtitle }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-20"
      >
        <h1 className="text-7xl md:text-9xl font-handwritten text-[#FFB6D9] drop-shadow-sm mb-4">
          {name}
        </h1>
        <p className="text-lg md:text-2xl font-quicksand font-medium text-gray-500 tracking-wide">
          {subtitle}
        </p>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-gray-400 text-sm font-quicksand font-semibold tracking-tighter uppercase">Scroll to see memories</span>
        <div className="w-[1px] h-12 bg-gray-300 mx-auto mt-2"></div>
      </motion.div>
    </section>
  );
};
