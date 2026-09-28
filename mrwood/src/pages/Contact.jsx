import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { site, whatsappLink } from '../data/site';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-32 pb-24 md:pt-48 md:pb-32"
    >
      <div className="shell grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left: Info */}
        <div className="flex flex-col">
          <SectionTitle title="Let's Create Something Beautiful" subtitle="Contact" />
          <p className="text-lg font-light opacity-80 leading-relaxed mt-2 mb-12">
            Whether you're an architect, interior designer, or homeowner with a vision, we'd love to hear about your project. Get in touch with our team.
          </p>

          <div className="flex flex-col gap-6">
            <a 
              href={`tel:${site.phone}`}
              className="group flex items-center gap-5 p-6 border border-muted-foreground/20 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-muted/30 flex items-center justify-center text-accent text-xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-light">{site.phoneDisplay}</p>
              </div>
            </a>

            <a 
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-6 border border-muted-foreground/20 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-muted/30 flex items-center justify-center text-accent text-xl">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                <p className="text-foreground font-light">Chat with us directly</p>
              </div>
            </a>

            <a 
              href={`mailto:${site.email}`}
              className="group flex items-center gap-5 p-6 border border-muted-foreground/20 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-muted/30 flex items-center justify-center text-accent text-xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-light">{site.email}</p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 border border-muted-foreground/20">
              <div className="w-12 h-12 bg-muted/30 flex items-center justify-center text-accent text-xl">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-light">{site.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-10">
            <a 
              href={site.social.facebook} 
              target="_blank" rel="noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a 
              href={whatsappLink()} 
              target="_blank" rel="noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(), "_blank", "noopener");
          }}>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input 
                id="contact-name"
                type="text" 
                placeholder="Your full name"
                className="border-b border-muted-foreground/30 focus:border-accent outline-none py-3 bg-transparent text-foreground placeholder:text-muted-foreground/50 font-light transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
              <input 
                id="contact-phone"
                type="tel" 
                placeholder="0122 724 0819"
                className="border-b border-muted-foreground/30 focus:border-accent outline-none py-3 bg-transparent text-foreground placeholder:text-muted-foreground/50 font-light transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea 
                id="contact-message"
                rows={5}
                placeholder="Tell us about your project..."
                className="border-b border-muted-foreground/30 focus:border-accent outline-none py-3 bg-transparent text-foreground placeholder:text-muted-foreground/50 font-light transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <button 
                type="submit"
                className="flex-1 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
              >
                Send via WhatsApp
              </button>
              <a 
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp
              </a>
            </div>
          </form>
        </motion.div>

      </div>
    </motion.div>
  );
}
