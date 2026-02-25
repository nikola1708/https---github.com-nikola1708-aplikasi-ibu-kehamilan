import { Home as HomeIcon, Calendar, Headphones, BookOpen, User, LogOut, Edit2, Save, X, Heart, Activity, Ruler, Weight, TrendingUp, Baby } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileProps {
  onNavigate: (screen: string) => void;
  onLogout?: () => void;
}

export function Profile({ onNavigate, onLogout }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lastPeriodDate: '',
    cycleLength: '28',
    height: '160', // CHANGED from 165 to 160
    weight: '50', // CHANGED from 65 to 50
    bloodPressure: '120/80'
  });

  const [editData, setEditData] = useState(userData);

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Add default values if not exist
      const completeUser = {
        ...user,
        height: user.height || '160', // CHANGED from 165 to 160
        weight: user.weight || '50', // CHANGED from 65 to 50
        bloodPressure: user.bloodPressure || '120/80'
      };
      setUserData(completeUser);
      setEditData(completeUser);
    }
  }, []);

  // Calculate due date using Naegele's Rule (LMP + 280 days)
  const calculateDueDate = (lastPeriodDate: string): string => {
    if (!lastPeriodDate) return '25 November 2025'; // HARDCODED FALLBACK - matches Dashboard
    
    const lmp = new Date(lastPeriodDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280);
    
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return dueDate.toLocaleDateString('id-ID', options);
  };

  // Calculate weeks pregnant
  const calculateWeeksPregnant = (lastPeriodDate: string): number => {
    if (!lastPeriodDate) return 24; // HARDCODED FALLBACK - matches Dashboard
    
    const lmp = new Date(lastPeriodDate);
    const today = new Date();
    
    lmp.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    
    return weeks >= 0 && weeks <= 42 ? weeks : 24; // FALLBACK to 24
  };

  // Calculate days in current week
  const calculateDaysInWeek = (lastPeriodDate: string): number => {
    if (!lastPeriodDate) return 0;
    
    const lmp = new Date(lastPeriodDate);
    const today = new Date();
    
    lmp.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays % 7;
  };

  // Calculate trimester
  const calculateTrimester = (weeks: number): string => {
    if (weeks === 0) return 'Trimester 2'; // HARDCODED FALLBACK - matches Dashboard
    if (weeks <= 13) return 'Trimester 1';
    if (weeks <= 26) return 'Trimester 2';
    if (weeks <= 42) return 'Trimester 3';
    return 'Sudah Lahir';
  };

  const weeks = calculateWeeksPregnant(userData.lastPeriodDate);
  const days = calculateDaysInWeek(userData.lastPeriodDate);
  const dueDate = calculateDueDate(userData.lastPeriodDate);
  const trimester = calculateTrimester(weeks);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(editData));
    setUserData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(userData);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData({ ...editData, [field]: value });
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Profil Saya</h1>
            <p className="text-sm text-gray-600">Kelola informasi pribadi Anda</p>
          </div>
          <button
            onClick={onLogout}
            className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:bg-red-50 group"
          >
            <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition" />
          </button>
        </div>

        {/* Profile Header Card */}
        <div className="relative mb-6">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-[2rem] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {/* Avatar */}
            <div className="relative inline-block mb-4">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Edit badge */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                {isEditing ? (
                  <X className="w-5 h-5 text-red-600" />
                ) : (
                  <Edit2 className="w-5 h-5 text-[#FF9A8D]" />
                )}
              </button>
            </div>

            {/* User info */}
            <h2 className="text-2xl font-bold text-white mb-1">
              {userData.firstName} {userData.lastName}
            </h2>
            <p className="text-white/90 text-sm mb-4">{userData.email}</p>
          </div>
        </div>

        {/* Health Summary Cards - Side by Side */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Height & Weight Card */}
          <div className="bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl flex items-center justify-center">
                <Ruler className="w-6 h-6 text-[#81C784]" />
              </div>
            </div>
            <h3 className="text-xs text-gray-500 mb-2">Tinggi & Berat</h3>
            <p className="text-xl font-bold text-gray-800">{userData.height} cm</p>
            <p className="text-lg font-bold text-gray-600">{userData.weight} kg</p>
          </div>

          {/* Blood Pressure Card */}
          <div className="bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFE5E5] to-[#FFCCCB] rounded-2xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-[#FF9A8D]" />
              </div>
            </div>
            <h3 className="text-xs text-gray-500 mb-2">Tensi Darah</h3>
            <p className="text-xl font-bold text-gray-800">{userData.bloodPressure}</p>
            <p className="text-xs text-gray-500 mt-1">mmHg</p>
          </div>
        </div>

        {/* Pregnancy Info Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* HPHT Card */}
          <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-2xl p-4">
            <p className="text-xs text-gray-600 mb-1">HPHT</p>
            <p className="text-sm font-bold text-gray-800">
              {userData.lastPeriodDate 
                ? new Date(userData.lastPeriodDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
                : '18 Feb'}
            </p>
          </div>

          {/* HPL Card */}
          <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-2xl p-4">
            <p className="text-xs text-gray-600 mb-1">HPL</p>
            <p className="text-sm font-bold text-gray-800">
              {userData.lastPeriodDate 
                ? new Date(new Date(userData.lastPeriodDate).getTime() + 280 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
                : '25 Nov'}
            </p>
          </div>

          {/* Age Card */}
          <div className="bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-2xl p-4">
            <p className="text-xs text-gray-600 mb-1">Usia Kehamilan</p>
            <p className="text-sm font-bold text-gray-800">
              {weeks > 0 ? `${weeks} Minggu ${days} Hari` : '24 Minggu'}
            </p>
          </div>

          {/* Trimester Card */}
          <div className="bg-gradient-to-br from-[#FFE5E5] to-[#FFCCCB] rounded-2xl p-4">
            <p className="text-xs text-gray-600 mb-1">Trimester</p>
            <p className="text-sm font-bold text-gray-800">{trimester}</p>
          </div>
        </div>

        {/* Edit Section */}
        {isEditing && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Perbarui Data Anda</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-200 transition-all"
                >
                  Batal
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Simpan
                </button>
              </div>
            </div>

            {/* Clean Stacked Form Layout */}
            <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    value={editData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    value={editData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                />
              </div>

              {/* Health Data */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-700 mb-4">Data Kesehatan</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Tinggi (cm)
                    </label>
                    <input
                      type="number"
                      value={editData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Berat (kg)
                    </label>
                    <input
                      type="number"
                      value={editData.weight}
                      onChange={(e) => handleInputChange('weight', e.target.value)}
                      className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Tensi Darah (mmHg)
                  </label>
                  <input
                    type="text"
                    value={editData.bloodPressure}
                    onChange={(e) => handleInputChange('bloodPressure', e.target.value)}
                    placeholder="120/80"
                    className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Pregnancy Data */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-700 mb-4">Data Kehamilan</h3>
                
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    HPHT (Hari Pertama Haid Terakhir)
                  </label>
                  <input
                    type="date"
                    value={editData.lastPeriodDate}
                    onChange={(e) => handleInputChange('lastPeriodDate', e.target.value)}
                    className="w-full bg-[#FFF9F5] border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#FF9A8D] focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {!isEditing && (
          <div className="space-y-3">
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-xl flex items-center justify-center">
                  <Edit2 className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-800">Edit Profil</p>
                  <p className="text-xs text-gray-500">Perbarui informasi Anda</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#FF9A8D] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-[2rem] shadow-2xl border-4 border-[#FF9A8D]/20 px-4 py-4">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => onNavigate('home')}
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <span className="text-[9px]">Home</span>
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
                className="flex flex-col items-center gap-1 text-[#FF9A8D] relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-[9px] font-medium">Profil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}