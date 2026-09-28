import { motion } from 'framer-motion';

export default function DoorCard({ door, onClick }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col bg-background/40 backdrop-blur-2xl backdrop-saturate-[1.5] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:bg-background/50 hover:border-accent/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-500 hover:-translate-y-2 border border-foreground/20"
      onClick={() => onClick(door)}
    >
      <div className="relative aspect-3/4 overflow-hidden bg-muted m-2 rounded-2xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <motion.img 
          src={door.image} 
          alt={door.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-soft group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 ease-soft" />
      </div>
      
      <div className="flex flex-col p-6 pt-3 gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{door.category}</span>
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="text-xl font-light text-foreground">{door.name}</h3>
          <span className="text-xs font-mono text-muted-foreground">{door.code}</span>
        </div>
      </div>
    </motion.div>
  );
}
