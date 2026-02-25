import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import logoImg from 'figma:asset/5439afe30327a4d0a71997d25ded3b1b670cca17.png';

interface LoginProps {
  onNavigate: (screen: string) => void;
  onLogin: () => void;
}

export function Login({ onNavigate, onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for test account
    if (email === 'tere@gmail.com' && password === '12345') {
      // Load test account data
      const testUser = {
        firstName: 'Tere',
        lastName: 'Liye',
        email: 'tere@gmail.com',
        phone: '081234567890',
        password: '12345',
        lastPeriodDate: '', // HPHT akan diinput melalui calculator
        cycleLength: '28'
      };
      localStorage.setItem('currentUser', JSON.stringify(testUser));
      onLogin();
      return;
    }
    
    // Check for registered user
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser) {
      const user = JSON.parse(registeredUser);
      if (user.email === email && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        onLogin();
        return;
      }
    }
    
    // If credentials don't match
    alert('Email atau password salah!');
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
          <h1 className="text-2xl mb-2 text-gray-800">Selamat Datang Kembali!</h1>
          <p className="text-gray-600 text-sm">Masuk ke akun Anda</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@contoh.com"
                className="w-full bg-white border-2 border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password Anda"
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

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-sm text-[#D5536C] hover:underline">
              Lupa Password?
            </button>
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#D5536C] to-[#E8758A] text-white py-4 rounded-full hover:opacity-90 transition shadow-lg"
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Belum punya akun?{' '}
            <button 
              onClick={() => onNavigate('register')}
              className="text-[#D5536C] hover:underline"
            >
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}