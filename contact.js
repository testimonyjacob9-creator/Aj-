// =====================================================
// QUANTUM COURIER SERVICE – CONTACT.JS  (ES Module)
// Firebase Firestore contact form submission
// =====================================================

import { initializeApp, getApps }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "YOUR_FIREBASE_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "YOUR_MEASUREMENT_ID"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ─── Submit Contact Form ──────────────────────────────
window.submitContactForm = async function () {
  const name    = document.getElementById("fname")?.value.trim();
  const email   = document.getElementById("femail")?.value.trim();
  const phone   = document.getElementById("fphone")?.value.trim();
  const service = document.getElementById("fservice")?.value;
  const subject = document.getElementById("fsubject")?.value.trim();
  const message = document.getElementById("fmessage")?.value.trim();
  const status  = document.getElementById("formStatus");

  // Validate required fields
  if (!name || !email || !message) {
    status.className  = "form-status error";
    status.textContent = "⚠️ Please fill in your name, email, and message.";
    status.classList.remove("hidden");
    return;
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.className  = "form-status error";
    status.textContent = "⚠️ Please enter a valid email address.";
    status.classList.remove("hidden");
    return;
  }

  // Loading state
  const btn = document.querySelector('[onclick="submitContactForm()"]');
  if (btn) {
    btn.disabled     = true;
    btn.textContent  = "Sending…";
    btn.style.opacity = "0.7";
  }
  status.classList.add("hidden");

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      phone:     phone   || null,
      service:   service || null,
      subject:   subject || null,
      message,
      read:      false,
      timestamp: serverTimestamp()
    });

    // Show success state inside the form wrap
    const formEl = document.getElementById("contactForm");
    if (formEl) {
      formEl.innerHTML = `
        <div class="form-success">
          <span class="form-success-icon">✅</span>
          <h3>Message Sent!</h3>
          <p>Thanks, <strong style="color:var(--white)">${name.replace(/[&<>"']/g, ch => "&#" + ch.charCodeAt(0) + ";")}</strong>! Our logistics team will get back to you within 2 hours.</p>
        </div>
      `;
    }

  } catch (err) {
    status.className  = "form-status error";
    status.textContent = "❌ Failed to send. Please try again.";
    status.classList.remove("hidden");

    if (btn) {
      btn.disabled      = false;
      btn.textContent   = "Send Message 🚀";
      btn.style.opacity = "1";
    }
    console.error("Contact form error:", err);
  }
};
