/**
 * OCTEWYA CINEMATOGRAPHY - Production & Client Portal System
 * Dasun Kavinda Cinematography (071 4 277 276)
 */

// ==========================================
// 1. DATA DEFINITIONS (UNSUMMARIZED FROM IMAGES)
// ==========================================

const WEDDING_PACKAGES = [
  {
    id: "pkg_01",
    name: "Package 01",
    price: 75000,
    badge: "Essential",
    hours: 10,
    crew: "1 Videographer",
    features: [
      "Exclusive 10 Hours Coverage",
      "Couple's main video shoot",
      "Full wedding Video (approx 1 hour)",
      "1 Videographer",
      "Videos Delivered to you on Cloud Drive"
    ]
  },
  {
    id: "pkg_02",
    name: "Package 02",
    price: 95000,
    badge: "Popular",
    hours: 10,
    crew: "2 Videographers",
    features: [
      "Exclusive 10 Hours Coverage",
      "Couple's main video shoot",
      "Full wedding Video (Time not limited)",
      "Same Day Edit Video",
      "2 Videographers",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  },
  {
    id: "pkg_03",
    name: "Package 03",
    price: 115000,
    badge: "Signature",
    hours: 12,
    crew: "2 Videographers",
    features: [
      "Exclusive 12 Hours Coverage",
      "Couple's main video shoot",
      "Full wedding Video (Time not limited)",
      "Same Day Edit Video",
      "Highlights video or Story telling Video ( approx 5-10 minutes )",
      "2 Videographers",
      "Videos Delivered to you on a USB (with couple's names printed) or Cloud Drive"
    ]
  },
  {
    id: "pkg_vip",
    name: "VIP Package",
    price: 135000,
    badge: "VIP Cinema",
    isVip: true,
    hours: 14,
    crew: "3 Videographers",
    features: [
      "Exclusive 14 Hours Coverage",
      "Couple's main video shoot",
      "Full wedding Video (Time not limited)",
      "Same Day Edit Video",
      "Highlights video or Story telling Video ( approx 5-10 minutes )",
      "3 Videographers",
      "Videos Delivered to you on a USB (with couple's names printed) or Cloud Drive"
    ]
  }
];

const HOMECOMING_PACKAGES = [
  {
    id: "hc_01",
    name: "Homecoming Package 01",
    price: 55000,
    features: [
      "Exclusive 8 Hours Coverage",
      "Couple's main video shoot",
      "Full Ceremony video",
      "1 or 2 videographers ( based on the requirement)",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  },
  {
    id: "hc_02",
    name: "Homecoming Package 02 (With Same Day Edit)",
    price: 75000,
    features: [
      "Exclusive 8 Hours Coverage",
      "Couple's main video shoot",
      "Full Ceremony video",
      "Same Day Edit Video",
      "2 Videographers",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  }
];

const ENGAGEMENT_PACKAGES = [
  {
    id: "eng_01",
    name: "Engagement Coverage",
    price: 55000,
    features: [
      "Exclusive 06 Hours Coverage",
      "Couple's main video shoot",
      "Full Engagement video",
      "1 or 2 videographers ( based on the requirement)",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  }
];

const PRESHOOT_PACKAGES = [
  {
    id: "ps_01",
    name: "Pre Shoot - Package 01",
    price: 35000,
    features: [
      "Exclusive 08 Hours Coverage",
      "Edited video will be shared to you before the wedding day",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  },
  {
    id: "ps_02",
    name: "Pre Shoot - Package 02",
    price: 45000,
    features: [
      "Exclusive 12 Hours Coverage",
      "Edited video will be shared to you before the wedding day",
      "Videos Delivered to you on a USB or Cloud Drive"
    ]
  }
];

const ADDONS_CATALOG = [
  { id: "addon_drone_wedding", name: "Drone Footage - Wedding Day", price: 15000, note: "Aerial cinematography for Wedding" },
  { id: "addon_drone_preshoot", name: "Drone Footage - Pre-Shoot", price: 15000, note: "Aerial cinematography for Pre-Shoot" },
  { id: "addon_drone_homecoming", name: "Drone Footage - Homecoming", price: 15000, note: "Aerial cinematography for Homecoming" },
  { id: "addon_church", name: "Church Function", price: 15000, note: "Only if a poruwa ceremony is included" },
  { id: "addon_robe", name: "ROBE Shoot", price: 20000, note: "Wearing elegant robes before the wedding" },
  { id: "addon_savethedate", name: "Save The Date Video", price: 8000, note: "Teaser video clip" },
  { id: "addon_gettingready", name: "Getting ready shoot", price: 5000, note: "Morning preparations" },
  { id: "addon_extrahour", name: "An Extra Hour", price: 5000, note: "Per additional hour" },
  { id: "addon_highlightsonly", name: "Only Story telling / Highlights Video", price: 55000, note: "Standalone highlights" }
];

const PIPELINE_STEPS = [
  {
    step: 1,
    id: "step_backup",
    title: "Chip Backup to External Hard Drive",
    titleSi: "Chip එක External Hard Drive එකට Backup කිරීම",
    meta: "Secure dual-redundant backup",
    icon: "fa-solid fa-hard-drive"
  },
  {
    step: 2,
    id: "step_started",
    title: "Editing Started",
    titleSi: "වීඩියෝ සංස්කරණය ආරම්භ කිරීම",
    meta: "Duration: ~6 Hours to 1 Day",
    icon: "fa-solid fa-clapperboard"
  },
  {
    step: 3,
    id: "step_roughcut",
    title: "Rough Cut Completed",
    titleSi: "ප්‍රාථමික පෙළගැස්ම (Rough Cut) අවසන්",
    meta: "Story & sequence assembly",
    icon: "fa-solid fa-scissors"
  },
  {
    step: 4,
    id: "step_color",
    title: "Colour Grading",
    titleSi: "වර්ණ සංකලනය (Colour Grading)",
    meta: "Cinematic tone & look adjustment",
    icon: "fa-solid fa-palette"
  },
  {
    step: 5,
    id: "step_export",
    title: "Exporting Process",
    titleSi: "අවසාන Master Video Export කිරීම",
    meta: "Master high-resolution render",
    icon: "fa-solid fa-film"
  },
  {
    step: 6,
    id: "step_ready",
    title: "Master Video Ready for Viewing",
    titleSi: "අවසන් වීඩියෝව නැරඹීමට සූදානම්",
    meta: "Handover & Delivery unlock",
    icon: "fa-solid fa-circle-check"
  }
];

// ==========================================
// 2. STORAGE & STATE
// ==========================================

const STORAGE_KEY_BOOKINGS = "OCTEWYA_BOOKINGS_V3";
const STORAGE_KEY_LANG = "OCTEWYA_LANG";

let currentLang = localStorage.getItem(STORAGE_KEY_LANG) || "si";
let allBookings = [];
let currentBookingId = "";

// Initial Bookings (Starts completely clean ready for real customers)
const DEFAULT_BOOKINGS = [];

// Current selection state for booking page
let currentSelection = {
  weddingPackage: null,
  homecomingPackage: null,
  engagementPackage: null,
  preshootPackage: null,
  addons: [],
  bankSlipData: null,
  customAdvance: 10000
};

// ==========================================
// 3. INITIALIZATION & ROUTING
// ==========================================

const DEFAULT_ADMIN_PIN = "7276"; // Default Studio PIN (Last 4 digits of Dasun's phone 071 4 277 276)
const STORAGE_KEY_PIN = "octewya_studio_pin";
const STORAGE_KEY_AUTH = "octewya_admin_auth";
const STORAGE_KEY_REMEMBER = "octewya_admin_remember";

function checkAdminAuth() {
  const authModal = document.getElementById("adminAuthModal");
  if (!authModal) return true;

  const isRemembered = localStorage.getItem(STORAGE_KEY_REMEMBER) === "true";
  const isSessionAuth = sessionStorage.getItem(STORAGE_KEY_AUTH) === "true";

  if (isRemembered || isSessionAuth) {
    authModal.style.display = "none";
    return true;
  } else {
    authModal.style.display = "flex";
    const pinInput = document.getElementById("adminPinInput");
    if (pinInput) setTimeout(() => pinInput.focus(), 250);
    return false;
  }
}

function verifyAdminPin(e) {
  if (e && e.preventDefault) e.preventDefault();
  const pinInput = document.getElementById("adminPinInput");
  const rememberCheck = document.getElementById("adminPinRemember");
  const errorMsg = document.getElementById("adminPinError");
  if (!pinInput) return;

  const enteredPin = pinInput.value.trim();
  const currentPin = localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_ADMIN_PIN;

  if (enteredPin === currentPin) {
    sessionStorage.setItem(STORAGE_KEY_AUTH, "true");
    if (rememberCheck && rememberCheck.checked) {
      localStorage.setItem(STORAGE_KEY_REMEMBER, "true");
    }
    const authModal = document.getElementById("adminAuthModal");
    if (authModal) authModal.style.display = "none";
    showToast(
      currentLang === "si" ? "සාදරයෙන් පිළිගනිමු!" : "Access Granted!",
      "OCTEWYA Master Studio Unlocked"
    );
  } else {
    if (errorMsg) {
      errorMsg.style.display = "block";
      errorMsg.textContent = currentLang === "si" ? "වැරදි PIN අංකයක්. කරුණාකර නැවත උත්සාහ කරන්න." : "Incorrect PIN. Please try again.";
    }
    pinInput.value = "";
    pinInput.focus();
  }
}

function adminLogout() {
  sessionStorage.removeItem(STORAGE_KEY_AUTH);
  localStorage.removeItem(STORAGE_KEY_REMEMBER);
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  loadDataFromStorage();
  initCloudSync();
  applyLanguage(currentLang);
  checkAdminAuth();

  const urlParams = new URLSearchParams(window.location.search);
  const queryId = urlParams.get("id");
  const queryTab = urlParams.get("tab");

  const isMasterAdminPage = document.getElementById("adminMasterNav");
  const isClientPage = document.getElementById("clientNavTabs");
  const isBookingView = document.getElementById("bookingView");
  const isPortalView = document.getElementById("portalCoupleTitle");
  const isAdminTable = document.getElementById("adminBookingsTableBody");

  if (queryId && allBookings.some(b => b.id === queryId)) {
    currentBookingId = queryId;
  } else if (isAdminTable) {
    currentBookingId = allBookings[0]?.id || "";
  } else {
    currentBookingId = "";
  }

  if (isBookingView) {
    renderPackageCatalogs();
    updateQuoteSummary();
  }

  if (isPortalView) {
    loadPortalData(currentBookingId);
    startGlobalCountdowns();
  }

  if (isAdminTable) {
    loadAdminData();
    populateMasterCoupleSelector();
  }

  // Handle Initial Tab Routing
  if (isMasterAdminPage) {
    if (queryTab === "portal") {
      switchMasterTab("portal");
    } else if (queryTab === "booking") {
      switchMasterTab("booking");
    } else {
      switchMasterTab("admin");
    }
  } else if (isClientPage) {
    if (queryTab === "portal" || (queryId && queryTab !== "booking")) {
      switchClientTab("portal");
    } else {
      switchClientTab("booking");
    }
  }
});

function switchMasterTab(tabName) {
  const tabs = ["admin", "portal", "booking"];
  tabs.forEach(t => {
    const view = document.getElementById(t + "View");
    const btn = document.getElementById("masterTab_" + t);
    if (view) {
      if (t === tabName) {
        view.classList.remove("hidden-view");
      } else {
        view.classList.add("hidden-view");
      }
    }
    if (btn) {
      btn.classList.toggle("active", t === tabName);
    }
  });

  if (tabName === "portal") {
    populateMasterCoupleSelector();
    loadPortalData(currentBookingId);
  } else if (tabName === "admin") {
    loadAdminData();
  } else if (tabName === "booking") {
    renderPackageCatalogs();
    updateQuoteSummary();
  }
}

function switchClientTab(tabName) {
  const tabs = ["booking", "portal"];
  tabs.forEach(t => {
    const view = document.getElementById(t + "View");
    const btn = document.getElementById("clientTab_" + t);
    if (view) {
      if (t === tabName) {
        view.classList.remove("hidden-view");
      } else {
        view.classList.add("hidden-view");
      }
    }
    if (btn) {
      btn.classList.toggle("active", t === tabName);
    }
  });

  if (tabName === "portal") {
    loadPortalData(currentBookingId);
  } else if (tabName === "booking") {
    renderPackageCatalogs();
    updateQuoteSummary();
  }
}

function populateMasterCoupleSelector() {
  const select = document.getElementById("masterCoupleSelector");
  if (!select) return;
  if (!allBookings || allBookings.length === 0) {
    select.innerHTML = `<option value="">-- No bookings available --</option>`;
    return;
  }
  select.innerHTML = allBookings.map(b => `
    <option value="${b.id}" ${b.id === currentBookingId ? 'selected' : ''}>
      ${b.coupleTitle} (${b.id}) - ${b.weddingDate} [${b.selectedPackage?.name || 'Package'}]
    </option>
  `).join("");
}

function previewMasterCouple(coupleId) {
  currentBookingId = coupleId;
  loadPortalData(coupleId);
  adminSelectBooking(coupleId);
  const select = document.getElementById("masterCoupleSelector");
  if (select) select.value = coupleId;
}

function searchClientWedding(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("clientLookupQuery");
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (!q) {
    showToast(
      currentLang === "si" ? "දැනුම්දීම" : "Search Notice",
      currentLang === "si" ? "කරුණාකර ඔබගේ Booking ID අංකය හෝ දුරකථන අංකය ඇතුළත් කරන්න." : "Please enter your Booking ID or Phone Number."
    );
    return;
  }

  const cleanDigits = q.replace(/[^0-9]/g, "");

  const found = allBookings.find(b => {
    const idMatch = b.id && b.id.toLowerCase().includes(q);
    const brideNameMatch = b.brideName && b.brideName.toLowerCase().includes(q);
    const groomNameMatch = b.groomName && b.groomName.toLowerCase().includes(q);
    const coupleMatch = b.coupleTitle && b.coupleTitle.toLowerCase().includes(q);
    let phoneMatch = false;
    if (cleanDigits.length >= 7) {
      const bPhone = (b.bridePhone || "").replace(/[^0-9]/g, "");
      const gPhone = (b.groomPhone || "").replace(/[^0-9]/g, "");
      phoneMatch = bPhone.includes(cleanDigits) || gPhone.includes(cleanDigits);
    }
    return idMatch || brideNameMatch || groomNameMatch || coupleMatch || phoneMatch;
  });

  if (found) {
    currentBookingId = found.id;
    loadPortalData(found.id);
    const clientPortalContent = document.getElementById("clientPortalContent");
    if (clientPortalContent) {
      clientPortalContent.style.display = "block";
    }
    showToast(
      currentLang === "si" ? "මංගල Tracker එක විවෘත විය!" : "Wedding Portal Loaded!",
      `${found.coupleTitle} (${found.id})`
    );
    const titleElem = document.getElementById("portalCoupleTitle");
    if (titleElem) {
      titleElem.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    showToast(
      currentLang === "si" ? "හමු නොවීය" : "Not Found",
      currentLang === "si" ? "මෙම අංකයට හෝ නමට අදාළ Booking එකක් හමු නොවීය. කරුණාකර අංකය නැවත පරීක්ෂා කරන්න හෝ Dasun අමතන්න." : "No booking found matching your search. Please verify your details or contact Dasun."
    );
  }
}

// ==========================================
// 3. CLOUD DATABASE SYNC (GOOGLE FIREBASE)
// ==========================================

function isFirebaseReady() {
  return typeof firestoreDb !== "undefined" && firestoreDb !== null;
}

function updateCloudStatusBadge() {
  const badge = document.getElementById("cloudStatusBadge");
  const text = document.getElementById("cloudStatusText");
  if (!badge || !text) return;

  if (isFirebaseReady()) {
    badge.style.background = "rgba(40, 167, 69, 0.18)";
    badge.style.color = "#28a745";
    badge.style.borderColor = "rgba(40, 167, 69, 0.4)";
    badge.title = "Google Firebase Cloud Database Connected! (Real-time active)";
    badge.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> <span>Cloud Live</span>`;
  } else {
    badge.style.background = "rgba(255, 193, 7, 0.15)";
    badge.style.color = "#ffc107";
    badge.style.borderColor = "rgba(255, 193, 7, 0.3)";
    badge.title = "Browser Local Storage (Paste Firebase keys in firebase-config.js for Cloud Sync)";
    badge.innerHTML = `<i class="fa-solid fa-cloud"></i> <span>Local Mode</span>`;
  }
}

function sanitizeForFirestore(val) {
  if (val === undefined) return "";
  if (val === null) return null;
  if (Array.isArray(val)) {
    return val.map(sanitizeForFirestore);
  }
  if (typeof val === "object" && !(val instanceof Date)) {
    const res = {};
    for (const key of Object.keys(val)) {
      const sanitized = sanitizeForFirestore(val[key]);
      if (sanitized !== undefined) {
        res[key] = sanitized;
      }
    }
    return res;
  }
  return val;
}

function syncBookingToCloud(booking) {
  if (!isFirebaseReady() || !booking || !booking.id) return;
  try {
    const cleanData = sanitizeForFirestore(booking);
    firestoreDb.collection("octewya_bookings").doc(booking.id).set(cleanData, { merge: true })
      .then(() => {
        console.log("OCTEWYA Cloud Sync: Saved", booking.id);
      })
      .catch(err => {
        console.warn("OCTEWYA Cloud Sync Error:", err);
      });
  } catch (err) {
    console.warn("OCTEWYA Cloud Sync Exception:", err);
  }
}

let activeBookingDocUnsubscribe = null;

function subscribeToBookingDoc(bookingId) {
  if (!isFirebaseReady() || !bookingId) return;
  if (activeBookingDocUnsubscribe) {
    try { activeBookingDocUnsubscribe(); } catch(e) {}
    activeBookingDocUnsubscribe = null;
  }

  try {
    activeBookingDocUnsubscribe = firestoreDb.collection("octewya_bookings").doc(bookingId)
      .onSnapshot((doc) => {
        if (doc && doc.exists) {
          const freshData = doc.data();
          const idx = allBookings.findIndex(b => b.id === bookingId);
          if (idx >= 0) {
            allBookings[idx] = freshData;
          } else {
            allBookings.unshift(freshData);
          }
          localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));
          if (currentBookingId === bookingId) {
            loadPortalData(bookingId, true);
          }
          if (document.getElementById("adminBookingsTableBody")) {
            loadAdminData();
          }
        }
      }, (err) => {
        console.warn("Booking doc onSnapshot error:", err);
      });
  } catch(e) {
    console.warn("subscribeToBookingDoc exception:", e);
  }
}

function initCloudSync() {
  updateCloudStatusBadge();
  if (!isFirebaseReady()) return;

  firestoreDb.collection("octewya_bookings")
    .onSnapshot((snapshot) => {
      const cloudList = [];
      snapshot.forEach(doc => {
        cloudList.push(doc.data());
      });

      cloudList.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));

      if (cloudList.length > 0 || (snapshot.metadata && !snapshot.metadata.hasPendingWrites)) {
        allBookings = cloudList;
        localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));

        const isAdminTable = document.getElementById("adminBookingsTableBody");
        if (isAdminTable) {
          loadAdminData();
          populateMasterCoupleSelector();
        }

        if (currentBookingId) {
          loadPortalData(currentBookingId, true);
        }
      }
    }, (error) => {
      console.warn("Firestore onSnapshot error:", error);
    });
}

function loadDataFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY_BOOKINGS);
  if (stored) {
    try {
      allBookings = JSON.parse(stored);
    } catch (e) {
      allBookings = DEFAULT_BOOKINGS;
    }
  } else {
    allBookings = DEFAULT_BOOKINGS;
  }
}

function saveDataToStorage(bookingToSync) {
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));
  if (bookingToSync) {
    syncBookingToCloud(bookingToSync);
  } else {
    const active = getActiveBooking();
    if (active) syncBookingToCloud(active);
  }
}

function getActiveBooking() {
  if (currentBookingId) {
    const found = allBookings.find(b => b.id === currentBookingId);
    if (found) return found;
  }
  if (document.getElementById("adminBookingsTableBody")) {
    return allBookings[0] || null;
  }
  return null;
}

// ==========================================
// 4. LANGUAGE SWITCHER (EN / SI)
// ==========================================

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY_LANG, lang);
  applyLanguage(lang);

  // Re-render components that contain dynamic language content
  if (document.getElementById("bookingView")) {
    renderPackageCatalogs();
    updateQuoteSummary();
  }
  if (document.getElementById("portalCoupleTitle")) {
    loadPortalData(currentBookingId);
  }
}

function applyLanguage(lang) {
  // Update toggle buttons
  const btnEn = document.getElementById("langBtnEn");
  const btnSi = document.getElementById("langBtnSi");
  if (btnEn && btnSi) {
    if (lang === "en") {
      btnEn.classList.add("active");
      btnSi.classList.remove("active");
    } else {
      btnSi.classList.add("active");
      btnEn.classList.remove("active");
    }
  }

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Translate all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// ==========================================
// 5. PACKAGES CATALOG (UNSUMMARIZED)
// ==========================================

function renderPackageCatalogs() {
  // 1. Wedding Packages
  const wpGrid = document.getElementById("weddingPackagesGrid");
  if (!wpGrid) return;
  wpGrid.innerHTML = "";

  WEDDING_PACKAGES.forEach(pkg => {
    const isSelected = currentSelection.weddingPackage?.id === pkg.id;
    const card = document.createElement("div");
    card.className = `package-card ${isSelected ? 'selected' : ''}`;
    card.onclick = () => selectWeddingPackage(pkg.id);

    card.innerHTML = `
      <div class="card-top">
        <span class="pkg-tier">${pkg.name}</span>
        ${pkg.isVip ? '<span class="vip-tag"><i class="fa-solid fa-crown"></i> VIP</span>' : `<span class="badge-gold">${pkg.badge}</span>`}
      </div>
      <div class="pkg-price-row">
        <span class="pkg-price">${formatLKR(pkg.price)}</span>
        <span class="pkg-price-unit">LKR</span>
      </div>
      <ul class="features-list">
        ${pkg.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join("")}
      </ul>
      <button type="button" class="pkg-btn-select">
        ${isSelected ? '<i class="fa-solid fa-check"></i> Selected' : 'Choose Package'}
      </button>
    `;
    wpGrid.appendChild(card);
  });

  // 2. Homecoming Packages
  const hcGrid = document.getElementById("homecomingPackagesGrid");
  if (hcGrid) {
    hcGrid.innerHTML = "";
    HOMECOMING_PACKAGES.forEach(pkg => {
      const isSelected = currentSelection.homecomingPackage?.id === pkg.id;
      const card = document.createElement("div");
      card.className = `package-card ${isSelected ? 'selected' : ''}`;
      card.onclick = () => toggleHomecomingPackage(pkg.id);

      card.innerHTML = `
        <div class="card-top">
          <span class="pkg-tier">${pkg.name}</span>
          <span class="pkg-price-unit"><i class="fa-solid fa-clock"></i> 8 Hours</span>
        </div>
        <div class="pkg-price-row">
          <span class="pkg-price">${formatLKR(pkg.price)}</span>
          <span class="pkg-price-unit">LKR</span>
        </div>
        <ul class="features-list">
          ${pkg.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join("")}
        </ul>
        <button type="button" class="pkg-btn-select">
          ${isSelected ? '<i class="fa-solid fa-check"></i> Added' : 'Add to Booking'}
        </button>
      `;
      hcGrid.appendChild(card);
    });
  }

  // 3. Engagement
  const engGrid = document.getElementById("engagementPackagesGrid");
  if (engGrid) {
    engGrid.innerHTML = "";
    ENGAGEMENT_PACKAGES.forEach(pkg => {
      const isSelected = currentSelection.engagementPackage?.id === pkg.id;
      const card = document.createElement("div");
      card.className = `package-card ${isSelected ? 'selected' : ''}`;
      card.onclick = () => toggleEngagementPackage(pkg.id);

      card.innerHTML = `
        <div class="card-top">
          <span class="pkg-tier">${pkg.name}</span>
          <span class="pkg-price-unit"><i class="fa-solid fa-clock"></i> 6 Hours</span>
        </div>
        <div class="pkg-price-row">
          <span class="pkg-price">${formatLKR(pkg.price)}</span>
          <span class="pkg-price-unit">LKR</span>
        </div>
        <ul class="features-list">
          ${pkg.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join("")}
        </ul>
        <button type="button" class="pkg-btn-select">
          ${isSelected ? '<i class="fa-solid fa-check"></i> Added' : 'Add to Booking'}
        </button>
      `;
      engGrid.appendChild(card);
    });
  }

  // 4. Pre-Shoot
  const psGrid = document.getElementById("preshootPackagesGrid");
  if (psGrid) {
    psGrid.innerHTML = "";
    PRESHOOT_PACKAGES.forEach(pkg => {
      const isSelected = currentSelection.preshootPackage?.id === pkg.id;
      const card = document.createElement("div");
      card.className = `package-card ${isSelected ? 'selected' : ''}`;
      card.onclick = () => togglePreshootPackage(pkg.id);

      card.innerHTML = `
        <div class="card-top">
          <span class="pkg-tier">${pkg.name}</span>
        </div>
        <div class="pkg-price-row">
          <span class="pkg-price">${formatLKR(pkg.price)}</span>
          <span class="pkg-price-unit">LKR</span>
        </div>
        <ul class="features-list">
          ${pkg.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join("")}
        </ul>
        <button type="button" class="pkg-btn-select">
          ${isSelected ? '<i class="fa-solid fa-check"></i> Added' : 'Add to Booking'}
        </button>
      `;
      psGrid.appendChild(card);
    });
  }

  // 5. Add-ons
  const addonsGrid = document.getElementById("addonsGrid");
  if (addonsGrid) {
    addonsGrid.innerHTML = "";
    ADDONS_CATALOG.forEach(addon => {
      const isSelected = currentSelection.addons.some(a => a.id === addon.id);
      const card = document.createElement("div");
      card.className = `addon-card ${isSelected ? 'selected' : ''}`;
      card.onclick = () => toggleAddon(addon.id);

      card.innerHTML = `
        <div class="addon-info">
          <span class="addon-name">${addon.name}</span>
          <span class="addon-note">${addon.note}</span>
        </div>
        <div class="addon-price">
          +${formatLKR(addon.price)} LKR
        </div>
      `;
      addonsGrid.appendChild(card);
    });
  }
}

function selectWeddingPackage(pkgId) {
  currentSelection.weddingPackage = WEDDING_PACKAGES.find(p => p.id === pkgId);
  renderPackageCatalogs();
  updateQuoteSummary();
  toggleBookingFormState();
}

function toggleHomecomingPackage(pkgId) {
  if (currentSelection.homecomingPackage?.id === pkgId) {
    currentSelection.homecomingPackage = null;
  } else {
    currentSelection.homecomingPackage = HOMECOMING_PACKAGES.find(p => p.id === pkgId);
  }
  renderPackageCatalogs();
  updateQuoteSummary();
  toggleBookingFormState();
}

function toggleEngagementPackage(pkgId) {
  if (currentSelection.engagementPackage?.id === pkgId) {
    currentSelection.engagementPackage = null;
  } else {
    currentSelection.engagementPackage = ENGAGEMENT_PACKAGES.find(p => p.id === pkgId);
  }
  renderPackageCatalogs();
  updateQuoteSummary();
  toggleBookingFormState();
}

function togglePreshootPackage(pkgId) {
  if (currentSelection.preshootPackage?.id === pkgId) {
    currentSelection.preshootPackage = null;
  } else {
    currentSelection.preshootPackage = PRESHOOT_PACKAGES.find(p => p.id === pkgId);
  }
  renderPackageCatalogs();
  updateQuoteSummary();
  toggleBookingFormState();
}

function toggleAddon(addonId) {
  const index = currentSelection.addons.findIndex(a => a.id === addonId);
  if (index >= 0) {
    currentSelection.addons.splice(index, 1);
  } else {
    currentSelection.addons.push(ADDONS_CATALOG.find(a => a.id === addonId));
  }
  renderPackageCatalogs();
  updateQuoteSummary();
  toggleBookingFormState();
}

// ==========================================
// 6. QUOTE SUMMARY & FLEXIBLE ADVANCE
// ==========================================

function recalculateQuoteFromAdvance(val) {
  currentSelection.customAdvance = Number(val) || 10000;
  updateQuoteSummary();
}

function updateQuoteSummary() {
  const itemsList = document.getElementById("quoteBreakdownList") || document.getElementById("quoteItemsList");
  if (!itemsList) return;

  const emptyHint = document.getElementById("quoteEmptyHint");

  let total = 0;
  const items = [];

  if (currentSelection.weddingPackage) {
    total += currentSelection.weddingPackage.price;
    items.push({ name: currentSelection.weddingPackage.name, price: currentSelection.weddingPackage.price });
  }
  if (currentSelection.homecomingPackage) {
    total += currentSelection.homecomingPackage.price;
    items.push({ name: currentSelection.homecomingPackage.name, price: currentSelection.homecomingPackage.price });
  }
  if (currentSelection.engagementPackage) {
    total += currentSelection.engagementPackage.price;
    items.push({ name: currentSelection.engagementPackage.name, price: currentSelection.engagementPackage.price });
  }
  if (currentSelection.preshootPackage) {
    total += currentSelection.preshootPackage.price;
    items.push({ name: currentSelection.preshootPackage.name, price: currentSelection.preshootPackage.price });
  }
  currentSelection.addons.forEach(a => {
    total += a.price;
    items.push({ name: a.name, price: a.price });
  });

  if (items.length === 0) {
    if (emptyHint) emptyHint.style.display = "block";
    itemsList.innerHTML = `<div class="quote-empty">${currentLang === 'si' ? 'කරුණාකර පැකේජයක් හෝ සේවාවක් තෝරන්න' : 'Please select a package or service'}</div>`;
  } else {
    if (emptyHint) emptyHint.style.display = "none";
    itemsList.innerHTML = items.map(it => `
      <div class="quote-item" style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px;">
        <span style="color: #fff;">${it.name}</span>
        <span class="price-val" style="color: var(--gold); font-weight: 700;">${formatLKR(it.price)} LKR</span>
      </div>
    `).join("");
  }

  const advance = currentSelection.customAdvance || 10000;
  const balance = total > 0 ? Math.max(0, total - advance) : 0;

  const totalEl = document.getElementById("quoteTotalLKR") || document.getElementById("quoteTotal");
  const advanceEl = document.getElementById("quoteAdvanceLKR") || document.getElementById("quoteAdvance");
  const balanceEl = document.getElementById("quoteBalanceLKR") || document.getElementById("quoteBalance");

  if (totalEl) {
    totalEl.innerHTML = total > 0 ? `${formatLKR(total)} LKR <small style="font-size: 12px; color: var(--gold-light); font-weight: normal;">+ Travel Charges</small>` : "0 LKR";
  }
  if (advanceEl) advanceEl.textContent = `${formatLKR(advance)} LKR`;
  if (balanceEl) {
    balanceEl.innerHTML = balance > 0 ? `${formatLKR(balance)} LKR <small style="font-size: 11px; color: var(--gold-light); font-weight: normal;">+ Travel Charges</small>` : "0 LKR";
  }

  // Dynamic show/hide
  const hcGroup = document.getElementById("homecomingDateGroup");
  const hcLocGroup = document.getElementById("homecomingLocationGroup");
  if (hcGroup) hcGroup.style.display = currentSelection.homecomingPackage ? "block" : "none";
  if (hcLocGroup) hcLocGroup.style.display = currentSelection.homecomingPackage ? "block" : "none";

  const psNotice = document.getElementById("preshootDate");
  if (psNotice && psNotice.closest('.form-group')) {
    psNotice.closest('.form-group').style.display = currentSelection.preshootPackage ? "block" : "none";
  }

  // Dynamic form labels for Standalone coverage
  const dateLbl = document.querySelector('[data-i18n="lblWeddingDate"]');
  const locLbl = document.querySelector('[data-i18n="lblWeddingLocation"]');
  const hasWedding = !!currentSelection.weddingPackage;
  const hasEngagement = !!currentSelection.engagementPackage;
  const hasHomecoming = !!currentSelection.homecomingPackage;
  const hasPreshoot = !!currentSelection.preshootPackage;

  if (!hasWedding) {
    if (hasEngagement && !hasHomecoming && !hasPreshoot) {
      if (dateLbl) dateLbl.textContent = currentLang === 'si' ? "Engagement දිනය (Date) *" : "Engagement Date *";
      if (locLbl) locLbl.textContent = currentLang === 'si' ? "Engagement ස්ථානය (Location) *" : "Engagement Venue / Location *";
      if (hcGroup) hcGroup.style.display = "none";
      if (hcLocGroup) hcLocGroup.style.display = "none";
    } else if (hasHomecoming && !hasEngagement && !hasPreshoot) {
      if (dateLbl) dateLbl.textContent = currentLang === 'si' ? "Homecoming දිනය (Date) *" : "Homecoming Date *";
      if (locLbl) locLbl.textContent = currentLang === 'si' ? "Homecoming ස්ථානය (Location) *" : "Homecoming Venue / Location *";
      if (hcGroup) hcGroup.style.display = "none";
      if (hcLocGroup) hcLocGroup.style.display = "none";
    } else if (hasPreshoot && !hasEngagement && !hasHomecoming) {
      if (dateLbl) dateLbl.textContent = currentLang === 'si' ? "Pre-Shoot දිනය (Date) *" : "Pre-Shoot Date *";
      if (locLbl) locLbl.textContent = currentLang === 'si' ? "Pre-Shoot ස්ථානය (Location) *" : "Pre-Shoot Location *";
      if (hcGroup) hcGroup.style.display = "none";
      if (hcLocGroup) hcLocGroup.style.display = "none";
    } else {
      if (dateLbl) dateLbl.textContent = currentLang === 'si' ? "ප්‍රධාන උත්සව දිනය (Event Date) *" : "Main Event Date *";
      if (locLbl) locLbl.textContent = currentLang === 'si' ? "උත්සව ශාලාව / ස්ථානය *" : "Event Venue / Location *";
    }
  } else {
    if (dateLbl) dateLbl.textContent = currentLang === 'si' ? "මංගල දිනය (Wedding Date) *" : "Wedding Date *";
    if (locLbl) locLbl.textContent = currentLang === 'si' ? "මංගල උත්සව ශාලාව / ස්ථානය *" : "Wedding Venue / Location *";
  }

  toggleBookingFormState();
}

function hasAnyPackageSelected() {
  return !!(
    currentSelection.weddingPackage ||
    currentSelection.homecomingPackage ||
    currentSelection.engagementPackage ||
    currentSelection.preshootPackage ||
    (currentSelection.addons && currentSelection.addons.length > 0)
  );
}

function toggleTermsAcceptance(checked) {
  toggleBookingFormState();
  if (checked && hasAnyPackageSelected()) {
    const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
    if (formSec) {
      setTimeout(() => {
        formSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }
}

function toggleBookingFormState() {
  const tcCheck = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  const tcAgreed = tcCheck ? tcCheck.checked : false;
  const hasPackage = hasAnyPackageSelected();
  const btn = document.getElementById("btnProceedBooking");

  if (btn) {
    if (hasPackage && tcAgreed) {
      btn.removeAttribute("disabled");
      btn.classList.add("ready");
    } else {
      btn.setAttribute("disabled", "true");
      btn.classList.remove("ready");
    }
  }

  const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
  if (formSec) {
    if (hasPackage && tcAgreed) {
      formSec.style.display = "block";
      formSec.classList.remove("hidden");
    } else {
      formSec.style.display = "none";
      formSec.classList.add("hidden");
    }
  }
}

function scrollToBookingForm() {
  const hasPackage = hasAnyPackageSelected();
  const tcCheck = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  const tcAgreed = tcCheck ? tcCheck.checked : false;

  if (!hasPackage) {
    showToast("දැනුම්දීම", currentLang === 'si' ? "කරුණාකර පැකේජයක් හෝ සේවාවක් තෝරන්න." : "Please select a package or service first.");
    return;
  }

  if (!tcAgreed) {
    showToast("Terms & Conditions", currentLang === 'si' ? "කරුණාකර නියමයන් සහ කොන්දේසි (Terms) එකඟ වීමට ටික් කරන්න." : "Please tick the Terms & Conditions checkbox.");
    tcCheck?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
  if (formSec) {
    formSec.style.display = "block";
    formSec.classList.remove("hidden");
    formSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Slip Upload & Safe Cloud Image Compression (Limits under ~80KB)
function compressImage(file, maxWidth, quality, callback) {
  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      let w = img.width;
      let h = img.height;
      if (w > maxWidth) {
        h = Math.round((h * maxWidth) / w);
        w = maxWidth;
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      const compressedUrl = canvas.toDataURL("image/jpeg", quality);
      callback(compressedUrl);
    };
    img.onerror = function() {
      callback(evt.target.result);
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

function previewBankSlip(e) {
  const file = e.target.files[0];
  if (!file) return;

  compressImage(file, 900, 0.75, function(compressedData) {
    currentSelection.bankSlipData = compressedData;
    const previewImg = document.getElementById("slipPreviewImg");
    if (previewImg) previewImg.src = compressedData;
    const fileName = document.getElementById("slipFileName");
    if (fileName) fileName.textContent = file.name;
    document.getElementById("slipPreviewContainer")?.classList.remove("hidden");
    document.getElementById("slipUploadArea")?.classList.add("hidden");
  });
}

function removeBankSlip() {
  currentSelection.bankSlipData = null;
  const input = document.getElementById("bankSlipInput");
  if (input) input.value = "";
  document.getElementById("slipPreviewContainer")?.classList.add("hidden");
  document.getElementById("slipUploadArea")?.classList.remove("hidden");
}

// ==========================================
// 7. BOOKING SUBMISSION & DIRECT LINK
// ==========================================

function handleBookingSubmit(e) {
  e.preventDefault();

  if (!hasAnyPackageSelected()) {
    alert("Please select at least one package or service (Wedding, Homecoming, Engagement, or Pre-Shoot) to proceed with booking.");
    return;
  }

  const brideName = document.getElementById("brideName").value.trim();
  const groomName = document.getElementById("groomName").value.trim();
  const weddingDate = document.getElementById("weddingDate").value;
  const weddingLocation = document.getElementById("weddingLocation").value.trim();
  const bridePhone = document.getElementById("bridePhone").value.trim();
  const groomPhone = document.getElementById("groomPhone").value.trim();
  const actualAdvance = Number(document.getElementById("actualAdvancePaid").value) || 10000;
  const homecomingDate = document.getElementById("homecomingDate")?.value || "";
  const homecomingLocation = document.getElementById("homecomingLocation")?.value || "";
  const preshootDate = document.getElementById("preshootDate")?.value || "";
  const preshootLocation = document.getElementById("preshootLocation")?.value || "";
  const notes = document.getElementById("bookingNotes").value.trim();

  // Primary WhatsApp Contact for updates & invoices
  const primaryContactOption = document.querySelector('input[name="primaryContactOption"]:checked')?.value || "bride";
  let primaryPhone = bridePhone;
  if (primaryContactOption === "groom") {
    primaryPhone = groomPhone;
  } else if (primaryContactOption === "other") {
    const otherVal = document.getElementById("primaryWhatsApp")?.value.trim();
    primaryPhone = otherVal || bridePhone;
  }

  let total = 0;
  if (currentSelection.weddingPackage) total += currentSelection.weddingPackage.price;
  if (currentSelection.homecomingPackage) total += currentSelection.homecomingPackage.price;
  if (currentSelection.engagementPackage) total += currentSelection.engagementPackage.price;
  if (currentSelection.preshootPackage) total += currentSelection.preshootPackage.price;
  currentSelection.addons.forEach(a => total += a.price);

  // Note: Advance is NOT deducted from full amount until studio verification
  const balanceDue = total;
  const newId = `OCT-${new Date().getFullYear()}-${String(allBookings.length + 1).padStart(3, '0')}`;

  const newBooking = {
    id: newId,
    coupleTitle: `${brideName} & ${groomName}`,
    brideName,
    groomName,
    bridePhone,
    groomPhone,
    primaryContactOption,
    primaryPhone,
    weddingDate,
    weddingLocation,
    homecomingDate,
    homecomingLocation,
    preshootDate,
    preshootLocation,
    selectedPackage: currentSelection.weddingPackage || null,
    isCustomPackage: !!currentSelection.weddingPackage?.isCustom,
    customPackageItems: currentSelection.weddingPackage?.customItems || [],
    selectedHomecoming: currentSelection.homecomingPackage || null,
    selectedEngagement: currentSelection.engagementPackage || null,
    selectedPreshoot: currentSelection.preshootPackage || null,
    selectedAddons: [...currentSelection.addons],
    basePackageTotal: total,
    travelCharges: {
      enabled: false,
      ratePerKm: 80,
      weddingKm: 0,
      weddingCost: 0,
      homecomingKm: 0,
      homecomingCost: 0,
      preshootKm: 0,
      preshootCost: 0,
      robeKm: 0,
      robeCost: 0,
      engagementKm: 0,
      engagementCost: 0,
      totalTravelCost: 0
    },
    totalAmount: total,
    advancePaid: actualAdvance,
    isAdvanceVerified: false,
    isAdvanceRejected: false,
    advanceRejectReason: "",
    isBookingConfirmed: false,
    isFullPaid: false,
    balanceDue,
    balanceSlipUrl: "",
    balanceSlipSubmitted: false,
    balanceSlipVerified: false,
    balanceSlipRejected: false,
    balanceRejectReason: "",
    notes,
    bankSlipUrl: currentSelection.bankSlipData || "https://placehold.co/600x400/181b26/d4af37?text=Slip+Uploaded",
    expressDeliveryAvailable: false,
    expressDeliveryAccepted: false,
    weddingStepCompleted: 0,
    preshootStepCompleted: 0,
    deliveryMethod: "",
    courierAddress: "",
    isAcceptedByClient: false,
    revisionNotes: "",
    clientRating: 0,
    clientReview: "",
    createdAt: new Date().toISOString().split("T")[0]
  };

  allBookings.unshift(newBooking);
  saveDataToStorage(newBooking);

  if (document.getElementById("masterCoupleSelector")) {
    populateMasterCoupleSelector();
  }

  // Live subscription
  subscribeToBookingDoc(newId);

  // Notify Studio
  sendCleanWhatsAppMessage(
    "0714277276",
    `📸 *New Wedding Booking Placed!*
ID: ${newId}
Couple: ${brideName} & ${groomName}
Date: ${weddingDate}
Location: ${weddingLocation}
Package: ${currentSelection.weddingPackage.name}
Total: ${formatLKR(total)} LKR
Advance Paid: ${formatLKR(actualAdvance)} LKR (⏳ Needs Verification)
Primary WhatsApp: ${primaryPhone}`
  );

  // If in multi-panel client view:
  if (document.getElementById("clientNavTabs")) {
    currentBookingId = newId;
    switchClientTab("portal");
    showToast(
      currentLang === "si" ? "Booking එක සාර්ථකව සම්පූර්ණයි!" : "Booking Successfully Submitted!",
      currentLang === "si" ? `ඔබගේ Booking ID: ${newId} (Advance Verification Pending)` : `Your Booking ID: ${newId} (Awaiting Studio Review)`
    );
    try {
      window.history.pushState(null, '', `?tab=portal&id=${newId}`);
    } catch(e) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Fallback redirect couple directly to their private portal link
    window.location.href = `portal.html?id=${newId}`;
  }
}

// ==========================================
// 8. COUPLE DASHBOARD (PORTAL VIEW)
// ==========================================

function loadPortalData(bookingId, skipSubscribe) {
  const isAdmin = !!document.getElementById("adminBookingsTableBody");
  const booking = allBookings.find(b => b.id === bookingId) || (isAdmin ? (allBookings[0] || null) : null);
  const clientPortalContent = document.getElementById("clientPortalContent");
  const adminPortalPreviewBody = document.getElementById("adminPortalPreviewBody");
  const adminPortalEmptyHint = document.getElementById("adminPortalEmptyHint");

  if (!booking) {
    if (clientPortalContent) clientPortalContent.style.display = "none";
    if (adminPortalPreviewBody) adminPortalPreviewBody.style.display = "none";
    if (adminPortalEmptyHint) adminPortalEmptyHint.style.display = "block";
    return;
  }

  // Subscribe to live cloud updates for this specific booking
  if (!skipSubscribe && booking.id) {
    subscribeToBookingDoc(booking.id);
  }

  if (clientPortalContent) clientPortalContent.style.display = "block";
  if (adminPortalPreviewBody) adminPortalPreviewBody.style.display = "block";
  if (adminPortalEmptyHint) adminPortalEmptyHint.style.display = "none";

  const coupleTitleEl = document.getElementById("portalCoupleTitle");
  if (coupleTitleEl) coupleTitleEl.textContent = booking.coupleTitle || "";
  const locationEl = document.getElementById("portalLocation");
  if (locationEl) locationEl.textContent = booking.weddingLocation || "";
  const bookingIdEl = document.getElementById("portalBookingId");
  if (bookingIdEl) bookingIdEl.textContent = booking.id || "";

  let summary = "";
  if (booking.isCustomPackage) {
    summary = "Custom Cinematography Package";
  } else if (booking.selectedPackage) {
    summary = booking.selectedPackage.name;
    if (booking.selectedHomecoming) summary += ` + ${booking.selectedHomecoming.name}`;
    if (booking.selectedEngagement) summary += ` + ${booking.selectedEngagement.name}`;
    if (booking.selectedPreshoot) summary += ` + Pre-Shoot`;
  } else if (booking.selectedEngagement) {
    summary = booking.selectedEngagement.name;
    if (booking.selectedHomecoming) summary += ` + ${booking.selectedHomecoming.name}`;
    if (booking.selectedPreshoot) summary += ` + Pre-Shoot`;
  } else if (booking.selectedHomecoming) {
    summary = booking.selectedHomecoming.name;
    if (booking.selectedPreshoot) summary += ` + Pre-Shoot`;
  } else if (booking.selectedPreshoot) {
    summary = booking.selectedPreshoot.name;
  } else {
    summary = "Cinematography Service";
  }
  if (booking.selectedAddons?.length > 0) summary += ` + ${booking.selectedAddons.length} Add-ons`;
  const summaryEl = document.getElementById("portalPackageSummary");
  if (summaryEl) summaryEl.textContent = summary;

  const dateFormattedEl = document.getElementById("portalWeddingDateFormatted");
  if (dateFormattedEl) dateFormattedEl.textContent = formatDatePretty(booking.weddingDate);

  // Financials & Payment Verification Workflow
  const totalAmountEl = document.getElementById("portalTotalAmount");
  if (totalAmountEl) {
    if (booking.travelCharges && booking.travelCharges.enabled && booking.travelCharges.totalTravelCost > 0) {
      totalAmountEl.innerHTML = `${formatLKR(booking.totalAmount)} LKR <small style="display:block; font-size:11.5px; color:var(--gold); font-weight:normal;">(Package: ${formatLKR(booking.basePackageTotal || (booking.totalAmount - booking.travelCharges.totalTravelCost))} LKR + Travel: ${formatLKR(booking.travelCharges.totalTravelCost)} LKR)</small>`;
    } else {
      totalAmountEl.textContent = `${formatLKR(booking.totalAmount)} LKR`;
    }
  }
  
  const advancePaidEl = document.getElementById("portalAdvancePaid");
  if (advancePaidEl) {
    if (booking.isAdvanceVerified) {
      advancePaidEl.innerHTML = `${formatLKR(booking.advancePaid)} LKR <span class="badge-success" style="font-size: 11px; margin-left: 6px;"><i class="fa-solid fa-circle-check"></i> Verified</span>`;
    } else if (booking.isAdvanceRejected) {
      advancePaidEl.innerHTML = `${formatLKR(booking.advancePaid)} LKR <span class="badge-danger" style="font-size: 11px; margin-left: 6px;"><i class="fa-solid fa-circle-xmark"></i> Rejected</span>`;
    } else {
      advancePaidEl.innerHTML = `${formatLKR(booking.advancePaid)} LKR <span class="badge-warning" style="font-size: 11px; margin-left: 6px;"><i class="fa-solid fa-clock"></i> Waiting for Review</span>`;
    }
  }

  const balDueElem = document.getElementById("portalBalanceDue");
  const balBox = document.getElementById("balanceMetricBox");
  if (balDueElem) {
    if (booking.isFullPaid || (booking.isAdvanceVerified && booking.balanceDue <= 0)) {
      if (balBox) balBox.className = "total-row highlight";
      balDueElem.textContent = "0 LKR (Settled)";
    } else if (!booking.isAdvanceVerified) {
      if (balBox) balBox.className = "total-row";
      balDueElem.innerHTML = `${formatLKR(booking.totalAmount)} LKR <small style="display:block; font-size:11px; color:#ffc107;">(Pending Studio Verification)</small>`;
    } else {
      if (balBox) balBox.className = "total-row";
      balDueElem.textContent = `${formatLKR(booking.balanceDue)} LKR`;
    }
  }

  // Items list
  const itemsList = document.getElementById("portalPackageItemsList");
  if (itemsList) {
    const items = [];
    if (booking.customPackageItems?.length > 0) {
      booking.customPackageItems.forEach(cp => items.push(`${cp.name} (${formatLKR(cp.price)} LKR)`));
    } else if (booking.selectedPackage) {
      items.push(booking.selectedPackage.name);
    }
    if (booking.selectedHomecoming) items.push(booking.selectedHomecoming.name);
    if (booking.selectedEngagement) items.push(booking.selectedEngagement.name);
    if (booking.selectedPreshoot) items.push(booking.selectedPreshoot.name);
    booking.selectedAddons?.forEach(a => items.push(a.name));
    if (booking.expressDeliveryAccepted) {
      items.push("⚡ Super Fast Editing Service (VIP Fast-Track)");
    }
    if (booking.travelCharges && booking.travelCharges.enabled && booking.travelCharges.totalTravelCost > 0) {
      const tc = booking.travelCharges;
      if (tc.weddingCost > 0) items.push(`🚗 Travel Charges - Wedding (${tc.weddingKm} km @ 80 LKR/km): ${formatLKR(tc.weddingCost)} LKR`);
      if (tc.homecomingCost > 0) items.push(`🚗 Travel Charges - Homecoming (${tc.homecomingKm} km @ 80 LKR/km): ${formatLKR(tc.homecomingCost)} LKR`);
      if (tc.preshootCost > 0) items.push(`🚗 Travel Charges - Pre-Shoot (${tc.preshootKm} km @ 80 LKR/km): ${formatLKR(tc.preshootCost)} LKR`);
      if (tc.robeCost > 0) items.push(`🚗 Travel Charges - ROBE Shoot (${tc.robeKm} km @ 80 LKR/km): ${formatLKR(tc.robeCost)} LKR`);
      if (tc.engagementCost > 0) items.push(`🚗 Travel Charges - Engagement (${tc.engagementKm} km @ 80 LKR/km): ${formatLKR(tc.engagementCost)} LKR`);
    }
    itemsList.innerHTML = items.map(it => `<li><i class="fa-solid fa-angle-right"></i> ${it}</li>`).join("");
  }

  evaluatePaymentAlert(booking);

  // Balance Payment Section
  renderBalancePaymentSection(booking);

  // Pre-shoot toggle
  const psCountdownBox = document.getElementById("preshootCountdownBox");
  const psTrackerCard = document.getElementById("preshootTrackerCard");
  if (booking.preshootDate && booking.selectedPreshoot) {
    psCountdownBox.style.display = "block";
    psTrackerCard.style.display = "block";
    document.getElementById("portalPreshootDateFormatted").textContent = formatDatePretty(booking.preshootDate);
    renderPipelineStepper("preshootStepper", booking.preshootStepCompleted);
    document.getElementById("psOverallBadge").textContent = getOverallStatusLabel(booking.preshootStepCompleted);
  } else {
    psCountdownBox.style.display = "none";
    psTrackerCard.style.display = "none";
  }

  // Wedding Pipeline Stepper
  renderPipelineStepper("weddingStepper", booking.weddingStepCompleted);
  document.getElementById("wdOverallBadge").textContent = getOverallStatusLabel(booking.weddingStepCompleted);

  // Super Fast Editing Service
  evaluateExpressDeliveryCard(booking);

  // Delivery & Feedback Sections (Unlock when step 6 reached)
  const postComp = document.getElementById("postCompletionSection");
  if (booking.weddingStepCompleted >= 6 || (booking.selectedPreshoot && booking.preshootStepCompleted >= 6)) {
    postComp.style.display = "block";
    renderDeliverySelectionState(booking);
  } else {
    postComp.style.display = "none";
  }

  // Handle Locked Mode (If client already accepted video)
  checkProjectLockedState(booking);
}

function renderBalancePaymentSection(booking) {
  const balanceCard = document.getElementById("portalBalancePaymentBox");
  const balanceActionArea = document.getElementById("balanceSlipActionArea");
  const balDisplay = document.getElementById("portalBalanceDueDisplay");
  if (!balanceCard || !balanceActionArea) return;

  // Show only if advance is verified AND there is a balance due
  if (booking.isAdvanceVerified && booking.balanceDue > 0 && !booking.isFullPaid) {
    balanceCard.style.display = "block";
    if (balDisplay) balDisplay.textContent = `${formatLKR(booking.balanceDue)} LKR`;

    if (booking.balanceSlipSubmitted) {
      if (booking.balanceSlipVerified) {
        balanceActionArea.innerHTML = `
          <div class="express-confirmed-box">
            <i class="fa-solid fa-circle-check" style="color: var(--accent-green); font-size: 20px;"></i>
            <div>
              <strong>Balance Payment Verified & Settled!</strong>
              <p style="margin: 0; font-size: 12px; color: #aaa;">Your full payment has been confirmed by OCTEWYA Studio.</p>
            </div>
          </div>
        `;
      } else if (booking.balanceSlipRejected) {
        balanceActionArea.innerHTML = `
          <div style="background: rgba(220,53,69,0.15); border: 1px solid rgba(220,53,69,0.4); border-radius: 6px; padding: 12px; margin-bottom: 12px;">
            <strong style="color: #ff6b6b;"><i class="fa-solid fa-circle-xmark"></i> Balance Slip Rejected</strong>
            <p style="font-size: 12px; color: #ddd; margin: 4px 0 0;">${booking.balanceRejectReason || 'Please upload a clearer slip screenshot or check account details.'}</p>
          </div>
          <button type="button" class="btn-primary-gold" onclick="openBalanceSlipModal()">
            <i class="fa-solid fa-cloud-arrow-up"></i> Re-upload Balance Payment Slip
          </button>
        `;
      } else {
        balanceActionArea.innerHTML = `
          <div style="background: rgba(255,193,7,0.12); border: 1px solid rgba(255,193,7,0.3); border-radius: 6px; padding: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-hourglass-half" style="color: #ffc107; font-size: 20px;"></i>
              <div>
                <strong style="color: #ffc107;">Slip Uploaded - Waiting for Studio Verification</strong>
                <p style="margin: 0; font-size: 12px; color: #aaa;">Our team will review and verify your settlement shortly.</p>
              </div>
            </div>
            <button type="button" class="btn-outline-gold" style="font-size: 11px; padding: 5px 10px;" onclick="openBalanceSlipModal()">Change Slip</button>
          </div>
        `;
      }
    } else {
      balanceActionArea.innerHTML = `
        <p class="small-text" style="color: #ccc; margin-bottom: 12px;">
          ඔබ ඉතිරි මුදල බැංකු ගිණුමට තැන්පත් කළ පසු, එහි Bank Slip පත්‍රිකාවේ ඡායාරූපය මෙතැනින් Upload කරන්න.
        </p>
        <button type="button" class="btn-primary-gold" onclick="openBalanceSlipModal()">
          <i class="fa-solid fa-cloud-arrow-up"></i> Upload Balance Payment Slip (${formatLKR(booking.balanceDue)} LKR)
        </button>
      `;
    }
  } else {
    balanceCard.style.display = "none";
  }
}

function checkProjectLockedState(booking) {
  const lockedBanner = document.getElementById("projectLockedBanner");
  const btnEdit = document.getElementById("btnEditDetails");
  const step8 = document.getElementById("step8Section");

  if (booking.isAcceptedByClient) {
    lockedBanner?.classList.remove("hidden");
    if (btnEdit) btnEdit.style.display = "none";
    document.getElementById("portalStatusPill").textContent = "Project Completed & Delivered";
    document.getElementById("portalStatusPill").className = "meta-pill status-pill completed-seal";
  } else {
    lockedBanner?.classList.add("hidden");
  }
}

// Payment Alert Evaluation
function evaluatePaymentAlert(booking) {
  const container = document.getElementById("paymentAlertContainer");
  if (!container) return;
  container.innerHTML = "";

  if (booking.isFullPaid || booking.balanceDue <= 0) return;

  const now = new Date();
  const weddingDay = new Date(booking.weddingDate);
  const diffTime = weddingDay.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 2 && diffDays >= 0) {
    container.innerHTML = `
      <div class="critical-red-banner mt-3" style="animation: pulseAlert 2s infinite;">
        <div class="critical-banner-header">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>${currentLang === 'si' ? 'අවධානය පිණිසයි: මංගල දිනයට පෙර ඉතිරි මුදල ගෙවන්න' : 'URGENT: FINAL PAYMENT DUE BEFORE WEDDING'}</span>
        </div>
        <p class="critical-banner-text">
          ${currentLang === 'si' 
            ? `ඔබගේ මංගල දිනයට ඇත්තේ තව දින ${diffDays === 0 ? 'කිහිපයක්' : diffDays} කි. අපගේ නියමයන් අනුව ඉතිරි මුදල වන <strong>${formatLKR(booking.balanceDue)} LKR</strong> ගෙවා අවසන් කරන්න හෝ Dasun Kavinda අමතන්න.`
            : `Your wedding is in ${diffDays} days! Please settle the remaining balance of <strong>${formatLKR(booking.balanceDue)} LKR</strong> prior to the wedding or contact Dasun Kavinda.`}
        </p>
        <button class="btn-primary-gold mt-2" onclick="openDirectWhatsApp()">
          <i class="fa-brands fa-whatsapp"></i> ${currentLang === 'si' ? 'Dasun අමතන්න' : 'Contact Dasun'}
        </button>
      </div>
    `;
  }
}

// Super Fast Editing Service
function evaluateExpressDeliveryCard(booking) {
  const card = document.getElementById("expressDeliveryCard");
  if (!card) return;

  // If already accepted:
  if (booking.expressDeliveryAccepted) {
    card.style.display = "block";
    card.innerHTML = `
      <div class="express-confirmed-box">
        <i class="fa-solid fa-bolt" style="color: var(--gold); font-size: 24px;"></i>
        <div>
          <strong style="color: #fff; font-size: 15px;">Super Fast Editing Service Confirmed!</strong>
          <p style="margin: 4px 0 0; font-size: 12.5px; color: #ddd;">
            "We offer an exclusive fast track editing service, ensuring your wedding video is fully edited by the day following your wedding."
          </p>
        </div>
      </div>
    `;
    return;
  }

  // If editing already started past step 2, hide
  if (booking.weddingStepCompleted >= 2) {
    card.style.display = "none";
    return;
  }

  // If manually enabled by Dasun in Admin
  if (booking.expressDeliveryAvailable) {
    card.style.display = "block";
    const isPkg3OrVIP = booking.selectedPackage?.id === "pkg_03" || booking.selectedPackage?.id === "pkg_vip";
    const daysText = isPkg3OrVIP ? "Within 3 Days (දින 3ක් ඇතුළත)" : "By Day Following Wedding (පසුදිනම)";
    const cost = isPkg3OrVIP ? 15000 : 10000;

    card.innerHTML = `
      <div class="express-card-inner" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(20, 24, 38, 0.98) 100%); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span class="badge-gold"><i class="fa-solid fa-bolt"></i> VIP FAST-TRACK</span>
              <span class="badge-success"><i class="fa-solid fa-circle-check"></i> Available for You</span>
            </div>
            <h3 style="color: #fff; font-size: 17px; margin: 0 0 6px;">Super Fast Editing Service</h3>
            <p style="font-size: 13px; color: #e0e0e0; line-height: 1.5; margin: 0 0 10px;">
              "We offer an exclusive fast track editing service, ensuring your wedding video is fully edited by the day following your wedding."
            </p>
            <span style="font-size: 12px; color: var(--gold-light);"><i class="fa-solid fa-clock"></i> Express Delivery: <strong>${daysText}</strong></span>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div class="price-val gold" style="font-size: 22px; font-weight: 800;">+${formatLKR(cost)} LKR</div>
            <button class="btn-primary-gold" onclick="acceptExpressDelivery()" style="padding: 9px 18px; font-size: 13px;">
              <i class="fa-solid fa-bolt"></i> ${currentLang === 'si' ? 'Super Fast Editing Service ලබාගන්න' : 'Request Fast-Track Editing'}
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    // Show locked informative notice
    card.style.display = "block";
    card.innerHTML = `
      <div class="express-locked-notice">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <i class="fa-solid fa-bolt" style="color: var(--gold);"></i>
          <strong style="color: #fff; font-size: 14px;">Super Fast Editing Service</strong>
          <span class="badge-locked" style="font-size: 10px;"><i class="fa-solid fa-lock"></i> Locked</span>
        </div>
        <p style="margin: 0 0 6px; font-size: 12.5px; color: #bbb; font-style: italic;">
          "We offer an exclusive fast track editing service, ensuring your wedding video is fully edited by the day following your wedding."
        </p>
        <span style="font-size: 11.5px; color: var(--text-muted); display: block;">
          <i class="fa-solid fa-circle-info"></i> මෙම සේවාව මංගල දිනයට දින 1කට පෙර Studio Availability අනුව පරීක්ෂා කර Dashboard එකෙන් Unlock කරනු ලැබේ.
        </span>
      </div>
    `;
  }
}

function acceptExpressDelivery() {
  const booking = getActiveBooking();
  const isPkg3OrVIP = booking.selectedPackage?.id === "pkg_03" || booking.selectedPackage?.id === "pkg_vip";
  const cost = isPkg3OrVIP ? 15000 : 10000;

  booking.expressDeliveryAccepted = true;
  booking.expressDeliveryFee = cost;
  recalculateBookingFinancials(booking);
  saveDataToStorage(booking);

  loadPortalData(booking.id);
  showToast("Express Service Confirmed!", `Super Fast Editing Service commitment added.`);

  sendCleanWhatsAppMessage(
    "0714277276",
    `⚡ *Super Fast Editing Service Requested!*
Couple: ${booking.coupleTitle} (ID: ${booking.id})
Wedding Date: ${booking.weddingDate}
Delivery Commitment: ${isPkg3OrVIP ? '3 Days (+15,000 LKR)' : 'Next Day (+10,000 LKR)'}`
  );
}

// Pipeline Stepper (6 Steps)
function renderPipelineStepper(containerId, completedStep) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  PIPELINE_STEPS.forEach(st => {
    const isCompleted = completedStep >= st.step;
    const isInProgress = completedStep === (st.step - 1) && completedStep > 0;

    let stateClass = "dimmed";
    let badgeText = currentLang === 'si' ? "පොරොත්තුවේ" : "Pending";

    if (isCompleted) {
      stateClass = "completed";
      badgeText = currentLang === 'si' ? "අවසන් ✓" : "Completed ✓";
    } else if (isInProgress) {
      stateClass = "in-progress";
      badgeText = currentLang === 'si' ? "සිදුකෙරෙමින්" : "In Progress";
    }

    const titleText = currentLang === 'si' ? st.titleSi : st.title;

    const card = document.createElement("div");
    card.className = `step-card ${stateClass}`;
    card.innerHTML = `
      <span class="step-number">STEP 0${st.step}</span>
      <div class="step-icon-wrap">
        <i class="${st.icon}"></i>
      </div>
      <h4 class="step-title">${titleText}</h4>
      <span class="step-meta">${st.meta}</span>
      <span class="step-badge">${badgeText}</span>
    `;
    container.appendChild(card);
  });
}

function getOverallStatusLabel(step) {
  if (step === 0) return currentLang === 'si' ? "උත්සවය බලාපොරොත්තුවෙන්" : "Pending Event";
  if (step === 1) return currentLang === 'si' ? "Chip Backup අවසන්" : "Footage Backed Up";
  if (step === 2) return currentLang === 'si' ? "සංස්කරණය සිදුකෙරේ" : "Editing in Progress";
  if (step === 3) return currentLang === 'si' ? "Rough Cut අවසන්" : "Rough Cut Ready";
  if (step === 4) return currentLang === 'si' ? "Colour Grading" : "Color Grading";
  if (step === 5) return currentLang === 'si' ? "Export කෙරෙමින් පවතී" : "Exporting Final Cut";
  if (step >= 6) return currentLang === 'si' ? "නැරඹීමට සූදානම් ✓" : "Ready for Viewing ✓";
  return "In Production";
}

// Delivery Preference
function renderDeliverySelectionState(booking) {
  if (booking.deliveryMethod === "cloud") {
    document.getElementById("optionCloudDrive")?.classList.add("active");
  } else if (booking.deliveryMethod === "usb_studio") {
    document.getElementById("optionUsbStudio")?.classList.add("active");
  } else if (booking.deliveryMethod === "usb_courier") {
    document.getElementById("optionUsbCourier")?.classList.add("active");
    const addrBox = document.getElementById("courierAddressBox");
    if (addrBox) {
      addrBox.style.display = "block";
      document.getElementById("courierAddress").value = booking.courierAddress || "";
    }
  }
}

function handleDeliveryChange(method) {
  const booking = getActiveBooking();
  booking.deliveryMethod = method;

  document.querySelectorAll(".delivery-card").forEach(c => c.classList.remove("active"));
  const addrBox = document.getElementById("courierAddressBox");
  if (addrBox) addrBox.style.display = method === "usb_courier" ? "block" : "none";

  saveDataToStorage();
  showToast("Delivery Method Saved", `Selected: ${method.toUpperCase()}`);
}

function saveCourierAddress() {
  const booking = getActiveBooking();
  const addr = document.getElementById("courierAddress").value.trim();
  if (!addr) {
    alert("Please enter your courier address!");
    return;
  }
  booking.courierAddress = addr;
  saveDataToStorage();
  showToast("Address Saved", "Courier delivery address recorded.");
}

function submitRevisions() {
  const notes = document.getElementById("revisionNotes").value.trim();
  if (!notes) {
    alert("Please specify the revision notes!");
    return;
  }

  const booking = getActiveBooking();
  booking.revisionNotes = notes;
  saveDataToStorage();

  showToast("Revisions Submitted", "Feedback recorded & sent to studio.");

  sendCleanWhatsAppMessage(
    "0714277276",
    `🎬 *Video Revisions Requested*
Couple: ${booking.coupleTitle} (ID: ${booking.id})
Feedback Notes:
${notes}`
  );
}

// VIDEO ACCEPTANCE & CELEBRATION
function confirmVideoAccepted() {
  const booking = getActiveBooking();
  booking.isAcceptedByClient = true;
  saveDataToStorage();

  // Show celebration modal
  document.getElementById("celebrationModal")?.classList.remove("hidden");
}

function closeCelebrationModal() {
  document.getElementById("celebrationModal")?.classList.add("hidden");
  const booking = getActiveBooking();
  loadPortalData(booking.id);
  document.getElementById("reviewSubmissionBox")?.scrollIntoView({ behavior: 'smooth' });
}

// Rating & Reviews
let selectedStars = 5;
function setRating(val) {
  selectedStars = val;
  const stars = document.querySelectorAll("#starRating .star");
  stars.forEach((s, idx) => {
    if (idx < val) s.classList.add("active");
    else s.classList.remove("active");
  });
}

function submitPublicReview() {
  const comment = document.getElementById("reviewComment").value.trim();
  if (!comment) {
    alert("Please enter your review comment!");
    return;
  }

  const booking = getActiveBooking();
  booking.clientRating = selectedStars;
  booking.clientReview = comment;
  saveDataToStorage();

  showToast("Review Published!", "Thank you for reviewing OCTEWYA Cinematography!");
  document.getElementById("reviewComment").value = "";
  alert(currentLang === 'si' ? "ඔබගේ වටිනා අදහසට බොහොම ස්තූතියි!" : "Thank you for your valuable review!");
}

function getBaseUrl() {
  const path = window.location.pathname;
  const basePath = path.substring(0, path.lastIndexOf("/") + 1);
  return `${window.location.origin}${basePath}`;
}

function adminResetAllBookings() {
  const confirmMsg = currentLang === "si" 
    ? "ඔබට සියලුම Booking දත්ත සම්පූර්ණයෙන්ම Clear කිරීමට අවශ්‍යද? (මෙය නැවත ලබාගත නොහැක)"
    : "Are you sure you want to clear ALL bookings data? This cannot be undone.";
  if (confirm(confirmMsg)) {
    if (isFirebaseReady()) {
      firestoreDb.collection("octewya_bookings").get().then(snapshot => {
        const batch = firestoreDb.batch();
        snapshot.forEach(doc => batch.delete(doc.ref));
        return batch.commit();
      }).catch(err => console.warn("Cloud clear error:", err));
    }
    allBookings = [];
    currentBookingId = "";
    localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));
    loadAdminData();
    populateMasterCoupleSelector();
    showToast(
      currentLang === "si" ? "දත්ත Clear කරන ලදී" : "Data Cleared",
      currentLang === "si" ? "සියලුම Booking දත්ත සාර්ථකව මකාදමන ලදී." : "All bookings have been cleared successfully."
    );
  }
}

function adminSelectBooking(coupleId) {
  selectBookingFromAdmin(coupleId);
}

// ==========================================
// 9. STUDIO ADMIN PANEL (SCALABLE & UNLIMITED)
// ==========================================

function loadAdminData() {
  const statTotal = document.getElementById("statTotalBookings");
  const statActive = document.getElementById("statActiveProjects");
  const statDelivered = document.getElementById("statDelivered");

  if (statTotal) statTotal.textContent = allBookings.length;
  if (statActive) statActive.textContent = allBookings.filter(b => b.weddingStepCompleted < 6).length;
  if (statDelivered) statDelivered.textContent = allBookings.filter(b => b.weddingStepCompleted >= 6).length;

  // Render Table with Filter
  renderAdminTable(allBookings);

  const activeBooking = getActiveBooking();
  const mgmtGrid = document.querySelector(".admin-management-grid");
  const coupleLabel = document.getElementById("adminActiveCoupleLabel");
  const consoleTitle = document.getElementById("consoleCoupleTitle");

  if (!activeBooking) {
    if (coupleLabel) coupleLabel.textContent = "Active: None";
    if (consoleTitle) consoleTitle.textContent = "Select a booking";
    if (mgmtGrid) mgmtGrid.style.display = "none";
    return;
  }

  if (mgmtGrid) mgmtGrid.style.display = "grid";
  if (coupleLabel) coupleLabel.textContent = `Active: ${activeBooking.coupleTitle}`;
  if (consoleTitle) consoleTitle.textContent = `${activeBooking.coupleTitle} (${activeBooking.id})`;

  // Steppers for Active Booking
  renderAdminStepButtons("adminWeddingStepButtons", activeBooking.weddingStepCompleted, (step) => {
    activeBooking.weddingStepCompleted = step;
    saveDataToStorage();
    loadAdminData();
    showToast("Wedding Step Updated", `Active step: Step 0${step}`);
  });

  const psBox = document.getElementById("adminPreshootControlBox");
  if (activeBooking.selectedPreshoot) {
    psBox.style.display = "block";
    renderAdminStepButtons("adminPreshootStepButtons", activeBooking.preshootStepCompleted, (step) => {
      activeBooking.preshootStepCompleted = step;
      saveDataToStorage();
      loadAdminData();
      showToast("Pre-Shoot Step Updated", `Active step: Step 0${step}`);
    });
  } else {
    psBox.style.display = "none";
  }

  // Advance Slip & Payments Verification
  const slipImg = document.getElementById("adminSlipImg");
  if (slipImg) slipImg.src = activeBooking.bankSlipUrl || "https://placehold.co/400x250/222/c5a059?text=Bank+Slip";
  
  const paymentMetrics = document.getElementById("adminPaymentMetrics");
  if (paymentMetrics) {
    let advBadge = '<span class="badge-warning">⏳ Waiting for Review</span>';
    if (activeBooking.isAdvanceVerified) {
      advBadge = '<span class="badge-success">✓ Verified & Confirmed</span>';
    } else if (activeBooking.isAdvanceRejected) {
      advBadge = '<span class="badge-danger">✗ Slip Rejected</span>';
    }

    paymentMetrics.innerHTML = `
      <div style="font-size: 13px; line-height: 1.6;">
        <div><strong>Total Package Value:</strong> ${formatLKR(activeBooking.totalAmount)} LKR</div>
        <div><strong>Advance Deposited:</strong> ${formatLKR(activeBooking.advancePaid)} LKR ${advBadge}</div>
        <div><strong>Remaining Balance:</strong> <span class="gold">${formatLKR(activeBooking.balanceDue)} LKR</span></div>
        <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">
          <i class="fa-brands fa-whatsapp" style="color: #25D366;"></i> Primary Updates: <strong>${activeBooking.primaryPhone || activeBooking.bridePhone}</strong>
        </div>
      </div>
    `;
  }

  // Balance Slip Verification in Admin
  const balBox = document.getElementById("adminBalanceVerificationBox");
  const balSlipImg = document.getElementById("adminBalanceSlipImg");
  const balMetrics = document.getElementById("adminBalanceMetrics");

  if (balBox && balMetrics) {
    if (activeBooking.isAdvanceVerified && activeBooking.balanceDue > 0) {
      balBox.style.display = "block";
      if (balSlipImg) {
        balSlipImg.src = activeBooking.balanceSlipUrl || "https://placehold.co/400x250/222/c5a059?text=No+Balance+Slip";
      }

      let balBadge = '<span class="badge-warning" style="font-size: 10px;">⏳ Awaiting Client Upload</span>';
      if (activeBooking.balanceSlipSubmitted) {
        if (activeBooking.balanceSlipVerified) {
          balBadge = '<span class="badge-success" style="font-size: 10px;">✓ Full Settlement Verified</span>';
        } else if (activeBooking.balanceSlipRejected) {
          balBadge = '<span class="badge-danger" style="font-size: 10px;">✗ Slip Rejected</span>';
        } else {
          balBadge = '<span class="badge-warning" style="font-size: 10px;">⏳ Slip Uploaded (Needs Review)</span>';
        }
      }

      balMetrics.innerHTML = `
        <div style="font-size: 13px; line-height: 1.6;">
          <div><strong>Remaining Balance:</strong> <span class="gold">${formatLKR(activeBooking.balanceDue)} LKR</span></div>
          <div><strong>Settlement Status:</strong> ${balBadge}</div>
        </div>
      `;
    } else if (activeBooking.isFullPaid || activeBooking.balanceDue <= 0) {
      balBox.style.display = "block";
      if (balSlipImg) {
        balSlipImg.src = activeBooking.balanceSlipUrl || "https://placehold.co/400x250/222/c5a059?text=Fully+Paid";
      }
      balMetrics.innerHTML = `
        <div style="font-size: 13px; line-height: 1.6;">
          <div><span class="badge-success">✓ 100% Fully Settled (0 LKR Balance)</span></div>
        </div>
      `;
    } else {
      balBox.style.display = "none";
    }
  }

  // Travel Charges Box in Admin
  const travelToggle = document.getElementById("adminTravelToggle");
  const travelContainer = document.getElementById("adminTravelInputsContainer");
  const travelStatusText = document.getElementById("adminTravelStatusText");

  const tc = activeBooking.travelCharges || { enabled: false, weddingKm: 0, weddingCost: 0, homecomingKm: 0, homecomingCost: 0, preshootKm: 0, preshootCost: 0, robeKm: 0, robeCost: 0, engagementKm: 0, engagementCost: 0, totalTravelCost: 0 };
  
  if (travelToggle) travelToggle.checked = !!tc.enabled;
  if (travelContainer) travelContainer.style.display = tc.enabled ? "block" : "none";
  if (travelStatusText) {
    travelStatusText.textContent = tc.enabled && tc.totalTravelCost > 0 
      ? `Status: Applied (${formatLKR(tc.totalTravelCost)} LKR Added to Total)`
      : "Status: Not Applied (0 LKR)";
  }
  
  const setTrVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = (val !== undefined && val !== null && val > 0) ? val : ""; };
  setTrVal("trWeddingKm", tc.weddingKm);
  setTrVal("trWeddingCost", tc.weddingCost);
  setTrVal("trHomecomingKm", tc.homecomingKm);
  setTrVal("trHomecomingCost", tc.homecomingCost);
  setTrVal("trPreshootKm", tc.preshootKm);
  setTrVal("trPreshootCost", tc.preshootCost);
  setTrVal("trRobeKm", tc.robeKm);
  setTrVal("trRobeCost", tc.robeCost);
  setTrVal("trEngagementKm", tc.engagementKm);
  setTrVal("trEngagementCost", tc.engagementCost);

  const trTotalDisplay = document.getElementById("trCalculatedTotal") || document.getElementById("trTotalTravelCostDisplay");
  if (trTotalDisplay) trTotalDisplay.textContent = `${formatLKR(tc.totalTravelCost || 0)} LKR`;

  // Super Fast Editing Service Switch
  const expressToggle = document.getElementById("adminExpressToggle");
  if (expressToggle) expressToggle.checked = !!activeBooking.expressDeliveryAvailable;
  const expressText = document.getElementById("adminExpressStatusText");
  if (expressText) {
    expressText.textContent = activeBooking.expressDeliveryAvailable 
      ? "Status: Available (Unlocked on Client Portal)" 
      : "Status: Unavailable (Locked)";
  }

  // Direct Secret Portal Link
  const portalInput = document.getElementById("adminDirectPortalLink");
  if (portalInput) {
    portalInput.value = `${getBaseUrl()}index.html?tab=portal&id=${activeBooking.id}`;
  }
}

function getBookingPrimaryPackageName(b) {
  if (b.isCustomPackage) return "Custom Package";
  if (b.selectedPackage?.name) return b.selectedPackage.name;
  if (b.selectedEngagement?.name) return b.selectedEngagement.name;
  if (b.selectedHomecoming?.name) return b.selectedHomecoming.name;
  if (b.selectedPreshoot?.name) return b.selectedPreshoot.name;
  return "Cinematography Service";
}

function renderAdminTable(bookingsList) {
  const tbody = document.getElementById("adminBookingsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!bookingsList || bookingsList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 45px 20px; color: #888;">
      <i class="fa-solid fa-folder-open" style="font-size: 28px; margin-bottom: 12px; display: block; color: var(--gold);"></i>
      <strong style="font-size: 15px; color: #eee; display: block; margin-bottom: 6px;">කිසිදු Booking එකක් තවම නැත (No Bookings Found)</strong>
      <span>පාරිභෝගිකයින් වෙබ් අඩවියෙන් Book කළ පසු හෝ ඔබ අලුත් Booking එකක් දැමූ පසු මෙහි දිස්වේ.</span>
    </td></tr>`;
    return;
  }

  const activeBooking = getActiveBooking();

  bookingsList.forEach(b => {
    const isRowActive = activeBooking && b.id === activeBooking.id;
    const tr = document.createElement("tr");
    tr.className = isRowActive ? "active-row" : "";

    tr.innerHTML = `
      <td><strong>${b.id}</strong></td>
      <td>
        <span style="font-weight: 700; color: #fff;">${b.coupleTitle}</span><br>
        <small style="color: var(--text-muted);"><i class="fa-brands fa-whatsapp"></i> ${b.primaryPhone || b.bridePhone}</small>
      </td>
      <td>${b.weddingDate}</td>
      <td>${getBookingPrimaryPackageName(b)}</td>
      <td>
        <span>${formatLKR(b.totalAmount)}</span> / 
        <span style="color: ${b.isAdvanceVerified ? 'var(--accent-green)' : '#ffc107'};">${formatLKR(b.advancePaid)} ${b.isAdvanceVerified ? '✓' : '⏳'}</span> / 
        <span style="color: ${b.balanceDue > 0 ? 'var(--gold)' : 'var(--accent-green)'};">${formatLKR(b.balanceDue)}</span>
      </td>
      <td>
        ${b.expressDeliveryAccepted 
          ? '<span class="vip-tag"><i class="fa-solid fa-bolt"></i> FAST-TRACK</span>' 
          : (b.expressDeliveryAvailable ? '<span style="color: var(--accent-green);">Available</span>' : '<span style="color: var(--text-muted);">Off</span>')}
      </td>
      <td>
        <span class="status-pill ${b.isAcceptedByClient ? 'completed-seal' : ''}">
          ${b.isAcceptedByClient ? 'Completed & Accepted' : getOverallStatusLabel(b.weddingStepCompleted)}
        </span>
      </td>
      <td>
        <div style="display: flex; gap: 6px; align-items: center;">
          <button class="btn-gold-sm" onclick="selectBookingFromAdmin('${b.id}')">Manage</button>
          <button class="btn-danger-sm" onclick="adminPromptDeleteBooking('${b.id}')" title="Delete Booking (Requires PIN)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function handleAdminSearch(query) {
  const q = query.toLowerCase().trim();
  const filtered = allBookings.filter(b => 
    b.coupleTitle.toLowerCase().includes(q) ||
    b.id.toLowerCase().includes(q) ||
    b.bridePhone.includes(q) ||
    b.groomPhone.includes(q) ||
    b.weddingLocation.toLowerCase().includes(q) ||
    b.weddingDate.includes(q)
  );
  renderAdminTable(filtered);
}

function handleAdminFilter(status) {
  let filtered = allBookings;
  if (status === "production") filtered = allBookings.filter(b => b.weddingStepCompleted < 6);
  if (status === "completed") filtered = allBookings.filter(b => b.weddingStepCompleted >= 6);
  if (status === "fasttrack") filtered = allBookings.filter(b => b.expressDeliveryAccepted);
  renderAdminTable(filtered);
}

function selectBookingFromAdmin(bookingId) {
  currentBookingId = bookingId;
  loadAdminData();
  showToast("Loaded Booking", `Switched to manage ${getActiveBooking().coupleTitle}`);
}

function renderAdminStepButtons(containerId, activeStep, onStepClick) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  PIPELINE_STEPS.forEach(st => {
    const isCompleted = activeStep >= st.step;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `btn-step-toggle ${isCompleted ? 'active' : ''}`;
    btn.onclick = () => onStepClick(st.step);

    btn.innerHTML = `
      <span><i class="${st.icon}"></i> Step 0${st.step}: ${st.title}</span>
      <span class="check-icon"><i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle'}"></i></span>
    `;
    container.appendChild(btn);
  });
}

function recalculateBookingFinancials(booking) {
  if (!booking) return;
  if (booking.basePackageTotal === undefined || booking.basePackageTotal === null) {
    const existingTravel = (booking.travelCharges && booking.travelCharges.enabled) ? (booking.travelCharges.totalTravelCost || 0) : 0;
    const existingExpress = booking.expressDeliveryAccepted ? (booking.expressDeliveryFee || 0) : 0;
    booking.basePackageTotal = Math.max(0, (booking.totalAmount || 0) - existingTravel - existingExpress);
  }

  const travelCost = (booking.travelCharges && booking.travelCharges.enabled) ? (booking.travelCharges.totalTravelCost || 0) : 0;
  const expressCost = booking.expressDeliveryAccepted ? (booking.expressDeliveryFee || 0) : 0;
  
  booking.totalAmount = booking.basePackageTotal + travelCost + expressCost;
  
  if (booking.isFullPaid) {
    booking.balanceDue = 0;
  } else if (booking.isAdvanceVerified) {
    booking.balanceDue = Math.max(0, booking.totalAmount - (booking.advancePaid || 0));
  } else {
    // Before advance verification, balance due equals totalAmount
    booking.balanceDue = booking.totalAmount;
  }
}

function adminVerifyPayment() {
  const booking = getActiveBooking();
  if (!booking) return;

  booking.isAdvanceVerified = true;
  booking.isAdvanceRejected = false;
  booking.advanceRejectReason = "";
  booking.isBookingConfirmed = true;
  recalculateBookingFinancials(booking);
  if (booking.balanceDue === 0) {
    booking.isFullPaid = true;
  }

  saveDataToStorage(booking);
  loadAdminData();
  showToast("Advance Verified & Confirmed!", `Booking ${booking.id} confirmed. Advance deducted.`);

  // Prompt / Trigger Letterhead Invoice on WhatsApp
  sendInvoiceWhatsApp("advance");
}

function adminRejectSlip(type) {
  const booking = getActiveBooking();
  if (!booking) return;

  const reason = prompt(
    type === 'advance' 
      ? "Enter rejection reason for Advance Slip (e.g. Unclear photo, Deposit not in bank statement):"
      : "Enter rejection reason for Balance Settlement Slip:"
  );
  if (reason === null) return;

  if (type === 'advance') {
    booking.isAdvanceVerified = false;
    booking.isAdvanceRejected = true;
    booking.advanceRejectReason = reason.trim() || "Slip unreadable or not verified";
  } else {
    booking.balanceSlipVerified = false;
    booking.balanceSlipRejected = true;
    booking.balanceRejectReason = reason.trim() || "Slip unreadable or not verified";
  }

  saveDataToStorage(booking);
  loadAdminData();
  showToast("Slip Rejected", `Notification logged for ${booking.id}`);

  // Send WhatsApp notification of rejection to couple
  const phone = booking.primaryPhone || booking.bridePhone || booking.groomPhone;
  if (phone) {
    const msg = `⚠️ *OCTEWYA Cinematography - Payment Verification Notice*
Dear ${booking.coupleTitle},
We reviewed your payment slip for Booking ${booking.id}. Unfortunately, we could not verify it due to:
"${reason.trim() || 'Slip unreadable'}"

Please log into your client portal and upload a clear bank receipt screenshot:
${getBaseUrl()}index.html?tab=portal&id=${booking.id}

Thank you,
- Dasun Kavinda (071 4 277 276)`;
    sendCleanWhatsAppMessage(phone, msg);
  }
}

function adminVerifyFullPayment() {
  const booking = getActiveBooking();
  if (!booking) return;

  booking.balanceSlipVerified = true;
  booking.balanceSlipRejected = false;
  booking.balanceRejectReason = "";
  booking.isFullPaid = true;
  booking.balanceDue = 0;

  saveDataToStorage(booking);
  loadAdminData();
  showToast("Full Payment Settled", `Marked 100% settled for ${booking.coupleTitle}`);

  // Send Final Settlement Letterhead Invoice
  sendInvoiceWhatsApp("full");
}

function sendInvoiceWhatsApp(type) {
  const booking = getActiveBooking();
  if (!booking) return;

  const portalUrl = `${getBaseUrl()}index.html?tab=portal&id=${booking.id}`;
  const phone = booking.primaryPhone || booking.bridePhone || booking.groomPhone;

  let travelLine = "";
  if (booking.travelCharges && booking.travelCharges.enabled && booking.travelCharges.totalTravelCost > 0) {
    const tc = booking.travelCharges;
    const parts = [];
    if (tc.weddingCost > 0) parts.push(`Wedding ${tc.weddingKm}km: ${formatLKR(tc.weddingCost)} LKR`);
    if (tc.homecomingCost > 0) parts.push(`Homecoming ${tc.homecomingKm}km: ${formatLKR(tc.homecomingCost)} LKR`);
    if (tc.preshootCost > 0) parts.push(`Pre-shoot ${tc.preshootKm}km: ${formatLKR(tc.preshootCost)} LKR`);
    if (tc.robeCost > 0) parts.push(`ROBE ${tc.robeKm}km: ${formatLKR(tc.robeCost)} LKR`);
    if (tc.engagementCost > 0) parts.push(`Engagement ${tc.engagementKm}km: ${formatLKR(tc.engagementCost)} LKR`);
    travelLine = `\n• Travel & Outstation Charges (80 LKR/km): +${formatLKR(tc.totalTravelCost)} LKR (${parts.join(', ')})`;
  }

  let msg = "";
  if (type === "full" || booking.isFullPaid) {
    msg = `🎉 *OCTEWYA CINEMATOGRAPHY - OFFICIAL SETTLEMENT INVOICE*
Dear ${booking.coupleTitle},

Your full payment has been verified and settled!

📋 *Booking Ref:* ${booking.id}
📅 *Wedding Date:* ${booking.weddingDate}
📍 *Location:* ${booking.weddingLocation}

💰 *Payment Breakdown:*
• Base Package & Add-ons: ${formatLKR(booking.basePackageTotal || (booking.totalAmount - (booking.travelCharges?.totalTravelCost || 0)))} LKR${travelLine}
• Total Invoice Value: ${formatLKR(booking.totalAmount)} LKR
• Amount Paid: ${formatLKR(booking.totalAmount)} LKR (100% SETTLED ✓)
• Remaining Balance: 0 LKR

🌐 *Your Live Tracking Portal & Official Letterhead Document:*
${portalUrl}

Thank you for choosing OCTEWYA Cinematography!
- Dasun Kavinda (071 4 277 276)`;
  } else {
    msg = `🎉 *OCTEWYA CINEMATOGRAPHY - OFFICIAL INVOICE & BOOKING CONFIRMED*
Dear ${booking.coupleTitle},

Your advance payment has been verified and your wedding videography booking is officially confirmed!

📋 *Booking Ref:* ${booking.id}
📅 *Wedding Date:* ${booking.weddingDate}
📍 *Location:* ${booking.weddingLocation}
📦 *Selected Package:* ${booking.selectedPackage?.name || (booking.isCustomPackage ? 'Custom Package' : 'Wedding Package')}

💰 *Financial Breakdown:*
• Base Package & Add-ons: ${formatLKR(booking.basePackageTotal || (booking.totalAmount - (booking.travelCharges?.totalTravelCost || 0)))} LKR${travelLine}
• Total Package Value: ${formatLKR(booking.totalAmount)} LKR
• Advance Paid: ${formatLKR(booking.advancePaid)} LKR (VERIFIED ✓)
• Remaining Balance Due: ${formatLKR(booking.balanceDue)} LKR

🌐 *Your Live Tracking Portal & Official Letterhead Invoice:*
${portalUrl}

You can track your live production progress, countdown, and download your official letterhead invoice anytime on your portal link above.

- Dasun Kavinda (071 4 277 276)`;
  }

  sendCleanWhatsAppMessage(phone, msg);
}

function adminPromptDeleteBooking(bookingId) {
  const booking = allBookings.find(b => b.id === bookingId);
  if (!booking) return;

  const pin = prompt(`⚠️ [DELETE BOOKING]\nAre you sure you want to permanently delete:\n${booking.coupleTitle} (${bookingId})?\n\nEnter Studio Security PIN to confirm:`);
  if (!pin) return;

  const currentPin = localStorage.getItem(STORAGE_KEY_PIN) || DEFAULT_ADMIN_PIN;
  if (pin.trim() !== currentPin) {
    alert("❌ Incorrect Studio Security PIN! Deletion aborted.");
    return;
  }

  // Delete from Firestore Cloud
  if (isFirebaseReady()) {
    firestoreDb.collection("octewya_bookings").doc(bookingId).delete()
      .then(() => console.log("Deleted from Firestore:", bookingId))
      .catch(err => console.warn("Firestore delete error:", err));
  }

  // Delete locally
  allBookings = allBookings.filter(b => b.id !== bookingId);
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));

  if (currentBookingId === bookingId) {
    currentBookingId = allBookings[0]?.id || "";
  }

  loadAdminData();
  populateMasterCoupleSelector();
  showToast("Booking Deleted", `Booking ${bookingId} has been deleted.`);
}

function openBalanceSlipModalAdmin() {
  const booking = getActiveBooking();
  if (!booking || !booking.balanceSlipUrl) {
    showToast("Notice", "No balance slip uploaded yet.");
    return;
  }
  const img = document.getElementById("zoomBalanceSlipImg");
  if (img) img.src = booking.balanceSlipUrl;
  document.getElementById("balanceSlipZoomModal")?.classList.remove("hidden");
}

function closeBalanceSlipModalAdmin() {
  document.getElementById("balanceSlipZoomModal")?.classList.add("hidden");
}

let currentBalanceSlipData = null;

function openBalanceSlipModal() {
  currentBalanceSlipData = null;
  const wrap = document.getElementById("balanceSlipPreviewWrap");
  if (wrap) wrap.classList.add("hidden");
  const modal = document.getElementById("balanceSlipModal");
  if (modal) modal.classList.remove("hidden");
}

function closeBalanceSlipModal() {
  document.getElementById("balanceSlipModal")?.classList.add("hidden");
}

function previewBalanceSlip(e) {
  const file = e.target.files[0];
  if (!file) return;

  compressImage(file, 900, 0.75, function(compressedData) {
    currentBalanceSlipData = compressedData;
    const previewImg = document.getElementById("balanceSlipPreviewImg");
    if (previewImg) previewImg.src = compressedData;
    const fileName = document.getElementById("balanceSlipFileName");
    if (fileName) fileName.textContent = file.name;
    document.getElementById("balanceSlipPreviewWrap")?.classList.remove("hidden");
  });
}

function submitBalanceSlip() {
  if (!currentBalanceSlipData) {
    alert("Please select your bank slip image before submitting!");
    return;
  }
  const booking = getActiveBooking();
  if (!booking) return;

  booking.balanceSlipUrl = currentBalanceSlipData;
  booking.balanceSlipSubmitted = true;
  booking.balanceSlipVerified = false;
  booking.balanceSlipRejected = false;
  booking.balanceRejectReason = "";

  saveDataToStorage(booking);
  closeBalanceSlipModal();
  loadPortalData(booking.id);
  showToast(
    currentLang === 'si' ? "Slip එක ලැබුණා!" : "Slip Uploaded!",
    currentLang === 'si' ? "ඉතිරි මුදල් ගෙවීමේ Slip පත්‍රිකාව සාර්ථකව යොමුකරන ලදී. Studio එක විසින් Verify කරනු ඇත." : "Balance slip submitted for studio verification."
  );

  sendCleanWhatsAppMessage(
    "0714277276",
    `💳 *Client Uploaded Balance Payment Slip!*
Couple: ${booking.coupleTitle} (ID: ${booking.id})
Balance Amount: ${formatLKR(booking.balanceDue)} LKR
Primary Contact: ${booking.primaryPhone || booking.bridePhone}

👉 Open Studio Admin to review & verify:
${getBaseUrl()}admin.html`
  );
}

function toggleCustomBuilderCollapse() {
  const body = document.getElementById("customBuilderBody");
  const btn = document.getElementById("btnToggleCustomBuilder");
  if (!body) return;
  const isHidden = body.style.display === "none";
  body.style.display = isHidden ? "block" : "none";
  if (btn) btn.textContent = isHidden ? "Close Builder" : "Open Builder";
  if (isHidden) calculateCustomPackage();
}

function calculateCustomPackage() {
  let total = 0;
  const items = [
    { id: "cpWeddingVideo", priceId: "cpPriceWedding", rowId: "cpRow_wedding", name: "Wedding Video Coverage" },
    { id: "cpSameDayEdit", priceId: "cpPriceSameDay", rowId: "cpRow_sameday", name: "Same Day Edit Video" },
    { id: "cpHighlightVideo", priceId: "cpPriceHighlight", rowId: "cpRow_highlight", name: "Highlight Video / Storytelling" },
    { id: "cpHomecomingVideo", priceId: "cpPriceHomecoming", rowId: "cpRow_homecoming", name: "Homecoming Video Coverage" },
    { id: "cpEngagementVideo", priceId: "cpPriceEngagement", rowId: "cpRow_engagement", name: "Engagement Video Coverage" },
  ];

  items.forEach(it => {
    const chk = document.getElementById(it.id);
    const priceInput = document.getElementById(it.priceId);
    const row = document.getElementById(it.rowId);
    if (chk && priceInput) {
      if (chk.checked) {
        total += Number(priceInput.value) || 0;
        if (row) row.classList.add("active");
      } else {
        if (row) row.classList.remove("active");
      }
    }
  });

  const display = document.getElementById("cpCalculatedTotal");
  if (display) display.textContent = `${formatLKR(total)} LKR`;
  return total;
}

function applyCustomPackageToBooking() {
  const items = [
    { id: "cpWeddingVideo", priceId: "cpPriceWedding", name: "Wedding Video Coverage" },
    { id: "cpSameDayEdit", priceId: "cpPriceSameDay", name: "Same Day Edit Video" },
    { id: "cpHighlightVideo", priceId: "cpPriceHighlight", name: "Highlight Video / Storytelling" },
    { id: "cpHomecomingVideo", priceId: "cpPriceHomecoming", name: "Homecoming Video Coverage" },
    { id: "cpEngagementVideo", priceId: "cpPriceEngagement", name: "Engagement Video Coverage" },
  ];

  const selectedCustomItems = [];
  let total = 0;

  items.forEach(it => {
    const chk = document.getElementById(it.id);
    const priceInput = document.getElementById(it.priceId);
    if (chk && chk.checked && priceInput) {
      const price = Number(priceInput.value) || 0;
      selectedCustomItems.push({ name: it.name, price });
      total += price;
    }
  });

  if (selectedCustomItems.length === 0) {
    alert("Please select at least one video service for the custom package!");
    return;
  }

  currentSelection.weddingPackage = {
    id: "custom_pkg",
    name: "Custom Wedding Cinematography Package",
    price: total,
    badge: "Custom Package",
    isCustom: true,
    customItems: selectedCustomItems,
    features: selectedCustomItems.map(it => `${it.name} (${formatLKR(it.price)} LKR)`)
  };

  // Deselect standard packages
  document.querySelectorAll(".package-card").forEach(c => c.classList.remove("selected"));

  // Check terms checkbox automatically
  const termsChk = document.getElementById("termsCheck");
  if (termsChk) termsChk.checked = true;
  toggleBookingFormState();

  updateQuoteSummary();
  showToast("Custom Package Applied!", `Total: ${formatLKR(total)} LKR. Ready for booking.`);

  // Scroll to booking form
  const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
  if (formSec) {
    formSec.style.display = "block";
    formSec.scrollIntoView({ behavior: "smooth" });
  }
}

function handlePrimaryContactChange() {
  const selected = document.querySelector('input[name="primaryContactOption"]:checked')?.value;
  const otherInput = document.getElementById("primaryWhatsApp");
  if (otherInput) {
    otherInput.style.display = (selected === "other") ? "block" : "none";
    if (selected === "other") otherInput.focus();
  }
}

function toggleAdminTravelCharges(val) {
  const container = document.getElementById("adminTravelInputsContainer");
  if (container) container.style.display = val ? "block" : "none";
  if (!val) {
    closeAdminTravelCharges();
  }
}

function calculateAdminTravel() {
  const getKm = (id) => Math.max(0, parseFloat(document.getElementById(id)?.value) || 0);
  const setCost = (id, cost) => {
    const el = document.getElementById(id);
    if (el) el.value = cost > 0 ? cost : "";
  };

  const wKm = getKm("trWeddingKm");
  const hKm = getKm("trHomecomingKm");
  const pKm = getKm("trPreshootKm");
  const rKm = getKm("trRobeKm");
  const eKm = getKm("trEngagementKm");

  setCost("trWeddingCost", wKm * 80);
  setCost("trHomecomingCost", hKm * 80);
  setCost("trPreshootCost", pKm * 80);
  setCost("trRobeCost", rKm * 80);
  setCost("trEngagementCost", eKm * 80);

  calculateAdminTravelTotalManual();
}

function calculateAdminTravelTotalManual() {
  const getCost = (id) => Math.max(0, parseFloat(document.getElementById(id)?.value) || 0);
  const total = getCost("trWeddingCost") + getCost("trHomecomingCost") + getCost("trPreshootCost") + getCost("trRobeCost") + getCost("trEngagementCost");
  const display = document.getElementById("trCalculatedTotal") || document.getElementById("trTotalTravelCostDisplay");
  if (display) display.textContent = `${formatLKR(total)} LKR`;
  return total;
}

function adminSaveTravelCharges() {
  const booking = getActiveBooking();
  if (!booking) {
    alert("No active booking selected!");
    return;
  }

  const getKm = (id) => Math.max(0, parseFloat(document.getElementById(id)?.value) || 0);
  const getCost = (id) => Math.max(0, parseFloat(document.getElementById(id)?.value) || 0);

  const weddingKm = getKm("trWeddingKm");
  const weddingCost = getCost("trWeddingCost");
  const homecomingKm = getKm("trHomecomingKm");
  const homecomingCost = getCost("trHomecomingCost");
  const preshootKm = getKm("trPreshootKm");
  const preshootCost = getCost("trPreshootCost");
  const robeKm = getKm("trRobeKm");
  const robeCost = getCost("trRobeCost");
  const engagementKm = getKm("trEngagementKm");
  const engagementCost = getCost("trEngagementCost");
  const totalTravelCost = weddingCost + homecomingCost + preshootCost + robeCost + engagementCost;

  booking.travelCharges = {
    enabled: true,
    ratePerKm: 80,
    weddingKm,
    weddingCost,
    homecomingKm,
    homecomingCost,
    preshootKm,
    preshootCost,
    robeKm,
    robeCost,
    engagementKm,
    engagementCost,
    totalTravelCost,
    updatedAt: new Date().toISOString()
  };

  const travelToggle = document.getElementById("adminTravelToggle");
  if (travelToggle) travelToggle.checked = true;

  recalculateBookingFinancials(booking);
  saveDataToStorage(booking);
  loadAdminData();
  showToast("Travel Charges Saved", `Total of ${formatLKR(totalTravelCost)} LKR added to booking.`);
}

function closeAdminTravelCharges() {
  const booking = getActiveBooking();
  if (!booking) return;

  booking.travelCharges = {
    enabled: false,
    ratePerKm: 80,
    weddingKm: 0,
    weddingCost: 0,
    homecomingKm: 0,
    homecomingCost: 0,
    preshootKm: 0,
    preshootCost: 0,
    robeKm: 0,
    robeCost: 0,
    engagementKm: 0,
    engagementCost: 0,
    totalTravelCost: 0,
    updatedAt: new Date().toISOString()
  };

  const travelToggle = document.getElementById("adminTravelToggle");
  if (travelToggle) travelToggle.checked = false;
  const travelContainer = document.getElementById("adminTravelInputsContainer");
  if (travelContainer) travelContainer.style.display = "none";

  const setVal = (id) => { const el = document.getElementById(id); if (el) el.value = ""; };
  setVal("trWeddingKm");
  setVal("trWeddingCost");
  setVal("trHomecomingKm");
  setVal("trHomecomingCost");
  setVal("trPreshootKm");
  setVal("trPreshootCost");
  setVal("trRobeKm");
  setVal("trRobeCost");
  setVal("trEngagementKm");
  setVal("trEngagementCost");
  const display = document.getElementById("trCalculatedTotal") || document.getElementById("trTotalTravelCostDisplay");
  if (display) display.textContent = "0 LKR";

  recalculateBookingFinancials(booking);
  saveDataToStorage(booking);
  loadAdminData();
  showToast("Travel Charges Closed", "Travel charges removed from booking.");
}

function toggleAdminExpressDelivery(val) {
  const booking = getActiveBooking();
  if (!booking) return;
  booking.expressDeliveryAvailable = val;
  saveDataToStorage(booking);
  loadAdminData();
  showToast("Express Service Setting", val ? "Enabled for client view" : "Disabled");
}

function copyPortalLink() {
  const input = document.getElementById("adminDirectPortalLink");
  input.select();
  navigator.clipboard.writeText(input.value);
  showToast("Link Copied!", "Direct portal link copied to clipboard.");
}

function testOpenPortal() {
  const input = document.getElementById("adminDirectPortalLink");
  window.open(input.value, "_blank");
}

// ==========================================
// 10. FIXED WHATSAPP MESSAGING (NO 404!)
// ==========================================

function sendCleanWhatsAppMessage(phoneNum, text) {
  // Strip non-digits
  let clean = phoneNum.replace(/\D/g, '');
  if (clean.startsWith('0')) {
    clean = '94' + clean.slice(1);
  } else if (!clean.startsWith('94')) {
    clean = '94' + clean;
  }

  // Use official api.whatsapp.com for 100% desktop & mobile compatibility
  const url = `https://api.whatsapp.com/send?phone=${clean}&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function sendWhatsAppTemplate(type) {
  const booking = getActiveBooking();
  const portalUrl = `${getBaseUrl()}portal.html?id=${booking.id}`;
  let msg = "";

  if (type === "booking_confirmed") {
    msg = `🎉 *OCTEWYA Cinematography - Booking Confirmed!*
Dear ${booking.coupleTitle},
Your wedding videography booking for *${booking.weddingDate}* at *${booking.weddingLocation}* is successfully confirmed.
Advance Paid: ${formatLKR(booking.advancePaid)} LKR

👉 *Your Private Live Tracking Portal:*
${portalUrl}

You can track your live production progress, countdown, and delivery details on this link anytime!
- Dasun Kavinda (071 4 277 276)`;
  } else if (type === "payment_reminder") {
    msg = `🔔 *OCTEWYA Cinematography - Payment Reminder*
Dear ${booking.coupleTitle},
This is a gentle reminder that the remaining balance of *${formatLKR(booking.balanceDue)} LKR* is due prior to your wedding day on ${booking.weddingDate}.
Please feel free to contact us for any payment assistance.
- Dasun Kavinda`;
  } else if (type === "video_ready") {
    msg = `🎬 *YOUR WEDDING VIDEO IS READY!*
Dear ${booking.coupleTitle},
We are thrilled to let you know that your cinematic wedding video is now complete and ready for viewing!
Please log into your client dashboard to select your delivery preference (USB or Cloud Drive):
${portalUrl}
- OCTEWYA Team`;
  }

  sendCleanWhatsAppMessage(booking.bridePhone, msg);
}

function openDirectWhatsApp() {
  const booking = getActiveBooking();
  const msg = `Hello Dasun, I'm ${booking.coupleTitle} (Booking ID: ${booking.id}). I have a question regarding our wedding videography.`;
  sendCleanWhatsAppMessage("0714277276", msg);
}

// ==========================================
// 11. GOOGLE CALENDAR SYNC
// ==========================================

function syncWithGoogleCalendar() {
  const booking = getActiveBooking();
  const eventTitle = encodeURIComponent(`OCTEWYA Wedding: ${booking.coupleTitle}`);
  const dateStr = booking.weddingDate.replace(/-/g, "");
  const dates = `${dateStr}T060000/${dateStr}T230000`;
  
  const details = encodeURIComponent(`
OCTEWYA CINEMATOGRAPHY
Couple: ${booking.coupleTitle}
Package: ${booking.selectedPackage?.name}
Location: ${booking.weddingLocation}
Bride: ${booking.bridePhone} | Groom: ${booking.groomPhone}
Advance: ${formatLKR(booking.advancePaid)} LKR | Balance: ${formatLKR(booking.balanceDue)} LKR
Portal Link: ${getBaseUrl()}portal.html?id=${booking.id}
  `.trim());

  const location = encodeURIComponent(booking.weddingLocation);
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${dates}&details=${details}&location=${location}`;
  window.open(gCalUrl, "_blank");
}

function downloadICalFile() {
  const booking = getActiveBooking();
  const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OCTEWYA Cinematography//Wedding Portal//EN
BEGIN:VEVENT
SUMMARY:OCTEWYA Wedding: ${booking.coupleTitle}
DESCRIPTION:Package: ${booking.selectedPackage?.name}\\nBride: ${booking.bridePhone}\\nGroom: ${booking.groomPhone}\\nBooking ID: ${booking.id}
LOCATION:${booking.weddingLocation}
DTSTART:${booking.weddingDate.replace(/-/g, "")}T060000
DTEND:${booking.weddingDate.replace(/-/g, "")}T230000
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icalContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `OCTEWYA_${booking.coupleTitle.replace(/[^a-zA-Z0-9]/g, "_")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==========================================
// 12. COUNTDOWNS & MODALS
// ==========================================

function startGlobalCountdowns() {
  setInterval(() => {
    const booking = getActiveBooking();
    if (!booking) return;

    updateTimerBoxes(booking.weddingDate, "wdDays", "wdHours", "wdMins", "wdSecs");
    if (booking.preshootDate) {
      updateTimerBoxes(booking.preshootDate, "psDays", "psHours", "psMins", "psSecs");
    }
  }, 1000);
}

function updateTimerBoxes(targetDateStr, dId, hId, mId, sId) {
  if (!targetDateStr) return;
  const elem = document.getElementById(dId);
  if (!elem) return;

  const target = new Date(`${targetDateStr}T08:00:00`).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById(dId).textContent = "00";
    document.getElementById(hId).textContent = "00";
    document.getElementById(mId).textContent = "00";
    document.getElementById(sId).textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById(dId).textContent = String(days).padStart(2, '0');
  document.getElementById(hId).textContent = String(hours).padStart(2, '0');
  document.getElementById(mId).textContent = String(mins).padStart(2, '0');
  document.getElementById(sId).textContent = String(secs).padStart(2, '0');
}

// Modals
function openTermsModal() {
  renderTermsModalContent();
  document.getElementById("termsModal")?.classList.remove("hidden");
}

function renderTermsModalContent() {
  if (typeof TERMS_AND_CONDITIONS === 'undefined') return;
  const dict = TERMS_AND_CONDITIONS[currentLang] || TERMS_AND_CONDITIONS.en;
  const modal = document.getElementById("termsModal");
  if (!modal) return;

  const body = modal.querySelector(".terms-content");
  if (body) {
    body.innerHTML = `
      <h4 style="color: var(--gold); font-size: 16px; margin-bottom: 4px;">${dict.title}</h4>
      <p style="color: var(--gold-light); font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">${dict.subtitle}</p>
      <p class="terms-lead" style="color: var(--text-muted); font-size: 13.5px; margin-bottom: 16px;">${dict.lead}</p>
      
      <div class="terms-list" style="display: flex; flex-direction: column; gap: 14px;">
        ${dict.items.map(it => `
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 12px 16px; border-radius: 6px;">
            <strong style="color: var(--gold); font-size: 14px; display: block; margin-bottom: 4px;">${it.title}</strong>
            <span style="color: var(--text-main); font-size: 13px; line-height: 1.6; display: block;">${it.text}</span>
          </div>
        `).join("")}
      </div>

      <div class="terms-acceptance-note mt-3" style="background: var(--gold-dim); border: 1px solid var(--border-gold); padding: 12px 16px; border-radius: 6px; color: var(--gold-light); font-size: 12.5px; display: flex; align-items: center; gap: 10px;">
        <i class="fa-solid fa-circle-check" style="color: var(--gold); font-size: 20px;"></i>
        <span>${dict.acceptanceNote}</span>
      </div>
    `;
  }

  const footer = modal.querySelector(".modal-footer");
  if (footer) {
    footer.innerHTML = `
      <button class="btn-outline-gold" style="border-color: rgba(255,255,255,0.2); color: var(--text-muted);" onclick="rejectTerms()">${dict.btnDisagree}</button>
      <button class="btn-primary-gold" onclick="acceptTermsFromModal()">${dict.btnAgree}</button>
    `;
  }
}

function closeTermsModal() {
  document.getElementById("termsModal")?.classList.add("hidden");
}

function acceptTermsFromModal() {
  const chk = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  if (chk) chk.checked = true;
  toggleBookingFormState();
  closeTermsModal();
  if (hasAnyPackageSelected()) {
    const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
    if (formSec) {
      setTimeout(() => {
        formSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }
}

function rejectTerms() {
  const chk = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  if (chk) chk.checked = false;
  toggleBookingFormState();
  closeTermsModal();
}

function openEditDetailsModal() {
  const booking = getActiveBooking();
  document.getElementById("editWeddingDate").value = booking.weddingDate;
  document.getElementById("editPreshootDate").value = booking.preshootDate || "";
  document.getElementById("editPreshootLocation").value = booking.preshootLocation || "";
  document.getElementById("editDetailsModal")?.classList.remove("hidden");
}

function closeEditDetailsModal() {
  document.getElementById("editDetailsModal")?.classList.add("hidden");
}

function saveClientChanges() {
  const booking = getActiveBooking();
  const oldDate = booking.weddingDate;
  booking.weddingDate = document.getElementById("editWeddingDate").value;
  booking.preshootDate = document.getElementById("editPreshootDate").value;
  booking.preshootLocation = document.getElementById("editPreshootLocation").value.trim();
  const reason = document.getElementById("editChangeReason").value.trim();

  saveDataToStorage();
  closeEditDetailsModal();
  loadPortalData(booking.id);
  showToast("Dates Updated", "Changes saved & studio notified.");

  sendCleanWhatsAppMessage(
    "0714277276",
    `⚠️ *Client Changed Booking Dates!*
Couple: ${booking.coupleTitle} (ID: ${booking.id})
Old Wedding Date: ${oldDate}
New Wedding Date: ${booking.weddingDate}
Pre-Shoot Date: ${booking.preshootDate || 'N/A'}
Reason: ${reason || 'Updated on portal'}`
  );
}

function openSlipModal() {
  const booking = getActiveBooking();
  document.getElementById("zoomSlipImg").src = booking.bankSlipUrl;
  document.getElementById("slipZoomModal")?.classList.remove("hidden");
}

function closeSlipModal() {
  document.getElementById("slipZoomModal")?.classList.add("hidden");
}

let toastTimeout;
function showToast(title, message) {
  const toast = document.getElementById("liveToast");
  if (!toast) return;
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastMessage").textContent = message;

  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    closeToast();
  }, 4500);
}

function closeToast() {
  document.getElementById("liveToast")?.classList.add("hidden");
}

function formatLKR(val) {
  return Number(val || 0).toLocaleString("en-US");
}

function formatDatePretty(dateStr) {
  if (!dateStr) return currentLang === 'si' ? "තීරණය කර නොමැත" : "To be decided";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}
