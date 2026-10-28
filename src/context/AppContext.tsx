import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { Language, TextSize } from '@/types';

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  highContrast: boolean;
  setHighContrast: (on: boolean) => void;
  route: string;
  navigate: (route: string) => void;
  goBack: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('swasthai-lang');
    return saved === 'hi' ? 'hi' : 'en';
  });
  const [textSize, setTextSizeState] = useState<TextSize>(() => {
    const saved = localStorage.getItem('swasthai-text-size');
    return (saved as TextSize) || 'normal';
  });
  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    return localStorage.getItem('swasthai-high-contrast') === 'true';
  });
  const [route, setRoute] = useState<string>(() => {
    const hash = window.location.hash.slice(1);
    return hash || '/';
  });
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.slice(1);
      setRoute(hash || '/');
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-large', 'text-xlarge');
    if (textSize === 'large') root.classList.add('text-large');
    if (textSize === 'xlarge') root.classList.add('text-xlarge');
    localStorage.setItem('swasthai-text-size', textSize);
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    localStorage.setItem('swasthai-high-contrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('swasthai-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => setLanguageState(lang), []);
  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'hi' : 'en'));
  }, []);
  const setTextSize = useCallback((size: TextSize) => setTextSizeState(size), []);
  const setHighContrast = useCallback((on: boolean) => setHighContrastState(on), []);

  const navigate = useCallback((newRoute: string) => {
    setHistory((prev) => [...prev, route]);
    setRoute(newRoute);
    window.location.hash = newRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const goBack = useCallback(() => {
    setHistory((prev) => {
      if (prev.length === 0) {
        setRoute('/');
        window.location.hash = '/';
        return prev;
      }
      const newHistory = [...prev];
      const prevRoute = newHistory.pop()!;
      setRoute(prevRoute);
      window.location.hash = prevRoute;
      return newHistory;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        textSize,
        setTextSize,
        highContrast,
        setHighContrast,
        route,
        navigate,
        goBack,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
