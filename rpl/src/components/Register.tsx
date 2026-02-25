import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Phone } from 'lucide-react';
import logoImg from 'figma:asset/5439afe30327a4d0a71997d25ded3b1b670cca17.png';

interface RegisterProps {
  onNavigate: (screen: string) => void;
}

export function Register({ onNavigate }: RegisterProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.firstName && formData.lastName && formData.email && formData.phone && formData.password) {
      // Save user data to localStorage
      localStorage.setItem('registeredUser', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        lastPeriodDate: '', // HPHT akan diinput melalui calculator
        cycleLength: '28'
      }));
      
      // Registration successful, go to login
      onNavigate('login');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#E8B4BC] min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#FDEEF1] rounded-[40px] shadow-2xl overflow-hidden w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24">
            <img 
              src={logoImg}
              alt="Mommycare"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl mb-2 text-gray-800">Buat Akun Baru</h1>
          <p className="text-gray-600 text-sm">Daftar untuk memulai perjalanan Anda</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Nama Awal</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                placeholder="Nama awal"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Nama Akhir</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                placeholder="Nama akhir"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="email@contoh.com"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">No. Telepon</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="08123456789"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Buat password"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white py-4 rounded-full hover:opacity-90 transition shadow-lg"
          >
            Daftar
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{' '}
            <button 
              onClick={() => onNavigate('login')}
              className="text-[#D5536C] hover:underline"
            >
              Masuk sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}