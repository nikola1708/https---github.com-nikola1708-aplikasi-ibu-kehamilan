import { ArrowLeft, ChevronRight, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface SymptomsTalkProps {
  onNavigate: (screen: string) => void;
}

export function SymptomsTalk({ onNavigate }: SymptomsTalkProps) {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  const topics = [
    {
      emoji: '🤰',
      illustration: '🤢',
      title: 'Mual di Pagi Hari',
      description: 'Tips dan solusi untuk mengatasi mual selama kehamilan trimester pertama',
      iconBg: 'bg-gradient-to-br from-[#FFB366] to-[#FF9A4D]', // Soft Orange
      iconColor: 'text-white',
      why: 'Mual di pagi hari (morning sickness) terjadi karena perubahan hormon yang cepat, terutama peningkatan hormon hCG (human chorionic gonadotropin) dan estrogen. Kondisi ini biasanya terjadi pada trimester pertama dan dapat terjadi kapan saja, tidak hanya di pagi hari.',
      explanation: 'Morning sickness adalah kondisi normal yang dialami sekitar 70-80% ibu hamil. Meskipun tidak menyenangkan, ini sebenarnya tanda baik bahwa kehamilan Anda berkembang dengan baik. Gejala biasanya memuncak sekitar minggu ke-9 dan mulai mereda di minggu ke-14.',
      tips: [
        'Makan dalam porsi kecil tapi sering (setiap 2-3 jam)',
        'Hindari perut kosong - siapkan biskuit crackers di samping tempat tidur',
        'Minum air putih yang cukup, sedikit-sedikit tapi sering',
        'Hindari makanan berlemak, pedas, atau berbau menyengat',
        'Konsumsi jahe dalam bentuk teh atau permen',
        'Istirahat yang cukup karena kelelahan bisa memperburuk mual'
      ]
    },
    {
      emoji: '😴',
      illustration: '😴',
      title: 'Kelelahan Kehamilan',
      description: 'Memahami penyebab rasa lelah dan cara mengatasinya dengan efektif',
      iconBg: 'bg-gradient-to-br from-[#7FB3D5] to-[#5A9BD4]', // Soft Blue
      iconColor: 'text-white',
      why: 'Kelelahan ekstrem di awal kehamilan disebabkan oleh peningkatan drastis hormon progesteron yang membuat tubuh lebih rileks dan mengantuk. Tubuh juga bekerja keras membentuk plasenta dan meningkatkan volume darah hingga 50%, yang membutuhkan banyak energi.',
      explanation: 'Kelelahan adalah salah satu gejala paling umum di trimester pertama dan ketiga. Di trimester pertama, tubuh sedang beradaptasi dengan perubahan besar. Di trimester ketiga, berat badan yang bertambah dan kesulitan tidur membuat Anda lebih mudah lelah. Ini adalah cara tubuh memberi tahu Anda untuk lebih banyak istirahat.',
      tips: [
        'Tidur lebih awal dan bangun lebih siang jika memungkinkan',
        'Tidur siang 15-30 menit saat merasa lelah',
        'Minta bantuan keluarga untuk pekerjaan rumah',
        'Konsumsi makanan bergizi tinggi protein dan zat besi',
        'Olahraga ringan seperti jalan santai untuk meningkatkan energi',
        'Hindari kafein berlebihan'
      ]
    },
    {
      emoji: '🦶',
      illustration: '🦶',
      title: 'Kaki Bengkak',
      description: 'Penyebab pembengkakan dan cara meredakan dengan aman dan nyaman',
      iconBg: 'bg-gradient-to-br from-[#FF9FB3] to-[#FF7A9A]', // Soft Pink
      iconColor: 'text-white',
      why: 'Pembengkakan (edema) pada kaki dan pergelangan kaki terjadi karena tubuh menahan lebih banyak cairan selama kehamilan. Rahim yang membesar juga menekan pembuluh darah vena yang membawa darah kembali dari kaki ke jantung, menyebabkan cairan menumpuk di jaringan kaki.',
      explanation: 'Kaki bengkak biasanya mulai terlihat di trimester kedua dan ketiga, terutama di akhir hari atau setelah berdiri lama. Meskipun umumnya normal, pembengkakan mendadak yang disertai sakit kepala dan pandangan kabur bisa jadi tanda preeklamsia dan harus segera dikonsultasikan ke dokter.',
      tips: [
        'Hindari berdiri atau duduk terlalu lama - ubah posisi secara teratur',
        'Angkat kaki saat duduk atau berbaring',
        'Tidur miring ke kiri untuk meningkatkan sirkulasi',
        'Gunakan sepatu yang nyaman, hindari sepatu hak tinggi',
        'Berendam air hangat (tidak panas) selama 15-20 menit',
        'Minum air putih yang cukup (8-10 gelas per hari)',
        'Kurangi konsumsi garam berlebihan'
      ]
    },
    {
      emoji: '😣',
      illustration: '💆‍♀️',
      title: 'Sakit Punggung',
      description: 'Latihan aman dan posisi untuk meredakan nyeri punggung saat hamil',
      iconBg: 'bg-gradient-to-br from-[#B39DDB] to-[#9575CD]', // Soft Purple
      iconColor: 'text-white',
      why: 'Sakit punggung terjadi karena perubahan pusat gravitasi tubuh akibat perut yang membesar, pelonggaran ligamen oleh hormon relaxin untuk mempersiapkan persalinan, dan peningkatan berat badan yang memberi tekanan ekstra pada tulang belakang.',
      explanation: 'Sekitar 50-70% ibu hamil mengalami sakit punggung, terutama di punggung bawah. Kondisi ini sering muncul di trimester kedua dan ketiga saat berat badan bertambah signifikan. Postur tubuh yang buruk dan stres juga dapat memperburuk nyeri punggung.',
      tips: [
        'Jaga postur tubuh - berdiri tegak dengan bahu ke belakang',
        'Gunakan bantal penyangga saat tidur (di antara kaki dan di bawah perut)',
        'Hindari mengangkat barang berat',
        'Gunakan alas kaki yang nyaman dengan support baik',
        'Lakukan prenatal yoga atau peregangan ringan',
        'Kompres hangat atau dingin pada area yang sakit',
        'Pijat prenatal oleh terapis bersertifikat',
        'Pertimbangkan sabuk penyangga kehamilan'
      ]
    },
    {
      emoji: '💭',
      illustration: '😌',
      title: 'Perubahan Mood',
      description: 'Mengelola emosi dan menjaga kesehatan mental selama kehamilan',
      iconBg: 'bg-gradient-to-br from-[#81C784] to-[#66BB6A]', // Soft Green
      iconColor: 'text-white',
      why: 'Perubahan mood drastis disebabkan oleh fluktuasi hormon kehamilan (estrogen dan progesteron) yang mempengaruhi neurotransmitter di otak. Kelelahan fisik, kecemasan tentang persalinan, dan perubahan gaya hidup juga berkontribusi pada emotional rollercoaster ini.',
      explanation: 'Perubahan suasana hati adalah hal yang sangat normal selama kehamilan. Anda mungkin merasa sangat bahagia di satu momen, lalu tiba-tiba sedih atau mudah tersinggung. Ini paling intens di trimester pertama saat hormon melonjak, dan bisa muncul lagi di trimester ketiga karena kecemasan menjelang persalinan.',
      tips: [
        'Bicarakan perasaan Anda dengan pasangan, keluarga, atau teman',
        'Bergabung dengan grup ibu hamil untuk berbagi pengalaman',
        'Tidur yang cukup (7-9 jam per malam)',
        'Olahraga ringan dapat meningkatkan endorfin (hormon kebahagiaan)',
        'Praktikkan teknik relaksasi seperti meditasi atau pernapasan dalam',
        'Hindari stres berlebihan - delegasikan tugas jika perlu',
        'Konsumsi makanan sehat yang mendukung kesehatan mental',
        'Jika merasa depresi berkepanjangan, konsultasi dengan profesional'
      ]
    },
    {
      emoji: '🍽️',
      illustration: '🍓',
      title: 'Ngidam Makanan',
      description: 'Memahami ngidam dan penolakan makanan saat hamil dengan bijak',
      iconBg: 'bg-gradient-to-br from-[#FF8A80] to-[#FF5252]', // Soft Red
      iconColor: 'text-white',
      why: 'Ngidam dan penolakan makanan disebabkan oleh perubahan hormon yang mempengaruhi indra penciuman dan perasa. Ada juga teori bahwa ngidam adalah cara tubuh memberi sinyal tentang nutrisi yang dibutuhkan, meskipun belum terbukti sepenuhnya secara ilmiah.',
      explanation: 'Sekitar 50-90% ibu hamil mengalami ngidam makanan tertentu, sementara banyak juga yang tiba-tiba tidak suka makanan yang sebelumnya disukai. Ngidam bisa berupa makanan manis, asin, asam, atau bahkan kombinasi yang tidak biasa. Ini paling sering terjadi di trimester pertama dan biasanya mereda di trimester kedua.',
      tips: [
        'Turuti ngidam dalam porsi wajar dan sehat',
        'Jika ngidam makanan tidak sehat, cari alternatif lebih bergizi',
        'Makan makanan bergizi seimbang untuk mencegah ngidam berlebihan',
        'Jangan melewatkan waktu makan utama',
        'Siapkan camilan sehat untuk ngidam tengah malam',
        'Jika ada ngidam benda bukan makanan (pica), segera konsultasi dokter',
        'Minum air putih cukup - kadang ngidam adalah tanda dehidrasi',
        'Jangan merasa bersalah tentang ngidam - ini normal dan sementara'
      ]
    }
  ];

  if (selectedTopic !== null) {
    const topic = topics[selectedTopic];
    return (
      <div className="bg-white rounded-[40px] shadow-xl overflow-hidden min-h-[750px] flex flex-col border-[3px] border-gray-800">
        <div className="flex-1 p-6 pb-24 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setSelectedTopic(null)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1>{topic.title}</h1>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="text-7xl">{topic.emoji}</div>
          </div>

          {/* Why Section */}
          <div className="bg-[#FDEEF1] rounded-3xl p-5 mb-6">
            <h2 className="mb-3 text-[#D5536C]">Mengapa Ini Terjadi?</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{topic.why}</p>
          </div>

          {/* Explanation Section */}
          <div className="bg-gray-50 rounded-3xl p-5 mb-6">
            <h2 className="mb-3">Penjelasan Lengkap</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{topic.explanation}</p>
          </div>

          {/* Tips Section */}
          <div className="bg-white border-2 border-[#E8B4BC] rounded-3xl p-5">
            <h2 className="mb-4">Tips Mengatasi</h2>
            <ul className="space-y-3">
              {topic.tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-pink-500">✓</span>
                  <p className="text-sm text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('home')}
              className="p-3 bg-white hover:bg-gray-50 rounded-full transition shadow-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}>
              Artikel Gejala
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-16">Panduan lengkap untuk kesehatan kehamilan Anda</p>
        </motion.div>

        {/* Topics List - Pure White Cards with High Elevation */}
        <div className="space-y-5">
          {topics.map((topic, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              onClick={() => setSelectedTopic(index)}
              className="w-full bg-white rounded-3xl p-5 transition-all relative overflow-hidden text-left group"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Card Content */}
              <div className="flex items-center gap-4 relative z-10">
                
                {/* High-Quality Icon in Colorful Circle Container */}
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${topic.iconBg} rounded-full flex items-center justify-center shadow-md`}
                  >
                    <span className="text-3xl">{topic.illustration}</span>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 pr-3">
                  <h3 
                    className="text-base font-bold text-gray-900 mb-1.5 line-clamp-1" 
                    style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif' }}
                  >
                    {topic.title}
                  </h3>
                  <p 
                    className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {topic.description}
                  </p>
                  
                  {/* Read Article Link */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#FF9A8D] group-hover:text-[#FF8577] transition-colors">
                    <span>Baca Artikel</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </div>

                {/* Distinct Arrow Icon - Vertical Center */}
                <div className="flex-shrink-0 self-center">
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    <ArrowRight className="w-6 h-6 text-[#FF9A8D]" strokeWidth={2.5} />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect - Subtle Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent pointer-events-none rounded-3xl"
              />
            </motion.button>
          ))}
        </div>

        {/* Spacer for Bottom Navigation */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}