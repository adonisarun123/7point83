"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Clock, Phone, Lock, CheckCircle } from "lucide-react";

import { destinationPlaybook, durations, tracks } from "@/data/retreats";

export function ApplicationForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-[60px]");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section
      ref={sectionRef}
      className="py-[clamp(80px,12vw,140px)] px-[5%] bg-gradient-to-b from-bg-secondary to-bg-deep relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 max-w-[1200px] mx-auto">
        <div className="reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out">
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] mb-6">We'd love to meet you</h2>
          <p className="text-text-muted mb-5 leading-[1.8]">
            Every participant shapes the collective experience. We select guests who are curious, kind, and committed to living in rhythm with the group.
          </p>
          <p className="text-text-muted mb-10 leading-[1.8]">
            This form helps us understand your intentions, health context, and the focus you want to explore on retreat.
          </p>

          <div className="space-y-6">
            <InformationTile icon={<Clock size={20} />} title="10-15 Minutes" detail="Complete the application with thoughtful answers within two minutes." />
            <InformationTile
              icon={<Phone size={20} />}
              title="48-Hour Response"
              detail="We review applications within two business days and follow up with a short call."
            />
            <InformationTile
              icon={<Lock size={20} />}
              title="Confidential"
              detail="Your replies stay private. We use them only to create a safe, balanced group."
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-bg-card border border-[rgba(79,255,208,0.1)] rounded-[24px] p-8 md:p-12 reveal opacity-0 translate-y-[60px] transition-all duration-1000 ease-out delay-200"
        >
          <div className="space-y-6 mb-10">
            <LabelInput label="First Name" required>
              <input
                type="text"
                required
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
            <LabelInput label="Last Name" required>
              <input
                type="text"
                required
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
            <LabelInput label="Email Address" required>
              <input
                type="email"
                required
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
            <LabelInput label="Phone Number" required>
              <input
                type="tel"
                placeholder="+91"
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
          </div>

          <div className="space-y-6 mb-10">
            <LabelInput label="Preferred Duration" required>
              <select
                required
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              >
                <option value="">Select a timeline</option>
                {durations.map((duration) => (
                  <option key={duration.id} value={duration.id} className="bg-bg-deep">
                    {duration.label}
                  </option>
                ))}
              </select>
            </LabelInput>
            <LabelInput label="Focus track" required>
              <select
                required
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              >
                <option value="">Choose a specialization</option>
                {tracks.map((track) => (
                  <option key={track.id} value={track.id} className="bg-bg-deep">
                    {track.label}
                  </option>
                ))}
              </select>
            </LabelInput>
            <LabelInput label="Preferred location">
              <select className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow">
                <option value="">Any India destination</option>
                {destinationPlaybook.map((place) => (
                  <option key={place.title} value={place.title} className="bg-bg-deep">
                    {place.title}
                  </option>
                ))}
              </select>
            </LabelInput>
          </div>

          <div className="space-y-6 mb-8">
            <LabelInput label="What brings you to 7point83?">
              <textarea
                rows={3}
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
            <LabelInput label="Anything we should know (injuries, allergies, intentions)?">
              <textarea
                rows={3}
                className="bg-black/30 border border-white/10 rounded-lg p-3.5 text-text-primary font-body text-[1rem] transition-all duration-300 focus:outline-none focus:border-accent-glow"
              />
            </LabelInput>
          </div>

          <button
            type="submit"
            className="w-full py-4.5 bg-accent-glow text-bg-deep font-body text-[1rem] font-semibold tracking-[2px] uppercase rounded-lg transition-all duration-400 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(79,255,208,0.4)]"
          >
            Submit application
          </button>

          <p className="text-center text-text-muted text-[0.85rem] mt-5">
            We respect your privacy and keep everything confidential.
          </p>
        </form>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-[rgba(2,10,5,0.9)] backdrop-blur-md flex items-center justify-center z-[1000] animate-fade-in-up"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-bg-secondary border border-[rgba(79,255,208,0.2)] rounded-[24px] p-16 text-center max-w-[500px] m-5"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle className="w-16 h-16 text-accent-glow mx-auto mb-6" />
            <h3 className="text-[2rem] mb-4">Application received</h3>
            <p className="text-text-muted mb-8">
              Thank you for taking the first step. We will be in touch within two business days.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-8 py-3.5 bg-transparent border border-accent-glow text-accent-glow text-[0.9rem] tracking-[2px] uppercase rounded-[4px] transition-all duration-300 hover:bg-accent-glow hover:text-bg-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function InformationTile({ icon, title, detail }: { icon: ReactNode; title: string; detail: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center shrink-0 text-accent-glow">
        {icon}
      </div>
      <div>
        <h4 className="text-[1rem] mb-1 text-text-primary">{title}</h4>
        <p className="text-[0.9rem] text-text-muted">{detail}</p>
      </div>
    </div>
  );
}

function LabelInput({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-[0.85rem] text-text-muted">
      {label} {required && <span className="text-gold">*</span>}
      {children}
    </label>
  );
}
