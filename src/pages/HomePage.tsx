import {
  Stethoscope, FileText, Pill, ShieldCheck, Brain, Languages, BookOpen,
  ArrowRight, CheckCircle2, Shield, HeartHandshake, Lightbulb
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';

export function HomePage() {
  const { language, navigate } = useApp();

  const features = [
    {
      route: '/health-assistant',
      icon: Stethoscope,
      title: t('feature.diseaseInfo.title', language),
      desc: t('feature.diseaseInfo.desc', language),
      color: 'bg-primary-50 text-primary-500',
    },
    {
      route: '/report-explainer',
      icon: FileText,
      title: t('feature.reportExplainer.title', language),
      desc: t('feature.reportExplainer.desc', language),
      color: 'bg-teal-50 text-teal-500',
    },
    {
      route: '/medicine-reminder',
      icon: Pill,
      title: t('feature.medicineReminder.title', language),
      desc: t('feature.medicineReminder.desc', language),
      color: 'bg-mint-50 text-mint-500',
    },
    {
      route: '/preventive',
      icon: ShieldCheck,
      title: t('feature.preventive.title', language),
      desc: t('feature.preventive.desc', language),
      color: 'bg-primary-50 text-primary-500',
    },
    {
      route: '/mental-wellbeing',
      icon: Brain,
      title: t('feature.mentalWellbeing.title', language),
      desc: t('feature.mentalWellbeing.desc', language),
      color: 'bg-teal-50 text-teal-500',
    },
    {
      route: '/multilingual',
      icon: Languages,
      title: t('feature.multilingual.title', language),
      desc: t('feature.multilingual.desc', language),
      color: 'bg-mint-50 text-mint-500',
    },
    {
      route: '/health-library',
      icon: BookOpen,
      title: t('feature.healthLibrary.title', language),
      desc: t('feature.healthLibrary.desc', language),
      color: 'bg-primary-50 text-primary-500',
    },
  ];

  const reassurance = [
    { icon: Lightbulb, label: t('reassurance.understand', language) },
    { icon: Languages, label: t('reassurance.language', language) },
    { icon: Shield, label: t('reassurance.privacy', language) },
    { icon: HeartHandshake, label: t('reassurance.notDiagnosis', language) },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-teal-50 overflow-hidden">
        <div className="container-app px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
                <HeartHandshake className="w-4 h-4" />
                {t('footer.tagline', language)}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-charcoal leading-tight">
                {t('hero.title', language)}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                {t('hero.subtitle', language)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/health-assistant')}
                  className="btn-primary text-lg"
                >
                  {t('hero.cta.ask', language)}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-outline text-lg"
                >
                  {t('hero.cta.explore', language)}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {reassurance.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal-500" />
                    </div>
                    <span className="text-sm font-medium text-charcoal">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8248433/pexels-photo-8248433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Healthcare worker helping elderly patient"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-mint-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t('reassurance.privacy', language)}</p>
                    <p className="text-xs text-gray-500">Secured & Private</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t('reassurance.understand', language)}</p>
                    <p className="text-xs text-gray-500">Simple Language</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="section-padding">
        <div className="container-app px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-charcoal mb-3">
              {language === 'en' ? 'Everything You Need for Better Health' : 'बेहतर स्वास्थ्य के लिए सब कुछ'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Seven simple tools to help you understand, manage, and improve your health — all in one place.'
                : 'अपने स्वास्थ्य को समझने, प्रबंधित करने, और सुधारने के लिए सात आसान उपकरण — एक ही जगह।'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.route}
                className="card p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(feature.route)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(feature.route); }}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">{feature.desc}</p>
                <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                  {t('common.getStarted', language)}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-br from-primary-50 to-teal-50 section-padding">
        <div className="container-app px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
              {language === 'en' ? 'Trust, Safety & Privacy First' : 'पहले विश्वास, सुरक्षा और निजता'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {language === 'en'
                ? 'SwasthAI provides educational health guidance only. We never present AI responses as confirmed diagnoses or prescriptions. Your health information stays private and is never shared with other users.'
                : 'SwasthAI केवल शैक्षणिक स्वास्थ्य सलाह देता है। हम AI प्रतिक्रियाओं को कभी निदान या प्रिस्क्रिप्शन के रूप में नहीं दिखाते। आपकी स्वास्थ्य जानकारी निजी रहती है और अन्य उपयोगकर्ताओं के साथ साझा नहीं होती।'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card p-5 text-center">
                <Shield className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">{t('reassurance.privacy', language)}</p>
              </div>
              <div className="card p-5 text-center">
                <CheckCircle2 className="w-8 h-8 text-mint-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">{t('reassurance.notDiagnosis', language)}</p>
              </div>
              <div className="card p-5 text-center">
                <Languages className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-charcoal">{t('reassurance.language', language)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
