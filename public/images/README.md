# 🖼️ Sâhi Portföy — kendi fotoğraf ve logonu ekle

Tüm görseller **`src/lib/constants.ts`** dosyasında tanımlı.
Senin yapman gereken tek şey: fotoğrafları `public/images/` içine
**aşağıdaki isimlerle** koymak. Kodu ellemene gerek yok.

---

## 📁 Eklenecek dosyalar (hepsi bu liste)

```
public/images/
  ├── logo.png            (isteğe bağlı — kendi logon)
  ├── hero.jpg            (ana sayfa arka planı, 1920×1280)
  ├── about-main.jpg      (Hakkımızda büyük, 1100×1300 dikey)
  ├── about-inset.jpg     (Hakkımızda küçük, kare)
  ├── skyline.jpg         (istatistik bandı arka planı, yatay)
  ├── avatar-1.jpg        (referans 1, kare)
  ├── avatar-2.jpg        (referans 2, kare)
  ├── avatar-3.jpg        (referans 3, kare)
  ├── avatar-4.jpg        (referans 4, kare)
  └── gallery/
        ├── gallery-1.jpg  (büyük proje)
        ├── gallery-2.jpg  (büyük proje)
        ├── gallery-3.jpg  (büyük proje)
        ├── gallery-4.jpg  (anlaşma 🛎️)
        ├── gallery-5.jpg  (anlaşma 🛎️)
        └── gallery-6.jpg  (anlaşma 🛎️)
```

---

## ✅ Nasıl çalışır
1. `public/images/` klasörüne git (yoksa oluştur).
2. Fotoğrafları yukarıdaki **aynı isimlerle** içine koy.
3. Bitti — site otomatik olarak onları gösterir.

> ⚠️ Bir dosya eksikse o görsel boş görünür. Dosyayı ekleyince düzelir.
> Hiç fotoğrafın yoksa, `constants.ts` içindeki yolu bir URL ile
> değiştirebilirsin (ör. `hero: "https://.../foto.jpg"`).

---

## 🪪 Logo
`src/lib/constants.ts` → `brand.logoUrl`:
- Kendi logon: dosyayı `public/images/logo.png` koy, sonra
  `logoUrl: "/images/logo.png"` yap.
- `null` bırakırsan yerleşik **Sâhi Portföy** arması görünür.
- Ana sayfa koyu olduğu için **açık/beyaz** logo kullan.

---

## ✏️ Metinler
Tüm yazılar (Türkçe + İngilizce) **`src/lib/i18n.tsx`** içindedir.
