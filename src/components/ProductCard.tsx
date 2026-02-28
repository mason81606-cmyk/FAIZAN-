import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-white">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          
          <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 backdrop-blur-sm">
            <button className="w-full py-3 text-[10px] tracking-widest uppercase font-bold border border-black hover:bg-black hover:text-white transition-colors">
              Quick View
            </button>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col gap-1">
          <span className="text-[10px] tracking-widest text-black/50 uppercase font-medium">
            {product.category}
          </span>
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xs tracking-wider font-medium uppercase leading-relaxed">
              {product.name}
            </h3>
            <span className="text-xs font-medium">
              {product.price.toFixed(2)} USD
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>

              <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="mb-8">
                  <span className="text-[11px] tracking-[0.2em] text-black/40 uppercase font-bold block mb-2">
                    {product.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4 uppercase tracking-tight">
                    {product.name}
                  </h2>
                  <p className="text-xl font-medium">
                    {product.price.toFixed(2)} USD
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase font-bold text-black/60 mb-2">Description</h4>
                    <p className="text-sm leading-relaxed text-black/80 font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/5">
                    <h4 className="text-[10px] tracking-widest uppercase font-bold text-black/60 mb-4">Composition & Care</h4>
                    <ul className="text-[11px] space-y-2 text-black/60 uppercase tracking-wider">
                      <li>• 70% Wool, 30% Polyamide</li>
                      <li>• Do not wash</li>
                      <li>• Do not bleach</li>
                      <li>• Iron at max 110ºC</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/10">
                  <a 
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-black text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-black/80 transition-colors"
                  >
                    View on Store <ExternalLink size={14} />
                  </a>
                  <p className="mt-4 text-[10px] text-center text-black/40 italic">
                    * You will be redirected to our partner store to complete your purchase.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
