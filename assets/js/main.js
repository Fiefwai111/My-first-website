/**
 * Thai River Caviar — shared site behavior.
 * - TH/EN language toggle (data-th / data-en text swap)
 * - mobile nav toggle
 * - config value binding (email, LINE, shop link, etc. from site-config.js)
 * - graceful image / video placeholders until real media files are added
 * - contact / sample-request forms submit via mailto: (no backend needed)
 */
(function () {
  "use strict";

  var LANG_KEY = "trc-lang";
  var cfg = window.TRC_CONFIG || {};

  function getLang() {
    return localStorage.getItem(LANG_KEY) === "en" ? "en" : "th";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "th";
    document.body.classList.toggle("lang-en", lang === "en");

    document.querySelectorAll("[data-th]").forEach(function (el) {
      var val = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-th");
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll("[data-th-html]").forEach(function (el) {
      var val = lang === "en" ? el.getAttribute("data-en-html") : el.getAttribute("data-th-html");
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-th-placeholder]").forEach(function (el) {
      var val = lang === "en" ? el.getAttribute("data-en-placeholder") : el.getAttribute("data-th-placeholder");
      if (val !== null) el.setAttribute("placeholder", val);
    });

    var titleEl = document.querySelector("title[data-th]");
    if (titleEl) {
      document.title = lang === "en" ? titleEl.getAttribute("data-en") : titleEl.getAttribute("data-th");
    }

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function initLangSwitch() {
    applyLang(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initNavToggle() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    if (!header || !toggle) return;
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
    });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("nav-open"); });
    });
  }

  function initImageFallbacks() {
    document.querySelectorAll(".ph-img img").forEach(function (img) {
      function markMissing() { img.closest(".ph-img").classList.add("img-missing"); }
      if (img.complete && img.naturalWidth === 0) { markMissing(); }
      img.addEventListener("error", markMissing);
    });
    document.querySelectorAll(".video-block video").forEach(function (video) {
      function markMissing() { video.closest(".video-block").classList.add("video-missing"); }
      video.addEventListener("error", markMissing);
      // If there's no usable <source>, or the file 404s quickly, fall back too.
      setTimeout(function () {
        if (video.readyState === 0 && video.networkState === 3) markMissing();
      }, 800);
    });
  }

  function bindConfig() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      var val = cfg[key];
      var emptyText = el.getAttribute("data-cfg-empty");
      if (val) {
        el.textContent = val;
      } else if (emptyText) {
        el.textContent = emptyText;
        el.classList.add("placeholder-tag");
      }
    });
    document.querySelectorAll("[data-cfg-href]").forEach(function (el) {
      var key = el.getAttribute("data-cfg-href");
      var val = cfg[key];
      if (val) {
        el.setAttribute("href", val);
        el.classList.remove("is-placeholder");
      } else {
        el.setAttribute("href", "#");
        el.classList.add("is-placeholder");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          showToast(getLang() === "en"
            ? "Link coming soon — this button will go live once the shop link is added."
            : "ลิงก์นี้กำลังจะเปิดใช้งานเร็ว ๆ นี้ (รอผู้ดูแลเว็บใส่ลิงก์ร้านค้า)");
        });
      }
    });
    document.querySelectorAll("[data-cfg-mailto]").forEach(function (el) {
      var key = el.getAttribute("data-cfg-mailto");
      var val = cfg[key];
      if (val) el.setAttribute("href", "mailto:" + val);
    });
    document.querySelectorAll("[data-cfg-tel]").forEach(function (el) {
      var key = el.getAttribute("data-cfg-tel");
      var val = cfg[key];
      var wrap = el.closest(".channel-card");
      if (val) {
        el.setAttribute("href", "tel:" + val.replace(/[^\d+]/g, ""));
      } else if (wrap) {
        wrap.classList.add("is-placeholder");
      }
    });
  }

  function showToast(msg) {
    var toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove("show"); }, 3200);
  }

  function initMailtoForms() {
    document.querySelectorAll("form[data-mailto-subject]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var lang = getLang();
        var subjectBase = form.getAttribute("data-mailto-subject");
        var to = cfg.email || "";
        var lines = [];
        var data = new FormData(form);
        data.forEach(function (value, key) {
          if (!value) return;
          var fieldEl = form.querySelector('[name="' + key + '"]');
          var labelEl = fieldEl ? form.querySelector('label[for="' + fieldEl.id + '"]') : null;
          var label = labelEl ? labelEl.textContent.trim() : key;
          lines.push(label + ": " + value);
        });
        var body = lines.join("\n");
        var mailto = "mailto:" + encodeURIComponent(to) +
          "?subject=" + encodeURIComponent(subjectBase) +
          "&body=" + encodeURIComponent(body);
        window.location.href = mailto;
        showToast(lang === "en"
          ? "Opening your email app with the details filled in…"
          : "กำลังเปิดโปรแกรมอีเมลพร้อมกรอกข้อมูลให้แล้ว…");
      });
    });
  }

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangSwitch();
    initNavToggle();
    initImageFallbacks();
    bindConfig();
    initMailtoForms();
    initYear();
  });
})();
