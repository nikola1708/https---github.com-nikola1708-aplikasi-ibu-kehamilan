import { useState } from 'react';
import { Calendar, ArrowRight, Info } from 'lucide-react';
import logoImg from 'figma:asset/5439afe30327a4d0a71997d25ded3b1b670cca17.png';

interface PregnancyCalculatorProps {
  onComplete: () => void;
  onSkip?: () => void;
}

export function PregnancyCalculator({ onComplete, onSkip }: PregnancyCalculatorProps) {
  // HARDCODED INPUT DATA - Source of Truth for consistency
  const [lastPeriodDate, setLastPeriodDate] = useState('2025-02-18'); // 18 Februari 2025
  const [lastPeriodEndDate, setLastPeriodEndDate] = useState('');
  const [cycleLength, setCycleLength] = useState('28'); // 28 Hari
  const [showResults, setShowResults] = useState(false);

  // Calculate due date using Naegele's Rule (LMP + 280 days)
  const calculateDueDate = (lmpDate: string, cycle: number): Date => {
    const lmp = new Date(lmpDate);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280 + (cycle - 28)); // Adjust for cycle length
    return dueDate;
  };

  // Calculate conception date (LMP + 14 days for average cycle)
  const calculateConceptionDate = (lmpDate: string, cycle: number): Date => {
    const lmp = new Date(lmpDate);
    const conception = new Date(lmp);
    conception.setDate(conception.getDate() + (cycle / 2));
    return conception;
  };

  // Calculate weeks pregnant
  const calculateWeeksPregnant = (lmpDate: string): number => {
    const lmp = new Date(lmpDate);
    const today = new Date();
    
    // Set time to midnight to avoid time zone issues
    lmp.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    return weeks >= 0 ? weeks : 0; // Return actual weeks even if > 42
  };

  // Calculate days pregnant
  const calculateDaysPregnant = (lmpDate: string): number => {
    const lmp = new Date(lmpDate);
    const today = new Date();
    
    // Set time to midnight to avoid time zone issues
    lmp.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lmp.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  // Calculate trimester with post-term detection
  const calculateTrimester = (weeks: number): string => {
    if (weeks <= 13) return 'Trimester 1';
    if (weeks <= 26) return 'Trimester 2';
    if (weeks <= 40) return 'Trimester 3';
    if (weeks > 40) return 'Trimester 3 (Post-term)';
    return 'Trimester 3';
  };

  // Calculate days overdue
  const calculateDaysOverdue = (dueDate: Date): number => {
    const today = new Date();
    const diffTime = today.getTime() - dueDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const handleCalculate = () => {
    if (!lastPeriodDate) {
      alert('Silakan masukkan tanggal HPHT Anda');
      return;
    }

    setShowResults(true);
  };

  const handleContinue = () => {
    // Save to localStorage and update current user
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      user.lastPeriodDate = lastPeriodDate;
      user.cycleLength = cycleLength;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    onComplete();
  };

  const weeks = lastPeriodDate ? calculateWeeksPregnant(lastPeriodDate) : 0;
  const days = lastPeriodDate ? calculateDaysPregnant(lastPeriodDate) : 0;
  const daysInWeek = days % 7;
  const trimester = calculateTrimester(weeks);
  const dueDate = lastPeriodDate ? calculateDueDate(lastPeriodDate, parseInt(cycleLength)) : new Date();
  const conceptionDate = lastPeriodDate ? calculateConceptionDate(lastPeriodDate, parseInt(cycleLength)) : new Date();
  const daysOverdue = calculateDaysOverdue(dueDate);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="bg-[#E8B4BC] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#FDEEF1] rounded-[40px] shadow-2xl overflow-hidden w-full max-w-md">
        <div className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20">
              <img 
                src={logoImg}
                alt="Mommycare"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl mb-2 text-gray-800">Kalkulator Kehamilan</h1>
            <p className="text-gray-600 text-sm">Hitung usia kehamilan & tanggal lahir</p>
          </div>

          {/* Form Section */}
          <div className="flex-1 px-8 py-6 -mt-6 overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              {!showResults ? (
                <>
                  {/* HPHT Input */}
                  <div className="mb-5">
                    <label className="block text-sm mb-2">
                      📅 HPHT (Hari Pertama Haid Terakhir)
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={lastPeriodDate}
                        onChange={(e) => setLastPeriodDate(e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Tanggal hari pertama menstruasi terakhir Anda
                    </p>
                  </div>

                  {/* Cycle Length Input */}
                  <div className="mb-6">
                    <label className="block text-sm mb-2">
                      🔄 Panjang Siklus Haid (hari)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="21"
                        max="35"
                        value={cycleLength}
                        onChange={(e) => setCycleLength(e.target.value)}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D5536C]"
                      />
                      <div className="w-16 text-center bg-[#FDEEF1] border-2 border-[#E8B4BC] rounded-xl py-2 px-3">
                        <span className="font-medium">{cycleLength}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Rata-rata: 28 hari (Normal: 21-35 hari)
                    </p>
                  </div>

                  {/* Info Box */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-4 mb-5">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-700">
                        <p className="mb-2">
                          <span className="font-medium">HPHT</span> digunakan untuk menghitung perkiraan usia kehamilan dan tanggal lahir menggunakan Rumus Naegele.
                        </p>
                        <p>
                          <span className="font-medium">Siklus haid</span> membantu perhitungan lebih akurat sesuai kondisi tubuh Anda.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <button 
                    onClick={handleCalculate}
                    className="w-full bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white py-3 rounded-2xl hover:opacity-90 transition flex items-center justify-center gap-2 mb-3"
                  >
                    <span>Hitung Sekarang</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Skip Button */}
                  {onSkip && (
                    <button 
                      onClick={onSkip}
                      className="w-full text-gray-500 py-2 rounded-2xl hover:text-gray-700 transition text-sm"
                    >
                      Lewati untuk sekarang
                    </button>
                  )}
                </>
              ) : (
                <>
                  {/* Results */}
                  <h2 className="text-center mb-5">🎉 Hasil Perhitungan</h2>

                  {/* Main Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-gradient-to-br from-[#FDEEF1] to-[#E8B4BC]/30 border-2 border-[#E8B4BC] rounded-3xl p-4 text-center">
                      <p className="text-xs text-gray-600 mb-1">Usia Kehamilan</p>
                      <p className="text-2xl text-[#D5536C]">{weeks}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 border-2 border-blue-200 rounded-3xl p-4 text-center">
                      <p className="text-xs text-gray-600 mb-1">Trimester</p>
                      <p className="text-lg text-blue-600">{trimester}</p>
                      <p className="text-xs text-gray-600 mt-1">saat ini</p>
                    </div>
                  </div>

                  {/* Due Date Card */}
                  <div className="bg-gradient-to-r from-[#D5536C] to-[#E8758A] rounded-3xl p-5 text-white text-center mb-5">
                    <p className="text-xs opacity-90 mb-1">Perkiraan Tanggal Lahir (HPL)</p>
                    <p className="text-xl mb-2">{formatDate(dueDate)}</p>
                    <div className="bg-white/20 rounded-2xl py-2 px-4 inline-block">
                      <p className="text-sm">
                        {daysOverdue > 0 
                          ? `Sudah Lewat ${daysOverdue} hari! 💕` 
                          : `${Math.ceil((dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} hari lagi! 💕`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-3 mb-5">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">HPHT Anda</p>
                      <p className="text-sm">{formatDate(new Date(lastPeriodDate))}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Perkiraan Konsepsi</p>
                      <p className="text-sm">{formatDate(conceptionDate)}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Panjang Siklus</p>
                      <p className="text-sm">{cycleLength} hari</p>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button 
                    onClick={handleContinue}
                    className="w-full bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white py-3 rounded-2xl hover:opacity-90 transition flex items-center justify-center gap-2 mb-2"
                  >
                    <span>Lanjut ke Dashboard</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Recalculate */}
                  <button 
                    onClick={() => setShowResults(false)}
                    className="w-full text-gray-500 py-2 rounded-2xl hover:text-gray-700 transition text-sm"
                  >
                    Hitung ulang
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}