import React, { useState, useEffect } from 'react';
import { TECHNOLOGIES } from '../data';
import { 
  Code2, FileJson, Palette, Server, Terminal, Zap, Briefcase, 
  Database, FileText, Network, Cloud, Container, GitMerge, Cpu, 
  HelpCircle, CheckCircle2, ChevronRight, Laptop
} from 'lucide-react';

interface TechnologyPageProps {
  initialCategoryId?: string;
  setCurrentPage: (page: string) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ 
  initialCategoryId = 'frontend',
  setCurrentPage
}) => {
  const [activeCatId, setActiveCatId] = useState(initialCategoryId);

  useEffect(() => {
    if (initialCategoryId) {
      setActiveCatId(initialCategoryId);
    }
  }, [initialCategoryId]);

  const activeCategory = TECHNOLOGIES.find(t => t.id === activeCatId) || TECHNOLOGIES[0];

  const getTechIcon = (iconName: string, className = "w-5 h-5 text-blue-600") => {
    switch (iconName) {
      case "Code2": return <Code2 className={className} />;
      case "FileJson": return <FileJson className={className} />;
      case "Palette": return <Palette className={className} />;
      case "Server": return <Server className={className} />;
      case "Terminal": return <Terminal className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "Database": return <Database className={className} />;
      case "FileText": return <FileText className={className} />;
      case "Network": return <Network className={className} />;
      case "Cloud": return <Cloud className={className} />;
      case "Container": return <Container className={className} />;
      case "GitMerge": return <GitMerge className={className} />;
      case "Cpu": return <Cpu className={className} />;
      default: return <Laptop className={className} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 select-none text-left">
      
      {/* Intro Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Engineering Core</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">Our Developer Technology Standard</h1>
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          We construct type-safe, ultra-fast systems on verified developer platforms. Below are the parent technology groupings we deploy for production clients.
        </p>
      </div>

      {/* Tabs Menu Group */}
      <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 mb-8">
        {TECHNOLOGIES.map((cat) => {
          const isAct = cat.id === activeCatId;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCatId(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isAct 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Category banner */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-400 tracking-widest">Selected Division</span>
          <h3 className="text-base font-extrabold text-slate-800 dark:text-white mt-0.5">{activeCategory.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activeCategory.description}</p>
        </div>
        <span className="text-[10px] font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full uppercase shrink-0">
          {activeCategory.items.length} Standard Layers
        </span>
      </div>

      {/* Grid displaying the items of that category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
        {activeCategory.items.map((item, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 p-5 shadow-xs transition-transform hover:translate-y-[-2px] hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50/50 dark:bg-slate-800 flex items-center justify-center">
                  {getTechIcon(item.iconName)}
                </div>
                <span className="text-[9px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-md">
                  {item.level}
                </span>
              </div>
              
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-2 text-left">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-50 dark:border-slate-850 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> V8 Standard
              </span>
              <span>Compiled CJS/ESM</span>
            </div>
          </div>
        ))}
      </div>

      {/* Multi-cloud architecture diagram snippet */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 mt-12 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

        <div className="space-y-3 max-w-xl">
          <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-400/20 rounded-full text-[9px] font-bold uppercase tracking-widest">Build Stack Core</span>
          <h3 className="text-xl font-bold tracking-tight">Our Quality Standard: Static Code Checks & Full CI/CD Gates</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Every repository we deploy passes strict linters, automated Docker layer vulnerability scans, and comprehensive static type checks. No code hits production without passing automated test protocols.
          </p>
        </div>

        <button 
          onClick={() => {
            setCurrentPage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-white text-slate-900 font-bold text-xs py-3 px-6 rounded-xl shrink-0 cursor-pointer shadow-md hover:bg-slate-50 transition"
        >
          Audit Your Code Stack
        </button>
      </div>

    </div>
  );
};
