import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import DoorGallery from '../components/DoorGallery';
import { doors } from '../data/doors';
import { useLang } from '../lib/LanguageContext';

export default function Doors() {
  const { lang } = useLang();

  const content = {
    en: {
      subtitle: 'Showroom',
      title: 'The Door Collection',
      body: 'Explore our extensive range of interior and exterior doors. From minimalist modern panels to intricate classic arches, every door is crafted to perfection using premium sustainable woods.',
    },
    ar: {
      subtitle: 'المعرض',
      title: 'مجموعة الأبواب',
      body: 'استكشف مجموعتنا الواسعة من الأبواب الداخلية والخارجية. من الألواح الحديثة البسيطة إلى الأقواس الكلاسيكية الراقية، كل باب مُصنَّع باحترافية تامة من أخشاب مستدامة فاخرة.',
    },
  };

  const c = content[lang];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 md:pt-48 md:pb-32 shell min-h-screen"
    >
      <div className="max-w-3xl mb-16 md:mb-24">
        <SectionTitle 
          title={c.title} 
          subtitle={c.subtitle} 
        />
        <p className="text-lg opacity-80 font-light leading-relaxed mt-6">
          {c.body}
        </p>
      </div>

      <DoorGallery doors={doors} />
    </motion.div>
  );
}
