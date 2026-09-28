import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center bg-background/50 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-border/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
    >
      <Link to={`/projects/${project.id}`} className="w-full md:w-3/5 overflow-hidden block rounded-xl">
        <div className="relative aspect-4/3 md:aspect-video w-full bg-muted overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-soft group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 backdrop-blur-[1px] transition-all duration-500 ease-soft opacity-0 group-hover:opacity-100" />
        </div>
      </Link>
      
      <div className="w-full md:w-2/5 flex flex-col items-start gap-4 px-2 md:px-4">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{project.location}</span>
        <h3 className="text-3xl md:text-4xl font-display font-light text-foreground">{project.name}</h3>
        <p className="text-muted-foreground font-light mt-2 mb-6">
          {project.description}
        </p>
        <Link 
          to={`/projects/${project.id}`}
          className="group/link flex items-center gap-3 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
        >
          View Project 
          <span className="transition-transform duration-300 group-hover/link:translate-x-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
