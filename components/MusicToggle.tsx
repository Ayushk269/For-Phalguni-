
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white shadow-xl shadow-pink-200/50 rounded-full flex items-center justify-center text-2xl glass transition-all duration-300 hover:bg-[#FFD6E8]"
      aria-label="Toggle Background Music"
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.span
            key="playing"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            className="text-[#FFB6D9]"
          >
            🎵
          </motion.span>
        ) : (
          <motion.span
            key="muted"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            className="text-gray-300"
          >
            🔇
          </motion.span>
        )}
      </AnimatePresence>
      
      {isPlaying && (
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="absolute inset-0 rounded-full border-2 border-[#FFB6D9]"
        />
      )}
    </motion.button>
  );
};
