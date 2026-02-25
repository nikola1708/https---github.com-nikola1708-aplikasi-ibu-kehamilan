import { ArrowLeft, Bookmark, Share2, Clock, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticleDetailProps {
  onBack: () => void;
  article?: {
    id: string;
    title: string;
    category: string;
    categoryColor: string;
    author: string;
    readTime: string;
    date: string;
    heroImage: string;
    content: Array<{
      type: 'paragraph' | 'heading' | 'list';
      text?: string;
      items?: string[];
    }>;
  };
}

export function ArticleDetail({ onBack, article }: ArticleDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Default article if none provided
  const defaultArticle = {
    id: '1',
    title: 'Panduan Lengkap Nutrisi Trimester 2',
    category: 'Nutrisi',
    categoryColor: 'bg-gradient-to-r from-[#81C784] to-[#66BB6A]',
    author: 'dr. Sarah Wijaya, Sp.OG',
    readTime: '5 min baca',
    date: '12 Jan 2024',
    heroImage: 'https://images.unsplash.com/photo-1734607404585-bd97529f1f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Trimester kedua sering disebut sebagai "masa keemasan" kehamilan. Di periode ini, mual berkurang dan energi Anda meningkat. Nutrisi yang tepat sangat penting untuk mendukung pertumbuhan bayi yang pesat.'
      },
      {
        type: 'heading',
        text: 'Mengapa Nutrisi Trimester 2 Sangat Penting?'
      },
      {
        type: 'paragraph',
        text: 'Pada trimester kedua, bayi Anda berkembang pesat. Organ-organ vital seperti jantung, otak, dan sistem pencernaan terus matang. Tulang dan otot juga mulai menguat. Oleh karena itu, kebutuhan kalori dan nutrisi Anda meningkat.'
      },
      {
        type: 'paragraph',
        text: 'Anda memerlukan tambahan 300-350 kalori per hari dibandingkan sebelum hamil. Namun, yang lebih penting adalah kualitas makanan, bukan hanya kuantitasnya.'
      },
      {
        type: 'heading',
        text: 'Nutrisi Utama yang Dibutuhkan'
      },
      {
        type: 'list',
        items: [
          'Protein (75-100g/hari): Untuk pertumbuhan jaringan bayi dan plasenta. Sumber: daging tanpa lemak, ikan, telur, kacang-kacangan, tahu, tempe.',
          'Kalsium (1000mg/hari): Untuk pembentukan tulang dan gigi bayi. Sumber: susu, yogurt, keju, sayuran hijau, ikan teri.',
          'Zat Besi (27mg/hari): Mencegah anemia dan mendukung produksi darah. Sumber: daging merah, bayam, kacang merah, hati ayam.',
          'Asam Folat (600mcg/hari): Mencegah cacat tabung saraf. Sumber: sayuran hijau gelap, jeruk, kacang-kacangan, sereal yang diperkaya.',
          'Omega-3 DHA: Untuk perkembangan otak dan mata bayi. Sumber: ikan salmon, sarden, telur yang diperkaya DHA, kacang kenari.'
        ]
      },
      {
        type: 'heading',
        text: 'Tips Makan Sehat Trimester 2'
      },
      {
        type: 'paragraph',
        text: 'Makan dalam porsi kecil namun sering (5-6 kali sehari) untuk menjaga energi stabil dan menghindari heartburn. Kombinasikan protein dengan karbohidrat kompleks untuk kenyang lebih lama.'
      },
      {
        type: 'paragraph',
        text: 'Jangan lupakan hidrasi! Minum air putih minimal 8-10 gelas per hari. Air membantu pembentukan cairan ketuban dan melancarkan pencernaan.'
      },
      {
        type: 'heading',
        text: 'Makanan yang Perlu Dihindari'
      },
      {
        type: 'list',
        items: [
          'Ikan tinggi merkuri seperti tuna sirip biru, hiu, king mackerel',
          'Daging dan telur mentah atau setengah matang',
          'Susu dan keju yang tidak dipasteurisasi',
          'Kafein berlebihan (batasi maksimal 200mg/hari)',
          'Makanan olahan tinggi gula dan garam'
        ]
      },
      {
        type: 'heading',
        text: 'Contoh Menu Sehari'
      },
      {
        type: 'paragraph',
        text: 'Sarapan: Oatmeal dengan buah berry, kacang almond, dan segelas susu. Snack pagi: Yogurt Greek dengan madu dan granola.'
      },
      {
        type: 'paragraph',
        text: 'Makan siang: Nasi merah, ayam panggang, tumis brokoli wortel, dan tempe bacem. Snack sore: Smoothie pisang alpukat dengan susu almond.'
      },
      {
        type: 'paragraph',
        text: 'Makan malam: Salmon panggang dengan kentang kukus dan salad sayuran segar. Sebelum tidur: Segelas susu hangat atau biskuit gandum.'
      },
      {
        type: 'heading',
        text: 'Konsultasi dengan Dokter'
      },
      {
        type: 'paragraph',
        text: 'Setiap kehamilan unik. Konsultasikan dengan dokter kandungan atau ahli gizi untuk mendapatkan rekomendasi nutrisi yang sesuai dengan kondisi kesehatan Anda. Jika Anda memiliki kondisi khusus seperti diabetes gestasional atau anemia, Anda mungkin memerlukan penyesuaian diet.'
      },
      {
        type: 'paragraph',
        text: 'Ingat, makan dengan baik bukan hanya tentang angka di timbangan, tetapi tentang memberi nutrisi terbaik untuk Anda dan bayi. Nikmati perjalanan kehamilan Anda dengan penuh kesadaran dan kegembiraan!'
      }
    ]
  };

  const displayArticle = article || defaultArticle;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: displayArticle.title,
        text: `Baca artikel: ${displayArticle.title}`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Overlay Navigation */}
      <div className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={displayArticle.heroImage}
            alt={displayArticle.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Fade at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        </div>

        {/* Transparent Navigation Bar - Overlaying Image */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="flex items-center justify-between p-6">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all group"
            >
              <ArrowLeft className="w-6 h-6 text-gray-800 group-hover:text-[#FF9A8D] transition" />
            </button>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all group"
              >
                <Bookmark
                  className={`w-5 h-5 transition ${
                    isBookmarked ? 'text-[#FF9A8D] fill-current' : 'text-gray-800 group-hover:text-[#FF9A8D]'
                  }`}
                />
              </button>
              <button
                onClick={handleShare}
                className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all group"
              >
                <Share2 className="w-6 h-6 text-gray-800 group-hover:text-[#FF9A8D] transition" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="px-6 pb-12 max-w-2xl mx-auto -mt-8 relative z-20">
        {/* Category Tag */}
        <div className="mb-4">
          <span className={`inline-block ${displayArticle.categoryColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-md`}>
            {displayArticle.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {displayArticle.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span>Ditulis oleh <strong className="text-gray-700">{displayArticle.author}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{displayArticle.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{displayArticle.date}</span>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          {displayArticle.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p
                  key={index}
                  className="text-gray-700 text-base leading-relaxed mb-6"
                  style={{ lineHeight: '1.8' }}
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="text-xl font-bold text-gray-900 mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'list' && block.items) {
              return (
                <ul
                  key={index}
                  className="space-y-3 mb-6 ml-0"
                >
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex gap-3 text-gray-700 text-base leading-relaxed"
                      style={{ lineHeight: '1.8' }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#81C784] to-[#66BB6A] rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </article>

        {/* Call to Action Card */}
        <div className="mt-12 bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] rounded-3xl p-6 border-2 border-[#FFB74D]/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Butuh Konsultasi Personal?</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Setiap kehamilan berbeda. Konsultasikan kebutuhan nutrisi Anda dengan dokter spesialis kami.
              </p>
              <button className="bg-gradient-to-r from-[#FF9A8D] to-[#FFB5A7] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles Hint */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Artikel Terkait</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Olahraga Aman untuk Trimester 2', category: 'Olahraga', color: 'from-[#FFB5A7] to-[#FF9A8D]' },
              { title: 'Mengatasi Nyeri Punggung Saat Hamil', category: 'Kesehatan', color: 'from-[#81C784] to-[#66BB6A]' },
            ].map((related, idx) => (
              <button
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-2xl p-4 hover:border-[#FF9A8D] hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <span className={`inline-block bg-gradient-to-r ${related.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                      {related.category}
                    </span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#FF9A8D] transition">
                      {related.title}
                    </h4>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#FF9A8D] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
