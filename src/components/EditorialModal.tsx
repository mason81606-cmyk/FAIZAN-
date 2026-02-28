import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditorialModal({ isOpen, onClose }: ModalProps) {
  const images = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white p-8 md:p-16 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:opacity-50 transition-opacity"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-black/40 block mb-4">
                SS26 Collection
              </span>
              <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight">The Art of Simplicity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {images.map((src, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={src} alt={`Editorial ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-black/60 italic">Frame {i + 1} — Minimalist Study</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-sm leading-relaxed text-black/70 mb-8">
                Every piece in this collection was curated to embody the essence of modern sophistication. We believe that true luxury lies in the details that often go unnoticed.
              </p>
              <button 
                onClick={onClose}
                className="px-12 py-4 bg-black text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black/80 transition-colors"
              >
                Return to Shop
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
