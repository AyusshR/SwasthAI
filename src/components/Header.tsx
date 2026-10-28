import { useState, useRef, useEffect } from 'react';
import { Languages, Type, Accessibility, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { t } from '@/lib/translations';
import type { Language, TextSize } from '@/types';
import { Logo } from '@/components/Logo';

export function Header() {
  const { language, setLanguage, toggleLanguage, textSize, setTextSize, highContrast, setHighContrast, route, navigate } = useApp();
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accessMenuOpen, setAccessMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const accessRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (accessRef.current && !accessRef.current.contains(e.target as Node)) setAccessMenuOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navItems = [
    { route: '/', label: t('nav.home', language) },
    { route: '/health-assistant', label: t('nav.healthAssistant', language) },
    { route: '/my-health', label: t('nav.myHealth', language) },
    { route: '/health-library', label: t('nav.healthLibrary', language) },
  ];

  const isActive = (r: string) => route === r;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container-app px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] inline-flex items-center ${
                  isActive(item.route)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-charcoal hover:text-primary-500 hover:bg-gray-50'
                }`}
                aria-current={isActive(item.route) ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-charcoal hover:bg-gray-100 transition-colors min-h-[44px]"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 text-teal-500" />
              <span className="text-sm font-semibold">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            <div className="relative" ref={accessRef}>
              <button
                onClick={() => setAccessMenuOpen(!accessMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-charcoal hover:bg-gray-100 transition-colors min-h-[44px]"
                aria-label={t('access.settings', language)}
                aria-expanded={accessMenuOpen}
              >
                <Accessibility className="w-5 h-5 text-primary-500" />
                <span className="hidden sm:inline text-sm">{t('access.settings', language)}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {accessMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-4 animate-fade-in">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-charcoal">
                      <Type className="w-4 h-4 text-primary-500" />
                      {t('access.textSize', language)}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {(['normal', 'large', 'xlarge'] as TextSize[]).map((size) => (
                        <button
                          key={size}
                          onClick={() => setTextSize(size)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                            textSize === size
                              ? 'bg-primary-500 text-white'
                              : 'bg-gray-50 text-charcoal hover:bg-gray-100'
                          }`}
                        >
                          {t(`access.${size === 'xlarge' ? 'xlarge' : size}`, language)}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm font-medium text-charcoal">{t('access.highContrast', language)}</span>
                      <button
                        onClick={() => setHighContrast(!highContrast)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${highContrast ? 'bg-primary-500' : 'bg-gray-300'}`}
                        role="switch"
                        aria-checked={highContrast}
                      >
                        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${highContrast ? 'translate-x-6' : ''}`} />
                      </button>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {user ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-charcoal hover:bg-gray-100 transition-colors min-h-[44px]"
                  aria-label="Account"
                >
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">
                    {user.email?.[0]?.toUpperCase() || 'U'}
                  </span>
                  <ChevronDown className="w-4 h-4 hidden sm:block" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 animate-fade-in">
                    <div className="px-3 py-2 text-sm text-gray-500 border-b border-gray-100 mb-1 truncate">
                      {user.email}
                    </div>
                    <button
                      onClick={() => { navigate('/my-health'); setUserMenuOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 min-h-[44px] flex items-center gap-2"
                    >
                      <User className="w-4 h-4" /> {t('nav.myHealth', language)}
                    </button>
                    <button
                      onClick={() => { signOut(); setUserMenuOpen(false); navigate('/'); }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 min-h-[44px] flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> {t('nav.logout', language)}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="hidden sm:inline-flex btn-primary text-sm"
              >
                {t('nav.login', language)}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 min-h-[44px] min-w-[44px]"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-3 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => { navigate(item.route); setMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.route) ? 'text-primary-600 bg-primary-50' : 'text-charcoal hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            {!user && (
              <button
                onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 rounded-lg font-medium text-primary-600 hover:bg-primary-50"
              >
                {t('nav.login', language)} / {t('nav.signup', language)}
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
