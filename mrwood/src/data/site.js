/**
 * One place for everything about the business.
 * Change the phone number / links here and the whole site updates.
 */

export const site = {
  name: "MRWOOD",
  arabicSubtitle: " ياسر التملى",
  englishSubtitle: "Wood Manufacturing",
  tagline: "Crafted Wood. Timeless Design.",

  // Use full international format, digits only, for the WhatsApp link.
  phoneDisplay: "0122 724 0819",
  phone: "+201227240819",
  whatsapp: "201227240819",
  whatsappMessage: "مرحبًا MRWOOD، أرغب في الاستفسار عن الأبواب وتفاصيل الأسعار.",

  email: "yasrtmly@gmail.com",
  address: "Workshop & showroom — Cairo, Egypt",
  addressAr: "الورشة والمعرض — القاهرة، مصر",
  mapUrl: "https://maps.google.com/?q=Cairo,+Egypt",

  hours: [
    { days: "Saturday – Thursday", time: "9:00 — 18:00", daysAr: "السبت – الخميس" },
    { days: "Friday", time: "Closed", daysAr: "الجمعة", timeAr: "مغلق" },
  ],

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61551821164214&sk=directory_basic_info",
  },

  founded: 1995,
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Doors", to: "#doors" },
  { label: "Contact", to: "#contact" },
];
