import { useState } from "react";
import { Check, Calendar, User, Tag, ChevronDown, Award, Building, Sparkles } from "lucide-react";
import { portfolioData } from "../data";
import { PortfolioItem } from "../types";

export default function PortfolioView() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(null);

  const categories = ["All", "ERP & Odoo", "Custom Web App", "SharePoint & M365"];

  const filteredItems = activeFilter === "All" 
    ? portfolioData 
    : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left font-sans" id="portfolio-view-canvas">
      
      {/* Banner */}
      <div className="border-b border-white/[0.06] pb-8 mb-12 space-y-4">
        <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold block">
          NEXTASPECT VERIFIED CLIENT BLUEPRINTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Success Architecture
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          See exactly how NextAspect engineers replace legacy operational chaos with robust, containerized, and compliance-perfect digital software solutions.
        </p>
      </div>

      {/* Filter Menu Row */}
      <div className="flex flex-wrap gap-2 pb-10" id="portfolio-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
              activeFilter === cat 
                ? "bg-primary-indigo/35 text-white border-primary-electric shadow-lg" 
                : "bg-white/[0.01] text-gray-400 border-white/5 hover:border-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case studies list cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-case-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedCase(item)}
            className="p-6 rounded-2xl glass-panel hover:bg-white/[0.01] border border-white/[0.05] hover:border-[#3b82f6]/30 transition-all cursor-pointer flex flex-col justify-between space-y-6 group"
          >
            
            <div className="space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3.5 text-xs">
                <span className="font-mono text-primary-electric font-semibold uppercase">{item.category}</span>
                <span className="text-gray-500 font-medium">{item.industry}</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-primary-electric transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Custom big glowing metric badge */}
              <div className="p-4 rounded-xl bg-gradient-to-tr from-primary-indigo/15 to-secondary-cyan/5 border border-white/[0.03] space-y-1">
                <span className="block text-[9px] font-mono text-gray-500 uppercase font-semibold">Key Audited Metric Impact</span>
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-2xl font-extrabold text-[#10b981] font-display">{item.metric}</span>
                  <span className="text-xs text-gray-400 font-medium">{item.metricLabel}</span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-primary-electric hover:underline">
              <span>Decompress Core Case Blueprint</span>
              <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
            </div>

          </div>
        ))}
      </div>

      {/* ----------------- SUB MODAL: CASE DEEP DIVE WORKSPACE ----------------- */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-[#060913]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/10 p-6 sm:p-8 space-y-6 relative text-left scroll-smooth">
            
            {/* Header top row */}
            <div className="flex items-start justify-between border-b border-white/[0.06] pb-5">
              <div className="space-y-1.5 pr-4">
                <span className="text-[10px] font-mono uppercase text-accent-neon font-extrabold tracking-widest block bg-accent-neon/15 px-2 py-0.5 rounded-md inline-block">
                  AUDITED BUSINESS BLUEPRINT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight">{selectedCase.title}</h3>
                <p className="text-xs text-primary-electric font-semibold font-mono">{selectedCase.category} Operations</p>
              </div>
              <button 
                onClick={() => setSelectedCase(null)}
                className="p-1 px-2.5 text-xs text-gray-400 hover:text-white rounded bg-white/[0.03] hover:bg-white/10 transition-colors cursor-pointer"
              >
                Close ESC
              </button>
            </div>

            {/* Metas summary panel */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-secondary-purple" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600">CLIENT DIVISION</span>
                  <span className="text-white font-medium">{selectedCase.client}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-primary-electric" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600">SECTOR</span>
                  <span className="text-white font-medium">{selectedCase.industry}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-accent-neon" />
                <div>
                  <span className="block text-[8px] font-mono uppercase text-gray-600">VERIFIED GAIN</span>
                  <span className="text-[#10b981] font-bold">{selectedCase.metric} {selectedCase.metricLabel}</span>
                </div>
              </div>
            </div>

            {/* Main content body: Problem vs Solution */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase text-red-400 font-bold tracking-widest">Identified Business Bottlenecks</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#140b0f] p-4 rounded-xl border border-red-500/10">
                  {selectedCase.problem}
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase text-accent-neon font-bold tracking-widest">NextAspect Customized Solution</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#0b1410] p-4 rounded-xl border border-accent-neon/10 animate-fade">
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Business Impacts checklist */}
            <div className="space-y-3 pt-2 border-t border-white/[0.04]">
              <h4 className="text-xs font-mono uppercase text-secondary-cyan font-bold tracking-widest">Business Operations Impact</h4>
              <div className="space-y-2">
                {selectedCase.businessImpact.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-relaxed text-left">
                    <div className="p-0.5 rounded bg-accent-neon/15 text-accent-neon mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology components */}
            <div className="space-y-2.5 pt-2 border-t border-white/[0.04]">
              <h4 className="text-xs font-mono uppercase text-gray-500 font-bold tracking-widest">Technologies Stack Enforced</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCase.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono py-1 px-2.5 rounded bg-white/[0.03] text-gray-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
