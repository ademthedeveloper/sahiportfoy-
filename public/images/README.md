# 🖼️ Sâhi Portföy — kendi logo ve fotoğrafların

Tüm görseller **`src/lib/constants.ts`** dosyasında merkezidir.

---

## 1️⃣ Kendi logon (isteğe bağlı)

`src/lib/constants.ts` içinde:
```ts
export const brand = {
  logoUrl: null,              // → "/images/logo.png" yap
  tagline: "Olduğu gibi",
};
```
- Logoyu `public/images/logo.png` olarak ekle, sonra `logoUrl: "/images/logo.png"` yap.
- `null` bırakırsan yerleşik **Sâhi Portföy** arması görünür.
- Hero koyu olduğu için **açık/beyaz** logo kullan.

---

## 2️⃣ Galeri (kendi fotoğrafların) — ÖNEMLİ

Galeri şu an **kendi fotoğrafların** için ayarlı:

```
public/images/gallery/
  ├── gallery-1.jpg   ← büyük proje (blok daireler)
  ├── gallery-2.jpg   ← büyük proje
  ├── gallery-3.jpg   ← büyük proje
  ├── gallery-4.jpg   ← çan çalma / anlaşma anı
  ├── gallery-5.jpg   ← çan çalma / anlaşma anı
  └── gallery-6.jpg   ← çan çalma / anlaşma anı
```

1. `public/images/gallery/` klasörünü oluştur.
2. Fotoğrafları yukarıdaki isimlerle ekle (önerilen 700×500, yatay).
3. Fotoğraf yoksa galeri boş/bozuk görünür — dosyaları ekleyince düzelir.

> İsimleri değiştirmek istersen `constants.ts` içindeki `gallery:` listesindeki
> yolları güncelle. Adet artırıp azaltabilirsin de.

---

## 3️⃣ Diğer fotoğraflar (hero, hakkımızda, portföy, avatarlar)

`constants.ts` → `images` nesnesindeki her slotu kendi fotoğrafınla değiştirebilirsin:
`hero`, `aboutMain`, `aboutInset`, `aboutSkyline`, `portfolio[0–5]`, `avatars[0–3]`.

Yöntem aynı: dosyayı `public/images/` içine koy, yolu `"/images/dosya.jpg"` yap,
veya doğrudan bir görsel URL'si yapıştır.

| Slot | Önerilen boyut |
|------|----------------|
| `hero` | 1920×1280 (yatay) |
| `aboutMain` | 1100×1300 (dikey) |
| `portfolio` | 900×1150 (dikey) |
| `avatars` | 200×200 (kare) |

> Tüm metinler (Türkçe + İngilizce) **`src/lib/i18n.tsx`** dosyasındadır.
