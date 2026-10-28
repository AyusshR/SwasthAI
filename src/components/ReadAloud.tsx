import { useState, useRef, useEffect } from 'react';
import { Volume2, Square } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

interface ReadAloudProps {
  text: string;
  label?: string;
  className?: string;
}

export function ReadAloud({ text, label, className = '' }: ReadAloudProps) {
  const { language } = useApp();
  const [isReading, setIsReading] = useState(false);
  const [isSlow, setIsSlow] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (slow: boolean) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = slow ? 0.6 : 0.9;
    utterance.pitch = 1;

    utterance.onend = () => {
      setIsReading(false);
      setIsSlow(false);
    };

    utterance.onerror = () => {
      setIsReading(false);
      setIsSlow(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
    setIsSlow(slow);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsSlow(false);
  };

  if (!window.speechSynthesis) return null;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {!isReading ? (
        <>
          <button
            onClick={() => speak(false)}
            className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 hover:bg-primary-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]"
            aria-label={label || t('access.readAloud', language)}
          >
            <Volume2 className="w-4 h-4" />
            <span>{label || t('access.readAloud', language)}</span>
          </button>
          <button
            onClick={() => speak(true)}
            className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 hover:bg-teal-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]"
            aria-label={t('access.readSlowly', language)}
          >
            <Volume2 className="w-4 h-4" />
            <span>{t('access.readSlowly', language)}</span>
          </button>
        </>
      ) : (
        <button
          onClick={stop}
          className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]"
          aria-label={t('common.stop', language)}
        >
          <Square className="w-4 h-4" />
          <span>{t('common.stop', language)}</span>
        </button>
      )}
    </div>
  );
}
