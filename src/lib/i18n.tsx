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
        { value: "12+", label: "Yıllık Deneyim" },
        { value: "250+", label: "Tamamlanan İşlem" },
        { value: "%98", label: "Müşteri Memnuniyeti" },
      ],
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Gayrimenkulde güveni yeniden tanımlıyoruz",
      lead: "Sâhi Portföy; lüks gayrimenkul pazarında 'olduğu gibi' dürüst aracılık ve stratejik danışmanlık sunan, alanında uzman bir kuruluştur.",
      p1: "Her müşterimizin hikayesi benzersizdir. Bu nedenle standart çözümler sunmak yerine, hedeflerinize özel, şeffaf ve sonuç odaklı bir hizmet anlayışını benimsiyoruz. Deneyimli ekibimizle; mülk ediniminden satışa, değerlemeden yatırım planlamasına kadar sürecin her adımında yanınızdayız.",
      p2: "İstanbul'un ve Türkiye'nin en değerli konumlarındaki geniş portföy ağımız ve piyasa bilgimiz sayesinde, doğru kararı vermeniz için ihtiyaç duyduğunuz tüm verileri sizinle şeffafça paylaşıyoruz.",
      missionTitle: "Misyonumuz",
      missionText:
        "İnsanların doğru arayışına doğru cevaplar bulmak ve onları güvenle doğru sonuçlara ulaştırmak. Dolandırıcılığın yoğun olduğu bu piyasada, şeffaf ve güvenilir bir çözüm ortağı olmak.",
      visionTitle: "Vizyonumuz",
      visionText:
        "Gayrimenkulde doğruyu bulmanın adresi olmak; her müşterimizi doğru karara ve doğru sonuca ulaştıran, güvenin simgesi bir marka olmak.",
      valuesTitle: "Temel Değerlerimiz",
      values: [
        { icon: "shield", title: "Güven & Dürüstlük", text: "İlişkilerimizin temelinde her zaman şeffaflık ve sözümüzün arkasında durmak vardır." },
        { icon: "gem", title: "Mükemmellik", text: "Detaylara gösterdiğimiz özen ile her zaman standartların üzerinde bir hizmet sunarız." },
        { icon: "handshake", title: "Müşteri Odaklılık", text: "Başarımızı, müşterilerimizin memnuniyeti ve uzun soluklu ilişkilerimiz belirler." },
      ],
      timelineTitle: "Yolculuğumuz",
      cta: "Hizmetlerimizi Keşfedin",
      badge: "Kuruluş 2013",
      timeline: [
        { year: "2013", title: "Kuruluş", text: "Doğru ürün, doğru fiyat anlayışıyla yola çıktık; gayrimenkulde 'olduğu gibi' dürüst bir hizmet vizyonu kurduk." },
        { year: "2023", title: "Devir & Ara", text: "Yılların deneyimi ve biriktirdiğimiz güvenin ardından işi devrederek bir süre ara verdik." },
        { year: "2026", title: "Yeni Dönem", text: "Yeni ismimiz ve logomuzla, 'Olduğu gibi' sloganıyla yeniden yola devam ediyoruz." },
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
      subtitle: "Sâhi Portföy farkını yaratan, gözden kaçmayan detaylar.",
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
      galleryTitle: "Başarı Dolu Anlar",
      gallerySubtitle:
        "Büyük projemizden kareler ve gerçekleştirdiğimiz anlaşmalar — çanın çaldığı, güvenin kazandığı anlar.",
      tagDone: "Tamamlandı",
    },
    stats: {
      items: [
        { value: 12, suffix: "+", label: "Yıllık Deneyim" },
        { value: 500, suffix: "+", label: "Mutlu Müşteri" },
        { value: 250, suffix: "+", label: "Tamamlanan İşlem" },
        { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
      ],
    },
    testimonials: {
      eyebrow: "Referanslar",
      title: "Müşterilerimiz anlatıyor",
      subtitle: "Bizimle çalışan müşterilerimizin gönülden gelen deneyimleri.",
      items: [
        { quote: "Sâhi Portföy ile çalışmak, gayrimenkul sürecimin en pürüzsüz deneyimiydi. Profesyonellikleri ve şeffaflıkları gerçekten fark yarattı.", name: "Mehmet Yılmaz", role: "Yatırımcı" },
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
        { q: "Kat mülkiyeti ve kat irtifakı nedir? Farkı nedir?", a: "Kat irtifakı, yapım aşamasındaki bir binada bağımsız bölümlerin tapuya bağlanmasıdır; tapu henüz daire bazında tam ayrılmamıştır. Kat mülkiyeti ise bina tamamlandıktan sonra her bağımsız bölümün kendi tapusunun verilmiş olmasıdır. Kısacası kat irtifakı bir geçiş, kat mülkiyeti ise tam mülkiyet durumudur." },
        { q: "İskanlı ve iskansız taşınmaz arasındaki fark nedir?", a: "İskan (yapı kullanma izni), binanın ruhsata uygun tamamlandığını ve kullanıma hazır olduğunu gösteren resmi belgedir. İskanlı bir mülkte oturum, abonelik (su/elektrik) ve kredi kullanımı sorunsuzdur. İskansız mülklerde bu işlemler kısıtlı olabilir; bu yüzden alım öncesi iskan durumunu mutlaka kontrol ediyoruz." },
        { q: "Bir mülkün krediye uygun olması için şartlar nelerdir?", a: "Banka kredisi için genellikle mülkün kat mülkiyetine geçmiş, iskanlı ve değerlemeye uygun olması gerekir. Tapu kaydı, borç durumu ve proje niteliği gibi detayları önceden inceliyor; kredi sürecinizi baştan sona yönlendiriyoruz." },
        { q: "Oturma izni (ikamet) ve vatandaşlık için hangi şartlar geçerli?", a: "Yabancıların Türkiye'de oturma izni veya vatandaşlık başvurusu için belirli bir değer üst sınırının üzerinde gayrimenkul edinmesi gerekir. Sınır ve şartlar mevzuata göre değişebilir; güncel rakamları ve size en uygun projeyi birlikte değerlendiriyoruz." },
        { q: "Dolandırıcılıktan nasıl korunuyorsunuz?", a: "Her işlemi resmi tapu üzerinden, şeffaf ve izlenebilir şekilde yürütüyoruz. İlanı, tapuyu ve belgeleri titizlikle inceliyor; güvendiğiniz için değil, doğru sonuçlara ulaşmanız için yanınızda oluyoruz." },
        { q: "Sâhi Portföy hangi hizmetleri sunuyor?", a: "Gayrimenkul aracılığı, satın alma ve satış danışmanlığı, yatırım danışmanlığı, ekspertiz/değerleme ve profesyonel danışmanlık hizmetlerinin tamamını sunuyoruz." },
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
      locationLabel: "Konum",
      location: "Beylikdüzü / Esenyurt, İstanbul",
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
        { value: "12+", label: "Years of Experience" },
        { value: "250+", label: "Closed Transactions" },
        { value: "98%", label: "Client Satisfaction" },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Redefining trust in real estate",
      lead: "Sâhi Portföy is an expert organization offering honest, 'as it is' brokerage and strategic advisory in the luxury real estate market.",
      p1: "Every client's story is unique. Instead of one-size-fits-all solutions, we embrace a transparent, results-driven approach tailored to your goals. With our experienced team, we stand by you at every step — from acquisition to sale, valuation to investment planning.",
      p2: "Thanks to our extensive portfolio network and market knowledge across Istanbul and Turkey's most valuable locations, we share all the insight you need to make the right decision — openly and clearly.",
      missionTitle: "Our Mission",
      missionText:
        "To find the right answers to people's genuine search and guide them safely to the right results — being a transparent, trustworthy partner in a market where fraud is common.",
      visionTitle: "Our Vision",
      visionText:
        "To be the destination for finding what's right in real estate — a brand that leads every client to the right decision and outcome, and a symbol of trust.",
      valuesTitle: "Our Core Values",
      values: [
        { icon: "shield", title: "Trust & Integrity", text: "Every relationship we build is grounded in transparency and standing behind our word." },
        { icon: "gem", title: "Excellence", text: "With meticulous attention to detail, we deliver service that consistently exceeds standards." },
        { icon: "handshake", title: "Client Focus", text: "Our success is measured by client satisfaction and long-lasting relationships." },
      ],
      timelineTitle: "Our Journey",
      cta: "Explore Our Services",
      badge: "Established 2013",
      timeline: [
        { year: "2013", title: "Founding", text: "We set out with a right product, right price approach — a vision for honest, 'as it is' real estate service." },
        { year: "2023", title: "Handover & Pause", text: "After years of experience and earned trust, we handed the business over and took a break." },
        { year: "2026", title: "A New Era", text: "We continue our journey with our new name and logo and the 'As It Is' promise." },
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
      subtitle: "The details that set Sâhi Portföy apart.",
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
      galleryTitle: "Moments of Success",
      gallerySubtitle:
        "Frames from our flagship project and the deals we closed — the moments the bell rang and trust won.",
      tagDone: "Completed",
    },
    stats: {
      items: [
        { value: 12, suffix: "+", label: "Years Experience" },
        { value: 500, suffix: "+", label: "Happy Clients" },
        { value: 250, suffix: "+", label: "Completed Transactions" },
        { value: 98, suffix: "%", label: "Customer Satisfaction" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What our clients say",
      subtitle: "Heartfelt experiences from clients who have worked with us.",
      items: [
        { quote: "Working with Sâhi Portföy was the smoothest experience of my real estate journey. Their professionalism and transparency truly made the difference.", name: "Mehmet Yılmaz", role: "Investor" },
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
        { q: "What are condominium ownership (kat mülkiyeti) and construction servitude (kat irtifakı)?", a: "Construction servitude (kat irtifakı) registers independent units in a building still under construction, before individual title deeds are issued. Condominium ownership (kat mülkiyeti) is granted once the building is completed and each unit receives its own separate title deed. In short: servitude is a transitional stage, while condominium ownership is full ownership." },
        { q: "What is the difference between a property with and without a habitation certificate (iskan)?", a: "A habitation certificate (iskan) is the official document confirming that a building was completed in line with its permit and is fit for use. Properties with an iskan allow smooth residency, utility subscriptions and bank financing. Without it, these processes can be restricted — so we always verify the iskan status before any purchase." },
        { q: "What are the conditions for a property to qualify for bank financing?", a: "For a mortgage, the property generally needs condominium ownership, a habitation certificate and to be suitable for valuation. We review the title records, any debts and project details in advance, and guide your financing process from start to finish." },
        { q: "What are the requirements for residence permits and citizenship?", a: "Foreign buyers must acquire real estate above a certain value threshold to apply for a residence permit or Turkish citizenship. The limits and conditions change with current regulations — we evaluate the up-to-date figures and find the most suitable project for you together." },
        { q: "How do you protect clients from fraud?", a: "Every transaction is handled officially through the title deed office, transparently and traceably. We scrutinize listings, title deeds and documents carefully — we're by your side for the right results, not just because you trust us." },
        { q: "What services does Sâhi Portföy offer?", a: "We offer the full range: real estate brokerage, buying and selling assistance, investment consulting, valuation/appraisal and professional consultation." },
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
      locationLabel: "Location",
      location: "Beylikdüzü / Esenyurt, Istanbul",
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
