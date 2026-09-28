import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import DoorGallery from '../components/DoorGallery';
import HowWeWorkSection from '../components/HowWeWorkSection';
import { doors } from '../data/doors';
import { site, whatsappLink } from '../data/site';
import { useLang } from '../lib/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default function Home({ initialSection }) {
  const { t, lang } = useLang();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const target = initialSection || (window.location.hash ? window.location.hash.replace('#', '') : null);
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          const offset = el.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 120);
      }
    }
  }, [initialSection]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const message = lang === 'ar'
      ? `مرحبًا MRWOOD، أرغب في الاستفسار عن الأبواب:\n• الاسم: ${formData.name}\n• الهاتف: ${formData.phone}\n• التفاصيل: ${formData.message}`
      : `Hello MRWOOD, I would like to inquire about your doors:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Details: ${formData.message}`;

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (#home) */}
      <Hero />

      {/* 2. About Section (#about) - Placed BEFORE Doors, Centered */}
      <section id="about" className="py-24 md:py-32 bg-background border-b border-foreground/10 scroll-mt-20">
        <div className="shell flex flex-col items-center text-center max-w-4xl mx-auto">
          <SectionTitle 
            title={t.about.title} 
            subtitle={t.about.subtitle} 
            center 
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <p className="text-xl md:text-2xl font-light text-accent leading-snug">
              {t.about.highlight}
            </p>
            <p className="text-base md:text-lg opacity-75 font-light leading-relaxed mt-6 max-w-3xl mx-auto">
              {t.about.body}
            </p>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mt-14 pt-10 border-t border-foreground/15">
            {t.about.stats.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <span className="font-display text-3xl md:text-4xl font-light text-accent">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-medium">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16 text-start">
            {t.about.values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background/30 backdrop-blur-xl p-8 border border-foreground/20 rounded-2xl flex flex-col gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:bg-background/50 hover:-translate-y-2 hover:border-accent/50 transition-all duration-500"
              >
                <span className="text-sm font-light text-accent">0{idx + 1}</span>
                <h4 className="text-xl font-light text-foreground">{v.title}</h4>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section (#howWeWork) */}
      <HowWeWorkSection />

      {/* 3. Doors Showcase Section (#doors) - Placed after About & How We Work */}
      <section id="doors" className="py-24 md:py-32 shell scroll-mt-20">
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionTitle 
            title={t.doorsSection.title} 
            subtitle={t.doorsSection.subtitle} 
          />
          <p className="text-base md:text-lg opacity-80 font-light leading-relaxed mt-4">
            {t.doorsSection.desc}
          </p>
        </div>

        <DoorGallery doors={doors} />
      </section>

      {/* 4. Contact Section (#contact) */}
      <section id="contact" className="py-24 md:py-32 bg-background/60 border-t border-foreground/10 scroll-mt-20">
        <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col">
            <SectionTitle 
              title={t.contact.title} 
              subtitle={t.contact.subtitle} 
            />
            <p className="text-base md:text-lg opacity-80 font-light leading-relaxed mt-4 mb-8">
              {t.contact.desc}
            </p>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a 
                href={`tel:${site.phone}`}
                className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-md rounded-2xl border border-foreground/20 hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-11 h-11 bg-muted/30 text-accent flex items-center justify-center text-lg shrink-0">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.contact.phone}</p>
                  <p className="text-foreground font-light text-base mt-0.5">{site.phoneDisplay}</p>
                </div>
              </a>

              {/* WhatsApp - Takes user directly to chat */}
              <a 
                href={whatsappLink()}
                target="_blank"
                className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-md rounded-2xl border border-foreground/20 hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-11 h-11 bg-muted/30 text-accent flex items-center justify-center text-xl shrink-0">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.contact.whatsapp}</p>
                  <p className="text-foreground font-light text-base mt-0.5">{t.contact.whatsappNote}</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-md rounded-2xl border border-foreground/20 hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-11 h-11 bg-muted/30 text-accent flex items-center justify-center text-lg shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.contact.email}</p>
                  <p className="text-foreground font-light text-base mt-0.5">{site.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-md rounded-2xl border border-foreground/20 hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 bg-muted/30 text-accent flex items-center justify-center text-lg shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.contact.location}</p>
                  <p className="text-foreground font-light text-base mt-0.5">
                    {lang === 'ar' ? site.addressAr : site.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-background/40 backdrop-blur-md rounded-2xl border border-foreground/20 hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 bg-muted/30 text-accent flex items-center justify-center text-lg shrink-0">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{t.contact.hours}</p>
                  <p className="text-foreground font-light text-sm mt-0.5">
                    {lang === 'ar' ? 'السبت – الخميس: 9:00 — 18:00 (الجمعة مغلق)' : 'Sat – Thu: 9:00 — 18:00 (Fri Closed)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links: Facebook and WhatsApp */}
            <div className="flex gap-4 mt-8">
              <a 
                href={site.social.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 hover:text-accent transition-all duration-500"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href={whatsappLink()} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full bg-background/40 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-background/60 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 hover:text-accent transition-all duration-500"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-full flex flex-col bg-background/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-foreground/20 shadow-lg hover:bg-background/40 hover:border-accent/40 transition-all duration-500">
            <h3 className="text-2xl font-light text-foreground mb-8">
              {lang === 'ar' ? 'أرسل لنا طلبك' : 'Send an Inquiry'}
            </h3>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {t.contact.nameLabel}
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-background/40 backdrop-blur-md border border-foreground/20 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground/60 hover:bg-background/50 hover:border-accent/50 focus:bg-background/60 focus:border-accent outline-none transition-all duration-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {t.contact.phoneLabel}
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full bg-background/40 backdrop-blur-md border border-foreground/20 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground/60 hover:bg-background/50 hover:border-accent/50 focus:bg-background/60 focus:border-accent outline-none transition-all duration-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {t.contact.messageLabel}
                </label>
                <textarea 
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="flex-1 w-full bg-background/40 backdrop-blur-md border border-foreground/20 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground/60 hover:bg-background/50 hover:border-accent/50 focus:bg-background/60 focus:border-accent outline-none transition-all duration-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4">
                <button 
                  className="flex-1 py-4 px-6 bg-foreground/90 backdrop-blur-lg text-background text-xs uppercase tracking-widest rounded-xl hover:bg-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-muted text-base" />
                  {t.contact.submitBtn}
                </button>

                <a 
                  href={whatsappLink()}
                  target="_blank"
                  className="py-4 px-6 bg-background/30 backdrop-blur-md border border-foreground/20 text-foreground text-xs uppercase tracking-widest rounded-xl hover:bg-background/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  {t.contact.whatsappDirect}
                </a>
              </div>

              {submitted && (
                <p className="text-xs text-accent mt-2 font-medium">
                  {t.contact.sentNote}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
