import ProjectCard from './ProjectCard';

export default function ProjectGallery({ projects }) {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
