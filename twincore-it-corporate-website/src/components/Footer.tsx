import React, { useState } from 'react';
import { Logo } from './Logo';
import { SERVICES, PRODUCTS_DATA } from '../data';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  Linkedin, Github, ChevronRight, HelpCircle, Network
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  onNavigateToProductCat?: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  setCurrentPage, 
  onNavigateToService,
  onNavigateToProductCat
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (tabId: string) => {
    setCurrentPage(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId: string) => {
    setCurrentPage('services');
    if (onNavigateToService) {
      onNavigateToService(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (catId: string) => {
    setCurrentPage('products');
    if (onNavigateToProductCat) {
      onNavigateToProductCat(catId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 select-none">
      {/* Upper interactive band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-slate-900">
        
        {/* Company Column */}
        <div className="lg:col-span-4 space-y-6">
          <Logo lightText={true} />
          
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Twincore IT is a hybrid product and service-based software engineering boutique. We specialize in robust Full Stack Web Applications, Cloud DevOps automation, and world-class ERP configurations using Odoo.
          </p>

          <div className="flex gap-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dynamic Service Links (Parent-Child layout links) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Core Offerings</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {SERVICES.map(s => (
              <li key={s.id}>
                <button 
                  type="button" 
                  onClick={() => handleServiceSelect(s.id)}
                  className="hover:text-white hover:underline text-left cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500" /> {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Product Catalog Links */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2.5">
          <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Products Catalog</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            {PRODUCTS_DATA.map(cat => (
              <li key={cat.id}>
                <button 
                  type="button" 
                  onClick={() => handleProductSelect(cat.id)}
                  className="hover:text-white hover:underline text-left cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500" /> {cat.title}
                </button>
              </li>
            ))}
            <li>
              <button 
                type="button" 
                onClick={() => handleNav('products')}
                className="hover:text-white hover:underline text-left cursor-pointer flex items-center gap-1 text-blue-400 font-semibold"
              >
                <ChevronRight className="w-3 h-3 text-blue-400" /> View Comprehensive Catalog
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Navigation */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-4">Corporate Info</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-white hover:underline cursor-pointer">
                Home Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-white hover:underline cursor-pointer">
                About Our DNA
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('blog')} className="hover:text-white hover:underline cursor-pointer text-blue-400 font-semibold">
                Blogs & Insights
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('technology')} className="hover:text-white hover:underline cursor-pointer">
                Technology Standard
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-white hover:underline cursor-pointer">
                Secure Support Desk
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info and Newsletter Column */}
        <div className="lg:col-span-3.5 space-y-6">
          <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-900">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-3">Newsletter Subscription</h4>
            <p className="text-[11px] text-slate-400 leading-normal mb-3">Subscribe to receive tech updates, cloud optimization tips, & advanced Odoo tricks.</p>
            
            {subscribed ? (
              <div className="bg-blue-950/50 border border-blue-500/30 rounded-xl p-3 flex gap-2.5 items-center">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span className="text-[11px] text-blue-300 font-semibold leading-tight">Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs focus:border-blue-500 focus:outline-none w-full text-white placeholder-slate-600"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 hover:scale-102 active:scale-98 text-white p-2.5 rounded-xl transition duration-150 flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Mid Connective Band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 border-b border-slate-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-blue-500 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-white">Global Headquarters</p>
            <p className="text-[11px] text-slate-500 mt-0.5">742 Enterprise parkway, Tech Meadows, TX 75001</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-blue-500 shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-white">Inquiries & Support Desk</p>
            <p className="text-[11px] text-slate-500 mt-0.5">operations@twincore-it.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-blue-500 shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-white">Direct Advisory Support</p>
            <p className="text-[11px] text-slate-500 mt-0.5">+1 (800) 555-0199 (Mon-Fri)</p>
          </div>
        </div>
      </div>

      {/* Underbar Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} Twincore IT Global Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:underline">SLA Guarantees</a>
        </div>
      </div>
    </footer>
  );
};
