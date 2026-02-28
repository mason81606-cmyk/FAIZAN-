import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Hero"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-white text-5xl md:text-8xl font-serif italic mb-6 leading-tight">
            The New <br /> Minimalist
          </h2>
          <p className="text-white/90 text-sm md:text-base tracking-widest uppercase font-medium max-w-md">
            Discover the collection that redefines modern elegance through clean lines and premium textures.
          </p>
          <button 
            onClick={() => document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-3 bg-white text-black text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white transition-colors duration-500"
          >
            Explore Collection
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-2 items-end">
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
