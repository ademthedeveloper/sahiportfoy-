// ============================================================
//  Sâhi Portföy — merkezi yapılandırma dosyası
//  Tüm görseller + marka buradan yönetilir.
// ============================================================

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/* ============================================================
   MARKA — isim, logo ve slogan
   ------------------------------------------------------------
   • logoUrl:  Kendi logonu kullanmak için "/images/logo.png"
               yapın (dosyayı /public/images klasörüne koyun).
               null bırakırsanız yerleşik "Sâhi Portföy" arması gösterilir.
   • tagline:  Logonun altındaki küçük yazı / slogan.
   ============================================================ */
export const brand = {
  logoUrl: null as string | null,
  tagline: "Olduğu gibi", // doğru ürün · doğru fiyat
};

/* ============================================================
   GÖRSELLER — her slotu kendi fotoğrafınla değiştirebilirsin.
   Yöntem: dosyayı /public/images içine koy, sonra yolu
   "/images/dosya-adi.jpg" olarak yaz (veya herhangi bir URL).
   Detaylı tablo için: /public/images/README.md
   ============================================================ */
export const images = {
  hero: px(7031407, 1920, 1280),
  heroThumb: px(7031407, 800, 1000),

  // Hakkımızda
  aboutMain: px(9614922, 1100, 1300),
  aboutInset: px(7722168, 720, 720),
  aboutSkyline: px(34734832, 720, 540),

  // Portföy kartları (6)
  portfolio: [
    px(16573669, 900, 1150),
    px(7031712, 900, 1150),
    px(34150376, 900, 1150),
    px(8143683, 900, 1150),
    px(8082324, 900, 1150),
    px(7174113, 900, 1150),
  ],

  /* ----------------------------------------------------------
     GALERİ — KENDİ FOTOĞRAFLARIN
     Buraya büyük projenden (blok daireler) ve anlaşma/çan
     fotoğraflarını koy. Dosyaları /public/images/gallery/
     klasörüne şu isimlerle ekle:
       gallery-1.jpg ... gallery-6.jpg
     (1–3 = büyük proje / blok daireler)
     (4–6 = çan çalma / anlaşma anı)
     İstersen isimleri değiştirebilir veya adet artırabilirsin.
     ---------------------------------------------------------- */
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ],

  // Referans avatarları (4)
  avatars: [
    px(28442318, 200, 200),
    px(33680700, 200, 200),
    px(38740728, 200, 200),
    px(8312669, 200, 200),
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
