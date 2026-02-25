import { ArrowLeft, Heart, Calendar, CheckCircle, Edit3, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogSymptomsProps {
  onNavigate: (screen: string) => void;
}

export function LogSymptoms({ onNavigate }: LogSymptomsProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Symptoms with custom cute icons and pastel colors
  const symptoms = [
    { 
      id: 'mual', 
      name: 'Mual', 
      icon: '🤢',
      color: 'bg-[#C8E6C9]', // Soft Green
      colorSelected: 'bg-[#A5D6A7]',
      textColor: 'text-[#2E7D32]'
    },
    { 
      id: 'kelelahan', 
      name: 'Kelelahan', 
      icon: '😫',
      color: 'bg-[#FFF9C4]', // Soft Yellow
      colorSelected: 'bg-[#FFF59D]',
      textColor: 'text-[#F57C00]'
    },
    { 
      id: 'sakit-kepala', 
      name: 'Sakit Kepala', 
      icon: '🤕',
      color: 'bg-[#BBDEFB]', // Soft Blue
      colorSelected: 'bg-[#90CAF9]',
      textColor: 'text-[#1976D2]'
    },
    { 
      id: 'insomnia', 
      name: 'Insomnia', 
      icon: '💤',
      color: 'bg-[#E1BEE7]', // Soft Purple
      colorSelected: 'bg-[#CE93D8]',
      textColor: 'text-[#7B1FA2]'
    },
    { 
      id: 'kram-kaki', 
      name: 'Kram Kaki', 
      icon: '🦵',
      color: 'bg-[#FFCCBC]', // Soft Coral
      colorSelected: 'bg-[#FFAB91]',
      textColor: 'text-[#E64A19]'
    },
    { 
      id: 'cemas', 
      name: 'Cemas', 
      icon: '😰',
      color: 'bg-[#F8BBD0]', // Soft Rose
      colorSelected: 'bg-[#F48FB1]',
      textColor: 'text-[#C2185B]'
    },
    { 
      id: 'heartburn', 
      name: 'Heartburn', 
      icon: '🔥',
      color: 'bg-[#FFE0B2]', // Soft Orange
      colorSelected: 'bg-[#FFCC80]',
      textColor: 'text-[#F57C00]'
    },
    { 
      id: 'sakit-punggung', 
      name: 'Sakit Punggung', 
      icon: '😣',
      color: 'bg-[#D7CCC8]', // Soft Brown
      colorSelected: 'bg-[#BCAAA4]',
      textColor: 'text-[#5D4037]'
    }
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setShowSuccess(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedSymptoms([]);
        setNotes('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Decorative Floating Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-[#FFE5E5] rounded-full opacity-30 blur-2xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-16 w-32 h-32 bg-[#FFF9C4] rounded-full opacity-40 blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-20 w-28 h-28 bg-[#BBDEFB] rounded-full opacity-30 blur-2xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-12 w-36 h-36 bg-[#F8BBD0] rounded-full opacity-35 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('home')}
              className="p-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition shadow-md"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-800">Catat Gejala Anda</h1>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Heart className="w-6 h-6 text-[#FF9A8D]" fill="#FF9A8D" />
                </motion.div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Bagaimana perasaan Anda hari ini? Pilih semua yang sesuai.
              </p>
            </div>
          </div>
        </motion.div>

        {showSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="text-6xl mb-6"
            >
              ✅
            </motion.div>
            <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">Gejala mu telah masuk</h2>
            <p className="text-gray-600 text-center">Tunggu sebentar...</p>
            <div className="mt-6 flex gap-2">
              <div className="w-3 h-3 bg-[#FF9A8D] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-[#FFB5A7] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-[#FF9A8D] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Symptoms Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#FFB347]" />
                <h2 className="text-lg font-bold text-gray-800">Pilih gejala</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {symptoms.map((symptom, index) => {
                  const isSelected = selectedSymptoms.includes(symptom.id);
                  
                  return (
                    <motion.button
                      key={symptom.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`relative p-5 rounded-3xl transition-all shadow-md hover:shadow-lg ${
                        isSelected
                          ? symptom.colorSelected
                          : symptom.color
                      }`}
                    >
                      {/* Checkmark for Selected State */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 500,
                              damping: 20
                            }}
                            className="absolute top-2 right-2 w-7 h-7 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckCircle className="w-5 h-5 text-white" fill="white" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Glow Effect for Selected */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent pointer-events-none"
                        />
                      )}

                      {/* Icon */}
                      <div className="text-4xl mb-3 text-center">
                        {symptom.icon}
                      </div>

                      {/* Text */}
                      <p className={`text-sm font-semibold text-center ${symptom.textColor}`}>
                        {symptom.name}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Notes Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Edit3 className="w-5 h-5 text-[#FF9A8D]" />
                <h2 className="text-lg font-bold text-gray-800">Ada hal lain yang ingin diceritakan?</h2>
              </div>
              
              <div className="relative">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Detail lainnya..."
                  className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-5 pr-12 min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-[#FF9A8D] border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 shadow-md"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, #f0f0f0 28px, #f0f0f0 29px)'
                  }}
                />
                {/* Pencil Icon in Corner */}
                <div className="absolute bottom-4 right-4 opacity-30">
                  <Edit3 className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Save Button */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.03,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.97,
                transition: { duration: 0.1 }
              }}
              onClick={handleSubmit}
              disabled={isSubmitting || selectedSymptoms.length === 0}
              className="w-full bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white py-5 rounded-full hover:shadow-2xl transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg font-semibold"
            >
              <Calendar className="w-6 h-6" />
              {isSubmitting ? 'Menyimpan...' : 'Simpan Catatan Hari Ini'}
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}