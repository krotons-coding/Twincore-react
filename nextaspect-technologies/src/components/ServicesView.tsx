import { useState, useEffect } from "react";
import { Check, MessageSquare, ChevronDown, HelpCircle, Code, Cpu, Database, Cloud, Sparkles, Building, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "../data";
import { Service } from "../types";

interface ServicesViewProps {
  initialSubPage?: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function ServicesView({ initialSubPage, onNavigate }: ServicesViewProps) {
  const [selectedService, setSelectedService] = useState<Service>(servicesData[0]);

  useEffect(() => {
    if (initialSubPage) {
      const match = servicesData.find((s) => s.id === initialSubPage);
      if (match) setSelectedService(match);
    }
  }, [initialSubPage]);

  // Handle active class
  const getSubLinkClass = (id: string) => {
    const isSelected = selectedService.id === id;
    return `w-full text-left py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer block ${
      isSelected 
        ? "bg-primary-indigo/35 text-white border-l-2 border-primary-electric shadow-sm" 
        : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
    }`;
  };

  // Icon mapping
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "SharepointIcon": return Cloud;
      case "ReactIcon": return Code;
      case "NextIcon": return Sparkles;
      case "MernIcon": return Cpu;
      case "TypeScriptIcon": return Code;
      case "OdooIcon": return Database;
      default: return Layers;
    }
  };

  const Icon = getServiceIcon(selectedService.iconName);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left" id="services-view-canvas">
      
      {/* Banner / Header Title */}
      <div className="border-b border-white/[0.06] pb-8 mb-12 space-y-4">
        <span className="text-xs font-mono tracking-widest text-primary-electric uppercase font-bold block">
          NEXTASPECT SPECIALIZED SOLUTIONS INDEX
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Enterprise Systems & Softwares
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          From micro-optimized React client dashboards to full-scale multi-subsidiary Odoo ERP and modern cloud deployment pipelines, we construct stable business code. Explore our 12 primary divisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Side Navigation table of contents / TOC */}
        <div className="lg:col-span-3 rounded-2xl glass-panel p-4 border border-white/[0.05] space-y-3 sticky top-24" id="services-sidebar-nav">
          <span className="text-[10px] font-mono tracking-widest text-[#10b981] font-bold uppercase block px-4 pb-2 border-b border-white/[0.05]">
            Engineering Units
          </span>
          <div className="space-y-1 pt-2">
            {servicesData.map((srv) => (
              <span 
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={getSubLinkClass(srv.id)}
              >
                {srv.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Deep Dive Panel of Selected Service */}
        <div className="lg:col-span-9 space-y-12" id="service-deep-dive-panel">
          
          {/* Service Profile Header Card */}
          <div className="rounded-2xl glass-panel p-8 border border-white/[0.06] bg-dot-pattern relative overflow-hidden space-y-6">
            
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3b82f6]/10 blur-[120px] pointer-events-none" />

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0b0f19] border border-white/10 flex items-center justify-center text-primary-electric">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {selectedService.name}
                </h2>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <span className="text-[10px] font-mono uppercase bg-primary-indigo/25 text-white px-2 py-0.5 rounded-md font-bold tracking-wide">
                    NextAspect Certified
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-white/[0.04] text-gray-400 px-2 py-0.5 rounded-md">
                    SLA Checked
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
              {selectedService.detailedDesc}
            </p>

            {/* CTA inline query */}
            <div className="pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                Need customized parameters? Consult with NextAspect in a private digital workshop.
              </div>
              <button 
                onClick={() => onNavigate("contact")}
                className="py-2.5 px-5 rounded-lg bg-gradient-to-r from-primary-indigo to-primary-electric text-white text-xs font-semibold hover:shadow-lg transition-all cursor-pointer flex items-center space-x-1.5"
                id="btn-service-consult"
              >
                <span>Request Custom Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-lg tracking-wide">
              Strategic Operational Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedService.benefits.map((b, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.02] flex items-start space-x-3 text-left"
                >
                  <div className="p-1 rounded-md bg-accent-neon/15 text-accent-neon mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-gray-300 leading-normal font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-lg tracking-wide">
              Included Technical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedService.features.map((f, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.02] hover:border-primary-electric/25 transition-all text-left flex flex-col justify-between space-y-2"
                >
                  <span className="text-[10px] font-mono text-primary-electric uppercase font-bold tracking-widest">FEATURE MODULE_0{idx+1}</span>
                  <span className="text-xs font-bold text-white font-display tracking-tight leading-tight">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Industries Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Tech tag list */}
            <div className="p-5 rounded-xl border border-white/[0.03] space-y-3 bg-[#0a0d15] text-left">
              <h4 className="text-xs font-mono uppercase text-[#06b6d4] font-bold tracking-widest">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedService.techUsed.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-medium py-1 px-2.5 rounded-lg bg-white/[0.03] text-gray-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Industries tag list */}
            <div className="p-5 rounded-xl border border-white/[0.03] space-y-3 bg-[#0a0d15] text-left">
              <h4 className="text-xs font-mono uppercase text-[#8b5cf6] font-bold tracking-widest">
                Target Industries Served
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedService.industries.map((ind) => (
                  <span key={ind} className="text-[10px] font-mono font-semibold py-1 px-2.5 rounded-lg bg-white/[0.03] text-purple-300 border border-white/5 flex items-center space-x-1">
                    <Building className="w-3 h-3 text-purple-400" />
                    <span>{ind}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* FAQ Accordion Section */}
          {selectedService.faqs && selectedService.faqs.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-white text-lg tracking-wide">
                Division FAQ Scenarios
              </h3>
              <div className="space-y-3">
                {selectedService.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.03] space-y-2 text-left"
                  >
                    <div className="flex items-center space-x-2 text-white font-semibold text-xs font-display tracking-tight">
                      <HelpCircle className="w-4 h-4 text-primary-electric flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
