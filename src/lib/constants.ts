// Centralized premium imagery (external URLs for reliability with the singlefile build).
// Pexels supports server-side resize/crop via query params → keeps payload light (Core Web Vitals).

const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/* ============================================================
   BRANDING — your logo & tagline
   ------------------------------------------------------------
   • logoUrl: to use YOUR logo, set this to "/images/logo.png"
     (drop the file in the /public/images folder) or any image URL.
     Leave it as `null` to keep the built-in ŞAHİ PORTFÖY monogram.
   • tagline: the small line under the wordmark.
   ============================================================ */
export const brand = {
  logoUrl: null as string | null,
  tagline: "Real Estate",
};

/* ============================================================
   MEDIA — swap any URL below with YOUR own photo.
   Use "/images/<file>.jpg" (file in /public/images) or any hosted URL.
   Full list of slots is in /public/images/README.md
   ============================================================ */
export const images = {
  hero: px(7031407, 1920, 1280),
  heroThumb: px(7031407, 800, 1000),

  // About
  aboutMain: px(9614922, 1100, 1300),
  aboutInset: px(7722168, 720, 720),
  aboutSkyline: px(34734832, 720, 540),

  // Portfolio cards (index-aligned with translations)
  portfolio: [
    px(16573669, 900, 1150),
    px(7031712, 900, 1150),
    px(34150376, 900, 1150),
    px(8143683, 900, 1150),
    px(8082324, 900, 1150),
    px(7174113, 900, 1150),
  ],

  // Gallery strip
  gallery: [
    px(7031594, 700, 500),
    px(8143677, 700, 500),
    px(9614922, 700, 500),
    px(8082328, 700, 500),
    px(7031407, 700, 500),
  ],

  // Testimonial avatars (index-aligned)
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
  "Merhaba, ŞAHİ PORTFÖY hakkında bilgi almak istiyorum."
)}`;
