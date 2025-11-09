"use client";

import React, { useState } from "react";
import SectionDivider from "../SectionDivider";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      setToast({ message: "✨ Message sent successfully!", type: "success" });
      form.reset();
    } else {
      setToast({ message: "⚠️ Failed to send. Try again later.", type: "error" });
    }

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div>
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-title fade-in">
          <h2>Let&apos;s Build Something Extraordinary</h2>
        </div>
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info fade-in">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>adeshina6233@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+234 707-274-7849</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Lagos, NG</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form fade-in">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder=" " required />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <textarea name="message" rows={5} placeholder=" " required />
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <p>{toast.message}</p>
        </div>
      )}
    </section>
    <SectionDivider/>
    </div>
  );
}
