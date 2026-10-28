import { useState, useEffect } from 'react';
import { Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { t } from '@/lib/translations';
import { Logo } from '@/components/Logo';

export function AuthPage() {
  const { language, navigate } = useApp();
  const { signIn, signUp, user } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate('/my-health');
  }, [user, navigate]);

  const validate = (): string | null => {
    if (!email.trim()) return language === 'en' ? 'Please enter your email' : 'कृपया ईमेल दर्ज करें';
    if (!email.includes('@') || !email.includes('.')) return t('auth.invalidEmail', language);
    if (!password) return t('auth.noPassword', language);
    if (password.length < 6) return t('auth.passwordShort', language);
    if (mode === 'signup' && password !== confirmPassword) return t('auth.passwordMismatch', language);
    return null;
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    const vError = validate();
    if (vError) { setError(vError); return; }

    setLoading(true);
    if (mode === 'signin') {
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        setError(signInError);
        setLoading(false);
      }
    } else {
      const { error: signUpError } = await signUp(email, password);
      if (signUpError) {
        setError(signUpError);
        setLoading(false);
      } else {
        setSuccess(language === 'en' ? 'Account created! Please sign in.' : 'खाता बनाया गया! कृपया साइन इन करें।');
        setMode('signin');
        setPassword('');
        setConfirmPassword('');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-teal-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block mb-4"><Logo size="lg" /></div>
          <h1 className="text-2xl font-bold text-charcoal">
            {mode === 'signin' ? t('auth.welcome', language) : t('auth.welcome', language)}
          </h1>
          <p className="text-gray-600 mt-2">
            {mode === 'signin' ? t('auth.signInDesc', language) : t('auth.signUpDesc', language)}
          </p>
        </div>

        <div className="card p-6 lg:p-8">
          <div className="flex gap-1 mb-6 p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => { setMode('signin'); setError(''); setSuccess(''); }}
              className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors min-h-[44px] ${
                mode === 'signin' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              {t('common.signIn', language)}
            </button>
            <button
              onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
              className={`flex-1 py-2 rounded-lg font-medium text-sm transition-colors min-h-[44px] ${
                mode === 'signup' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-500'
              }`}
            >
              {t('nav.signup', language)}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-xl bg-mint-50 text-mint-700 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {success}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">{t('common.email', language)}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-12"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">{t('common.password', language)}</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-12"
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{t('common.confirmPassword', language)}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-field pl-12"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary w-full text-lg disabled:opacity-50"
            >
              {loading ? t('common.loading', language) : (mode === 'signin' ? t('common.signIn', language) : t('nav.signup', language))}
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-500">
            {mode === 'signin' ? (
              <p>{t('common.dontHaveAccount', language)} <button onClick={() => { setMode('signup'); setError(''); }} className="text-primary-600 font-medium hover:underline">{t('common.signUpHere', language)}</button></p>
            ) : (
              <p>{t('common.alreadyHaveAccount', language)} <button onClick={() => { setMode('signin'); setError(''); }} className="text-primary-600 font-medium hover:underline">{t('common.signInHere', language)}</button></p>
            )}
          </div>
        </div>

        <div className="mt-4 text-center">
          <button onClick={() => navigate('/')} className="text-sm text-gray-500 hover:text-primary-600">
            ← {t('common.home', language)}
          </button>
        </div>
      </div>
    </div>
  );
}
