import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectGallery from '../components/ProjectGallery';
import { projects } from '../data/projects';

export default function Projects() {
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
          title="Architectural Projects" 
          subtitle="Portfolio" 
        />
        <p className="text-lg opacity-80 font-light leading-relaxed mt-6">
          A showcase of our completed installations across luxury residential and commercial properties. We partner with leading architects and designers to bring visionary spaces to life.
        </p>
      </div>

      <ProjectGallery projects={projects} />
    </motion.div>
  );
}
