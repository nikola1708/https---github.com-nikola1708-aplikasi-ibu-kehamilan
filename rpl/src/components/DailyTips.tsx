import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import nutritionImg from 'figma:asset/5abdb10c1fa2632fb4a6b68203efa0a3b94220c3.png';

interface DailyTipsProps {
  onNavigate: (screen: string) => void;
}

export function DailyTips({ onNavigate }: DailyTipsProps) {
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = ['Semua', 'Nutrisi', 'Olahraga', 'Kesehatan', 'Tidur'];

  const tips = [
    {
      category: 'nutrisi',
      emoji: '🥗',
      title: 'Tetap Terhidrasi',
      tip: 'Minum setidaknya 8-10 gelas air setiap hari. Hidrasi yang baik membantu mencegah sembelit dan mengurangi pembengkakan.',
      hasImage: false
    },
    {
      category: 'nutrisi',
      emoji: '🍓',
      title: 'Makanan Sehat untuk Ibu Hamil',
      tip: 'Konsumsi makanan bergizi seimbang seperti buah-buahan segar, sayuran hijau, protein berkualitas, dan karbohidrat kompleks untuk mendukung perkembangan bayi.',
      hasImage: true
    },
    {
      category: 'olahraga',
      emoji: '🧘‍♀️',
      title: 'Peregangan Lembut',
      tip: 'Praktikkan yoga prenatal selama 15-20 menit setiap hari untuk meningkatkan fleksibilitas dan mengurangi sakit punggung.'
    },
    {
      category: 'kesehatan',
      emoji: '💆‍♀️',
      title: 'Waktu Perawatan Diri',
      tip: 'Luangkan 10 menit setiap hari untuk pernapasan dalam atau meditasi guna mengurangi stres dan kecemasan.'
    },
    {
      category: 'tidur',
      emoji: '😴',
      title: 'Posisi Tidur',
      tip: 'Cobalah tidur miring ke kiri dengan bantal di antara lutut untuk sirkulasi yang lebih baik.'
    },
    {
      category: 'nutrisi',
      emoji: '🍊',
      title: 'Vitamin C',
      tip: 'Sertakan buah jeruk dalam diet Anda untuk membantu penyerapan zat besi dan dukungan sistem imun.'
    },
    {
      category: 'olahraga',
      emoji: '🚶‍♀️',
      title: 'Jalan Santai',
      tip: 'Lakukan jalan kaki 20-30 menit untuk menjaga kebugaran dan meningkatkan mood.'
    },
    {
      category: 'kesehatan',
      emoji: '📝',
      title: 'Jurnal Kehamilan',
      tip: 'Tuliskan pikiran dan perasaan Anda untuk memproses emosi selama kehamilan.'
    },
    {
      category: 'tidur',
      emoji: '🌙',
      title: 'Rutinitas Tidur',
      tip: 'Buat rutinitas menenangkan 30 menit sebelum tidur untuk istirahat yang lebih baik.'
    }
  ];

  const filteredTips = selectedCategory === 'semua' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory.toLowerCase());

  return (
    <div className="bg-white rounded-[40px] shadow-xl overflow-hidden min-h-[750px] flex flex-col border-[3px] border-gray-800">
      <div className="flex-1 p-6 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>Tips Harian</h1>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="space-y-4">
          {filteredTips.map((tip, index) => (
            <div
              key={index}
              className="bg-[#FDEEF1] rounded-3xl p-5 border-2 border-[#E8B4BC] hover:shadow-lg transition"
            >
              {tip.hasImage && (
                <div className="mb-4 rounded-2xl overflow-hidden">
                  <img 
                    src={nutritionImg}
                    alt="Nutrition guide"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tip.emoji}</div>
                <div className="flex-1">
                  <h3 className="mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.tip}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-white px-3 py-1 rounded-full text-[#d4948e]">
                      {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
