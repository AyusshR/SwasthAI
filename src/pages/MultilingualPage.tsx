import { useState } from 'react';
import { Languages, Mic, Volume2, Globe, Info } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { t } from '@/lib/translations';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';

function VoiceDemo() {
  const { language } = useApp();
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(language === 'en' ? 'Voice input is not supported in this browser. Please try Chrome or Edge.' : 'इस ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। कृपया Chrome या Edge आज़माएं।');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      setTranscript(event.results[0][0].transcript);
    };
    recognition.onerror = () => setListening(false);

    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening} disabled={listening} className="btn-secondary text-sm">
        <Mic className="w-4 h-4" />
        {listening ? (language === 'en' ? 'Listening...' : 'सुन रहा है...') : (language === 'en' ? 'Try Speaking' : 'बोलने का प्रयास करें')}
      </button>
      {transcript && (
        <p className="mt-3 p-3 rounded-xl bg-gray-50 text-sm text-charcoal">
          <span className="font-medium">{language === 'en' ? 'You said:' : 'आपने कहा:'} </span>
          {transcript}
        </p>
      )}
    </div>
  );
}

export function MultilingualPage() {
  const { language, toggleLanguage } = useApp();

  return (
    <div>
      <PageHeader title={t('feature.multilingual.title', language)} subtitle={t('feature.multilingual.desc', language)} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="card p-6 mb-6 text-center">
          <Globe className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-charcoal mb-2">
            {language === 'en' ? 'Switch Language Instantly' : 'तुरंत भाषा बदलें'}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === 'en'
              ? 'Switch between English and Hindi without losing your work.'
              : 'बिना अपना काम खोए हिंदी और अंग्रेज़ी के बीच बदलें।'}
          </p>
          <button onClick={toggleLanguage} className="btn-primary text-lg">
            <Languages className="w-6 h-6" />
            {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
          </button>
          <p className="text-sm text-gray-400 mt-3">
            {language === 'en' ? 'Currently viewing in English' : 'अभी हिंदी में देख रहे हैं'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-3">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">
              {language === 'en' ? 'Voice Input' : 'वॉइस इनपुट'}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {language === 'en'
                ? 'Speak your questions instead of typing. This feature uses your browser\'s built-in speech recognition and works best on Chrome and Edge.'
                : 'टाइप करने के बजाय अपने सवाल बोलें। यह सुविधा आपके ब्राउज़र की बिल्ट-इन स्पीच रिकग्निशन का उपयोग करती है और Chrome और Edge पर सबसे अच्छा काम करती है।'}
            </p>
            <div className="mt-4">
              <VoiceDemo />
            </div>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-3">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">
              {language === 'en' ? 'Text-to-Speech (Read Aloud)' : 'टेक्स्ट-टू-स्पीच (पढ़कर सुनाएं)'}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {language === 'en'
                ? 'Listen to health explanations read aloud in your language. Use the "Read Slowly" option for a more relaxed pace.'
                : 'अपनी भाषा में स्वास्थ्य स्पष्टीकरण सुनें। अधिक धीमी गति के लिए "धीरे पढ़ें" विकल्प का उपयोग करें।'}
            </p>
          </div>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-charcoal mb-4">
            {language === 'en' ? 'How It Works' : 'यह कैसे काम करता है'}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
              <span className="badge bg-primary-100 text-primary-600 flex-shrink-0">1</span>
              <div>
                <p className="font-medium text-charcoal text-sm">
                  {language === 'en' ? 'User speaks:' : 'उपयोगकर्ता बोलता है:'}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {language === 'en' ? '"Mujhe apni blood report samajhni hai."' : '"मुझे अपनी ब्लड रिपोर्ट समझनी है।"'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-teal-50">
              <span className="badge bg-teal-100 text-teal-600 flex-shrink-0">2</span>
              <div>
                <p className="font-medium text-charcoal text-sm">
                  {language === 'en' ? 'Assistant responds:' : 'असिस्टेंट जवाब देता है:'}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {language === 'en'
                    ? '"Aap apni report upload kar sakte hain. Main usmein likhi medical terms ko aasaan Hindi mein samjhaunga."'
                    : '"आप अपनी रिपोर्ट अपलोड कर सकते हैं। मैं उसमें लिखी मेडिकल टर्म को आसान हिंदी में समझाऊंगा।"'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
          <Info className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-amber-700 font-medium mb-1">
              {language === 'en' ? 'Limitations to Know' : 'जानने योग्य सीमाएं'}
            </p>
            <p className="text-sm text-amber-600 leading-relaxed">
              {language === 'en'
                ? 'Speech recognition and translation may not be 100% accurate. Always verify important health information with a qualified healthcare professional.'
                : 'स्पीच रिकग्निशन और अनुवाद 100% सटीक नहीं हो सकते। महत्वपूर्ण स्वास्थ्य जानकारी हमेशा योग्य चिकित्सक से सत्यापित करें।'}
            </p>
          </div>
        </div>

        <Disclaimer type="educational" />
      </div>
    </div>
  );
}
