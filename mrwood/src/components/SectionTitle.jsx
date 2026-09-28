import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, center = false, light = false }) {
  return (
    <div className={`flex flex-col gap-4 mb-12 md:mb-16 ${center ? 'items-center text-center' : ''}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`text-sm md:text-base uppercase tracking-[0.2em] font-medium ${light ? 'text-muted' : 'text-accent'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`text-3xl md:text-5xl font-light ${light ? 'text-background' : 'text-foreground'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
