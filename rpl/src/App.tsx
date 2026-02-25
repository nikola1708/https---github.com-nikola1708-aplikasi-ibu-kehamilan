import { useState, useEffect } from 'react';
import { Splash } from './components/Splash';
import { Onboarding } from './components/Onboarding';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { PregnancyCalculator } from './components/PregnancyCalculator';
import { Home } from './components/Home';
import { Appointments } from './components/Appointments';
import { Support } from './components/Support';
import { Education } from './components/Education';
import { Profile } from './components/Profile';
import { LogSymptoms } from './components/LogSymptoms';
import { PregnancyToday } from './components/PregnancyToday';
import { SymptomsTalk } from './components/SymptomsTalk';
import { DailyTips } from './components/DailyTips';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('onboarding');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showCalculator, setShowCalculator] = useState<boolean>(false);

  // Removed splash screen auto-navigation

  const handleLogin = () => {
    setIsLoggedIn(true);
    
    // Check if user has already set HPHT
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      if (user.lastPeriodDate) {
        // User already has HPHT, go directly to home
        setCurrentScreen('home');
        setShowCalculator(false);
      } else {
        // Show calculator for new user
        setShowCalculator(true);
        setCurrentScreen('calculator');
      }
    } else {
      // Show calculator
      setShowCalculator(true);
      setCurrentScreen('calculator');
    }
  };

  const handleCalculatorComplete = () => {
    setShowCalculator(false);
    setCurrentScreen('home');
  };

  const handleCalculatorSkip = () => {
    setShowCalculator(false);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCalculator(false);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    // Authentication screens
    if (!isLoggedIn) {
      switch (currentScreen) {
        case 'onboarding':
          return <Onboarding onNavigate={setCurrentScreen} />;
        case 'login':
          return <Login onNavigate={setCurrentScreen} onLogin={handleLogin} />;
        case 'register':
          return <Register onNavigate={setCurrentScreen} />;
        default:
          return <Onboarding onNavigate={setCurrentScreen} />;
      }
    }

    // Calculator screen (after login, before home)
    if (showCalculator && currentScreen === 'calculator') {
      return <PregnancyCalculator onComplete={handleCalculatorComplete} onSkip={handleCalculatorSkip} />;
    }

    // Main app screens (after login)
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} onLogout={handleLogout} />;
      case 'appointments':
        return <Appointments onNavigate={setCurrentScreen} />;
      case 'support':
        return <Support onNavigate={setCurrentScreen} />;
      case 'education':
        return <Education onNavigate={setCurrentScreen} />;
      case 'profile':
        return <Profile onNavigate={setCurrentScreen} onLogout={handleLogout} />;
      case 'log-symptoms':
        return <LogSymptoms onNavigate={setCurrentScreen} />;
      case 'pregnancy-today':
        return <PregnancyToday onNavigate={setCurrentScreen} />;
      case 'symptoms-talk':
        return <SymptomsTalk onNavigate={setCurrentScreen} />;
      case 'daily-tips':
        return <DailyTips onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} onLogout={handleLogout} />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}