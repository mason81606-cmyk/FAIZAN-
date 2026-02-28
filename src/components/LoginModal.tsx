import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: ModalProps) {
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
            className="relative w-full max-w-md bg-white p-12 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:opacity-50 transition-opacity"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <h2 className="text-3xl font-serif mb-8 uppercase tracking-tight">Log In</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] tracking-widest uppercase font-bold text-black/60 block mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-black/20 py-2 text-sm outline-none focus:border-black transition-colors"
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase font-bold text-black/60 block mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full border-b border-black/20 py-2 text-sm outline-none focus:border-black transition-colors"
                  placeholder="ENTER YOUR PASSWORD"
                />
              </div>
              
              <div className="pt-4">
                <button className="w-full py-4 bg-black text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black/80 transition-colors">
                  Log In
                </button>
                <button className="w-full mt-4 py-4 border border-black text-black text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white transition-colors">
                  Create Account
                </button>
              </div>
              
              <div className="text-center">
                <a href="#" className="text-[10px] tracking-widest uppercase text-black/40 hover:text-black transition-colors">
                  Forgot your password?
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
