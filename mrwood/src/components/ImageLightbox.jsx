import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ImageLightbox({ image, title, subtitle, onClose, onNext, onPrev }) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-foreground/60 backdrop-blur-3xl"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-1 text-2xl transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-lg"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <button 
        onClick={onPrev}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 text-xl transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <button 
        onClick={onNext}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 text-xl transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center px-4 md:px-24">
        <motion.img 
          key={image} // to trigger re-animation on change
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={image} 
          alt={title}
          className="max-w-full max-h-[75vh] object-contain shadow-2xl"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <h3 className="text-background text-2xl font-light mb-2">{title}</h3>
          {subtitle && <p className="text-muted text-sm uppercase tracking-widest">{subtitle}</p>}
        </motion.div>
      </div>
    </motion.div>
  );
}
