// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.nomenallowed.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.nomenallowed.com/","title_tag":"Women's jewelry & women's accessories | Nomenallowed","meta_description":"Online jewelry store for women's jewelry, fashion earrings, necklaces and women's accessories that express your unique style."},{"page_url":"https://www.nomenallowed.com/rings1","title_tag":"Gold rings & diamond rings | Nomenallowed","meta_description":"Shop elegant gold rings and diamond rings at our online jewelry store. Women's jewelry and accessories to elevate every outfit."},{"page_url":"https://www.nomenallowed.com/earrings","title_tag":"Fashion earrings, hoop & stud earrings | Nomenallowed","meta_description":"Discover fashion earrings, hoop earrings and stud earrings at our online jewelry store. Women's jewelry for every occasion."},{"page_url":"https://www.nomenallowed.com/necklace","title_tag":"Women's jewelry & jewelry sets | Nomenallowed","meta_description":"Explore necklaces and jewelry sets at our online jewelry store. Women's jewelry and accessories styled for your personality."},{"page_url":"https://www.nomenallowed.com/ps-tops","title_tag":"Women's accessories & fashion tops | Nomenallowed","meta_description":"Shop stylish plus size tops and women's accessories to complete your look. Trendy fashion pieces designed to express your style."},{"page_url":"https://www.nomenallowed.com/ps-bottoms","title_tag":"Women's accessories & stylish bottoms | Nomenallowed","meta_description":"Browse plus size leggings, pants and skirts with women's accessories to match. Fashion that flatters your curves."},{"page_url":"https://www.nomenallowed.com/ps-dresses","title_tag":"Women's accessories & bridal jewelry | Nomenallowed","meta_description":"Shop plus size dresses with coordinating women's accessories and bridal jewelry. Look flawless for every event."},{"page_url":"https://www.nomenallowed.com/ps-jumbsuits","title_tag":"Women's accessories & jumpsuits | Nomenallowed","meta_description":"Discover chic plus size jumpsuits and rompers styled with women's accessories for effortless, statement looks."},{"page_url":"https://www.nomenallowed.com/ps-outerwear","title_tag":"Women's accessories & outerwear | Nomenallowed","meta_description":"Find cozy plus size outerwear and women's accessories to layer your style. Jackets, cardigans and more."}],"keywords":["women's jewelry","fashion earrings","gold rings","diamond rings","hoop earrings","stud earrings","bridal jewelry","jewelry sets","online jewelry store","women's accessories"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.nomenallowed.com/#organization",
  "name": "Nomenallowed",
  "url": "https://www.nomenallowed.com/",
  "logo": "https://static.wixstatic.com/media/1c2f25_184482353ec748e0a65aa1d2ffd15759%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/1c2f25_184482353ec748e0a65aa1d2ffd15759%7Emv2.png",
  "sameAs": [],
  "description": "Nomenallowed is a women’s fashion and jewelry online store offering rings, earrings, necklaces, plus size clothing, handbags, lingerie, outerwear and more, empowering customers to express their individuality through style.",
  "department": [
    {
      "@type": "Store",
      "name": "Rings",
      "url": "https://www.nomenallowed.com/rings1"
    },
    {
      "@type": "Store",
      "name": "Earrings",
      "url": "https://www.nomenallowed.com/earrings"
    },
    {
      "@type": "Store",
      "name": "Necklaces",
      "url": "https://www.nomenallowed.com/necklace"
    },
    {
      "@type": "Store",
      "name": "Plus Size Tops",
      "url": "https://www.nomenallowed.com/ps-tops"
    },
    {
      "@type": "Store",
      "name": "Plus Size Bottoms",
      "url": "https://www.nomenallowed.com/ps-bottoms"
    },
    {
      "@type": "Store",
      "name": "Plus Size Dresses",
      "url": "https://www.nomenallowed.com/ps-dresses"
    },
    {
      "@type": "Store",
      "name": "Plus Size Jumpsuits",
      "url": "https://www.nomenallowed.com/ps-jumbsuits"
    },
    {
      "@type": "Store",
      "name": "Plus Size Outerwear",
      "url": "https://www.nomenallowed.com/ps-outerwear"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nomenallowed Women's Fashion & Jewelry Catalog",
    "url": "https://www.nomenallowed.com/",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Rings",
        "url": "https://www.nomenallowed.com/rings1"
      },
      {
        "@type": "OfferCatalog",
        "name": "Earrings",
        "url": "https://www.nomenallowed.com/earrings"
      },
      {
        "@type": "OfferCatalog",
        "name": "Necklaces",
        "url": "https://www.nomenallowed.com/necklace"
      },
      {
        "@type": "OfferCatalog",
        "name": "Plus Size Tops",
        "url": "https://www.nomenallowed.com/ps-tops"
      },
      {
        "@type": "OfferCatalog",
        "name": "Plus Size Bottoms",
        "url": "https://www.nomenallowed.com/ps-bottoms"
      },
      {
        "@type": "OfferCatalog",
        "name": "Plus Size Dresses",
        "url": "https://www.nomenallowed.com/ps-dresses"
      },
      {
        "@type": "OfferCatalog",
        "name": "Plus Size Jumpsuits",
        "url": "https://www.nomenallowed.com/ps-jumbsuits"
      },
      {
        "@type": "OfferCatalog",
        "name": "Plus Size Outerwear",
        "url": "https://www.nomenallowed.com/ps-outerwear"
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
