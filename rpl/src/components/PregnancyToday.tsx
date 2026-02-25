import { ArrowLeft, Calendar, Clock, MapPin, Plus, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';

// Import gambar tetap sama (asumsi path benar)
import fetus1 from 'figma:asset/d5668475989663c97ec43b1947e385a205a71712.png';
import fetus2 from 'figma:asset/169f06e5dac52cc623eb97aa666418220ff5da73.png';
import fetus3 from 'figma:asset/a05d13b3be478e81b728a2eab1811ce0b219d7b5.png';
import fetus4 from 'figma:asset/b667c220646ad11ca0e7d45a34c0f8e5abb32c92.png';
import fetus5 from 'figma:asset/cb7b36472f9785dbb6839e861ee0eeba658c6d65.png';
import fetus6 from 'figma:asset/cc08cd496758cfc617e151f933c9b012c6e66699.png';
import fetus7 from 'figma:asset/ca8983b6df4d9a21f86a2b4a8d8938d07348b538.png';
import fetus8 from 'figma:asset/0528c1b544d874613873a4b5e03f99c8cd8593d9.png';
import fetus9 from 'figma:asset/2ef50768f74bc7b17f694ed29193697705fceefe.png';

interface PregnancyTodayProps {
  onNavigate: (screen: string) => void;
}

// Interface untuk data Janji Temu
interface Appointment {
  id: number;
  hospital: string;
  time: string;
  type: string; // USG, Gizi, dll
}

export function PregnancyToday({ onNavigate }: PregnancyTodayProps) {
  const [selectedMonth, setSelectedMonth] = useState(5); // Default bulan 5
  
  // State untuk fitur Janji Mendatang
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formInput, setFormInput] = useState({
    hospital: '',
    time: '',
    type: 'Pemeriksaan Rutin' // Default value
  });

  // Handle Form Submit
  const handleAddAppointment = () => {
    if (formInput.hospital && formInput.time) {
      const newAppointment: Appointment = {
        id: Date.now(),
        hospital: formInput.hospital,
        time: formInput.time,
        type: formInput.type,
      };
      setAppointments([...appointments, newAppointment]);
      setFormInput({ hospital: '', time: '', type: 'Pemeriksaan Rutin' });
      setShowAppointmentForm(false);
    }
  };

  const getFetusByMonth = (month: number) => {
    if (month === 1) return fetus1;
    if (month === 2) return fetus2;
    if (month === 3) return fetus3;
    if (month === 4) return fetus4;
    if (month === 5) return fetus5;
    if (month === 6) return fetus6;
    if (month === 7) return fetus7;
    if (month === 8) return fetus8;
    if (month === 9) return fetus9;
    return fetus5;
  };

  const monthsData = [
    {
      month: 1,
      weeks: '1-4',
      size: 'biji poppy',
      development: [
        'Pembuahan terjadi dan sel telur yang dibuahi menempel di dinding rahim',
        'Embrio mulai berkembang',
        'Plasenta dan tali pusar mulai terbentuk',
        'Organ-organ vital mulai berkembang'
      ],
      symptoms: [
        'Terlambat menstruasi',
        'Mual ringan di pagi hari',
        'Payudara terasa lebih sensitif',
        'Sering buang air kecil',
        'Kelelahan yang tidak biasa'
      ]
    },
    {
      month: 2,
      weeks: '5-8',
      size: 'kacang merah',
      development: [
        'Jantung bayi mulai berdetak',
        'Lengan dan kaki mulai terbentuk',
        'Otak dan sistem saraf berkembang pesat',
        'Panjang: sekitar 2,5 cm di akhir bulan'
      ],
      symptoms: [
        'Morning sickness yang lebih intens',
        'Sensitif terhadap bau-bauan',
        'Perubahan mood yang drastis',
        'Peningkatan air liur',
        'Kram perut ringan'
      ]
    },
    {
      month: 3,
      weeks: '9-13',
      size: 'buah plum',
      development: [
        'Semua organ vital sudah terbentuk',
        'Jari tangan dan kaki sudah terbentuk',
        'Bayi mulai bergerak (belum terasa)',
        'Panjang: sekitar 7,5 cm'
      ],
      symptoms: [
        'Morning sickness mulai berkurang',
        'Energi mulai kembali',
        'Perut mulai sedikit membesar',
        'Kulit mungkin lebih berminyak',
        'Varises mungkin muncul'
      ]
    },
    {
      month: 4,
      weeks: '14-17',
      size: 'buah alpukat',
      development: [
        'Bayi bisa mengisap jempol',
        'Sidik jari mulai terbentuk',
        'Kerangka mulai mengeras',
        'Panjang: sekitar 12 cm'
      ],
      symptoms: [
        'Energi meningkat (trimester kedua)',
        'Nafsu makan bertambah',
        'Perut terlihat membesar',
        'Garis hitam di perut mungkin muncul',
        'Hidung tersumbat'
      ]
    },
    {
      month: 5,
      weeks: '18-21',
      size: 'paprika',
      development: [
        'Bayi sudah bisa mendengar suara dari luar',
        'Sidik jari terbentuk sempurna',
        'Bayi mungkin menguap dan cegukan',
        'Panjang: sekitar 14-25 cm'
      ],
      symptoms: [
        'Mulai merasakan gerakan bayi',
        'Sakit punggung lebih terasa',
        'Kaki bengkak',
        'Garis stretch marks mungkin muncul',
        'Gusi berdarah'
      ]
    },
    {
      month: 6,
      weeks: '22-26',
      size: 'jagung manis',
      development: [
        'Mata bayi mulai membuka',
        'Paru-paru berkembang',
        'Bayi merespons sentuhan dan suara',
        'Panjang: sekitar 30 cm'
      ],
      symptoms: [
        'Gerakan bayi lebih kuat',
        'Kontraksi Braxton Hicks ringan',
        'Sesak napas ringan',
        'Sakit punggung bawah',
        'Kaki kram di malam hari'
      ]
    },
    {
      month: 7,
      weeks: '27-30',
      size: 'kepala kol',
      development: [
        'Bayi bisa membuka dan menutup mata',
        'Pola tidur sudah teratur',
        'Otak berkembang pesat',
        'Panjang: sekitar 37 cm'
      ],
      symptoms: [
        'Sesak napas lebih sering',
        'Heartburn dan gangguan pencernaan',
        'Sering buang air kecil',
        'Pergelangan kaki bengkak',
        'Sulit tidur nyenyak'
      ]
    },
    {
      month: 8,
      weeks: '31-35',
      size: 'kelapa',
      development: [
        'Bayi berputar ke posisi kepala di bawah',
        'Lemak tubuh bertambah',
        'Tulang sudah mengeras',
        'Panjang: sekitar 45 cm'
      ],
      symptoms: [
        'Perut terasa sangat besar',
        'Kontraksi palsu lebih sering',
        'Sangat mudah lelah',
        'Kesulitan bernapas',
        'Sering mengalami heartburn'
      ]
    },
    {
      month: 9,
      weeks: '36-40',
      size: 'semangka kecil',
      development: [
        'Bayi siap untuk lahir',
        'Paru-paru sudah matang',
        'Gerakan berkurang karena ruang terbatas',
        'Berat: sekitar 2,7-4 kg'
      ],
      symptoms: [
        'Perut turun ke bawah',
        'Sering ingin ke toilet',
        'Kontraksi lebih sering',
        'Keluarnya lendir atau bercak darah',
        'Perasaan ingin segera bertemu bayi'
      ]
    }
  ];

  const currentData = monthsData[selectedMonth - 1];

  return (
    <div className="bg-white rounded-[40px] shadow-xl overflow-hidden min-h-[750px] flex flex-col border-[3px] border-gray-800">
      <div className="flex-1 p-6 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>Kehamilan Anda Hari Ini</h1>
        </div>

        {/* --- BAGIAN BARU: JANJI MENDATANG (MENGGANTIKAN KONSEP KALENDER) --- */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2>Janji Mendatang</h2>
            <button 
              onClick={() => setShowAppointmentForm(!showAppointmentForm)}
              className="flex items-center gap-2 bg-[#D5536C] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#c0485f] transition"
            >
              {showAppointmentForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showAppointmentForm ? 'Batal' : 'Tambah Janji'}
            </button>
          </div>

          {/* Form Input Janji */}
          {showAppointmentForm && (
            <div className="bg-gray-50 rounded-3xl p-5 mb-4 border border-gray-200 animate-in slide-in-from-top-2">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rumah Sakit / Klinik</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input 
                      type="text"
                      placeholder="Nama RS atau Klinik"
                      value={formInput.hospital}
                      onChange={(e) => setFormInput({...formInput, hospital: e.target.value})}
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D5536C] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jam Kontrol</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input 
                        type="time"
                        value={formInput.time}
                        onChange={(e) => setFormInput({...formInput, time: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D5536C]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kontrol</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <select 
                        value={formInput.type}
                        onChange={(e) => setFormInput({...formInput, type: e.target.value})}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D5536C] bg-white appearance-none"
                      >
                        <option value="Pemeriksaan Rutin">Pemeriksaan Rutin</option>
                        <option value="USG">USG</option>
                        <option value="Konsultasi Gizi">Konsultasi Gizi</option>
                        <option value="Cek Lab">Cek Lab</option>
                        <option value="Senam Hamil">Senam Hamil</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleAddAppointment}
                  className="w-full bg-[#D5536C] text-white py-2 rounded-xl font-medium hover:bg-[#c0485f] transition shadow-sm"
                >
                  Simpan Jadwal
                </button>
              </div>
            </div>
          )}

          {/* List Kartu Janji (Empty State & List) */}
          {appointments.length === 0 && !showAppointmentForm ? (
            <div className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-dashed border-gray-200">
              <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Belum ada jadwal kontrol.</p>
              <p className="text-gray-400 text-xs">Klik tombol tambah untuk membuat pengingat.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-50 p-3 rounded-xl">
                      <Calendar className="w-6 h-6 text-[#D5536C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{appointment.type}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{appointment.hospital}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-lg">
                    <span className="text-gray-700 font-medium text-sm">{appointment.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* --- AKHIR BAGIAN JANJI MENDATANG --- */}

        {/* Month Selector (Tetap ada sebagai navigasi perkembangan) */}
        <div className="mb-6">
          <h2 className="mb-3">Perkembangan Bulanan</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {monthsData.map((data) => (
              <button
                key={data.month}
                onClick={() => setSelectedMonth(data.month)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition min-w-[80px] ${
                  selectedMonth === data.month
                    ? 'bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Bulan {data.month}
              </button>
            ))}
          </div>
        </div>

        {/* Week Info */}
        <div className="bg-gradient-to-b from-[#f5e6d8] to-[#f9f2ec] rounded-3xl p-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4">
              <img 
                src={getFetusByMonth(selectedMonth)}
                alt="Baby development"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="mb-2">Bulan {currentData.month} (Minggu {currentData.weeks})</h2>
            <p className="text-sm text-gray-600 text-center">Bayi Anda sekarang seukuran {currentData.size}!</p>
          </div>
        </div>

        {/* Baby Development */}
        <div className="bg-[#FDEEF1] rounded-3xl p-5 mb-6">
          <h2 className="mb-4">Perkembangan Bayi</h2>
          <ul className="space-y-3">
            {currentData.development.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-pink-500">•</span>
                <p className="text-sm text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Symptoms */}
        <div className="bg-gray-50 rounded-3xl p-5">
          <h2 className="mb-4">Gejala yang Mungkin Dialami</h2>
          <ul className="space-y-3">
            {currentData.symptoms.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-blue-500">•</span>
                <p className="text-sm text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}