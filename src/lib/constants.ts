// ============================================================
//  Sâhi Portföy — tüm görseller + marka buradan yönetilir
// ------------------------------------------------------------
//  KENDİ FOTOĞRAFLARINI EKLEMEK (en kolay yol):
//   1) Fotoğrafı public/images klasörüne koy
//   2) Dosya adını aşağıdaki yolla AYNI yap
//      (ör. hero.jpg) — yol zaten doğru, sadece dosyayı ekle.
//   Dosya adlarını değiştirmek istersen aşağıdaki yolları güncelle.
//   Tüm metinler src/lib/i18n.tsx içindedir.
// ============================================================

export const brand = {
  logoUrl: "/images/logo.png", // kendi logon için: "/images/logo.png"
  tagline: "Olduğu gibi", // logonun altındaki küçük yazı (slogan)
};

// Her slot = bir görsel. Dosyaları public/images içine aynı isimlerle koy.
export const images = {
  hero: "/images/hero.jpg", // Ana sayfa arka planı — 1920×1280 (yatay)

  // Hakkımızda bölümü
  aboutMain: "/images/about-main.jpg", // büyük görsel — 1100×1300 (dikey)
  aboutInset: "/images/about-inset.jpg", // küçük görsel — kare
  aboutSkyline: "/images/skyline.jpg", // istatistik bandı arka planı — yatay

  // Referans avatarları (4) — kare
  avatars: [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg",
  ],

  // GALERİ (Portföy bölümü) — 1–3 büyük proje, 4–6 anlaşma 🛎️
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ],
};

export const social = {
  facebook: "https://www.facebook.com/share/1JuNS2Fd8E/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/sahi_portfoy",
  tiktok: "https://www.tiktok.com/@ysezgin34",
};

export const PHONE_DISPLAY = "+90 541 841 79 85";
export const PHONE_TEL = "+905418417985";
export const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Sâhi Portföy hakkında bilgi almak istiyorum."
)}`;
