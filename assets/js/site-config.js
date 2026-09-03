/**
 * Thai River Caviar — site-wide editable settings.
 * Change values here and every page updates automatically.
 * Leave a value as "" (empty string) to hide that item on the site
 * until you have the real information.
 */
window.TRC_CONFIG = {
  brandTh: "ไทย ริเวอร์ คาเวียร์",
  brandEn: "Thai River Caviar",

  email: "Fullgreen.TRC@gmail.com",
  lineUrl: "https://lin.ee/YZVohkc",
  lineLabel: "@thairivercaviar", // change to your real LINE OA display name if different

  // Social channels — shown in the footer "Contact" list.
  tiktokUrl: "https://www.tiktok.com/@thairivercaviar?_r=1&_t=ZS-99MV9kBi0W4",
  facebookUrl: "https://www.facebook.com/share/19bbik582o/?mibextid=wwXIfr",

  // Add a real number once you have one, e.g. "+66 89 123 4567"
  phone: "",

  // Retail / B2C storefront (Shopee, Lazada, LINE MyShop, your own shop, etc.)
  // Once you send the real link, paste it here and the "Shop now" buttons go live.
  shopUrl: "",

  // Farm / company address — shown in the footer and Contact page. HTML allowed
  // (e.g. <br>) since it's rendered via data-cfg-html.
  address: "Thai River Caviar Co., Ltd.<br>37/9 หมู่ 2 ต.บึงทองหลาง อ.ลำลูกกา จ.ปทุมธานี 12150 (สำนักงานใหญ่)<br>37/9 Moo 2, T. Buengthonglang, A. Lumlukka, Pathumthani 12150, Thailand (Head Office)",

  // Legal / registration number, if you want it displayed for B2B credibility.
  companyRegNo: "",

  // Certification names — replace placeholders as documents are confirmed.
  certifications: [
    { th: "มาตรฐานส่งออกสหรัฐอเมริกา", en: "US export standard", detail: "" },
    { th: "มาตรฐานส่งออกญี่ปุ่น", en: "Japan export standard", detail: "" },
    { th: "วีแกน 100%", en: "100% Vegan certified", detail: "" },
    { th: "ผลตรวจวิตามินบี 12", en: "Vitamin B12 lab report", detail: "" },
    { th: "ใบรับรอง GMP (เพาะเลี้ยงระบบปิด)", en: "GMP certificate (closed-system cultivation)", detail: "" },
    { th: "ผลตรวจ E. coli (ไม่เกินมาตรฐาน, ตรวจทุกเดือน)", en: "E. coli lab report (within standard, tested monthly)", detail: "" }
  ]
};
