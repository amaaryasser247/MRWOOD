import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  const { lang, t } = useLang();

  const getCategoryLabel = (cat) => {
    return t?.doorsSection?.categories?.[cat] || cat;
  };

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 items-center">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 ${
              isActive 
                ? 'bg-foreground/5 backdrop-blur-md border border-foreground/10 text-foreground font-semibold shadow-sm' 
                : 'bg-transparent border border-transparent text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
            }`}
          >
            {getCategoryLabel(category)}
          </button>
        );
      })}
    </div>
  );
}
