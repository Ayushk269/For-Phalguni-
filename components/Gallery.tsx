
import React from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  images: string[];
}

const captions = [
  "Golden hours ✨",
  "Sweet smiles 🌸",
  "Moments to keep 💫",
  "Genuine & Kind 🌷",
  "New beginnings 🕊️",
  "Forever Grateful 💖"
];

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-quicksand font-bold text-[#FFB6D9] mb-2 uppercase tracking-widest">Memory Lane</h2>
        <div className="w-16 h-1 bg-[#FFD6E8] mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {images.map((src, idx) => {
          // Playful tilt values
          const tilt = (idx % 2 === 0 ? 3 : -3) + (Math.random() * 2 - 1);
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: tilt }}
              whileInView={{ opacity: 1, y: 0, rotate: tilt }}
              whileHover={{ scale: 1.05, rotate: 0, y: -5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white p-4 shadow-xl shadow-pink-100/50 rounded-sm transform transition-all duration-300"
            >
              <div className="overflow-hidden bg-gray-100 aspect-[4/5] relative">
                <img 
                  src={src} 
                  alt={`Memory ${idx}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-6 pb-2 text-center">
                <p className="font-handwritten text-2xl text-gray-600">
                  {captions[idx % captions.length]}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
