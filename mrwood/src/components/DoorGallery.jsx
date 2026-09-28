import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DoorCard from './DoorCard';
import ImageLightbox from './ImageLightbox';
import CategoryFilter from './CategoryFilter';
import { useLang } from '../lib/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function DoorGallery({ doors, initialLimit = 3 }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDoorIndex, setSelectedDoorIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { lang, t } = useLang();

  const categories = ['All', ...new Set(doors.map(door => door.category))];

  const filteredDoors = activeCategory === 'All' 
    ? doors 
    : doors.filter(door => door.category === activeCategory);

  const displayedDoors = showAll ? filteredDoors : filteredDoors.slice(0, initialLimit);

  const handleOpenLightbox = (door) => {
    const index = filteredDoors.findIndex(d => d.id === door.id);
    setSelectedDoorIndex(index);
  };

  const handleCloseLightbox = () => setSelectedDoorIndex(null);
  
  const handleNext = () => {
    if (selectedDoorIndex !== null) {
      setSelectedDoorIndex((selectedDoorIndex + 1) % filteredDoors.length);
    }
  };
  
  const handlePrev = () => {
    if (selectedDoorIndex !== null) {
      setSelectedDoorIndex((selectedDoorIndex - 1 + filteredDoors.length) % filteredDoors.length);
    }
  };

  const handleCollapse = () => {
    setShowAll(false);
    const el = document.getElementById('doors');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Category filter */}
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          // If switching categories, keep current view mode
        }} 
      />
      
      {/* Doors Grid (Only 3 doors shown by default) */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12"
      >
        <AnimatePresence>
          {displayedDoors.map(door => (
            <DoorCard key={door.id} door={door} onClick={handleOpenLightbox} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Button: View All Doors / Show Less */}
      {filteredDoors.length > initialLimit && (
        <div className="flex justify-center mt-14 md:mt-20">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-4 px-10 py-5 bg-background/40 backdrop-blur-xl backdrop-saturate-[1.5] border border-foreground/20 shadow-[0_8px_24px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] text-foreground rounded-2xl hover:bg-background/60 hover:text-accent hover:border-accent/50 text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <span>{t?.doorsSection?.viewAll || (lang === 'ar' ? 'عرض جميع الأبواب' : 'View All Doors')}</span>
              <span className="text-foreground/70 font-mono text-xs font-normal">
                ({filteredDoors.length})
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FontAwesomeIcon icon={lang === 'ar' ? faArrowLeft : faArrowRight} />
              </span>
            </button>
          ) : (
            <button
              onClick={handleCollapse}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-background/40 backdrop-blur-xl backdrop-saturate-[1.5] shadow-[0_8px_24px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.6)] border border-foreground/20 rounded-2xl text-foreground hover:bg-background/60 hover:text-accent hover:border-foreground/40 hover:shadow-lg text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span>{t?.doorsSection?.showLess || (lang === 'ar' ? 'عرض أقل' : 'Show Less')}</span>
              <FontAwesomeIcon icon={faChevronUp} className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedDoorIndex !== null && (
          <ImageLightbox 
            image={filteredDoors[selectedDoorIndex].image}
            title={filteredDoors[selectedDoorIndex].name}
            subtitle={`${filteredDoors[selectedDoorIndex].category} | ${filteredDoors[selectedDoorIndex].code}`}
            onClose={handleCloseLightbox}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
