import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { Check, ArrowRight, Server, Briefcase, Cpu, Cloud, Layers2, ShieldAlert, ArrowUpRight, ListCollapse } from 'lucide-react';

interface ServicesPageProps {
  initialServiceId?: string;
  setCurrentPage: (page: string) => void;
  onSetOdooScope?: (scope: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  initialServiceId = 'odoo-erp',
  setCurrentPage,
  onSetOdooScope
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);

  // Sync state if navigation parameter shifts
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const active = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "Briefcase": return <Briefcase className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Cloud": return <Cloud className={className} />;
      case "Layers": return <Layers2 className={className} />;
      default: return <Briefcase className={className} />;
    }
  };

  const handleConsultService = () => {
    if (onSetOdooScope) {
      onSetOdooScope(`Priority Consultation for service: ${active.title}`);
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 select-none text-left">
      
      {/* Intro Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">Our Blueprint</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">Specialized IT Consulting & Core Engineering</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed">
          Explore our nested parent-child capabilities. Learn how we deliver modular structures, Odoo applications and reliable full-stack frameworks matching your unique roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Parent Category Selection Drawer/Panel */}
        <div className="lg:col-span-4 space-y-3">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 px-1">Capability Matrices</p>
          {SERVICES.map((serv) => {
            const isSelected = serv.id === selectedServiceId;
            return (
              <button
                key={serv.id}
                onClick={() => setSelectedServiceId(serv.id)}
                className={`text-left w-full p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group relative ${
                  isSelected 
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 shadow-md ring-1 ring-blue-600' 
                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                }`}
              >
                {isSelected && <div className="absolute left-0 top-1/4 h-1/2 w-1.5 bg-blue-600 rounded-r-md" />}
                <div className="flex items-center gap-3.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-slate-800/65'
                  }`}>
                    {getIcon(serv.iconName)}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {serv.title}
                    </span>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-normal leading-tight mt-0.5">
                      {serv.subServices.length} Core Modules
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 text-slate-300 transition-transform ${
                  isSelected ? 'translate-x-1 text-blue-600 dark:text-blue-400' : 'group-hover:translate-x-0.5'
                }`} />
              </button>
            );
          })}

          <div className="mt-6 p-5 bg-slate-900 border border-slate-850 text-white rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
            <h4 className="text-xs font-bold mb-1">Interactive Odoo Assistant</h4>
            <p className="text-[10px] text-slate-400 leading-normal">Configure requirements directly in our dynamic budget widget to get custom implementation cost guides.</p>
            <button
              onClick={() => {
                setCurrentPage('contact');
                setTimeout(() => {
                  const el = document.getElementById('odoo-estimator-container');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="mt-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[10px] py-2 px-3.5 rounded-xl shadow-md cursor-pointer transition"
            >
              Configure Budget Model
            </button>
          </div>
        </div>

        {/* Right Side: Active Service Details Panel (with Child services expansion) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none p-6 sm:p-10 space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header section of active service */}
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                {getIcon(active.iconName, "w-4.5 h-4.5")}
              </div>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{active.title} Core Stack</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{active.title}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-3">{active.longDescription}</p>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Core Business Benefits Checklist */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3.5">Key Operational Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.benefits.map((ben, index) => (
                <div key={index} className="flex gap-2.5 items-start text-xs bg-slate-50/55 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="text-blue-500 dark:text-blue-400 font-extrabold text-sm leading-none shrink-0">✓</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{ben}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Parent-Child Sub Services Nested Accordions/Cards */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <ListCollapse className="w-4 h-4 text-slate-400" />
              <h3 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Modular Capabilities (Child Offerings)
              </h3>
            </div>
            <div className="space-y-4">
              {active.subServices.map((sub) => (
                <div 
                  key={sub.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 shadow-xs text-left hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {sub.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{sub.description}</p>
                  
                  {/* Scope details check bullet points */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400">
                    {sub.details.map((dt, idx) => (
                      <div key={idx} className="flex items-center gap-2 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                        <span className="truncate">{dt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Underbar consult actions button */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50 dark:bg-slate-950/45 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Ready to plan integration parameters?</p>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Let's draft a production kickoff blueprint tailored specifically for your budget tier.</p>
            </div>
            <button
              onClick={handleConsultService}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4.5 rounded-xl shadow-md transition whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
            >
              Draft System Scope <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
