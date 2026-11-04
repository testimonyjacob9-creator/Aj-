// Shared Firebase handle for public pages
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey:            "AIzaSyDUuUMxoU9xK-LcZExXZ4JkJefjT7kpf9A",
  authDomain:        "market-41a4b.firebaseapp.com",
  projectId:         "market-41a4b",
  storageBucket:     "market-41a4b.firebasestorage.app",
  messagingSenderId: "847149567581",
  appId:             "1:847149567581:web:e6d7e8cb652238b74107b4",
  measurementId:     "G-YNE9G7066C"
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
