
import React from 'react';
import { motion } from 'framer-motion';

export const Message: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto glass rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-pink-200/50"
      >
        <div className="flex justify-center mb-8">
          <div className="text-4xl text-[#FFB6D9]">💌</div>
        </div>
        
        <div className="space-y-6 text-gray-600 font-quicksand text-lg leading-relaxed text-center">
          <p>
            I know you already had your official farewell, but I couldn’t be there… so I thought I’d make a tiny unofficial one here 🙂
          </p>
          <p>
            I just wanted to say thank you for being such a genuine, calm, and kind presence. Some people leave loud memories, and some leave peaceful ones… and you definitely belong to the second kind.
          </p>
          <p>
            You’ve been a really meaningful part of my school journey, and I’ll always be grateful that I got to know you. Sometimes the best memories are simple conversations and comfortable moments.
          </p>
          <p>
            As you step into your next chapter, I truly hope life gives you happiness, growth, good health, and success.
          </p>
          <p>
            And I hope this is not just goodbye to school, but just staying connected as life moves ahead.
          </p>
          <p className="font-semibold text-[#FFB6D9] pt-4">
            Take care of yourself… and thank you for being you.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
