import { Home as HomeIcon, Calendar, Headphones, BookOpen, User, Search, ChevronRight, Clock, Heart, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArticleDetail } from './ArticleDetail';

interface EducationProps {
  onNavigate: (screen: string) => void;
}

export function Education({ onNavigate }: EducationProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showArticle, setShowArticle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Main feature cards
  const mainCards = [
    {
      id: 1,
      title: 'Olahraga & Gerak',
      subtitle: 'Yoga dan senam aman tiap trimester',
      image: 'https://images.unsplash.com/photo-1522844123782-9547a63eb28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bgGradient: 'from-[#E8F5E9] to-[#C8E6C9]',
      iconBg: 'bg-[#81C784]',
      category: 'Olahraga'
    },
    {
      id: 2,
      title: 'Nutrisi & Makanan Sehat',
      subtitle: 'Resep dan panduan gizi seimbang',
      image: 'https://images.unsplash.com/photo-1759502832625-a6ce1d780dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bgGradient: 'from-[#FFF3E0] to-[#FFE0B2]',
      iconBg: 'bg-[#FFB74D]',
      category: 'Nutrisi'
    },
    {
      id: 3,
      title: 'Vitamin & Suplemen',
      subtitle: 'Rekomendasi penting dari dokter',
      image: 'https://images.unsplash.com/photo-1556739664-787e863d09c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bgGradient: 'from-[#F3E5F5] to-[#E1BEE7]',
      iconBg: 'bg-[#BA68C8]',
      category: 'Suplemen'
    }
  ];

  // Latest articles
  const latestArticles = [
    {
      id: 1,
      title: 'Tips Mengatasi Morning Sickness',
      category: 'Kesehatan',
      readTime: '5 menit',
      image: 'https://images.unsplash.com/photo-1751984034233-eb9d2c0937c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      views: '2.4k'
    },
    {
      id: 2,
      title: 'Persiapan Persalinan Normal',
      category: 'Persalinan',
      readTime: '8 menit',
      image: 'https://images.unsplash.com/photo-1551316761-d2ac3e189471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      views: '3.1k'
    },
    {
      id: 3,
      title: 'Perkembangan Bayi Trimester 2',
      category: 'Perkembangan',
      readTime: '6 menit',
      image: 'https://images.unsplash.com/photo-1692851142468-cce86ddba448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      views: '1.8k'
    },
    {
      id: 4,
      title: 'Menjaga Kesehatan Mental Ibu Hamil',
      category: 'Mental Health',
      readTime: '7 menit',
      image: 'https://images.unsplash.com/photo-1751984034233-eb9d2c0937c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      views: '2.9k'
    }
  ];

  return (
    <div className="bg-[#FFF9F5] min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 pb-24 overflow-y-auto max-w-md mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Panduan Ibu Sehat</h1>
          <p className="text-sm text-gray-600">Pelajari nutrisi dan aktivitas terbaik untukmu.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari panduan, artikel, tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white rounded-[1.5rem] pl-12 pr-4 py-4 text-sm shadow-md border-2 border-transparent focus:border-[#FFB5A7] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Main Feature Cards - Horizontal Scroll */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {mainCards.map((card, index) => (
              <button
                key={card.id}
                className={`flex-shrink-0 w-[280px] bg-gradient-to-br ${card.bgGradient} rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 ${
                  index === 1 ? 'mt-4' : index === 2 ? 'mt-8' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`${card.iconBg} text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md`}>
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{card.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Pelajari Lebih</span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <ChevronRight className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white rounded-2xl p-4 text-center shadow-md">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-xl flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-800">120+</p>
            <p className="text-xs text-gray-600">Artikel</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 text-center shadow-md">
            <div className="w-10 h-10 bg-gradient-to-br from-[#81C784] to-[#A5D6A7] rounded-xl flex items-center justify-center mx-auto mb-2">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-800">50+</p>
            <p className="text-xs text-gray-600">Tips Sehat</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 text-center shadow-md">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFB74D] to-[#FFD54F] rounded-xl flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-800">4.8</p>
            <p className="text-xs text-gray-600">Rating</p>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#FF9A8D]" />
              <h2 className="text-xl font-bold text-gray-800">Artikel Terbaru</h2>
            </div>
            <button className="text-sm text-[#FF9A8D] font-medium hover:underline">
              Lihat Semua
            </button>
          </div>

          {/* Article Cards */}
          <div className="space-y-4">
            {latestArticles.map((article) => (
              <button
                key={article.id}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex gap-4 p-3 group"
                onClick={() => {
                  setSelectedArticle(article);
                  setShowArticle(true);
                }}
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-0.5 bg-[#FFF3E0] text-[#FFB74D] rounded-full font-medium">
                        {article.category}
                      </span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{article.views} views</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF9A8D] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Topik Popular</h3>
          <div className="flex flex-wrap gap-2">
            {['Trimester 1', 'Nutrisi', 'Olahraga', 'Mental Health', 'Persalinan', 'Baby Care', 'Tips Harian'].map((topic, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white text-gray-700 text-sm rounded-full shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-[#FF9A8D] hover:to-[#FFB5A7] hover:text-white transition-all font-medium"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-[2rem] p-6 shadow-xl mb-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Butuh Konsultasi?</h3>
            <p className="text-sm text-white/90 mb-4">
              Terhubung dengan ahli kesehatan untuk panduan personal
            </p>
            <button 
              onClick={() => onNavigate('support')}
              className="bg-white text-[#FF9A8D] px-6 py-3 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Hubungi Sekarang
            </button>
          </div>
        </div>
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
                className="flex flex-col items-center gap-1 text-[#FF9A8D] relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A8D] to-[#FFB5A7] rounded-2xl flex items-center justify-center shadow-md">
                  <BookOpen className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <span className="text-[9px] font-medium">Edukasi</span>
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

      {/* Article Detail Modal */}
      {showArticle && (
        <div className="fixed inset-0 z-50 bg-white">
          <ArticleDetail
            onBack={() => setShowArticle(false)}
          />
        </div>
      )}
    </div>
  );
}