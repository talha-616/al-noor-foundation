import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav_home": "Home",
      "nav_weddings": "Weddings",
      "nav_medical": "Medical Camps",
      "nav_flood": "Flood Relief",
      "nav_water": "Water Sabeel",
      "nav_education": "Education",
      "nav_islamic": "Islamic Programs",
      "nav_members": "Members",
      "nav_donate": "Donate Us",
      
      // Global
      "btn_donate": "Donate Now",
      "btn_learn": "Read More",
      "hero_title": "Al Noor Foundation",
      "hero_subtitle": "Phool Nagar",
      "hero_desc": "Dedicated to humanity. Serving the underprivileged with mass marriages, healthcare, disaster relief, and Islamic education for a better tomorrow.",
      "contact_numbers": "Contact: 0333-2847705 | 0333-4531260 | 0331-4859523",
      "president": "Dr. Muhammad Umer",
      "footer_text": "© 2026 Al Noor Foundation Phool Nagar. All Rights Reserved.",

      // Home Page Sections
      "about_title": "About Us",
      "about_desc": "Al Noor Foundation has been working for many years to bring light and hope into the lives of the needy. Led by Dr. Muhammad Umer and Dr. Basharat Ali, our mission is to empower communities and alleviate suffering through sustained, impactful initiatives. We believe in serving humanity as a core principle of faith.",
      "services_title": "Our Impact & Services",
      "stats_title": "Our Journey in Numbers",
      "gallery_title": "Glimpses of Our Work",
      "contact_title": "Get In Touch",
      "contact_desc": "Join us in our mission. Your support can change lives.",

      // Home Services Briefs
      "service_weddings": "Collective Marriages & Dowry",
      "service_weddings_desc": "Organizing marriages for poor girls every year and providing complete dowry (Jahez).",
      "service_medical": "Free Medical Camps",
      "service_medical_desc": "Arranging general and eye medical camps for the deserving individuals.",
      "service_flood": "Flood Relief",
      "service_flood_desc": "Providing relief and essential supplies to flood victims.",
      "service_water": "Water Sabeel",
      "service_water_desc": "Continuous provision of clean and cold drinking water stations.",
      "service_education": "Women's Training",
      "service_education_desc": "Organizing 10 to 15-day special Islamic educational programs.",
      "service_islamic": "Islamic Programs",
      "service_islamic_desc": "Hosting humanity reform conferences and performance reports.",
      "stat_lbl_weddings": "Weddings in",

      // Page: Weddings
      "page_weddings_title": "Collective Marriages & Dowry Provision",
      "page_weddings_content1": "Every year, Al Noor Foundation takes the profound responsibility of arranging marriages for orphaned and deserving girls in Phool Nagar. We understand that the financial burden of marriage and dowry (Jahez) prevents many impoverished families from settling their daughters. Through our 'Ijtamai Shadian' (Collective Marriages) program, we bear all the expenses.",
      "page_weddings_content2": "We provide essential household items, furniture, utensils, and clothing as Jahez (Dowry), allowing the newlywed couples to start their lives with dignity and ease. In 2026, we are aiming to support over 30 marriages, continuing a legacy that has grown from 10 marriages in 2017 to dozens annually. All catering, Nikah arrangements, and guest hospitalities are handled entirely by the Foundation 'Fi Sabilillah' (for the sake of Allah).",
      "page_weddings_content3": "Our thorough verification process ensures that this assistance reaches the most vulnerable families who genuinely have no means to manage these heavy expenses. We do not just provide material goods; we aim to uplift their spirits and remove the immense societal pressure that falls on poor parents.",
      "page_weddings_content4": "The success of these mass marriages is made possible by our dedicated donors, from local community members to international supporters in the USA and beyond. As we look towards the future, our goal is to scale this initiative, ensuring that no daughter in our community is left waiting due to financial constraints.",

      // Page: Medical Camps
      "page_medical_title": "Free Medical & Eye Camps",
      "page_medical_content1": "Access to quality healthcare is a fundamental human right, yet many in our community cannot afford basic medical consultations or treatments. Al Noor Foundation regularly organizes Free Medical Camps to bridge this gap.",
      "page_medical_content2": "Our specialized camps include General Physician checks, Eye Care (vision tests and free glasses), and distribution of essential medicines. Dedicated doctors and volunteers work tirelessly to screen hundreds of patients in a single day, ensuring that the poor and elderly receive the care they desperately need without any financial burden.",

      // Page: Flood Relief
      "page_flood_title": "Flood Relief & Ration Distribution",
      "page_flood_content1": "Natural disasters leave widespread devastation, often affecting the poorest the most. During recent floods and the COVID-19 pandemic, Al Noor Foundation stood on the frontlines to provide immediate relief.",
      "page_flood_content2": "We distributed ration bags containing flour, rice, cooking oil, lentils, and other staples to hundreds of affected families. Our disaster relief teams work in remote and heavily impacted areas to deliver not just food, but hope, ensuring that no family goes to sleep hungry during times of crisis.",

      // Page: Water Sabeel
      "page_water_title": "Sweet Water Sabeel",
      "page_water_content1": "Providing water to the thirsty is considered one of the highest forms of charity (Sadaqah Jariyah) in Islam. Recognizing the scarcity of clean drinking water during harsh summers, we have established multiple 'Meethe Pani ki Sabeel' (Sweet Water Stations).",
      "page_water_content2": "These stations operate continuously, offering cold, purified, and sweet water to travelers, laborers, and the general public. It is a simple yet profoundly impactful service that refreshes thousands of people daily.",

      // Page: Education
      "page_education_title": "Women's Islamic Training Programs",
      "page_education_content1": "Empowering women with spiritual and practical knowledge is key to building a strong, moral society. During the first 10 to 15 days of Ramadan, Al Noor Foundation hosts an intensive 'Tarbiyyati Program' (Training Program) exclusively for women.",
      "page_education_content2": "Under the guidance of qualified female scholars, participants are taught Quranic recitation, Tafseer, basic Islamic jurisprudence (Fiqh), and principles of an ideal Islamic household. This complete educational retreat transforms lives and brings participants closer to their faith.",

      // Page: Islamic Programs
      "page_islamic_title": "Religious & Reform Programs",
      "page_islamic_content1": "Beyond our welfare projects, Al Noor Foundation is deeply committed to the spiritual reformation of society. We regularly host 'Islahi Insaniyat Conferences' (Humanity Reform Conferences) to address contemporary social issues through the light of Islamic teachings.",
      "page_islamic_content2": "Our Annual Performance Report (Kargardgi Report) is also presented in a grand gathering, featuring Tilawat, Naat, and speeches by esteemed scholars and donors, maintaining complete transparency and celebrating the blessings of communal charity.",

      // Page: Members
      "page_members_title": "Our Dedicated Team",
      "page_members_content1": "The success of Al Noor Foundation is built upon the tireless efforts of our dedicated members, volunteers, and generous donors.",
      "member_pres": "Dr. Muhammad Umer",
      "member_pres_desc": "A visionary leader guiding the foundation's charitable missions with unwavering dedication.",
      "member_vp": "Dr. Basharat Ali (Coordinator)",
      "member_vp_desc": "The backbone of our on-ground operations, ensuring every project reaches the most deserving individuals.",
      "member_general": "Our Volunteers & Donors",
      "member_general_desc": "Hundreds of unnamed heroes from Phool Nagar and beyond, including international donors from the USA and UK, whose financial and physical support makes everything possible.",

      // Page: Donate
      "page_donate_title": "Support Our Cause",
      "page_donate_content1": "Al Noor Foundation operates entirely on the generous donations of people like you. Your Zakat, Sadaqah, and general donations directly fund marriages for orphaned girls, medical treatments for the sick, and food for the hungry.",
      "page_donate_content2": "Whether you are in Pakistan or abroad (like the USA), you can become a partner in this noble cause. Together, we can expand our reach and bring light into the darkest corners of poverty.",
      "donate_bank": "Bank Details for Donation",
      "donate_bank_name": "Bank Name: XYZ Islamic Bank",
      "donate_acc_title": "Account Title: Al Noor Foundation Phool Nagar",
      "donate_acc_num": "Account Number: 1234-5678-9012-3456",
      "donate_swift": "SWIFT Code: XYZBKPKA"
    }
  },
  ur: {
    translation: {
      // Navigation
      "nav_home": "ہوم",
      "nav_weddings": "اجتماعی شادیاں",
      "nav_medical": "میڈیکل کیمپ",
      "nav_flood": "سیلاب زدگان",
      "nav_water": "پانی کی سبیل",
      "nav_education": "خواتین کی تعلیم",
      "nav_islamic": "دینی پروگرام",
      "nav_members": "ممبران",
      "nav_donate": "عطیات",

      // Global
      "btn_donate": "عطیہ دیں",
      "btn_learn": "مزید پڑھیں",
      "hero_title": "النور فاؤنڈیشن",
      "hero_subtitle": "پھول نگر",
      "hero_desc": "انسانیت کی خدمت کے لیے کوشاں۔ ہم اجتماعی شادیوں، صحت، سیلاب زدگان کی امداد، اور اسلامی تعلیمات کے ذریعے مستحقین کی زندگیاں سنوارتے ہیں۔",
      "contact_numbers": "رابطہ نمبر: <span dir='ltr' style='display:inline-block'>0333-2847705 | 0333-4531260 | 0331-4859523</span>",
      "president": "ڈاکٹر محمد عمر",
      "footer_text": "© 2026 النور فاؤنڈیشن پھول نگر۔ جملہ حقوق محفوظ ہیں۔",

      // Home Page Sections
      "about_title": "ہمارے بارے میں",
      "about_desc": "النور فاؤنڈیشن پچھلے کئی سالوں سے غریبوں اور ناداروں کی مدد کر رہی ہے۔ ڈاکٹر محمد عمر اور ڈاکٹر بشارت علی کی سرپرستی میں، ہمارا مقصد معاشرے میں بہتری لانا اور دکھی انسانیت کی خدمت کرنا ہے۔ ہم انسانیت کی خدمت کو ایمان کا حصہ سمجھتے ہیں۔",
      "services_title": "ہماری خدمات",
      "stats_title": "ہمارا سفر اعداد و شمار میں",
      "gallery_title": "ہماری کاوشوں کی جھلکیاں",
      "contact_title": "رابطہ کریں",
      "contact_desc": "ہمارے مشن میں شامل ہوں۔ آپ کا تعاون زندگیاں بدل سکتا ہے۔",

      // Home Services Briefs
      "service_weddings": "اجتماعی شادیاں اور جہیز",
      "service_weddings_desc": "ہر سال غریب بچیوں کی شادیاں کروانا اور انہیں مکمل جہیز کا سامان فراہم کرنا۔",
      "service_medical": "مفت میڈیکل کیمپ",
      "service_medical_desc": "مستحق افراد کے لیے جنرل اور آنکھوں کے مفت میڈیکل کیمپ کا انعقاد۔",
      "service_flood": "سیلاب زدگان کی امداد",
      "service_flood_desc": "سیلاب متاثرین کی مالی اور جانی مدد، اور مفت راشن کی تقسیم۔",
      "service_water": "میٹھے پانی کی سبیل",
      "service_water_desc": "عوام کے لیے ٹھنڈے اور صاف پانی کی سبیل کا مسلسل انتظام۔",
      "service_education": "خواتین کے لیے تربیتی پروگرام",
      "service_education_desc": "رمضان المبارک میں خواتین کے لیے خصوصی دینی و تربیتی پروگرامز۔",
      "service_islamic": "دینی پروگرام",
      "service_islamic_desc": "اصلاح انسانیت کانفرنس، اور دیگر اسلامی محافل کا انعقاد۔",
      "stat_lbl_weddings": "میں شادیاں",

      // Page: Weddings
      "page_weddings_title": "اجتماعی شادیاں اور جہیز کی فراہمی",
      "page_weddings_content1": "ہر سال النور فاؤنڈیشن پھول نگر کی یتیم اور مستحق بچیوں کی شادیوں کا اہم فریضہ انجام دیتی ہے۔ ہم سمجھتے ہیں کہ شادی اور جہیز کا مالی بوجھ بہت سے غریب خاندانوں کو اپنی بیٹیوں کے گھر بسانے سے روکتا ہے۔ ہمارے 'اجتماعی شادیاں' پروگرام کے تحت، ہم تمام اخراجات خود برداشت کرتے ہیں۔",
      "page_weddings_content2": "ہم گھریلو استعمال کی اشیاء، فرنیچر، برتن، اور کپڑے جہیز کے طور پر فراہم کرتے ہیں تاکہ نئے جوڑے عزت اور سکون کے ساتھ اپنی زندگی کا آغاز کر سکیں۔ 2026 میں، ہم 30 سے زائد شادیاں کروانے کا ارادہ رکھتے ہیں۔ کیٹرنگ، نکاح کی تقریب، اور مہمانوں کی ضیافت کا تمام انتظام فاؤنڈیشن کی جانب سے 'فی سبیل اللہ' کیا جاتا ہے۔",
      "page_weddings_content3": "ہماری جامع تصدیق کا عمل اس بات کو یقینی بناتا ہے کہ یہ امداد ان انتہائی کمزور خاندانوں تک پہنچے جن کے پاس واقعی ان بھاری اخراجات کا انتظام کرنے کا کوئی ذریعہ نہیں ہے۔ ہم صرف مادی چیزیں فراہم نہیں کرتے، بلکہ ہمارا مقصد غریب والدین کے سروں سے معاشرے کا یہ زبردست دباؤ دور کرنا بھی ہے۔",
      "page_weddings_content4": "ان اجتماعی شادیوں کی کامیابی ہمارے پرعزم عطیہ دہندگان کی بدولت ممکن ہوئی ہے، جن میں مقامی لوگوں سے لے کر امریکہ اور دیگر ممالک میں موجود مخیر حضرات شامل ہیں۔ ہمارا مستقبل کا ہدف اس کارِ خیر کو مزید وسعت دینا ہے تاکہ ہمارے معاشرے کی کوئی بیٹی پیسوں کی کمی کی وجہ سے گھر بیٹھنے پر مجبور نہ ہو۔",

      // Page: Medical Camps
      "page_medical_title": "مفت میڈیکل اور آئی کیمپس",
      "page_medical_content1": "بہتر صحت کی سہولیات تک رسائی ہر انسان کا بنیادی حق ہے، لیکن ہمارے معاشرے میں بہت سے لوگ بنیادی علاج کے اخراجات بھی برداشت نہیں کر سکتے۔ النور فاؤنڈیشن اس کمی کو پورا کرنے کے لیے باقاعدگی سے مفت میڈیکل کیمپ لگاتی ہے۔",
      "page_medical_content2": "ہمارے کیمپس میں جنرل فزیشن، آنکھوں کا معائنہ (مفت عینکوں کی فراہمی)، اور ادویات کی مفت تقسیم شامل ہے۔ ماہر ڈاکٹرز اور رضاکار دن رات محنت کر کے سینکڑوں مریضوں کا معائنہ کرتے ہیں تاکہ غریب اور بزرگ بغیر کسی مالی بوجھ کے اپنا علاج کروا سکیں۔",

      // Page: Flood Relief
      "page_flood_title": "سیلاب زدگان کی امداد اور راشن کی تقسیم",
      "page_flood_content1": "قدرتی آفات ہمیشہ غریبوں کو سب سے زیادہ متاثر کرتی ہیں۔ حالیہ سیلاب اور کووڈ-19 کی وبا کے دوران، النور فاؤنڈیشن نے فرنٹ لائن پر آکر لوگوں کی فوری امداد کی۔",
      "page_flood_content2": "ہم نے سینکڑوں متاثرہ خاندانوں میں راشن بیگز تقسیم کیے جن میں آٹا، چاول، کوکنگ آئل، دالیں اور دیگر ضروری اشیاء شامل تھیں۔ ہماری ٹیمیں دور دراز اور شدید متاثرہ علاقوں میں پہنچ کر نہ صرف کھانا فراہم کرتی ہیں، بلکہ امید کی کرن بھی بنتی ہیں۔",

      // Page: Water Sabeel
      "page_water_title": "میٹھے پانی کی سبیل",
      "page_water_content1": "پیاسے کو پانی پلانا اسلام میں بہترین صدقہ جاریہ ہے۔ گرمیوں کی شدت میں پینے کے صاف پانی کی کمی کو محسوس کرتے ہوئے، ہم نے مختلف مقامات پر 'میٹھے پانی کی سبیل' قائم کی ہیں۔",
      "page_water_content2": "یہ سبیلیں مسلسل چلتی ہیں اور مسافروں، مزدوروں، اور عوام کو ٹھنڈا، صاف، اور میٹھا پانی فراہم کرتی ہیں۔ یہ ایک سادہ لیکن انتہائی ثواب کا کام ہے جس سے روزانہ ہزاروں لوگ مستفید ہوتے ہیں۔",

      // Page: Education
      "page_education_title": "خواتین کے لیے تربیتی پروگرام",
      "page_education_content1": "معاشرے کو مضبوط اور بااخلاق بنانے کے لیے خواتین کی روحانی اور عملی تربیت نہایت ضروری ہے۔ رمضان المبارک کے پہلے 10 سے 15 دنوں میں النور فاؤنڈیشن خواتین کے لیے ایک خصوصی 'تربیتی پروگرام' کا انعقاد کرتی ہے۔",
      "page_education_content2": "قابل اور مستند معلمات کی زیرِ نگرانی، شرکاء کو قرآن پاک کی تلاوت، تفسیر، بنیادی فقہ، اور ایک مثالی اسلامی گھرانے کے اصول سکھائے جاتے ہیں۔ یہ مکمل تعلیمی پروگرام خواتین کی زندگیوں کو بدلنے اور انہیں دین کے قریب لانے میں اہم کردار ادا کرتا ہے۔",

      // Page: Islamic Programs
      "page_islamic_title": "دینی اور اصلاحی پروگرام",
      "page_islamic_content1": "فلاحی کاموں کے ساتھ ساتھ، النور فاؤنڈیشن معاشرے کی روحانی اصلاح کے لیے بھی پرعزم ہے۔ ہم باقاعدگی سے 'اصلاح انسانیت کانفرنس' کا انعقاد کرتے ہیں تاکہ اسلامی تعلیمات کی روشنی میں معاشرتی مسائل کا حل پیش کیا جا سکے۔",
      "page_islamic_content2": "ہماری سالانہ کارکردگی رپورٹ بھی ایک عظیم الشان محفل میں پیش کی جاتی ہے، جس میں تلاوت، نعت، اور جید علمائے کرام کے خطابات ہوتے ہیں۔ یہ تقریبات شفافیت کو برقرار رکھنے اور مخیر حضرات کے جذبے کو خراج تحسین پیش کرنے کے لیے منعقد کی جاتی ہیں۔",

      // Page: Members
      "page_members_title": "ہماری سرشار ٹیم",
      "page_members_content1": "النور فاؤنڈیشن کی کامیابی ہمارے ممبران، رضاکاروں، اور مخیر حضرات کی انتھک محنت کا نتیجہ ہے۔",
      "member_pres": "ڈاکٹر محمد عمر",
      "member_pres_desc": "ایک دور اندیش رہنما جو فاؤنڈیشن کے فلاحی مشنز کی بھرپور لگن کے ساتھ رہنمائی کر رہے ہیں۔",
      "member_vp": "ڈاکٹر بشارت علی (کوآرڈینیٹر)",
      "member_vp_desc": "ہمارے گراؤنڈ آپریشنز کی ریڑھ کی ہڈی، جو اس بات کو یقینی بناتے ہیں کہ ہر پراجیکٹ مستحقین تک پہنچے۔",
      "member_general": "ہمارے رضاکار اور ڈونرز",
      "member_general_desc": "پھول نگر اور اس سے باہر کے سینکڑوں گمنام ہیرو، بشمول امریکہ اور برطانیہ کے ڈونرز، جن کا مالی اور جسمانی تعاون اس سب کو ممکن بناتا ہے۔",

      // Page: Donate
      "page_donate_title": "ہمارا ساتھ دیں",
      "page_donate_content1": "النور فاؤنڈیشن کا تمام تر انحصار آپ جیسے مخیر حضرات کے عطیات پر ہے۔ آپ کی زکوٰۃ، صدقات اور عطیات براہ راست یتیم بچیوں کی شادیوں، بیماروں کے علاج اور بھوکوں کو کھانا کھلانے پر خرچ ہوتے ہیں۔",
      "page_donate_content2": "چاہے آپ پاکستان میں ہوں یا بیرون ملک (جیسے امریکہ)، آپ اس کارِ خیر میں حصہ دار بن سکتے ہیں۔ مل کر ہم اپنے دائرہ کار کو وسیع کر سکتے ہیں اور غربت کے اندھیروں میں روشنی پھیلا سکتے ہیں۔",
      "donate_bank": "عطیات کے لیے بینک کی تفصیلات",
      "donate_bank_name": "بینک کا نام: ایکس وائی زیڈ اسلامک بینک",
      "donate_acc_title": "اکاؤنٹ ٹائٹل: النور فاؤنڈیشن پھول نگر",
      "donate_acc_num": "اکاؤنٹ نمبر: 1234-5678-9012-3456",
      "donate_swift": "سوئفٹ کوڈ: XYZBKPKA"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ur",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
