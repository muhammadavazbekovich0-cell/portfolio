/* ==========================================================================
   MUHAMMAD.DEV — PORTFOLIO APPLICATION SCRIPT
   Includes: 4 Live Netlify Project Cards (Uzum, BMW, Samsung, BrainGame UZB),
   Separate Page View Switching, 30-Language System + RTL + Locale
   Formatting, Particles, Cursor, Typing Animation, Counters, Modals, Clock
   ========================================================================== */

(() => {
  "use strict";

  /* ------------------------------------------------------------------------
     1. 30 LANGUAGES DEFINITION (Uzbek Default; Arabic/Urdu/Persian RTL)
     ------------------------------------------------------------------------ */
  const LANGUAGES_30 = [
    { code: "uz", flag: "🇺🇿", name: "O'zbekcha", native: "O'zbekcha", locale: "uz-UZ", rtl: false },
    { code: "ru", flag: "🇷🇺", name: "Russian", native: "Русский", locale: "ru-RU", rtl: false },
    { code: "en-US", flag: "🇺🇸", name: "English (USA)", native: "English (US)", locale: "en-US", rtl: false },
    { code: "en-GB", flag: "🇬🇧", name: "English (UK)", native: "English (UK)", locale: "en-GB", rtl: false },
    { code: "tr", flag: "🇹🇷", name: "Turkish", native: "Türkçe", locale: "tr-TR", rtl: false },
    { code: "de", flag: "🇩🇪", name: "German", native: "Deutsch", locale: "de-DE", rtl: false },
    { code: "fr", flag: "🇫🇷", name: "French", native: "Français", locale: "fr-FR", rtl: false },
    { code: "es", flag: "🇪🇸", name: "Spanish", native: "Español", locale: "es-ES", rtl: false },
    { code: "it", flag: "🇮🇹", name: "Italian", native: "Italiano", locale: "it-IT", rtl: false },
    { code: "pt", flag: "🇵🇹", name: "Portuguese", native: "Português", locale: "pt-PT", rtl: false },
    { code: "pt-BR", flag: "🇧🇷", name: "Brazilian Portuguese", native: "Português (Brasil)", locale: "pt-BR", rtl: false },
    { code: "ar", flag: "🇸🇦", name: "Arabic", native: "العربية", locale: "ar-SA", rtl: true },
    { code: "zh-CN", flag: "🇨🇳", name: "Chinese Simplified", native: "简体中文", locale: "zh-CN", rtl: false },
    { code: "zh-TW", flag: "🇹🇼", name: "Chinese Traditional", native: "繁體中文", locale: "zh-TW", rtl: false },
    { code: "ja", flag: "🇯🇵", name: "Japanese", native: "日本語", locale: "ja-JP", rtl: false },
    { code: "ko", flag: "🇰🇷", name: "Korean", native: "한국어", locale: "ko-KR", rtl: false },
    { code: "hi", flag: "🇮🇳", name: "Hindi", native: "हिन्दी", locale: "hi-IN", rtl: false },
    { code: "ur", flag: "🇵🇰", name: "Urdu", native: "اردو", locale: "ur-PK", rtl: true },
    { code: "fa", flag: "🇮🇷", name: "Persian", native: "فارسی", locale: "fa-IR", rtl: true },
    { code: "kk", flag: "🇰🇿", name: "Kazakh", native: "Қазақша", locale: "kk-KZ", rtl: false },
    { code: "ky", flag: "🇰🇬", name: "Kyrgyz", native: "Кыргызча", locale: "ky-KG", rtl: false },
    { code: "tg", flag: "🇹🇯", name: "Tajik", native: "Тоҷикӣ", locale: "tg-TJ", rtl: false },
    { code: "az", flag: "🇦🇿", name: "Azerbaijani", native: "Azərbaycanca", locale: "az-AZ", rtl: false },
    { code: "uk", flag: "🇺🇦", name: "Ukrainian", native: "Українська", locale: "uk-UA", rtl: false },
    { code: "pl", flag: "🇵🇱", name: "Polish", native: "Polski", locale: "pl-PL", rtl: false },
    { code: "nl", flag: "🇳🇱", name: "Dutch", native: "Nederlands", locale: "nl-NL", rtl: false },
    { code: "sv", flag: "🇸🇪", name: "Swedish", native: "Svenska", locale: "sv-SE", rtl: false },
    { code: "nb", flag: "🇳🇴", name: "Norwegian", native: "Norsk", locale: "nb-NO", rtl: false },
    { code: "el", flag: "🇬🇷", name: "Greek", native: "Ελληνικά", locale: "el-GR", rtl: false },
    { code: "id", flag: "🇮🇩", name: "Indonesian", native: "Bahasa Indonesia", locale: "id-ID", rtl: false }
  ];

  const UZ_DICT = {
    "nav.home": "Bosh sahifa",
    "nav.about": "Men haqimda",
    "nav.skills": "Ko'nikmalar",
    "nav.projects": "Loyihalar",
    "nav.experience": "Tajriba",
    "nav.services": "Xizmatlar",
    "nav.testimonials": "Fikrlar",
    "nav.contact": "Aloqa",
    "hero.status": "Loyihalar uchun ochiq • Muhammad",
    "hero.greeting": "Salom, men",
    "hero.rolePrefix": "Men",
    "hero.subtitle": "Zamonaviy veb-ilovalar, yuqori aniqlikdagi UI/UX interfeyslar va tez ishlaydigan frontend arxitekturalarini yarataman.",
    "hero.ctaProjects": "Loyihalarni ko'rish",
    "hero.ctaCv": "CV ko'rish / Yuklash",
    "hero.ctaContact": "Bog'lanish",
    "hero.scrollDown": "Sahifaga o'tish",
    "common.demoNote": "4 Live Netlify Projects Ready",
    "about.eyebrow": "01 / PROFIL",
    "about.title": "Men haqimda",
    "about.subtitle": "Texnologiya, estetika va foydalanuvchi tajribasi chorrahasidagi muhandislik.",
    "about.bioHeading": "Biografiya va Shaxsiy Kirish",
    "about.bioText": "Men Muhammad — veb-interfeyslar, interaktiv animatsiyalar va foydalanuvchiga qulay raqamli mahsulotlar yaratishga ixtisoslashgan dasturchiman. Har bir loyihada toza kod, tezkor yuklanish va vizual muvozanatga e'tibor qarataman.",
    "about.journeyHeading": "Dasturlashdagi yo'lim",
    "about.journeyText": "Oddiy statik sahifalarni tahrirlashdan boshlab, murakkab interaktiv foydalanuvchi interfeyslari, dizayn tizimlari va tezlik optimallashtirishgacha bo'lgan bosqichlarni bosib o'tdim.",
    "about.goalsTitle": "Karyera maqsadlari",
    "about.goalsText": "Xalqaro darajadagi mahsulot jamoalarida yuqori sifatli UI/UX va frontend yechimlar yaratish.",
    "about.qualitiesTitle": "Shaxsiy fazilatlar",
    "about.qualitiesText": "Detallarga e'tibor, mustaqil izlanish, jamoada samarali muloqot va mas'uliyat.",
    "about.philosophyTitle": "Falsafam",
    "about.philosophyText": "Murakkab texnologiya foydalanuvchi uchun sodda, ravon va tabiiy ko'rinishi kerak.",
    "about.timelineHeading": "O'rganish va yutuqlar xronologiyasi",
    "about.tl1Title": "HTML5, CSS3 va Semantik Veb",
    "about.tl1Desc": "Grid, Flexbox, CSS o'zgaruvchilari va moslashuvchan tartiblarni o'zlashtirish.",
    "about.tl2Title": "Modern JavaScript & UI/UX",
    "about.tl2Desc": "DOM arxitekturasi, animatsiyalar, lokalizatsiya va foydalanuvchi oqimlarini loyihalash.",
    "about.tl3Title": "Performance & Design Systems",
    "about.tl3Desc": "Ko'p tilli interfeyslar, qulaylik standartlari va mukammal vizual tizimlar yaratish.",
    "stats.years": "Yillik amaliyot (Namuna)",
    "stats.projects": "Jonli Netlify loyihalar",
    "stats.languages": "Qo'llab-quvvatlanuvchi til",
    "stats.responsive": "Moslashuvchan dizayn",
    "skills.eyebrow": "02 / TEXNOLOGIYALAR",
    "skills.title": "Ko'nikmalar",
    "skills.note": "Eslatma: Quyidagi foiz ko'rsatkichlari o'zgartiriladigan namuna (demo) qiymatlaridir.",
    "skills.catAll": "Barchasi",
    "skills.catCore": "Core Web",
    "skills.catTools": "Workflow & Git",
    "skills.catDesign": "UI/UX & Design",
    "projects.eyebrow": "03 / PORTFOLIO",
    "projects.title": "Tanlangan loyihalar",
    "projects.subtitle": "Uzum, BMW, Samsung va BrainGame UZB loyihalari — jonli havolalar va batafsil ko'rish oynasi bilan.",
    "projects.catAll": "All",
    "projects.catWebsites": "Websites",
    "projects.catLanding": "Landing Pages",
    "projects.catJs": "JavaScript Apps",
    "projects.catUi": "UI Design",
    "experience.eyebrow": "04 / YO'L XARITASI",
    "experience.title": "Tajriba va Ta'lim",
    "experience.subtitle": "Dasturlash yo'li, ta'lim, kurslar, sertifikatlar va tajriba (tahrirlanadigan namuna ma'lumotlar).",
    "services.eyebrow": "05 / IMKONIYATLAR",
    "services.title": "Xizmatlar",
    "services.subtitle": "Zamonaviy veb-yechimlar va interfeyslarni ishlab chiqish yo'nalishlari.",
    "testimonials.eyebrow": "06 / FIKRLAR",
    "testimonials.title": "Mijozlar fikrlari",
    "testimonials.demoDisclaimer": "Demo Content: Quyidagi sharhlar namuna (placeholder) maqsadida kiritilgan va real mijozlar sharhlari emas.",
    "extras.eyebrow": "07 / INTERAKTIV MODULLAR",
    "extras.title": "Dasturchi laboratoriyasi",
    "extras.subtitle": "Jonli kod muharriri, terminal, texnologiyalar orbitasi va boshqa qo'shimcha modullar.",
    "extras.orbitTitle": "Texnologiyalar Orbitasi",
    "extras.orbitDesc": "Asosiy veb texnologiyalarning aylanma vizualizatsiyasi.",
    "extras.ghTitle": "GitHub Profil Statistikasi",
    "extras.ghNote": "Haqiqiy GitHub statistikasi uchun GitHub REST API yoki o'z ma'lumotlaringizni ulang. Quyida namuna ko'rsatkichlar keltirilgan.",
    "extras.faqTitle": "Ko'p so'raladigan savollar (FAQ)",
    "extras.newsTitle": "Yangiliklarga obuna bo'lish",
    "extras.newsDesc": "Yangi loyihalar va maqolalar haqida xabardor bo'ling. (Frontend demo UI — ulanish uchun backend endpoint qo'shing).",
    "extras.newsBtn": "Obuna bo'lish",
    "extras.visitTitle": "Sahifa tashriflari hisoblagichi",
    "extras.visitDesc": "Haqiqiy umumiy tashriflar sonini saqlash uchun backend API yoki ma'lumotlar bazasi talab qilinadi. Quyida lokal brauzer sessiyasi ko'rsatilgan:",
    "extras.localVisitsLabel": "Mahalliy brauzer tashriflari:",
    "contact.eyebrow": "08 / BOG'LANISH",
    "contact.title": "Aloqa",
    "contact.subtitle": "Muhammad bilan bog'lanish — loyiha yoki hamkorlik bo'yicha xabar yuboring.",
    "contact.backendNotice": "Eslatma: Ushbu shakl faqat mijoz tomonida tekshiradi. Xabarlarni haqiqiy yuborish uchun backend yoki email servis (masalan, Formspree / API) ulanishi kerak.",
    "contact.labelName": "Ismingiz",
    "contact.labelEmail": "Email manzil",
    "contact.labelSubject": "Mavzu",
    "contact.labelMessage": "Xabar",
    "contact.submitBtn": "Xabarni tekshirish va tayyorlash",
    "contact.directHeading": "To'g'ridan-to'g'ri aloqa (Muhammad)",
    "contact.directText": "Quyidagi telefon raqamlari va havolalar orqali bog'lanishingiz mumkin:",
    "notFound.title": "Sahifa topilmadi",
    "notFound.desc": "Siz izlagan sahifa mavjud emas. Bosh sahifaga qayting.",
    "notFound.backBtn": "Asosiy sahifaga qaytish",
    "footer.tagline": "30 tilli zamonaviy dasturchi portfoliyosi • Muhammad.",
    "footer.clockLabel": "Soat & Sana:",
    "footer.copyright": "© 2026 Muhammad. Barcha huquqlar himoyalangan.",
    "cookie.text": "Ushbu sayt tanlangan til, sahifa va mavzuni saqlash uchun faqat lokal brauzer xotirasidan (localStorage) foydalanadi.",
    "cookie.accept": "Tushundim"
  };

  const TRANSLATIONS = {
    uz: { ...UZ_DICT, roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"] },
    ru: {
      ...UZ_DICT,
      "nav.home": "Главная", "nav.about": "Обо мне", "nav.skills": "Навыки", "nav.projects": "Проекты",
      "nav.experience": "Опыт", "nav.services": "Услуги", "nav.testimonials": "Отзывы", "nav.contact": "Контакты",
      "hero.status": "Открыт к проектам • Мухаммад", "hero.greeting": "Привет, я", "hero.rolePrefix": "Я —",
      "hero.subtitle": "Создаю современные веб-интерфейсы, адаптивные макеты и быстрый фронтенд.",
      "hero.ctaProjects": "Смотреть проекты", "hero.ctaCv": "Резюме (CV)", "hero.ctaContact": "Связаться",
      "hero.scrollDown": "Перейти к странице", "about.title": "Обо мне", "skills.title": "Навыки",
      "projects.title": "Проекты", "experience.title": "Опыт и образование", "services.title": "Услуги",
      "testimonials.title": "Отзывы", "contact.title": "Контакты", "contact.submitBtn": "Проверить сообщение",
      "footer.copyright": "© 2026 Мухаммад. Все права защищены.", "cookie.accept": "Понятно",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    "en-US": {
      ...UZ_DICT,
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.services": "Services", "nav.testimonials": "Testimonials", "nav.contact": "Contact",
      "hero.status": "Available for work • Muhammad", "hero.greeting": "Hello, I'm", "hero.rolePrefix": "I am a",
      "hero.subtitle": "Crafting futuristic interfaces, responsive layouts, and clean frontend experiences.",
      "hero.ctaProjects": "View Projects", "hero.ctaCv": "Preview / Download CV", "hero.ctaContact": "Get in Touch",
      "hero.scrollDown": "Open page", "about.title": "About Me", "skills.title": "Skills",
      "projects.title": "Featured Projects", "experience.title": "Experience & Education", "services.title": "Services",
      "testimonials.title": "Testimonials", "contact.title": "Contact", "contact.submitBtn": "Validate & Prepare Message",
      "footer.copyright": "© 2026 Muhammad. All rights reserved.", "cookie.accept": "Got it",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Technologist", "Web Architect"]
    },
    "en-GB": {
      ...UZ_DICT,
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.services": "Services", "nav.testimonials": "Testimonials", "nav.contact": "Contact",
      "hero.status": "Available for work • Muhammad", "hero.greeting": "Hello, I'm", "hero.rolePrefix": "I'm a",
      "hero.subtitle": "Building accessible, responsive web interfaces and interactive experiences.",
      "hero.ctaProjects": "View Projects", "hero.ctaCv": "View / Download CV", "hero.ctaContact": "Contact Me",
      "hero.scrollDown": "Open page", "about.title": "About Me", "skills.title": "Skills",
      "projects.title": "Projects", "experience.title": "Experience & Education", "services.title": "Services",
      "testimonials.title": "Testimonials", "contact.title": "Contact", "contact.submitBtn": "Validate Message",
      "footer.copyright": "© 2026 Muhammad. All rights reserved.", "cookie.accept": "Understood",
      roles: ["Frontend Developer", "UI/UX Designer", "Interface Engineer", "Web Architect"]
    },
    tr: {
      ...UZ_DICT,
      "nav.home": "Ana Sayfa", "nav.about": "Hakkımda", "nav.skills": "Yetenekler", "nav.projects": "Projeler",
      "nav.experience": "Deneyim", "nav.services": "Hizmetler", "nav.testimonials": "Yorumlar", "nav.contact": "İletişim",
      "hero.status": "İşlere açık • Muhammad", "hero.greeting": "Merhaba, ben", "hero.rolePrefix": "Ben bir",
      "about.title": "Hakkımda", "skills.title": "Yetenekler", "projects.title": "Projeler",
      "services.title": "Hizmetler", "testimonials.title": "Yorumlar", "contact.title": "İletişim", "cookie.accept": "Tamam",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    de: {
      ...UZ_DICT,
      "nav.home": "Start", "nav.about": "Über mich", "nav.skills": "Fähigkeiten", "nav.projects": "Projekte",
      "nav.experience": "Werdegang", "nav.services": "Leistungen", "nav.testimonials": "Referenzen", "nav.contact": "Kontakt",
      "hero.greeting": "Hallo, ich bin", "about.title": "Über mich", "skills.title": "Fähigkeiten",
      "projects.title": "Projekte", "services.title": "Leistungen", "contact.title": "Kontakt", "cookie.accept": "Verstanden",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    fr: {
      ...UZ_DICT,
      "nav.home": "Accueil", "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets",
      "nav.experience": "Parcours", "nav.services": "Services", "nav.testimonials": "Témoignages", "nav.contact": "Contact",
      "hero.greeting": "Bonjour, je suis", "about.title": "À propos", "skills.title": "Compétences",
      "projects.title": "Projets", "services.title": "Services", "contact.title": "Contact", "cookie.accept": "Compris",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    es: {
      ...UZ_DICT,
      "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.skills": "Habilidades", "nav.projects": "Proyectos",
      "nav.experience": "Experiencia", "nav.services": "Servicios", "nav.testimonials": "Testimonios", "nav.contact": "Contacto",
      "hero.greeting": "Hola, soy", "about.title": "Sobre mí", "skills.title": "Habilidades",
      "projects.title": "Proyectos", "services.title": "Servicios", "contact.title": "Contacto", "cookie.accept": "Entendido",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    it: {
      ...UZ_DICT,
      "nav.home": "Home", "nav.about": "Chi sono", "nav.skills": "Competenze", "nav.projects": "Progetti",
      "nav.experience": "Esperienza", "nav.services": "Servizi", "nav.testimonials": "Testimonianze", "nav.contact": "Contatti",
      "hero.greeting": "Ciao, sono", "about.title": "Chi sono", "skills.title": "Competenze",
      "projects.title": "Progetti", "services.title": "Servizi", "contact.title": "Contatti",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    pt: {
      ...UZ_DICT,
      "nav.home": "Início", "nav.about": "Sobre", "nav.skills": "Competências", "nav.projects": "Projetos",
      "nav.experience": "Experiência", "nav.services": "Serviços", "nav.testimonials": "Depoimentos", "nav.contact": "Contato",
      "hero.greeting": "Olá, sou", "about.title": "Sobre mim", "skills.title": "Projetos", "services.title": "Serviços",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    "pt-BR": {
      ...UZ_DICT,
      "nav.home": "Início", "nav.about": "Sobre", "nav.skills": "Habilidades", "nav.projects": "Projetos",
      "nav.experience": "Experiência", "nav.services": "Serviços", "nav.testimonials": "Depoimentos", "nav.contact": "Contato",
      "hero.greeting": "Olá, eu sou", "about.title": "Sobre mim", "skills.title": "Habilidades", "projects.title": "Projetos",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    ar: {
      ...UZ_DICT,
      "nav.home": "الرئيسية", "nav.about": "عني", "nav.skills": "المهارات", "nav.projects": "المشاريع",
      "nav.experience": "الخبرة", "nav.services": "الخدمات", "nav.testimonials": "الآراء", "nav.contact": "تواصل",
      "hero.greeting": "مرحباً، أنا", "hero.ctaProjects": "عرض المشاريع", "hero.ctaContact": "تواصل معي",
      "about.title": "عني", "skills.title": "المهارات", "projects.title": "المشاريع",
      "services.title": "الخدمات", "testimonials.title": "الآراء", "contact.title": "تواصل", "cookie.accept": "حسناً",
      roles: ["مطور واجهات أمامية", "مصمم UI/UX", "مطور إبداعي", "مهندس ويب"]
    },
    "zh-CN": {
      ...UZ_DICT,
      "nav.home": "首页", "nav.about": "关于我", "nav.skills": "技能", "nav.projects": "项目",
      "nav.experience": "经历", "nav.services": "服务", "nav.testimonials": "评价", "nav.contact": "联系",
      "hero.greeting": "你好，我是", "about.title": "关于我", "skills.title": "技能", "projects.title": "精选项目",
      "cookie.accept": "知道了",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    "zh-TW": {
      ...UZ_DICT,
      "nav.home": "首頁", "nav.about": "關於我", "nav.skills": "技能", "nav.projects": "專案",
      "nav.experience": "經歷", "nav.services": "服務", "nav.testimonials": "評價", "nav.contact": "聯絡",
      "hero.greeting": "你好，我是", "about.title": "關於我", "skills.title": "技能", "projects.title": "精選專案",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    ja: {
      ...UZ_DICT,
      "nav.home": "ホーム", "nav.about": "自己紹介", "nav.skills": "スキル", "nav.projects": "プロジェクト",
      "nav.experience": "経歴", "nav.services": "サービス", "nav.testimonials": "お客様の声", "nav.contact": "お問い合わせ",
      "hero.greeting": "こんにちは、", "about.title": "自己紹介", "skills.title": "スキル", "projects.title": "プロジェクト",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    ko: {
      ...UZ_DICT,
      "nav.home": "홈", "nav.about": "소개", "nav.skills": "기술", "nav.projects": "프로젝트",
      "nav.experience": "경력", "nav.services": "서비스", "nav.testimonials": "후기", "nav.contact": "연락처",
      "hero.greeting": "안녕하세요,", "about.title": "소개", "skills.title": "기술", "projects.title": "프로젝트",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    hi: {
      ...UZ_DICT,
      "nav.home": "होम", "nav.about": "मेरे बारे में", "nav.skills": "कौशल", "nav.projects": "प्रोजेक्ट्स",
      "nav.experience": "अनुभव", "nav.services": "सेवाएं", "nav.testimonials": "प्रशंसापत्र", "nav.contact": "संपर्क",
      "hero.greeting": "नमस्ते, मैं हूँ", "about.title": "मेरे बारे में", "skills.title": "कौशल", "projects.title": "प्रोजेक्ट्स",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    ur: {
      ...UZ_DICT,
      "nav.home": "ہوم", "nav.about": "میرے بارے میں", "nav.skills": "مہارتیں", "nav.projects": "پروجیکٹس",
      "nav.experience": "تجربہ", "nav.services": "خدمات", "nav.testimonials": "تاثرات", "nav.contact": "رابطہ",
      "hero.greeting": "السلام علیکم، میں ہوں", "about.title": "میرے بارے میں", "skills.title": "مہارتیں", "projects.title": "پروجیکٹس",
      roles: ["فرنٹ اینڈ ڈویلپر", "UI/UX ڈیزائنر", "کریئیٹیو کوڈر", "ویب آرکیٹیکٹ"]
    },
    fa: {
      ...UZ_DICT,
      "nav.home": "خانه", "nav.about": "درباره من", "nav.skills": "مهارت‌ها", "nav.projects": "پروژه‌ها",
      "nav.experience": "تجربه", "nav.services": "خدمات", "nav.testimonials": "نظرات", "nav.contact": "تماس",
      "hero.greeting": "سلام، من هستم", "about.title": "درباره من", "skills.title": "مهارت‌ها", "projects.title": "پروژه‌ها",
      roles: ["توسعه‌دهنده فرانت‌اند", "طراح UI/UX", "کدنویس خلاق", "معمار وب"]
    },
    kk: {
      ...UZ_DICT,
      "nav.home": "Басты бет", "nav.about": "Мен туралы", "nav.skills": "Дағдылар", "nav.projects": "Жобалар",
      "nav.experience": "Тәжірибе", "nav.services": "Қызметтер", "nav.testimonials": "Пікірлер", "nav.contact": "Байланыс",
      "hero.greeting": "Сәлем, мен", "about.title": "Мен туралы", "skills.title": "Дағдылар", "projects.title": "Жобалар",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    ky: {
      ...UZ_DICT,
      "nav.home": "Башкы бет", "nav.about": "Мен жөнүндө", "nav.skills": "Көндүмдөр", "nav.projects": "Долбоорлор",
      "nav.experience": "Тажрыйба", "nav.services": "Кызматтар", "nav.testimonials": "Пикирлер", "nav.contact": "Байланыш",
      "hero.greeting": "Салам, мен", "about.title": "Мен жөнүндө", "skills.title": "Көндүмдөр", "projects.title": "Долбоорлор",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    tg: {
      ...UZ_DICT,
      "nav.home": "Асосӣ", "nav.about": "Дар бораи ман", "nav.skills": "Малакаҳо", "nav.projects": "Лоиҳаҳо",
      "nav.experience": "Таҷриба", "nav.services": "Хизматҳо", "nav.testimonials": "Фикрҳо", "nav.contact": "Тамос",
      "hero.greeting": "Салом, ман", "about.title": "Дар бораи ман", "skills.title": "Малакаҳо", "projects.title": "Лоиҳаҳо",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    az: {
      ...UZ_DICT,
      "nav.home": "Ana səhifə", "nav.about": "Haqqımda", "nav.skills": "Bacarıqlar", "nav.projects": "Layihələr",
      "nav.experience": "Təcrübə", "nav.services": "Xidmətlər", "nav.testimonials": "Rəylər", "nav.contact": "Əlaqə",
      "hero.greeting": "Salam, mən", "about.title": "Haqqımda", "skills.title": "Bacarıqlar", "projects.title": "Layihələr",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    uk: {
      ...UZ_DICT,
      "nav.home": "Головна", "nav.about": "Про мене", "nav.skills": "Навички", "nav.projects": "Проєкти",
      "nav.experience": "Досвід", "nav.services": "Послуги", "nav.testimonials": "Відгуки", "nav.contact": "Контакти",
      "hero.greeting": "Привіт, я", "about.title": "Про мене", "skills.title": "Навички", "projects.title": "Проєкти",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    pl: {
      ...UZ_DICT,
      "nav.home": "Start", "nav.about": "O mnie", "nav.skills": "Umiejętności", "nav.projects": "Projekty",
      "nav.experience": "Doświadczenie", "nav.services": "Usługi", "nav.testimonials": "Opinie", "nav.contact": "Kontakt",
      "hero.greeting": "Cześć, jestem", "about.title": "O mnie", "skills.title": "Umiejętności", "projects.title": "Projekty",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    nl: {
      ...UZ_DICT,
      "nav.home": "Home", "nav.about": "Over mij", "nav.skills": "Vaardigheden", "nav.projects": "Projecten",
      "nav.experience": "Ervaring", "nav.services": "Diensten", "nav.testimonials": "Reviews", "nav.contact": "Contact",
      "hero.greeting": "Hallo, ik ben", "about.title": "Over mij", "skills.title": "Vaardigheden", "projects.title": "Projecten",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    sv: {
      ...UZ_DICT,
      "nav.home": "Hem", "nav.about": "Om mig", "nav.skills": "Färdigheter", "nav.projects": "Projekt",
      "nav.experience": "Erfarenhet", "nav.services": "Tjänster", "nav.testimonials": "Omdömen", "nav.contact": "Kontakt",
      "hero.greeting": "Hej, jag är", "about.title": "Om mig", "skills.title": "Färdigheter", "projects.title": "Projekt",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    nb: {
      ...UZ_DICT,
      "nav.home": "Hjem", "nav.about": "Om meg", "nav.skills": "Ferdigheter", "nav.projects": "Prosjekter",
      "nav.experience": "Erfaring", "nav.services": "Tjenester", "nav.testimonials": "Anmeldelser", "nav.contact": "Kontakt",
      "hero.greeting": "Hei, jeg er", "about.title": "Om meg", "skills.title": "Ferdigheter", "projects.title": "Prosjekter",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    el: {
      ...UZ_DICT,
      "nav.home": "Αρχική", "nav.about": "Σχετικά", "nav.skills": "Δεξιότητες", "nav.projects": "Έργα",
      "nav.experience": "Εμπειρία", "nav.services": "Υπηρεσίες", "nav.testimonials": "Αξιολογήσεις", "nav.contact": "Επικοινωνία",
      "hero.greeting": "Γεια, είμαι ο", "about.title": "Σχετικά", "skills.title": "Δεξιότητες", "projects.title": "Έργα",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    },
    id: {
      ...UZ_DICT,
      "nav.home": "Beranda", "nav.about": "Tentang Saya", "nav.skills": "Keahlian", "nav.projects": "Proyek",
      "nav.experience": "Pengalaman", "nav.services": "Layanan", "nav.testimonials": "Testimoni", "nav.contact": "Kontak",
      "hero.greeting": "Halo, saya", "about.title": "Tentang Saya", "skills.title": "Keahlian", "projects.title": "Proyek",
      roles: ["Frontend Developer", "UI/UX Designer", "Creative Coder", "Web Architect"]
    }
  };

  /* ------------------------------------------------------------------------
     2. PORTFOLIO DATA (4 Live Netlify Projects + Sample/Editable Sections)
     ------------------------------------------------------------------------ */
  const SKILLS_DATA = [
    { id: "html5", name: "HTML5", icon: "H5", level: 92, category: "core", catLabel: "Core Web (Sample)" },
    { id: "css3", name: "CSS3", icon: "C3", level: 90, category: "core", catLabel: "Core Web (Sample)" },
    { id: "js", name: "JavaScript", icon: "JS", level: 86, category: "core", catLabel: "Core Web (Sample)" },
    { id: "rwd", name: "Responsive Design", icon: "RWD", level: 91, category: "design", catLabel: "UI/UX & Design (Sample)" },
    { id: "git", name: "Git", icon: "GIT", level: 84, category: "tools", catLabel: "Workflow & Git (Sample)" },
    { id: "github", name: "GitHub", icon: "GH", level: 85, category: "tools", catLabel: "Workflow & Git (Sample)" },
    { id: "uiux", name: "UI/UX", icon: "UI", level: 82, category: "design", catLabel: "UI/UX & Design (Sample)" },
    { id: "webdesign", name: "Web Design", icon: "WD", level: 87, category: "design", catLabel: "UI/UX & Design (Sample)" }
  ];

  const PROJECTS_DATA = [
    {
      id: "proj-uzum",
      title: "Uzum Web Showcase",
      brandMark: "UZUM",
      hostLabel: "uzumn111.netlify.app",
      category: "Websites",
      featured: true,
      gradient: "linear-gradient(135deg, rgba(168,85,247,0.42), rgba(59,130,246,0.28))",
      shortDesc: "Modern marketplace-inspired web interface hosted on Netlify with clean layout and interactive elements.",
      fullDesc: "Live web showcase deployed at https://uzumn111.netlify.app/. Designed with responsive grids, structured cards, and interactive UI components.",
      tags: ["HTML5", "CSS3", "JavaScript", "Websites"],
      demoUrl: "https://uzumn111.netlify.app/",
      repoUrl: "https://github.com"
    },
    {
      id: "proj-bmw",
      title: "BMW Automotive Landing",
      brandMark: "BMW",
      hostLabel: "bmwn111.netlify.app",
      category: "Landing Pages",
      featured: true,
      gradient: "linear-gradient(135deg, rgba(0,229,255,0.34), rgba(29,78,216,0.42))",
      shortDesc: "Sleek automotive landing page deployed on Netlify with dynamic sections and responsive styling.",
      fullDesc: "Live landing page hosted at https://bmwn111.netlify.app/. Built to present automotive visuals, clear typography, and smooth interactive transitions.",
      tags: ["HTML5", "CSS3", "JavaScript", "Landing Pages"],
      demoUrl: "https://bmwn111.netlify.app/",
      repoUrl: "https://github.com"
    },
    {
      id: "proj-samsung",
      title: "Samsung UI Showcase",
      brandMark: "SAMSUNG",
      hostLabel: "samsungn111.netlify.app",
      category: "UI Design",
      featured: true,
      gradient: "linear-gradient(135deg, rgba(37,99,235,0.42), rgba(0,229,255,0.28))",
      shortDesc: "Clean tech product UI presentation hosted on Netlify with modern card hierarchy and responsive view.",
      fullDesc: "Live UI showcase available at https://samsungn111.netlify.app/. Focuses on visual polish, balanced spacing, and adaptable screen layouts.",
      tags: ["UI Design", "HTML5", "CSS3", "Responsive"],
      demoUrl: "https://samsungn111.netlify.app/",
      repoUrl: "https://github.com"
    },
    {
      id: "proj-braingame",
      title: "BrainGame UZB",
      brandMark: "BRAINGAME UZB",
      hostLabel: "braingameuzb.netlify.app",
      category: "JavaScript Apps",
      featured: true,
      gradient: "linear-gradient(135deg, rgba(168,85,247,0.38), rgba(0,229,255,0.32))",
      shortDesc: "Interactive JavaScript brain/logic game web app in Uzbek hosted live at braingameuzb.netlify.app.",
      fullDesc: "Live JavaScript application at https://braingameuzb.netlify.app/. Features interactive game logic, user feedback, and responsive UI.",
      tags: ["JavaScript Apps", "HTML5", "CSS3", "Interactive"],
      demoUrl: "https://braingameuzb.netlify.app/",
      repoUrl: "https://github.com"
    }
  ];

  const EXPERIENCE_DATA = [
    {
      period: "2025 – 2026 (Sample)",
      type: "Work Experience / Growth",
      role: "Frontend & UI Developer — Muhammad (Editable Sample)",
      org: "Independent & Live Netlify Projects",
      desc: "Built and deployed web interfaces including Uzum, BMW, Samsung, and BrainGame UZB using HTML5, CSS3, and Vanilla JavaScript."
    },
    {
      period: "2024 (Sample)",
      type: "Courses & Certificates",
      role: "JavaScript & Modern Web UI Track (Sample)",
      org: "Online Learning / Self-Study",
      desc: "Practiced DOM manipulation, interactive game/UI state, accessibility fundamentals, and Git workflows."
    },
    {
      period: "2023 (Sample)",
      type: "Education & Programming Journey",
      role: "Web Foundations & Design Principles (Sample)",
      org: "Academic / Foundational Study",
      desc: "Started building web layouts, mastering semantic structure, color hierarchy, and responsive grids."
    }
  ];

  const SERVICES_DATA = [
    { icon: "🌐", key: "Website Development", desc: "Clean, fast, semantic multi-page websites tailored to your brand and goals." },
    { icon: "🚀", key: "Landing Page Development", desc: "High-impact landing pages with clear structure, smooth motion, and responsive layouts." },
    { icon: "📱", key: "Responsive Website Design", desc: "Adapts gracefully across mobile phones, tablets, laptops, and large desktop monitors." },
    { icon: "✨", key: "Website Redesign", desc: "Modernizes dated interfaces with contemporary visual hierarchy and improved readability." },
    { icon: "⚡", key: "Frontend Development", desc: "Interactive client-side behavior, filtering, modals, and maintainable Vanilla JS." },
    { icon: "🎨", key: "UI Implementation", desc: "Translates visual concepts and layouts into pixel-conscious, accessible code." }
  ];

  const TESTIMONIALS_DATA = [
    {
      initials: "DK",
      name: "Dilshod K. (Demo Client)",
      role: "Product Lead — Sample Co.",
      rating: 5,
      quote: "Sample testimonial: Muhammad's interface feels crisp, responsive, and well-structured across screens."
    },
    {
      initials: "EM",
      name: "Elena M. (Demo Client)",
      role: "Startup Founder — Sample Studio",
      rating: 5,
      quote: "Sample testimonial: Clean code organization, smooth animations, and strong attention to visual details."
    },
    {
      initials: "AR",
      name: "Alex R. (Demo Client)",
      role: "Design Partner — Sample Lab",
      rating: 5,
      quote: "Sample testimonial: Reliable collaboration and thoughtful UI/UX implementation from start to finish."
    }
  ];

  const FAQ_DATA = [
    {
      q: "How does page navigation work here?",
      a: "Clicking any navigation item switches directly to that dedicated page view (hero, about, skills, projects, experience, services, testimonials, contact) and updates the URL hash."
    },
    {
      q: "Does the contact form send emails automatically?",
      a: "Not by default. It validates input on the client side; connect a backend endpoint or form service to deliver messages."
    },
    {
      q: "How does the 30-language switcher work?",
      a: "It switches UI text, sets dir='rtl' for Arabic, Urdu, and Persian, formats dates/clocks with Intl.DateTimeFormat, and saves your choice in localStorage."
    }
  ];

  const CODE_SNIPPETS = {
    js: `// Live Netlify Projects List
const projects = [
  "https://uzumn111.netlify.app/",
  "https://bmwn111.netlify.app/",
  "https://samsungn111.netlify.app/",
  "https://braingameuzb.netlify.app/"
];`,
    css: `/* Glassmorphism & Neon Gradient Accent */
.glass-card {
  background: rgba(13, 20, 38, 0.58);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-radius: 24px;
}`,
    html: `<!-- Dedicated Page Section -->
<section id="projects" data-page-section="projects" class="page-view hidden">
  <h2>Muhammad — Tanlangan loyihalar</h2>
</section>`
  };

  const VALID_PAGES = ["hero", "about", "skills", "projects", "experience", "services", "testimonials", "contact"];

  /* ------------------------------------------------------------------------
     3. STATE & DOM REFERENCES
     ------------------------------------------------------------------------ */
  const state = {
    lang: localStorage.getItem("portfolio_lang") || "uz",
    theme: localStorage.getItem("portfolio_theme") || "dark",
    page: localStorage.getItem("portfolio_page") || "hero",
    skillCat: "all",
    projectCat: "All",
    testimonialIndex: 0,
    activeSnippet: "js"
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ------------------------------------------------------------------------
     4. SEPARATE PAGE NAVIGATION SYSTEM
     ------------------------------------------------------------------------ */
  function navigateToPage(pageKey, updateHash = true) {
    const targetPage = VALID_PAGES.includes(pageKey) ? pageKey : "hero";
    state.page = targetPage;
    localStorage.setItem("portfolio_page", targetPage);

    $$("[data-page-section]").forEach((sec) => {
      const isMatch = sec.getAttribute("data-page-section") === targetPage;
      sec.classList.toggle("hidden", !isMatch);
      sec.classList.toggle("active-page", isMatch);
    });

    $$(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-page") === targetPage);
    });

    if (updateHash && window.location.hash !== `#${targetPage}`) {
      history.replaceState(null, "", `#${targetPage}`);
    }

    $("#primary-nav")?.classList.remove("open");
    $("#mobile-menu-btn")?.setAttribute("aria-expanded", "false");

    window.scrollTo({ top: 0, behavior: "auto" });

    if (targetPage === "about") {
      animateCounters();
    }
    if (targetPage === "skills") {
      renderSkills();
    }
  }

  /* ------------------------------------------------------------------------
     5. 30-LANGUAGE ENGINE (RTL + LOCALE FORMATTING + PERSISTENCE)
     ------------------------------------------------------------------------ */
  function getDict(langCode) {
    return TRANSLATIONS[langCode] || TRANSLATIONS["en-US"] || UZ_DICT;
  }

  function applyLanguage(langCode) {
    const langObj = LANGUAGES_30.find((l) => l.code === langCode) || LANGUAGES_30[0];
    state.lang = langObj.code;
    localStorage.setItem("portfolio_lang", langObj.code);

    document.documentElement.lang = langObj.code;
    document.documentElement.dir = langObj.rtl ? "rtl" : "ltr";

    $("#lang-current-flag").textContent = langObj.flag;
    $("#lang-current-code").textContent = langObj.code.toUpperCase();

    const dict = getDict(langObj.code);
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    renderLanguageList($("#lang-search")?.value || "");
    updateDigitalClock();
    resetTypingRoles(dict.roles || UZ_DICT.roles);
  }

  function renderLanguageList(filterText = "") {
    const listEl = $("#lang-list");
    if (!listEl) return;
    const q = filterText.trim().toLowerCase();
    const filtered = LANGUAGES_30.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );

    listEl.innerHTML = filtered
      .map(
        (l) => `
        <button type="button" class="lang-option ${l.code === state.lang ? "selected" : ""}" data-lang-code="${l.code}" role="option" aria-selected="${l.code === state.lang}">
          <span>${l.flag} ${l.native}</span>
          <span class="muted-note">${l.code}</span>
        </button>`
      )
      .join("");

    $$(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang-code"));
        closeLangMenu();
      });
    });
  }

  function openLangMenu() {
    $("#lang-menu")?.classList.add("open");
    $("#lang-trigger")?.setAttribute("aria-expanded", "true");
    $("#lang-search")?.focus();
  }

  function closeLangMenu() {
    $("#lang-menu")?.classList.remove("open");
    $("#lang-trigger")?.setAttribute("aria-expanded", "false");
  }

  /* ------------------------------------------------------------------------
     6. THEME TOGGLE
     ------------------------------------------------------------------------ */
  function applyTheme(themeName) {
    state.theme = themeName === "light" ? "light" : "dark";
    localStorage.setItem("portfolio_theme", state.theme);
    document.documentElement.setAttribute("data-theme", state.theme);
    const icon = $("#theme-icon");
    if (icon) icon.textContent = state.theme === "dark" ? "☀" : "☾";
  }

  /* ------------------------------------------------------------------------
     7. TYPING ANIMATION (MULTI-ROLE)
     ------------------------------------------------------------------------ */
  let typingTimer = null;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let currentRoles = UZ_DICT.roles;

  function resetTypingRoles(rolesArr) {
    clearTimeout(typingTimer);
    currentRoles = Array.isArray(rolesArr) && rolesArr.length ? rolesArr : UZ_DICT.roles;
    roleIdx = 0;
    charIdx = 0;
    isDeleting = false;
    runTypingLoop();
  }

  function runTypingLoop() {
    const targetEl = $("#typing-text");
    if (!targetEl) return;

    const currentWord = currentRoles[roleIdx % currentRoles.length];
    if (!isDeleting) {
      charIdx++;
      targetEl.textContent = currentWord.slice(0, charIdx);
      if (charIdx >= currentWord.length) {
        isDeleting = true;
        typingTimer = setTimeout(runTypingLoop, 1400);
        return;
      }
    } else {
      charIdx--;
      targetEl.textContent = currentWord.slice(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        roleIdx++;
      }
    }
    typingTimer = setTimeout(runTypingLoop, isDeleting ? 55 : 95);
  }

  /* ------------------------------------------------------------------------
     8. SKILLS, PROJECTS, EXPERIENCE, SERVICES, TESTIMONIALS, FAQ RENDERERS
     ------------------------------------------------------------------------ */
  function renderSkills() {
    const grid = $("#skills-grid");
    if (!grid) return;

    const items =
      state.skillCat === "all"
        ? SKILLS_DATA
        : SKILLS_DATA.filter((s) => s.category === state.skillCat);

    grid.innerHTML = items
      .map(
        (s) => `
        <article class="skill-card glass-card">
          <div class="skill-top">
            <span class="skill-icon-badge">${s.icon}</span>
            <span class="skill-pct">${s.level}%</span>
          </div>
          <div>
            <h3 class="skill-name">${s.name}</h3>
            <span class="skill-cat-label">${s.catLabel}</span>
          </div>
          <div class="progress-track" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} skill level">
            <div class="progress-fill" data-width="${s.level}%"></div>
          </div>
        </article>`
      )
      .join("");

    requestAnimationFrame(() => {
      $$("#skills-grid .progress-fill").forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
      });
    });
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    if (!grid) return;

    const items =
      state.projectCat === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.category === state.projectCat);

    grid.innerHTML = items
      .map(
        (p) => `
        <article class="project-card glass-card">
          <div class="project-thumb" style="background: ${p.gradient};">
            <div class="project-thumb-top">
              <span class="project-cat-pill">${p.category}</span>
              ${p.featured ? `<span class="project-featured-badge">Live</span>` : ""}
            </div>
            <div class="project-brand-mark">
              <span class="project-brand-title">${p.brandMark}</span>
              <span class="project-brand-host">${p.hostLabel}</span>
            </div>
          </div>
          <div class="project-body">
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.shortDesc}</p>
            <div class="project-tags">
              ${p.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("")}
            </div>
            <div class="project-actions">
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">Live Demo ↗</a>
              <button type="button" class="btn btn-sm glass-btn open-project-btn" data-project-id="${p.id}">Details</button>
              <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm glass-btn">GitHub</a>
            </div>
          </div>
        </article>`
      )
      .join("");

    $$(".open-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => openProjectModal(btn.getAttribute("data-project-id")));
    });
  }

  function openProjectModal(projectId) {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!proj) return;
    $("#pm-badge").textContent = proj.category;
    $("#pm-title").textContent = proj.title;
    $("#pm-desc").textContent = proj.fullDesc;
    const preview = $("#pm-preview");
    preview.style.background = proj.gradient;
    preview.textContent = `${proj.brandMark} — ${proj.hostLabel}`;
    $("#pm-tags").innerHTML = proj.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("");
    $("#pm-demo").href = proj.demoUrl;
    $("#pm-repo").href = proj.repoUrl;
    $("#project-modal")?.classList.remove("hidden");
    $("#pm-close")?.focus();
  }

  function renderExperience() {
    const container = $("#experience-timeline");
    if (!container) return;
    container.innerHTML = EXPERIENCE_DATA.map(
      (item) => `
      <article class="exp-item glass-card">
        <div class="exp-meta">
          <span>${item.type}</span>
          <span>${item.period}</span>
        </div>
        <h3 class="exp-role">${item.role}</h3>
        <div class="exp-org">${item.org}</div>
        <p class="exp-desc">${item.desc}</p>
      </article>`
    ).join("");
  }

  function renderServices() {
    const grid = $("#services-grid");
    if (!grid) return;
    grid.innerHTML = SERVICES_DATA.map(
      (srv) => `
      <article class="service-card glass-card">
        <div class="service-icon" aria-hidden="true">${srv.icon}</div>
        <h3>${srv.key}</h3>
        <p>${srv.desc}</p>
      </article>`
    ).join("");
  }

  function renderTestimonial() {
    const slide = $("#testimonial-slide");
    const dots = $("#testimonial-dots");
    if (!slide || !dots) return;

    const item = TESTIMONIALS_DATA[state.testimonialIndex % TESTIMONIALS_DATA.length];
    const stars = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);

    slide.innerHTML = `
      <div class="client-avatar" aria-hidden="true">${item.initials}</div>
      <div class="stars" aria-label="${item.rating} out of 5 stars">${stars}</div>
      <blockquote class="testimonial-quote">“${item.quote}”</blockquote>
      <div>
        <div class="client-name">${item.name}</div>
        <div class="client-role">${item.role}</div>
      </div>`;

    dots.innerHTML = TESTIMONIALS_DATA.map(
      (_, i) =>
        `<button type="button" class="carousel-dot ${i === state.testimonialIndex ? "active" : ""}" data-slide="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
    ).join("");

    $$(".carousel-dot").forEach((d) => {
      d.addEventListener("click", () => {
        state.testimonialIndex = Number(d.getAttribute("data-slide"));
        renderTestimonial();
      });
    });
  }

  function renderFaq() {
    const list = $("#faq-accordion");
    if (!list) return;
    list.innerHTML = FAQ_DATA.map(
      (f, idx) => `
      <div class="faq-item">
        <button type="button" class="faq-trigger" aria-expanded="${idx === 0}" aria-controls="faq-panel-${idx}" id="faq-btn-${idx}">
          <span>${f.q}</span>
          <span aria-hidden="true">${idx === 0 ? "−" : "+"}</span>
        </button>
        <div class="faq-panel ${idx === 0 ? "" : "hidden"}" id="faq-panel-${idx}" role="region" aria-labelledby="faq-btn-${idx}">
          ${f.a}
        </div>
      </div>`
    ).join("");

    $$(".faq-trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const panelId = btn.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.lastElementChild.textContent = expanded ? "+" : "−";
        panel?.classList.toggle("hidden", expanded);
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. CODE EDITOR, TERMINAL, CLOCK, COUNTERS, PARTICLES, CURSOR
     ------------------------------------------------------------------------ */
  let codeTypeTimer = null;

  function typeCodeSnippet(key) {
    state.activeSnippet = key;
    const display = $("#code-display");
    const filename = $("#code-filename");
    if (!display) return;

    const mapNames = { js: "live-projects.js", css: "glass-tokens.css", html: "semantic-layout.html" };
    if (filename) filename.textContent = mapNames[key] || "snippet.js";

    $$(".code-tab").forEach((t) => t.classList.toggle("active", t.getAttribute("data-snippet") === key));

    clearTimeout(codeTypeTimer);
    const fullText = CODE_SNIPPETS[key] || CODE_SNIPPETS.js;
    display.textContent = "";
    let i = 0;

    function step() {
      display.textContent += fullText.charAt(i);
      i++;
      if (i < fullText.length) {
        codeTypeTimer = setTimeout(step, 16);
      }
    }
    step();
  }

  function setupTerminal() {
    const form = $("#terminal-form");
    const input = $("#terminal-input");
    const out = $("#terminal-output");
    if (!form || !input || !out) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;

      const cmdLine = document.createElement("p");
      cmdLine.className = "term-line";
      cmdLine.innerHTML = `<span class="term-prompt">$</span> ${escapeHtml(input.value)}`;
      out.appendChild(cmdLine);

      const resLine = document.createElement("p");
      resLine.className = "term-out";

      if (cmd === "clear") {
        out.innerHTML = "";
        input.value = "";
        return;
      } else if (cmd === "help") {
        resLine.textContent = "Commands: help, about, phones, skills, projects, clear";
      } else if (cmd === "about") {
        resLine.textContent = "Muhammad — Frontend Developer & UI/UX Designer.";
      } else if (cmd === "phones") {
        resLine.textContent = "+998 90 381 66 76 | +998 90 003 66 09 | +998 90 542 80 80";
      } else if (cmd === "skills") {
        resLine.textContent = SKILLS_DATA.map((s) => s.name).join(", ");
      } else if (cmd === "projects") {
        resLine.textContent = PROJECTS_DATA.map((p) => `${p.title} (${p.demoUrl})`).join(" | ");
      } else {
        resLine.textContent = `Unknown command "${cmd}". Type "help".`;
      }

      out.appendChild(resLine);
      out.scrollTop = out.scrollHeight;
      input.value = "";
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  function updateDigitalClock() {
    const el = $("#digital-clock-display");
    if (!el) return;
    const langObj = LANGUAGES_30.find((l) => l.code === state.lang) || LANGUAGES_30[0];
    try {
      const now = new Date();
      el.textContent = new Intl.DateTimeFormat(langObj.locale, {
        dateStyle: "medium",
        timeStyle: "medium"
      }).format(now);
    } catch {
      el.textContent = new Date().toLocaleTimeString();
    }
  }

  function animateCounters() {
    $$(".stat-number").forEach((el) => {
      const target = Number(el.getAttribute("data-target") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 750;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const val = Math.round(progress * target);
        el.textContent = `${val}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  function initParticles() {
    const canvas = $("#particles-canvas");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const count = Math.min(55, Math.floor((w * h) / 28000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45
    }));

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0, 229, 255, 0.45)";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  function initCursorAndGlow() {
    const dot = $("#cursor-dot");
    const ring = $("#cursor-ring");
    const glow = $("#mouse-glow");

    window.addEventListener("pointermove", (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
      if (dot && ring) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }
    });

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .filter-btn, .skill-card, .project-card")) {
        document.body.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .filter-btn, .skill-card, .project-card")) {
        document.body.classList.remove("cursor-hover");
      }
    });
  }

  /* ------------------------------------------------------------------------
     10. SCROLL PROGRESS, NAVIGATION, FORMS & MODALS
     ------------------------------------------------------------------------ */
  function initScrollAndPageRouting() {
    const progressEl = $("#scroll-progress");
    const backBtn = $("#back-to-top");

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

      if (progressEl) {
        progressEl.style.width = `${pct}%`;
        progressEl.setAttribute("aria-valuenow", String(pct));
      }

      if (backBtn) {
        backBtn.classList.toggle("visible", scrollTop > 220);
      }
    });

    backBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-page]");
      if (trigger) {
        const href = trigger.getAttribute("href") || "";
        if (href.startsWith("#") || !href) {
          e.preventDefault();
          const pageKey = trigger.getAttribute("data-page");
          navigateToPage(pageKey, true);
        }
      }
    });

    window.addEventListener("hashchange", () => {
      const rawHash = window.location.hash.replace(/^#/, "");
      if (rawHash) navigateToPage(rawHash, false);
    });
  }

  function setupFormsAndModals() {
    const contactForm = $("#contact-form");
    const feedback = $("#contact-feedback");
    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#contact-name").value.trim();
      const email = $("#contact-email").value.trim();
      const subject = $("#contact-subject").value.trim();
      const message = $("#contact-message").value.trim();

      $("#err-name").textContent = name.length < 2 ? "Please enter at least 2 characters." : "";
      $("#err-email").textContent = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email." : "";
      $("#err-subject").textContent = subject.length < 3 ? "Please enter a subject." : "";
      $("#err-message").textContent = message.length < 10 ? "Message should be at least 10 characters." : "";

      const valid =
        name.length >= 2 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        subject.length >= 3 &&
        message.length >= 10;

      if (!valid) {
        feedback.textContent = "Please fix the highlighted fields above.";
        feedback.className = "form-feedback feedback-error";
        return;
      }

      feedback.textContent =
        "Validation passed locally. Note: No backend is connected here, so no message was sent over the network.";
      feedback.className = "form-feedback feedback-success";
    });

    $("#newsletter-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("#newsletter-email");
      const out = $("#newsletter-status");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        out.textContent = "Enter a valid email address.";
        out.className = "form-feedback feedback-error";
        return;
      }
      out.textContent = "Demo UI notice: Connect a real backend/newsletter API to store subscribers.";
      out.className = "form-feedback feedback-success";
      input.value = "";
    });

    $("#pm-close")?.addEventListener("click", () => $("#project-modal")?.classList.add("hidden"));
    $("#project-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "project-modal") $("#project-modal").classList.add("hidden");
    });

    $("#open-cv-btn")?.addEventListener("click", () => $("#cv-modal")?.classList.remove("hidden"));
    $("#cv-close")?.addEventListener("click", () => $("#cv-modal")?.classList.add("hidden"));
    $("#cv-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "cv-modal") $("#cv-modal").classList.add("hidden");
    });

    $("#download-cv-txt")?.addEventListener("click", () => {
      const sampleCv = [
        "MUHAMMAD — CURRICULUM VITAE",
        "Role: Frontend Developer & UI/UX Designer",
        "Phone 1: +998 90 381 66 76",
        "Phone 2: +998 90 003 66 09",
        "Phone 3: +998 90 542 80 80",
        "Live Projects: https://uzumn111.netlify.app/, https://bmwn111.netlify.app/, https://samsungn111.netlify.app/, https://braingameuzb.netlify.app/",
        "Skills: HTML5, CSS3, JavaScript, Responsive Design, Git, GitHub, UI/UX, Web Design"
      ].join("\n");
      const blob = new Blob([sampleCv], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Muhammad-Developer-CV.txt";
      a.click();
      URL.revokeObjectURL(url);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLangMenu();
        $("#project-modal")?.classList.add("hidden");
        $("#cv-modal")?.classList.add("hidden");
      }
    });

    $("#open-404-btn")?.addEventListener("click", () => {
      $$("[data-page-section]").forEach((s) => s.classList.add("hidden"));
      $("#not-found-view")?.classList.remove("hidden");
    });

    $("#close-404-btn")?.addEventListener("click", () => {
      navigateToPage("hero", true);
    });

    if (!localStorage.getItem("portfolio_cookie_ok")) {
      $("#cookie-banner")?.classList.remove("hidden");
    }
    $("#cookie-accept")?.addEventListener("click", () => {
      localStorage.setItem("portfolio_cookie_ok", "1");
      $("#cookie-banner")?.classList.add("hidden");
    });
  }

  function setupFiltersAndControls() {
    $("#lang-trigger")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = $("#lang-menu")?.classList.contains("open");
      if (isOpen) closeLangMenu();
      else openLangMenu();
    });
    $("#lang-search")?.addEventListener("input", (e) => renderLanguageList(e.target.value));
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#lang-dropdown")) closeLangMenu();
    });

    $("#theme-toggle")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    const mobBtn = $("#mobile-menu-btn");
    const navEl = $("#primary-nav");
    mobBtn?.addEventListener("click", () => {
      const open = navEl?.classList.toggle("open");
      mobBtn.setAttribute("aria-expanded", String(Boolean(open)));
    });

    $$("[data-skill-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-skill-cat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.skillCat = btn.getAttribute("data-skill-cat");
        renderSkills();
      });
    });

    $$("[data-project-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-project-cat]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.projectCat = btn.getAttribute("data-project-cat");
        renderProjects();
      });
    });

    $("#prev-testimonial")?.addEventListener("click", () => {
      state.testimonialIndex = (state.testimonialIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
      renderTestimonial();
    });
    $("#next-testimonial")?.addEventListener("click", () => {
      state.testimonialIndex = (state.testimonialIndex + 1) % TESTIMONIALS_DATA.length;
      renderTestimonial();
    });
    setInterval(() => {
      state.testimonialIndex = (state.testimonialIndex + 1) % TESTIMONIALS_DATA.length;
      renderTestimonial();
    }, 6500);

    $$(".code-tab").forEach((tab) => {
      tab.addEventListener("click", () => typeCodeSnippet(tab.getAttribute("data-snippet")));
    });
    $("#replay-code-btn")?.addEventListener("click", () => typeCodeSnippet(state.activeSnippet));
    $("#copy-code-btn")?.addEventListener("click", () => {
      const txt = CODE_SNIPPETS[state.activeSnippet] || "";
      navigator.clipboard?.writeText(txt).catch(() => {});
    });
  }

  /* ------------------------------------------------------------------------
     11. INITIALIZATION
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(state.theme);
    renderSkills();
    renderProjects();
    renderExperience();
    renderServices();
    renderTestimonial();
    renderFaq();
    setupTerminal();
    setupFiltersAndControls();
    setupFormsAndModals();
    initScrollAndPageRouting();
    initParticles();
    initCursorAndGlow();

    const visits = Number(localStorage.getItem("portfolio_local_visits") || "0") + 1;
    localStorage.setItem("portfolio_local_visits", String(visits));
    const visitEl = $("#local-visit-count");
    if (visitEl) visitEl.textContent = String(visits);

    const hashPage = window.location.hash.replace(/^#/, "");
    navigateToPage(VALID_PAGES.includes(hashPage) ? hashPage : state.page, false);

    applyLanguage(state.lang);
    typeCodeSnippet("js");
    updateDigitalClock();
    setInterval(updateDigitalClock, 1000);

    const preloader = $("#preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        preloader.setAttribute("aria-hidden", "true");
      }, 300);
    }
  });
})();