import { useState } from 'react';
import pregnantWomanImg from 'figma:asset/ddde24abf7033cb5a31b7901394cf688de352e6a.png';

interface OnboardingProps {
  onNavigate: (screen: string) => void;
}

export function Onboarding({ onNavigate }: OnboardingProps) {
  return (
    <div className="bg-[#E8B4BC] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#FDEEF1] rounded-[40px] shadow-2xl overflow-hidden w-full max-w-md min-h-[700px] flex flex-col p-8">
        {/* Welcome Text */}
        <h2 className="text-2xl text-gray-800 mb-8 text-center">Welcome mommy!</h2>

        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <img 
            src={pregnantWomanImg}
            alt="Pregnant woman"
            className="w-80 h-80 object-cover rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-2xl mb-4 text-gray-800">Mulai Perjalanan Anda</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bergabunglah dengan Mommycare untuk mendampingi perjalanan kehamilan Anda dengan lebih baik dan lebih sehat
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button 
            onClick={() => onNavigate('register')}
            className="w-full bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white py-4 rounded-full hover:opacity-90 transition shadow-lg"
          >
            Register
          </button>
          
          <button 
            onClick={() => onNavigate('login')}
            className="w-full bg-white border-2 border-[#D5536C] text-[#D5536C] py-4 rounded-full hover:bg-[#FDEEF1] transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}