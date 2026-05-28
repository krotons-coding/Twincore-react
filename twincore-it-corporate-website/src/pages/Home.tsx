import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, Target, Flame, Lightbulb, Ship, RefreshCw, Layers, Award, ShieldCheck, CheckCircle2,
  Database, Briefcase, Cpu, ArrowRight, Star, Heart, Activity, Users, Globe, Play, Server, Layers2, FileText,
  ShoppingBag, Search, Code, CheckSquare, History, ListCollapse, Sliders, Workflow
} from 'lucide-react';
import { CORE_VALUES, TESTIMONIALS, SERVICES } from '../data';
import { Logo } from '../components/Logo';

// Dynamic Icon Registry
const IconMap: Record<string, React.FC<any>> = {
  Globe,
  Activity,
  ShoppingBag,
  Play,
  Layers,
  Cpu,
  Server,
  Briefcase,
  Search,
  FileText,
  Code,
  CheckCircle2,
  Workflow
};

// Sector Sourcing Data Matrix
interface Sector {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  solution: string;
  outputs: string[];
}

const SECTORS_DATA: Sector[] = [
  {
    id: "telecom",
    name: "Telecom & Networks",
    iconName: "Globe",
    tagline: "High-throughput message brokers and IoT telemetry.",
    solution: "We build highly optimized event-driven streaming layers and secure web hook systems that support massive coordinates continuously with zero packet loss.",
    outputs: ["Kafka network pipelines", "Dynamic billing gateways", "Active cluster monitors"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Biotech",
    iconName: "Activity",
    tagline: "Secure, compliant EHR interfaces and core databases.",
    solution: "We implement secure patient registration dashboards, HIPAA-aware records systems, and customized Odoo synchronization modules ensuring medical confidentiality.",
    outputs: ["EHR database isolation", "Patient portal dashboards", "VPC encrypted networks"]
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Digital Malls",
    iconName: "ShoppingBag",
    tagline: "Ultra-fast checkouts and live stock synchronization.",
    solution: "We connect frontend storefront structures directly into Odoo inventory cards, optimize order cycles, write secure payment pipelines, and automate invoice creation.",
    outputs: ["Odoo inventory sync", "Multi-processor payment gates", "Loyalty ledger engines"]
  },
  {
    id: "entertainment",
    name: "Entertainment & Media",
    iconName: "Play",
    tagline: "High-concurrency streaming portals and intranet hubs.",
    solution: "We build responsive, fast client dashboards, metered content subscriber plans, and custom Microsoft 365 department portals to streamline employee engagement.",
    outputs: ["SPFx intranet platforms", "Subscription gateways", "Video assets caching"]
  },
  {
    id: "fintech",
    name: "Fintech & Ledger Auditing",
    iconName: "Layers",
    tagline: "Ironclad microservices, dual ledgers, and automated sync.",
    solution: "We deploy double-entry financial databases, audit-friendly automated tax adjusters, direct secure banking synchronizations, and custom multi-currency ledger conversions.",
    outputs: ["SOC-2 transactional layers", "Automatic ledger matching", "Adaptive tax engines"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    iconName: "Cpu",
    tagline: "Handheld warehouse scanners and maintenance tickets.",
    solution: "We write highly optimized Flutter scanning tools linking with Odoo, permitting warehouse workers to scanned labels offline and schedule maintenance alerts easily.",
    outputs: ["Offline Handheld WMS PDA", "Smart predictive maintenance", "Fleet telemetry indicators"]
  },
  {
    id: "it",
    name: "IT & SaaS Platforms",
    iconName: "Server",
    tagline: "Scalable cloud infrastructures, pipelines, and AI layers.",
    solution: "We deploy fully containerized Kubernetes systems on Azure/AWS, setup Terraform script automations, and construct bespoke server-side AI helpers secure from data leaks.",
    outputs: ["Terraform cloud setups", "CI/CD automated code gates", "Secure server-side AI engines"]
  },
  {
    id: "retail",
    name: "Retail & Multi-Stores",
    iconName: "Briefcase",
    tagline: "Unified point-of-sale registers and localized tracking.",
    solution: "We design robust cross-store synchronizers that consolidate POS sessions into Odoo ERP accounting sheets seamlessly, offering a clear visual dashboard of margins.",
    outputs: ["Cross-store master cards", "Fluid checkout interfaces", "Unified margin reporting"]
  }
];

// SDLC Step Data Matrix
interface SDLCStep {
  phase: string;
  title: string;
  description: string;
  fullDetails: string;
  activities: string[];
  tools: string[];
  deliverable: string;
  iconName: string;
}

const SDLC_STEPS: SDLCStep[] = [
  {
    phase: "Phase 01",
    title: "Discovery & Technical Audit",
    description: "Our senior software consultants dive deep into your systems, analyzing database performance and code structures.",
    fullDetails: "We execute clean code audits, bottleneck scans, and standard data configuration checks to eliminate hidden architectural risks before writing any fresh feature code.",
    activities: [
      "Review existing PostgreSQL database schemas",
      "Benchmark response millisecond delays",
      "Establish communication parameters"
    ],
    tools: ["TypeScript Compiler (tsc)", "PostgreSQL Query Analyzer", "Jira & Confluence"],
    deliverable: "Comprehensive System Performance & Risk Audit Report",
    iconName: "Search"
  },
  {
    phase: "Phase 02",
    title: "Architectural Blueprinting",
    description: "We craft formal interface diagrams, cloud topologies, entity relationship maps, and initial cost sheets.",
    fullDetails: "Your custom tech roadmap is drawn up with clear boundaries, ensuring the target budget, integration protocols, and staging schedules align perfectly.",
    activities: [
      "Design standard OpenAPI backend definitions",
      "Draft multi-tenant database separation maps",
      "Configure baseline budget and estimator parameters"
    ],
    tools: ["Figma & MermaidJS", "Odoo Estimator Widget", "YAML Configuration"],
    deliverable: "Formal System Topology & Integration Blueprint Document",
    iconName: "FileText"
  },
  {
    phase: "Phase 03",
    title: "High-Velocity Agile Development",
    description: "We write clean, strictly type-safe, and thoroughly documented React, Flutter, Python, or C# code.",
    fullDetails: "Our developers organize tasks into bi-weekly sprints, deploying modular component cards to sandbox environments so you can track exact progress in real time.",
    activities: [
      "Write modern React widgets with Tailwind classes",
      "Engineer localized custom Odoo ERP models",
      "Program SQLite offline synchronization features"
    ],
    tools: ["VS Code / Neovim workspace", "React & motion framework", "Git & Docker Hub"],
    deliverable: "Vetted Staging Deployment Branch with Verified History Logs",
    iconName: "Code"
  },
  {
    phase: "Phase 04",
    title: "Automated Testing & Code Gates",
    description: "No code passes to production without passing comprehensive static checks and test protocols.",
    fullDetails: "We enforce automatic code check triggers, verifying typescript validation models, coverage levels, and security dependencies to stop bugs before launch.",
    activities: [
      "Run complete typescript compilations",
      "Execute automated backend transaction checks",
      "Perform dependency vulnerability scanning"
    ],
    tools: ["TypeScript Compiler & ESLint", "SonarQube Core Scanner", "Jest & Playwright"],
    deliverable: "Approved Quality Assurance passing test certificate report",
    iconName: "CheckCircle2"
  },
  {
    phase: "Phase 05",
    title: "Secure Cloud Deployment",
    description: "We orchestrate zero-downtime rollover deployments on secure, isolated cloud servers.",
    fullDetails: "Leveraging container platforms, we boot replicas, execute database migrations safely, and point DNS systems with active SSL configurations enabled.",
    activities: [
      "Build optimized container bundles with esbuild",
      "Deploy self-repairing Kubernetes nodes",
      "Configure automated rolling hot updates"
    ],
    tools: ["Kubernetes & Docker Container", "Terraform & GCP Infrastructure", "Nginx Load Balancers"],
    deliverable: "Secure Live Production Environment Launch Configuration",
    iconName: "Globe"
  },
  {
    phase: "Phase 06",
    title: "Dedicated Hypercare Support",
    description: "We monitor performance continuously, maintaining support channels for instant technical assistance.",
    fullDetails: "Our principal support engineers remain attached to your corporate hub under strict SLA response guarantees to resolve critical tickets in minutes.",
    activities: [
      "Monitor error triggers & transaction speeds",
      "Maintain hot-replica database backups",
      "Guarantee 2-hour priority response metrics"
    ],
    tools: ["Sentry & Prometheus Monitoring", "Grafana Analytics Dashboards", "24/7 Priority Support Desk"],
    deliverable: "Active Service Level Agreement continuity status log",
    iconName: "Activity"
  }
];

// Interactive Sector Grid Component
const SectorsSlickGrid: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const [selectedSec, setSelectedSec] = useState<string | null>(null);

  const handleRequestSectorBlueprint = (secName: string) => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const element = document.getElementById('contact-subject-input') as HTMLInputElement;
      const messageElement = document.getElementById('contact-message-input') as HTMLTextAreaElement;
      if (element) {
        element.value = `Sector Solution Request: ${secName}`;
      }
      if (messageElement) {
        messageElement.value = `Hello Twincore IT team, I would like to consult with a Solutions Architect regarding specialized implementations for the ${secName} business sector. Please share relevant case studies and technical workflow blueprints.`;
      }
    }, 120);
  };

  return (
    <div className="space-y-8 text-slate-800 dark:text-slate-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SECTORS_DATA.map((sec) => {
          const SecIcon = IconMap[sec.iconName] || Briefcase;
          const isSel = selectedSec === sec.id;
          return (
            <div
              key={sec.id}
              onClick={() => setSelectedSec(selectedSec === sec.id ? null : sec.id)}
              className={`p-6 rounded-3xl border text-left bg-white dark:bg-slate-900 transition-all duration-300 cursor-pointer relative group ${
                isSel
                  ? 'border-blue-600 dark:border-blue-500 ring-1 ring-blue-500 shadow-md'
                  : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <SecIcon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-550 group-hover:text-blue-550 transition-colors uppercase tracking-widest">
                  {isSel ? "Close Details" : "Click to view"}
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {sec.name}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1.5">
                {sec.tagline}
              </p>

              {/* Collapsed state indicator */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-blue-600 dark:text-blue-400">
                <span className="group-hover:underline">Explore Solution</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded details shelf */}
      {selectedSec && (() => {
        const sec = SECTORS_DATA.find(s => s.id === selectedSec)!;
        const SecIconItem = IconMap[sec.iconName] || Briefcase;
        return (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 text-left space-y-4 shadow-inner"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-105 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <SecIconItem className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Sector Blueprint Matrix</span>
                <h4 className="text-base font-black text-slate-900 dark:text-white">{sec.name}</h4>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed max-w-4xl">
              {sec.solution}
            </p>

            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Highlighted Capabilities</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sec.outputs.map((out, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-350 px-2.5 py-1 rounded-lg border border-slate-150 dark:border-slate-750"
                    >
                      ✓ {out}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRequestSectorBlueprint(sec.name)}
                className="bg-slate-900 hover:bg-blue-650 dark:bg-slate-880 dark:hover:bg-blue-600 text-white font-bold text-[11px] py-2.5 px-4.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                Inquire {sec.name} Specs <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        );
      })()}
    </div>
  );
};

// Interactive E2E SDLC Process Component
const SDLCProcessDashboard: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const activeData = SDLC_STEPS[activeStep];
  const StepIcon = IconMap[activeData.iconName] || Code;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-slate-800 dark:text-slate-100">
      
      {/* Left Column: Flow Steps Selection */}
      <div className="lg:col-span-4 space-y-2.5">
        {SDLC_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                isActive
                  ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-md ring-1 ring-blue-500/10'
                  : 'bg-transparent border-slate-100 dark:border-slate-800/40 hover:bg-white/40 dark:hover:bg-slate-900/30'
              }`}
            >
              {isActive && <div className="absolute left-0 top-1/4 h-1/2 w-1.5 bg-blue-600 dark:bg-blue-500 rounded-r-md" />}
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono font-black ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'}`}>
                  {step.phase}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{step.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 max-w-[240px] truncate">{step.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Detailed Workspace & Deliverables Card */}
      <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between min-h-[440px] text-left">
        <div>
          {/* Header segment */}
          <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-3.5 py-1 rounded-full uppercase">
                {activeData.phase}
              </span>
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Active Delivery Stage</span>
            </div>
            
            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <StepIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Core summary */}
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
              {activeData.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-3xl">
              {activeData.fullDetails}
            </p>
          </div>

          {/* Activities Checklist */}
          <div className="mt-6">
            <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-3">Key Activities Executed</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeData.activities.map((act, index) => (
                <div key={index} className="flex gap-2.5 items-start bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-750 dark:text-slate-300 font-medium leading-relaxed">{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Tools and Deliverables */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50 dark:bg-slate-950/20 p-4.5 rounded-2xl border border-slate-150 dark:border-slate-800">
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Tech Stack & Tooling</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeData.tools.map((tl, index) => (
                <span key={index} className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 by-0.5 rounded border border-slate-200/50 dark:border-slate-800">
                  {tl}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1 text-left md:text-right w-full md:w-auto">
            <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Major Deliverable</p>
            <div className="flex items-center gap-1.5 md:justify-end text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">
              <FileText className="w-4 h-4" />
              <span>{activeData.deliverable}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

interface HomeProps {
  setCurrentPage: (page: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  onNavigateToTech?: (techId: string) => void;
  onNavigateToProductCat?: (catId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ 
  setCurrentPage, 
  onNavigateToService,
  onNavigateToTech,
  onNavigateToProductCat
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: "140+", label: "Successful ERP Modules", desc: "Engineered and deployed sustainably on production Odoo systems" },
    { value: "99.9%", label: "Uptime SLA Guarantee", desc: "Continuous Kubernetes failover with automated cluster recovery" },
    { value: "24+", label: "Custom SaaS Products", desc: "Laid down from blueprinting up to massive scale exit points" },
    { value: "12 Hours", label: "Average SLA Resolve", desc: "Dedicated high-tier remote engineer emergency response" }
  ];

  const valueProps = [
    {
      title: "Service-Based Mastery",
      desc: "Our senior software consultants work directly embedded in your corporate team to audit databases, refactor microservices, and design high-speed cloud setups.",
      icon: Briefcase
    },
    {
      title: "Product-Based Innovation",
      desc: "We build proprietary, ready-to-use plug-ins, custom ledger sync triggers, and visual dashboard pipelines that drop instantly into your tech stack.",
      icon: Cpu
    }
  ];

  const handleServiceSelect = (id: string) => {
    setCurrentPage('services');
    if (onNavigateToService) {
      onNavigateToService(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTechCategorySelect = (id: string) => {
    setCurrentPage('technology');
    if (onNavigateToTech) {
      onNavigateToTech(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20 select-none">
      
      {/* 1. Gorgeous Interactive Hero Section with Brand Slogans */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 sm:py-32 text-white transition-colors duration-300">
        {/* Abstract glowing backgrounds matching Twincore brand style */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none animate-pulse duration-5000" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Logo Brand Animation */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/80 border border-slate-800/80 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 select-none shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-300">Global IT Consulting & Custom Software Engineering</span>
          </div>

          {/* Slogan Rich Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-none text-white font-sans">
            Architecting Systems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Empowering Enterprise Futures.
            </span>
          </h1>

          <p className="mt-8 text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Twincore IT is a prominent product-driven and service-based technology partner. We specialize in custom software developments, mobile app architectures, automated SharePoint Portals, big-data flows, and localized custom-fitted Odoo ERP solutions engineered for fast transitions and complete data integrity.
          </p>

          {/* Active Call Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-4 px-8 rounded-xl shadow-lg shadow-blue-500/20 active:scale-98 transition cursor-pointer flex items-center justify-center gap-2"
            >
              Get Expert Consultation <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('services')}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold text-xs py-4 px-8 rounded-xl active:scale-98 transition cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Capabilities Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slogan sub-pills indicator group showing the exact 4 values from logo */}
          <div className="mt-16 pt-10 border-t border-slate-900/85 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="bg-slate-950/40 p-5 rounded-2xl border border-slate-900 hover:border-slate-800 transition-all duration-300">
                <span className="text-xs font-extrabold text-white block mb-1.5 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${val.color}`} />
                  {val.title}
                </span>
                <span className="text-[10.5px] text-slate-400 leading-normal block">{val.description}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Hybrid Product & Service Business Blueprint Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
            Core Competence Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-4">
            A Complete Tech Portfolio. Fully Customizable.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Unlike small niche shops that only handle individual templates, we offer full custom lifecycle services alongside pre-coded, stable modules to shrink your time-to-market.
          </p>
        </div>

        {/* Dynamic Bento Box styled Categories Representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* Box 1: Odoo & Salesforce */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Enterprise ERP & CRMs</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Custom modules, double-entry ledgers, logistics telematics pipelines, localized taxes, and automatic data synchronizations.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('odoo-erp')}
              className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              Enterprise Odoo Roadmap <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Box 2: Custom Web Engineering */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Web & Custom SaaS</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Bespoke secure customer portals, .NET/Java backend systems, React integrations, and highly interactive admin screens.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('custom-web')}
              className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              Custom software setup <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Box 3: High-Performance Mobile Apps */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-indigo-500/30 dark:hover:border-indigo-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Mobile Companion Apps</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Stunning Flutter & React Native setups featuring offline scanners, localized hardware integrations, and map tracking systems.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('mobile-apps')}
              className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              Mobile app platforms <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>

          {/* Box 4: SharePoint SPFx Intranets */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-purple-500/30 dark:hover:border-purple-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">SharePoint & M365 Portals</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Custom SPFx widgets, modern intranets, automated document approvals via Power Platform, and secure OCR ingestion modules.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('sharepoint-portals')}
              className="text-[10px] font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              SharePoint integrations <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Box 5: Big Data & AI */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-rose-500/30 dark:hover:border-rose-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-rose-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">AI, Big Data & Analytics</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Kafka event streaming, analytical pools, structured Snowflake query databases, and custom secure server-side AI copilots.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('ai-bigdata')}
              className="text-[10px] font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              Kafka & AI blueprinting <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Box 6: Devops & Cloud Security */}
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-xl transition duration-300 group relative">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-600 group-hover:text-white flex items-center justify-center transition-colors mb-6 shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Managed Cloud & DevOps</h3>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 leading-relaxed">
              Kubernetes cluster orchestrations, Terraform setup scripts, zero downtime Canary updates, and SOC-2 security protocols.
            </p>
            <hr className="border-slate-100 dark:border-slate-800/60 my-5" />
            <button 
              type="button" 
              onClick={() => handleServiceSelect('devops-security')}
              className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              Kubernetes & Cloud setup <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 2.3 Interactive Screenshot-Matched Capabilities Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left space-y-10 bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
              Capabilities Showcase
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
              Enterprise Integration Ecosystem
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Explore our core tactical capabilities engineered to restructure legacy environments, optimize CRM pipelines, and trigger automated intelligence.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
            Active Delivery Pipelines
          </div>
        </div>

        {/* The 3x2 Grid for standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* AI/ML */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  AI/ML
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Twincore AI/ML services to experience the transformative potential of automation, cost reduction, and a wide range of business opportunities to catalyze transformative growth & innovation.
              </p>
            </div>
          </motion.div>

          {/* Agentic AI */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Agentic AI
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Empower autonomous, goal-driven intelligence with Twincore to adapt, reason, and act independently while delivering consistent, measurable business impact.
              </p>
            </div>
          </motion.div>

          {/* Big Data */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Big Data
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Unlock the power of Big Data with Twincore's exceptional services to extract valuable data insights, and craft tailor-made solutions to drive your business towards success.
              </p>
            </div>
          </motion.div>

          {/* Apache NiFi */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Apache NiFi
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Orchestrate complex data flows with Twincore Apache NiFi services using secure, scalable pipelines that ensure reliable, real-time data movement across systems.
              </p>
            </div>
          </motion.div>

          {/* Salesforce */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Salesforce
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Twincore covers the entire gamut of personalized solutions, starting right from the Salesforce rollout to implementation and customization.
              </p>
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 rounded-3xl shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  DevOps
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Twincore DevOps Consulting Services provides end-to-end solutions designed to overcome the hurdles presented by constant market upgrades.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Asymmetrical 3rd Row matches screenshot format */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Odoo - Custom interactive card mimicking AI/ML styling but reveals menu on hover */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="col-span-1 lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-xs hover:shadow-lg transition-all relative overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[220px]"
            onClick={() => {
              if (onNavigateToService) onNavigateToService('odoo-erp');
            }}
          >
            {/* Standard appearance similar to AI/ML */}
            <div className="relative z-10 w-full flex flex-col justify-between h-full">
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Odoo ERP & Integrated Apps
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
                </div>
                
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-opacity duration-300 group-hover:opacity-0">
                  Deploy premium modular implementations, double-entry financial accounting layers, automated logistics telematics pipelines, localized multi-state tax setups, and offline handheld inventory synchronizers.
                </p>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold mt-4 flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                  <span>Hover to explore services</span> <span className="animate-pulse">→</span>
                </p>
              </div>
            </div>

            {/* Slide-up overlay menu, mimicking ksolves.com dropdown reveal */}
            <div className="absolute inset-0 bg-slate-50/98 dark:bg-slate-950/98 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 border-t border-slate-100 dark:border-slate-800 z-20">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Odoo Integration Scope
                  </h4>
                  <span className="text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md">ERP Ecosystem</span>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <li>
                    <button 
                      type="button" 
                      className="text-xs font-bold text-red-650 hover:text-red-750 dark:text-rose-400 dark:hover:text-rose-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left w-full group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateToService) onNavigateToService('odoo-erp');
                      }}
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform text-slate-705 dark:text-slate-350">• Odoo Customization</span>
                      <ArrowRight className="w-3 h-3 text-red-600 dark:text-rose-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left w-full group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateToService) onNavigateToService('odoo-erp');
                      }}
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">• Odoo Implementation</span>
                      <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left w-full group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateToService) onNavigateToService('odoo-erp');
                      }}
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">• Odoo Integration</span>
                      <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left w-full group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateToService) onNavigateToService('odoo-erp');
                      }}
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">• Odoo Migration</span>
                      <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </li>
                  <li>
                    <button 
                      type="button" 
                      className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-left w-full group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigateToService) onNavigateToService('odoo-erp');
                      }}
                    >
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">• Odoo Consultancy</span>
                      <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">
                Clicking opens customized portfolio specifications.
              </div>
            </div>
          </motion.div>

          {/* Microservices Card spans remaining grid layout */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="col-span-1 lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            onClick={() => {
              if (onNavigateToService) onNavigateToService('custom-web');
            }}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                  Microservices <ArrowRight className="w-4 h-4 text-slate-450 group-hover:translate-x-1.5 transition-transform" />
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                At Twincore, we modernize legacy IT systems by restructuring the apps and streamlining the deployments to meet digital demands. We focus on lightweight APIs, decoupled databases, and secure Kubernetes namespaces.
              </p>
            </div>
          </motion.div>

        </div>

      </section>

      {/* 2.5 Industry Sectors We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-transparent text-slate-900 dark:text-white transition-colors duration-300 text-left">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
            Specialized Industry Verticals
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
            Custom Ecosystems Engineered for Your Domain
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Select an industry sector below to review dynamic solutions, automatic pipeline syncs, and database architectures customized for commercial scale.
          </p>
        </div>

        <SectorsSlickGrid setCurrentPage={setCurrentPage} />
      </section>

      {/* 3. High-Fidelity End-to-End SDLC & Project Delivery Process */}
      <section className="bg-slate-50 dark:bg-slate-950/40 py-16 sm:py-24 border-y border-slate-150 dark:border-slate-850/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
              End-to-End Process & SDLC
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
              Our Multi-Phase Software Delivery Engine
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              From localized data schema designs to secure rolling hot-rebuild deployments, our agile SDLC gate standard guarantees zero operational friction.
            </p>
          </div>

          <SDLCProcessDashboard />

        </div>
      </section>

      {/* Ready-to-Deploy Products Directory (Category-Wise Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-slate-850">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4 text-left">
            <span className="text-xs font-bold text-blue-300 tracking-widest uppercase bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full inline-block">
              ⚡ Pre-Engineered Softwares
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Pre-Packaged Applications for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">Fast Implementation</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Why pay for custom ground-up developer hours when our stable, thoroughly validated Odoo modules and SharePoint intranet plugins can integrate into your ecosystem in days?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left relative z-10">
            {/* Odoo apps box */}
            <div className="bg-slate-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">Module Package A</span>
              <h3 className="text-lg font-bold text-white tracking-tight">Odoo Enterprise Apps</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Add Fleet telematics, barcode handheld warehouse companion apps, localized ledger tax automation, and WhatsApp APIs directly in your standard Odoo pipeline.
              </p>
              <div className="mt-6 space-y-2 pb-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Highlighted Apps</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Fleet Pro Telematics
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Quick-Scan WMS App
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Localized Accounting Ledgers
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onNavigateToProductCat) {
                    onNavigateToProductCat('odoo-products');
                  } else {
                    setCurrentPage('products');
                  }
                }}
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl cursor-pointer transition flex items-center justify-center gap-1 mt-2 shadow-sm"
              >
                Access Odoo Apps <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* SharePoint apps box */}
            <div className="bg-slate-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Module Package B</span>
              <h3 className="text-lg font-bold text-white tracking-tight">SharePoint & Teams Apps</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Transform SharePoint with modern Intranets, SPFx portal widgets, Power-Automate custom document lifecycles, complex OCR invoice data extractions.
              </p>
              <div className="mt-6 space-y-2 pb-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Highlighted Apps</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Custom Intranet Portal Hub
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> DocFlow OCR Auto-approvals
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Power-Automate Task Boards
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onNavigateToProductCat) {
                    onNavigateToProductCat('sharepoint-products');
                  } else {
                    setCurrentPage('products');
                  }
                }}
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:text-white font-bold text-xs py-3.5 rounded-xl cursor-pointer transition flex items-center justify-center gap-1 mt-2"
              >
                Access SharePoint Apps <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Elite Numerical Technical Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 shadow-xs text-left hover:shadow-md transition-all duration-300"
            >
              <p className="text-3xl font-black text-blue-600 tracking-tight">{stat.value}</p>
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-1">{stat.label}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive Testimonials block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <div className="xl:grid xl:grid-cols-12 xl:gap-8 items-center">
            
            <div className="xl:col-span-5 space-y-4 mb-8 xl:mb-0">
              <span className="text-xs font-bold text-blue-400 tracking-widest uppercase bg-blue-950 px-3 py-1 rounded-full">Client Success</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">What Dynamic Enterprise Directors Say</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Over 60 corporations across Europe, Asia and North America run their core transactional states on Twincore IT systems.
              </p>
              
              {/* Manual indicators */}
              <div className="flex gap-2 pt-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-8 h-2 rounded-full cursor-pointer transition-all ${
                      activeTestimonial === index ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="xl:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-900 relative">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-sm font-medium text-slate-200 italic leading-relaxed">
                "{TESTIMONIALS[activeTestimonial].content}"
              </blockquote>

              <hr className="border-slate-900 my-5" />

              <div>
                <p className="text-xs font-bold text-white">{TESTIMONIALS[activeTestimonial].name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{TESTIMONIALS[activeTestimonial].role} at **{TESTIMONIALS[activeTestimonial].company}**</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Dynamic Call-to-Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Ready to overhaul your ledger software?</h2>
          <p className="text-blue-100 text-xs max-w-xl mx-auto mt-3 leading-relaxed">
            Integrate Odoo modules seamlessly, de-risk legacy databases, or secure responsive React applications now with our vetted expert engineering squad.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-900 font-extrabold text-xs px-8 py-4 rounded-xl active:scale-98 transition shadow-md hover:bg-blue-50 cursor-pointer"
            >
              Consult an Architect
            </button>
            <button 
              onClick={() => {
                setCurrentPage('contact');
                // Scroll down to the interactive Odoo calculator specifically
                setTimeout(() => {
                  const widget = document.getElementById('odoo-estimator-container');
                  if (widget) widget.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-blue-950 text-white font-bold text-xs px-8 py-4 rounded-xl hover:bg-blue-900 active:scale-98 transition border border-blue-600/50 cursor-pointer"
            >
              Interactive Price Estimator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
