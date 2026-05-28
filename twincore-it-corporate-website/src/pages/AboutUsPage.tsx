import React from 'react';
import { Target, ShieldCheck, HeartPulse, Award, ShieldAlert, Cpu, Heart, CheckCircle2, Bookmark } from 'lucide-react';

interface AboutUsPageProps {
  setCurrentPage: (page: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ setCurrentPage }) => {
  const corporateCommitments = [
    {
      title: "Vetted Senior Engineering Talent",
      description: "We do not cycle juniors onto your valuable Odoo database or React client code. We hire only experienced software crafters with an average of 8+ years writing type-safe code.",
      icon: Cpu
    },
    {
      title: "Deep Native Specialization",
      description: "We don't try to master every niche framework. We maintain authoritative dominance in Python/Odoo ERP setups, Node.js, TypeScript/React ecosystem and Cloud DevOps rigs.",
      icon: Target
    },
    {
      title: "Ironclad Security Mandate",
      description: "From custom Odoo access control lists to private AWS VPC groups, your business ledger data security is designed into the core system before any interface is built.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 select-none text-left space-y-20">
      
      {/* 1. Profile Intro */}
      <section className="max-w-3xl">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Our DNA</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">An Engineering Force For Better Digital Futures</h1>
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          Twincore IT operates as a strategic product partner and technical services boutique. We bridge the gap between complex software architecture and tangible balance-sheet outcomes.
        </p>
      </section>

      {/* 2. Core Pillars grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {corporateCommitments.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 shadow-md hover:shadow-lg transition duration-200 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 shrink-0">
                <IconComp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white tracking-tight">{pillar.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-2.5">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* 3. Deep Mission Paragraph with stats */}
      <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4 text-left">
          <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Mandate</span>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Software That Scales Without Operational Noise</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Most technology projects fail not from poor code, but from poor architecture and communication gaps. We combat this by embedding our senior tech leads within client groups, working from day one to clear structural hurdles, write clear documentation, and deliver exact operational tools.
          </p>
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="flex gap-2 items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Vetted SLA Guarantees
            </div>
            <div className="flex gap-2 items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Strict Type Security
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-xs space-y-4 text-left">
          <span className="text-[10px] text-slate-400 dark:text-slate-400 font-extrabold uppercase tracking-widest block">Corporate Code of Conduct</span>
          <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex gap-2.5 items-start">
              <span className="text-blue-500 font-extrabold">✓</span>
              <p className="text-slate-600 dark:text-slate-400"><span className="font-bold text-slate-800 dark:text-slate-200">We do mock nothing.</span> All custom systems run real database schemas and authentic validation guards.</p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="text-blue-500 font-extrabold">✓</span>
              <p className="text-slate-600 dark:text-slate-400"><span className="font-bold text-slate-800 dark:text-slate-200">We honor parameters.</span> Calculations inside our estimators represent standard commercial licensing and hosting costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="text-center bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <h3 className="text-xl sm:text-2xl font-black tracking-tight">Need dedicated senior resources on contract?</h3>
        <p className="text-slate-400 text-xs max-w-xl mx-auto mt-2 leading-relaxed">
          Embed an elite Scrum-compliant Python or React developer team with solid team leads to de-risk complex schedules immediately.
        </p>
        <button
          onClick={() => {
            setCurrentPage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mt-6 bg-blue-600 text-white font-bold text-xs py-3.5 px-7 rounded-xl shadow-md hover:bg-blue-700 cursor-pointer active:scale-98 transition inline-block"
        >
          Request Core Resources
        </button>
      </section>

    </div>
  );
};
