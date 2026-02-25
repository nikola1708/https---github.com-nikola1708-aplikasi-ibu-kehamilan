import { Calendar, Heart, Activity, Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface PregnancyTrackerScreenProps {
  onBack?: () => void;
}

export function PregnancyTrackerScreen({ onBack }: PregnancyTrackerScreenProps) {
  return (
    <div className="bg-gradient-to-b from-[#F0F9FF] to-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DBEAFE] rounded-full opacity-30 blur-3xl -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8F5E9] rounded-full opacity-25 blur-3xl translate-y-32 -translate-x-32"></div>

      {/* Main Content */}
      <div className="relative z-10 p-6 pb-24 max-w-md mx-auto">
        
        {/* Header */}
        {onBack && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={onBack}
              className="p-3 bg-white hover:bg-gray-50 rounded-full transition shadow-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <div>
              <h1 
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}
              >
                Pregnancy Tracker
              </h1>
              <p className="text-sm text-gray-500">Your journey overview</p>
            </div>
          </motion.div>
        )}

        {/* TOP HERO CARD - Main Focus: Gestational Age + Trimester */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#FFB3C1] to-[#FF8FA3] rounded-[32px] p-8 mb-6 shadow-xl relative overflow-hidden"
          style={{
            boxShadow: '0 12px 40px rgba(255, 143, 163, 0.25)'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

          <div className="relative z-10">
            {/* Baby Icon appropriate for 12 weeks */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-4xl">👶</span>
              </div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" fill="white" />
              </div>
            </div>

            {/* Current Status Label */}
            <p className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wide">
              Current Status
            </p>

            {/* HEADLINE: "12 Weeks 0 Days" */}
            <h2 
              className="text-5xl font-bold text-white mb-2"
              style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}
            >
              12 Weeks 0 Days
            </h2>

            {/* SUB-HEADLINE: "Trimester 1" */}
            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-5 py-2.5 mt-2">
              <span className="text-white text-base font-bold">Trimester 1</span>
            </div>
          </div>
        </motion.div>

        {/* MIDDLE SECTION - The Goal: Estimated Due Date (HPL) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#81C784] to-[#66BB6A] rounded-3xl p-6 mb-6 shadow-lg relative overflow-hidden"
          style={{
            boxShadow: '0 10px 30px rgba(102, 187, 106, 0.25)'
          }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/90 text-sm font-semibold uppercase tracking-wide">
                  Estimated Due Date
                </p>
              </div>
              
              {/* HARDCODED: "12 August 2025" */}
              <h3 
                className="text-3xl font-bold text-white"
                style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}
              >
                12 August 2025
              </h3>
              <p className="text-white/80 text-sm mt-1">Your baby's expected arrival</p>
            </div>

            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🗓️</span>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SECTION - The Details: 3-Column Grid for Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
          style={{
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h4 
            className="text-base font-bold text-gray-800 mb-5"
            style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}
          >
            Pregnancy Details
          </h4>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-3 gap-4">
            
            {/* Column 1: Last Period (HPHT) */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-[#1976D2]" />
              </div>
              <p className="text-xs text-gray-500 font-semibold mb-1">Last Period</p>
              <p className="text-sm font-bold text-gray-800">05 Nov 2024</p>
            </div>

            {/* Column 2: Est. Conception */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-[#C2185B]" />
              </div>
              <p className="text-xs text-gray-500 font-semibold mb-1">Conception</p>
              <p className="text-sm font-bold text-gray-800">19 Nov 2024</p>
            </div>

            {/* Column 3: Cycle Length */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-[#388E3C]" />
              </div>
              <p className="text-xs text-gray-500 font-semibold mb-1">Cycle Length</p>
              <p className="text-sm font-bold text-gray-800">28 Days</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-5"></div>

          {/* Additional Info List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">HPHT (Last Period)</p>
              <p className="text-sm font-bold text-gray-800">05 November 2024</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Est. Conception Date</p>
              <p className="text-sm font-bold text-gray-800">19 November 2024</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Menstrual Cycle</p>
              <p className="text-sm font-bold text-gray-800">28 Days</p>
            </div>
          </div>
        </motion.div>

        {/* Info Card - Trimester 1 Milestone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7] border-2 border-[#CE93D8] rounded-3xl p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#AB47BC] to-[#8E24AA] rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Week 12 Milestone</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                At 12 weeks, your baby is about the size of a plum! Most major organs are formed, and the risk of miscarriage significantly decreases.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
