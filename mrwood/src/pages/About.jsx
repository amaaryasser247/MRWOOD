import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <div className="relative h-[70vh] flex items-end overflow-hidden bg-foreground">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1596043132717-b004ccb701bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Wood craftsmanship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
        </motion.div>
        <div className="shell relative z-10 pb-16 md:pb-24 text-background">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xs uppercase tracking-[0.3em] text-muted mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-light max-w-2xl"
          >
            Built by Hand.<br/>Designed to Last.
          </motion.h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-24 md:py-32 shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <SectionTitle title="The MRWOOD Philosophy" subtitle="Craftsmanship" />
            <p className="text-lg font-light opacity-80 leading-relaxed mt-6 mb-8">
              MRWOOD was founded on a single belief: that wood, in the hands of skilled artisans, is the most expressive material in architecture. Every grain tells a story. Every join reflects mastery.
            </p>
            <p className="text-lg font-light opacity-80 leading-relaxed">
              We design and craft custom doors and woodwork for residential and commercial spaces across the region, treating every commission as an opportunity to redefine what wood can be.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-3/4 overflow-hidden bg-muted"
          >
            <img 
              src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1000&auto=format&fit=crop" 
              alt="Wood detail" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="shell">
          <SectionTitle title="What Sets Us Apart" subtitle="Values" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: "Precision Craft", desc: "Every door is measured, cut, and assembled to micron-level tolerances by our senior artisans using traditional and modern methods." },
              { title: "Premium Materials", desc: "We source sustainably harvested accent, oak, teak, and specialty veneers from certified suppliers around the world." },
              { title: "Custom Design", desc: "No two spaces are the same. We work closely with architects, interior designers, and homeowners to realize completely bespoke pieces." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 pt-8 border-t border-muted-foreground/30"
              >
                <span className="text-2xl font-light text-accent">0{i + 1}</span>
                <h3 className="text-2xl font-light text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
