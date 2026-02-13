
import React from 'react';

export const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Pastel Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[#FFB6D9] opacity-20 blur-[100px] rounded-full animate-float" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-white opacity-40 blur-[80px] rounded-full animate-float-delayed" />
      <div className="absolute top-[40%] right-[10%] w-[20vw] h-[20vw] bg-[#FFD6E8] opacity-30 blur-[60px] rounded-full animate-float" />
      
      {/* Little Sparkles */}
      <div className="absolute top-[15%] right-[20%] text-[#FFB6D9] opacity-40 text-2xl animate-pulse">✨</div>
      <div className="absolute bottom-[25%] left-[15%] text-[#FFB6D9] opacity-30 text-xl animate-bounce">💫</div>
      <div className="absolute top-[60%] left-[10%] text-[#FFB6D9] opacity-40 text-lg">🌸</div>
      <div className="absolute bottom-[40%] right-[25%] text-[#FFB6D9] opacity-20 text-3xl">✨</div>
    </div>
  );
};
