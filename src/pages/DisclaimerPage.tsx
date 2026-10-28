import { useApp } from '@/context/AppContext';
import { PageHeader } from '@/components/PageHeader';
import { AlertTriangle, Info, XCircle, Phone } from 'lucide-react';

export function DisclaimerPage() {
  const { language } = useApp();
  const isEn = language === 'en';

  return (
    <div>
      <PageHeader title={isEn ? 'Medical Disclaimer' : 'मेडिकल अस्वीकरण'} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl space-y-4">
        <div className="card p-6 border-l-4 border-l-red-400">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold text-red-600 mb-2">{isEn ? 'Important — Please Read Carefully' : 'महत्वपूर्ण — कृपया ध्यान से पढ़ें'}</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {isEn
                  ? 'SwasthAI provides health education and general guidance only. All content on this platform is for informational purposes and is NOT a substitute for professional medical advice, diagnosis, or treatment.'
                  : 'SwasthAI केवल स्वास्थ्य शिक्षा और सामान्य सलाह प्रदान करता है। इस प्लेटफ़ॉर्म पर सभी सामग्री केवल जानकारी के उद्देश्य के लिए है और पेशेवर मेडिकल सलाह, निदान, या इलाज का विकल्प नहीं है।'}
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary-500" />
            {isEn ? 'What SwasthAI Is' : 'SwasthAI क्या है'}
          </h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-mint-400 mt-2 flex-shrink-0" /> {isEn ? 'An educational health information platform' : 'एक शैक्षणिक स्वास्थ्य जानकारी प्लेटफ़ॉर्म'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-mint-400 mt-2 flex-shrink-0" /> {isEn ? 'A tool to help you understand medical reports in simple language' : 'मेडिकल रिपोर्ट को आसान भाषा में समझने में मदद करने वाला उपकरण'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-mint-400 mt-2 flex-shrink-0" /> {isEn ? 'A medicine reminder and wellness tracking tool' : 'दवा रिमाइंडर और वेलनेस ट्रैकिंग उपकरण'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-mint-400 mt-2 flex-shrink-0" /> {isEn ? 'A source of general health education in Hindi and English' : 'हिंदी और अंग्रेज़ी में सामान्य स्वास्थ्य शिक्षा का स्रोत'}</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-500" />
            {isEn ? 'What SwasthAI Is NOT' : 'SwasthAI क्या नहीं है'}
          </h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'NOT a medical diagnosis service' : 'मेडिकल निदान सेवा नहीं'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'NOT a prescription or treatment service' : 'प्रिस्क्रिप्शन या इलाज सेवा नहीं'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'NOT a replacement for your doctor' : 'आपके डॉक्टर का विकल्प नहीं'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'NOT a licensed mental health professional' : 'लाइसेंस प्राप्त मानसिक स्वास्थ्य पेशेवर नहीं'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'NOT an emergency service' : 'आपातकाल सेवा नहीं'}</li>
          </ul>
        </div>

        <div className="card p-6 bg-red-50/50 border-l-4 border-l-red-400">
          <h2 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            {isEn ? 'Emergency Information' : 'आपातकाल जानकारी'}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            {isEn
              ? 'If you are experiencing a medical emergency, contact your local emergency services immediately.'
              : 'यदि आपको मेडिकल आपातकाल है, तो तुरंत अपनी स्थानीय आपातकाल सेवाओं से संपर्क करें।'}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:108" className="btn-danger">
              <Phone className="w-4 h-4" /> 108 {isEn ? '(India Emergency)' : '(भारत आपातकाल)'}
            </a>
            <a href="tel:112" className="btn-danger">
              <Phone className="w-4 h-4" /> 112 {isEn ? '(All-India Emergency)' : '(अखिल-भारतीय आपातकाल)'}
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-bold text-charcoal mb-3">{isEn ? 'AI Limitations' : 'AI सीमाएं'}</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {isEn
              ? 'SwasthAI uses AI to help explain health information in simple language. AI-generated explanations may not always be accurate or complete. They are based on general medical knowledge and do not account for your individual health history. Always verify important health information with a qualified healthcare professional.'
              : 'SwasthAI स्वास्थ्य जानकारी को आसान भाषा में समझाने में AI का उपयोग करता है। AI-जनित स्पष्टीकरण हमेशा सटीक या पूर्ण नहीं हो सकते। वे सामान्य मेडिकल ज्ञान पर आधारित हैं और आपके व्यक्तिगत स्वास्थ्य इतिहास को ध्यान में नहीं रखते। महत्वपूर्ण स्वास्थ्य जानकारी हमेशा योग्य चिकित्सक से सत्यापित करें।'}
          </p>
        </div>
      </div>
    </div>
  );
}
