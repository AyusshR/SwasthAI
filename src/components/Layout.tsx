import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-warm-50">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function ProtectedContent({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const { user } = useAuth();
  if (!user) return <>{fallback}</>;
  return <>{children}</>;
}
