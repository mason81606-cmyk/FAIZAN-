import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-serif tracking-tighter font-bold">FAIZAN SHOP</h1>
          <p className="text-xs leading-relaxed text-black/60 max-w-xs">
            A curated destination for modern fashion, bringing you the best of minimalist design and timeless elegance.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Help</h4>
          <ul className="flex flex-col gap-3 text-[11px] tracking-wider uppercase text-black/60">
            <li><a href="#" className="hover:text-black transition-colors">Shop at Faizan.com</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Product</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Payment</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Exchanges and Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Follow Us</h4>
          <ul className="flex flex-col gap-3 text-[11px] tracking-wider uppercase text-black/60">
            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Youtube</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold mb-6">Newsletter</h4>
          <p className="text-[11px] text-black/60 uppercase tracking-wider mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          {isSubscribed ? (
            <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">Thank you for joining!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex border-b border-black pb-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL" 
                className="bg-transparent text-[10px] tracking-widest outline-none w-full"
                required
              />
              <button type="submit" className="text-[10px] font-bold tracking-widest uppercase">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-4">
        <p className="text-[10px] tracking-widest text-black/40 uppercase">
          © 2026 VESTIGE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] tracking-widest text-black/40 uppercase">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-black transition-colors">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
