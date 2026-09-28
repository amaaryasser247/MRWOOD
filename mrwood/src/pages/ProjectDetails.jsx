import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 shell">
        <h1 className="text-3xl font-light">Project not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen"
    >
      <div className="shell mb-12">
        <Link 
          to="/projects"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to Projects
        </Link>
        
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.2em] text-accent mb-4"
          >
            {project.location}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8"
          >
            {project.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light opacity-80 leading-relaxed max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      <div className="shell mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full aspect-video bg-muted overflow-hidden mb-8 md:mb-16"
        >
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </motion.div>
        
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {project.gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-4"
              >
                <div className="w-full aspect-4/5 bg-muted overflow-hidden">
                  <img src={img.url} alt={`${project.name} - ${img.category}`} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{img.category}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
