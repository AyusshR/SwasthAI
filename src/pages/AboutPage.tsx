import { useApp } from '@/context/AppContext';
import { PageHeader } from '@/components/PageHeader';
import { Disclaimer } from '@/components/Disclaimer';
import { Heart, Shield, Globe, Brain, Target } from 'lucide-react';

export function AboutPage() {
  const { language } = useApp();
  const isEn = language === 'en';

  return (
    <div>
      <PageHeader title={isEn ? 'About SwasthAI' : 'SwasthAI के बारे में'} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl space-y-6">
        <div className="card p-6 lg:p-8">
          <h2 className="text-xl font-bold text-charcoal mb-4">{isEn ? 'Our Mission' : 'हमारा मिशन'}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {isEn
              ? 'SwasthAI was created to make healthcare information understandable, accessible, and useful for everyone — especially older adults, people with limited medical knowledge, and communities that face language or digital-literacy barriers.'
              : 'SwasthAI का उद्देश्य हेल्थकेयर जानकारी को सबके लिए समझने योग्य, सुलभ, और उपयोगी बनाना है — विशेष रूप से बुज़ुर्गों, मेडिकल जानकारी कम रखने वाले लोगों, और उन समुदायों के लिए जो भाषा या डिजिटल साक्षरता की बाधाओं का सामना करते हैं।'}
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            {isEn
              ? 'We believe everyone deserves to understand their health. Through simple language, bilingual support, and accessible design, we aim to help people make informed decisions about their wellbeing.'
              : 'हमारा मानना है कि हर किसी को अपने स्वास्थ्य को समझने का अधिकार है। आसान भाषा, द्विभाषी समर्थन, और सुलभ डिज़ाइन के माध्यम से, हम लोगों को अपनी सेहत के बारे में सूचित निर्णय लेने में मदद करना चाहते हैं।'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Heart, title: isEn ? 'Health & Wellbeing for All' : 'सभी के लिए स्वास्थ्य और कल्याण', desc: isEn ? 'Accessible to everyone regardless of background.' : 'पृष्ठभूमि की परवाह किए बिना सबके लिए सुलभ।' },
            { icon: Shield, title: isEn ? 'Privacy First' : 'पहले निजता', desc: isEn ? 'Your health data stays yours and private.' : 'आपका स्वास्थ्य डेटा आपका और निजी रहता है।' },
            { icon: Globe, title: isEn ? 'Bilingual Support' : 'द्विभाषी समर्थन', desc: isEn ? 'Available in Hindi and English.' : 'हिंदी और अंग्रेज़ी में उपलब्ध।' },
            { icon: Brain, title: isEn ? 'AI-Assisted Education' : 'AI-सहायित शिक्षा', desc: isEn ? 'Clear explanations, not diagnoses.' : 'स्पष्ट स्पष्टीकरण, निदान नहीं।' },
          ].map((v) => (
            <div key={v.title} className="card p-5">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-charcoal mb-1">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 lg:p-8">
          <h2 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-500" />
            {isEn ? 'What We Do Not Do' : 'हम क्या नहीं करते'}
          </h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'We do not provide medical diagnoses.' : 'हम मेडिकल निदान नहीं देते।'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'We do not prescribe medicines or treatments.' : 'हम दवाएं या इलाज निर्धारित नहीं करते।'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'We do not claim endorsement from doctors or hospitals.' : 'हम डॉक्टरों या अस्पतालों का समर्थन नहीं करते।'}</li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" /> {isEn ? 'We do not display fabricated testimonials or unverified statistics.' : 'हम नकली प्रशंसापत्र या असत्यापित आंकड़े नहीं दिखाते।'}</li>
          </ul>
        </div>

        <Disclaimer type="educational" />
      </div>
    </div>
  );
}
