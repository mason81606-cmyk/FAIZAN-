import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MessageCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: ModalProps) {
  const helpTopics = [
    { title: 'SHOP AT FAIZAN.COM', items: ['My Account', 'Items and Sizes', 'Gift Options'] },
    { title: 'SHIPPING', items: ['Delivery Options', 'Status of your order'] },
    { title: 'PAYMENT', items: ['Payment Methods', 'Invoices'] },
    { title: 'EXCHANGES AND RETURNS', items: ['How to return', 'Refunds'] }
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
            className="relative w-full max-w-4xl bg-white p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:opacity-50 transition-opacity"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <h2 className="text-3xl font-serif mb-12 uppercase tracking-tight">How can we help?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {helpTopics.map((topic) => (
                <div key={topic.title}>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-4">{topic.title}</h4>
                  <ul className="space-y-2">
                    {topic.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-sm text-black/60 hover:text-black transition-colors">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-black/10">
              <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-8">Contact Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <button className="flex flex-col items-center gap-3 p-6 border border-black/5 hover:bg-black/5 transition-colors">
                  <Phone size={20} strokeWidth={1} />
                  <span className="text-[10px] tracking-widest uppercase font-bold">Call Us</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 border border-black/5 hover:bg-black/5 transition-colors">
                  <Mail size={20} strokeWidth={1} />
                  <span className="text-[10px] tracking-widest uppercase font-bold">Email</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-6 border border-black/5 hover:bg-black/5 transition-colors">
                  <MessageCircle size={20} strokeWidth={1} />
                  <span className="text-[10px] tracking-widest uppercase font-bold">Chat</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
