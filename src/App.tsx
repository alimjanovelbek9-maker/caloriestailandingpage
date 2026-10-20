import React, { useState, useEffect } from 'react';

// Keep the page self-contained so it does not require the lucide-react package.
type IconName =
  | 'download' | 'externalLink' | 'send' | 'instagram' | 'sun' | 'moon'
  | 'globe' | 'camera' | 'flame' | 'sparkles' | 'trendingUp' | 'trendingDown'
  | 'checkCircle' | 'smartphone' | 'shield' | 'droplet' | 'menu' | 'close'
  | 'apple' | 'info';

type IconProps = { className?: string };

const Icon = ({ name, className }: IconProps & { name: IconName }) => {
  const paths: Record<IconName, React.ReactNode> = {
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
    externalLink: <><path d="M15 3h6v6M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
    camera: <><path d="M14 4h-4L8 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4Z" /><circle cx="12" cy="13" r="3" /></>,
    flame: <path d="M8.5 14.5A4.5 4.5 0 0 0 13 19c2.5 0 4-1.8 4-4 0-2.5-2-4-4-6-1.5-1.5-2-3-2-5-3 2-5 5-5 8 0 1 .2 1.8.5 2.5ZM13 19c-1-2 0-4 2-5" />,
    sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14ZM5 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" /></>,
    trendingUp: <><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></>,
    trendingDown: <><path d="m22 17-8.5-8.5-5 5L2 7" /><path d="M16 17h6v-6" /></>,
    checkCircle: <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>,
    smartphone: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    droplet: <path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    apple: <><path d="M12 7c-2-3-6-2-7 1-2 6 2 13 5 13 1 0 1.5-.7 2-.7s1 .7 2 .7c3 0 7-7 5-13-1-3-5-4-7-1Z" /><path d="M12 7c0-3 2-5 5-5-1 3-2 5-5 5Z" /></>,
    info: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0-4h.01" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const createIcon = (name: IconName) => (props: IconProps) => <Icon {...props} name={name} />;
const Download = createIcon('download');
const ExternalLink = createIcon('externalLink');
const Send = createIcon('send');
const Instagram = createIcon('instagram');
const Sun = createIcon('sun');
const Moon = createIcon('moon');
const Globe = createIcon('globe');
const Camera = createIcon('camera');
const Flame = createIcon('flame');
const Sparkles = createIcon('sparkles');
const TrendingUp = createIcon('trendingUp');
const TrendingDown = createIcon('trendingDown');
const CheckCircle2 = createIcon('checkCircle');
const Smartphone = createIcon('smartphone');
const ShieldCheck = createIcon('shield');
const Droplet = createIcon('droplet');
const Menu = createIcon('menu');
const X = createIcon('close');
const Apple = createIcon('apple');
const LeafLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img
    src="/caloriest-logo.png"
    alt="Caloriest AI logo"
    className={`${className} rounded-xl object-cover`}
  />
);

// ==================== 16 TA TIL TARKIBI ====================
type Language = 'uz' | 'en' | 'ru' | 'es' | 'fr' | 'de' | 'tr' | 'ar' | 'zh' | 'ja' | 'ko' | 'pt' | 'hi' | 'it' | 'kk' | 'ky';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'uz', name: "O'zbek", flag: "🇺🇿" },
  { code: 'en', name: "English", flag: "🇺🇸" },
  { code: 'ru', name: "Русский", flag: "🇷🇺" },
  { code: 'es', name: "Español", flag: "🇪🇸" },
  { code: 'fr', name: "Français", flag: "🇫🇷" },
  { code: 'de', name: "Deutsch", flag: "🇩🇪" },
  { code: 'tr', name: "Türkçe", flag: "🇹🇷" },
  { code: 'ar', name: "العربية", flag: "🇸🇦" },
  { code: 'zh', name: "中文", flag: "🇨🇳" },
  { code: 'ja', name: "日本語", flag: "🇯🇵" },
  { code: 'ko', name: "한국어", flag: "🇰🇷" },
  { code: 'pt', name: "Português", flag: "🇵🇹" },
  { code: 'hi', name: "हिन्दी", flag: "🇮🇳" },
  { code: 'it', name: "Italiano", flag: "🇮🇹" },
  { code: 'kk', name: "Қазақша", flag: "🇰🇿" },
  { code: 'ky', name: "Kırgızcha", flag: "🇰🇬" },
];

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  uz: {
    appNoticeTitle: "Muhim Eslatma! 📱✨",
    appNoticeText: "Ilovamiz hozircha Android qurilmalari uchun mavjud. Tez orada Apple (iOS) versiyasi ham taqdim etiladi! 🍏 Ungacha web-saytimizdan to'liq foydalanib turishingiz mumkin. 🚀",
    navFeatures: "Xususiyatlar",
    navHowItWorks: "Ishlash tartibi",
    navCalorieDeficit: "Kalloriya Kalkulyatori",
    downloadApk: "APK yuklab olish",
    visitWebsite: "Saytga o'tish",
    contactSupport: "Bog'lanish",
    heroTitle: "Sizning sun'iy intellektli aqlli kaloriyalar va parxoz yordamchingiz",
    heroSubtitle: "Ovqatingizni shunchaki rasmga oling! Caloriest AI soniyalar ichida barcha kaloriya va makronutrientlarni aniqlab beradi. Semirish, ozish va formani saqlash uchun ideal professional ilova.",
    scanDemoTitle: "AI Skannerlash Tizimi",
    scanDemoText: "Tovuq va Sabzavotli Salat - 340 Kcal aniqlandi",
    protein: "Oqsil",
    carbs: "Uglevod",
    fat: "Yog'",
    feature1Title: "Rasm orqali tezkor tahlil",
    feature1Desc: "Ovqat suratini bir zumda skanerlang va uning tarkibidagi kaloriya hamda vitaminlarni 98% aniqlikda bilib oling.",
    feature2Title: "Ozish uchun Kaloriya Defitsiti",
    feature2Desc: "Ozishni istaganlar uchun kunlik kaloriya me'yorini kamaytirish va vazn yo'qotish jarayonini aniq nazorat qilish.",
    feature3Title: "Semirish va Muskul Yig'ish",
    feature3Desc: "Vazn orttirmoqchi bo'lganlar uchun kaloriyalar profilitsiti va yuqori oqsilli taomnoma generatori.",
    calcTitle: "Kunlik Kaloriya & Suv Kalkulyatori",
    calcSubtitle: "Shaxsiy ko'rsatkichlaringizni kiriting va shaxsiy normangizni bilib oling",
    weight: "Vazningiz (kg):",
    height: "Bo'yingiz (sm):",
    goal: "Maqsadingiz:",
    goalLoss: "Ozish (Kaloriya Defitsiti)",
    goalMaintain: "Vaznni Saqlash",
    goalGain: "Semirish / Muskul Yig'ish",
    calculateBtn: "Hisoblash",
    resultTarget: "Sizning Kunlik Normangiz:",
    resultWater: "Tavsiya etiladigan kunlik suv:",
    socialTitle: "Bizni ijtimoiy tarmoqlarda kuzatib boring",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Barcha huquqlar himoyalangan.",
  },
  en: {
    appNoticeTitle: "Important Notice! 📱✨",
    appNoticeText: "Our app is currently available for Android devices. The Apple (iOS) version will be released soon! 🍏 In the meantime, feel free to use our fully functional web app. 🚀",
    navFeatures: "Features",
    navHowItWorks: "How It Works",
    navCalorieDeficit: "Calorie Calculator",
    downloadApk: "Download APK",
    visitWebsite: "Visit Web App",
    contactSupport: "Contact Support",
    heroTitle: "Your Smart AI Calorie & Diet Assistant",
    heroSubtitle: "Just snap a photo of your food! Caloriest AI instantly calculates calories & macros. Perfect professional app for weight loss, muscle gain, and healthy lifestyle.",
    scanDemoTitle: "AI Scanning System",
    scanDemoText: "Chicken & Veggie Salad - 340 Kcal detected",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    feature1Title: "Instant Photo Analysis",
    feature1Desc: "Scan meal photos instantly and get accurate breakdown of calories and nutrients with 98% accuracy.",
    feature2Title: "Calorie Deficit for Weight Loss",
    feature2Desc: "Accurately manage calorie reduction and track fat loss progress effortlessly.",
    feature3Title: "Weight Gain & Muscle Building",
    feature3Desc: "Calorie surplus recommendations and high-protein meal planner for gaining healthy weight.",
    calcTitle: "Daily Calorie & Water Calculator",
    calcSubtitle: "Enter your personal metrics to find your ideal daily nutrition targets",
    weight: "Weight (kg):",
    height: "Height (cm):",
    goal: "Your Goal:",
    goalLoss: "Weight Loss (Deficit)",
    goalMaintain: "Maintain Weight",
    goalGain: "Weight Gain (Surplus)",
    calculateBtn: "Calculate Targets",
    resultTarget: "Your Daily Target:",
    resultWater: "Recommended Daily Water:",
    socialTitle: "Connect With Us",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. All rights reserved.",
  },
  ru: {
    appNoticeTitle: "Важное примечание! 📱✨",
    appNoticeText: "Наше приложение пока доступно только для Android. Версия для Apple (iOS) выйдет совсем скоро! 🍏 А пока вы можете полноценно пользоваться нашим веб-сайтом. 🚀",
    navFeatures: "Функции",
    navHowItWorks: "Как это работает",
    navCalorieDeficit: "Калькулятор калорий",
    downloadApk: "Скачать APK",
    visitWebsite: "Перейти на сайт",
    contactSupport: "Связаться",
    heroTitle: "Умный AI-помощник для подсчета калорий и диеты",
    heroSubtitle: "Просто сфотографируйте еду! Caloriest AI мгновенно определит калории и БЖУ. Профессиональное приложение для похудения, набора массы и поддержания формы.",
    scanDemoTitle: "Система AI сканирования",
    scanDemoText: "Салат с курицей - 340 ккал распознано",
    protein: "Белки",
    carbs: "Углеводы",
    fat: "Жиры",
    feature1Title: "Быстрый анализ по фото",
    feature1Desc: "Мгновенное сканирование блюд с точностью распознавания до 98%.",
    feature2Title: "Дефицит калорий для похудения",
    feature2Desc: "Точный расчет нормы калорий для безопасного и эффективного снижения веса.",
    feature3Title: "Набор массы и мышц",
    feature3Desc: "Персональные рекомендации по профициту калорий для эффективного набора веса.",
    calcTitle: "Калькулятор калорий и воды",
    calcSubtitle: "Введите данные для расчета индивидуальной нормы",
    weight: "Вес (кг):",
    height: "Рост (см):",
    goal: "Цель:",
    goalLoss: "Похудение (Дефицит)",
    goalMaintain: "Сохранение веса",
    goalGain: "Набор массы (Профицит)",
    calculateBtn: "Рассчитать",
    resultTarget: "Ваша суточная норма:",
    resultWater: "Рекомендуемая норма воды:",
    socialTitle: "Мы в социальных сетях",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Все права защищены.",
  },
  es: {
    appNoticeTitle: "¡Nota Importante! 📱✨",
    appNoticeText: "Nuestra aplicación está disponible para Android. ¡La versión para Apple (iOS) estará disponible muy pronto! 🍏 Mientras tanto, puedes usar nuestro sitio web. 🚀",
    navFeatures: "Características",
    navHowItWorks: "Cómo funciona",
    navCalorieDeficit: "Calculadora de Calorías",
    downloadApk: "Descargar APK",
    visitWebsite: "Visitar Sitio Web",
    contactSupport: "Contacto",
    heroTitle: "Tu Asistente IA de Calorías y Nutrición",
    heroSubtitle: "¡Simplemente toma una foto de tu comida! Caloriest AI calcula instantáneamente calorías y macronutrientes.",
    scanDemoTitle: "Escáner Inteligente IA",
    scanDemoText: "Ensalada de Pollo - 340 Kcal detectadas",
    protein: "Proteína",
    carbs: "Carbohidratos",
    fat: "Grasa",
    feature1Title: "Análisis por Foto",
    feature1Desc: "Escanea tus comidas con un 98% de precisión nutricional.",
    feature2Title: "Déficit Calórico para Perder Peso",
    feature2Desc: "Controla tu ingesta diaria para perder grasa de forma eficiente.",
    feature3Title: "Ganancia Muscular",
    feature3Desc: "Aumenta de peso de forma saludable con dietas personalizadas.",
    calcTitle: "Calculadora de Calorías y Agua",
    calcSubtitle: "Ingresa tus datos para calcular tus objetivos diarios",
    weight: "Peso (kg):",
    height: "Altura (cm):",
    goal: "Objetivo:",
    goalLoss: "Perder Peso (Déficit)",
    goalMaintain: "Mantener Peso",
    goalGain: "Ganar Peso (Superávit)",
    calculateBtn: "Calcular",
    resultTarget: "Tu Meta Diaria:",
    resultWater: "Agua Recomendada:",
    socialTitle: "Síguenos en Redes Sociales",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Todos los derechos reservados.",
  },
  fr: {
    appNoticeTitle: "Note Importante ! 📱✨",
    appNoticeText: "Notre application est disponible sur Android. La version Apple (iOS) arrive très bientôt ! 🍏 En attendant, profitez pleinement de notre site web. 🚀",
    navFeatures: "Fonctionnalités",
    navHowItWorks: "Comment ça marche",
    navCalorieDeficit: "Calculateur de Calories",
    downloadApk: "Télécharger APK",
    visitWebsite: "Visiter le Site Web",
    contactSupport: "Contact",
    heroTitle: "Votre Assistant IA Calories & Nutrition",
    heroSubtitle: "Prenez simplement une photo de votre repas ! Caloriest AI calcule instantanément vos calories.",
    scanDemoTitle: "Scanner IA Intelligente",
    scanDemoText: "Salade de Poulet - 340 Kcal décelées",
    protein: "Protéines",
    carbs: "Glucides",
    fat: "Lipides",
    feature1Title: "Analyse Photo Instantanée",
    feature1Desc: "Analyse d'image précise à 98% pour chaque plat.",
    feature2Title: "Déficit Calorique",
    feature2Desc: "Perdez du poids efficacement grâce au suivi précis des calories.",
    feature3Title: "Prise de Masse Musculaire",
    feature3Desc: "Surplus calorique idéal pour développer votre masse musculaire.",
    calcTitle: "Calculateur de Calories & Eau",
    calcSubtitle: "Calculez vos objectifs nutritionnels quotidiens",
    weight: "Poids (kg) :",
    height: "Taille (cm) :",
    goal: "Objectif :",
    goalLoss: "Perte de poids (Déficit)",
    goalMaintain: "Maintien",
    goalGain: "Prise de masse (Surplus)",
    calculateBtn: "Calculer",
    resultTarget: "Cible Quotidienne :",
    resultWater: "Eau Recommandée :",
    socialTitle: "Rejoignez-nous",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Tous droits réservés.",
  },
  de: {
    appNoticeTitle: "Wichtiger Hinweis! 📱✨",
    appNoticeText: "Unsere App ist derzeit für Android verfügbar. Die Apple (iOS)-Version folgt in Kürze! 🍏 Nutzen Sie in der Zwischenzeit gerne unsere Website. 🚀",
    navFeatures: "Funktionen",
    navHowItWorks: "So funktioniert's",
    navCalorieDeficit: "Kalorienrechner",
    downloadApk: "APK Herunterladen",
    visitWebsite: "Website Besuchen",
    contactSupport: "Kontakt",
    heroTitle: "Ihr intelligenter KI-Kalorienzähler",
    heroSubtitle: "Machen Sie einfach ein Foto von Ihrem Essen! Caloriest AI berechnet sofort Kalorien & Makros.",
    scanDemoTitle: "KI Scanner System",
    scanDemoText: "Hähnchen-Salat - 340 Kcal erkannt",
    protein: "Eiweiß",
    carbs: "Kohlenhydrate",
    fat: "Fett",
    feature1Title: "Sofortige Foto-Analyse",
    feature1Desc: "Erkennen Sie Nährwerte mit 98% Genauigkeit.",
    feature2Title: "Kaloriendefizit zum Abnehmen",
    feature2Desc: "Steuern Sie Ihren Fettabbau wissenschaftlich präzise.",
    feature3Title: "Muskelaufbau & Gewichtszunahme",
    feature3Desc: "Optimale Kalorienüberschüsse für den Körperaufbau.",
    calcTitle: "Kalorien- & Wasserrechner",
    calcSubtitle: "Ermitteln Sie Ihren täglichen Kalorienbedarf",
    weight: "Gewicht (kg):",
    height: "Größe (cm):",
    goal: "Ziel:",
    goalLoss: "Abnehmen (Defizit)",
    goalMaintain: "Gewicht Halten",
    goalGain: "Zunehmen (Überschuss)",
    calculateBtn: "Berechnen",
    resultTarget: "Tagesziel:",
    resultWater: "Empfohlenes Wasser:",
    socialTitle: "Folgen Sie Uns",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Alle Rechte vorbehalten.",
  },
  tr: {
    appNoticeTitle: "Önemli Not! 📱✨",
    appNoticeText: "Uygulamamız şu anda Android cihazlar içindir. Apple (iOS) sürümü çok yakında yayınlanacak! 🍏 Bu süreçte web sitemizi kullanabilirsiniz. 🚀",
    navFeatures: "Özellikler",
    navHowItWorks: "Nasıl Çalışır",
    navCalorieDeficit: "Kalori Hesaplayıcı",
    downloadApk: "APK İndir",
    visitWebsite: "Siteye Git",
    contactSupport: "İletişim",
    heroTitle: "Yapay Zeka Destekli Kalori Takipçiniz",
    heroSubtitle: "Yemeğinizin fotoğrafını çekin! Caloriest AI saniyeler içinde kalori ve besin değerlerini hesaplar.",
    scanDemoTitle: "AI Tarama Sistemi",
    scanDemoText: "Tavuklu Salata - 340 Kcal tespit edildi",
    protein: "Protein",
    carbs: "Karbonhidrat",
    fat: "Yağ",
    feature1Title: "Fotoğraflı Anında Analiz",
    feature1Desc: "%98 doğruluk oranıyla yemeklerinizi analiz edin.",
    feature2Title: "Kilo Vermek İçin Kalori Açığı",
    feature2Desc: "Yağ yakım sürecinizi bilimsel verilerle yönetin.",
    feature3Title: "Kilo Alma & Kas Yapma",
    feature3Desc: "Sağlıklı kilo alımı için yüksek proteinli beslenme planı.",
    calcTitle: "Günlük Kalori & Su Hesaplayıcı",
    calcSubtitle: "Kişisel değerlerinizi girerek hedefinizi hesaplayın",
    weight: "Kilo (kg):",
    height: "Boy (cm):",
    goal: "Hedefiniz:",
    goalLoss: "Kilo Verme (Açık)",
    goalMaintain: "Kilo Koruma",
    goalGain: "Kilo Alma (Fazla)",
    calculateBtn: "Hesapla",
    resultTarget: "Günlük Hedefiniz:",
    resultWater: "Tavsiye Edilen Su:",
    socialTitle: "Bizi Takip Edin",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Tüm hakları saklıdır.",
  },
  ar: {
    appNoticeTitle: "تنبيه هام! 📱✨",
    appNoticeText: "تطبيقنا متاح حاليًا لأجهزة Android. وسيتوفر إصدار Apple (iOS) قريبًا جداً! 🍏 حتى ذلك الحين، يمكنك استخدام موقعنا الإلكتروني بالكامل. 🚀",
    navFeatures: "المميزات",
    navHowItWorks: "كيف يعمل",
    navCalorieDeficit: "حاسبة السعرات",
    downloadApk: "تحميل APK",
    visitWebsite: "زيارة الموقع",
    contactSupport: "الدعم والتواصل",
    heroTitle: "مساعدك الذكي بالذكاء الاصطناعي لحساب السعرات",
    heroSubtitle: "التقط صورة لوجبتك فقط! Caloriest AI يحسب السعرات الحرارية والمغذيات في ثوانٍ.",
    scanDemoTitle: "نظام المسح بالذكاء الاصطناعي",
    scanDemoText: "سلطة دجاج - 340 سعرة حرارية",
    protein: "بروتين",
    carbs: "كربوهيدرات",
    fat: "دهون",
    feature1Title: "تحليل فوري عبر الصورة",
    feature1Desc: "تحليل وجباتك بدقة تصل إلى 98٪ بمجرد التقاط صورة.",
    feature2Title: "عجز السعرات لخسارة الوزن",
    feature2Desc: "إدارة دقيقة لحرق الدهون بشكل آمن وصحي.",
    feature3Title: "زيادة الوزن وبناء العضلات",
    feature3Desc: "خطط غذائية مخصصة لزيادة الوزن بطريقة صحية.",
    calcTitle: "حاسبة السعرات الحرارية والماء",
    calcSubtitle: "أدخل بياناتك لحساب احتياجك اليومي",
    weight: "الوزن (كجم):",
    height: "الطول (سم):",
    goal: "الهدف:",
    goalLoss: "خسارة الوزن (عجز)",
    goalMaintain: "الحفاظ على الوزن",
    goalGain: "زيادة الوزن (فائض)",
    calculateBtn: "احسب الان",
    resultTarget: "هدفك اليومي:",
    resultWater: "الماء الموصى به:",
    socialTitle: "تواصل معنا",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. جميع الحقوق محفوظة.",
  },
  zh: {
    appNoticeTitle: "重要提示！📱✨",
    appNoticeText: "我们的应用目前已在 Android 上上线。Apple (iOS) 版本即将来袭！🍏 在此期间，欢迎使用我们的网页版进行完整体验。🚀",
    navFeatures: "功能特点",
    navHowItWorks: "工作原理",
    navCalorieDeficit: "热量计算器",
    downloadApk: "下载 APK",
    visitWebsite: "访问 Web 端",
    contactSupport: "联系我们",
    heroTitle: "您的 AI 智能卡路里与饮食助手",
    heroSubtitle: "只需拍一张照片！Caloriest AI 即可在几秒钟内计算出卡路里和营养成分。增肌减脂的专业首选。",
    scanDemoTitle: "AI 智能扫描系统",
    scanDemoText: "鸡肉蔬菜沙拉 - 检测到 340 千卡",
    protein: "蛋白质",
    carbs: "碳水",
    fat: "脂肪",
    feature1Title: "拍照秒级识别",
    feature1Desc: "精准识别食物类型与营养成分，准确率高达 98%。",
    feature2Title: "热量缺口减脂",
    feature2Desc: "科学规划每日摄入量，轻松追踪脂肪燃烧进度。",
    feature3Title: "增重与肌肉合成",
    feature3Desc: "定制高蛋白增肌方案，打造理想体型。",
    calcTitle: "每日卡路里与饮水量计算器",
    calcSubtitle: "输入您的身体数据，获取专属营养建议",
    weight: "体重 (kg):",
    height: "身高 (cm):",
    goal: "您的目标:",
    goalLoss: "减肥 (热量缺口)",
    goalMaintain: "保持体重",
    goalGain: "增重/增肌 (热量盈余)",
    calculateBtn: "开始计算",
    resultTarget: "您的每日目标:",
    resultWater: "建议每日饮水:",
    socialTitle: "关注我们",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. 保留所有权利。",
  },
  ja: {
    appNoticeTitle: "お知らせ！📱✨",
    appNoticeText: "現在、アプリはAndroid向けに配信中です。Apple (iOS)版も近日リリース予定！🍏 それまではWebサイト版をぜひご利用ください。🚀",
    navFeatures: "特徴",
    navHowItWorks: "使い方",
    navCalorieDeficit: "カロリー計算機",
    downloadApk: "APKダウンロード",
    visitWebsite: "Web版を開く",
    contactSupport: "お問い合わせ",
    heroTitle: "AI搭載 スマートカロリー＆食事管理",
    heroSubtitle: "料理の写真をとるだけ！Caloriest AIが瞬時にカロリーとPFCバランスを計算。ダイエット・バルクアップに最適なプロ仕様アプリ。",
    scanDemoTitle: "AIスキャンシステム",
    scanDemoText: "チキンサラダ - 340 Kcal を検出",
    protein: "タンパク質",
    carbs: "脂質",
    fat: "炭水化物",
    feature1Title: "写真で瞬間解析",
    feature1Desc: "AIが98%の精度で料理の栄養素を判定します。",
    feature2Title: "ダイエットのためのカロリー欠損",
    feature2Desc: "効率的な脂肪燃焼のための毎日の目標を自動算出。",
    feature3Title: "バルクアップ＆筋力向上",
    feature3Desc: "健康的に体重を増やすための高タンパク食事プラン。",
    calcTitle: "カロリー＆水分補給計算機",
    calcSubtitle: "あなたの体に合わせた目標値を計算します",
    weight: "体重 (kg):",
    height: "身長 (cm):",
    goal: "目的:",
    goalLoss: "減量 (カロリー制限)",
    goalMaintain: "現状維持",
    goalGain: "増量 (バルクアップ)",
    calculateBtn: "計算する",
    resultTarget: "1日の目標カロリー:",
    resultWater: "推奨される水分摂取量:",
    socialTitle: "公式SNS",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. All rights reserved.",
  },
  ko: {
    appNoticeTitle: "중요 안내! 📱✨",
    appNoticeText: "현재 앱은 Android 기기에서 이용 가능합니다. Apple (iOS) 버전도 곧 출시될 예정입니다! 🍏 그전까지는 웹사이트 버전을 자유롭게 이용해 주세요. 🚀",
    navFeatures: "주요기능",
    navHowItWorks: "사용방법",
    navCalorieDeficit: "칼로리 계산기",
    downloadApk: "APK 다운로드",
    visitWebsite: "웹사이트 방문",
    contactSupport: "고객 지원",
    heroTitle: "AI 스마트 칼로리 & 다이어트 매니저",
    heroSubtitle: "음식 사진만 찍으세요! Caloriest AI가 몇 초 만에 칼로리와 영양소를 계산합니다. 체중 감량 및 근육 증량을 위한 필수 앱.",
    scanDemoTitle: "AI 스캔 시스템",
    scanDemoText: "치킨 샐러드 - 340 Kcal 감지됨",
    protein: "단백질",
    carbs: "탄수화물",
    fat: "지방",
    feature1Title: "사진 즉시 분석",
    feature1Desc: "98% 정확도로 음식 사진을 분석하여 영양소를 측정합니다.",
    feature2Title: "체중 감량을 위한 칼로리 적자",
    feature2Desc: "체지방 감소를 위한 일일 칼로리 목표 자동 관리.",
    feature3Title: "벌크업 및 체중 증가",
    feature3Desc: "건강한 체중 증가를 위한 고단백 식단 가이드.",
    calcTitle: "일일 칼로리 & 수분 계산기",
    calcSubtitle: "신체 정보를 입력하고 맞춤형 목표를 확인하세요",
    weight: "체중 (kg):",
    height: "신장 (cm):",
    goal: "목표:",
    goalLoss: "체중 감량 (적자)",
    goalMaintain: "체중 유지",
    goalGain: "체중 증가 (벌크업)",
    calculateBtn: "계산하기",
    resultTarget: "일일 목표 칼로리:",
    resultWater: "권장 일일 수분 섭취량:",
    socialTitle: "소셜 미디어",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. All rights reserved.",
  },
  pt: {
    appNoticeTitle: "Aviso Importante! 📱✨",
    appNoticeText: "Nosso aplicativo está disponível para Android. A versão para Apple (iOS) será lançada em breve! 🍏 Enquanto isso, aproveite nosso site web. 🚀",
    navFeatures: "Recursos",
    navHowItWorks: "Como Funciona",
    navCalorieDeficit: "Calculadora de Calorias",
    downloadApk: "Baixar APK",
    visitWebsite: "Visitar Site Web",
    contactSupport: "Suporte",
    heroTitle: "Seu Assistente Inteligente de Calorias por IA",
    heroSubtitle: "Basta tirar uma foto da sua comida! O Caloriest AI calcula instantaneamente calorias e macronutrientes.",
    scanDemoTitle: "Sistema de Escaneamento IA",
    scanDemoText: "Salada de Frango - 340 Kcal detectadas",
    protein: "Proteína",
    carbs: "Carboidratos",
    fat: "Gordura",
    feature1Title: "Análise Instantânea por Foto",
    feature1Desc: "Escaneie pratos com 98% de precisão de nutrientes.",
    feature2Title: "Déficit Calórico para Perda de Peso",
    feature2Desc: "Gerencie a queima de gordura com precisão científica.",
    feature3Title: "Ganho de Massa e Peso",
    feature3Desc: "Excedente calórico ideal para hipertrofia muscular.",
    calcTitle: "Calculadora de Calorias e Água",
    calcSubtitle: "Insira seus dados para obter suas metas diárias",
    weight: "Peso (kg):",
    height: "Altura (cm):",
    goal: "Objetivo:",
    goalLoss: "Perder Peso (Déficit)",
    goalMaintain: "Manter Peso",
    goalGain: "Ganhar Peso (Superávit)",
    calculateBtn: "Calcular Metas",
    resultTarget: "Sua Meta Diária:",
    resultWater: "Água Recomendada:",
    socialTitle: "Redes Sociais",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Todos os direitos reservados.",
  },
  hi: {
    appNoticeTitle: "महत्वपूर्ण सूचना! 📱✨",
    appNoticeText: "हमारा ऐप वर्तमान में Android के लिए उपलब्ध है। Apple (iOS) संस्करण जल्द ही आ रहा है! 🍏 तब तक आप हमारी वेबसाइट का उपयोग कर सकते हैं। 🚀",
    navFeatures: "विशेषताएं",
    navHowItWorks: "यह कैसे काम करता है",
    navCalorieDeficit: "कैलोरी कैलकुलेटर",
    downloadApk: "APK डाउनलोड करें",
    visitWebsite: "वेबसाइट पर जाएं",
    contactSupport: "संपर्क करें",
    heroTitle: "आपका AI स्मार्ट कैलोरी और डाइट अस्सिटेंट",
    heroSubtitle: "बस अपने खाने की फोटो खींचें! Caloriest AI तुरंत आपकी कैलोरी और पोषक तत्वों की गणना करता है।",
    scanDemoTitle: "AI स्कैनिंग सिस्टम",
    scanDemoText: "चिकन और वेजी सलाद - 340 Kcal पाया गया",
    protein: "प्रोटीन",
    carbs: "कार्बोहाइड्रेट",
    fat: "वसा (फैट)",
    feature1Title: "फोटो से तुरंत विश्लेषण",
    feature1Desc: "98% सटीकता के साथ अपने भोजन के पोषक तत्व जानें।",
    feature2Title: "वजन घटाने के लिए कैलोरी डेफिसिट",
    feature2Desc: "फैट बर्न करने के लिए अपनी दैनिक कैलोरी को नियंत्रित करें।",
    feature3Title: "वजन और मसल बढ़ाने के लिए",
    feature3Desc: "सही वजन बढ़ाने के लिए उच्च प्रोटीन डाइट प्लान।",
    calcTitle: "कैलोरी और पानी कैलकुलेटर",
    calcSubtitle: "अपनी दैनिक पोषण आवश्यकताओं की गणना करें",
    weight: "वजन (kg):",
    height: "लंबाई (cm):",
    goal: "आपका लक्ष्य:",
    goalLoss: "वजन घटाना (Deficit)",
    goalMaintain: "वजन बनाए रखना",
    goalGain: "वजन बढ़ाना (Surplus)",
    calculateBtn: "गणना करें",
    resultTarget: "आपका दैनिक लक्ष्य:",
    resultWater: "अनुशंसित दैनिक पानी:",
    socialTitle: "सोशल मीडिया",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. सर्वाधिकार सुरक्षित।",
  },
  it: {
    appNoticeTitle: "Nota Importante! 📱✨",
    appNoticeText: "La nostra app è al momento disponibile per Android. La versione per Apple (iOS) arriverà a breve! 🍏 Nel frattempo, puoi usare liberamente il nostro sito web. 🚀",
    navFeatures: "Caratteristiche",
    navHowItWorks: "Come Funziona",
    navCalorieDeficit: "Calcolatore Calorie",
    downloadApk: "Scarica APK",
    visitWebsite: "Visita Sito Web",
    contactSupport: "Contatto Supporto",
    heroTitle: "Il Tuo Assistente AI per Calorie e Dieta",
    heroSubtitle: "Scatta una foto al tuo cibo! Caloriest AI calcola istantaneamente calorie e macronutrienti.",
    scanDemoTitle: "Sistema di Scansione AI",
    scanDemoText: "Insalata di Pollo - 340 Kcal rilevate",
    protein: "Proteine",
    carbs: "Carboidrati",
    fat: "Grassi",
    feature1Title: "Analisi Fotografica Immediata",
    feature1Desc: "Scansiona i pasti con una precisione del 98%.",
    feature2Title: "Deficit Calorico per Dimagrire",
    feature2Desc: "Pianifica la perdita di peso in modo scientifico.",
    feature3Title: "Aumento di Massa Muscolare",
    feature3Desc: "Surplus calorico ideale per prendere peso in modo sano.",
    calcTitle: "Calcolatore di Calorie e Acqua",
    calcSubtitle: "Inserisci i tuoi dati per calcolare il tuo fabbisogno",
    weight: "Peso (kg):",
    height: "Altezza (cm):",
    goal: "Obiettivo:",
    goalLoss: "Perdere Peso (Deficit)",
    goalMaintain: "Mantenere Peso",
    goalGain: "Aumentare Peso (Surplus)",
    calculateBtn: "Calcola",
    resultTarget: "Obiettivo Giornaliero:",
    resultWater: "Acqua Consigliata:",
    socialTitle: "Seguici sui Social",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Tutti i diritti riservati.",
  },
  kk: {
    appNoticeTitle: "Маңызды ескерту! 📱✨",
    appNoticeText: "Қосымшамыз қазірше Android құрылғыларына арналған. Жуық арада Apple (iOS) нұсқасы шығады! 🍏 Оған дейін веб-сайтымызды толық пайдалана аласыз. 🚀",
    navFeatures: "Мүмкіндіктер",
    navHowItWorks: "Жұмыс принципі",
    navCalorieDeficit: "Калория Калькуляторы",
    downloadApk: "APK жүктеу",
    visitWebsite: "Сайтқа өту",
    contactSupport: "Байланыс",
    heroTitle: "Сіздің жасанды интеллектті калория және диета көмекшіңіз",
    heroSubtitle: "Тамақты суретке түсіріңіз! Caloriest AI секунд ішінде барлық калория мен макроэлементтерді анықтайды.",
    scanDemoTitle: "AI Сканерлеу жүйесі",
    scanDemoText: "Тауық пен көкөніс салаты - 340 Ккал анықталды",
    protein: "Ақуыз",
    carbs: "Көмірсулар",
    fat: "Майлар",
    feature1Title: "Сурет арқылы жылдам талдау",
    feature1Desc: "Тағамды 98% дәлдікпен бір заматта сканерлеу.",
    feature2Title: "Арықтауға арналған калория тапшылығы",
    feature2Desc: "Салмақ тастау процесін ғылыми тұрғыда бақылау.",
    feature3Title: "Салмақ қосу және бұлшықет жинау",
    feature3Desc: "Дұрыс салмақ қосуға арналған жоғары ақуызды мәзір.",
    calcTitle: "Калория мен су калькуляторы",
    calcSubtitle: "Жеке көрсеткіштеріңізді енгізіп, нормаңызды біліңіз",
    weight: "Салмағыңыз (кг):",
    height: "Бойыңыз (см):",
    goal: "Мақсатыңыз:",
    goalLoss: "Арықтау (Тапшылық)",
    goalMaintain: "Салмақты сақтау",
    goalGain: "Салмақ қосу (Профицит)",
    calculateBtn: "Есептеу",
    resultTarget: "Күндік нормаңыз:",
    resultWater: "Ұсынылатын су мөлшері:",
    socialTitle: "Әлеуметтік желілердеміз",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Барлық құқықтар қорғалған.",
  },
  ky: {
    appNoticeTitle: "Маанилүү эскертүү! 📱✨",
    appNoticeText: "Биздин тиркеме азырынча Android үчүн жеткиликтүү. Жакында Apple (iOS) версиясы да даяр болот! 🍏 Ага чейин веб-сайтыбызды колдонуп турсаңыз болот. 🚀",
    navFeatures: "Өзгөчөлүктөр",
    navHowItWorks: "Иштөө тартиби",
    navCalorieDeficit: "Калория Калькулятору",
    downloadApk: "APK жүктөө",
    visitWebsite: "Сайтка өтүү",
    contactSupport: "Байланышуу",
    heroTitle: "Сиздин AI акылдуу калория жана диета жардамчыңыз",
    heroSubtitle: "Тамакты сүрөткө тартып коюңуз! Caloriest AI бир нече секундда калорияларды эсептеп берет.",
    scanDemoTitle: "AI Сканерлөө системасы",
    scanDemoText: "Тоок жана жашылча салаты - 340 Ккал табылды",
    protein: "Белок",
    carbs: "Углевод",
    fat: "Май",
    feature1Title: "Сүрөт аркылуу тез анализ",
    feature1Desc: "Тамакты 98% тактык менен көз ирмемде таануу.",
    feature2Title: "Арыктоо үчүн калория дефицити",
    feature2Desc: "Салмак жоготуу процессин так көзөмөлдөө.",
    feature3Title: "Салмак кошуу жана булчуң чогултуу",
    feature3Desc: "Салмак кошуу үчүн жогорку белоктуу меню.",
    calcTitle: "Калория жана суу калькулятору",
    calcSubtitle: "Өзүңүздүн көрсөткүчтөрдү кийирип норманы билиңиз",
    weight: "Салмагыңыз (кг):",
    height: "Боюңуз (см):",
    goal: "Максатыңыз:",
    goalLoss: "Арыктоо (Дефицит)",
    goalMaintain: "Салмакты сактоо",
    goalGain: "Салмак кошуу (Профицит)",
    calculateBtn: "Эсептөө",
    resultTarget: "Күндүк нормаңыз:",
    resultWater: "Сунушталган суу нормасы:",
    socialTitle: "Биз социалдык тармактарда",
    tgBtn: "Telegram: @alimjanove001",
    instaBtn: "Instagram: @alimjanove",
    footerText: "© 2026 Caloriest AI. Бардык укуктар корголгон.",
  }
};

const NOTICE_NAV_LABELS: Record<Language, string> = {
  uz: "Eslatma",
  en: "Notice",
  ru: "Уведомление",
  es: "Aviso",
  fr: "Avis",
  de: "Hinweis",
  tr: "Duyuru",
  ar: "تنبيه",
  zh: "提示",
  ja: "お知らせ",
  ko: "안내",
  pt: "Aviso",
  hi: "सूचना",
  it: "Avviso",
  kk: "Ескерту",
  ky: "Эскертүү",
};

export default function App() {
  // REQUIREMENT: Theme defaults to WHITE (Light mode) on first visit
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // Language state (Default: Uzbek)
  const [lang, setLang] = useState<Language>('uz');
  const [langDropdownOpen, setLangDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Keep dark-mode utilities independent of the operating system preference.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode, lang]);

  // Scanner Animation Effect State
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanStep, setScanStep] = useState<number>(1);

  // Calculator State
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'loss' | 'maintain' | 'gain'>('loss');
  const [calculatedCal, setCalculatedCal] = useState<number | null>(null);
  const [calculatedWater, setCalculatedWater] = useState<number | null>(null);

  // Translation helper
  const t = (key: string): string => {
    if (key === 'navNotice') return NOTICE_NAV_LABELS[lang];
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  // Scanning simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setScanStep((s) => (s % 3) + 1);
          return 0;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Calculator Logic
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    let base = 10 * weight + 6.25 * height - 5 * 25 + 5; 
    let tdee = base * 1.375;

    if (goal === 'loss') {
      tdee -= 500;
    } else if (goal === 'gain') {
      tdee += 400;
    }

    setCalculatedCal(Math.round(tdee));
    setCalculatedWater(parseFloat((weight * 0.035).toFixed(1)));
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0a0f1d] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* ================= HEADER / NAVIGATION ================= */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-[#0a0f1d]/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with Exact Leaf Icon */}
          <div className="flex items-center gap-3">
            <LeafLogo className="w-10 h-10 shadow-md shadow-emerald-500/20" />
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
                Caloriest AI
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-bold">Diet & Smart Nutrition</span>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-bold opacity-90">
            <a href="#features" className="hover:text-emerald-500 transition-colors">{t('navFeatures')}</a>
            <a href="#notice" className="hover:text-emerald-500 transition-colors">{t('navNotice')}</a>
            <a href="#calculator" className="hover:text-emerald-500 transition-colors">{t('navCalorieDeficit')}</a>
          </nav>

          {/* Action Tools & Switchers */}
          <div className="hidden xl:flex items-center gap-4">
            
            {/* Multi-language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-emerald-500' : 'bg-white border-slate-300 hover:border-emerald-500'}`}
              >
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                <span>{LANGUAGES.find(l => l.code === lang)?.name}</span>
              </button>

              {langDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-2xl shadow-xl border py-2 z-50 grid grid-cols-1 max-h-72 overflow-y-auto ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-xs flex items-center gap-3 hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors ${lang === l.code ? 'text-emerald-500 font-bold' : 'font-medium'}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark / Light Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-colors ${darkMode ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'}`}
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Link to Web App */}
            <a 
              href="https://caloriestorg.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-2"
            >
              <span>{t('visitWebsite')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-300 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-300 dark:border-slate-700"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className={`xl:hidden border-b px-4 py-6 space-y-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <nav className="flex flex-col space-y-3 font-bold text-sm">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>{t('navFeatures')}</a>
              <a href="#notice" onClick={() => setMobileMenuOpen(false)}>{t('navNotice')}</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>{t('navCalorieDeficit')}</a>
              <a href="/app-debug.apk" download="Caloriest_AI_v1.0.apk" onClick={() => setMobileMenuOpen(false)}>{t('downloadApk')}</a>
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <label className="text-xs text-slate-400 font-bold">Tilni tanlang / Select Language:</label>
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Language)}
                className={`p-2 rounded-lg text-sm font-semibold border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'}`}
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.flag} {l.name}</option>
                ))}
              </select>

              <a 
                href="https://caloriestorg.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-xl bg-emerald-500 text-white font-bold text-sm"
              >
                {t('visitWebsite')}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>AI PHOTO RECOGNITION 2.0</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                {t('heroTitle')}
              </h1>

              <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t('heroSubtitle')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                
                {/* Download Button */}
                <a 
                  href="/app-debug.apk"
                  download="Caloriest_AI_v1.0.apk"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-base"
                >
                  <Download className="w-5 h-5 stroke-[2.5]" />
                  <span>{t('downloadApk')}</span>
                </a>

                {/* Visit Site Button */}
                <a 
                  href="https://caloriestorg.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto px-8 py-4 rounded-xl border font-extrabold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-base ${darkMode ? 'bg-slate-900 border-emerald-500/40 text-emerald-400 hover:bg-slate-800' : 'bg-white border-emerald-500 text-emerald-600 hover:bg-emerald-50'}`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('visitWebsite')}</span>
                </a>

                {/* Support Contact */}
                <a 
                  href="https://t.me/alimjanove001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto p-4 rounded-xl border transition-all flex items-center justify-center ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-emerald-500' : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-500'}`}
                  title={t('contactSupport')}
                >
                  <Send className="w-5 h-5 text-emerald-500" />
                </a>
              </div>

              {/* Quick Badges */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-bold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Free Trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>No Registration Needed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Phone Scanner Viewport */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`relative w-full max-w-[320px] h-[min(580px,155vw)] min-h-[480px] rounded-[44px] border-[8px] p-4 shadow-2xl transition-all ${darkMode ? 'bg-slate-950 border-slate-800 shadow-emerald-500/10' : 'bg-slate-900 border-slate-800 shadow-slate-400'}`}>
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-b-xl z-30" />

                {/* Phone Screen Viewport */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 text-white flex flex-col justify-between p-4 pt-7">
                  
                  {/* Camera Header Simulation */}
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-[10px] font-bold">AI Scanner Active</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  {/* Dynamic Scanner Screen */}
                  <div className="relative my-auto h-60 rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-800/80 flex items-center justify-center">
                    
                    {/* Simulated Food Image */}
                    <img 
                      src={scanStep === 1 
                        ? "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" 
                        : scanStep === 2 
                        ? "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
                        : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                      } 
                      alt="Food scanner"
                      className="w-full h-full object-cover opacity-80"
                    />

                    {/* Scanning Laser Animation Line */}
                    <div 
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#22c55e] z-10"
                      style={{ top: `${scanProgress}%` }}
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:16px_16px]" />

                    <div className="absolute w-20 h-20 border-2 border-dashed border-emerald-400/80 rounded-xl pointer-events-none animate-pulse flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                    </div>
                  </div>

                  {/* AI Results Output Card */}
                  <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700/80 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">{t('scanDemoTitle')}</span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">98% Match</span>
                    </div>

                    <p className="text-xs text-slate-200 font-bold">{t('scanDemoText')}</p>

                    <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-0.5 font-bold">
                      <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-700">
                        <span className="block text-slate-400">{t('protein')}</span>
                        <span className="font-extrabold text-emerald-400">28g</span>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-700">
                        <span className="block text-slate-400">{t('carbs')}</span>
                        <span className="font-extrabold text-amber-400">32g</span>
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-700">
                        <span className="block text-slate-400">{t('fat')}</span>
                        <span className="font-extrabold text-rose-400">12g</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SPECIAL NOTICE SECTION (Moved down from header) ================= */}
      <section id="notice" className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg transition-colors relative overflow-hidden ${darkMode ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-950'}`}>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-start gap-4 text-center sm:text-left">
                <div className="p-3 rounded-2xl bg-emerald-500/20 shrink-0 mx-auto sm:mx-0">
                  <Smartphone className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-lg font-extrabold">{t('appNoticeTitle')}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">Android & Web</span>
                  </div>
                  <p className="text-sm font-semibold opacity-90 max-w-2xl leading-relaxed">
                    {t('appNoticeText')}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                  <Apple className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>iOS Version Soon</span>
                </div>
                
                <a 
                  href="https://caloriestorg.lovable.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>{t('visitWebsite')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className={`py-16 border-t ${darkMode ? 'border-slate-800/80 bg-[#070b14]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {t('navFeatures')}
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/80 border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature1Title')}</h3>
              <p className={`text-sm leading-relaxed font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t('feature1Desc')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/80 border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-5">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature2Title')}</h3>
              <p className={`text-sm leading-relaxed font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t('feature2Desc')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/80 border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature3Title')}</h3>
              <p className={`text-sm leading-relaxed font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t('feature3Desc')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CALCULATOR SECTION ================= */}
      <section id="calculator" className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl relative overflow-hidden ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'}`}>
            
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-extrabold">{t('calcTitle')}</h2>
              <p className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{t('calcSubtitle')}</p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Weight Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-500">{t('weight')}</label>
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className={`w-full p-3.5 rounded-xl border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>

                {/* Height Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-500">{t('height')}</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className={`w-full p-3.5 rounded-xl border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
                  />
                </div>

              </div>

              {/* Goal Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-slate-500">{t('goal')}</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  
                  <button
                    type="button"
                    onClick={() => setGoal('loss')}
                    className={`p-3.5 rounded-xl border text-xs font-extrabold transition-all ${goal === 'loss' ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' : darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                  >
                    {t('goalLoss')}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('maintain')}
                    className={`p-3.5 rounded-xl border text-xs font-extrabold transition-all ${goal === 'maintain' ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' : darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                  >
                    {t('goalMaintain')}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('gain')}
                    className={`p-3.5 rounded-xl border text-xs font-extrabold transition-all ${goal === 'gain' ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' : darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                  >
                    {t('goalGain')}
                  </button>

                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                {t('calculateBtn')}
              </button>
            </form>

            {/* Output */}
            {calculatedCal && (
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <Flame className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
                  <span className="text-xs text-slate-500 font-bold block">{t('resultTarget')}</span>
                  <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{calculatedCal} Kcal</span>
                </div>

                <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-center">
                  <Droplet className="w-6 h-6 text-teal-500 mx-auto mb-1" />
                  <span className="text-xs text-slate-500 font-bold block">{t('resultWater')}</span>
                  <span className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">{calculatedWater} L</span>
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`py-12 border-t ${darkMode ? 'border-slate-800/80 bg-[#050810]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Branding Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <LeafLogo className="w-8 h-8" />
                <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">Caloriest AI</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-xs">
                Smart nutrition AI scanner & personal diet management platform.
              </p>
            </div>

            {/* Social Channels */}
            <div className="space-y-2.5 text-xs font-bold">
              <span className="font-extrabold text-slate-400 block mb-1">{t('socialTitle')}</span>
              
              <a 
                href="https://t.me/alimjanove001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t('tgBtn')}</span>
              </a>

              <a 
                href="https://instagram.com/alimjanove" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-500" />
                <span>{t('instaBtn')}</span>
              </a>
            </div>

            {/* Direct Link */}
            <div className="space-y-2 text-xs font-bold">
              <span className="font-extrabold text-slate-400 block mb-1">Web Platform</span>
              <a 
                href="https://caloriestorg.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all"
              >
                <span>caloriestorg.lovable.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 font-bold">
            <span>{t('footerText')}</span>
          </div>

        </div>
      </footer>

    </div>
  );
}