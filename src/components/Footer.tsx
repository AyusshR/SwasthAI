import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';
import { Logo } from '@/components/Logo';

export function Footer() {
  const { language, navigate } = useApp();

  const quickLinks = [
    { route: '/health-assistant', label: t('nav.healthAssistant', language) },
    { route: '/my-health', label: t('nav.myHealth', language) },
    { route: '/health-library', label: t('nav.healthLibrary', language) },
    { route: '/about', label: t('nav.about', language) },
  ];

  const legalLinks = [
    { route: '/privacy', label: t('nav.privacy', language) },
    { route: '/terms', label: t('nav.terms', language) },
    { route: '/disclaimer', label: t('nav.disclaimer', language) },
    { route: '/contact', label: t('nav.contact', language) },
  ];

  return (
    <footer className="bg-charcoal text-gray-300 mt-auto">
      <div className="container-app px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.tagline', language)}
            </p>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              {t('disclaimer.educational', language)}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('footer.quickLinks', language)}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('footer.legal', language)}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => navigate(link.route)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('footer.resources', language)}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-teal-400" /> help@swasthai.app
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-teal-400" /> 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-primary-400" /> {t('footer.help', language)}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{t('footer.copyright', language)}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> Made with care for healthier communities
          </p>
        </div>
      </div>
    </footer>
  );
}
