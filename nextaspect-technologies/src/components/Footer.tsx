import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please input a valid email address.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please write an email matching format user@example.com.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200/80 pt-20 pb-12 overflow-hidden bg-dot-pattern" id="main-footer">
      
      {/* Decorative subtle ambient soft blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-purple-100/30 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-200">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigate("home")}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-sm">
                <span className="font-display font-bold text-white text-lg">N</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  NextAspect
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-slate-500 font-bold uppercase">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              We engineer enterprise-grade ERP portals, SharePoint cloud intranets, and bespoke React/Next architectures. Code your vision to reality with high-converting software systems.
            </p>

            <div className="flex items-center space-x-3">
              <a href="#github" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 shadow-sm transition-all cursor-pointer">
                <Github className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 shadow-sm transition-all cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 shadow-sm transition-all cursor-pointer">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-sm relative pb-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-blue-600">
              Internal Navigation
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <span onClick={() => onNavigate("home")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>Home</span>
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("about")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>About Us</span>
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("products")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>Aspect Products</span>
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("portfolio")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>Case Studies</span>
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("blog")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>Solutions Blog</span>
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("contact")} className="text-slate-700 hover:text-blue-600 cursor-pointer font-semibold transition-colors flex items-center space-x-1">
                  <span>Inquire Consultation</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-sm relative pb-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-purple-600">
              Key Engineering Areas
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <span onClick={() => onNavigate("services", "sharepoint-development")} className="text-slate-700 hover:text-purple-600 cursor-pointer font-semibold transition-colors">
                  SharePoint Development
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("services", "react-js-development")} className="text-slate-700 hover:text-purple-600 cursor-pointer font-semibold transition-colors">
                  React JS Application Setup
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("services", "nextjs-development")} className="text-slate-700 hover:text-purple-600 cursor-pointer font-semibold transition-colors">
                  Next.js Web Platforms
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("services", "odoo-erp-development")} className="text-slate-700 hover:text-purple-600 cursor-pointer font-semibold transition-colors">
                  Odoo ERP Implementations
                </span>
              </li>
              <li>
                <span onClick={() => onNavigate("services", "api-integration")} className="text-slate-700 hover:text-purple-600 cursor-pointer font-semibold transition-colors">
                  API & Ledger Integration
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-sm relative pb-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-blue-600">
              Insights Newsletter
            </h3>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Receive premium technology briefs regarding Odoo, React optimizations, and cloud efficiency gains.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3" id="newsletter-form">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-colors shadow-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 p-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
                  id="btn-subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              
              {/* Validation Response Logs */}
              {error && <p className="text-xs text-red-500 font-semibold select-none pl-1">{error}</p>}
              {subscribed && (
                <div className="flex items-center space-x-1.5 text-xs text-emerald-600 select-none pl-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-550" />
                  <span>Subscribed! Check your verification briefing.</span>
                </div>
              )}
            </form>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>NextAspect Tower, Sec-62, Tech Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href="mailto:solutions@nextaspect.tech" className="hover:underline text-slate-700 font-semibold">solutions@nextaspect.tech</a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-semibold space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} NextAspect Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-blue-600 cursor-pointer transition-colors text-slate-600">Privacy Policy</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors text-slate-600">Workspace Terms</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors text-slate-600">GDPR compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
