import type { DiseaseInfo } from '@/types';

export const diseases: DiseaseInfo[] = [
  {
    id: 'diabetes',
    name: 'Diabetes',
    nameHi: 'मधुमेह (डायबिटीज़)',
    category: 'metabolic',
    whatIs: {
      en: 'Diabetes is a condition where your blood sugar (glucose) levels are higher than normal. Your body either does not make enough insulin or cannot use it well. Insulin is a hormone that helps sugar enter your cells for energy.',
      hi: 'मधुमेह एक ऐसी स्थिति है जिसमें आपके रक्त में शर्करा (ग्लूकोज़) का स्तर सामान्य से अधिक हो जाता है। आपका शरीर या तो पर्याप्त इंसुलिन नहीं बनाता या उसका उपयोग ठीक से नहीं कर पाता। इंसुलिन एक हार्मोन है जो शर्करा को ऊर्जा के लिए कोशिकाओं में प्रवेश करने में मदद करता है।',
    },
    symptoms: {
      en: [
        'Feeling very thirsty and drinking lots of water',
        'Needing to urinate frequently, especially at night',
        'Feeling tired and low on energy',
        'Unexplained weight loss',
        'Blurry vision',
        'Cuts or wounds that heal slowly',
      ],
      hi: [
        'बहुत अधिक प्यास लगना और ज़्यादा पानी पीना',
        'बार-बार पेशाब आना, खासकर रात में',
        'थकान और कमज़ोरी महसूस होना',
        'बिना कारण वज़न घटना',
        'धुंधला दिखना',
        'घाव या कट जो देर से भरें',
      ],
    },
    causes: {
      en: [
        'Family history of diabetes',
        'Being overweight or having extra belly fat',
        'Not getting enough physical activity',
        'Eating too many sugary and processed foods',
        'Being over 40 years old',
        'Having had diabetes during pregnancy (gestational diabetes)',
      ],
      hi: [
        'परिवार में मधुमेह का इतिहास',
        'वज़न अधिक होना या पेट पर चर्बी',
        'शारीरिक गतिविधि की कमी',
        'मीठे और पैकेज्ड खाद्य पदार्थों का अधिक सेवन',
        '40 वर्ष से अधिक आयु',
        'गर्भावस्था के दौरान मधुमेह (गेस्टेशनल डायबिटीज़)',
      ],
    },
    prevention: {
      en: [
        'Eat a balanced diet with more vegetables, whole grains, and fewer sweets',
        'Stay active — walk for at least 30 minutes most days',
        'Maintain a healthy weight',
        'Get your blood sugar checked regularly if you are at risk',
        'Limit sugary drinks and processed snacks',
      ],
      hi: [
        'संतुलित आहार लें — ज़्यादा सब्ज़ियां, अनाज और कम मिठाई',
        'सक्रिय रहें — ज़्यादातर दिन कम से कम 30 मिनट टहलें',
        'स्वस्थ वज़न बनाए रखें',
        'यदि आप जोखिम में हैं तो नियमित रक्त शर्करा जांच कराएं',
        'मीठे पेय और पैकेज्ड नाश्ता सीमित करें',
      ],
    },
    management: {
      en: [
        'Take prescribed medicines on time as directed by your doctor',
        'Check your blood sugar as advised',
        'Eat meals at regular times and avoid skipping meals',
        'Stay physically active within your comfort level',
        'Check your feet regularly for cuts or sores',
        'Get regular eye and kidney check-ups',
      ],
      hi: [
        'डॉक्टर की सलाह अनुसार समय पर निर्धारित दवाएं लें',
        'सलाह अनुसार रक्त शर्करा जांचें',
        'नियमित समय पर भोजन करें और भोजन न छोड़ें',
        'अपनी सहजता के अनुसार शारीरिक रूप से सक्रिय रहें',
        'नियमित रूप से पैरों में कट या घाव की जांच करें',
        'नियमित आंख और किडनी जांच कराएं',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If you notice symptoms like excessive thirst, frequent urination, or unexplained tiredness',
        'If your blood sugar readings are consistently higher or lower than your target',
        'For regular check-ups every 3 to 6 months',
        'Before making any changes to your diet or medicines',
      ],
      hi: [
        'यदि आपको अत्यधिक प्यास, बार-बार पेशाब, या बिना कारण थकान जैसे लक्षण दिखें',
        'यदि आपका रक्त शर्करा लगातार लक्ष्य से अधिक या कम रहे',
        'हर 3 से 6 महीने में नियमित जांच के लिए',
        'आहार या दवाओं में कोई बदलाव करने से पहले',
      ],
    },
    emergencySigns: {
      en: [
        'Very high blood sugar with confusion or extreme drowsiness',
        'Difficulty breathing or chest pain',
        'Severe vomiting that prevents keeping fluids down',
        'Blood sugar below 70 mg/dL that does not improve after eating sugar',
        'Fainting or loss of consciousness',
      ],
      hi: [
        'बहुत अधिक रक्त शर्करा के साथ भ्रम या अत्यधिक नींद',
        'सांस लेने में कठिनाई या छाती में दर्द',
        'गंभीर उल्टी जिससे तरल पदार्थ नीचे न रहे',
        '70 mg/dL से कम रक्त शर्करा जो मीठा खाने के बाद भी न सुधरे',
        'बेहोशी या होश खोना',
      ],
    },
    sources: [
      'World Health Organization — Diabetes',
      'CDC — Diabetes Basics',
      'Mayo Clinic — Diabetes',
    ],
  },
  {
    id: 'hypertension',
    name: 'Hypertension',
    nameHi: 'उच्च रक्तचाप (ब्लड प्रेशर)',
    category: 'cardiovascular',
    whatIs: {
      en: 'Hypertension, also called high blood pressure, is when the force of blood against your blood vessel walls is consistently too high. It often has no symptoms but can damage your heart, kidneys, and brain over time if left untreated.',
      hi: 'उच्च रक्तचाप, जिसे हाई ब्लड प्रेशर भी कहते हैं, तब होता है जब आपकी रक्त वाहिकाओं की दीवारों पर रक्त का दबाव लगातार बहुत अधिक रहता है। इसके अक्सर कोई लक्षण नहीं होते, लेकिन इलाज न कराने पर यह समय के साथ आपके हृदय, गुर्दे और दिमाग को नुकसान पहुंचा सकता है।',
    },
    symptoms: {
      en: [
        'Often no symptoms at all — that is why it is called the "silent killer"',
        'Some people may experience headaches',
        'Dizziness or lightheadedness',
        'Shortness of breath',
        'Nosebleeds (in some cases)',
        'Blurred vision',
      ],
      hi: [
        'अक्सर कोई लक्षण नहीं होता — इसीलिए इसे "साइलेंट किलर" कहते हैं',
        'कुछ लोगों को सिरदर्द हो सकता है',
        'चक्कर या हल्कापन',
        'सांस फूलना',
        'नाक से खून आना (कुछ मामलों में)',
        'धुंधला दिखना',
      ],
    },
    causes: {
      en: [
        'Family history of high blood pressure',
        'Being overweight or obese',
        'Eating too much salt (sodium)',
        'Not enough physical activity',
        'Smoking or chewing tobacco',
        'Drinking too much alcohol',
        'Stress that lasts a long time',
        'Kidney disease or thyroid problems',
      ],
      hi: [
        'परिवार में उच्च रक्तचाप का इतिहास',
        'अधिक वज़न या मोटापा',
        'बहुत अधिक नमक (सोडियम) खाना',
        'शारीरिक गतिविधि की कमी',
        'धूम्रपान या तंबाकू चबाना',
        'बहुत अधिक शराब पीना',
        'लंबे समय तक तनाव',
        'किडनी रोग या थायरॉयड समस्याएं',
      ],
    },
    prevention: {
      en: [
        'Reduce salt in your cooking and avoid salty snacks',
        'Eat more fruits, vegetables, and low-fat dairy',
        'Maintain a healthy weight',
        'Exercise regularly, like walking 30 minutes a day',
        'Limit alcohol and avoid smoking',
        'Manage stress with relaxation or breathing exercises',
        'Get your blood pressure checked regularly',
      ],
      hi: [
        'खाने में नमक कम करें और नमकीन नाश्ता से बचें',
        'ज़्यादा फल, सब्ज़ियां और कम वसा वाले डेयरी उत्पाद खाएं',
        'स्वस्थ वज़न बनाए रखें',
        'नियमित व्यायाम करें, जैसे रोज़ 30 मिनट टहलना',
        'शराब सीमित करें और धूम्रपान से बचें',
        'विश्राम या श्वास व्यायाम से तनाव प्रबंधित करें',
        'नियमित रूप से ब्लड प्रेशर जांच कराएं',
      ],
    },
    management: {
      en: [
        'Take blood pressure medicines exactly as prescribed — do not stop on your own',
        'Check your blood pressure at home if advised',
        'Keep a record of your readings',
        'Continue healthy eating and exercise habits',
        'Limit salt and processed foods',
        'Attend all follow-up appointments',
      ],
      hi: [
        'ब्लड प्रेशर की दवाएं ठीक वैसे ही लें जैसे बताई गई हैं — अपने आप बंद न करें',
        'सलाह अनुसार घर पर ब्लड प्रेशर जांचें',
        'अपनी रीडिंग का रिकॉर्ड रखें',
        'स्वस्थ खाने और व्यायाम की आदतें जारी रखें',
        'नमक और पैकेज्ड खाद्य पदार्थ सीमित करें',
        'सभी फॉलो-अप अपॉइंटमेंट में जाएं',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If your blood pressure is consistently 140/90 or higher',
        'If you experience severe headaches, chest pain, or vision changes',
        'For regular monitoring every 3 to 6 months',
        'If you feel dizzy or faint after starting new medicines',
      ],
      hi: [
        'यदि आपका ब्लड प्रेशर लगातार 140/90 या अधिक रहे',
        'यदि गंभीर सिरदर्द, छाती में दर्द, या दृष्टि में बदलाव महसूस हो',
        'हर 3 से 6 महीने में नियमित निगरानी के लिए',
        'यदि नई दवा शुरू करने के बाद चक्कर या हल्कापन महसूस हो',
      ],
    },
    emergencySigns: {
      en: [
        'Blood pressure 180/120 or higher with symptoms',
        'Severe chest pain or pressure',
        'Sudden numbness or weakness in face, arm, or leg',
        'Sudden difficulty speaking or understanding speech',
        'Severe headache with no known cause',
      ],
      hi: [
        'ब्लड प्रेशर 180/120 या अधिक लक्षणों के साथ',
        'गंभीर छाती में दर्द या दबाव',
        'चेहरे, हाथ या पैर में अचानक सुन्नता या कमज़ोरी',
        'बोलने या समझने में अचानक कठिनाई',
        'बिना कारण गंभीर सिरदर्द',
      ],
    },
    sources: [
      'World Health Organization — Hypertension',
      'American Heart Association — High Blood Pressure',
      'Mayo Clinic — High Blood Pressure',
    ],
  },
  {
    id: 'asthma',
    name: 'Asthma',
    nameHi: 'अस्थमा (दमा)',
    category: 'respiratory',
    whatIs: {
      en: 'Asthma is a condition where your airways become narrow and swollen, making it difficult to breathe. It often comes in episodes or "attacks" triggered by things like dust, pollen, cold air, or exercise. It can affect people of all ages.',
      hi: 'अस्थमा एक ऐसी स्थिति है जिसमें आपकी श्वास नलियां संकुचित और सूजी हुई हो जाती हैं, जिससे सांस लेना कठिन हो जाता है। यह अक्सर धूल, पराग, ठंडी हवा, या व्यायाम जैसी चीज़ों से "अटैक" के रूप में आता है। यह किसी भी उम्र के लोगों को प्रभावित कर सकता है।',
    },
    symptoms: {
      en: [
        'Wheezing (a whistling sound when breathing)',
        'Shortness of breath',
        'Chest tightness or pain',
        'Coughing, especially at night or early morning',
        'Trouble sleeping due to breathing problems',
      ],
      hi: [
        'घरघराहट (सांस लेते समय सीटी जैसी आवाज़)',
        'सांस फूलना',
        'छाती में जकड़न या दर्द',
        'खांसी, खासकर रात या सुबह-सुबह',
        'सांस की समस्या से नींद न आना',
      ],
    },
    causes: {
      en: [
        'Family history of asthma or allergies',
        'Exposure to dust, pollen, pet hair, or mold',
        'Air pollution and smoke',
        'Respiratory infections like colds or flu',
        'Cold weather or sudden temperature changes',
        'Physical exercise (especially in cold air)',
        'Strong emotions or stress',
      ],
      hi: [
        'परिवार में अस्थमा या एलर्जी का इतिहास',
        'धूल, पराग, पालतू जानवरों के बाल, या फफूंद का संपर्क',
        'वायु प्रदूषण और धुआं',
        'जुकाम या फ्लू जैसे श्वसन संक्रमण',
        'ठंडा मौसम या तापमान में अचानक बदलाव',
        'शारीरिक व्यायाम (विशेषकर ठंडी हवा में)',
        'तेज़ भावनाएं या तनाव',
      ],
    },
    prevention: {
      en: [
        'Identify and avoid your triggers (dust, pollen, smoke, etc.)',
        'Keep your home clean and dust-free',
        'Use a pillow and mattress cover to reduce dust mites',
        'Avoid smoking and secondhand smoke',
        'Get your annual flu vaccine',
        'Follow your doctor\'s asthma action plan',
      ],
      hi: [
        'अपने ट्रिगर को पहचानें और बचें (धूल, पराग, धुआं, आदि)',
        'अपने घर को साफ़ और धूल मुक्त रखें',
        'धूल के कणों से बचने के लिए तकिया और गद्दे का कवर इस्तेमाल करें',
        'धूम्रपान और दूसरों के धुएं से बचें',
        'हर साल फ्लू वैक्सीन लगवाएं',
        'अपने डॉक्टर की अस्थमा एक्शन प्लान का पालन करें',
      ],
    },
    management: {
      en: [
        'Use your inhaler medicines as prescribed by your doctor',
        'Always carry your rescue inhaler with you',
        'Learn to recognize early signs of an asthma attack',
        'Use a peak flow meter if advised',
        'Avoid known triggers whenever possible',
        'Keep your rescue inhaler within reach',
      ],
      hi: [
        'डॉक्टर द्वारा बताई गई इनहेलर दवाएं उपयोग करें',
        'अपना रेस्क्यू इनहेलर हमेशा साथ रखें',
        'अस्थमा अटैक के शुरुआती संकेत पहचानना सीखें',
        'सलाह अनुसार पीक फ्लो मीटर का उपयोग करें',
        'ज्ञात ट्रिगर से जहां तक संभव हो बचें',
        'अपना रेस्क्यू इनहेलर हाथ की पहुंच में रखें',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If you are using your rescue inhaler more than twice a week',
        'If your symptoms wake you up at night',
        'If your usual medicines do not relieve symptoms',
        'For regular check-ups every 6 to 12 months',
      ],
      hi: [
        'यदि आप अपना रेस्क्यू इनहेलर सप्ताह में दो बार से ज़्यादा उपयोग कर रहे हैं',
        'यदि लक्षण रात में आपको जगाते हैं',
        'यदि आपकी नियमित दवाएं लक्षणों से राहत न दें',
        'हर 6 से 12 महीने में नियमित जांच के लिए',
      ],
    },
    emergencySigns: {
      en: [
        'Severe difficulty breathing or cannot speak in full sentences',
        'Lips or fingernails turning blue or gray',
        'No improvement after using rescue inhaler',
        'Chest retractions (skin pulling in around ribs when breathing)',
        'Confusion or extreme drowsiness',
      ],
      hi: [
        'सांस लेने में गंभीर कठिनाई या पूरे वाक्य न बोल पाना',
        'होंठ या नाखुन नीले या भूरे होना',
        'रेस्क्यू इनहेलर उपयोग के बाद भी सुधार न हो',
        'छाती में खिंचाव (सांस लेते समय पसलियों के आसपास त्वचा खिंचना)',
        'भ्रम या अत्यधिक नींद',
      ],
    },
    sources: [
      'World Health Organization — Asthma',
      'CDC — Asthma',
      'Mayo Clinic — Asthma',
    ],
  },
  {
    id: 'malaria',
    name: 'Malaria',
    nameHi: 'मलेरिया',
    category: 'infectious',
    whatIs: {
      en: 'Malaria is a disease caused by parasites that enter your body through the bite of an infected mosquito. It is common in tropical and warm regions. It causes fever, chills, and flu-like symptoms and can be serious if not treated.',
      hi: 'मलेरिया एक बीमारी है जो संक्रमित मच्छर के काटने से शरीर में परजीवी के प्रवेश के कारण होती है। यह गर्म और उष्णकटिबंधीय क्षेत्रों में आम है। इससे बुखार, सिहरन और फ्लू जैसे लक्षण होते हैं और इलाज न कराने पर गंभीर हो सकता है।',
    },
    symptoms: {
      en: [
        'High fever with chills',
        'Sweating after fever episodes',
        'Headache',
        'Nausea and vomiting',
        'Body aches and weakness',
        'Symptoms often come in cycles (fever, chills, sweat)',
      ],
      hi: [
        'सिहरन के साथ तेज़ बुखार',
        'बुखार के बाद पसीना आना',
        'सिरदर्द',
        'जी मिचलाना और उल्टी',
        'शरीर में दर्द और कमज़ोरी',
        'लक्षण अक्सर चक्र में आते हैं (बुखार, सिहरन, पसीना)',
      ],
    },
    causes: {
      en: [
        'Bite of an infected Anopheles mosquito',
        'Living in or traveling to areas where malaria is common',
        'Not using mosquito protection (nets, repellents)',
        'Stagnant water around the home that allows mosquitoes to breed',
      ],
      hi: [
        'संक्रमित एनोफिलीज़ मच्छर का काटना',
        'मलेरिया के आम क्षेत्रों में रहना या यात्रा करना',
        'मच्छर सुरक्षा (जाल, रिपेलेंट) का उपयोग न करना',
        'घर के पास ठहरा हुआ पानी जहां मच्छर पनप सकें',
      ],
    },
    prevention: {
      en: [
        'Sleep under insecticide-treated mosquito nets',
        'Use mosquito repellent on exposed skin',
        'Wear long-sleeved clothing, especially in the evening',
        'Remove stagnant water around your home',
        'Use window and door screens',
        'Take preventive medicines if traveling to high-risk areas (as advised by a doctor)',
      ],
      hi: [
        'कीटनाशक उपचारित मच्छर जाल के नीचे सोएं',
        'खुली त्वचा पर मच्छर रिपेलेंट लगाएं',
        'लंबी बाजू वाले कपड़े पहनें, खासकर शाम को',
        'घर के आसपास ठहरे हुए पानी को हटाएं',
        'खिड़की और दरवाज़े के जाल का उपयोग करें',
        'उच्च जोखिम वाले क्षेत्रों में यात्रा करते समय रोकथाम की दवाएं लें (डॉक्टर की सलाह अनुसार)',
      ],
    },
    management: {
      en: [
        'Seek medical treatment promptly — malaria needs prescription medicines',
        'Take all prescribed medicines completely, even if you feel better',
        'Rest and drink plenty of fluids',
        'Use a cool cloth for fever comfort',
        'Do not self-medicate — always consult a healthcare professional',
      ],
      hi: [
        'तुरंत चिकित्सकीय इलाज लें — मलेरिया के लिए प्रिस्क्रिप्शन दवाएं ज़रूरी हैं',
        'सारी निर्धारित दवाएं पूरी लें, भले ही आप बेहतर महसूस करें',
        'आराम करें और बहुत तरल पदार्थ पिएं',
        'बुखार से राहत के लिए ठंडे कपड़े का उपयोग करें',
        'स्वयं दवा न लें — हमेशा चिकित्सक से परामर्श लें',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If you have fever with chills, especially after visiting a malaria-prone area',
        'If symptoms do not improve after 2 days of treatment',
        'If you experience severe weakness, jaundice, or dark urine',
        'Immediately for young children, pregnant women, or elderly with fever',
      ],
      hi: [
        'यदि आपको सिहरन के साथ बुखार हो, खासकर मलेरिया-प्रवण क्षेत्र की यात्रा के बाद',
        'यदि इलाज के 2 दिन बाद भी लक्षण न सुधरें',
        'यदि गंभीर कमज़ोरी, पीलिया, या गहरे रंग का पेशाब हो',
        'बच्चों, गर्भवती महिलाओं, या बुज़ुर्गों में तुरंत बुखार होने पर',
      ],
    },
    emergencySigns: {
      en: [
        'Very high fever with confusion or seizures',
        'Difficulty breathing',
        'Severe vomiting unable to keep anything down',
        'Dark or red urine (sign of kidney damage)',
        'Bleeding or bruising easily',
        'Loss of consciousness',
      ],
      hi: [
        'बहुत तेज़ बुखार के साथ भ्रम या दौरे',
        'सांस लेने में कठिनाई',
        'गंभीर उल्टी जिसमें कुछ नीचे न रहे',
        'गहरे या लाल रंग का पेशाब (किडनी क्षति का संकेत)',
        'आसानी से खून बहना या नील पड़ना',
        'होश खोना',
      ],
    },
    sources: [
      'World Health Organization — Malaria',
      'CDC — Malaria',
      'NHS — Malaria',
    ],
  },
  {
    id: 'thyroid',
    name: 'Thyroid Disorders',
    nameHi: 'थायरॉयड विकार',
    category: 'endocrine',
    whatIs: {
      en: 'Thyroid disorders occur when your thyroid gland — a small butterfly-shaped gland in your neck — makes either too much or too little thyroid hormone. Too little is called hypothyroidism, and too much is called hyperthyroidism. These hormones control how your body uses energy.',
      hi: 'थायरॉयड विकार तब होता है जब आपकी थायरॉइड ग्रंथि — गर्दन में एक छोटी तितली के आकार की ग्रंथि — बहुत अधिक या बहुत कम थायरॉइड हार्मोन बनाती है। बहुत कम को हाइपोथायरायडिज्म और बहुत अधिक को हाइपरथायरायडिज्म कहते हैं। ये हार्मोन आपके शरीर के ऊर्जा उपयोग को नियंत्रित करते हैं।',
    },
    symptoms: {
      en: [
        'Hypothyroidism (low): tiredness, weight gain, feeling cold, dry skin, hair loss',
        'Hyperthyroidism (high): rapid heartbeat, weight loss, feeling hot, anxiety',
        'Swelling or lump in the neck',
        'Changes in menstrual periods',
        'Mood changes or difficulty concentrating',
        'Muscle weakness or joint pain',
      ],
      hi: [
        'हाइपोथायरायडिज्म (कम): थकान, वज़न बढ़ना, ठंड लगना, रूखी त्वचा, बाल झड़ना',
        'हाइपरथायरायडिज्म (अधिक): तेज़ दिल की धड़कन, वज़न घटना, गर्म लगना, घबराहट',
        'गर्दन में सूजन या गांठ',
        'मासिक धर्म में बदलाव',
        'मूड में बदलाव या ध्यान केंद्रित करने में कठिनाई',
        'मांसपेशियों में कमज़ोरी या जोड़ों में दर्द',
      ],
    },
    causes: {
      en: [
        'Autoimmune conditions (Hashimoto\'s or Graves\' disease)',
        'Family history of thyroid problems',
        'Iodine deficiency or excess',
        'Certain medicines',
        'Pregnancy (in some cases)',
        'Radiation treatment to the neck area',
      ],
      hi: [
        'ऑटोइम्यून स्थितियां (हाशिमोटो या ग्रेव्स रोग)',
        'परिवार में थायरॉइड समस्याओं का इतिहास',
        'आयोडीन की कमी या अधिकता',
        'कुछ दवाएं',
        'गर्भावस्था (कुछ मामलों में)',
        'गर्दन के क्षेत्र में विकिरण इलाज',
      ],
    },
    prevention: {
      en: [
        'Use iodized salt in cooking',
        'Get thyroid levels checked if you have a family history',
        'Maintain a balanced diet',
        'Report any neck swelling to your doctor promptly',
        'Attend regular check-ups during pregnancy',
      ],
      hi: [
        'खाना बनाने में आयोडीन युक्त नमक का उपयोग करें',
        'यदि परिवार में इतिहास है तो थायरॉइड जांच कराएं',
        'संतुलित आहार बनाए रखें',
        'गर्दन में कोई सूजन दिखे तो तुरंत डॉक्टर को बताएं',
        'गर्भावस्था के दौरान नियमित जांच कराएं',
      ],
    },
    management: {
      en: [
        'Take thyroid medicines exactly as prescribed — same time each day',
        'Do not stop medicines without your doctor\'s advice',
        'Get thyroid levels checked as recommended (usually every 6-12 months)',
        'Inform your doctor if you become pregnant',
        'Avoid taking thyroid medicine with calcium or iron supplements',
      ],
      hi: [
        'थायरॉइड दवाएं ठीक वैसे ही लें — हर दिन एक ही समय पर',
        'डॉक्टर की सलाह के बिना दवाएं न रोकें',
        'सिफारिश के अनुसार थायरॉइड स्तर जांचें (आमतौर पर हर 6-12 महीने)',
        'गर्भवती होने पर अपने डॉक्टर को बताएं',
        'थायरॉइड दवा को कैल्शियम या आयरन की दवा के साथ न लें',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If you notice symptoms of over- or under-active thyroid',
        'If you feel a lump or swelling in your neck',
        'If you are planning a pregnancy or become pregnant',
        'For regular monitoring if already diagnosed',
      ],
      hi: [
        'यदि आपको अधिक या कम सक्रिय थायरॉइड के लक्षण दिखें',
        'यदि आपको गर्दन में गांठ या सूजन महसूस हो',
        'यदि आप गर्भधारण की योजना बना रही हैं या गर्भवती हो जाएं',
        'पहले से निदान होने पर नियमित निगरानी के लिए',
      ],
    },
    emergencySigns: {
      en: [
        'Very rapid or irregular heartbeat with chest pain',
        'Extremely high fever with confusion (thyroid storm)',
        'Severe weakness or lethargy with very low temperature',
        'Difficulty breathing',
        'Fainting',
      ],
      hi: [
        'छाती में दर्द के साथ बहुत तेज़ या अनियमित दिल की धड़कन',
        'भ्रम के साथ बहुत तेज़ बुखार (थायरॉइड स्टॉर्म)',
        'बहुत कम तापमान के साथ गंभीर कमज़ोरी या सुस्ती',
        'सांस लेने में कठिनाई',
        'बेहोशी',
      ],
    },
    sources: [
      'Mayo Clinic — Hypothyroidism',
      'Mayo Clinic — Hyperthyroidism',
      'American Thyroid Association',
    ],
  },
  {
    id: 'dengue',
    name: 'Dengue',
    nameHi: 'डेंगू',
    category: 'infectious',
    whatIs: {
      en: 'Dengue is a viral infection spread by the bite of an infected Aedes mosquito. It causes high fever, severe headache, and body pain. In severe cases, it can cause bleeding and low blood pressure, which needs urgent medical care.',
      hi: 'डेंगू एक वायरल संक्रमण है जो संक्रमित एडीज़ मच्छर के काटने से फैलता है। इससे तेज़ बुखार, गंभीर सिरदर्द और शरीर में दर्द होता है। गंभीर मामलों में, यह रक्तस्राव और निम्न रक्तचाप का कारण बन सकता है, जिसके लिए तत्काल चिकित्सकीय देखभाल ज़रूरी है।',
    },
    symptoms: {
      en: [
        'Sudden high fever (up to 104°F / 40°C)',
        'Severe headache, especially behind the eyes',
        'Severe muscle and joint pain ("breakbone fever")',
        'Nausea and vomiting',
        'Skin rash appearing 2-5 days after fever',
        'Mild bleeding (nose, gums, or easy bruising)',
      ],
      hi: [
        'अचानक तेज़ बुखार (104°F / 40°C तक)',
        'गंभीर सिरदर्द, खासकर आंखों के पीछे',
        'गंभीर मांसपेशी और जोड़ों में दर्द ("ब्रेकबोन फीवर")',
        'जी मिचलाना और उल्टी',
        'बुखार के 2-5 दिन बाद त्वचा पर चकत्ते',
        'हल्का खून बहना (नाक, मसूड़े, या आसानी से नील पड़ना)',
      ],
    },
    causes: {
      en: [
        'Bite of an infected Aedes aegypti mosquito',
        'Mosquitoes that breed in clean, stagnant water',
        'Most active during early morning and late afternoon',
        'Living in or traveling to tropical and subtropical areas',
      ],
      hi: [
        'संक्रमित एडीज़ एजिप्टी मच्छर का काटना',
        'साफ़, ठहरे हुए पानी में पनपने वाले मच्छर',
        'सुबह जल्दी और देर दोपहर में सबसे सक्रिय',
        'उष्णकटिबंधीय और उपोष्णकटिबंधीय क्षेत्रों में रहना या यात्रा करना',
      ],
    },
    prevention: {
      en: [
        'Remove stagnant water from pots, buckets, and containers',
        'Use mosquito repellents',
        'Wear full-sleeved clothing',
        'Use mosquito nets while sleeping',
        'Keep windows and doors closed or screened',
        'Support community mosquito control programs',
      ],
      hi: [
        'गमलों, बाल्टियों और बर्तनों से ठहरा पानी हटाएं',
        'मच्छर रिपेलेंट का उपयोग करें',
        'पूरी बाजू वाले कपड़े पहनें',
        'सोते समय मच्छर जाल का उपयोग करें',
        'खिड़की और दरवाज़े बंद रखें या जाल लगाएं',
        'सामुदायिक मच्छर नियंत्रण कार्यक्रमों में भाग लें',
      ],
    },
    management: {
      en: [
        'See a doctor promptly for proper diagnosis and monitoring',
        'Drink plenty of fluids (water, ORS, coconut water)',
        'Rest completely',
        'Use paracetamol for fever as advised by your doctor',
        'Do NOT take aspirin or ibuprofen — they can increase bleeding risk',
        'Monitor for warning signs daily',
      ],
      hi: [
        'उचित निदान और निगरानी के लिए तुरंत डॉक्टर को दिखाएं',
        'बहुत तरल पदार्थ पिएं (पानी, ORS, नारियल पानी)',
        'पूरी तरह आराम करें',
        'डॉक्टर की सलाह अनुसार बुखार के लिए पैरासिटामोल लें',
        'एस्पिरिन या आइबुप्रोफेन न लें — ये रक्तस्राव का जोखिम बढ़ा सकते हैं',
        'हर दिन चेतावनी संकेतों की निगरानी करें',
      ],
    },
    whenToSeeDoctor: {
      en: [
        'If you have sudden high fever with body pain',
        'If fever does not come down after 2-3 days',
        'If you notice any bleeding, rash, or abdominal pain',
        'If you feel extremely weak or dizzy',
      ],
      hi: [
        'यदि आपको अचानक तेज़ बुखार शरीर में दर्द के साथ हो',
        'यदि 2-3 दिन बाद बुखार न उतरे',
        'यदि खून बहना, चकत्ते, या पेट में दर्द दिखे',
        'यदि आप बहुत कमज़ोर या चक्कर खाएं',
      ],
    },
    emergencySigns: {
      en: [
        'Severe abdominal pain or persistent vomiting',
        'Bleeding from gums, nose, or in vomit/stool',
        'Difficulty breathing',
        'Cold, clammy skin with low blood pressure',
        'Extreme weakness, restlessness, or confusion',
        'Blood in vomit or black stools',
      ],
      hi: [
        'गंभीर पेट दर्द या लगातार उल्टी',
        'मसूड़ों, नाक से खून, या उल्टी/मल में खून',
        'सांस लेने में कठिनाई',
        'ठंडी, गीली त्वचा के साथ निम्न रक्तचाप',
        'अत्यधिक कमज़ोरी, बेचैनी, या भ्रम',
        'उल्टी में खून या काले मल',
      ],
    },
    sources: [
      'World Health Organization — Dengue',
      'CDC — Dengue',
      'NHS — Dengue',
    ],
  },
];

export function searchDiseases(query: string): DiseaseInfo[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  return diseases.filter(
    (d) =>
      d.name.toLowerCase().includes(lower) ||
      d.nameHi.includes(query.trim()) ||
      d.id.includes(lower)
  );
}

export function getDiseaseById(id: string): DiseaseInfo | undefined {
  return diseases.find((d) => d.id === id);
}
