import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { site, whatsappLink } from '../data/site';
import { useLang } from '../lib/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 md:py-24 border-t border-foreground/40">
      <div className="shell grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col">
          <button 
            onClick={() => scrollTo('home')} 
            className="flex flex-col items-start hover:opacity-80 transition-opacity mb-6 cursor-pointer w-fit"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="wordmark text-2xl tracking-widest font-light text-background ml-[0.34em]">MRWOOD</span>
              <span className="text-base tracking-[0.2em] opacity-90 mt-1 font-arabic text-muted font-medium ml-[0.2em]">
               ياسر التملى
              </span>
            </div>
          </button>
          <p className="text-sm opacity-70 font-light max-w-sm leading-relaxed">
            {lang === 'ar' 
              ? 'صناعة الأخشاب المعمارية والنجارة الفاخرة منذ عام 1995، نقدم أرقى معايير الجودة والتصاميم الخالدة.' 
              : 'Architectural woodworking and premium handcrafted doors since 1995, delivering timeless design and exceptional quality.'}
          </p>
        </div>

        {/* Navigation - About before Doors */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs uppercase tracking-widest text-muted mb-3">{t.footer.nav}</h4>
          <button 
            onClick={() => scrollTo('about')} 
            className="text-start text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors cursor-pointer"
          >
            {t.footer.about}
          </button>
          <button 
            onClick={() => scrollTo('doors')} 
            className="text-start text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors cursor-pointer"
          >
            {t.footer.doors}
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="text-start text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors cursor-pointer"
          >
            {t.footer.contact}
          </button>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-widest text-muted mb-2">{t.footer.getInTouch}</h4>
          
          <a href={`tel:${site.phone}`} className="text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-muted text-xs" /> {site.phoneDisplay}
          </a>

          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors flex items-center gap-3">
            <FontAwesomeIcon icon={faWhatsapp} className="text-muted" /> {t.footer.whatsapp}
          </a>

          <a href={`mailto:${site.email}`} className="text-sm opacity-70 hover:opacity-100 hover:text-muted transition-colors flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-muted text-xs" /> {site.email}
          </a>

          <div className="text-sm opacity-70 flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-muted text-xs" /> 
            <span>{lang === 'ar' ? site.addressAr : site.address}</span>
          </div>

          {/* Social Links: Facebook and WhatsApp */}
          <div className="flex gap-4 mt-3">
            <a 
              href={site.social.facebook} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a 
              href={whatsappLink()} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="WhatsApp"
              className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

      </div>
      
      <div className="shell mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 font-light">
        <p>&copy; {new Date().getFullYear()} MRWOOD. {t.footer.rights}</p>
        <p className="font-arabic">تأسست عام 1995 | Founded in 1995</p>
      </div>
    </footer>
  );
}
