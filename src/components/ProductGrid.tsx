import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { cn } from '../lib/utils';

interface ProductGridProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProductGrid({ selectedCategory, onSelectCategory }: ProductGridProps) {
  const filteredProducts = selectedCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory || (selectedCategory === 'SHOES' && (p.category === 'SHOES' || p.category === 'ACCESSORIES')));

  return (
    <section id="product-grid" className="py-24 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            {selectedCategory === 'ALL' ? 'The Selection' : selectedCategory}
          </h2>
          <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-black/50">
            Curated pieces for the modern wardrobe
          </p>
        </div>
        <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold">
          <button 
            onClick={() => onSelectCategory('ALL')}
            className={cn(selectedCategory === 'ALL' ? "underline underline-offset-8" : "opacity-40 hover:opacity-100 transition-opacity")}
          >
            All
          </button>
          <button 
            onClick={() => onSelectCategory('NEW COLLECTION')}
            className={cn(selectedCategory === 'NEW COLLECTION' ? "underline underline-offset-8" : "opacity-40 hover:opacity-100 transition-opacity")}
          >
            New
          </button>
          <button 
            onClick={() => onSelectCategory('SHOES')}
            className={cn(selectedCategory === 'SHOES' ? "underline underline-offset-8" : "opacity-40 hover:opacity-100 transition-opacity")}
          >
            Trending
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-sm tracking-widest uppercase text-black/40">No items found in this category.</p>
        </div>
      )}
    </section>
  );
}
