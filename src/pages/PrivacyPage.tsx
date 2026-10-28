import { useApp } from '@/context/AppContext';
import { PageHeader } from '@/components/PageHeader';
import { Lock, Database, UserCheck, Trash2, Shield } from 'lucide-react';

export function PrivacyPage() {
  const { language } = useApp();
  const isEn = language === 'en';

  const sections = [
    {
      icon: Lock,
      title: isEn ? 'Data We Collect' : 'हम जो डेटा एकत्र करते हैं',
      content: isEn
        ? 'We collect only the information you provide: your email (for account creation), medicine schedules, mood logs, wellness tracking, and medical report summaries you choose to upload. We do not sell or share your data with third parties.'
        : 'हम केवल आपके द्वारा दी गई जानकारी एकत्र करते हैं: आपका ईमेल (खाता बनाने के लिए), दवा कार्यक्रम, मूड लॉग, वेलनेस ट्रैकिंग, और मेडिकल रिपोर्ट सारांश जिन्हें आप अपलोड करना चुनते हैं। हम आपका डेटा तीसरे पक्षों को नहीं बेचते या साझा नहीं करते।',
    },
    {
      icon: Database,
      title: isEn ? 'How We Store Data' : 'हम डेटा कैसे संग्रहित करते हैं',
      content: isEn
        ? 'Your data is stored securely using Supabase, a platform with row-level security. Each user can only access their own data. Your medical records are never exposed to other users.'
        : 'आपका डेटा Supabase के माध्यम से सुरक्षित रूप से संग्रहित किया जाता है, जो रो-लेवल सिक्योरिटी वाला प्लेटफ़ॉर्म है। प्रत्येक उपयोगकर्ता केवल अपने डेटा तक पहुंच सकता है। आपकी मेडिकल रिपोर्ट कभी अन्य उपयोगकर्ताओं को दिखाई नहीं जाती।',
    },
    {
      icon: UserCheck,
      title: isEn ? 'Permissions' : 'अनुमतियां',
      content: isEn
        ? 'We ask for permission before using your microphone (for voice input), sending notifications (for medicine reminders), or saving health information. You can decline these permissions and still use most features.'
        : 'हम आपके माइक्रोफ़ोन (वॉइस इनपुट के लिए), नोटिफिकेशन भेजने (दवा रिमाइंडर के लिए), या स्वास्थ्य जानकारी सहेजने से पहले अनुमति मांगते हैं। आप इन अनुमतियों को अस्वीकार कर सकते हैं और अधिकांश सुविधाओं का उपयोग कर सकते हैं।',
    },
    {
      icon: Trash2,
      title: isEn ? 'Your Right to Delete' : 'हटाने का आपका अधिकार',
      content: isEn
        ? 'You can delete your uploaded reports, chat history, mood logs, journal entries, and account information at any time. Deletion is permanent and cannot be undone.'
        : 'आप अपनी अपलोड की गई रिपोर्ट, चैट इतिहास, मूड लॉग, जर्नल प्रविष्टियां, और खाता जानकारी कभी भी हटा सकते हैं। हटाना स्थायी है और पूर्ववत नहीं किया जा सकता।',
    },
    {
      icon: Shield,
      title: isEn ? 'Notifications' : 'नोटिफिकेशन',
      content: isEn
        ? 'Medicine reminder notifications work while the app is open in your browser. We do not send sensitive medical information in notifications without your permission.'
        : 'दवा रिमाइंडर नोटिफिकेशन तब काम करते हैं जब ऐप आपके ब्राउज़र में खुला है। हम आपकी अनुमति के बिना नोटिफिकेशन में संवेदनशील मेडिकल जानकारी नहीं भेजते।',
    },
  ];

  return (
    <div>
      <PageHeader title={isEn ? 'Privacy Policy' : 'गोपनीयता नीति'} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl space-y-4">
        <div className="card p-6 bg-gradient-to-br from-primary-50 to-teal-50">
          <p className="text-lg text-charcoal leading-relaxed">
            {isEn
              ? 'Your privacy is fundamental to us. This policy explains how we collect, use, and protect your health information.'
              : 'आपकी निजता हमारे लिए बहुत ज़रूरी है। यह नीति बताती है कि हम आपकी स्वास्थ्य जानकारी कैसे एकत्र, उपयोग, और सुरक्षित करते हैं।'}
          </p>
        </div>
        {sections.map((s) => (
          <div key={s.title} className="card p-6">
            <h2 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
              <s.icon className="w-5 h-5 text-primary-500" />
              {s.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">{s.content}</p>
          </div>
        ))}
        <p className="text-sm text-gray-400 text-center">
          {isEn ? 'Last updated: October 2026' : 'अंतिम अपडेट: अक्टूबर 2026'}
        </p>
      </div>
    </div>
  );
}
