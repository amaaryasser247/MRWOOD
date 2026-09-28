import { useState } from "react";
import { Clock, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site, whatsappLink } from "../data/site";

const field =
  "w-full bg-background/40 backdrop-blur-md border border-foreground/20 rounded-xl px-5 py-3 text-[0.98rem] text-foreground placeholder:text-muted-foreground/70 focus:bg-background/60 focus:border-accent focus:outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  /**
   * Front-end only: the message is handed to WhatsApp so nothing is lost while
   * there is no backend. Swap this for a fetch() to your endpoint later.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    const text = `Hello MRWOOD.\nName: ${form.name}\nPhone: ${form.phone}\n${form.message}`;
    window.open(whatsappLink(text), "_blank", "noopener");
    setSent(true);
  };

  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-5">
          <h1 className="max-w-[13ch] text-[2.3rem] sm:text-[2.9rem] lg:text-[3.4rem]">
            Let's create something beautiful
          </h1>
          <p className="mt-7 max-w-[42ch] text-[1rem] leading-relaxed text-muted-foreground">
            Tell us about the space, the number of doors and the finish you like. A photo helps
            more than a description.
          </p>

          <div className="mt-12 space-y-6 text-[0.95rem]">
            <a href={`tel:${site.phone}`} className="flex items-start gap-4 text-foreground">
              <Phone size={17} strokeWidth={1.3} className="mt-1 text-accent" />
              <span>{site.phoneDisplay}</span>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 text-foreground"
            >
              <MessageCircle size={17} strokeWidth={1.3} className="mt-1 text-accent" />
              <span>WhatsApp — fastest reply</span>
            </a>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 text-foreground"
            >
              <MapPin size={17} strokeWidth={1.3} className="mt-1 text-accent" />
              <span>{site.address}</span>
            </a>

            <div className="flex items-start gap-4 text-foreground">
              <Clock size={17} strokeWidth={1.3} className="mt-1 text-accent" />
              <div className="space-y-1">
                {site.hours.map((h) => (
                  <p key={h.days} className="text-muted-foreground">
                    <span className="text-foreground">{h.days}</span> — {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="bg-background/40 backdrop-blur-md border border-foreground/20 p-3 rounded-xl transition-all duration-300 hover:bg-background/60 hover:-translate-y-1 hover:border-accent hover:text-accent shadow-sm"
              >
                <Facebook size={16} strokeWidth={1.3} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="md:col-span-6 md:col-start-7">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label htmlFor="name" className="text-[0.75rem] tracking-[0.16em] text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                className={field}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-[0.75rem] tracking-[0.16em] text-muted-foreground">
                Phone
              </label>
              <input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                className={field}
                placeholder="01X XXX XXXX"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-[0.75rem] tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                className={`${field} resize-none`}
                placeholder="How many doors, which rooms, which finish"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-foreground/90 backdrop-blur-lg px-9 py-5 rounded-xl text-background transition-all duration-300 hover:bg-accent hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              <MessageCircle size={17} strokeWidth={1.4} />
              <span className="text-[0.82rem] tracking-[0.16em]">Contact MRWOOD</span>
            </button>

            {sent && (
              <p className="text-[0.9rem] text-accent">
                Your message opened in WhatsApp. If nothing happened, call {site.phoneDisplay}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
