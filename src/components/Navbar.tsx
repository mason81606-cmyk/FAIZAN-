import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onSelectCategory: (category: string) => void;
  onOpenLogin: () => void;
  onOpenHelp: () => void;
}

export default function Navbar({ onSelectCategory, onOpenLogin, onOpenHelp }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'ALL', value: 'ALL' },
    { label: 'NEW COLLECTION', value: 'NEW COLLECTION' },
    { label: 'DRESSES', value: 'DRESSES' },
    { label: 'KNITWEAR', value: 'KNITWEAR' },
    { label: 'TROUSERS', value: 'TROUSERS' },
    { label: 'SHOES & BAGS', value: 'SHOES' }, // Mapping to existing categories in constants
    { label: 'ACCESSORIES', value: 'ACCESSORIES' }
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
          isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 hover:opacity-50 transition-opacity"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
          
          <div className="hidden md:flex items-center gap-6 text-[11px] font-medium tracking-widest uppercase">
            <button onClick={() => onSelectCategory('ALL')} className="hover:underline underline-offset-4">Search</button>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl md:text-5xl font-serif tracking-[-0.05em] font-bold">
            FAIZAN SHOP
          </h1>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-medium tracking-widest uppercase">
          <button onClick={onOpenLogin} className="hidden md:block hover:underline underline-offset-4">Log In</button>
          <button onClick={onOpenHelp} className="hidden md:block hover:underline underline-offset-4">Help</button>
          <button className="p-2 hover:opacity-50 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full md:w-[400px] bg-white z-[70] p-12 flex flex-col"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 hover:opacity-50 transition-opacity"
              >
                <X size={24} strokeWidth={1} />
              </button>

              <div className="mt-12 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <button 
                    key={item.label}
                    className="text-2xl font-serif hover:italic transition-all duration-300 text-left"
                    onClick={() => {
                      onSelectCategory(item.value);
                      setIsMenuOpen(false);
                      // Scroll to product grid
                      document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-black/10 flex flex-col gap-4 text-[11px] tracking-widest uppercase font-medium">
                <a href="#" className="hover:opacity-50">+ INFO</a>
                <a href="#" className="hover:opacity-50">NEWSLETTER</a>
                <a href="#" className="hover:opacity-50">INSTAGRAM</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
