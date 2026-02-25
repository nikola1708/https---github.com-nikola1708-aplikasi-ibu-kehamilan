import { Home as HomeIcon, Calendar, Headphones, BookOpen, User, Phone, MapPin, Clock, Star, Video, MessageSquare, PhoneCall, Navigation, AlertCircle, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SupportProps {
  onNavigate: (screen: string) => void;
}

export function Support({ onNavigate }: SupportProps) {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Top specialists with circular avatars
  const topSpecialists = [
    {
      id: 1,
      name: 'dr. Sarah Amelia',
      specialization: 'Sp.OG',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1632054224477-c9cb3aae1b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      experience: '12 Tahun',
      available: true
    },
    {
      id: 2,
      name: 'dr. Ahmad Fauzi',
      specialization: 'Sp.OG',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      experience: '15 Tahun',
      available: true
    },
    {
      id: 3,
      name: 'dr. Linda Wijaya',
      specialization: 'Sp.OG',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      experience: '10 Tahun',
      available: false
    },
    {
      id: 4,
      name: 'dr. Michael Chen',
      specialization: 'Sp.OG',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1659353888221-42ac1b5b0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      experience: '8 Tahun',
      available: true
    },
    {
      id: 5,
      name: 'dr. Diana Putri',
      specialization: 'Sp.A',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606619788433-2ba22e49d498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      experience: '9 Tahun',
      available: true
    }
  ];

  // Hospital cards with facility photos
  const hospitals = [
    {
      id: 1,
      name: 'RS Ibu dan Anak Hermina',
      address: 'Jl. Raya Serpong No. 5, Tangerang Selatan',
      phone: '(021) 5373-1111',
      emergency: '(021) 5373-0911',
      distance: '2.5 km',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      specialties: ['Kebidanan', 'Kandungan', 'NICU'],
      openNow: true
    },
    {
      id: 2,
      name: 'RSIA Bunda Jakarta',
      address: 'Jl. Teuku Cik Ditiro No. 28, Jakarta Pusat',
      phone: '(021) 3192-2005',
      emergency: '(021) 3192-0911',
      distance: '3.8 km',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      specialties: ['Kebidanan', 'Fetomaternal', 'NICU'],
      openNow: true
    },
    {
      id: 3,
      name: 'RS Brawijaya Women & Children',
      address: 'Jl. Kerinci Raya No. 22, Jakarta Selatan',
      phone: '(021) 720-9595',
      emergency: '(021) 720-0911',
      distance: '5.2 km',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      specialties: ['Kebidanan', 'Kandungan', 'Pediatri'],
      openNow: true
    }
  ];

  return (
    <div className="bg-[#FFF9F5] min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dukungan Kesehatan</h1>
          <p className="text-sm text-gray-600">Akses cepat ke layanan kesehatan dan darurat</p>
        </div>

        {/* Emergency Assistance Card - Glassmorphism */}
        <div className="relative mb-8 rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E8E] to-[#FFB5A7] animate-gradient"></div>
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.8) 0%, transparent 50%)',
               }}>
          </div>

          {/* Glassmorphism effect */}
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-8">
            <div className="text-center">
              {/* Alert icon */}
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border-4 border-white/40 shadow-2xl">
                    <Phone className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Bantuan Darurat</h2>
              <p className="text-white/90 text-sm mb-6">
                Hubungi layanan darurat 24/7 untuk bantuan segera
              </p>

              {/* Emergency buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowEmergencyModal(true)}
                  className="w-full bg-white text-[#FF6B6B] py-4 px-6 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-6 h-6" />
                  Panggil Ambulans 119
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 px-4 rounded-xl font-medium text-sm hover:bg-white/30 transition-all flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chat Medis
                  </button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 px-4 rounded-xl font-medium text-sm hover:bg-white/30 transition-all flex items-center justify-center gap-2">
                    <Video className="w-4 h-4" />
                    Video Call
                  </button>
                </div>
              </div>

              {/* Emergency numbers */}
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/80 text-xs mb-2">Nomor Darurat Lainnya:</p>
                <div className="flex justify-center gap-4 text-white/90 text-xs">
                  <span>Polisi: 110</span>
                  <span>•</span>
                  <span>Pemadam: 113</span>
                  <span>•</span>
                  <span>PMI: 0811-9696-119</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Nearby Support Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Temukan Dukungan Terdekat</h2>
            <button className="text-sm text-[#FF9A8D] font-medium hover:underline flex items-center gap-1">
              <Navigation className="w-4 h-4" />
              Lihat Peta
            </button>
          </div>

          {/* Top Specialists - Horizontal Scroll */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-700 mb-3 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#FF9A8D]" />
              Spesialis Terbaik
            </h3>
            
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
              {topSpecialists.map((doctor) => (
                <button
                  key={doctor.id}
                  className="flex-shrink-0 w-32 text-center group"
                >
                  {/* Circular avatar */}
                  <div className="relative mb-3">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#FF9A8D] transition-all group-hover:scale-110">
                      <ImageWithFallback
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Status indicator */}
                    {doctor.available && (
                      <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}

                    {/* Rating badge */}
                    <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#FFB74D] to-[#FF9A8D] text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3" fill="currentColor" />
                      {doctor.rating}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
                    {doctor.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">{doctor.specialization}</p>
                  <p className="text-xs text-gray-500">{doctor.experience}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hospital Directory - Vertical List */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FF9A8D]" />
            Rumah Sakit Terdekat
          </h3>

          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Hospital Image with overlay */}
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Hospital name overlaid on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{hospital.name}</h4>
                        <div className="flex items-center gap-2 text-white/90 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" fill="currentColor" />
                            <span>{hospital.rating}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Navigation className="w-3 h-3" />
                            <span>{hospital.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      {hospital.openNow && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Buka
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hospital info */}
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600 line-clamp-2">{hospital.address}</p>
                  </div>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-[#FFF3E0] text-[#FFB74D] text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Primary button - Book Appointment */}
                    <button className="bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white py-3 px-4 rounded-2xl font-medium text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Buat Janji
                    </button>
                    
                    {/* Secondary button - Emergency Call */}
                    <button className="bg-white border-2 border-[#FF9A8D] text-[#FF9A8D] py-3 px-4 rounded-2xl font-medium text-sm hover:bg-[#FFF3E0] transition-all flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Darurat
                    </button>
                  </div>

                  {/* Phone numbers */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      <span>{hospital.emergency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Center Card */}
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
              <Headphones className="w-7 h-7 text-[#81C784]" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-800 mb-1">Pusat Bantuan</h3>
              <p className="text-sm text-gray-600">
                Hubungi customer service kami untuk bantuan lebih lanjut
              </p>
            </div>
          </div>
          <button className="w-full mt-4 bg-white text-[#81C784] py-3 px-4 rounded-2xl font-medium text-sm shadow-md hover:shadow-lg transition-all">
            Hubungi Sekarang
          </button>
        </div>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Konfirmasi Panggilan Darurat</h3>
              <p className="text-sm text-gray-600 mb-6">
                Anda akan terhubung ke layanan ambulans darurat. Pastikan ini adalah keadaan darurat yang memerlukan bantuan medis segera.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-red-700 transition-all">
                  Ya, Panggil Ambulans
                </button>
                <button
                  onClick={() => setShowEmergencyModal(false)}
                  className="w-full bg-gray-100 text-gray-700 py-4 px-6 rounded-2xl font-medium hover:bg-gray-200 transition-all"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                className="flex flex-col items-center gap-1 text-[#FF9A8D] relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-md">
                  <Headphones className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-[9px] font-medium">Dukungan</span>
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

      {/* Custom scrollbar hide & animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
