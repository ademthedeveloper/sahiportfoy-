import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";

export const translations = {
  tr: {
    dir: "ltr",
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      portfolio: "Portföy",
      faq: "S.S.S.",
      contact: "İletişim",
      cta: "İletişime Geç",
    },
    hero: {
      eyebrow: "Gayrimenkul Aracılığı & Yatırım",
      titleTop: "Gayrimenkulde",
      titleGold: "Prestiji",
      titleBottom: "Yeniden Tanımlıyoruz",
      subtitle:
        "Türkiye'nin en seçkin gayrimenkullerinde güvenilir aracılık ve yatırım danışmanlığı. Mülk yolculuğunuzu sıradan bir işlemden çıkarıp, size özel bir deneyime dönüştürüyoruz.",
      contact: "İletişime Geçin",
      whatsapp: "WhatsApp",
      scroll: "Keşfedin",
      stats: [
        { value: "10+", label: "Yıllık Deneyim" },
        { value: "750+", label: "Tamamlanan İşlem" },
        { value: "%98", label: "Müşteri Memnuniyeti" },
      ],
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Gayrimenkulde güveni yeniden tanımlıyoruz",
      lead: "ŞAHİ PORTFÖY; lüks gayrimenkul pazarında güvenilir aracılık ve stratejik danışmanlık sunan, alanında uzman bir kuruluştur.",
      p1: "Her müşterimizin hikayesi benzersizdir. Bu nedenle standart çözümler sunmak yerine, hedeflerinize özel, şeffaf ve sonuç odaklı bir hizmet anlayışını benimsiyoruz. Deneyimli ekibimizle; mülk ediniminden satışa, değerlemeden yatırım planlamasına kadar sürecin her adımında yanınızdayız.",
      p2: "İstanbul'un ve Türkiye'nin en değerli konumlarındaki geniş portföy ağımız ve piyasa bilgimiz sayesinde, doğru kararı vermeniz için ihtiyaç duyduğunuz tüm verileri sizinle şeffafça paylaşıyoruz.",
      missionTitle: "Misyonumuz",
      missionText:
        "Müşterilerimize en yüksek katma değeri sunan, şeffaf ve etik bir gayrimenkul deneyimi yaşatarak sektörde güven ve prestijin simgesi olmak.",
      visionTitle: "Vizyonumuz",
      visionText:
        "Türkiye'nin gayrimenkul aracılığında akla ilk gelen, uluslararası standartlarda hizmet veren ve yenilikçi yaklaşımıyla sektöre yön veren marka olmak.",
      valuesTitle: "Temel Değerlerimiz",
      values: [
        { icon: "shield", title: "Güven & Dürüstlük", text: "İlişkilerimizin temelinde her zaman şeffaflık ve sözümüzün arkasında durmak vardır." },
        { icon: "gem", title: "Mükemmellik", text: "Detaylara gösterdiğimiz özen ile her zaman standartların üzerinde bir hizmet sunarız." },
        { icon: "handshake", title: "Müşteri Odaklılık", text: "Başarımızı, müşterilerimizin memnuniyeti ve uzun soluklu ilişkilerimiz belirler." },
      ],
      timelineTitle: "Yolculuğumuz",
      cta: "Hizmetlerimizi Keşfedin",
      badge: "Kuruluş 2015",
      timeline: [
        { year: "2015", title: "Kuruluş", text: "ŞAHİ PORTFÖY, gayrimenkul aracılığında fark yaratma vizyonuyla kuruldu." },
        { year: "2018", title: "Büyüme", text: "Genişleyen portföy ağımız ve uzman ekibimizle hizmet alanlarımızı çeşitlendirdik." },
        { year: "2021", title: "Dijital Dönüşüm", text: "Müşteri deneyimini güçlendiren modern dijital altyapımızı hayata geçirdik." },
        { year: "2024", title: "Yeni Dönem", text: "Yatırım danışmanlığı ve uluslararası portföy ile yeni bir döneme girdik." },
      ],
    },
    services: {
      eyebrow: "Hizmetlerimiz",
      title: "Uçtan uca gayrimenkul çözümleri",
      subtitle:
        "İhtiyaç duyduğunuz her hizmet, tek bir güvenilir çatı altında. Süreçlerinizi alanında uzman ekibimizle yönetiyoruz.",
      items: [
        { icon: "building", title: "Gayrimenkul Aracılığı", desc: "Alıcı ve satıcıyı en doğru şekilde buluşturan, uçtan uca profesyonel aracılık hizmeti." },
        { icon: "key", title: "Satın Alma Danışmanlığı", desc: "Hayalinizdeki mülke ulaşmak için piyasa araştırması, görüşme ve sürecin tüm adımlarında yanınızdayız." },
        { icon: "tag", title: "Satış Danışmanlığı", desc: "Mülkünüzü değerinde ve doğru kitleye satmak için stratejik pazarlama ve fiyatlandırma çözümleri." },
        { icon: "chart", title: "Yatırım Danışmanlığı", desc: "Getiri odaklı, veriye dayalı yatırım fırsatları ve portföy optimizasyonu önerileri." },
        { icon: "scale", title: "Ekspertiz & Değerleme", desc: "Mülkünüzün gerçek piyasa değerini belirleyen, bağımsız ve güvenilir değerleme raporları." },
        { icon: "headset", title: "Profesyonel Danışmanlık", desc: "Sürecin her aşamasında bilinçli kararlar almanız için uzman görüş ve rehberlik." },
      ],
    },
    why: {
      eyebrow: "Neden Biz?",
      title: "Bizi tercih etmeniz için sebepler",
      subtitle: "ŞAHİ PORTFÖY farkını yaratan, gözden kaçmayan detaylar.",
      items: [
        { icon: "award", title: "Profesyonel Hizmet", desc: "Alanında uzman ekibimizle her aşamada uluslararası standartlarda hizmet." },
        { icon: "shield", title: "Güvenilir Aracılık", desc: "Şeffaf süreçler ve etik yaklaşımımızla kazandığımız sarsılmaz güven." },
        { icon: "eye", title: "Şeffaf Süreç", desc: "Tüm bilgileri açıkça paylaşıyor, sürprizsiz ve anlaşılır bir deneyim sunuyoruz." },
        { icon: "zap", title: "Hızlı İletişim", desc: "Sorularınıza anında yanıt; süreç boyunca kesintisiz ve hızlı iletişim." },
        { icon: "sparkles", title: "Kişiselleştirilmiş Çözümler", desc: "Her müşteriye özel, ihtiyaç ve hedeflere göre tasarlanmış stratejiler." },
        { icon: "heart", title: "Müşteri Memnuniyeti", desc: "Başarımızı ölçtüğümüz tek metrik: kalıcı ve gerçek müşteri memnuniyeti." },
      ],
    },
    portfolio: {
      eyebrow: "Portföy",
      title: "Başarı hikayelerimiz",
      subtitle:
        "Tamamladığımız seçkin işlemler, kurumsal başarılar ve profesyonel projelerden bir kesit. Bu bir ilan değil; kazanılmış güvenin göstergesidir.",
      items: [
        { tag: "Villa", title: "Ödüllü Villa Projesi", loc: "Bebek · İstanbul", desc: "Boğaza hakim, mimari ödüllü bir villa satışında uçtan uca gizlilik öncelikli aracılık." },
        { tag: "Penthouse", title: "Penthouse Danışmanlığı", loc: "Etiler · İstanbul", desc: "Lüks bir penthouse için iç mekan danışmanlığı, değerleme ve satış stratejisi." },
        { tag: "Tarihi", title: "Tarihi Apartman Portföyü", loc: "Beyoğlu · İstanbul", desc: "Galata çevresinde restore edilmiş tarihi bir yapının portföye kazandırılması." },
        { tag: "Konak", title: "Prestijli Konak Satışı", loc: "Üsküdar · İstanbul", desc: "Geniş bahçeli prestijli bir konakta, seçkin alıcı kitlesine özel satış süreci." },
        { tag: "Rezidans", title: "Rezidans Yatırımı", loc: "Şişli · İstanbul", desc: "Yüksek getirili bir rezidans portföyünün yatırım danışmanlığı süreci." },
        { tag: "Loft", title: "Modern Loft Daire", loc: "Kadıköy · İstanbul", desc: "Moda'da modern bir loft dairenin bağımsız değerlemesi ve satışı." },
      ],
      galleryTitle: "Profesyonel Galeri",
      tagDone: "Tamamlandı",
    },
    stats: {
      items: [
        { value: 10, suffix: "+", label: "Yıllık Deneyim" },
        { value: 500, suffix: "+", label: "Mutlu Müşteri" },
        { value: 750, suffix: "+", label: "Tamamlanan İşlem" },
        { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
      ],
    },
    testimonials: {
      eyebrow: "Referanslar",
      title: "Müşterilerimiz anlatıyor",
      subtitle: "Bizimle çalışan müşterilerimizin gönülden gelen deneyimleri.",
      items: [
        { quote: "ŞAHİ PORTFÖY ile çalışmak, gayrimenkul sürecimin en pürüzsüz deneyimiydi. Profesyonellikleri ve şeffaflıkları gerçekten fark yarattı.", name: "Mehmet Yılmaz", role: "Yatırımcı" },
        { quote: "Hayalimdeki eve ulaşmamda bana sundukları rehberlik paha biçilemezdi. Her detayı düşünmüşler ve her aşamada yanımda oldular.", name: "Ayşe Demir", role: "Ev Sahibi" },
        { quote: "Satış sürecimde mülkümün değerini en doğru şekilde belirleyip, kısa sürede harika bir sonuç elde etmemi sağladılar.", name: "Can Öztürk", role: "İş İnsanı" },
        { quote: "Yatırım danışmanlığı sayesinde portföyümü doğru yönlendirdim. Piyasa bilgileri ve güvenilir yaklaşımları için minnettarım.", name: "Zeynep Kaya", role: "Müşteri" },
      ],
    },
    faq: {
      eyebrow: "S.S.S.",
      title: "Sıkça sorulan sorular",
      subtitle: "Aklınızdaki sorular için net ve açık yanıtlar bir arada.",
      items: [
        { q: "ŞAHİ PORTFÖY hangi hizmetleri sunuyor?", a: "Gayrimenkul aracılığı, satın alma ve satış danışmanlığı, yatırım danışmanlığı, ekspertiz ve değerleme ile profesyonel danışmanlık hizmetlerinin tamamını sunuyoruz." },
        { q: "Hizmet bölgeleriniz neresi?", a: "Merkezimiz İstanbul'da bulunmakla birlikte, Türkiye genelindeki seçkin gayrimenkul projelerinde hizmet veriyoruz." },
        { q: "İlk görüşme nasıl gerçekleşiyor?", a: "Bize telefon veya WhatsApp üzerinden ulaşabilir, ücretsiz ön görüşme talep edebilirsiniz. İhtiyacınızı dinleyip size özel bir yol haritası çıkarıyoruz." },
        { q: "Danışmanlık hizmetleriniz ücretli mi?", a: "Hizmet bedellerimiz, sunulan hizmetin türüne ve kapsamına göre belirlenir. Tüm maliyetleri süreç başında şeffaf bir şekilde paylaşıyoruz." },
        { q: "Satış sürecim ne kadar sürer?", a: "Süre; mülkün konumu, değeri ve piyasa koşullarına göre değişir. Doğru fiyatlandırma ve strateji ile süreyi en aza indirmeyi hedefliyoruz." },
        { q: "Yabancı uyruklu müşterilere hizmet veriyor musunuz?", a: "Evet. Türkçe ve İngilizce dilinde hizmet sunarak yerli ve yabancı tüm müşterilerimize kesintisiz destek sağlıyoruz." },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bir sonraki gayrimenkul adımınızı birlikte planlayalım",
      subtitle: "Uzman ekibimizle iletişime geçin; size özel çözümler sunalım. Sorularınızı yanıtlamaktan memnuniyet duyarız.",
      phoneLabel: "Telefon",
      formTitle: "Bize mesaj gönderin",
      name: "Ad Soyad",
      email: "E-posta",
      phoneInput: "Telefon",
      subject: "Konu",
      message: "Mesajınız",
      send: "Mesaj Gönder",
      sending: "Gönderiliyor…",
      successTitle: "Mesajınız alındı!",
      successText: "En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.",
      socialTitle: "Sosyal Medya",
      mapTitle: "Bizi Bulun",
      whatsappCta: "WhatsApp'tan Yazın",
      whatsappNote: "Hızlı yanıt için doğrudan WhatsApp'tan ulaşın; haftanın 7 günü yanınızdayız.",
      locationLabel: "Merkez",
      location: "İstanbul, Türkiye",
      hoursLabel: "Çalışma Saatleri",
      hours: "Pzt – Cmt: 09:00 – 19:00",
      sendAnother: "Yeni mesaj gönder",
      getDirections: "Yol Tarifi Al",
      fieldsRequired: "* Zorunlu alanlar",
    },
    footer: {
      tagline: "Türkiye'nin seçkin gayrimenkullerinde güvenilir aracılık, prestij ve yatırım danışmanlığı.",
      navTitle: "Keşfet",
      servicesTitle: "Hizmetler",
      contactTitle: "İletişim",
      followTitle: "Bizi Takip Edin",
      rights: "Tüm hakları saklıdır.",
      backToTop: "Yukarı",
      disclaimer: "Bu site yalnızca kurumsal tanıtım amaçlıdır.",
    },
    common: {
      langName: "TR",
      switchTo: "English",
    },
  },

  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      faq: "FAQ",
      contact: "Contact",
      cta: "Contact Us",
    },
    hero: {
      eyebrow: "Real Estate Brokerage & Investment",
      titleTop: "Redefining",
      titleGold: "Prestige",
      titleBottom: "in Real Estate",
      subtitle:
        "Trusted brokerage and investment advisory across Turkey's most distinguished properties. We turn your property journey from an ordinary transaction into a bespoke experience.",
      contact: "Get in Touch",
      whatsapp: "WhatsApp",
      scroll: "Discover",
      stats: [
        { value: "10+", label: "Years of Experience" },
        { value: "750+", label: "Closed Transactions" },
        { value: "98%", label: "Client Satisfaction" },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Redefining trust in real estate",
      lead: "ŞAHİ PORTFÖY is an expert organization offering trusted brokerage and strategic advisory in the luxury real estate market.",
      p1: "Every client's story is unique. Instead of one-size-fits-all solutions, we embrace a transparent, results-driven approach tailored to your goals. With our experienced team, we stand by you at every step — from acquisition to sale, valuation to investment planning.",
      p2: "Thanks to our extensive portfolio network and market knowledge across Istanbul and Turkey's most valuable locations, we share all the insight you need to make the right decision — openly and clearly.",
      missionTitle: "Our Mission",
      missionText:
        "To become the symbol of trust and prestige in the industry by delivering the highest added value through a transparent and ethical real estate experience.",
      visionTitle: "Our Vision",
      visionText:
        "To be Turkey's first-recalled real estate brokerage brand, delivering service at international standards and shaping the industry through an innovative approach.",
      valuesTitle: "Our Core Values",
      values: [
        { icon: "shield", title: "Trust & Integrity", text: "Every relationship we build is grounded in transparency and standing behind our word." },
        { icon: "gem", title: "Excellence", text: "With meticulous attention to detail, we deliver service that consistently exceeds standards." },
        { icon: "handshake", title: "Client Focus", text: "Our success is measured by client satisfaction and long-lasting relationships." },
      ],
      timelineTitle: "Our Journey",
      cta: "Explore Our Services",
      badge: "Established 2015",
      timeline: [
        { year: "2015", title: "Founding", text: "ŞAHİ PORTFÖY was founded with a vision to make a difference in real estate brokerage." },
        { year: "2018", title: "Growth", text: "We diversified our services with an expanding portfolio network and expert team." },
        { year: "2021", title: "Digital Transformation", text: "We launched our modern digital infrastructure to elevate the client experience." },
        { year: "2024", title: "A New Era", text: "We entered a new era with investment advisory and an international portfolio." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "End-to-end real estate solutions",
      subtitle:
        "Every service you need under one trusted roof. Our specialist team manages your processes from start to finish.",
      items: [
        { icon: "building", title: "Real Estate Brokerage", desc: "Professional end-to-end brokerage that brings the right buyer and seller together." },
        { icon: "key", title: "Buying Assistance", desc: "From market research to viewings and every step, we help you reach the property of your dreams." },
        { icon: "tag", title: "Selling Assistance", desc: "Strategic marketing and pricing solutions to sell your property at its true value, to the right audience." },
        { icon: "chart", title: "Investment Consulting", desc: "Return-focused, data-driven investment opportunities and portfolio optimization guidance." },
        { icon: "scale", title: "Property Valuation", desc: "Independent and reliable valuation reports that determine your property's true market value." },
        { icon: "headset", title: "Professional Consultation", desc: "Expert insight and guidance so you can make informed decisions at every stage." },
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Reasons to choose us",
      subtitle: "The details that set ŞAHİ PORTFÖY apart.",
      items: [
        { icon: "award", title: "Professional Service", desc: "International-standard service at every stage, delivered by our expert team." },
        { icon: "shield", title: "Trusted Brokerage", desc: "Unshakable trust earned through transparent processes and an ethical approach." },
        { icon: "eye", title: "Transparent Process", desc: "We share all information openly, offering a clear experience with no surprises." },
        { icon: "zap", title: "Fast Communication", desc: "Instant answers to your questions and seamless, fast communication throughout." },
        { icon: "sparkles", title: "Personalized Solutions", desc: "Strategies tailored to each client's needs and goals." },
        { icon: "heart", title: "Customer Satisfaction", desc: "The single metric we measure success by: lasting, genuine customer satisfaction." },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Our success stories",
      subtitle:
        "A selection of distinguished transactions, corporate achievements and professional projects. This is not a listing — it is a reflection of earned trust.",
      items: [
        { tag: "Villa", title: "Award-Winning Villa Project", loc: "Bebek · Istanbul", desc: "End-to-end, privacy-first brokerage for an architecturally awarded Bosphorus-view villa." },
        { tag: "Penthouse", title: "Penthouse Advisory", loc: "Etiler · Istanbul", desc: "Interior advisory, valuation and sales strategy for a luxury penthouse." },
        { tag: "Historic", title: "Heritage Apartment Portfolio", loc: "Beyoğlu · Istanbul", desc: "Bringing a restored historic building near Galata into our portfolio." },
        { tag: "Mansion", title: "Prestige Mansion Sale", loc: "Üsküdar · Istanbul", desc: "A private sale process for a prestigious, garden-rich mansion to an exclusive buyer circle." },
        { tag: "Residence", title: "Residence Investment", loc: "Şişli · Istanbul", desc: "Investment advisory for a high-yield residence portfolio." },
        { tag: "Loft", title: "Modern Loft Apartment", loc: "Kadıköy · Istanbul", desc: "Independent valuation and sale of a modern loft in Moda." },
      ],
      galleryTitle: "Professional Gallery",
      tagDone: "Completed",
    },
    stats: {
      items: [
        { value: 10, suffix: "+", label: "Years Experience" },
        { value: 500, suffix: "+", label: "Happy Clients" },
        { value: 750, suffix: "+", label: "Completed Transactions" },
        { value: 98, suffix: "%", label: "Customer Satisfaction" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What our clients say",
      subtitle: "Heartfelt experiences from clients who have worked with us.",
      items: [
        { quote: "Working with ŞAHİ PORTFÖY was the smoothest experience of my real estate journey. Their professionalism and transparency truly made the difference.", name: "Mehmet Yılmaz", role: "Investor" },
        { quote: "The guidance they offered in finding my dream home was invaluable. They thought of every detail and stood by me at every step.", name: "Ayşe Demir", role: "Homeowner" },
        { quote: "During my sale, they valued my property accurately and helped me achieve an outstanding result in a short time.", name: "Can Öztürk", role: "Businessman" },
        { quote: "Thanks to their investment advisory, I steered my portfolio in the right direction. I'm grateful for their market insight and trustworthy approach.", name: "Zeynep Kaya", role: "Client" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Clear and open answers to the questions on your mind.",
      items: [
        { q: "What services does ŞAHİ PORTFÖY offer?", a: "We offer the full range: real estate brokerage, buying and selling assistance, investment consulting, valuation and professional consultation." },
        { q: "What areas do you serve?", a: "Our headquarters is in Istanbul, and we serve distinguished real estate projects across Turkey." },
        { q: "How does the first meeting work?", a: "You can reach us by phone or WhatsApp and request a free initial consultation. We listen to your needs and prepare a roadmap tailored to you." },
        { q: "Are your advisory services paid?", a: "Service fees are determined by the type and scope of the service. We share all costs transparently at the very start of the process." },
        { q: "How long will my sale take?", a: "It depends on the property's location, value and market conditions. With the right pricing and strategy, we aim to minimize the timeframe." },
        { q: "Do you serve foreign clients?", a: "Yes. We offer service in Turkish and English, providing seamless support to both local and international clients." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's plan your next real estate move together",
      subtitle: "Get in touch with our expert team for bespoke solutions. We'd be delighted to answer your questions.",
      phoneLabel: "Phone",
      formTitle: "Send us a message",
      name: "Full Name",
      email: "Email",
      phoneInput: "Phone",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending…",
      successTitle: "Message received!",
      successText: "We'll get in touch with you as soon as possible. Thank you.",
      socialTitle: "Social Media",
      mapTitle: "Find Us",
      whatsappCta: "Message on WhatsApp",
      whatsappNote: "Reach us directly on WhatsApp for a fast response — we're with you 7 days a week.",
      locationLabel: "Headquarters",
      location: "Istanbul, Turkey",
      hoursLabel: "Working Hours",
      hours: "Mon – Sat: 09:00 – 19:00",
      sendAnother: "Send another message",
      getDirections: "Get Directions",
      fieldsRequired: "* Required fields",
    },
    footer: {
      tagline: "Trusted brokerage, prestige and investment advisory across Turkey's most distinguished real estate.",
      navTitle: "Explore",
      servicesTitle: "Services",
      contactTitle: "Contact",
      followTitle: "Follow Us",
      rights: "All rights reserved.",
      backToTop: "Top",
      disclaimer: "This website is for corporate presentation purposes only.",
    },
    common: {
      langName: "EN",
      switchTo: "Türkçe",
    },
  },
} as const;

export type Dict = (typeof translations)[Lang];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sahi-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved === "en" || saved === "tr" ? saved : "tr";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((p) => (p === "tr" ? "en" : "tr")),
      t: translations[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
