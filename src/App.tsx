import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import HelpModal from './components/HelpModal';
import EditorialModal from './components/EditorialModal';
import { motion } from 'motion/react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isEditorialOpen, setIsEditorialOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const scrollToGrid = () => {
    document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar 
        onSelectCategory={setSelectedCategory} 
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ProductGrid 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </motion.div>

        {/* Editorial Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Editorial"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:pl-12">
              <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-black/40 block mb-6">
                Editorial / SS26
              </span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                The Art of <br /> <span className="italic">Simplicity</span>
              </h2>
              <p className="text-sm md:text-base text-black/70 leading-relaxed max-w-md mb-12">
                Our latest editorial explores the intersection of architectural forms and fluid fabrics. A study in contrast, designed for the modern individual who values both structure and ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsEditorialOpen(true)}
                  className="px-12 py-4 bg-black text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black/80 transition-colors"
                >
                  View Editorial
                </button>
                <button 
                  onClick={scrollToGrid}
                  className="px-12 py-4 border border-black text-black text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white transition-colors"
                >
                  Shop the Look
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 px-6 text-center bg-[#F5F5F5]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-tight">Join Faizan Shop</h2>
            <p className="text-sm text-black/60 tracking-widest uppercase mb-12">
              Be the first to know about new arrivals, lookbooks, and exclusive events.
            </p>
            {isSubscribed ? (
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-emerald-600 font-bold tracking-[0.2em] uppercase"
              >
                Thank you for joining our community!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="YOUR EMAIL ADDRESS"
                  className="flex-grow bg-white border border-black/10 px-6 py-4 text-[11px] tracking-widest outline-none focus:border-black transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="bg-black text-white px-10 py-4 text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black/80 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <EditorialModal isOpen={isEditorialOpen} onClose={() => setIsEditorialOpen(false)} />
    </div>
  );
}
