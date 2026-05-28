import { useState, useEffect } from "react";
import { Code, Server, Database, Cloud, Activity, ChevronRight, CheckCircle2, Terminal, ArrowUpRight } from "lucide-react";
import { technologiesData } from "../data";
import { Technology } from "../types";

interface TechnologiesViewProps {
  initialCategory?: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function TechnologiesView({ initialCategory, onNavigate }: TechnologiesViewProps) {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "erp" | "database" | "cloud">("frontend");
  const [selectedTech, setSelectedTech] = useState<Technology>(technologiesData[0]);

  // Handle initialization category from Navbar
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory as any);
      const match = technologiesData.find((t) => t.category === initialCategory);
      if (match) setSelectedTech(match);
    }
  }, [initialCategory]);

  // Adjust selected tech when category switches
  const handleCategorySwitch = (cat: "frontend" | "backend" | "erp" | "database" | "cloud") => {
    setActiveCategory(cat);
    const related = technologiesData.filter((t) => t.category === cat);
    if (related.length > 0) setSelectedTech(related[0]);
  };

  const getCatClass = (cat: string) => {
    const isActive = activeCategory === cat;
    return `px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
      isActive 
        ? "bg-primary-indigo/35 text-white border-primary-electric shadow-lg" 
        : "bg-white/[0.01] text-gray-400 border-white/5 hover:border-white/10 hover:text-white"
    }`;
  };

  // Static list for categories
  const categoriesList = [
    { id: "frontend", name: "Frontend Networks", icon: Code },
    { id: "backend", name: "Backend Core & APIs", icon: Server },
    { id: "erp", name: "Enterprise ERP & DMS", icon: Database },
    { id: "database", name: "Transactional Database", icon: Database },
    { id: "cloud", name: "Cloud Clusters & DevOps", icon: Cloud }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left font-sans" id="technologies-view-canvas">
      
      {/* Page Title */}
      <div className="border-b border-white/[0.06] pb-8 mb-12 space-y-4">
        <span className="text-xs font-mono tracking-widest text-[#a855f7] uppercase font-bold block">
          NEXTASPECT TECHNOLOGY CODES & COMPILING INDEX
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Engineered Tech Stacks
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          Explore the exact language frameworks, runtime packages, and database layers NextAspect specialists use to ensure speed and regulatory compliance.
        </p>
      </div>

      {/* Parent Category selector row */}
      <div className="flex flex-wrap gap-2.5 pb-8 border-b border-white/[0.04]" id="tech-categories-list">
        {categoriesList.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySwitch(cat.id as any)}
              className={getCatClass(cat.id)}
            >
              <span className="flex items-center space-x-1.5">
                <CatIcon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Left child sidebar listing of tech, Right child details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
        
        {/* Child sidebar listing */}
        <div className="lg:col-span-3 space-y-2 lg:sticky lg:top-24" id="tech-sidebar-list">
          <span className="text-[10px] font-mono tracking-widest text-primary-electric font-bold uppercase block px-3 pb-1">
            Component Modules
          </span>
          {technologiesData
            .filter((t) => t.category === activeCategory)
            .map((t) => {
              const isSelected = selectedTech.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTech(t)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-semibold tracking-wide transition-all cursor-pointer block ${
                    isSelected 
                      ? "bg-primary-indigo text-white border-primary-indigo shadow-md font-bold" 
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
        </div>

        {/* Child deep-dive spec panel */}
        <div className="lg:col-span-9 space-y-8" id="tech-profile-panel">
          
          <div className="p-8 rounded-2xl glass-panel border border-white/[0.05] relative overflow-hidden space-y-6">
            
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary-indigo/5 blur-[100px] pointer-events-none" />

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-primary-indigo flex items-center justify-center font-mono font-extrabold text-sm">
                {selectedTech.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">{selectedTech.name} Specification</h2>
                <span className="text-[10px] font-mono uppercase text-gray-400 block mt-0.5">Technology Profile File</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase text-[#10b981] font-bold tracking-widest">Architectural Overview</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
                {selectedTech.overview}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-white/[0.04]">
              <h3 className="text-xs font-mono uppercase text-[#06b6d4] font-bold tracking-widest">Why Choose {selectedTech.name}?</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
                {selectedTech.whyChoose}
              </p>
            </div>

          </div>

          {/* Business Benefits & Case blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-xl border border-white/[0.03] space-y-3 bg-[#0a0d15] text-left">
              <h4 className="text-xs font-mono uppercase text-secondary-purple font-bold tracking-widest">
                Business & Operational Benefits
              </h4>
              <ul className="space-y-2 pt-1 text-xs text-gray-300">
                {selectedTech.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-neon flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.03] space-y-3 bg-[#0a0d15] text-left">
              <h4 className="text-xs font-mono uppercase text-primary-electric font-bold tracking-widest">
                High-Converting Use Cases
              </h4>
              <ul className="space-y-2 pt-1 text-xs text-gray-300">
                {selectedTech.useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Cloud Integrity and related service linking */}
          <div className="p-6 rounded-xl border border-white/[0.03] bg-dot-pattern space-y-4">
            <h4 className="text-xs font-mono uppercase text-[#10b981] font-bold tracking-widest">Integration Capabilities</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {selectedTech.integrationCapabilities}
            </p>
            
            <div className="pt-2 border-t border-white/[0.04] flex flex-wrap gap-2 items-center">
              <span className="text-[10px] text-gray-500 font-mono uppercase font-semibold">Related Service Solutions:</span>
              {selectedTech.relatedServices.map((srv) => (
                <span 
                  key={srv}
                  onClick={() => onNavigate("services")}
                  className="text-[10px] font-sans font-medium py-1 px-2.5 rounded-lg bg-white/[0.03] text-primary-electric hover:underline cursor-pointer flex items-center space-x-0.5"
                >
                  <span>{srv}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              ))}
            </div>
          </div>

          {/* Custom vector schematic representing security & compilation verification flow */}
          <div className="bg-[#05070c]/90 rounded-2xl border border-white/[0.08] p-5 text-left flex flex-col justify-between min-h-[220px] relative overflow-hidden group shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-emerald-500/10 blur-[50px] pointer-events-none" />
            
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] relative z-10">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono tracking-wider font-extrabold text-slate-400 uppercase">
                  {selectedTech.name} Live Integration Audit
                </span>
              </div>
              <span className="text-[8px] font-mono tracking-widest text-[#10b981] font-black uppercase bg-[#10b981]/15 px-2 py-0.5 rounded border border-[#10b981]/20">
                VERIFIED SAFE
              </span>
            </div>

            <div className="flex-grow flex items-center justify-center py-4 relative z-10">
              <svg viewBox="0 0 450 100" fill="none" className="w-full h-auto max-w-sm">
                {/* Visual Connector Path 1 */}
                <g>
                  <path d="M 60,50 L 220,50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
                  </path>
                </g>
                
                {/* Visual Connector Path 2 */}
                <g>
                  <path d="M 220,50 L 390,50" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Source module Node */}
                <circle cx="60" cy="50" r="16" fill="#061e16" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="60" cy="50" r="8" fill="#10b981" fillOpacity="0.3" />
                <text x="60" y="82" fill="#8892b0" fontSize="8" textAnchor="middle" fontWeight="black" fontFamily="monospace">PKG BOUNDS</text>

                {/* Security Gate Guard Node */}
                <circle cx="220" cy="50" r="18" fill="#111827" stroke="#3b82f6" strokeWidth="2" />
                <path d="M 215,48 L 225,48 M 220,43 L 220,57" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="220" y="82" fill="#8892b0" fontSize="8" textAnchor="middle" fontWeight="black" fontFamily="monospace">PORT SCAN</text>

                {/* Target verified vault Node */}
                <circle cx="390" cy="50" r="16" fill="#1e1828" stroke="#a855f7" strokeWidth="1.5" />
                <circle cx="390" cy="50" r="6" fill="#a855f7" />
                <text x="390" y="82" fill="#8892b0" fontSize="8" textAnchor="middle" fontWeight="black" fontFamily="monospace">ISO CERTIFICATE</text>
              </svg>
            </div>

            <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between relative z-10 text-[9px] text-slate-500 font-mono">
              <span>MAPPED ENVIRONMENT: COMPLIANT</span>
              <span>VERIFIED STACK SHIELD v4.1</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
