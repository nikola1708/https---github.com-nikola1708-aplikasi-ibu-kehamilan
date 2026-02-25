import { Home as HomeIcon, Calendar, Headphones, BookOpen, User, Heart, Baby, Sparkles, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DashboardCards } from './DashboardCards';

interface HomeProps {
  onNavigate: (screen: string) => void;
  onLogout?: () => void;
}

export function Home({ onNavigate, onLogout }: HomeProps) {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    lastPeriodDate: '',
    cycleLength: '28'
  });

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData(user);
    }
  }, []);

  // Calculate weeks pregnant
  const calculateWeeksPregnant = (lastPeriodDate: string): number => {
    if (!lastPeriodDate) return 24;
    
    const lmp = new Date(lastPeriodDate);
    const today = new Date();
    
    lmp.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    
    return weeks > 0 && weeks <= 42 ? weeks : 24;
  };

  // Calculate trimester
  const calculateTrimester = (weeks: number): number => {
    if (weeks <= 13) return 1;
    if (weeks <= 26) return 2;
    return 3;
  };

  // Calculate due date using Naegele's Rule (LMP + 280 days)
  const calculateDueDate = (lastPeriodDate: string): string => {
    if (!lastPeriodDate) return '25 November 2025'; // HARDCODED FALLBACK
    
    const lmp = new Date(lastPeriodDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return dueDate.toLocaleDateString('id-ID', options);
  };

  // Calculate days until due date
  const calculateDaysUntilDue = (lastPeriodDate: string): number => {
    if (!lastPeriodDate) return 112; // HARDCODED FALLBACK (logical number)
    
    const lmp = new Date(lastPeriodDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 112; // FALLBACK to 112 if negative
  };

  const selectedWeek = calculateWeeksPregnant(userData.lastPeriodDate);
  const trimester = calculateTrimester(selectedWeek);
  const dueDate = calculateDueDate(userData.lastPeriodDate);
  const daysUntilDue = calculateDaysUntilDue(userData.lastPeriodDate);

  return (
    <div className="bg-[#FFF9F5] min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header with Illustration */}
        <div className="relative bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-[3rem] p-8 mb-6 overflow-hidden shadow-lg">
          {/* Decorative organic shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            {/* Greeting */}
            <div className="mb-4">
              <p className="text-white/80 text-sm">Halo,</p>
              <h1 className="text-white text-3xl font-bold">
                {userData.firstName ? userData.firstName : 'Mama'} 💕
              </h1>
            </div>

            {/* Illustration placeholder - cute pregnant woman */}
            <div className="flex items-center justify-center my-6">
              <div className="relative">
                <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Baby className="w-20 h-20 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-yellow-200" fill="currentColor" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <Heart className="w-8 h-8 text-red-200" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Pregnancy Info Widget */}
            <div className="bg-white rounded-3xl p-5 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center">
                  <CalendarDays className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Usia Kehamilan</p>
                  <p className="text-xl font-bold text-gray-800">{selectedWeek} Minggu</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#E8F5E9] rounded-2xl p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">Trimester</p>
                  <p className="text-2xl font-bold text-[#6B9F6A]">{trimester}</p>
                </div>
                <div className="bg-[#FFF3E0] rounded-2xl p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">Hari Lagi</p>
                  <p className="text-2xl font-bold text-[#FF9A8D]">{daysUntilDue}</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">Perkiraan Lahir</p>
                <p className="text-sm font-medium text-gray-800">{dueDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Daily Insights - New Dashboard Cards */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Wawasan Harian</h2>
          
          {/* New 2x2 Dashboard Cards Grid */}
          <DashboardCards onNavigate={onNavigate} />

          {/* Wide Support card spanning full width */}
          <button 
            onClick={() => onNavigate('support')}
            className="w-full mt-4 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] rounded-3xl p-6 flex items-center justify-between hover:shadow-xl hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                <Headphones className="w-7 h-7 text-[#FF9A8D]" />
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-white">Dukungan</p>
                <p className="text-sm text-white/80">Hubungi Ahli Kesehatan</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FFB347]" />
            <h3 className="text-lg font-bold text-gray-800">Tips Hari Ini</h3>
          </div>
          <div className="bg-gradient-to-r from-[#FFF9F5] to-[#FFE5E5] rounded-2xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              ✨ Pastikan minum air putih minimal 8 gelas sehari untuk menjaga hidrasi dan kesehatan Anda dan si kecil!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Cozy & Rounded */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-[2rem] shadow-2xl border-4 border-[#FF9A8D]/20 px-4 py-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => onNavigate('home')}
                className="flex flex-col items-center gap-1 text-[#FF9A8D] relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-md">
                  <HomeIcon className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-[9px] font-medium">Home</span>
              </button>
              
              <button 
                onClick={() => onNavigate('appointments')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[9px]">Kalender</span>
              </button>
              
              <button 
                onClick={() => onNavigate('support')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-[9px]">Dukungan</span>
              </button>
              
              <button 
                onClick={() => onNavigate('education')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[9px]">Edukasi</span>
              </button>
              
              <button 
                onClick={() => onNavigate('profile')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[9px]">Profil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
