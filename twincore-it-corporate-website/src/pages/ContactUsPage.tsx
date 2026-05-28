import React, { useState } from 'react';
import { ConsultingForm } from '../components/ConsultingForm';
import { OdooEstimator } from '../components/OdooEstimator';
import { 
  Building, Mail, Phone, Clock, Landmark, Navigation2, Network, HelpCircle, Server, ShieldCheck 
} from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [copiedLocation, setCopiedLocation] = useState<string | null>(null);
  const [sharedOdooScope, setSharedOdooScope] = useState<string>('');

  const officeLocations = [
    {
      id: "headquarters",
      city: "Austin, Texas",
      role: "Strategic Executive HQ",
      address: "742 Enterprise Parkway, Tech Meadows Suite 500",
      phone: "+1 (800) 555-0199",
      timezone: "Central Time (UTC-6)"
    },
    {
      id: "engineering-europe",
      city: "Brussels, Belgium",
      role: "Odoo Core & Logistics lab",
      address: "88 Rue de l'Association, Brussels 1000",
      phone: "+32 2 555 0144",
      timezone: "Central European Time (UTC+1)"
    },
    {
      id: "delivery-asia",
      city: "Singapore",
      role: "APAC Dev Hub & Cloud R&D",
      address: "24 Raffles Place, Clifford Centre #18-02",
      phone: "+65 6555 0122",
      timezone: "Singapore Standard Time (UTC+8)"
    }
  ];

  const handleCopy = (address: string, city: string) => {
    navigator.clipboard.writeText(address);
    setCopiedLocation(city);
    setTimeout(() => setCopiedLocation(null), 1500);
  };

  const handleApplyOdooScope = (scope: string) => {
    setSharedOdooScope(scope);
    // Smooth scroll down to the kickoff consultation form
    const formEl = document.getElementById('kickoff-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 select-none text-left space-y-16 text-slate-800 dark:text-neutral-100">
      
      {/* Page Intro Panel */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">Secure Desk</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">Initiate Enterprise System Scoping</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed">
          Need custom Odoo modules, Salesforce optimizations, or scalable cloud-native web systems? Use our direct secure form below to submit your business guidelines, architectural parameters, and scheduling preferences directly to our principal solutions architect.
        </p>
      </div>

      {/* Contact form and office hubs column division */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Dynamic Consultation Form */}
        <div id="kickoff-form-section" className="lg:col-span-7 scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Submit Scoping Parameters</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Please provide your operational parameters below to trigger your expert syncing session.</p>
          </div>
          <ConsultingForm initialOdooScope={sharedOdooScope} />
        </div>

        {/* Right Side: Corporate locations and hours mapping */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-150 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" /> Support Availability & SLAs
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="pb-3 border-b border-slate-200/65 dark:border-slate-800 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Standard Response Window</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">Under 2 Business Hours</span>
              </div>
              <div className="pb-3 border-b border-slate-200/65 dark:border-slate-800 flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Emergency Hotlines</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">24/7 Priority SLA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Security Standard</span>
                <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">AES-256 Cloud Locked</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest pl-1">Worldwide Hub Network</p>
          
          <div className="space-y-4">
            {officeLocations.map((loc) => (
              <div 
                key={loc.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 text-left relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
               >
                <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:text-blue-500 transition-colors">
                  <Navigation2 className="w-3.5 h-3.5 rotate-45" />
                </div>
                
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block">{loc.role}</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white mt-1">{loc.city}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">{loc.address}</p>

                <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                  <span className="font-mono">{loc.phone}</span>
                  <button 
                    onClick={() => handleCopy(loc.address, loc.city)}
                    className="text-[10px] text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
                  >
                    {copiedLocation === loc.city ? "Copied!" : "Copy Address"}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
