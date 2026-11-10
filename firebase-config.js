/**
 * OCTEWYA CINEMATOGRAPHY - Google Firebase Cloud Database Configuration
 * Dasun Kavinda Cinematography (071 4 277 276)
 *
 * Real-Time Multi-Device Cloud Sync for Client Bookings & Admin Console
 */

const firebaseConfig = {
  apiKey: "AIzaSyDPFNSVov73Xst77C9891_ToS6FzOXX8LU",
  authDomain: "octewya---weddings.firebaseapp.com",
  projectId: "octewya---weddings",
  storageBucket: "octewya---weddings.firebasestorage.app",
  messagingSenderId: "632940655471",
  appId: "1:632940655471:web:e5eb9f000d063d94cf6e9a"
};

// =========================================================================
// FIREBASE INITIALIZATION & SAFETY FALLBACK
// =========================================================================
let firebaseApp = null;
let firestoreDb = null;
let isCloudConnected = false;

try {
  if (
    typeof firebase !== "undefined" &&
    firebaseConfig &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  ) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firestoreDb = firebase.firestore();
    isCloudConnected = true;
    console.log("OCTEWYA Cloud Database: Connected to Google Firebase! 🚀");
  } else {
    console.log("OCTEWYA: Running in Browser Storage mode.");
  }
} catch (err) {
  console.warn("OCTEWYA Firebase initialization error:", err);
  isCloudConnected = false;
}
