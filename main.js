(function () {
  'use strict';

  var TRANSLATIONS = {
    ar: {
      nav_projects: "أعمالي",
      nav_skills: "مهاراتي",
      nav_about: "عنّي",
      nav_contact: "تواصل",
      nav_cv: "السيرة",
      eyebrow: "// مفتوح للشغل والتعاون (والقهوة)",
      hero_line1: "حوّل القهوة والـ bugs",
      hero_line2: "لتطبيقات ويب",
      hero_line3: "تشتغل فعلاً",
      hero_desc: "مطوّر Full Stack ويب بكتب كود، أخرّبه، أصلّحه (آجلاً أو عاجلاً)، وأشحنه. أخلّي البكسلات ترقص وقواعد البيانات تغنّي. شغوف بواجهات نظيفة، باك إند متين، ولحظة الكومبايل اللي تنجح.",
      cta_projects: "شوف أعمالي ↓",
      cta_contact: "ندردش",
      proj_tag: "// شو أعملت",
      proj_title: "مشاريعي اللي فاخر فيها",
      p1_title: "Manara — منارة",
      p1_desc: "منصة Full-stack لطلاب التوجيهي: تطبيق Android + موقع إلكتروني يشاركون نفس قاعدة البيانات. كتب، امتحانات سابقة، ملخصات — كلها متاحة بدون إنترنت. مبني بـ Java، HTML، CSS، وJavaScript.",
      p1_thumb: "مَنَارَة",
      p3_title: "Manara Android — منارة",
      p3_desc: "تطبيق Android لطلاب التوجيهي — قيد التطوير. قريباً: كتب، امتحانات سابقة، ملخصات، وصول بدون إنترنت، وواجهة Material Design. سيشارك قاعدة البيانات مع الموقع الإلكتروني.",
      p3_thumb: "تطبيق Android",
      p3_thumb_title: "مَنَارَة",
      p3_badge: "قريباً",
      p4_desc: "موقع وكالة سفر متكامل — 8 وجهات، مدونة، معرض صور، دعم عربي كامل، وكمية CSS تخليك تعيّط. معمول بحب و—media queries زيادة شوي.",
      p4_thumb: "باتاغونيا",
      p4_title: "باتاغونيا — PATAGONIA",
      skills_tag: "// عدّتي",
      skills_title: "اللغات اللي أتكلّمها (برمجة، طبعاً)",
      about_tag: "// الحكاية",
      about_title: "المبرمج اللي ورا الشاشة",
      about_p1: "مطوّر Full Stack ويب، بأتجنّن على كود مرتب وتصميم متجاوب. بأمن إن التطبيق المثالي هو اللي ما حدا بيلاحظ التكنولوجيا — لأنهم منشغلين يستمتعوا. وعندي خبرة كمان في Java و Android.",
      about_p2: "بتهوّس على التفاصيل الصغيرة: زرار مضبوط، استعلام أسرع ب ١ مللي ثانية، git history نظيف. الـ IDE هو مكان سعادتي و Stack Overflow هو مساعدي. خلّينا نبني شي يخلي الناس تقول 'woah'.",
      stat1: "مشاريع شحنت",
      stat2: "تحويل القهوة لكود",
      contact_title: "نعمل شي عظيم سوا",
      contact_desc: "عندك مشروع؟ فكرة؟ بدك موقع ما يشبه نت ٢٠٠٥؟ ابعتلي. متاح لفريلانس، تعاون، أو نقاش ليش المسافات أحسن من التاب. (بمزح. استعمل اللي بريحك.)",
      download_cv: "تحميل السيرة الذاتية ↓",
      link_live: "معاينة →",
      footer_text: "© 2026 معمول بشغف (وكمية فاصلة منقوطة زيادة)",
      cv_name: "مصطفى خريّس",
      cv_role: "مطوّر Full-stack",
      cv_location: "غزة، فلسطين",
      download_cv_btn: "تحميل السيرة الذاتية (PDF) ↓",
      download_cv_btn2: "تحميل السيرة الذاتية (PDF) ↓",
      back_portfolio: "← الرجوع للمعرض",
      summary_title: "ملخص",
      summary_text: "مطوّر Full-stack ويب مع خبرة عملية في بناء مواقع متكاملة، من الواجهة الأمامية حتى قاعدة البيانات. أدرس حالياً تصميم وتطوير تطبيقات الجوال في UCAS، مع خلفية في HTML، CSS، JavaScript، و Java للأندرويد. قدّمت مشاريع حقيقية لعملاء بالإضافة إلى أعمال شخصية، وأرتاح في إدارة المشروع من البداية للنهاية.",
      edu_title: "التعليم",
      edu1_title: "بكالوريوس تصميم وتطوير تطبيقات الجوال",
      edu1_meta: "كلية الجامعة للعلوم التطبيقية (UCAS) — نوفمبر 2025 – الحاضر",
      edu1_1: "مقررات دراسية تشمل تطوير تطبيقات الجوال، تصميم UI/UX، وبرمجة Full-stack.",
      edu2_title: "التوجيهي (شهادة الثانوية العامة) — الفرع الأدبي",
      edu2_meta: "فلسطين — أكتوبر 2025",
      edu2_1: "المعدل النهائي: 84%",
      skills_title: "المهارات التقنية",
      projects_title: "المشاريع",
      proj1_client: "مشروع عميل",
      proj1_1: "بنيت الموقع بالكامل: صفحات أمامية باستخدام HTML، CSS، وJavaScript، بالإضافة إلى الباك إند وقاعدة البيانات.",
      proj1_2: "صممت التخطيط بحيث يتمكن الزوار من تصفح الباقات السياحية ومعلومات الوجهات بسهولة.",
      proj1_3: "أنشأت قاعدة البيانات التي تخزن وتدير محتوى الموقع.",
      proj2_badge: "مشروع شخصي",
      proj2_1: "بناء منصة Full-stack لطلاب التوجيهي: تطبيق Android بلغة Java وموقع إلكتروني مرافق، كلاهما يعملان على نفس قاعدة البيانات.",
      proj2_2: "أتعامل مع شاشات التطبيق، الموقع، وطبقة البيانات بنفسي، مع تتبع المشروع عبر Git.",
      additional_title: "مهارات إضافية",
      additional_text: "دورات تطوير ويب قبل الجامعة، تغطي أساسيات Front-end و Back-end.",
      lang_title: "اللغات",
      lang_ar: "العربية (أم)",
      lang_en: "الإنجليزية (مستوى متوسط)"
    },
    en: {
      nav_projects: "Work",
      nav_skills: "Skills",
      nav_about: "About",
      nav_contact: "Contact",
      nav_cv: "CV",
      eyebrow: "// currently accepting pull requests (and coffee)",
      hero_line1: "I turn coffee & bugs",
      hero_line2: "into web apps",
      hero_line3: "that actually work",
      hero_desc: "Full Stack Web Developer who writes code, breaks stuff, fixes it (eventually), and ships it. I make the pixels dance and the databases sing. Passionate about clean UI, solid backends, and that dopamine hit when it finally compiles.",
      cta_projects: "See my magic ↓",
      cta_contact: "Let's talk →",
      proj_tag: "// SHOWCASE",
      proj_title: "Stuff I've Built",
      p1_title: "Manara — منارة",
      p1_desc: "A full-stack platform for Tawjihi students: Android app + companion website sharing one database. Books, past exams, summaries — all available offline. Built with Java, HTML, CSS, and JavaScript.",
      p1_thumb: "Manara",
      p3_title: "Manara Android — منارة",
      p3_desc: "An Android app for Tawjihi students — under development. Coming soon: books, past exams, summaries, offline access, and Material Design UI. Will share a database with the companion website.",
      p3_thumb: "Android App",
      p3_thumb_title: "Manara",
      p3_badge: "coming soon",
      p4_desc: "A full-blown travel agency website with 8 destinations, a blog, and image galleries. RTL, Arabic support, and enough CSS to make you cry. Built with love and way too many media queries.",
      p4_thumb: "PATAGONIA",
      p4_title: "باتاغونيا — PATAGONIA",
      link_live: "Live preview →",
      skills_tag: "// ARSENAL",
      skills_title: "What I Speak (Code, mostly)",
      about_tag: "// THE STORY",
      about_title: "The Developer Behind the Screen",
      about_p1: "Full Stack Web Developer who genuinely gets excited about well-structured code and responsive layouts. I believe the perfect app is one where no one notices the tech — they're too busy enjoying it. Also know my way around Java + Android when needed.",
      about_p2: "I obsess over the little things: a perfectly aligned button, a 1ms faster query, a clean git history. My IDE is my happy place and Stack Overflow is my copilot. Let's build something that makes people go 'woah'.",
      stat1: "Projects shipped",
      stat2: "Caffeine → code ratio",
      contact_title: "Let's Create Something Epic",
      contact_desc: "Got a project? An idea? Need a website that doesn't look like it's from 2005? Drop a message. Open for freelance, collabs, or debating why tabs are better than spaces. (Just kidding. Use whatever works.)",
      download_cv: "Download CV ↓",
      footer_text: "© 2026 Built with passion (and way too many semicolons)",
      cv_name: "Mostafa Khrais",
      cv_role: "Full-stack Developer",
      cv_location: "Gaza, Palestine",
      download_cv_btn: "Download CV (PDF) ↓",
      download_cv_btn2: "Download CV (PDF) ↓",
      back_portfolio: "← Back to portfolio",
      summary_title: "Summary",
      summary_text: "Full-stack web developer with practical experience building complete websites, from the interface down to the database. Currently studying Mobile Application Design and Development at UCAS, with a background in HTML, CSS, JavaScript, and Java for Android. Have delivered real projects for clients as well as personal work, and I'm comfortable handling a project end to end.",
      edu_title: "Education",
      edu1_title: "B.Sc. Mobile Application Design and Development",
      edu1_meta: "University College of Applied Sciences (UCAS) — Nov 2025 – Present",
      edu1_1: "Coursework covers mobile app development, UI/UX design, and full-stack programming.",
      edu2_title: "Tawjihi (General Secondary Education Certificate) — Literary Stream",
      edu2_meta: "Palestine — Oct 2025",
      edu2_1: "Final average: 84%",
      skills_title: "Technical Skills",
      projects_title: "Projects",
      proj1_client: "Client Project",
      proj1_1: "Built the site end to end: front-end pages with HTML, CSS, and JavaScript, plus the back-end and database behind them.",
      proj1_2: "Designed the layout so visitors can browse tour packages and destination info without friction.",
      proj1_3: "Set up the database that stores and manages the site's content.",
      proj2_badge: "Personal Project",
      proj2_1: "Building a full-stack platform for Tawjihi students: an Android app in Java plus a companion website, both running on the same database.",
      proj2_2: "Handling the app screens, the site, and the data layer myself, with the project tracked in Git.",
      additional_title: "Additional Skills",
      additional_text: "Web development courses before university, covering front-end and back-end basics.",
      lang_title: "Languages",
      lang_ar: "Arabic (Native)",
      lang_en: "English (Intermediate level)"
    }
  };

  var currentLang = 'en';

  function getStoredLang() {
    try {
      return localStorage.getItem('portfolio_lang') || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {}
  }

  function applyLanguage() {
    var root = document.getElementById('htmlRoot');
    if (!root) return;
    root.lang = currentLang;
    root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    var btn = document.getElementById('langBtn');
    if (btn) {
      btn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
        el.textContent = TRANSLATIONS[currentLang][key];
      }
    }
  }

  function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    setStoredLang(currentLang);
    applyLanguage();
  }

  function initLanguage() {
    currentLang = getStoredLang();
    applyLanguage();
    var btn = document.getElementById('langBtn');
    if (btn) {
      btn.addEventListener('click', toggleLanguage);
    }
  }

  function initProjectCards() {
    var cards = {
      'card-web': '/projects/web-project/',
      'card-patagonia': '/projects/patagonia/',
      'card-api': '/projects/android-app/'
    };
    for (var id in cards) {
      if (cards.hasOwnProperty(id)) {
        var el = document.getElementById(id);
        if (el) {
          el.addEventListener('click', function (url) {
            return function () {
              location.href = url;
            };
          }(cards[id]));
        }
      }
    }
  }

  var App = {
    initLanguage: initLanguage,
    initProjectCards: initProjectCards,
    applyLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    getLang: function () { return currentLang; }
  };

  if (typeof window.App === 'undefined') {
    window.App = App;
  }
})();
