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
  { id: "addon_drone", name: "DRONE Footage", price: 15000, note: "Aerial cinematography" },
  { id: "addon_church", name: "Church Function", price: 15000, note: "Only if a poruwa ceremony is included" },
  { id: "addon_rob", name: "ROB Shoot", price: 20000, note: "Registration of Marriage" },
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
    title: "Editing Started (Hadanna Patan Gatta)",
    titleSi: "වීඩියෝව සකස් කිරීමට ආරම්භ කිරීම",
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
    title: "Ready for Viewing (Balanna Suudanam)",
    titleSi: "නැරඹීමට සූදානම් (Ready for Viewing)",
    meta: "Handover & Delivery unlock",
    icon: "fa-solid fa-circle-check"
  }
];

// ==========================================
// 2. STORAGE & STATE
// ==========================================

const STORAGE_KEY_BOOKINGS = "OCTEWYA_BOOKINGS_V2";
const STORAGE_KEY_LANG = "OCTEWYA_LANG";

let currentLang = localStorage.getItem(STORAGE_KEY_LANG) || "si";
let allBookings = [];
let currentBookingId = "";

// Initial Demo Bookings
const DEFAULT_BOOKINGS = [
  {
    id: "OCT-2026-001",
    coupleTitle: "Sachini & Dasun",
    brideName: "Sachini",
    groomName: "Dasun",
    bridePhone: "0714277276",
    groomPhone: "0771234567",
    weddingDate: "2026-04-28",
    weddingLocation: "Grand Monarch, Thalawathugoda",
    homecomingDate: "",
    homecomingLocation: "",
    preshootDate: "2026-03-20",
    preshootLocation: "Galle Fort",
    selectedPackage: WEDDING_PACKAGES[2], // Package 03 (115k)
    selectedHomecoming: null,
    selectedEngagement: null,
    selectedPreshoot: PRESHOOT_PACKAGES[0], // Pre-shoot 1 (35k)
    selectedAddons: [ADDONS_CATALOG[0]], // Drone (15k)
    totalAmount: 165000,
    advancePaid: 10000,
    isAdvanceVerified: true,
    isFullPaid: false,
    balanceDue: 155000,
    notes: "Please capture aerial views of the entrance.",
    bankSlipUrl: "https://placehold.co/600x400/181b26/d4af37?text=Sampath+Bank+Slip+10000+LKR",
    expressDeliveryAvailable: true,
    expressDeliveryAccepted: false,
    weddingStepCompleted: 3,
    preshootStepCompleted: 6,
    deliveryMethod: "usb_studio",
    courierAddress: "",
    isAcceptedByClient: false,
    revisionNotes: "",
    clientRating: 5,
    clientReview: "Dasun Kavinda's cinematography is magical! The colors and angles made our memories look like a movie.",
    createdAt: "2026-02-01"
  },
  {
    id: "OCT-2026-002",
    coupleTitle: "Kavindi & Nimesh",
    brideName: "Kavindi",
    groomName: "Nimesh",
    bridePhone: "0785551234",
    groomPhone: "0719876543",
    weddingDate: "2026-11-12",
    weddingLocation: "Kingsbury Hotel, Colombo",
    homecomingDate: "2026-11-15",
    homecomingLocation: "Earl's Regency, Kandy",
    preshootDate: "",
    preshootLocation: "",
    selectedPackage: WEDDING_PACKAGES[3], // VIP (135k)
    selectedHomecoming: HOMECOMING_PACKAGES[1], // HC 02 (75k)
    selectedEngagement: null,
    selectedPreshoot: null,
    selectedAddons: [ADDONS_CATALOG[0], ADDONS_CATALOG[3]],
    totalAmount: 233000,
    advancePaid: 15000, // Custom advance test
    isAdvanceVerified: true,
    isFullPaid: false,
    balanceDue: 218000,
    notes: "Urgent wedding this week!",
    bankSlipUrl: "https://placehold.co/600x400/181b26/d4af37?text=BOC+Slip+15000+LKR",
    expressDeliveryAvailable: true,
    expressDeliveryAccepted: false,
    weddingStepCompleted: 1,
    preshootStepCompleted: 0,
    deliveryMethod: "",
    courierAddress: "",
    isAcceptedByClient: false,
    revisionNotes: "",
    clientRating: 0,
    clientReview: "",
    createdAt: "2026-02-05"
  }
];

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
  applyLanguage(currentLang);
  checkAdminAuth();

  const urlParams = new URLSearchParams(window.location.search);
  const queryId = urlParams.get("id");
  const queryTab = urlParams.get("tab");

  if (queryId && allBookings.some(b => b.id === queryId)) {
    currentBookingId = queryId;
  } else if (!currentBookingId) {
    currentBookingId = allBookings[0]?.id || "OCT-2026-001";
  }

  // Check what components are on this page
  const isMasterAdminPage = document.getElementById("adminMasterNav");
  const isClientPage = document.getElementById("clientNavTabs");
  const isBookingView = document.getElementById("bookingView");
  const isPortalView = document.getElementById("portalCoupleTitle");
  const isAdminTable = document.getElementById("adminBookingsTableBody");

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
    saveDataToStorage();
  }
}

function saveDataToStorage() {
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(allBookings));
}

function getActiveBooking() {
  return allBookings.find(b => b.id === currentBookingId) || allBookings[0];
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
    itemsList.innerHTML = `<div class="quote-empty">${currentLang === 'si' ? 'කරුණාකර පැකේජයක් තෝරන්න' : 'Please select a wedding package'}</div>`;
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

  if (totalEl) totalEl.textContent = `${formatLKR(total)} LKR`;
  if (advanceEl) advanceEl.textContent = `${formatLKR(advance)} LKR`;
  if (balanceEl) balanceEl.textContent = `${formatLKR(balance)} LKR`;

  // Dynamic show/hide
  const hcGroup = document.getElementById("homecomingDateGroup");
  if (hcGroup) hcGroup.style.display = currentSelection.homecomingPackage ? "block" : "none";

  const psNotice = document.getElementById("preshootDate");
  if (psNotice && psNotice.closest('.form-group')) {
    psNotice.closest('.form-group').style.display = currentSelection.preshootPackage ? "block" : "none";
  }

  toggleBookingFormState();
}

function toggleTermsAcceptance(checked) {
  toggleBookingFormState();
}

function toggleBookingFormState() {
  const tcCheck = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  const tcAgreed = tcCheck ? tcCheck.checked : false;
  const hasPackage = !!currentSelection.weddingPackage;
  const btn = document.getElementById("btnProceedBooking");

  if (btn) {
    if (hasPackage && tcAgreed) {
      btn.removeAttribute("disabled");
      btn.classList.add("ready");
    } else if (hasPackage) {
      btn.removeAttribute("disabled"); // Keep clickable so it guides the user
      btn.classList.remove("ready");
    } else {
      btn.setAttribute("disabled", "true");
      btn.classList.remove("ready");
    }
  }

  const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
  if (formSec) {
    if (hasPackage) {
      formSec.style.display = "block";
      formSec.classList.remove("hidden");
    } else {
      formSec.style.display = "none";
      formSec.classList.add("hidden");
    }
  }
}

function scrollToBookingForm() {
  const hasPackage = !!currentSelection.weddingPackage;
  const tcCheck = document.getElementById("termsCheck") || document.getElementById("tcCheck");
  const tcAgreed = tcCheck ? tcCheck.checked : false;

  if (!hasPackage) {
    showToast("දැනුම්දීම", currentLang === 'si' ? "කරුණාකර ප්‍රධාන මංගල පැකේජයක් තෝරන්න." : "Please select a wedding package first.");
    return;
  }

  const formSec = document.getElementById("bookingFormSection") || document.getElementById("bookingDetailsSection");
  if (formSec) {
    formSec.style.display = "block";
    formSec.classList.remove("hidden");
    formSec.scrollIntoView({ behavior: 'smooth' });
  }

  if (!tcAgreed) {
    showToast("Terms & Conditions", currentLang === 'si' ? "කරුණාකර නියමයන් සහ කොන්දේසි (Terms) එකඟ වීමට ටික් කරන්න." : "Please tick the Terms & Conditions checkbox.");
    tcCheck?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Slip Upload
function previewBankSlip(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    currentSelection.bankSlipData = evt.target.result;
    document.getElementById("slipPreviewImg").src = evt.target.result;
    document.getElementById("slipFileName").textContent = file.name;
    document.getElementById("slipPreviewContainer").classList.remove("hidden");
    document.getElementById("slipUploadArea").classList.add("hidden");
  };
  reader.readAsDataURL(file);
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

  if (!currentSelection.weddingPackage) {
    alert("Please select a main wedding package!");
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

  let total = currentSelection.weddingPackage.price;
  if (currentSelection.homecomingPackage) total += currentSelection.homecomingPackage.price;
  if (currentSelection.engagementPackage) total += currentSelection.engagementPackage.price;
  if (currentSelection.preshootPackage) total += currentSelection.preshootPackage.price;
  currentSelection.addons.forEach(a => total += a.price);

  const balanceDue = Math.max(0, total - actualAdvance);
  const newId = `OCT-${new Date().getFullYear()}-${String(allBookings.length + 1).padStart(3, '0')}`;

  const newBooking = {
    id: newId,
    coupleTitle: `${brideName} & ${groomName}`,
    brideName,
    groomName,
    bridePhone,
    groomPhone,
    weddingDate,
    weddingLocation,
    homecomingDate,
    homecomingLocation,
    preshootDate,
    preshootLocation,
    selectedPackage: currentSelection.weddingPackage,
    selectedHomecoming: currentSelection.homecomingPackage,
    selectedEngagement: currentSelection.engagementPackage,
    selectedPreshoot: currentSelection.preshootPackage,
    selectedAddons: [...currentSelection.addons],
    totalAmount: total,
    advancePaid: actualAdvance,
    isAdvanceVerified: false,
    isFullPaid: false,
    balanceDue,
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
  saveDataToStorage();

  if (document.getElementById("masterCoupleSelector")) {
    populateMasterCoupleSelector();
  }

  // If in multi-panel client view:
  if (document.getElementById("clientNavTabs")) {
    currentBookingId = newId;
    switchClientTab("portal");
    showToast(
      currentLang === "si" ? "Booking එක සාර්ථකව සම්පූර්ණයි!" : "Booking Successfully Submitted!",
      currentLang === "si" ? `ඔබගේ Booking ID: ${newId}` : `Your Booking ID: ${newId}`
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

function loadPortalData(bookingId) {
  const booking = allBookings.find(b => b.id === bookingId) || allBookings[0];
  if (!booking) return;

  document.getElementById("portalCoupleTitle").textContent = booking.coupleTitle;
  document.getElementById("portalLocation").textContent = booking.weddingLocation;
  document.getElementById("portalBookingId").textContent = booking.id;

  let summary = booking.selectedPackage?.name || "Wedding Package";
  if (booking.selectedHomecoming) summary += ` + ${booking.selectedHomecoming.name}`;
  if (booking.selectedPreshoot) summary += ` + Pre-Shoot`;
  if (booking.selectedAddons?.length > 0) summary += ` + ${booking.selectedAddons.length} Add-ons`;
  document.getElementById("portalPackageSummary").textContent = summary;

  document.getElementById("portalWeddingDateFormatted").textContent = formatDatePretty(booking.weddingDate);

  // Financials
  document.getElementById("portalTotalAmount").textContent = `${formatLKR(booking.totalAmount)} LKR`;
  document.getElementById("portalAdvancePaid").textContent = `${formatLKR(booking.advancePaid)} LKR`;

  const balDueElem = document.getElementById("portalBalanceDue");
  balDueElem.textContent = `${formatLKR(booking.balanceDue)} LKR`;

  const balBox = document.getElementById("balanceMetricBox");
  if (booking.isFullPaid || booking.balanceDue <= 0) {
    balBox.className = "total-row highlight";
    balDueElem.textContent = "0 LKR (Settled)";
  }

  // Items list
  const itemsList = document.getElementById("portalPackageItemsList");
  const items = [];
  if (booking.selectedPackage) items.push(booking.selectedPackage.name);
  if (booking.selectedHomecoming) items.push(booking.selectedHomecoming.name);
  if (booking.selectedEngagement) items.push(booking.selectedEngagement.name);
  if (booking.selectedPreshoot) items.push(booking.selectedPreshoot.name);
  booking.selectedAddons?.forEach(a => items.push(a.name));
  itemsList.innerHTML = items.map(it => `<li><i class="fa-solid fa-angle-right"></i> ${it}</li>`).join("");

  evaluatePaymentAlert(booking);

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

  // Super Fast Delivery
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

// Super Fast Delivery
function evaluateExpressDeliveryCard(booking) {
  const card = document.getElementById("expressDeliveryCard");
  const offerBox = document.getElementById("expressOfferDetails");
  if (!card || !offerBox) return;

  if (!booking.expressDeliveryAvailable || booking.expressDeliveryAccepted || booking.weddingStepCompleted >= 2) {
    card.style.display = "none";
    return;
  }

  const now = new Date();
  const weddingDay = new Date(booking.weddingDate);
  const diffDays = Math.ceil((weddingDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays > 2) {
    card.style.display = "none";
    return;
  }

  card.style.display = "block";
  const isPkg3OrVIP = booking.selectedPackage?.id === "pkg_03" || booking.selectedPackage?.id === "pkg_vip";
  const daysText = isPkg3OrVIP ? "Within 3 Days (දින 3ක් ඇතුළත)" : "Within 2 Days (දින 2ක් ඇතුළත)";
  const cost = isPkg3OrVIP ? 15000 : 10000;

  offerBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h4 style="color: #fff; font-size: 15px;">Fast-Track Express Premiere Delivery</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
          Completed & Delivered in <strong>${daysText}</strong>.
        </p>
      </div>
      <div class="price-val gold" style="font-size: 20px;">+${formatLKR(cost)} LKR</div>
    </div>
  `;
}

function acceptExpressDelivery() {
  const booking = getActiveBooking();
  const isPkg3OrVIP = booking.selectedPackage?.id === "pkg_03" || booking.selectedPackage?.id === "pkg_vip";
  const cost = isPkg3OrVIP ? 15000 : 10000;

  booking.expressDeliveryAccepted = true;
  booking.totalAmount += cost;
  booking.balanceDue += cost;
  saveDataToStorage();

  loadPortalData(booking.id);
  showToast("Express Delivery Confirmed!", `Fast-Track Delivery commitment added.`);

  sendCleanWhatsAppMessage(
    "0714277276",
    `⚡ *Super Fast Delivery Requested!*
Couple: ${booking.coupleTitle} (ID: ${booking.id})
Wedding Date: ${booking.weddingDate}
Delivery Commitment: ${isPkg3OrVIP ? '3 Days (+15,000 LKR)' : '2 Days (+10,000 LKR)'}`
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

// ==========================================
// 9. STUDIO ADMIN PANEL (SCALABLE & UNLIMITED)
// ==========================================

function loadAdminData() {
  const activeBooking = getActiveBooking();
  if (!activeBooking) return;

  // Stats
  document.getElementById("statTotalBookings").textContent = allBookings.length;
  document.getElementById("statActiveProjects").textContent = allBookings.filter(b => b.weddingStepCompleted < 6).length;
  document.getElementById("statDelivered").textContent = allBookings.filter(b => b.weddingStepCompleted >= 6).length;

  document.getElementById("adminActiveCoupleLabel").textContent = `Active: ${activeBooking.coupleTitle}`;
  document.getElementById("consoleCoupleTitle").textContent = `${activeBooking.coupleTitle} (${activeBooking.id})`;

  // Render Table with Filter
  renderAdminTable(allBookings);

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

  // Slip & Payments
  document.getElementById("adminSlipImg").src = activeBooking.bankSlipUrl;
  document.getElementById("adminPaymentMetrics").innerHTML = `
    <div><strong>Total:</strong> ${formatLKR(activeBooking.totalAmount)} LKR</div>
    <div><strong>Paid:</strong> ${formatLKR(activeBooking.advancePaid)} LKR (${activeBooking.isAdvanceVerified ? 'Verified ✓' : 'Unverified'})</div>
    <div><strong>Balance:</strong> ${formatLKR(activeBooking.balanceDue)} LKR (${activeBooking.isFullPaid ? 'Settled ✓' : 'Pending'})</div>
  `;
  document.getElementById("adminEditPaidAmount").value = activeBooking.advancePaid;

  // Express Toggle
  const expressToggle = document.getElementById("adminExpressToggle");
  expressToggle.checked = !!activeBooking.expressDeliveryAvailable;
  document.getElementById("adminExpressStatusText").textContent = activeBooking.expressDeliveryAvailable 
    ? "Status: Available (Visible 1 day prior)" 
    : "Status: Unavailable (Off)";

function getBaseUrl() {
  const path = window.location.pathname;
  const basePath = path.substring(0, path.lastIndexOf("/") + 1);
  return `${window.location.origin}${basePath}`;
}

  // Direct Secret Portal Link
  const fullPortalUrl = `${getBaseUrl()}portal.html?id=${activeBooking.id}`;
  document.getElementById("adminDirectPortalLink").value = fullPortalUrl;
}

function renderAdminTable(bookingsList) {
  const tbody = document.getElementById("adminBookingsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const activeBooking = getActiveBooking();

  bookingsList.forEach(b => {
    const isRowActive = b.id === activeBooking.id;
    const tr = document.createElement("tr");
    tr.className = isRowActive ? "active-row" : "";

    tr.innerHTML = `
      <td><strong>${b.id}</strong></td>
      <td>
        <span style="font-weight: 700; color: #fff;">${b.coupleTitle}</span><br>
        <small style="color: var(--text-muted);"><i class="fa-brands fa-whatsapp"></i> ${b.bridePhone}</small>
      </td>
      <td>${b.weddingDate}</td>
      <td>${b.selectedPackage?.name || 'Custom'}</td>
      <td>
        <span>${formatLKR(b.totalAmount)}</span> / 
        <span style="color: var(--accent-green);">${formatLKR(b.advancePaid)}</span> / 
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
        <button class="btn-gold-sm" onclick="selectBookingFromAdmin('${b.id}')">Manage</button>
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

function adminSaveCustomAdvance() {
  const booking = getActiveBooking();
  const newAdvance = Number(document.getElementById("adminEditPaidAmount").value) || 0;
  booking.advancePaid = newAdvance;
  booking.balanceDue = Math.max(0, booking.totalAmount - newAdvance);
  if (booking.balanceDue === 0) booking.isFullPaid = true;

  saveDataToStorage();
  loadAdminData();
  showToast("Paid Amount Saved", `Updated advance to ${formatLKR(newAdvance)} LKR`);
}

function adminVerifyAdvance() {
  const booking = getActiveBooking();
  booking.isAdvanceVerified = true;
  saveDataToStorage();
  loadAdminData();
  showToast("Advance Verified", "Advance receipt marked as verified.");
}

function adminMarkFullPaid() {
  const booking = getActiveBooking();
  booking.isFullPaid = true;
  booking.advancePaid = booking.totalAmount;
  booking.balanceDue = 0;
  saveDataToStorage();
  loadAdminData();
  showToast("Full Payment Settled", "Marked 100% fully paid!");
}

function toggleAdminExpressDelivery(val) {
  const booking = getActiveBooking();
  booking.expressDeliveryAvailable = val;
  saveDataToStorage();
  loadAdminData();
  showToast("Express Delivery Setting", val ? "Enabled for client view" : "Disabled");
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
