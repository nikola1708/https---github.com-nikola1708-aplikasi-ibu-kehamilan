import { Home as HomeIcon, Calendar as CalendarIcon, Headphones, BookOpen, User, ChevronLeft, ChevronRight, Baby, Heart, Sparkles, Clock, MapPin, X, Stethoscope, UtensilsCrossed, Activity, Plus, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import babyMonth1 from 'figma:asset/178564105b1a3d32d10af7205c8aa3bb5ab92f4b.png';
import babyMonth2 from 'figma:asset/4aa186840d5f37b3a73e946d02caf9b7943db60b.png';
import babyMonth3 from 'figma:asset/ed07d6f503a3ced8d6c57a9b3b3114d457c79e54.png';
import babyMonth4 from 'figma:asset/e6bd6a59cbe4eefedadc03844400b74b428b60e8.png';
import babyMonth5 from 'figma:asset/59ca44dc667d6620309960d802483373acb75c30.png';
import babyMonth6 from 'figma:asset/840bb384fcfe3668fe09556e31b46dea7f71c38b.png';
import babyMonth7 from 'figma:asset/04bc90830be40fae45cd49f17e5f6ccbf2fa041b.png';
import babyMonth8 from 'figma:asset/da2a67f1ee6a81f52d2d01f792875fd906125aa3.png';
import babyMonth9 from 'figma:asset/82ccf9cac264fd940c6f51ee30c09306b73d9837.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AppointmentsProps {
  onNavigate: (screen: string) => void;
}

export function Appointments({ onNavigate }: AppointmentsProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(new Date().getDate());
  const [selectedPregnancyMonth, setSelectedPregnancyMonth] = useState(5);
  const [showUpcomingAppointments, setShowUpcomingAppointments] = useState(false);
  const [showNewAppointmentForm, setShowNewAppointmentForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    type: 'USG',
    title: '',
    doctor: '',
    date: '',
    time: '',
    location: '',
    notes: ''
  });

  // Calculate pregnancy month based on user data
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.lastPeriodDate) {
        const lmp = new Date(user.lastPeriodDate);
        const today = new Date();
        lmp.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const diffTime = today.getTime() - lmp.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        const month = Math.min(Math.max(Math.floor(weeks / 4), 1), 9);
        setSelectedPregnancyMonth(month);
      }
    }
  }, []);

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const babyImages = [
    babyMonth1, babyMonth2, babyMonth3, babyMonth4, babyMonth5,
    babyMonth6, babyMonth7, babyMonth8, babyMonth9
  ];

  const babyComparisons = [
    { name: 'Biji Poppy', size: '0.1 cm' },
    { name: 'Raspberry', size: '1 cm' },
    { name: 'Buah Plum', size: '3 cm' },
    { name: 'Lemon', size: '5 cm' },
    { name: 'Paprika', size: '10 cm' },
    { name: 'Pisang', size: '14 cm' },
    { name: 'Terong', size: '27 cm' },
    { name: 'Melon', size: '38 cm' },
    { name: 'Labu', size: '47 cm' }
  ];

  const dailyInsights = {
    1: { tip: 'Minum air putih 8-10 gelas hari ini', mood: 'energik', activity: 'Jalan pagi 20 menit' },
    5: { tip: 'Waktu yang tepat untuk senam hamil ringan', mood: 'bahagia', activity: 'Prenatal yoga' },
    10: { tip: 'Konsumsi makanan kaya zat besi', mood: 'tenang', activity: 'Meditasi 15 menit' },
    15: { tip: 'Jadwal pemeriksaan USG hari ini', mood: 'antusias', activity: 'Pemeriksaan rutin' },
    20: { tip: 'Istirahat cukup, tidur 8 jam', mood: 'rileks', activity: 'Membaca buku' },
    25: { tip: 'Latihan pernapasan untuk persalinan', mood: 'tenang', activity: 'Breathing exercise' }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDate;
      const isToday = day === new Date().getDate() && 
                      currentMonth === new Date().getMonth() && 
                      currentYear === new Date().getFullYear();
      const hasInsight = dailyInsights[day as keyof typeof dailyInsights];
      
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`h-12 flex flex-col items-center justify-center rounded-2xl transition-all relative group
            ${isSelected 
              ? 'bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] text-white shadow-lg scale-110' 
              : isToday
              ? 'bg-white/60 text-gray-800 border-2 border-[#FF9A8D]'
              : 'text-gray-700 hover:bg-white/40'
            }`}
        >
          <span className={`text-sm ${isSelected ? 'font-bold' : ''}`}>{day}</span>
          {hasInsight && (
            <div className={`w-1.5 h-1.5 rounded-full mt-1 ${
              isSelected ? 'bg-white' : 'bg-[#FF9A8D]'
            }`}></div>
          )}
        </button>
      );
    }
    
    return days;
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const currentInsight = selectedDate ? dailyInsights[selectedDate as keyof typeof dailyInsights] : null;

  // Upcoming appointments data
  const upcomingAppointments = [
    {
      id: 1,
      type: 'USG',
      title: 'Pemeriksaan USG Rutin',
      doctor: 'dr. Sarah Wijaya, Sp.OG',
      date: '15 Januari 2026',
      time: '09:00 - 10:00',
      location: 'RS Bunda Sehat, Lantai 3',
      icon: Activity,
      gradient: 'from-[#E8F5E9] to-[#C8E6C9]',
      iconColor: 'text-[#81C784]'
    },
    {
      id: 2,
      type: 'Gizi',
      title: 'Konsultasi Nutrisi',
      doctor: 'dr. Maya Kusuma, Sp.GK',
      date: '18 Januari 2026',
      time: '14:00 - 15:00',
      location: 'Klinik Gizi Sehat, Ruang 201',
      icon: UtensilsCrossed,
      gradient: 'from-[#FFF3E0] to-[#FFE0B2]',
      iconColor: 'text-[#FFB74D]'
    },
    {
      id: 3,
      type: 'Kontrol',
      title: 'Pemeriksaan Kesehatan Rutin',
      doctor: 'dr. Andi Pratama, Sp.OG',
      date: '25 Januari 2026',
      time: '10:30 - 11:30',
      location: 'RS Bunda Sehat, Lantai 3',
      icon: Stethoscope,
      gradient: 'from-[#FFE5E5] to-[#FFCCCB]',
      iconColor: 'text-[#FF9A8D]'
    }
  ];

  return (
    <div className="bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Soft gradient mesh background */}
      <div className="absolute inset-0 opacity-40"
           style={{
             background: 'radial-gradient(circle at 10% 20%, rgba(255, 154, 141, 0.15) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(232, 180, 188, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 181, 167, 0.1) 0%, transparent 70%)',
           }}>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kalender Kehamilan</h1>
          <p className="text-sm text-gray-600">Pantau perjalanan kehamilan Anda</p>
        </div>

        {/* Pregnancy Month Carousel */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <Baby className="w-4 h-4 text-[#FF9A8D]" />
            Bulan Kehamilan
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((month) => {
              const isActive = month === selectedPregnancyMonth;
              return (
                <button
                  key={month}
                  onClick={() => setSelectedPregnancyMonth(month)}
                  className={`flex-shrink-0 relative transition-all ${
                    isActive ? 'scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* Ring indicator for active month */}
                  {isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-full p-1">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  )}
                  
                  {/* Month icon */}
                  <div className={`relative w-14 h-14 rounded-full flex items-center justify-center ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] shadow-lg' 
                      : 'bg-white/60 backdrop-blur-sm'
                  }`}>
                    <span className={`text-lg font-bold ${
                      isActive ? 'text-white' : 'text-gray-600'
                    }`}>
                      {month}
                    </span>
                  </div>
                  
                  {/* Month label */}
                  <p className={`text-xs mt-1 text-center ${
                    isActive ? 'text-[#FF9A8D] font-bold' : 'text-gray-500'
                  }`}>
                    Bulan {month}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calendar Month View - Transparent Background */}
        <div className="mb-6 bg-white/30 backdrop-blur-md rounded-[2rem] p-6 shadow-xl border border-white/40">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <h2 className="text-xl font-bold text-gray-800">
              {months[currentMonth]} {currentYear}
            </h2>
            
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {renderCalendar()}
          </div>
        </div>

        {/* Baby Growth Card - Glassmorphism Widget */}
        <div className="mb-6 relative">
          {/* Decorative elements */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#FFB5A7]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-[#FF9A8D]/20 rounded-full blur-2xl"></div>
          
          <div className="relative bg-white/40 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/60 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Pertumbuhan Bayi</h3>
                  <p className="text-sm text-gray-600">Bulan {selectedPregnancyMonth} Kehamilan</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>

              {/* Baby illustration and comparison */}
              <div className="flex items-center justify-center mb-6">
                {/* Baby illustration */}
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-[#FFE5E5] to-[#FFF3E0] rounded-3xl flex items-center justify-center shadow-lg">
                    <img 
                      src={babyImages[selectedPregnancyMonth - 1]}
                      alt={`Baby Month ${selectedPregnancyMonth}`}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-[#FFB74D]" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Development info */}
              <div className="bg-gradient-to-r from-[#E8F5E9] to-[#FFF3E0] rounded-2xl p-4">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Perkembangan Minggu Ini</h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {selectedPregnancyMonth <= 3 
                    ? "Organ vital bayi mulai terbentuk. Jantung sudah berdetak dan otak berkembang pesat."
                    : selectedPregnancyMonth <= 6
                    ? "Bayi mulai bergerak aktif! Anda mungkin merasakan tendangan pertama. Indra pendengaran mulai berkembang."
                    : "Bayi terus bertambah berat. Paru-paru hampir matang dan bayi bersiap untuk kehidupan di luar rahim."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Insights for Selected Date */}
        {selectedDate && currentInsight && (
          <div className="mb-6 bg-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFB74D] to-[#FF9A8D] rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800">Wawasan Harian</h3>
                <p className="text-xs text-gray-600">{selectedDate} {months[currentMonth]}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-[#FFF9F5] rounded-2xl p-4">
                <p className="text-xs text-gray-500 mb-1">💡 Tips Hari Ini</p>
                <p className="text-sm text-gray-800">{currentInsight.tip}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#E8F5E9] rounded-2xl p-3">
                  <p className="text-xs text-gray-500 mb-1">😊 Mood</p>
                  <p className="text-sm font-medium text-gray-800 capitalize">{currentInsight.mood}</p>
                </div>
                <div className="bg-[#FFE5E5] rounded-2xl p-3">
                  <p className="text-xs text-gray-500 mb-1">🎯 Aktivitas</p>
                  <p className="text-sm font-medium text-gray-800">{currentInsight.activity}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => setShowUpcomingAppointments(true)}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <CalendarIcon className="w-6 h-6 text-[#81C784]" />
            </div>
            <p className="text-sm font-medium text-gray-800">Jadwal Mendatang</p>
          </button>

          <button 
            onClick={() => onNavigate('education')}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-[#FFB74D]" />
            </div>
            <p className="text-sm font-medium text-gray-800">Panduan Bulan Ini</p>
          </button>
        </div>
      </div>

      {/* Upcoming Appointments Modal */}
      {showUpcomingAppointments && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-t-[2rem] shadow-2xl max-h-[90vh] overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Jadwal Mendatang</h2>
                <p className="text-sm text-white/90">Janji temu & pemeriksaan Anda</p>
              </div>
              <button
                onClick={() => setShowUpcomingAppointments(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Appointments List */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] space-y-4">
              {upcomingAppointments.map((appointment) => {
                const IconComponent = appointment.icon;
                return (
                  <div
                    key={appointment.id}
                    className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    {/* Type Header */}
                    <div className={`bg-gradient-to-r ${appointment.gradient} px-5 py-3 flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                          <IconComponent className={`w-5 h-5 ${appointment.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Jenis Kontrol</p>
                          <p className="font-bold text-gray-800">{appointment.type}</p>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="p-5 space-y-4">
                      {/* Title */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{appointment.title}</h3>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                      </div>

                      {/* Time & Date */}
                      <div className="flex items-center gap-3 bg-[#FFF9F5] rounded-2xl p-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FFB5A7] to-[#FF9A8D] rounded-xl flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Waktu</p>
                          <p className="font-bold text-gray-800">{appointment.date}</p>
                          <p className="text-sm text-gray-600">{appointment.time}</p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 bg-[#E8F5E9] rounded-2xl p-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#81C784] to-[#66BB6A] rounded-xl flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">Lokasi</p>
                          <p className="text-sm font-medium text-gray-800">{appointment.location}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-2">
                        <button className="flex-1 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white py-3 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all">
                          Ubah Jadwal
                        </button>
                        <button className="px-6 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-sm hover:bg-gray-200 transition-all">
                          Batalkan
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add New Appointment Button */}
              <button 
                onClick={() => {
                  setShowNewAppointmentForm(true);
                  setShowUpcomingAppointments(false);
                }}
                className="w-full bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] border-2 border-dashed border-[#81C784] rounded-3xl p-6 hover:from-[#C8E6C9] hover:to-[#A5D6A7] transition-all group"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-[#81C784]" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800">Tambah Janji Baru</p>
                    <p className="text-sm text-gray-600">Buat jadwal pemeriksaan</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Appointment Form Modal */}
      {showNewAppointmentForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-t-[2rem] shadow-2xl max-h-[90vh] overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Buat Janji Baru</h2>
                <p className="text-sm text-white/90">Tambahkan jadwal pemeriksaan</p>
              </div>
              <button
                onClick={() => setShowNewAppointmentForm(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] space-y-4">
              {/* Type Selection */}
              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">Jenis Pemeriksaan</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'USG', label: 'USG', icon: Activity, gradient: 'from-[#E8F5E9] to-[#C8E6C9]', color: 'text-[#81C784]' },
                    { value: 'Gizi', label: 'Gizi', icon: UtensilsCrossed, gradient: 'from-[#FFF3E0] to-[#FFE0B2]', color: 'text-[#FFB74D]' },
                    { value: 'Kontrol', label: 'Kontrol', icon: Stethoscope, gradient: 'from-[#FFE5E5] to-[#FFCCCB]', color: 'text-[#FF9A8D]' },
                  ].map((type) => {
                    const TypeIcon = type.icon;
                    const isSelected = newAppointment.type === type.value;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setNewAppointment({ ...newAppointment, type: type.value })}
                        className={`relative rounded-2xl p-4 flex flex-col items-center gap-2 transition-all ${
                          isSelected 
                            ? `bg-gradient-to-br ${type.gradient} shadow-lg scale-105 border-2` 
                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-white shadow-md' : 'bg-white/50'
                        }`}>
                          <TypeIcon className={`w-5 h-5 ${isSelected ? type.color : 'text-gray-400'}`} />
                        </div>
                        <p className={`text-xs font-medium ${isSelected ? 'text-gray-800' : 'text-gray-500'}`}>
                          {type.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">Judul Janji</label>
                <input
                  type="text"
                  placeholder="Contoh: Pemeriksaan USG Trimester 2"
                  value={newAppointment.title}
                  onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all"
                />
              </div>

              {/* Doctor Input */}
              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">Nama Dokter</label>
                <input
                  type="text"
                  placeholder="Contoh: dr. Sarah Wijaya, Sp.OG"
                  value={newAppointment.doctor}
                  onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-bold text-gray-800 mb-2 block">Tanggal</label>
                  <input
                    type="date"
                    value={newAppointment.date}
                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-800 mb-2 block">Waktu</label>
                  <input
                    type="time"
                    value={newAppointment.time}
                    onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">Lokasi</label>
                <input
                  type="text"
                  placeholder="Contoh: RS Bunda Sehat, Lantai 3"
                  value={newAppointment.location}
                  onChange={(e) => setNewAppointment({ ...newAppointment, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all"
                />
              </div>

              {/* Notes Input */}
              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">Catatan (Opsional)</label>
                <textarea
                  placeholder="Tambahkan catatan khusus untuk janji ini..."
                  value={newAppointment.notes}
                  onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF9A8D] outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowNewAppointmentForm(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-medium shadow-md hover:bg-gray-200 transition-all"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    // Here you would save the appointment
                    console.log('New appointment:', newAppointment);
                    setShowNewAppointmentForm(false);
                    setShowUpcomingAppointments(true);
                    // Reset form
                    setNewAppointment({
                      type: 'USG',
                      title: '',
                      doctor: '',
                      date: '',
                      time: '',
                      location: '',
                      notes: ''
                    });
                  }}
                  className="flex-1 bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white py-4 rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Simpan Janji
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 px-4 z-20">
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
                className="flex flex-col items-center gap-1 text-[#FF9A8D] relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-md">
                  <CalendarIcon className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-[9px] font-medium">Kalender</span>
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

      {/* Custom scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
