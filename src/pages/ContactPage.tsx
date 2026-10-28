import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { PageHeader } from '@/components/PageHeader';

export function ContactPage() {
  const { language } = useApp();
  const isEn = language === 'en';
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      <PageHeader title={isEn ? 'Contact Us' : 'संपर्क करें'} />
      <div className="container-app px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="card p-6">
            <h2 className="text-lg font-bold text-charcoal mb-4">{isEn ? 'Send Us a Message' : 'हमें संदेश भेजें'}</h2>
            {sent && (
              <div className="mb-4 p-3 rounded-xl bg-mint-50 text-mint-700 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {isEn ? 'Message sent! We will get back to you soon.' : 'संदेश भेजा गया! हम जल्द आपसे संपर्क करेंगे।'}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{isEn ? 'Your Name' : 'आपका नाम'}</label>
                <input type="text" className="input-field" placeholder={isEn ? 'Enter your name' : 'अपना नाम दर्ज करें'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{isEn ? 'Email' : 'ईमेल'}</label>
                <input type="email" className="input-field" placeholder={isEn ? 'Enter your email' : 'अपना ईमेल दर्ज करें'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">{isEn ? 'Message' : 'संदेश'}</label>
                <textarea rows={4} className="input-field resize-none" placeholder={isEn ? 'How can we help you?' : 'हम आपकी कैसे मदद कर सकते हैं?'} />
              </div>
              <button onClick={handleSubmit} className="btn-primary w-full">
                <Send className="w-4 h-4" /> {isEn ? 'Send Message' : 'संदेश भेजें'}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-charcoal mb-4">{isEn ? 'Other Ways to Reach Us' : 'हमसे संपर्क के अन्य तरीके'}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{isEn ? 'Email' : 'ईमेल'}</p>
                    <p className="text-sm text-gray-500">help@swasthai.app</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{isEn ? 'Phone' : 'फ़ोन'}</p>
                    <p className="text-sm text-gray-500">1800-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mint-50 text-mint-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{isEn ? 'Hours' : 'समय'}</p>
                    <p className="text-sm text-gray-500">{isEn ? 'Mon-Fri, 9 AM - 6 PM IST' : 'सोम-शुक्र, सुबह 9 - शाम 6 IST'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-amber-50/50">
              <h3 className="text-sm font-bold text-amber-700 mb-2">
                {isEn ? 'Medical Emergency?' : 'मेडिकल आपातकाल?'}
              </h3>
              <p className="text-sm text-amber-600">
                {isEn
                  ? 'Do not use this contact form for emergencies. Call 108 immediately for medical emergencies in India.'
                  : 'आपातकाल के लिए यह फ़ॉर्म उपयोग न करें। भारत में मेडिकल आपातकाल के लिए तुरंत 108 पर कॉल करें।'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
