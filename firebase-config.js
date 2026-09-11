// Paste your actual Firebase project settings below:
const firebaseConfig = {
    apiKey: "AIzaSyAJorIMs54WoR0Rb7vgi9xMv9zF3_5_agU",
    authDomain: "team-call-tracker-3ac9f.firebaseapp.com",
    projectId: "team-call-tracker-3ac9f",
    storageBucket: "team-call-tracker-3ac9f.firebasestorage.app",
    messagingSenderId: "283740563933",
    appId: "1:283740563933:web:68331f2171d2b18004ae34"
};

// Initialize Firebase using the Compat API (avoids module scoping issues)
let db = null;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    }
} catch (e) {
    console.error("Firebase initialization failed:", e);
}

// Global helper to get current EST date string YYYY-MM-DD
function getTodayESTString() {
    return new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}