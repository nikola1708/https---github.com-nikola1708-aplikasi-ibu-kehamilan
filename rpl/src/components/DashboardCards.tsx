import { Calendar, FileEdit, MessageCircle, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardCardsProps {
  onNavigate: (screen: string) => void;
}

export function DashboardCards({ onNavigate }: DashboardCardsProps) {
  const cards = [
    {
      id: 1,
      bgColor: 'bg-[#C8E6C9]', // Pastel Green
      icon: Calendar,
      decorIcon: CheckCircle,
      title: 'Kalender',
      subtitle: 'Kehamilan Anda',
      navigateTo: 'appointments',
      delay: 0
    },
    {
      id: 2,
      bgColor: 'bg-[#FFE0B2]', // Pastel Orange
      icon: FileEdit,
      decorIcon: FileEdit,
      title: 'Catat Gejala',
      subtitle: 'Harian Anda',
      navigateTo: 'log-symptoms',
      delay: 0.1
    },
    {
      id: 3,
      bgColor: 'bg-[#FFD4E0]', // Pastel Pink
      icon: MessageCircle,
      decorIcon: MessageCircle,
      title: 'Bicara',
      subtitle: 'Tentang Gejala',
      navigateTo: 'symptoms-talk',
      delay: 0.2
    },
    {
      id: 4,
      bgColor: 'bg-[#E1BEE7]', // Pastel Purple
      icon: BookOpen,
      decorIcon: BookOpen,
      title: 'Edukasi',
      subtitle: 'Panduan Lengkap',
      navigateTo: 'education',
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => {
        const IconComponent = card.icon;
        const DecorIconComponent = card.decorIcon;
        
        return (
          <motion.button
            key={card.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: card.delay,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            onClick={() => onNavigate(card.navigateTo)}
            className={`${card.bgColor} rounded-3xl p-5 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow aspect-square flex flex-col items-start justify-between`}
          >
            {/* Watermark Icon - Top Right Background */}
            <div className="absolute top-4 right-4 opacity-10">
              <DecorIconComponent className="w-20 h-20" strokeWidth={1.5} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full">
              {/* White Rounded Square Container with Icon */}
              <motion.div 
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4"
              >
                <IconComponent className="w-7 h-7 text-gray-800" strokeWidth={2} />
              </motion.div>

              {/* Title and Subtitle */}
              <div className="text-left">
                <h3 className="text-gray-800 font-bold text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs">
                  {card.subtitle}
                </p>
              </div>
            </div>

            {/* Subtle Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"
            />
          </motion.button>
        );
      })}
    </div>
  );
}
