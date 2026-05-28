import React, { useState, useEffect } from "react";
import { Check, Play, CheckCircle2, ChevronRight, Server, Database, Layers, ArrowRight, Sparkles, Building, Briefcase, Share2, Shield, Settings, Users, ArrowUpRight } from "lucide-react";
import { productsData } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProductsViewProps {
  initialSubPage?: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function ProductsView({ initialSubPage, onNavigate }: ProductsViewProps) {
  // Sync the navbar subpage category with our local filter tab
  const [activeTab, setActiveTab] = useState<"all" | "odoo" | "sharepoint">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[0]);

  // Modal states for Demo and Inquiry
  const [activeDemoProduct, setActiveDemoProduct] = useState<Product | null>(null);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<Product | null>(null);

  // Inquiry form states
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryNote, setInquiryNote] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Demo interactive configurations
  const [demoSeats, setDemoSeats] = useState(25);
  const [selectedModules, setSelectedModules] = useState<string[]>(["Core Accounting", "Inventory Tracking"]);

  // Clickable Flow Steps highlights
  const [activeFlowStep, setActiveFlowStep] = useState(0);

  const availableModules = [
    "Core Accounting", "Inventory Tracking", "Manufacturing (MRP)", "Sales CRM Pipelines", "Human Resources Hub"
  ];

  useEffect(() => {
    if (initialSubPage === "odoo" || initialSubPage === "sharepoint" || initialSubPage === "all") {
      setActiveTab(initialSubPage);
      
      // Auto-focus a product of that category
      let matched = productsData[0];
      if (initialSubPage === "odoo") {
        matched = productsData.find(p => p.id === "aspect-erp") || productsData[0];
      } else if (initialSubPage === "sharepoint") {
        matched = productsData.find(p => p.id === "aspect-hrm") || productsData[0];
      }
      setSelectedProduct(matched);
    }
  }, [initialSubPage]);

  // Determine categories of products of odoo vs sharepoint vs custom/other
  const getProductCategory = (prod: Product): "odoo" | "sharepoint" | "all" => {
    if (prod.id === "aspect-erp") return "odoo";
    if (prod.id === "aspect-hrm") return "sharepoint";
    return "all";
  };

  const filteredProducts = productsData.filter((prod) => {
    if (activeTab === "all") return true;
    return getProductCategory(prod) === activeTab;
  });

  // Flow steps dictionary for selected products
  const productFlows: Record<string, { step: string; title: string; desc: string }[]> = {
    "aspect-erp": [
      { step: "01", title: "Material Demand & Sales", desc: "Customer orders or sales pipelines feed directly into the central demand planner, calculating bill-of-materials (BOM) constraints instantly." },
      { step: "02", title: "Automated MRP Ingest", desc: "The MRP queue schedules manufacturing waves, checks warehouse buffer stocks, and triggers supplier raw materials procurement." },
      { step: "03", title: "Work Center Operation", desc: "Operators log hours and track progress on interactive shop floor kiosks connected to the secure local server routing layers." },
      { step: "04", title: "reconciled Accounting Ledger", desc: "Raw material consumed, work center overheads, and shipping cycles automatically reconcile in the general double-entry accounting ledger." }
    ],
    "aspect-crm": [
      { step: "01", title: "Lead Ingestion & Score", desc: "In Coming leads from corporate forms, emails, or APIs are scored based on pipeline requirements and designated instantly." },
      { step: "02", title: "CRM Deal Stages", desc: "Sales teams track prospects on customized drag-and-drop opportunity columns, with automated contact reminder triggers." },
      { step: "03", title: "Automated Quoting", desc: "Calculates license and hosting rates instantly, structuring personalized proposals inside modern, downloadable client forms." },
      { step: "04", title: "Signed Close Sync", desc: "Once accepted, the metadata automatically alerts developers and sets up initial cloud deployment parameters." }
    ],
    "aspect-hrm": [
      { step: "01", title: "Employee Onboarding", desc: "Adds employees, manages certifications, and structures departmental profiles into a central, secure database." },
      { step: "02", title: "Self-Service Requests", desc: "Staff request leave, view rosters, or check pay slips through a responsive employee interface." },
      { step: "03", title: "Power Automate Approvals", desc: "Automated approval cards are pushed directly to department heads on Microsoft Teams, processing requests instantly." },
      { step: "04", title: "Synchronized Ledger", desc: "Pipes validated timesheets directly into localized payroll databases, scheduling automatic bank dispatch sheets." }
    ]
  };

  const activeFlow = productFlows[selectedProduct.id] || productFlows["aspect-erp"];

  const handleModuleToggle = (mod: string) => {
    setSelectedModules((prev) => 
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
  };

  const calculateDemoPrice = () => {
    const baseModuleCost = selectedModules.length * 48;
    const seatCost = demoSeats * 14;
    return baseModuleCost + seatCost;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setActiveInquiryProduct(null);
      setInquiryName("");
      setInquiryEmail("");
      setInquiryNote("");
    }, 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left font-sans" id="products-view-canvas">
      
      {/* Banner Title */}
      <div className="relative border-b border-primary-indigo/10 pb-8 mb-12 space-y-4">
        <div className="absolute right-0 top-0 hidden lg:block opacity-10 blur-sm">
          {/* Background Technology Grid Vector */}
          <svg width="240" height="150" viewBox="0 0 240 150" fill="none" opacity="0.65">
            <path d="M10 10 L230 10 M30 40 L210 40 M50 70 L190 70 M70 100 L170 100 M90 130 L150 130" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="120" cy="70" r="45" stroke="#7c3aed" strokeWidth="3" />
            <circle cx="120" cy="70" r="15" fill="#3b82f6" />
          </svg>
        </div>

        <span className="text-xs font-mono tracking-widest text-[#2563eb] uppercase font-bold block">
          NEXTASPECT PRE-ENGINEERED ENTERPRISE CODE BLUEPRINTS
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
          Aspect Platforms & Blueprints
        </h1>
        <p className="text-sm sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Skip starting entirely from a blank canvas. We maintain highly optimized modular system layouts and SaaS frameworks designed according to modern standards, fully tailored and integrated around your target business process.
        </p>
      </div>

      {/* FILTER BAR SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-primary-indigo/5 bg-white/40 p-4 rounded-xl">
        <div className="flex space-x-2" id="product-category-tabs">
          <button
            onClick={() => {
              setActiveTab("all");
              // default selected
              setSelectedProduct(productsData[0]);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-slate-900 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            All Blueprints
          </button>
          <button
            onClick={() => {
              setActiveTab("odoo");
              const odooProduct = productsData.find(p => p.id === "aspect-erp");
              if (odooProduct) setSelectedProduct(odooProduct);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
              activeTab === "odoo"
                ? "bg-primary-electric text-white shadow-md shadow-primary-electric/15"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            Odoo Products
          </button>
          <button
            onClick={() => {
              setActiveTab("sharepoint");
              const sharepointProduct = productsData.find(p => p.id === "aspect-hrm");
              if (sharepointProduct) setSelectedProduct(sharepointProduct);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer ${
              activeTab === "sharepoint"
                ? "bg-[#7c3aed] text-white shadow-md shadow-purple-500/15"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            SharePoint Products
          </button>
        </div>
        <div className="text-xs font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-100 flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>Active Filter: <strong>{filteredProducts.length} Platforms Displayed</strong></span>
        </div>
      </div>

      {/* CORE MASTER-DETAIL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="products-showcase-split-pane">
        
        {/* Left column (Master Cards list) */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-extrabold block pl-1">
            Available Blueprint Selections ({activeTab})
          </span>
          <div className="space-y-3.5">
            {filteredProducts.map((prod) => {
              const isSelected = selectedProduct.id === prod.id;
              return (
                <div
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    setActiveFlowStep(0);
                  }}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white border-[#2563eb] shadow-xl shadow-primary-indigo/5 relative scale-[1.01]"
                      : "bg-white/70 border-slate-200/80 hover:border-[#2563eb]/20 hover:bg-white"
                  }`}
                  id={`product-card-${prod.id}`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#10b981] animate-ping" />
                  )}
                  
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono py-0.5 px-2 rounded-md font-bold tracking-wide uppercase bg-primary-indigo/5 text-primary-electric">
                      {getProductCategory(prod) === "odoo" ? "Odoo ERP Ext" : getProductCategory(prod) === "sharepoint" ? "SharePoint Intranet" : "MERN SaaS Solution"}
                    </span>
                    <h3 className="font-display font-extrabold text-[#0c0e17] text-lg tracking-tight">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-slate-100">
                    {prod.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-semibold font-mono py-0.5 px-1.5 rounded bg-slate-50 text-slate-600 border border-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-primary-electric mt-4 pt-1 hover:translate-x-0.5 transition-transform">
                    <span>Explore Flows & Vector Systems</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inline informational trust box with beautiful Vector Icons */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-5 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#0c0e17]">Architectural Compliance Specs</h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start space-x-2.5">
                <Shield className="w-4 h-4 text-[#2563eb] mt-0.5" />
                <span><strong>ISO 27001 Prepared</strong>: Codebases are structure audited for sensitive records exposure.</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Settings className="w-4 h-4 text-[#7c3aed] mt-0.5" />
                <span><strong>Extensible Hooks</strong>: Written with modular plugins so Odoo/SharePoint templates compile cleanly with core API revisions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: The Dynamic Detailed Showcase Presentation */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-8 space-y-8"
              id="product-dynamic-detail-display"
            >
              
              {/* Product Profile Intro */}
              <div className="border-b border-slate-100 pb-6 space-y-3 relative">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-primary-electric flex items-center space-x-1">
                  <Layers className="w-4 h-4" />
                  <span>PRE-CONSTRUCTED CORE ARCHITECTURE</span>
                </div>
                <h2 className="text-2xl sm:text-3.5xl font-display font-extrabold text-slate-900 tracking-tight">
                  {selectedProduct.name}
                </h2>
                <span className="block text-xs font-mono font-bold tracking-widest text-[#7c3aed] uppercase italic">{selectedProduct.tagline}</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {selectedProduct.detailedDesc}
                </p>

                {/* Micro tech highlight badges */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {selectedProduct.techStack.map((tech) => (
                    <span key={tech} className="text-[9px] font-semibold font-mono py-1 px-2.5 rounded-lg bg-primary-indigo/5 text-primary-electric border border-primary-indigo/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1. DYNAMIC VECTOR "SCREENSHOT" VISUALIZER PLACEHOLDER BLOCK */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono text-slate-500 uppercase font-black tracking-widest flex items-center space-x-1.5">
                    <span>SCREENSHOT DEMO SYSTEM PREVIEW</span>
                    <span className="bg-[#10b981]/10 text-[#10b981] font-mono text-[9px] py-0.5 px-2 rounded-full font-bold">LIVE METRIC</span>
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono">Simulated Vector Frame v4.1</span>
                </div>

                {/* Render corresponding fully interactive vector mockup diagram */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner min-h-[220px] flex flex-col justify-between relative overflow-hidden" id="interactive-screengrab-mockup">
                  
                  {/* Outer terminal styling decor */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] font-mono text-gray-500">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 bg-red-500/70 rounded-full" />
                      <span className="w-2.5 h-2.5 bg-yellow-500/70 rounded-full" />
                      <span className="w-2.5 h-2.5 bg-green-500/70 rounded-full" />
                      <span className="pl-1 text-gray-400">preview_screenshot_sandbox.img</span>
                    </div>
                    <span className="text-secondary-cyan text-[8px] font-bold tracking-widest font-mono">100% REAL INTEGRATION</span>
                  </div>

                  {/* CUSTOM VECTOR RENDERER INSIDE BLACKBOARD */}
                  <div className="flex-grow flex items-center justify-center py-4">
                    {selectedProduct.id === "aspect-erp" && (
                      <svg viewBox="0 0 450 140" fill="none" className="w-full h-auto">
                        <rect x="10" y="5" width="430" height="130" rx="10" fill="#0c0e17" stroke="#1e293b" strokeWidth="2" />
                        
                        {/* Dynamic layout for dashboard */}
                        <text x="30" y="32" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">&gt; odoo_mrp_workcenter_load</text>
                        
                        {/* Active Progress Bars */}
                        <rect x="30" y="48" width="120" height="6" rx="3" fill="#334155" />
                        <rect x="30" y="48" width="105" height="6" rx="3" fill="#38bdf8">
                          <animate attributeName="width" values="10;105;105" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <text x="165" y="54" fill="#94a3b8" fontSize="10" fontFamily="monospace">88% SLA Load</text>

                        <rect x="30" y="68" width="120" height="6" rx="3" fill="#334155" />
                        <rect x="30" y="68" width="75" height="6" rx="3" fill="#10b981">
                          <animate attributeName="width" values="10;75;75" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <text x="165" y="74" fill="#94a3b8" fontSize="10" fontFamily="monospace">Active Work centers</text>

                        {/* Circular progress gauge */}
                        <circle cx="340" cy="70" r="30" stroke="#1e293b" strokeWidth="6" fill="none" />
                        <circle cx="340" cy="70" r="30" stroke="#a78bfa" strokeWidth="6" fill="none" strokeDasharray="188" strokeDashoffset="48">
                          <animateTransform attributeName="transform" type="rotate" from="0 340 70" to="360 340 70" dur="15s" repeatCount="indefinite" />
                        </circle>
                        <text x="340" y="74" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">99.8%</text>
                        <text x="340" y="115" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">LEDGER RECONCILER</text>
                      </svg>
                    )}

                    {selectedProduct.id === "aspect-crm" && (
                      <svg viewBox="0 0 450 140" fill="none" className="w-full h-auto">
                        <rect x="10" y="5" width="430" height="130" rx="10" fill="#050508" stroke="#1e293b" strokeWidth="2" />
                        <text x="30" y="30" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="monospace">&gt; pipeline_lead_tracker</text>
                        
                        {/* Mock Kanban Columns in beautiful vector styling */}
                        {/* Column 1: Qualified */}
                        <rect x="30" y="45" width="112" height="75" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                        <text x="38" y="58" fill="#38bdf8" fontSize="9" fontWeight="bold">QUALIFIED (2)</text>
                        <rect x="36" y="66" width="100" height="18" rx="4" fill="#1e293b" />
                        <text x="42" y="78" fill="#ffffff" fontSize="8">Apex Ledger ETL</text>
                        <text x="110" y="78" fill="#10b981" fontSize="8" fontWeight="bold">$15k</text>

                        {/* Column 2: In Negotiation */}
                        <rect x="156" y="45" width="112" height="75" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                        <text x="164" y="58" fill="#7c3aed" fontSize="9" fontWeight="bold">PROPOSAL (3)</text>
                        <rect x="162" y="66" width="100" height="18" rx="4" fill="#312e81" />
                        <text x="168" y="78" fill="#ffffff" fontSize="8">Sharepoint Migration</text>
                        <text x="236" y="78" fill="#10b981" fontSize="8" fontWeight="bold">$32k</text>

                        {/* Column 3: Won */}
                        <rect x="282" y="45" width="112" height="75" rx="6" fill="#061514" stroke="#064e3b" strokeWidth="1" />
                        <text x="290" y="58" fill="#10b981" fontSize="9" fontWeight="bold">WON MATCH (12)</text>
                        <rect x="288" y="66" width="100" height="18" rx="4" fill="#064e3b" />
                        <text x="294" y="78" fill="#ffffff" fontSize="8">Odoo V18 Port</text>
                        <text x="362" y="78" fill="#ffffff" fontSize="8" fontWeight="bold">$44k</text>
                      </svg>
                    )}

                    {selectedProduct.id === "aspect-hrm" && (
                      <svg viewBox="0 0 450 140" fill="none" className="w-full h-auto">
                        <rect x="10" y="5" width="430" height="130" rx="10" fill="#080810" stroke="#1e293b" strokeWidth="2" />
                        <text x="30" y="28" fill="#c084fc" fontSize="13" fontWeight="bold" fontFamily="monospace">&gt; m365_sharepoint_clinical_vault</text>
                        
                        {/* Intranet items mock inside clean vector card */}
                        <rect x="30" y="42" width="180" height="80" rx="8" fill="#131325" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3"/>
                        <text x="40" y="58" fill="#a8a29e" fontSize="9">Pending Nurse Approvals</text>
                        <text x="40" y="78" fill="#ffffff" fontSize="12" fontWeight="bold">12 Annual Leaves</text>
                        
                        {/* Approved stats */}
                        <rect x="40" y="92" width="160" height="18" rx="4" fill="#064e43" />
                        <text x="50" y="104" fill="#34d399" fontSize="8" fontWeight="bold">POWER AUTOMATE FLOW ACTIVE</text>

                        {/* Interactive right panel */}
                        <rect x="230" y="42" width="180" height="80" rx="8" fill="#131325" />
                        <text x="240" y="58" fill="#94a3b8" fontSize="9" fontWeight="bold">COMPLIANCE LEDGER AUDIT</text>
                        <line x1="240" y1="70" x2="390" y2="70" stroke="#1e293b" strokeWidth="2" />
                        <text x="240" y="86" fill="#38bdf8" fontSize="11" fontWeight="bold">100% Secure Storage</text>
                        <text x="240" y="105" fill="#e2e8f0" fontSize="9">HIPAA Verified Logs</text>
                      </svg>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-white/[0.05] pt-2">
                    <span>Target Stack: {selectedProduct.techStack.join(" + ")}</span>
                    <span className="text-primary-electric font-semibold flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-primary-electric rounded-full animate-pulse" />
                      <span>SECURED CORE ENGINE</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. DYNAMIC CLICKABLE FLOW STAGE (VECTOR DIAGRAM BY STEP PROCESS) */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-widest flex items-center space-x-1">
                    <span>END-TO-END DATA FLOW DIRECTORY</span>
                  </h4>
                  <span className="text-[11px] text-slate-500">Click steps to inspect the operational layout</span>
                </div>

                {/* Horizontal interactive step nodes with beautiful SVG connector line background */}
                <div className="relative grid grid-cols-4 gap-2 pb-2">
                  <div className="absolute top-6 left-[10%] right-[10%] h-[1.5px] bg-slate-200 pointer-events-none z-0" />
                  
                  {activeFlow.map((fStep, index) => {
                    const isActive = activeFlowStep === index;
                    return (
                      <div
                        key={fStep.step}
                        onClick={() => setActiveFlowStep(index)}
                        className="flex flex-col items-center text-center space-y-2 relative z-10 cursor-pointer group"
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-primary-electric text-white scale-110 shadow-lg shadow-primary-electric/20"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                        }`}>
                          <span className="font-mono text-xs font-extrabold">{fStep.step}</span>
                        </div>
                        <span className={`text-[10px] sm:text-xs font-bold leading-tight line-clamp-1 truncate block px-1 ${
                          isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"
                        }`}>
                          {fStep.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Highlighted active step specification box with micro layout illustration */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 leading-relaxed text-xs text-slate-600 transition-all">
                  <span className="font-mono text-[9px] font-black uppercase text-primary-electric block mb-1">
                    Step {activeFlow[activeFlowStep].step} Details Pipeline:
                  </span>
                  <p className="font-bold text-slate-800 text-sm mb-1">{activeFlow[activeFlowStep].title}</p>
                  <p className="text-slate-600 text-xs">{activeFlow[activeFlowStep].desc}</p>
                </div>
              </div>

              {/* 3. PLATFORM FEATURES & BENEFITS SUMMARY IN DETAILS VIEW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase font-black tracking-widest pl-1">Blueprint Specifications</h4>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {selectedProduct.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-1.5 leading-tight">
                        <Check className="w-3.5 h-3.5 text-[#2563eb] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase font-black tracking-widest pl-1">Primary Operational Benefits</h4>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    {selectedProduct.benefits.map((ben) => (
                      <div key={ben} className="flex items-start space-x-1.5 leading-tight">
                        <CheckCircle2 className="w-3.5 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons to open Simulator Modals */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                <button
                  onClick={() => setActiveDemoProduct(selectedProduct)}
                  className="py-3 px-4 rounded-xl border border-primary-electric text-primary-electric hover:bg-primary-electric/5 text-xs font-bold font-mono tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Play className="w-3 h-3 fill-primary-electric text-primary-electric" />
                  <span>Launch Simulator</span>
                </button>
                <button
                  onClick={() => setActiveInquiryProduct(selectedProduct)}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-primary-indigo to-primary-electric text-white text-xs font-bold font-mono tracking-wider hover:shadow-lg hover:shadow-primary-indigo/15 transition-all cursor-pointer"
                >
                  Configure Quote &rarr;
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* CORE BESPOKE DEVELOPMENTS ADVISORY PANEL */}
      <div className="mt-16 p-8 rounded-3xl border border-primary-indigo/10 bg-white/70 shadow-lg text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center" id="products-consultation-banner">
        <div className="md:col-span-2 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#2563eb]/5 border border-[#2563eb]/10 text-primary-electric text-[10px] font-mono font-bold uppercase rounded-full">
            <Building className="w-3 h-3" />
            <span>Dedicated Enterprise Scoping Services</span>
          </div>
          <h3 className="font-display font-extrabold text-[#0c0e17] text-2xl tracking-tight">
            Need a Proprietary Plugin, Database Sync layer, or Custom Web App?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            Our engineers specialize in designing microservices mapping to non-standard database shapes, bespoke Odoo models, SPFx parts, and encrypted API secure layers. We configure deployment specs in writing within a few working days.
          </p>
        </div>
        <div className="text-right">
          <button 
            onClick={() => onNavigate("contact")}
            className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-mono font-extrabold transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-md hover:translate-x-0.5"
          >
            <span>Request Custom Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ----------------- MODAL 1: INTERACTIVE DEMO SIMULATOR ----------------- */}
      <AnimatePresence>
        {activeDemoProduct && (
          <div className="fixed inset-0 z-50 bg-[#060913]/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 relative text-left shadow-2.5xl"
            >
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display flex items-center space-x-2">
                    <span>{activeDemoProduct.name} Calculator</span>
                    <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-600 py-0.5 px-2 rounded-md font-extrabold">LIVE MODELLER</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Adjust licencing licenses and parameters dynamically</p>
                </div>
                <button 
                  onClick={() => setActiveDemoProduct(null)}
                  className="p-1 px-2.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Slider Configurator */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <label className="font-bold">Simulated User Licenses / Active Seats</label>
                    <span className="text-primary-electric font-semibold font-mono bg-primary-indigo/5 px-2 py-0.5 rounded border border-primary-indigo/10">{demoSeats} Active Users</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="150" 
                    value={demoSeats}
                    onChange={(e) => setDemoSeats(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary-electric"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500">
                    <span>min. 5 licenses</span>
                    <span>max. 150 licenses</span>
                  </div>
                </div>

                {/* Module select Checkbox row */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 block">Select Integration Blueprint Modules</label>
                  <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableModules.map((mod) => {
                      const isChecked = selectedModules.includes(mod);
                      return (
                        <div 
                          key={mod}
                          onClick={() => handleModuleToggle(mod)}
                          className={`p-3 rounded-xl border text-xs font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                            isChecked ? "bg-primary-indigo/5 border-primary-electric text-slate-900" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <span>{mod}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isChecked ? "bg-primary-electric border-primary-electric text-white" : "border-slate-300"
                          }`}>
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[4.5]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Pricing Summary Block */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Estimated Project SaaS Blueprint Equivalent</span>
                  <span className="text-2xl sm:text-3.5xl font-extrabold text-emerald-400 font-display mt-0.5 block">${calculateDemoPrice()} USD <span className="text-[10px] text-slate-400 font-normal">/mo</span></span>
                </div>
                <button 
                  onClick={() => {
                    setActiveDemoProduct(null);
                    setActiveInquiryProduct(activeDemoProduct);
                  }}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary-indigo to-primary-electric hover:shadow-lg text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Deploy Quote
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- MODAL 2: SYSTEM INQUIRY REPORT ----------------- */}
      <AnimatePresence>
        {activeInquiryProduct && (
          <div className="fixed inset-0 z-50 bg-[#060913]/60 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-6 relative text-left shadow-2.5xl"
            >
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">Aspect Blueprint Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Detailed scope sheet preparation for {activeInquiryProduct.name}</p>
                </div>
                <button 
                  onClick={() => setActiveInquiryProduct(null)}
                  className="p-1 px-2.5 text-xs text-slate-500 hover:text-slate-800 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              {inquirySubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-slate-900">System Blueprint Inquiry Logged</h4>
                    <p className="text-xs text-slate-600 mt-1">Excellent! Our solution engineers are preparing custom system specifications and will reach out shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4" id="inquiry-modal-form">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Company / Primary Contact Name</label>
                    <input 
                      type="text" 
                      required 
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-electric transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Business Contact Email</label>
                    <input 
                      type="email" 
                      required 
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-electric transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Proprietary Operational Challenges / Details</label>
                    <textarea 
                      rows={3}
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      placeholder="e.g. Need CRM sync to localized Odoo v18 accounting journal records..."
                      className="w-full px-4 py-3 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary-electric transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-indigo to-primary-electric text-white text-xs font-bold font-mono tracking-wider hover:shadow-lg transition-all cursor-pointer"
                  >
                    Generate Blueprint Specification &rarr;
                  </button>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
