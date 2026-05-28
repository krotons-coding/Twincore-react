import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, Check, Calculator, Clock, HelpCircle, 
  ChevronRight, Calendar, ArrowRight, Server, FileCheck 
} from 'lucide-react';

interface Module {
  id: string;
  name: string;
  category: string;
  complexity: number; // multiplier
  baseCost: number;
  description: string;
}

const ODOO_MODULES: Module[] = [
  { id: 'crm-sales', name: 'CRM & Sales Automation', category: 'Core', complexity: 1.0, baseCost: 1200, description: 'Leads routing, estimates, automated pipeline tracking, and team quotas.' },
  { id: 'accounting', name: 'Double-Entry Accounting & Ledger', category: 'Financial', complexity: 1.5, baseCost: 2500, description: 'Local tax compliance, automated bank feeds, invoices, & general ledgers.' },
  { id: 'inventory', name: 'Inventory & Barcode Scanning', category: 'Logistics', complexity: 1.4, baseCost: 2000, description: 'Multi-warehouse logic, drop-shipping, reordering, and barcode workflows.' },
  { id: 'mrp', name: 'MRP / Manufacturing Control', category: 'Logistics', complexity: 1.8, baseCost: 3200, description: 'Bills of Materials (BoM), routing sheets, scrap tracking, & work orders.' },
  { id: 'hr', name: 'HR, Timesheet & Payroll', category: 'Enterprise', complexity: 1.1, baseCost: 1500, description: 'Employee attendance, custom approval structures, and payroll lines.' },
  { id: 'ecommerce', name: 'Dynamic Odoo E-Commerce', category: 'Sales', complexity: 1.3, baseCost: 1800, description: 'Online store, real-time checkout, delivery hooks, & backend stock sync.' },
  { id: 'projects', name: 'Project & Timesheet Tracker', category: 'Core', complexity: 1.0, baseCost: 1000, description: 'Gantt charts, tasks, time logs, and automatic client invoice conversions.' }
];

export const OdooEstimator: React.FC<{ onConsultRequest: (scope: string) => void }> = ({ onConsultRequest }) => {
  const [selectedModules, setSelectedModules] = useState<string[]>(['crm-sales', 'accounting']);
  const [usersCount, setUsersCount] = useState<number>(15);
  const [customizationLevel, setCustomizationLevel] = useState<'standard' | 'medium' | 'high'>('medium');
  const [includeMigration, setIncludeMigration] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter(m => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  // Cost calculation engine
  const calcEstimates = () => {
    const modulesCost = ODOO_MODULES
      .filter(m => selectedModules.includes(m.id))
      .reduce((sum, m) => sum + m.baseCost, 0);

    const userMultiplier = usersCount <= 10 ? 1.0 : usersCount <= 50 ? 1.3 : 1.7;
    const userLicenseCost = usersCount * 180; // approximate license support cost

    let complexityMultiplier = 1.0;
    if (customizationLevel === 'medium') complexityMultiplier = 1.4;
    if (customizationLevel === 'high') complexityMultiplier = 2.1;

    let baseEstimate = (modulesCost * userMultiplier * complexityMultiplier);
    if (includeMigration) {
      baseEstimate += 2500;
    }

    const lowRange = Math.round(baseEstimate * 0.9);
    const highRange = Math.round(baseEstimate * 1.15);

    // Timeline calculation
    const baseWeeks = 4 + (selectedModules.length * 1.5);
    const complexWeeksMultiplier = customizationLevel === 'standard' ? 0.8 : customizationLevel === 'medium' ? 1.2 : 1.7;
    const estimatedWeeks = Math.max(6, Math.round(baseWeeks * complexWeeksMultiplier));

    return {
      costMin: lowRange,
      costMax: highRange,
      weeks: estimatedWeeks,
      userLicenseCost
    };
  };

  const { costMin, costMax, weeks } = calcEstimates();

  const handleApply = () => {
    const scopeString = `Odoo Core Plan: ${selectedModules.length} Modules (${selectedModules.join(', ')}), ${usersCount} users, Custom level: ${customizationLevel}, Migration: ${includeMigration ? 'Yes' : 'No'}`;
    onConsultRequest(scopeString);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden" id="odoo-estimator-widget">
      <div className="bg-slate-900 px-6 py-8 sm:px-10 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/20 rounded-full text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Odoo Pricing & Scope Modeler
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Interactive Odoo Solution Architect</h3>
        <p className="text-slate-300 text-sm mt-2 max-w-xl">
          Estimate implementation timeline and approximate engineering budgets for your Odoo deployment in real-time.
        </p>
      </div>

      <div className="p-6 sm:p-10 lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Left configurations */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Core Systems Select */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-bold text-slate-900 tracking-tight">
                1. Select Target Business Modules
              </label>
              <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                {selectedModules.length} selected
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ODOO_MODULES.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    type="button"
                    className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex gap-3 items-start relative ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight mb-1">{mod.name}</p>
                      <p className="text-[11px] text-slate-500 leading-normal line-clamp-2">{mod.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* User Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-500" /> 2. Estimated Concurrent Users
              </label>
              <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl">
                {usersCount} Users
              </span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="150" 
              step="5"
              value={usersCount} 
              onChange={(e) => setUsersCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5 Startup</span>
              <span>50 Midmarket</span>
              <span>150+ Enterprise Scale</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Level of Customization */}
          <div>
            <label className="text-sm font-bold text-slate-900 mb-3 block">
              3. Business Logic Customization Complexity
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['standard', 'medium', 'high'] as const).map((level) => {
                const label = level === 'standard' ? 'Standard Fit' : level === 'medium' ? 'Medium Custom' : 'Bespoke ERP';
                const desc = level === 'standard' ? 'Out-of-box Odoo' : level === 'medium' ? 'Slightly custom flow' : 'Full custom modules';
                const isActive = customizationLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setCustomizationLevel(level)}
                    className={`p-3 rounded-2xl text-center border cursor-pointer transition-all ${
                      isActive 
                        ? 'border-blue-600 bg-blue-50/30 font-bold text-blue-700 ring-1 ring-blue-600'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="block text-xs font-bold">{label}</span>
                    <span className="block text-[10px] text-slate-400 font-normal mt-1 leading-tight">{desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Legacy Migration Checkbox */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <input 
                id="migrationCheck"
                type="checkbox" 
                checked={includeMigration}
                onChange={(e) => setIncludeMigration(e.target.checked)}
                className="mt-1 h-4.5 w-4.5 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
              />
              <div className="text-left">
                <label htmlFor="migrationCheck" className="text-xs font-bold text-slate-800 block cursor-pointer select-none">
                  Include Legacy Corporate Data Clean & Migration
                </label>
                <p className="text-[11px] text-slate-400">Migrating old financial databases, contact matrices and historical ledgers safely.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Outputs / Calculations Card */}
        <div className="lg:col-span-5 mt-8 lg:mt-0 flex flex-col h-full justify-between bg-slate-50 border border-slate-100 rounded-2xl p-6 relative">
          <div>
            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Project Architecture Estimate</h4>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase block">Approximate Project Budget</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    ${costMin.toLocaleString()} - ${costMax.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">USD</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal mt-1">Estimations vary based on deployment geography, QA criteria, and dynamic Odoo cloud enterprise tier hosting specs.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Development Cycle</span>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-800 font-bold text-sm">
                    <Clock className="w-4 h-4 text-blue-500" /> {weeks} - {Math.round(weeks * 1.2)} Weeks
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Odoo Version Choice</span>
                  <div className="flex items-center gap-1.5 mt-1 text-slate-800 font-bold text-sm">
                    <Server className="w-4 h-4 text-emerald-500" /> V18 Enterprise
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-semibold mb-2">Architectural Highlights</span>
                <ul className="text-[11px] text-slate-600 space-y-2">
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-500 block">✓</span>
                    <span>Clean modular Python code with custom post-merge migrations.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-500 block">✓</span>
                    <span>Direct Postgres database speedups, automated backups and replicas.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-blue-500 block">✓</span>
                    <span>Sleek client integrations syncing mobile screens with central core dashboards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200/60">
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200/50 rounded-xl p-3 text-center">
                <p className="text-xs font-bold">✓ Parameters Applied!</p>
                <p className="text-[11px] text-emerald-600 mt-1">Consultation request loaded. Scroll down to Contact details to submit!</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleApply}
                className="w-full bg-blue-600 text-white font-semibold text-xs py-3.5 px-4 rounded-xl shadow-md cursor-pointer hover:bg-blue-700 active:scale-98 transition flex items-center justify-center gap-2"
              >
                Apply Parameters to Consultation Form <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
