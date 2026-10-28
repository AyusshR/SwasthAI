import type { HealthArticle } from '@/types';

export const healthArticles: HealthArticle[] = [
  {
    id: 'diabetes-awareness',
    category: 'Diabetes Awareness',
    categoryHi: 'मधुमेह जागरूकता',
    title: { en: 'Understanding Diabetes: A Simple Guide', hi: 'मधुमेह समझना: एक आसान गाइड' },
    summary: {
      en: 'Learn what diabetes is, how it affects your body, and what you can do to manage it well.',
      hi: 'जानें कि मधुमेह क्या है, यह आपके शरीर को कैसे प्रभावित करता है, और इसे अच्छी तरह प्रबंधित करने के लिए आप क्या कर सकते हैं।',
    },
    content: {
      en: [
        'Diabetes is a condition where the amount of sugar (glucose) in your blood is higher than normal. Your body uses sugar from food for energy, and a hormone called insulin helps move that sugar from your blood into your cells.',
        'When your body does not make enough insulin, or does not use it well, sugar builds up in your blood. Over time, this can damage your heart, eyes, kidneys, and nerves.',
        'There are two main types. Type 1 is when your body stops making insulin, often starting in childhood. Type 2 is more common and happens when your body cannot use insulin properly, usually developing in adults.',
        'The good news is that diabetes can be managed. Eating balanced meals, staying active, taking medicines on time, and checking your blood sugar regularly can help you live a full and healthy life.',
      ],
      hi: [
        'मधुमेह एक ऐसी स्थिति है जिसमें आपके रक्त में शर्करा (ग्लूकोज़) का स्तर सामान्य से अधिक होता है। आपका शरीर भोजन से मिलने वाली शर्करा का उपयोग ऊर्जा के लिए करता है, और इंसुलिन नामक हार्मोन उस शर्करा को आपके रक्त से कोशिकाओं में ले जाने में मदद करता है।',
        'जब आपका शरीर पर्याप्त इंसुलिन नहीं बनाता, या इसका उपयोग ठीक से नहीं कर पाता, तो शर्करा आपके रक्त में जमा होने लगती है। समय के साथ, यह आपके हृदय, आंखों, गुर्दे और नसों को नुकसान पहुंचा सकता है।',
        'दो मुख्य प्रकार हैं। टाइप 1 में शरीर इंसुलिन बनाना बंद कर देता है, जो अक्सर बचपन में शुरू होता है। टाइप 2 अधिक आम है और तब होता है जब शरीर इंसुलिन का उपयोग ठीक से नहीं कर पाता, जो आमतौर पर वयस्कों में विकसित होता है।',
        'अच्छी बात यह है कि मधुमेह को प्रबंधित किया जा सकता है। संतुलित भोजन, सक्रिय रहना, समय पर दवाएं लेना, और नियमित रक्त शर्करा जांच आपको एक पूर्ण और स्वस्थ जीवन जीने में मदद कर सकती है।',
      ],
    },
    keyTakeaways: {
      en: [
        'Diabetes means your blood sugar is too high',
        'It can be managed with food, activity, and medicine',
        'Regular check-ups prevent complications',
        'Type 2 diabetes is the most common form',
      ],
      hi: [
        'मधुमेह का मतलब है आपके रक्त में शर्करा बहुत अधिक',
        'इसे भोजन, गतिविधि, और दवा से प्रबंधित किया जा सकता है',
        'नियमित जांच से जटिलताएं रुकती हैं',
        'टाइप 2 मधुमेह सबसे आम रूप है',
      ],
    },
    myths: [
      {
        myth: { en: 'Eating too much sugar causes diabetes.', hi: 'बहुत ज़्यादा मीठा खाने से मधुमेह होता है।' },
        fact: { en: 'Sugar alone does not cause diabetes. Being overweight, inactive, and having a family history are the main risk factors for Type 2 diabetes.', hi: 'केवल मीठा खाने से मधुमेह नहीं होता। वज़न अधिक होना, निष्क्रिय रहना, और परिवार में इतिहास होना टाइप 2 मधुमेह के मुख्य जोखिम कारक हैं।' },
      },
      {
        myth: { en: 'People with diabetes cannot eat any sweets.', hi: 'मधुमेह वाले लोग कोई मिठाई नहीं खा सकते।' },
        fact: { en: 'Small amounts of sweets can be included in a balanced meal plan. The key is portion control and not making sweets a daily habit.', hi: 'संतुलित भोजन योजना में थोड़ी मात्रा में मिठाई शामिल की जा सकती है। बात मात्रा को नियंत्रित रखने की है और मिठाई को रोज़ की आदत न बनाएं।' },
      },
    ],
    faqs: [
      {
        question: { en: 'Can diabetes be cured?', hi: 'क्या मधुमेह का इलाज संभव है?' },
        answer: { en: 'There is no permanent cure for diabetes, but it can be well managed with lifestyle, diet, and medicines. Some people with Type 2 can achieve remission with significant lifestyle changes.', hi: 'मधुमेह का कोई स्थायी इलाज नहीं है, लेकिन जीवनशैली, आहार, और दवाओं से इसे अच्छी तरह प्रबंधित किया जा सकता है। कुछ टाइप 2 वाले लोग महत्वपूर्ण जीवनशैली बदलावों से उपशम पा सकते हैं।' },
      },
      {
        question: { en: 'How often should I check my blood sugar?', hi: 'मुझे अपना रक्त शर्करा कितनी बार जांचना चाहिए?' },
        answer: { en: 'This depends on your treatment plan. Your doctor will advise how often to check. Generally, people on insulin check more frequently than those on tablets.', hi: 'यह आपकी इलाज योजना पर निर्भर करता है। आपका डॉक्टर बताएगा कि कितनी बार जांच करें। आमतौर पर, इंसुलिन वाले लोग गोलियों वालों की तुलना में ज़्यादा बार जांच करते हैं।' },
      },
    ],
    sources: ['WHO — Diabetes', 'CDC — Diabetes', 'Mayo Clinic — Diabetes'],
    reviewedOn: '2026-09-15',
  },
  {
    id: 'heart-health',
    category: 'Heart Health',
    categoryHi: 'हृदय स्वास्थ्य',
    title: { en: 'Keeping Your Heart Healthy', hi: 'अपने हृदय को स्वस्थ रखना' },
    summary: {
      en: 'Understand how your heart works and the simple steps you can take every day to protect it.',
      hi: 'जानें कि आपका हृदय कैसे काम करता है और इसे सुरक्षित रखने के लिए हर दिन कौन से आसान कदम उठा सकते हैं।',
    },
    content: {
      en: [
        'Your heart is a muscle about the size of your fist that pumps blood to every part of your body. It beats about 100,000 times every day, working without rest.',
        'Heart disease happens when the blood vessels that supply your heart become narrow or blocked. This is usually caused by a buildup of fatty deposits called plaque.',
        'The most common warning signs of heart problems include chest pain or discomfort, shortness of breath, feeling very tired, and swelling in the legs. However, symptoms can differ, especially in women.',
        'You can protect your heart by eating less fried and salty food, walking regularly, not smoking, managing stress, and getting your blood pressure and cholesterol checked.',
      ],
      hi: [
        'आपका हृदय आपकी मुट्ठी के आकार का एक मांसपेशी है जो आपके शरीर के हर हिस्से में रक्त पंप करता है। यह हर दिन लगभग 100,000 बार धड़कता है, बिना आराम किए काम करता है।',
        'हृदय रोग तब होता है जब आपके हृदय को रक्त देने वाली रक्त वाहिकाएं संकुचित या अवरुद्ध हो जाती हैं। यह आमतौर पर प्लाक नामक वसायुक्त जमाव के निर्माण के कारण होता है।',
        'हृदय समस्याओं के सबसे आम चेतावनी संकेतों में छाती में दर्द या असहजता, सांस फूलना, बहुत थकान महसूस होना, और पैरों में सूजन शामिल हैं। हालांकि, लक्षण अलग हो सकते हैं, खासकर महिलाओं में।',
        'आप कम तली हुई और नमकीन खाना खाकर, नियमित टहलकर, धूम्रपान न करके, तनाव प्रबंधित करके, और ब्लड प्रेशर और कोलेस्ट्रॉल जांच कराकर अपने हृदय की रक्षा कर सकते हैं।',
      ],
    },
    keyTakeaways: {
      en: [
        'Your heart pumps blood to your whole body',
        'Blocked blood vessels cause heart disease',
        'Walking daily and healthy eating protect your heart',
        'Know the warning signs and act quickly',
      ],
      hi: [
        'आपका हृदय पूरे शरीर में रक्त पंप करता है',
        'अवरुद्ध रक्त वाहिकाएं हृदय रोग का कारण बनती हैं',
        'रोज़ टहलना और स्वस्थ खाना हृदय की रक्षा करता है',
        'चेतावनी संकेत जानें और जल्दी कार्रवाई करें',
      ],
    },
    myths: [
      {
        myth: { en: 'Heart disease only affects men.', hi: 'हृदय रोग केवल पुरुषों को प्रभावित करता है।' },
        fact: { en: 'Heart disease is the leading cause of death for both men and women. Women may experience different symptoms like nausea and back pain.', hi: 'हृदय रोग पुरुषों और महिलाओं दोनों के लिए मौत का प्रमुख कारण है। महिलाओं में जी मिचलाना और पीठ दर्द जैसे अलग लक्षण हो सकते हैं।' },
      },
      {
        myth: { en: 'If you have heart disease, you should avoid all exercise.', hi: 'यदि आपको हृदय रोग है, तो सभी व्यायाम से बचना चाहिए।' },
        fact: { en: 'Regular, moderate exercise is usually recommended for people with heart disease, but always follow your doctor\'s specific advice about what activities are safe.', hi: 'हृदय रोग वाले लोगों के लिए आमतौर पर नियमित, मध्यम व्यायाम की सिफारिश की जाती है, लेकिन हमेशा अपने डॉक्टर की विशिष्ट सलाह का पालन करें।' },
      },
    ],
    faqs: [
      {
        question: { en: 'What is a healthy blood pressure?', hi: 'स्वस्थ ब्लड प्रेशर क्या है?' },
        answer: { en: 'A normal blood pressure is around 120/80 mmHg or lower. Your doctor can tell you your personal target based on your health.', hi: 'सामान्य ब्लड प्रेशर लगभग 120/80 mmHg या उससे कम है। आपका डॉक्टर आपकी सेहत के आधार पर आपका व्यक्तिगत लक्ष्य बता सकते हैं।' },
      },
    ],
    sources: ['WHO — Cardiovascular Diseases', 'American Heart Association', 'Mayo Clinic — Heart Disease'],
    reviewedOn: '2026-09-10',
  },
  {
    id: 'nutrition',
    category: 'Nutrition',
    categoryHi: 'पोषण',
    title: { en: 'Eating Well for Better Health', hi: 'बेहतर स्वास्थ्य के लिए अच्छा खाना' },
    summary: {
      en: 'A simple guide to balanced eating — what to eat more of, what to limit, and how to build healthy meals.',
      hi: 'संतुलित खाने का आसान गाइड — क्या ज़्यादा खाएं, क्या सीमित करें, और स्वस्थ भोजन कैसे बनाएं।',
    },
    content: {
      en: [
        'Good nutrition means eating a variety of foods that give your body the nutrients it needs. This includes carbohydrates for energy, proteins for strength, healthy fats, vitamins, and minerals.',
        'A healthy plate should have half filled with vegetables and fruits, a quarter with whole grains like brown rice or whole wheat, and a quarter with protein like dal, beans, fish, or lean meat.',
        'Try to limit foods high in salt, sugar, and unhealthy fats — like fried snacks, packaged sweets, and sugary drinks. These can increase your risk of diabetes, heart disease, and high blood pressure.',
        'Drinking enough water is also important. Aim for 6 to 8 glasses a day. If you are very active or in hot weather, you may need more.',
      ],
      hi: [
        'अच्छा पोषण का मतलब है विभिन्न प्रकार के खाद्य पदार्थ खाना जो आपके शरीर को ज़रूरी पोषक तत्व देते हैं। इसमें ऊर्जा के लिए कार्बोहाइड्रेट, ताकत के लिए प्रोटीन, स्वस्थ वसा, विटामिन, और खनिज शामिल हैं।',
        'एक स्वस्थ थाली में आधी सब्ज़ियों और फलों से भरी होनी चाहिए, एक चौथाई ब्राउन चावल या गेहूं जैसे साबुत अनाज से, और एक चौथाई दाल, बीन्स, मछली, या कम वसा वाले मांस से।',
        'नमक, चीनी, और अस्वास्थ्यकर वसा में ऊंचे खाद्य पदार्थों को सीमित करने की कोशिश करें — जैसे तले हुए नाश्ते, पैकेज्ड मिठाई, और मीठे पेय। ये मधुमेह, हृदय रोग, और उच्च रक्तचाप का जोखिम बढ़ा सकते हैं।',
        'पर्याप्त पानी पीना भी ज़रूरी है। दिन में 6 से 8 गिलास का लक्ष्य रखें। यदि आप बहुत सक्रिय हैं या गर्म मौसम में हैं, तो आपको ज़्यादा चाहिए।',
      ],
    },
    keyTakeaways: {
      en: [
        'Fill half your plate with vegetables and fruits',
        'Choose whole grains over refined grains',
        'Limit salt, sugar, and fried foods',
        'Drink 6-8 glasses of water daily',
      ],
      hi: [
        'अपनी थाली का आधा हिस्सा सब्ज़ियों और फलों से भरें',
        'रिफाइंड अनाज के बजाय साबुत अनाज चुनें',
        'नमक, चीनी, और तले हुए खाने को सीमित करें',
        'रोज़ 6-8 गिलास पानी पिएं',
      ],
    },
    myths: [
      {
        myth: { en: 'Fat is always bad for you.', hi: 'वसा हमेशा आपके लिए बुरा होता है।' },
        fact: { en: 'Your body needs some healthy fats found in nuts, seeds, fish, and oils like olive or mustard oil. It is the unhealthy fats in fried and processed foods that you should limit.', hi: 'आपके शरीर को नट्स, बीज, मछली, और जैतून या सरसों के तेल जैसे तेलों में पाए जाने वाले कुछ स्वस्थ वसा की ज़रूरत होती है। तले और पैकेज्ड खाद्य पदार्थों में मौजूद अस्वास्थ्यकर वसा हैं जिन्हें आपको सीमित करना चाहिए।' },
      },
    ],
    faqs: [
      {
        question: { en: 'Is it okay to skip meals to lose weight?', hi: 'वज़न घटाने के लिए भोजन छोड़ना ठीक है?' },
        answer: { en: 'Skipping meals is not recommended. It can lead to overeating later and may slow your metabolism. Eating regular, balanced meals in smaller portions is more effective.', hi: 'भोजन छोड़ने की सिफारिश नहीं की जाती। इससे बाद में ज़्यादा खाने की आदत हो सकती है और आपकी चयापचय गति धीमी हो सकती है। नियमित, संतुलित भोजन छोटे हिस्सों में करना अधिक प्रभावी है।' },
      },
    ],
    sources: ['WHO — Healthy Diet', 'Harvard — Healthy Eating Plate', 'NIN India — Dietary Guidelines'],
    reviewedOn: '2026-08-20',
  },
  {
    id: 'mental-wellbeing',
    category: 'Mental Wellbeing',
    categoryHi: 'मानसिक स्वास्थ्य',
    title: { en: 'Taking Care of Your Mental Health', hi: 'अपने मानसिक स्वास्थ्य का ख्याल रखना' },
    summary: {
      en: 'Mental health is just as important as physical health. Learn simple ways to care for your mind every day.',
      hi: 'मानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ही ज़रूरी है। हर दिन अपने मन का ख्याल रखने के आसान तरीके जानें।',
    },
    content: {
      en: [
        'Mental health includes your emotional, psychological, and social wellbeing. It affects how you think, feel, and act in daily life. Just like physical health, it needs regular attention.',
        'Everyone feels sad, worried, or stressed sometimes. But when these feelings last for a long time or interfere with daily activities, it may be a sign that you need support.',
        'Simple habits that support mental health include talking to people you trust, getting enough sleep, spending time outdoors, doing activities you enjoy, and practicing relaxation or breathing exercises.',
        'If you are struggling, reaching out for help is a sign of strength, not weakness. Talk to a family member, a friend, or a mental health professional. You do not have to face difficult times alone.',
      ],
      hi: [
        'मानसिक स्वास्थ्य में आपकी भावनात्मक, मनोवैज्ञानिक, और सामाजिक सेहत शामिल है। यह आपके सोचने, महसूस करने, और रोज़मर्रा की ज़िंदगी में कार्य करने के तरीके को प्रभावित करता है। शारीरिक स्वास्थ्य की तरह, इसे भी नियमित ध्यान की ज़रूरत है।',
        'हर कोई कभी-कभी उदास, चिंतित, या तनावग्रस्त महसूस करता है। लेकिन जब ये भावनाएं लंबे समय तक रहें या रोज़मर्रा की गतिविधियों में बाधा डालें, तो यह संकेत हो सकता है कि आपको सहयोग चाहिए।',
        'मानसिक स्वास्थ्य का समर्थन करने वाली आसान आदतों में अपने भरोसेमंद लोगों से बात करना, पर्याप्त नींद लेना, बाहर का समय बिताना, अपनी पसंद की गतिविधियां करना, और विश्राम या श्वास व्यायाम अभ्यास करना शामिल है।',
        'यदि आप संघर्ष कर रहे हैं, तो मदद मांगना कमज़ोरी नहीं, बल्कि ताकत का संकेत है। किसी परिवार के सदस्य, दोस्त, या मानसिक स्वास्थ्य पेशेवर से बात करें। आपको अकेले मुश्किल समय का सामना नहीं करना है।',
      ],
    },
    keyTakeaways: {
      en: [
        'Mental health is as important as physical health',
        'Feeling sad or worried sometimes is normal',
        'Talk to trusted people when you are struggling',
        'Seeking help is a sign of strength',
      ],
      hi: [
        'मानसिक स्वास्थ्य शारीरिक स्वास्थ्य जितना ज़रूरी है',
        'कभी-कभी उदास या चिंतित महसूस करना सामान्य है',
        'संघर्ष के समय भरोसेमंद लोगों से बात करें',
        'मदद मांगना ताकत का संकेत है',
      ],
    },
    myths: [
      {
        myth: { en: 'Mental health problems are a sign of weakness.', hi: 'मानसिक स्वास्थ्य समस्याएं कमज़ोरी का संकेत हैं।' },
        fact: { en: 'Mental health conditions are medical conditions, not character flaws. They can affect anyone regardless of strength, age, or background.', hi: 'मानसिक स्वास्थ्य स्थितियां चिकित्सकीय स्थितियां हैं, चरित्र की कमज़ोरी नहीं। ये ताकत, उम्र, या पृष्ठभूमि की परवाह किए बिना किसी को भी प्रभावित कर सकती हैं।' },
      },
    ],
    faqs: [
      {
        question: { en: 'When should I seek professional help?', hi: 'मुझे पेशेवर सहायता कब लेनी चाहिए?' },
        answer: { en: 'If feelings of sadness, worry, or stress last more than two weeks, affect your daily life, or if you have thoughts of self-harm, please reach out to a mental health professional or helpline immediately.', hi: 'यदि उदासी, चिंता, या तनाव की भावनाएं दो सप्ताह से अधिक रहें, आपके दैनिक जीवन को प्रभावित करें, या आपको आत्म-हानि के विचार आएं, तो कृपया तुरंत मानसिक स्वास्थ्य पेशेवर या हेल्पलाइन से संपर्क करें।' },
      },
    ],
    sources: ['WHO — Mental Health', 'NIMH — Mental Health Information', 'NIMHANS — Mental Health Resources'],
    reviewedOn: '2026-09-01',
  },
  {
    id: 'healthy-aging',
    category: 'Healthy Aging',
    categoryHi: 'स्वस्थ बुढ़ापा',
    title: { en: 'Staying Healthy as You Age', hi: 'उम्र बढ़ने के साथ स्वस्थ रहना' },
    summary: {
      en: 'Tips for staying active, independent, and healthy in your later years.',
      hi: 'बाद के वर्षों में सक्रिय, स्वतंत्र, और स्वस्थ रहने के लिए सुझाव।',
    },
    content: {
      en: [
        'Aging is a natural part of life. While our bodies change as we get older, there is a lot we can do to stay healthy and independent for many years.',
        'Regular physical activity is one of the most important things you can do. Even a daily 30-minute walk can improve strength, balance, and mood. Always check with your doctor before starting new exercises.',
        'Good sleep becomes even more important with age. Aim for 7 to 8 hours each night. If you have trouble sleeping, try keeping a regular bedtime and avoiding screens before bed.',
        'Social connections are vital for mental health. Stay in touch with family and friends, join community groups, or volunteer. Loneliness can affect both mental and physical health.',
        'Regular health check-ups become more important as we age. Talk to your doctor about screenings for blood pressure, diabetes, cholesterol, cancer, and bone health.',
      ],
      hi: [
        'उम्र बढ़ना जीवन का एक स्वाभाविक हिस्सा है। जबकि उम्र बढ़ने के साथ हमारे शरीर में बदलाव आते हैं, लेकिन हम बहुत कुछ कर सकते हैं ताकि कई वर्षों तक स्वस्थ और स्वतंत्र रहें।',
        'नियमित शारीरिक गतिविधि सबसे महत्वपूर्ण चीज़ों में से एक है जो आप कर सकते हैं। रोज़ 30 मिनट की टहलना भी ताकत, संतुलन, और मूड में सुधार कर सकती है। नया व्यायाम शुरू करने से पहले हमेशा अपने डॉक्टर से जांचें।',
        'उम्र के साथ अच्छी नींद और भी ज़रूरी हो जाती है। हर रात 7 से 8 घंटे का लक्ष्य रखें। यदि आपको नींद आने में परेशानी हो, तो नियमित सोने का समय रखें और सोने से पहले स्क्रीन से बचें।',
        'मानसिक स्वास्थ्य के लिए सामाजिक संपर्क बहुत ज़रूरी हैं। परिवार और दोस्तों के संपर्क में रहें, सामुदायिक समूहों में शामिल हों, या स्वयंसेवा करें। अकेलापन मानसिक और शारीरिक दोनों स्वास्थ्य को प्रभावित कर सकता है।',
        'उम्र बढ़ने के साथ नियमित स्वास्थ्य जांच और अधिक ज़रूरी हो जाती है। अपने डॉक्टर से ब्लड प्रेशर, मधुमेह, कोलेस्ट्रॉल, कैंसर, और हड्डी स्वास्थ्य की जांच के बारे में बात करें।',
      ],
    },
    keyTakeaways: {
      en: [
        'Daily walking keeps you strong and balanced',
        'Aim for 7-8 hours of sleep each night',
        'Stay socially connected to protect mental health',
        'Regular check-ups become more important with age',
      ],
      hi: [
        'रोज़ टहलना आपको मज़बूत और संतुलित रखता है',
        'हर रात 7-8 घंटे की नींद का लक्ष्य रखें',
        'मानसिक स्वास्थ्य की रक्षा के लिए सामाजिक रूप से जुड़े रहें',
        'उम्र के साथ नियमित जांच और ज़रूरी हो जाती है',
      ],
    },
    myths: [
      {
        myth: { en: 'It is too late to start exercising in older age.', hi: 'बुढ़ापे में व्यायाम शुरू करना बहुत देर हो जाती है।' },
        fact: { en: 'It is never too late. Studies show that starting exercise even in your 70s or 80s improves strength, balance, and quality of life.', hi: 'यह कभी देर नहीं होती। अध्ययनों से पता चलता है कि 70 या 80 की उम्र में भी व्यायाम शुरू करने से ताकत, संतुलन, और जीवन की गुणवत्ता में सुधार होता है।' },
      },
    ],
    faqs: [
      {
        question: { en: 'What screenings should I get as I age?', hi: 'उम्र बढ़ने पर मुझे कौन सी जांच करानी चाहिए?' },
        answer: { en: 'Common screenings include blood pressure, cholesterol, diabetes, colon cancer, breast cancer (for women), bone density, and eye exams. Your doctor will recommend a schedule based on your age and health.', hi: 'आम जांचों में ब्लड प्रेशर, कोलेस्ट्रॉल, मधुमेह, कोलन कैंसर, स्तन कैंसर (महिलाओं के लिए), हड्डी घनत्व, और आंख परीक्षण शामिल हैं। आपका डॉक्टर आपकी उम्र और सेहत के आधार पर कार्यक्रम सुझाएगा।' },
      },
    ],
    sources: ['WHO — Aging and Health', 'NIH — Healthy Aging', 'Mayo Clinic — Senior Health'],
    reviewedOn: '2026-08-15',
  },
  {
    id: 'exercise',
    category: 'Exercise & Physical Activity',
    categoryHi: 'व्यायाम और शारीरिक गतिविधि',
    title: { en: 'Move More, Live Better', hi: 'ज़्यादा हिलें, बेहतर जिएं' },
    summary: {
      en: 'Physical activity is one of the best things you can do for your health. Here is how to get started safely.',
      hi: 'शारीरिक गतिविधि आपके स्वास्थ्य के लिए सबसे अच्छी चीज़ों में से एक है। यहां जानें कैसे सुरक्षित रूप से शुरू करें।',
    },
    content: {
      en: [
        'Regular physical activity reduces your risk of heart disease, diabetes, high blood pressure, and some cancers. It also improves mood, sleep, and energy levels.',
        'You do not need a gym or special equipment. Walking, gardening, taking stairs, dancing, or doing household chores all count as physical activity.',
        'A good goal is 30 minutes of moderate activity most days of the week. Moderate means you can still talk but not sing while doing it. Start with 10 minutes if 30 feels too much.',
        'Always warm up before exercising and cool down after. If you have a health condition, talk to your doctor before starting any new exercise program.',
      ],
      hi: [
        'नियमित शारीरिक गतिविधि हृदय रोग, मधुमेह, उच्च रक्तचाप, और कुछ कैंसर का जोखिम कम करती है। यह मूड, नींद, और ऊर्जा स्तर में भी सुधार करती है।',
        'आपको जिम या विशेष उपकरण की ज़रूरत नहीं। टहलना, बगीची का काम, सीढ़ियां चढ़ना, नाचना, या घर के काम सभी शारीरिक गतिविधि माने जाते हैं।',
        'एक अच्छा लक्ष्य सप्ताह के ज़्यादातर दिन 30 मिनट की मध्यम गतिविधि है। मध्यम का मतलब है कि आप काम करते हुए बात कर सकते हैं लेकिन गाना नहीं गा सकते। यदि 30 बहुत ज़्यादा लगे तो 10 मिनट से शुरू करें।',
        'व्यायाम से पहले हमेशा वार्म-अप करें और बाद में ठंडा होने का समय लें। यदि आपको कोई स्वास्थ्य स्थिति है, तो कोई नया व्यायाम कार्यक्रम शुरू करने से पहले अपने डॉक्टर से बात करें।',
      ],
    },
    keyTakeaways: {
      en: [
        '30 minutes of activity most days is a great goal',
        'Walking and daily chores count as exercise',
        'Start small and build up gradually',
        'Always warm up before and cool down after',
      ],
      hi: [
        'ज़्यादातर दिन 30 मिनट की गतिविधि एक बढ़िया लक्ष्य है',
        'टहलना और रोज़मर्रा के काम भी व्यायाम माने जाते हैं',
        'छोटे से शुरू करें और धीरे-धीरे बढ़ाएं',
        'व्यायाम से पहले हमेशा वार्म-अप करें और बाद में ठंडा हों',
      ],
    },
    myths: [
      {
        myth: { en: 'You need to sweat a lot for exercise to count.', hi: 'व्यायाम माने के लिए बहुत पसीना बहाना ज़रूरी है।' },
        fact: { en: 'Any movement is better than none. Even light activities like walking or stretching provide health benefits. Consistency matters more than intensity.', hi: 'कोई भी हलचल न करने से बेहतर है। टहलना या स्ट्रेचिंग जैसी हल्की गतिविधियां भी स्वास्थ्य लाभ देती हैं। तीव्रता से ज़्यादा निरंतरता मायने रखती है।' },
      },
    ],
    faqs: [
      {
        question: { en: 'Is it safe to exercise with joint pain?', hi: 'जोड़ों में दर्द के साथ व्यायाम करना सुरक्षित है?' },
        answer: { en: 'Gentle, low-impact activities like walking, swimming, or cycling are usually safe and can actually help reduce joint pain. Avoid high-impact activities and consult your doctor for a tailored plan.', hi: 'टहलना, तैरना, या साइकिल चलाना जैसी सौम्य, कम-प्रभाव वाली गतिविधियां आमतौर पर सुरक्षित हैं और वास्तव में जोड़ों के दर्द को कम करने में मदद कर सकती हैं। उच्च-प्रभाव वाली गतिविधियों से बचें और अपने डॉक्टर से एक अनुरूप योजना के लिए परामर्श लें।' },
      },
    ],
    sources: ['WHO — Physical Activity', 'CDC — Physical Activity', 'Mayo Clinic — Exercise'],
    reviewedOn: '2026-08-25',
  },
  {
    id: 'sleep-rest',
    category: 'Sleep & Rest',
    categoryHi: 'नींद और आराम',
    title: { en: 'Sleep Well for Better Health', hi: 'बेहतर स्वास्थ्य के लिए अच्छी नींद' },
    summary: {
      en: 'Sleep is essential for good health. Learn why it matters and how to sleep better.',
      hi: 'नींद अच्छे स्वास्थ्य के लिए ज़रूरी है। जानें क्यों मायने रखती है और कैसे बेहतर सोएं।',
    },
    content: {
      en: [
        'Sleep is not a luxury — it is a basic need. While you sleep, your body repairs itself, your brain stores memories, and your immune system gets stronger.',
        'Most adults need 7 to 9 hours of sleep each night. Older adults also need about the same amount, though sleep patterns may change.',
        'Poor sleep can increase your risk of heart disease, diabetes, weight gain, and weakened immunity. It also affects mood, concentration, and memory.',
        'Good sleep habits include going to bed and waking up at the same time daily, avoiding screens before bed, keeping the bedroom dark and cool, and avoiding caffeine in the evening.',
      ],
      hi: [
        'नींद कोई ऐश्वर्य नहीं — यह एक बुनियादी ज़रूरत है। सोते समय आपका शरीर खुद को मरम्मत करता है, आपका दिमाग यादों को संग्रहित करता है, और आपकी रोग प्रतिरोधक क्षमता मज़बूत होती है।',
        'अधिकांश वयस्कों को हर रात 7 से 9 घंटे की नींद चाहिए। बुज़ुर्ग वयस्कों को भी लगभग उतनी ही चाहिए, हालांकि नींद के पैटर्न बदल सकते हैं।',
        'खराब नींद हृदय रोग, मधुमेह, वज़न बढ़ने, और कमज़ोर प्रतिरक्षा का जोखिम बढ़ा सकती है। यह मूड, एकाग्रता, और याददाश्त को भी प्रभावित करती है।',
        'अच्छी नींद की आदतों में रोज़ एक ही समय पर सोना और उठना, सोने से पहले स्क्रीन से बचना, बेडरूम को अंधेरा और ठंडा रखना, और शाम में कैफीन से बचना शामिल है।',
      ],
    },
    keyTakeaways: {
      en: [
        'Most adults need 7-9 hours of sleep',
        'Poor sleep increases health risks',
        'Keep a regular sleep schedule',
        'Avoid screens and caffeine before bed',
      ],
      hi: [
        'अधिकांश वयस्कों को 7-9 घंटे की नींद चाहिए',
        'खराब नींद स्वास्थ्य जोखिम बढ़ाती है',
        'नियमित नींद कार्यक्रम रखें',
        'सोने से पहले स्क्रीन और कैफीन से बचें',
      ],
    },
    myths: [
      {
        myth: { en: 'Older adults need less sleep.', hi: 'बुज़ुर्गों को कम नींद चाहिए।' },
        fact: { en: 'Older adults need about the same 7-9 hours. Sleep patterns may shift (waking earlier), but the total need does not decrease.', hi: 'बुज़ुर्गों को लगभग उतनी ही 7-9 घंटे की ज़रूरत होती है। नींद पैटर्न बदल सकते हैं (जल्दी उठना), लेकिन कुल ज़रूरत कम नहीं होती।' },
      },
    ],
    faqs: [
      {
        question: { en: 'What if I wake up in the middle of the night?', hi: 'यदि मैं रात में बीच में उठ जाऊं तो?' },
        answer: { en: 'Brief awakenings are normal. If you cannot fall back asleep within 20 minutes, get up and do something quiet in dim light until you feel sleepy. Avoid looking at your phone.', hi: 'छोटी जागृतियां सामान्य हैं। यदि आप 20 मिनट में फिर से सो नहीं पाएं, तो उठें और धुंधली रोशनी में कुछ शांत करें जब तक नींद न आए। फोन देखने से बचें।' },
      },
    ],
    sources: ['CDC — Sleep', 'National Sleep Foundation', 'Mayo Clinic — Sleep'],
    reviewedOn: '2026-09-05',
  },
  {
    id: 'hygiene-prevention',
    category: 'Hygiene & Disease Prevention',
    categoryHi: 'स्वच्छता और रोग निवारण',
    title: { en: 'Simple Hygiene Habits That Keep You Healthy', hi: 'सरल स्वच्छता आदतें जो आपको स्वस्थ रखती हैं' },
    summary: {
      en: 'Good hygiene is one of the easiest and most effective ways to prevent the spread of infections.',
      hi: 'अच्छी स्वच्छता संक्रमण के फैलाव को रोकने के सबसे आसान और प्रभावी तरीकों में से एक है।',
    },
    content: {
      en: [
        'Handwashing is the single most effective way to prevent the spread of germs. Wash your hands with soap and water for at least 20 seconds, especially before eating and after using the bathroom.',
        'Covering your mouth and nose when coughing or sneezing — with a tissue or your elbow — helps stop the spread of illnesses to others around you.',
        'Keeping your home clean, especially kitchens and bathrooms, reduces the risk of food poisoning and infections. Wash cutting boards and utensils after handling raw food.',
        'Safe food practices include cooking food thoroughly, storing it at the right temperature, and not eating food past its expiry date.',
      ],
      hi: [
        'हाथ धोना कीटाणुओं के फैलाव को रोकने का सबसे प्रभावी तरीका है। साबुन और पानी से कम से कम 20 सेकंड तक हाथ धोएं, खासकर खाने से पहले और बाथरूम उपयोग के बाद।',
        'खांसते या छींकते समय अपने मुंह और नाक को ढकना — टिश्यू या कोहनी से — आसपास के अन्य लोगों में बीमारियों के फैलाव को रोकने में मदद करता है।',
        'अपने घर को साफ़ रखना, खासकर रसोई और बाथरूम, खाद्य विषाक्तता और संक्रमण का जोखिम कम करता है। कच्चा खाना संभालने के बाद कटिंग बोर्ड और बर्तन धोएं।',
        'सुरक्षित खाद्य आदतों में खाना अच्छी तरह पकाना, सही तापमान पर स्टोर करना, और समाप्ति तिथि पार का खाना न खाना शामिल है।',
      ],
    },
    keyTakeaways: {
      en: [
        'Wash hands with soap for at least 20 seconds',
        'Cover coughs and sneezes with elbow or tissue',
        'Keep kitchens and bathrooms clean',
        'Cook food thoroughly and store it safely',
      ],
      hi: [
        'साबुन से कम से कम 20 सेकंड तक हाथ धोएं',
        'खांसी और छींक को कोहनी या टिश्यू से ढकें',
        'रसोई और बाथरूम को साफ़ रखें',
        'खाना अच्छी तरह पकाएं और सुरक्षित रूप से स्टोर करें',
      ],
    },
    myths: [
      {
        myth: { en: 'Antibacterial soap is always better than regular soap.', hi: 'एंटीबैक्टीरियल साबुन हमेशा सामान्य साबुन से बेहतर होता है।' },
        fact: { en: 'Regular soap and water are just as effective for everyday handwashing. Antibacterial soap is not necessary and may contribute to resistant bacteria.', hi: 'रोज़मर्रा के हाथ धोने के लिए सामान्य साबुन और पानी उतने ही प्रभावी हैं। एंटीबैक्टीरियल साबुन ज़रूरी नहीं और प्रतिरोधी बैक्टीरिया में योगदान दे सकता है।' },
      },
    ],
    faqs: [
      {
        question: { en: 'How long should I wash my hands?', hi: 'मुझे कितनी देर तक हाथ धोने चाहिए?' },
        answer: { en: 'Wash for at least 20 seconds — about the time it takes to hum the "Happy Birthday" song twice. Make sure to clean between fingers and under nails.', hi: 'कम से कम 20 सेकंड तक धोएं — लगभग उतना समय जितना "हैपी बर्थडे" गाना दो बार गुनगुनाने में लगता है। उंगलियों के बीच और नाखुन के नीचे साफ़ करना सुनिश्चित करें।' },
      },
    ],
    sources: ['WHO — Hand Hygiene', 'CDC — Handwashing', 'WHO — Food Safety'],
    reviewedOn: '2026-08-30',
  },
  {
    id: 'vaccination',
    category: 'Vaccination Awareness',
    categoryHi: 'टीकाकरण जागरूकता',
    title: { en: 'Vaccines: Protecting Yourself and Your Family', hi: 'टीके: अपनी और अपने परिवार की रक्षा' },
    summary: {
      en: 'Vaccines are one of the safest and most effective ways to prevent serious diseases.',
      hi: 'टीके गंभीर बीमारियों को रोकने के सबसे सुरक्षित और प्रभावी तरीकों में से एक हैं।',
    },
    content: {
      en: [
        'Vaccines train your body to fight diseases before they happen. They contain weakened or inactive parts of a germ that help your immune system recognize and fight the real disease in the future.',
        'Vaccines have saved millions of lives. Diseases like polio, measles, and tetanus are now rare in many places because of widespread vaccination.',
        'Children need vaccines on a schedule starting from birth. Adults also need vaccines — including annual flu shots, tetanus boosters, and vaccines recommended for older adults like pneumonia and shingles.',
        'Vaccines may cause mild side effects like a sore arm or slight fever for a day or two. Serious side effects are very rare. The protection they provide far outweighs the small risks.',
      ],
      hi: [
        'टीके आपके शरीर को बीमारियों से लड़ने के लिए उनसे पहले तैयार करते हैं। इनमें कीटाणु के कमज़ोर या निष्क्रिय हिस्से होते हैं जो आपकी रोग प्रतिरोधक प्रणाली को भविष्य में असली बीमारी को पहचानने और लड़ने में मदद करते हैं।',
        'टीकों ने लाखों जानें बचाई हैं। पोलियो, खसरा, और टेटनस जैसी बीमारियां अब कई जगहों पर दुर्लभ हैं क्योंकि व्यापक टीकाकरण के कारण।',
        'बच्चों को जन्म से एक कार्यक्रम पर टीकों की ज़रूरत होती है। वयस्कों को भी टीकों की ज़रूरत होती है — जिसमें वार्षिक फ्लू शॉट, टेटनस बूस्टर, और बुज़ुर्गों के लिए निमोनिया और शिंगल्स जैसे टीके शामिल हैं।',
        'टीकों से हल्के दुष्प्रभाव हो सकते हैं जैसे एक-दो दिन के लिए हाथ में दर्द या हल्का बुखार। गंभीर दुष्प्रभाव बहुत दुर्लभ हैं। वे जो सुरक्षा देते हैं, वह छोटे जोखिमों से कहीं अधिक है।',
      ],
    },
    keyTakeaways: {
      en: [
        'Vaccines train your immune system to fight diseases',
        'They have saved millions of lives',
        'Adults need vaccines too, not just children',
        'Side effects are usually mild and temporary',
      ],
      hi: [
        'टीके आपकी रोग प्रतिरोधक प्रणाली को बीमारियों से लड़ने के लिए प्रशिक्षित करते हैं',
        'इन्होंने लाखों जानें बचाई हैं',
        'वयस्कों को भी टीकों की ज़रूरत होती है, केवल बच्चों को नहीं',
        'दुष्प्रभाव आमतौर पर हल्के और अस्थायी होते हैं',
      ],
    },
    myths: [
      {
        myth: { en: 'Vaccines can cause the disease they are meant to prevent.', hi: 'टीके उस बीमारी को हो सकते हैं जिसे रोकने के लिए हैं।' },
        fact: { en: 'Most vaccines use killed or weakened germs that cannot cause the disease. Some people get mild symptoms as their immune system responds, but this is not the actual disease.', hi: 'अधिकांश टीके मारे हुए या कमज़ोर कीटाणुओं का उपयोग करते हैं जो बीमारी नहीं कर सकते। कुछ लोगों को हल्के लक्षण मिलते हैं जब उनकी रोग प्रतिरोधक प्रणाली प्रतिक्रिया करती है, लेकिन यह असली बीमारी नहीं है।' },
      },
    ],
    faqs: [
      {
        question: { en: 'Do adults really need vaccines?', hi: 'क्या वयस्कों को सच में टीकों की ज़रूरत होती है?' },
        answer: { en: 'Yes. Adults need tetanus boosters every 10 years, annual flu vaccines, and age-specific vaccines like pneumonia and shingles. Check with your doctor about what you need.', hi: 'हां। वयस्कों को हर 10 साल में टेटनस बूस्टर, वार्षिक फ्लू टीके, और उम्र-विशिष्ट टीके जैसे निमोनिया और शिंगल्स चाहिए। अपने डॉक्टर से जांचें कि आपको क्या चाहिए।' },
      },
    ],
    sources: ['WHO — Vaccines', 'CDC — Vaccines & Immunizations', 'Ministry of Health India — Immunization'],
    reviewedOn: '2026-09-20',
  },
  {
    id: 'first-aid',
    category: 'Basic First Aid',
    categoryHi: 'बुनियादी प्राथमिक चिकित्सा',
    title: { en: 'Basic First Aid Everyone Should Know', hi: 'बुनियादी प्राथमिक चिकित्सा जो हर किसी को पता होनी चाहिए' },
    summary: {
      en: 'Simple first aid steps for common situations. Remember: always call for emergency help first in serious situations.',
      hi: 'आम स्थितियों के लिए आसान प्राथमिक चिकित्सा कदम। याद रखें: गंभीर स्थितियों में हमेशा पहले आपातकाल सहायता बुलाएं।',
    },
    content: {
      en: [
        'First aid is the initial help you can give someone who is injured or suddenly ill before professional medical help arrives. Knowing the basics can save lives.',
        'For minor cuts and wounds: clean with clean water, apply gentle pressure with a clean cloth to stop bleeding, and cover with a clean bandage. Seek medical help for deep wounds or if bleeding does not stop.',
        'For burns: cool the burn under running water for at least 10 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean cloth. Seek help for large or deep burns.',
        'For fever: rest, drink fluids, and use a damp cloth on the forehead. Paracetamol can help reduce fever. Seek medical help if fever is very high or lasts more than 3 days.',
        'IMPORTANT: In any emergency — severe bleeding, difficulty breathing, chest pain, unconsciousness, or major injury — call your local emergency number (such as 108 in India) immediately.',
      ],
      hi: [
        'प्राथमिक चिकित्सा वह शुरुआती मदद है जो आप किसी घायल या अचानक बीमार व्यक्ति को पेशेवर चिकित्सकीय मदद आने से पहले दे सकते हैं। बुनियादी बातें जानना जान बचा सकता है।',
        'छोटे कट और घावों के लिए: साफ़ पानी से साफ़ करें, खून बहना रोकने के लिए साफ़ कपड़े से हल्का दबाव लगाएं, और साफ़ पट्टी से ढकें। गहरे घावों या यदि खून बहना न रुके तो चिकित्सकीय मदद लें।',
        'जलने के लिए: कम से कम 10 मिनट तक बहते पानी के नीचे ठंडा करें। बर्फ, मक्खन, या टूथपेस्ट न लगाएं। साफ़ कपड़े से ढीले ढंग से ढकें। बड़े या गहरे जलने के लिए मदद लें।',
        'बुखार के लिए: आराम करें, तरल पदार्थ पिएं, और माथे पर गीला कपड़ा रखें। पैरासिटामोल बुखार कम करने में मदद कर सकता है। यदि बुखार बहुत तेज़ हो या 3 दिन से ज़्यादा रहे तो चिकित्सकीय मदद लें।',
        'महत्वपूर्ण: किसी भी आपातकाल में — गंभीर खून बहना, सांस लेने में कठिनाई, छाती में दर्द, बेहोशी, या बड़ी चोट — तुरंत अपने स्थानीय आपातकाल नंबर (जैसे भारत में 108) पर कॉल करें।',
      ],
    },
    keyTakeaways: {
      en: [
        'In emergencies, call for help first',
        'Clean cuts with water and apply pressure',
        'Cool burns under running water for 10 minutes',
        'Rest and fluids help with fever',
      ],
      hi: [
        'आपातकाल में, पहले मदद बुलाएं',
        'कट को पानी से साफ़ करें और दबाव लगाएं',
        'जलने को 10 मिनट तक बहते पानी से ठंडा करें',
        'बुखार में आराम और तरल पदार्थ मदद करते हैं',
      ],
    },
    myths: [
      {
        myth: { en: 'Put butter or toothpaste on a burn.', hi: 'जलने पर मक्खन या टूथपेस्ट लगाएं।' },
        fact: { en: 'Never apply butter, toothpaste, or ice to a burn. These can trap heat and worsen the injury. Use only cool running water.', hi: 'जलने पर कभी मक्खन, टूथपेस्ट, या बर्फ न लगाएं। ये गर्मी को रोक सकते हैं और चोट को बढ़ा सकते हैं। केवल ठंडे बहते पानी का उपयोग करें।' },
      },
    ],
    faqs: [
      {
        question: { en: 'What is the emergency number in India?', hi: 'भारत में आपातकाल नंबर क्या है?' },
        answer: { en: 'The all-India emergency number is 108 for ambulance services. For general emergencies, you can also call 112. Learn your local emergency numbers and keep them handy.', hi: 'भारत का सभी आपातकाल नंबर एम्बुलेंस सेवाओं के लिए 108 है। सामान्य आपातकाल के लिए आप 112 भी कॉल कर सकते हैं। अपने स्थानीय आपातकाल नंबर सीखें और हाथ पर रखें।' },
      },
    ],
    sources: ['WHO — First Aid', 'Indian Red Cross — First Aid', 'Mayo Clinic — First Aid Guide'],
    reviewedOn: '2026-09-25',
  },
];

export function searchArticles(query: string): HealthArticle[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  return healthArticles.filter(
    (a) =>
      a.title.en.toLowerCase().includes(lower) ||
      a.title.hi.includes(query.trim()) ||
      a.category.toLowerCase().includes(lower) ||
      a.categoryHi.includes(query.trim()) ||
      a.summary.en.toLowerCase().includes(lower)
  );
}

export function getArticleById(id: string): HealthArticle | undefined {
  return healthArticles.find((a) => a.id === id);
}

export function getArticlesByCategory(category: string): HealthArticle[] {
  return healthArticles.filter((a) => a.category === category || a.categoryHi === category);
}

export const healthCategories = [
  'Diabetes Awareness',
  'Heart Health',
  'Nutrition',
  'Mental Wellbeing',
  'Healthy Aging',
  'Exercise & Physical Activity',
  'Sleep & Rest',
  'Hygiene & Disease Prevention',
  'Vaccination Awareness',
  'Basic First Aid',
];
