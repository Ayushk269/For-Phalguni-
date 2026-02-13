
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-transparent to-white/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-20 px-6"
      >
        <h3 className="text-3xl md:text-5xl font-handwritten text-[#FFB6D9] mb-6">
          Not a goodbye, just a new beginning 🌸
        </h3>
        
        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
              className="text-[#FFB6D9] text-xl"
            >
              ✨
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-8 text-gray-400 font-quicksand text-xs uppercase tracking-[0.2em]">
        Made with ✨ for Phalguni
      </div>
    </section>
  );
};
