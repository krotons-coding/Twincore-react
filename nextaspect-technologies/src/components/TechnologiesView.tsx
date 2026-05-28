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
                      ? "bg-white/[0.04] text-white border-primary-electric/40 shadow-sm" 
                      : "bg-[#0b0f19] text-gray-400 border-white/5 hover:border-white/10 hover:text-white"
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
              <div className="w-12 h-12 rounded-xl bg-[#0b0f19] border border-white/10 text-primary-electric flex items-center justify-center font-mono font-extrabold text-sm">
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

          {/* Technical terminal showcase simulation */}
          <div className="bg-[#0c0e16] rounded-xl border border-white/[0.04] p-5 font-mono text-xs text-[#06b6d4] text-left space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
              <span className="text-[10px] text-gray-500">terminal@nextaspect-sandbox:~</span>
              <span className="text-[9px] text-[#10b981] font-bold">STRICT SYSTEM STATUS</span>
            </div>
            
            <div className="space-y-1.5 text-[11px] leading-relaxed">
              <div><span className="text-gray-500">$</span> cat package.spec.json | grep "{selectedTech.name}"</div>
              <div className="text-gray-400">
                &gt; Loaded library version 2026.5.28 <br />
                &gt; Mapped types safe parameters verification: SUCCESS <br />
                &gt; Security certificates audit: ISO-COMPLIANT
              </div>
              <div className="text-purple-400">// Unified stack verification checks complete with 0 alerts.</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
