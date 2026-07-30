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
  logoUrl: "/images/logo.png",          // your logo (light/white version)
  tagline: "Real Estate",                // small text under the logo
};

export const images = {
  // About
  aboutMain:    "/images/about-main.jpg",  // large About image — 1100×1300
  aboutInset:   "/images/about-inset.jpg", // small inset — 720×720
  aboutSkyline: "/images/skyline.jpg",     // stats band background — 720×540

  // Portfolio cards (6)
  portfolio: [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
  ],

  // Gallery strip (5)
  gallery: [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
  ],

  // Testimonial avatars (4)
  avatars: [
    "/images/a1.jpg",
    "/images/a2.jpg",
    "/images/a3.jpg",
    "/images/a4.jpg",
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
