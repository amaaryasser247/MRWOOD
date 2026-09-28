import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ProjectGallery from "../components/ProjectGallery";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";
import img from "../assets/images";
import { getProject, projects } from "../data/projects";

const ease = [0.22, 1, 0.36, 1];

export default function ProjectDetail() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      {/* Immersive cover */}
      <section className="relative h-[78svh] min-h-110 overflow-hidden bg-foreground">
        <motion.img
          src={img(project.cover, { ratio: "wide", label: project.title })}
          alt={`${project.title}, ${project.location}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.06, opacity: 0 }}
          animate={reduce ? false : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-foreground/40" />

        <div className="shell relative flex h-full flex-col justify-end pb-16">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="text-[0.75rem] tracking-[0.18em] text-background/70"
          >
            {project.location} — {project.year}
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.58, ease }}
            className="mt-4 max-w-[14ch] text-[2.6rem] text-background sm:text-[3.4rem] lg:text-[4.2rem]"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Brief */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="max-w-[54ch] text-[1.1rem] leading-relaxed text-foreground">
              {project.summary}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="h-px w-full bg-foreground/15" />
            <p className="mt-6 text-[0.75rem] tracking-[0.16em] text-muted-foreground">Scope of work</p>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-foreground">{project.scope}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="shell pb-24 md:pb-32">
        <ProjectGallery items={project.gallery} projectTitle={project.title} />
      </section>

      {/* Next project */}
      <section className="border-t border-foreground/10">
        <div className="shell flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.14em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <ArrowLeft size={15} strokeWidth={1.4} />
            All projects
          </Link>

          <Link to={`/projects/${next.slug}`} className="group text-right sm:text-right">
            <span className="block text-[0.72rem] tracking-[0.18em] text-muted-foreground">Next project</span>
            <span className="mt-2 inline-flex items-center gap-3 font-display text-[1.6rem] font-light text-foreground">
              {next.title}
              <ArrowRight
                size={20}
                strokeWidth={1.2}
                className="transition-transform duration-700 ease-soft group-hover:translate-x-2"
              />
            </span>
          </Link>
        </div>
      </section>

      <CTASection title="Planning something similar?" />
    </>
  );
}
