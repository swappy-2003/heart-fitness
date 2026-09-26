'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'General Gym & Jerai Setup',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Heart+Fitness+M+Baria+Estate+Opposite+Manvelpada+Talav+Virar+East+Maharashtra+401305";

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-[var(--nav-height)] bg-[var(--bg-primary)]">
        {/* Header */}
        <section className="section-padding pb-12 border-b border-[var(--border-subtle)]">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              <span className="label-micro text-[var(--accent-yellow)]">DIRECT DESK & LOCATION</span>
              <span className="text-[var(--text-muted)] text-xs">•</span>
              <span className="label-micro text-[var(--text-muted)]">VIRAR EAST</span>
            </div>

            <h1 className="heading-hero text-[var(--text-primary)] mb-8">
              LET&apos;S<br />
              <span className="text-[var(--accent-yellow)]">TRAIN.</span>
            </h1>

            <p className="body-large max-w-3xl text-[var(--text-secondary)]">
              Direct access to Heart Fitness. Connect with our desk, request a facility tour, or visit us on the 2nd floor of M Baria Estate, opposite Manvelpada Talav.
            </p>
          </div>
        </section>

        {/* Contact Split */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Links & Info */}
              <div className="lg:col-span-6 space-y-12">
                {/* Thumb-friendly Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+917841966244"
                    className="border border-[var(--border-medium)] bg-white p-6 hover:border-[var(--accent-yellow)] shadow-sm transition-colors group"
                  >
                    <span className="label-micro text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] block mb-2">
                      PHONE NUMBER
                    </span>
                    <p className="text-xl font-mono font-bold text-[var(--text-primary)]">
                      078419 66244
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--accent-yellow)] font-bold">
                      <span>CALL DESK</span>
                      <span>→</span>
                    </div>
                  </a>

                  <a
                    href="mailto:heartfitness322@gmail.com"
                    className="border border-[var(--border-medium)] bg-white p-6 hover:border-[var(--accent-yellow)] shadow-sm transition-colors group"
                  >
                    <span className="label-micro text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] block mb-2">
                      EMAIL INBOX
                    </span>
                    <p className="text-xs sm:text-sm font-mono font-medium text-[var(--text-primary)] break-all">
                      heartfitness322@gmail.com
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--accent-yellow)] font-bold">
                      <span>SEND INQUIRY</span>
                      <span>→</span>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/heart_fitness_virar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--border-medium)] bg-white p-6 hover:border-[var(--accent-yellow)] shadow-sm transition-colors group"
                  >
                    <span className="label-micro text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] block mb-2">
                      INSTAGRAM PROFILE
                    </span>
                    <p className="text-lg font-bold text-[var(--text-primary)]">
                      @heart_fitness_virar
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--accent-yellow)] font-bold">
                      <span>VIEW SOCIALS</span>
                      <span>↗</span>
                    </div>
                  </a>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--border-medium)] bg-white p-6 hover:border-[var(--accent-yellow)] shadow-sm transition-colors group"
                  >
                    <span className="label-micro text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] block mb-2">
                      GET DIRECTIONS
                    </span>
                    <p className="text-base font-bold text-[var(--text-primary)]">
                      Manvelpada Talav
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--accent-yellow)] font-bold">
                      <span>OPEN MAPS</span>
                      <span>↗</span>
                    </div>
                  </a>
                </div>

                {/* Location Address Details */}
                <div className="border border-[var(--border-medium)] bg-white p-8 shadow-sm">
                  <span className="label-micro text-[var(--accent-yellow)] block mb-4">
                    FACILITY HEADQUARTERS
                  </span>
                  <div className="space-y-4">
                    <div>
                      <span className="label-micro text-[var(--text-muted)] block mb-1">PHYSICAL ADDRESS</span>
                      <p className="text-base text-[var(--text-primary)] leading-relaxed">
                        2nd Floor, M Baria Estate,<br />
                        Opposite Manvelpada Talav,<br />
                        Virar East, Vasai-Virar,<br />
                        Maharashtra 401305, India
                      </p>
                    </div>
                    <div>
                      <span className="label-micro text-[var(--text-muted)] block mb-1">LANDMARK</span>
                      <p className="text-sm text-[var(--accent-yellow)]">
                        Opposite Manvelpada Lake
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="border border-[var(--border-medium)] h-[300px] overflow-hidden shadow-sm">
                  <iframe
                    title="Heart Fitness Location Map"
                    src="https://maps.google.com/maps?q=Heart+Fitness+M+Baria+Estate+Manvelpada+Talav+Virar+East&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: 'contrast(105%) grayscale(15%)',
                    }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Direct Inquiry Form */}
              <div className="lg:col-span-6 border border-[var(--border-medium)] bg-white p-8 sm:p-12 shadow-sm">
                <span className="label-micro text-[var(--accent-yellow)] block mb-3">
                  DIRECT ENQUIRY
                </span>
                <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-2">
                  Request a Floor Walkthrough
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-8">
                  Leave your details and the front desk will confirm your scheduled visit and movement assessment.
                </p>

                {formSubmitted ? (
                  <div className="border border-[var(--accent-yellow)] bg-[rgba(255,210,26,0.05)] p-8 text-center space-y-4">
                    <span className="text-2xl text-[var(--accent-yellow)]">✓</span>
                    <h3 className="heading-sub text-lg font-bold text-[var(--text-primary)]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Thank you for reaching out. Our front desk at M Baria Estate, Virar East will call you back shortly on {formData.phone || 'your number'}.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn-outline text-xs mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="label-micro text-[var(--text-muted)] block mb-2">
                        FULL NAME *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="label-micro text-[var(--text-muted)] block mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 098765 43210"
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="label-micro text-[var(--text-muted)] block mb-2">
                        PRIMARY INTEREST
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors"
                      >
                        <option value="General Gym & Jerai Setup">General Gym & Jerai Setup</option>
                        <option value="Certified Personal Training">Certified Personal Training</option>
                        <option value="Cardio & Endurance">Cardio & Endurance</option>
                        <option value="CrossFit & Functional">CrossFit & Functional</option>
                        <option value="Steam & Recovery">Steam & Recovery Facility</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-micro text-[var(--text-muted)] block mb-2">
                        NOTES OR QUESTIONS (OPTIONAL)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your training experience or preferred visiting hours..."
                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-yellow)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-xs"
                      data-cursor="SUBMIT"
                    >
                      Submit Walkthrough Request
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
