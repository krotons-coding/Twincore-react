import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock, Globe, Shield, CheckCircle2, ChevronRight, AlertTriangle } from "lucide-react";

export default function ContactView() {
  // Input parameter states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [scopingUnit, setScopingUnit] = useState("Odoo ERP Setup & Tuning");
  const [notes, setNotes] = useState("");

  // Validation output logs
  const [errorLog, setErrorLog] = useState("");
  const [successLog, setSuccessLog] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorLog("Name and Email parameters represent required administrative credentials.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorLog("Email parameter fails standard RFC syntax format checks.");
      return;
    }
    setErrorLog("");
    setSuccessLog(true);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setTimeout(() => {
      setSuccessLog(false);
    }, 6000);
  };

  // Helper calculation for Corporate Timezone vs Local Timezone
  const corporateTimezoneOffsetHours = 5.5; // Tech Headquarters (IST)
  const localTime = new Date();
  const utcHours = localTime.getUTCHours();
  const utcMinutes = localTime.getUTCMinutes();
  
  const corpTotalMinutes = (utcHours * 60 + utcMinutes + corporateTimezoneOffsetHours * 60) % 1440;
  const corpDisplayHours = Math.floor(corpTotalMinutes / 60);
  const corpDisplayMinutes = Math.floor(corpTotalMinutes % 60);
  
  const isOfficeOpen = corpDisplayHours >= 9 && corpDisplayHours < 18;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left font-sans" id="contact-view-canvas">
      
      {/* Visual Title Header */}
      <div className="border-b border-white/[0.06] pb-8 mb-12 space-y-4">
        <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold block">
          NEXTASPECT SECURE SYSTEM COMPILER BOARD
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Start Your Journey
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          Ready to code your vision to reality? Map out your specific operational requirements, scale parameters, and let our specialists draft custom systems scoping briefs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-workspace-columns">
        
        {/* Left Side: Parameters Form inputs section */}
        <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.06] space-y-6" id="scoping-form-container">
          
          <div className="space-y-1">
            <h3 className="font-display font-bold text-white text-lg">Define System Parameters</h3>
            <p className="text-xs text-gray-400">Complete standard credentials for engineering compilation</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4" id="system-scoping-form">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Your Name / Contact Identity</label>
                <input 
                  type="text" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Mercer"
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-electric transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Email Routing Channel</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-electric transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Phone Line (Optional)</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (800) 555-0180"
                  className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-electric transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Primary System Needs Target</label>
                <select 
                  value={scopingUnit}
                  onChange={(e) => setScopingUnit(e.target.value)}
                  className="w-full px-4 py-3 text-xs rounded-xl bg-[#0e1220] border border-white/10 text-white focus:outline-none focus:border-primary-electric cursor-pointer"
                >
                  <option>Odoo ERP Setup & Tuning</option>
                  <option>SharePoint Document Management Hub</option>
                  <option>Next.js High Perf Web Catalogs</option>
                  <option>Bespoke React Dashboard Systems</option>
                  <option>Cloud Infrastructure DevOps Containers</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 block">Operational Bottlenecks / Notes</label>
              <textarea 
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Briefly describe what inventory spreadsheets or documents you need connected, or custom modules required..."
                className="w-full px-4 py-3 text-xs rounded-xl bg-white/[0.02] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-electric transition-colors"
              />
            </div>

            {/* Error notifications log */}
            {errorLog && (
              <div className="p-3 bg-red-500/10 border border-red-500/25 rounded-xl flex items-center space-x-2 text-xs text-red-400 select-none">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{errorLog}</span>
              </div>
            )}

            {/* Success logs notification */}
            {successLog && (
              <div className="p-3 bg-accent-neon/15 border border-accent-neon/25 rounded-xl flex items-center space-x-2 text-xs text-accent-neon select-none">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>NextAspect system scoping blueprint logged! An architecture engineer will compile specifications shortly.</span>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-indigo via-primary-electric to-secondary-cyan text-white text-xs font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-primary-indigo/25 transition-all cursor-pointer flex justify-center items-center space-x-2"
              id="btn-submit-scoping"
            >
              <span>Submit System Specification</span>
              <Send className="w-3.5 h-3.5" />
            </button>

          </form>

        </div>

        {/* Right Side: Corporate details and interactive timezone checking map */}
        <div className="lg:col-span-5 space-y-6" id="contact-company-details">
          
          {/* Corporate Offices Metas Info */}
          <div className="rounded-2xl glass-panel p-6 border border-white/[0.06] space-y-6 text-left">
            <h3 className="font-display font-semibold text-white tracking-wide text-sm border-b border-white/[0.05] pb-3.5 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-primary-electric animate-spin" />
              <span>NextAspect Technology Hub</span>
            </h3>

            <div className="space-y-4 text-xs text-gray-300">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600 font-semibold">Headquarters Tower</span>
                  <span className="text-white block mt-0.5">Plot No. C-20, Software Zone Sec-62, Tech Node.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600 font-semibold">Inquiries Routing</span>
                  <a href="mailto:solutions@nextaspect.tech" className="text-white hover:underline block mt-0.5 font-medium">solutions@nextaspect.tech</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600 font-semibold">Operational Phone Desk</span>
                  <a href="tel:+18005550180" className="text-white hover:underline block mt-0.5 font-medium">+1 (800) 555-0180 (Direct Line)</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600 font-semibold">Operating Shifts</span>
                  <span className="text-white block mt-0.5">09:00 - 18:00 (Corporate standard timezone IST)</span>
                </div>
              </div>

            </div>

            {/* Micro timezone alignment checks indicator */}
            <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span>Corporate Desk Hour:</span>
              <div className="flex items-center space-x-1.5 uppercase font-bold text-xs">
                <span className="text-white">
                  {corpDisplayHours.toString().padStart(2, "0")}:{corpDisplayMinutes.toString().padStart(2, "0")} IST
                </span>
                <span className={isOfficeOpen ? "text-accent-neon" : "text-yellow-500"}>
                  ({isOfficeOpen ? "Open" : "Standby"})
                </span>
              </div>
            </div>

          </div>

          {/* Interactive Mock SVG map blueprint */}
          <div className="rounded-2xl glass-panel border border-white/[0.05] p-1 overflow-hidden h-[180px] relative bg-[#090c13]" id="vector-maps-blueprint">
            <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
            
            {/* Styled vector placeholder showing location coordinate connections */}
            <div className="w-full h-full flex flex-col justify-center items-center p-4 relative z-10 text-center space-y-2">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-primary-indigo/30 text-primary-electric flex items-center justify-center animate-ping absolute -top-1 -left-1" />
                <div className="w-4 h-4 rounded-full bg-primary-electric flex items-center justify-center text-white relative shadow-lg font-bold text-[8px]">
                  📍
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">LAT/LONG GRID MATRIX</span>
                <span className="block text-xs font-semibold text-white">28.6253&deg; N, 77.3725&deg; E</span>
              </div>
              <span className="text-[9px] text-[#06b6d4] font-mono">NEXTASPECT SECURE NODE LINK ONLINE</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
