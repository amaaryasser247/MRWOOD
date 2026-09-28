import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../lib/LanguageContext';
import { useTheme } from '../lib/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, t, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.doors, id: 'doors' },
    { name: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scrollspy logic: check current section
      const sections = ['home', 'about', 'doors', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate(id === 'home' ? '/' : `/#${id}`);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navOffset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: id === 'home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }, 100);
  };

  const navBackground = isScrolled ? 'bg-background/40 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'bg-linear-to-b from-foreground/75 to-transparent';
  const textColor = isScrolled ? 'text-foreground' : 'text-background';

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-soft ${navBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shell flex items-center justify-between py-4 md:py-6">
        {/* Brand */}
        <button
          onClick={() => scrollTo('home')}
          className={`flex flex-col items-center justify-center cursor-pointer ${textColor} hover:opacity-85 transition-opacity`}
        >
          <span className="wordmark text-2xl md:text-3xl tracking-widest font-light ml-[0.34em]">MRWOOD</span>
          <span className="text-base md:text-lg tracking-[0.2em] opacity-90 mt-1 font-arabic font-medium ml-[0.2em]">
             ياسر التملى
          </span>
        </button>

        {/* Desktop Nav - Larger font size */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-base md:text-lg tracking-wider uppercase transition-all duration-300 py-1.5 cursor-pointer font-arabic ${textColor} ${
                  isActive ? 'font-semibold opacity-100' : 'opacity-75 hover:opacity-100'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-accent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          {/* Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${textColor} opacity-85 hover:opacity-100 transition-all border cursor-pointer ${
                isScrolled ? 'border-foreground/30 hover:border-accent hover:bg-foreground/5' : 'border-background/40 hover:border-background hover:bg-background/10'
              }`}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-sm" />
            </button>
            <button
              onClick={toggleLang}
              className={`text-sm md:text-base tracking-wider uppercase ${textColor} opacity-85 hover:opacity-100 transition-opacity border px-3.5 py-1.5 rounded-sm font-arabic cursor-pointer ${
                isScrolled ? 'border-foreground/30 hover:border-accent' : 'border-background/40 hover:border-background'
              }`}
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>
        </nav>

        {/* Mobile: toggles + menu button */}
        <div className="md:hidden flex items-center gap-3.5">
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-7 h-7 rounded-full ${textColor} opacity-85 hover:opacity-100 transition-all border cursor-pointer ${
              isScrolled ? 'border-foreground/30' : 'border-background/40'
            }`}
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-xs" />
          </button>
          <button
            onClick={toggleLang}
            className={`text-sm ${textColor} opacity-85 border px-3 py-1 rounded-sm font-arabic cursor-pointer ${
              isScrolled ? 'border-foreground/30' : 'border-background/40'
            }`}
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button
            className={`text-2xl p-1.5 ${textColor} focus:outline-none cursor-pointer`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Larger fonts */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/70 backdrop-blur-2xl text-foreground border-b border-white/20 overflow-hidden shadow-2xl absolute top-full left-0 w-full"
          >
            <nav className="flex flex-col px-7 py-7 gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-xl tracking-wider uppercase text-start py-1.5 transition-colors cursor-pointer font-arabic ${
                      isActive ? 'font-bold text-accent' : 'text-foreground/85 hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
