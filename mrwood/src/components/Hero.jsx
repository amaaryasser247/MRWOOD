import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Hero() {
  const { t } = useLang();

  const handleScrollToDoors = (e) => {
    e.preventDefault();
    const el = document.getElementById('doors');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      window.history.pushState(null, '', '#doors');
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-foreground">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="MRWOOD Premium Door" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="shell relative z-10 text-background pt-20">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] font-medium text-muted mb-6">
            {t.hero.tagline}
          </motion.p>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            {t.hero.heading1}<br/>{t.hero.heading2}
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl font-light opacity-80 mb-12 max-w-xl leading-relaxed">
            {t.hero.sub}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            <button 
              onClick={handleScrollToDoors}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-sm uppercase tracking-widest font-semibold hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            >
              {t.hero.ctaDoors}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
