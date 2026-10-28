import { useApp } from '@/context/AppContext';
import { PageHeader } from '@/components/PageHeader';

export function TermsPage() {
  const { language } = useApp();
  const isEn = language === 'en';

  const sections = isEn
    ? [
        { title: 'Acceptance of Terms', body: 'By using SwasthAI, you agree to these terms. If you do not agree, please do not use this service.' },
        { title: 'Educational Purpose Only', body: 'SwasthAI provides health education and general guidance only. It does not provide medical diagnoses, prescriptions, or professional medical advice. Always consult a qualified healthcare professional for medical concerns.' },
        { title: 'Not a Substitute for Professional Care', body: 'Information provided by SwasthAI is not a substitute for consultation with a licensed healthcare provider. Never ignore professional medical advice because of something you read on this platform.' },
        { title: 'Emergency Situations', body: 'If you experience a medical emergency, contact your local emergency services immediately (such as 108 in India). Do not rely on this platform for emergency care.' },
        { title: 'User Accounts', body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.' },
        { title: 'User Content', body: 'You retain ownership of health data you upload. You can delete your data at any time. We do not claim ownership of your personal health information.' },
        { title: 'Limitation of Liability', body: 'SwasthAI is provided "as is" without warranties. We are not liable for any decisions made based on information provided by this platform.' },
        { title: 'Changes to Terms', body: 'We may update these terms from time to time. Continued use of the platform constitutes acceptance of updated terms.' },
      ]
    : [
        { title: 'शर्तों की स्वीकृति', body: 'SwasthAI का उपयोग करके, आप इन शर्तों से सहमत हैं। यदि आप सहमत नहीं हैं, तो कृपया इस सेवा का उपयोग न करें।' },
        { title: 'केवल शैक्षणिक उद्देश्य', body: 'SwasthAI केवल स्वास्थ्य शिक्षा और सामान्य सलाह प्रदान करता है। यह मेडिकल निदान, प्रिस्क्रिप्शन, या पेशेवर चिकित्सकीय सलाह नहीं देता। मेडिकल चिंताओं के लिए हमेशा योग्य चिकित्सक से परामर्श लें।' },
        { title: 'पेशेवर देखभाल का विकल्प नहीं', body: 'SwasthAI द्वारा दी गई जानकारी लाइसेंस प्राप्त चिकित्सक से परामर्श का विकल्प नहीं है। इस प्लेटफ़ॉर्म पर पढ़ी गई चीज़ों के कारण पेशेवर मेडिकल सलाह कभी न अनदेखी करें।' },
        { title: 'आपातकालीन स्थितियां', body: 'यदि आपको मेडिकल आपातकाल है, तो तुरंत अपनी स्थानीय आपातकाल सेवाओं से संपर्क करें (जैसे भारत में 108)। आपातकालीन देखभाल के लिए इस प्लेटफ़ॉर्म पर न निर्भर करें।' },
        { title: 'उपयोगकर्ता खाते', body: 'आप अपने खाता क्रेडेंशियल की गोपनीयता बनाए रखने और अपने खाते के तहत सभी गतिविधियों के लिए ज़िम्मेदार हैं।' },
        { title: 'उपयोगकर्ता सामग्री', body: 'आप अपलोड किए गए स्वास्थ्य डेटा के स्वामित्व को बनाए रखते हैं। आप अपना डेटा कभी भी हटा सकते हैं। हम आपकी व्यक्तिगत स्वास्थ्य जानकारी का स्वामित्व नहीं दावा करते।' },
        { title: 'देयता की सीमा', body: 'SwasthAI बिना वारंटी के "जैसा है" प्रदान किया जाता है। इस प्लेटफ़ॉर्म द्वारा दी गई जानकारी पर आधारित किसी भी निर्णय के लिए हम उत्तरदायी नहीं हैं।' },
        { title: 'शर्तों में बदलाव', body: 'हम समय-समय पर इन शर्तों को अपडेट कर सकते हैं। प्लेटफ़ॉर्म का निरंतर उपयोग अपडेटेड शर्तों की स्वीकृति माना जाएगा।' },
      ];

  return (
    <div>
      <PageHeader title={isEn ? 'Terms of Service' : 'सेवा की शर्तें'} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl space-y-4">
        {sections.map((s, i) => (
          <div key={i} className="card p-6">
            <h2 className="text-lg font-bold text-charcoal mb-3">
              {i + 1}. {s.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">{s.body}</p>
          </div>
        ))}
        <p className="text-sm text-gray-400 text-center">
          {isEn ? 'Last updated: October 2026' : 'अंतिम अपडेट: अक्टूबर 2026'}
        </p>
      </div>
    </div>
  );
}
