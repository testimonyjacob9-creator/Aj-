// Shared Firebase handle for public pages
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey:            "YOUR_FIREBASE_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"
};
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export const DEFAULTS = {
  brand: "Quantum Courier Service",
  email: "quantumfreightcx@gmail.com",
  phone: "+1 725 377 2637",
  whatsapp: "+1 725 377 2637",
  hours: "24/7",
  offices: [{ name: "Head Office", address: "USA" }],
  waMessage: "Hello Quantum Courier Service 👋 I'd like to talk to a human about my order processes.",
  chatEnabled: true,
  chatGreeting: "Hi 👋 I'm the Quantum Courier Service assistant. How can I help you today?"
};
