import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';
import SectionTitle from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HowWeWorkSection() {
  const { t, lang } = useLang();

  return (
    <section id="howWeWork" className="py-24 md:py-32 bg-background/50 border-b border-foreground/10 scroll-mt-20">
      <div className="shell flex flex-col items-center max-w-5xl mx-auto">
        <SectionTitle 
          title={t.howWeWork.title} 
          subtitle={t.howWeWork.subtitle} 
          center 
        />

        <div className="flex flex-col md:flex-row items-center justify-center w-full mt-16 gap-6 md:gap-8 lg:gap-12">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 flex-1 w-full max-w-sm md:max-w-none"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 group">
              <img 
                src="/imgs/3.jfif" 
                alt={t.howWeWork.before} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-background/80 backdrop-blur-md px-10 py-3 rounded-full border border-foreground/20 shadow-lg flex items-center justify-center">
              <span className="text-xl font-medium tracking-wider">{t.howWeWork.before}</span>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex-shrink-0 z-10 -my-2 md:my-0 md:-mx-6 lg:-mx-8 flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-background/30 backdrop-blur-xl border border-white/20 text-foreground shadow-2xl shadow-black/10 md:mt-[-5rem]">
              <span className={`flex items-center justify-center transition-transform duration-300 ${lang === 'ar' ? 'rotate-90 md:rotate-180' : 'rotate-90 md:rotate-0'}`}>
                <FontAwesomeIcon icon={faArrowRight} className="text-xl md:text-2xl" />
              </span>
            </div>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6 flex-1 w-full max-w-sm md:max-w-none"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-foreground/10 group">
              <img 
                src="/imgs/3afteredit.jfif" 
                alt={t.howWeWork.after} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-accent text-accent-foreground px-10 py-3 rounded-full shadow-lg shadow-accent/20 flex items-center justify-center">
              <span className="text-xl font-medium tracking-wider">{t.howWeWork.after}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
