import { useState } from "react";
import { 
  Menu, X, ChevronDown, ChevronUp, Code, Cpu, Database, Cloud, 
  Briefcase, Sparkles, BookOpen, Clock, Activity, MessageSquare, 
  Settings, Server, ArrowRight, Star, Layers, Shield, Zap,
  ChevronRight, ShoppingCart, Key, Building2, FileText, BarChart, 
  Link2, TrendingUp, Brain, HeartPulse
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentPage: string;
  currentSubPage?: string;
  onNavigate: (page: string, subPage?: string) => void;
}

export default function Navbar({ currentPage, currentSubPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [activeProductCat, setActiveProductCat] = useState("odoo");

  // Mobile navigation accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Link active highlight style (desktop)
  const isLinkActive = (page: string) => currentPage === page;

  // Modern corporate offerings (all 10 requested offerings)
  const serviceItems = [
    { id: "odoo-erp-development", name: "Odoo ERP Development", icon: Database, badge: "Odoo Certified", desc: "Consolidated enterprise accounting & module custom setups" },
    { id: "odoo-migration-services", name: "Odoo Migration & Upgrade", icon: Activity, desc: "Safe historical data ETL mapping and custom Python upgrades" },
    { id: "sharepoint-development", name: "SharePoint Development", icon: Cloud, badge: "M365 Partner", desc: "Modern collaborative intranet spheres and secure document repositories" },
    { id: "react-js-development", name: "React JS Development", icon: Code, badge: "React Specialists", desc: "Interactive customized single page user layouts at 60fps" },
    { id: "nextjs-development", name: "Next.js Development", icon: Sparkles, badge: "SEO-First", desc: "Hybrid server-side rendered marketing engines for maximized search output" },
    { id: "mern-stack-development", name: "MERN Stack Development", icon: Cpu, desc: "Wired full-stack databases using Mongo, Node, and custom API paths" },
    { id: "typescript-development", name: "TypeScript Development", icon: Shield, desc: "Type-safe definitions to safeguard from runtime exception issues" },
    { id: "api-integration", name: "API Integration", icon: Zap, desc: "Automate synchronization between external CRM and e-commerce systems" },
    { id: "cloud-solutions", name: "Cloud Solutions", icon: Server, desc: "Configure resilient virtual servers on AWS cluster environments" },
    { id: "custom-software-development", name: "Maintenance & Support", icon: Settings, desc: "Continuous code audits, updates, and direct technical consultations" },
  ];

  // Modern technical categories sorted inside Columns for Mega Menu (SaaS Standard)
  const techMegaMenu = [
    {
      title: "Frontend",
      badge: "React Specialists",
      items: [
        { id: "tech-react", name: "React JS", routeId: "frontend", isNew: false },
        { id: "tech-nextjs", name: "Next.js", routeId: "frontend", isNew: false },
        { id: "tech-typescript", name: "TypeScript", routeId: "frontend", isNew: false },
      ]
    },
    {
      title: "Backend",
      badge: "High Performance",
      items: [
        { id: "tech-node", name: "Node.js", routeId: "backend", isNew: false },
        { id: "tech-express", name: "Express.js", routeId: "backend", isNew: false },
        { id: "tech-python", name: "Python Core", routeId: "backend", isNew: false },
      ]
    },
    {
      title: "ERP & CMS",
      badge: "Certified Experts",
      items: [
        { id: "tech-odoo", name: "Odoo ERP", routeId: "erp", isNew: false },
        { id: "tech-sharepoint", name: "SharePoint Portal", routeId: "erp", isNew: false },
      ]
    },
    {
      title: "Database",
      badge: "ACID Compliant",
      items: [
        { id: "tech-postgres", name: "PostgreSQL", routeId: "database", isNew: false },
        { id: "tech-mongo", name: "MongoDB Store", routeId: "database", isNew: false },
      ]
    },
    {
      title: "DevOps",
      badge: "Cloud Ready",
      items: [
        { id: "tech-docker", name: "Docker Compose", routeId: "cloud", isNew: false },
        { id: "tech-aws", name: "AWS Services", routeId: "cloud", isNew: false },
        { id: "tech-azure", name: "Azure Networks", routeId: "cloud", isNew: true },
      ]
    }
  ];

  // Nested structure matching user's uploaded dashboard/CRM image
  const productCategories = [
    { 
      id: "odoo", 
      name: "Odoo", 
      icon: ShoppingCart, 
      color: "text-red-600 bg-red-50 border-red-100", 
      hoverBg: "hover:bg-red-500 hover:text-white"
    },
    { 
      id: "salesforce", 
      name: "Salesforce", 
      icon: Cloud, 
      color: "text-[#00a1e0] bg-blue-50/50 border-blue-100/60", 
      hoverBg: "hover:bg-[#00a1e0] hover:text-white"
    },
    { 
      id: "mind-ai", 
      name: "Mind AI Ninja", 
      icon: Brain, 
      color: "text-purple-600 bg-purple-50 border-purple-100", 
      hoverBg: "hover:bg-purple-600 hover:text-white"
    },
    { 
      id: "data-flow", 
      name: "Data Flow Manager", 
      icon: Activity, 
      color: "text-orange-600 bg-orange-50 border-orange-100", 
      hoverBg: "hover:bg-orange-600 hover:text-white"
    }
  ];

  const categoryProductsMap: Record<string, Array<{ name: string; desc: string; badge?: string; isHot?: boolean; isNew?: boolean }>> = {
    odoo: [
      { name: "Dashboard Ninja With AI", desc: "Interactive customized layout analytics with Gemini models", badge: "AI Powered", isHot: true },
      { name: "Ksolves Cloud", desc: "Consolidated enterprise accounting sync & cloud backups", isNew: true },
      { name: "Access Manager Ninja", desc: "Role-based operations control and active subsidiary security" },
      { name: "Hotel Management", desc: "Real-time reservation calendars wired to administrative ledgers" },
      { name: "ReportMate", desc: "Automated custom Excel spreadsheets and PDF analytical exports" },
      { name: "Advanced Dashboard Ninja", desc: "Drag-and-drop canvas for complex multi-datasource plots" },
      { name: "Odoo WooCommerce Connector", desc: "Bi-directional stock mappings and sales order flows" },
      { name: "Dynamic Financial Report", desc: "Consolidated tax planning, sheets, and balance statements" }
    ],
    salesforce: [
      { name: "Salesforce CRM Connector", desc: "Unify external client logs directly into transaction tables", isHot: true },
      { name: "Apex Code Analyzer", desc: "Perform deep static structural checks for performance bottlenecks" },
      { name: "Opportunity Pipeline Tracker", desc: "Predict stage conversion indicators using regression models", isNew: true },
      { name: "Service Cloud Sync", desc: "Automate helpdesk routing pathways with low lag" }
    ],
    "mind-ai": [
      { name: "Mind AI Assistant", desc: "Multi-layered agent custom-trained on company internal records", isHot: true },
      { name: "Knowledge Graph Creator", desc: "Intelligent relational indexing among team knowledgebases" },
      { name: "RAG Document Processor", desc: "Synthesizes dense contracts and legal regulations with safety", isNew: true }
    ],
    "data-flow": [
      { name: "Aspect Dataflow Studio", desc: "Model high-traffic messaging queues inside web-base canvas", isNew: true },
      { name: "Real-Time Event Streamer", desc: "Push cloud clickstreams into clean database storages" },
      { name: "Schema Mapping Hub", desc: "Flexible transformations driving smooth data ingestion pipelines" }
    ]
  };

  // Keep a backward compatible fallback list for simple lookups if needed
  const productItems = [
    { id: "all", name: "ERP Systems", icon: Database, badge: "Enterprise", desc: "Pre-configured AspectERP blueprints tailored to heavy logistics" },
    { id: "odoo", name: "CRM Systems", icon: Star, badge: "HOT", desc: "Wired automation pipelines driving active sales conversion" },
    { id: "sharepoint", name: "HRMS Systems", icon: Briefcase, badge: "NEW", desc: "AspectHRM leave boards, vacations, and document cabinets" },
    { id: "all", name: "Inventory Systems", icon: Layers, desc: "Automatic warehouse trackers with real-time barcode integrations" },
    { id: "odoo", name: "SaaS Products", icon: Sparkles, badge: "Custom", desc: "Fast-loading ready-made subscription product engines" },
    { id: "sharepoint", name: "E-commerce Solutions", icon: Code, desc: "AspectShop checkout platforms connected directly with ERP" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/65 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: Logo + Tagline */}
          <div 
            onClick={() => onNavigate("home")} 
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo"
            title="NextAspect Technologies Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-black text-white text-xl">N</span>
            </div>
            <div className="text-left">
              <span className="block font-display font-extrabold text-[#0f172a] text-[18px] tracking-tight group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                NextAspect
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-[#059669] uppercase font-bold">
                TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* CENTER: Menu Navigation (Home, Services, Technologies, Products, Portfolio, About Us, Blog) */}
          <div className="hidden lg:flex items-center space-x-6">
            
            {/* 1. Home */}
            <div 
              onClick={() => onNavigate("home")} 
              className={`relative py-4 text-[15px] font-medium transition-colors duration-200 cursor-pointer group ${
                isLinkActive("home") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
              }`}
              id="link-home"
            >
              <span>Home</span>
              <span className={`absolute bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                isLinkActive("home") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </div>

            {/* 2. Services ▼ */}
            <div 
              className="relative py-4 group"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button 
                className={`flex items-center space-x-1.5 text-[15px] font-medium cursor-pointer transition-colors duration-200 ${
                  isLinkActive("services") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
                }`}
                onClick={() => onNavigate("services")}
                id="link-services"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xl grid grid-cols-2 gap-4"
                    id="mega-menu-services"
                  >
                    <div className="col-span-2 pb-2.5 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono tracking-wider uppercase text-blue-600 font-bold">Custom Enterprise Developer Offerings</span>
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-100 rounded px-2 py-0.5">Primary Conversion Units</span>
                    </div>

                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      const isSelected = currentSubPage === item.id;
                      return (
                        <div 
                          key={item.id}
                          onClick={() => {
                            onNavigate("services", item.id);
                            setIsServicesHovered(false);
                          }}
                          className={`p-3 rounded-xl transition-all duration-200 cursor-pointer text-left flex items-start space-x-3 hover:bg-slate-100/80 border border-transparent hover:border-slate-200 hover:shadow-sm group ${
                            isSelected ? "bg-slate-100/95 border-slate-200 text-slate-905 shadow-sm" : ""
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mt-0.5 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-200">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-1.5">
                              <h4 className="text-sm font-semibold text-slate-800 tracking-tight leading-none group-hover:text-black transition-colors">{item.name}</h4>
                              {item.badge && (
                                <span className="text-[8px] font-mono font-bold bg-[#10b981]/15 text-[#047857] group-hover:bg-[#10b981]/25 group-hover:text-[#047857] px-1.5 py-0.5 rounded-full inline-block uppercase tracking-wider scale-95 origin-left">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 leading-normal group-hover:text-slate-800 transition-colors">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}

                    <div 
                      onClick={() => {
                        onNavigate("services");
                        setIsServicesHovered(false);
                      }}
                      className="col-span-2 mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100/60 hover:to-purple-100/60 border border-slate-100 text-center text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Explore In-Depth Services Catalog</span>
                      <span>&rarr;</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Technologies ▼ */}
            <div 
              className="relative py-4 group"
              onMouseEnter={() => setIsTechHovered(true)}
              onMouseLeave={() => setIsTechHovered(false)}
            >
              <button 
                className={`flex items-center space-x-1.5 text-[15px] font-medium cursor-pointer transition-colors duration-200 ${
                  isLinkActive("technologies") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
                }`}
                onClick={() => onNavigate("technologies")}
                id="link-technologies"
              >
                <span>Technologies</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {isTechHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[780px] p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xl"
                    id="mega-menu-tech"
                  >
                    <div className="pb-3 border-b border-slate-100 flex items-center justify-between mb-4">
                      <span className="text-xs font-mono tracking-wider uppercase text-purple-600 font-bold">Standard Stack Architectures</span>
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-100 rounded px-2.5 py-0.5">High-Fidelity Operations</span>
                    </div>

                    <div className="grid grid-cols-5 gap-3.5">
                      {techMegaMenu.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="pb-1 border-b border-slate-50 text-left">
                            <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-slate-400">
                              {cat.title}
                            </span>
                            {cat.badge && (
                              <span className="block text-[8px] tracking-wide text-indigo-600 font-medium font-sans mt-0.5">
                                {cat.badge}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-col space-y-1.5 text-left">
                            {cat.items.map((t) => (
                              <div
                                key={t.id}
                                onClick={() => {
                                  onNavigate("technologies", t.routeId);
                                  setIsTechHovered(false);
                                }}
                                className="group/item flex items-center justify-between text-xs font-medium text-slate-600 hover:text-blue-600 p-1 rounded hover:bg-blue-50/40 transition-all cursor-pointer"
                              >
                                <span>{t.name}</span>
                                {t.isNew && (
                                  <span className="text-[7px] font-mono font-black text-white bg-blue-500 rounded px-1 scale-90">
                                    NEW
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Products ▼ */}
            <div 
              className="relative py-4 group"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <button 
                className={`flex items-center space-x-1.5 text-[15px] font-medium cursor-pointer transition-colors duration-200 ${
                  isLinkActive("products") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
                }`}
                onClick={() => onNavigate("products", "all")}
                id="link-products"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <AnimatePresence>
                {isProductsHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[460px] p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xl space-y-3 z-50 text-left"
                    id="mega-menu-products"
                  >
                    <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono tracking-wider uppercase text-blue-600 font-extrabold flex items-center space-x-1">
                        <span>Pre-engineered Templates</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Ready Solutions</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left">
                      {productItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={idx}
                            onClick={() => {
                              onNavigate("products", item.id);
                              setIsProductsHovered(false);
                            }}
                            className="p-2.5 rounded-xl block hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer text-left group"
                          >
                            <div className="flex items-center space-x-2">
                              <div className="p-1 rounded bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <span className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</span>
                                {item.badge && (
                                  <span className={`text-[7px] font-mono font-black rounded px-1 uppercase scale-90 ${
                                    item.badge === 'HOT' ? 'bg-red-100 text-red-600' :
                                    item.badge === 'NEW' ? 'bg-blue-100 text-blue-600' :
                                    'bg-purple-100 text-purple-600'
                                  }`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-1 pl-6 leading-snug">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Portfolio */}
            <div 
              onClick={() => onNavigate("portfolio")} 
              className={`relative py-4 text-[15px] font-medium transition-colors duration-200 cursor-pointer group ${
                isLinkActive("portfolio") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
              }`}
              id="link-portfolio"
            >
              <span>Portfolio</span>
              <span className={`absolute bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                isLinkActive("portfolio") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </div>

            {/* 6. About Us */}
            <div 
              onClick={() => onNavigate("about")} 
              className={`relative py-4 text-[15px] font-medium transition-colors duration-200 cursor-pointer group ${
                isLinkActive("about") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
              }`}
              id="link-about"
            >
              <span>About Us</span>
              <span className={`absolute bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                isLinkActive("about") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </div>

            {/* 7. Blog */}
            <div 
              onClick={() => onNavigate("blog")} 
              className={`relative py-4 text-[15px] font-medium transition-colors duration-200 cursor-pointer group ${
                isLinkActive("blog") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-[#0f172a]"
              }`}
              id="link-blog"
            >
              <span>Blog</span>
              <span className={`absolute bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                isLinkActive("blog") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </div>

          </div>

          {/* RIGHT: CTA Button [ Contact Us ] Highlighted, Gradient Style, Sticky CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => onNavigate("contact")}
              className="relative px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-white border border-slate-200/50 shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden group"
              id="cta-navbar-contact"
            >
              {/* Under-layer gradient that smoothly hides on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              
              {/* Content wraps text - swaps from white (normally) to deep dark slate on hover */}
              <span className="relative flex items-center space-x-2 text-white group-hover:text-slate-900 transition-colors duration-300">
                <span className="font-bold">Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer rounded-lg border border-slate-200/50"
              id="btn-mobile-menu"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU: Full-screen modern drawer menu with expandable accordions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-y-auto fixed inset-x-0 bottom-0 top-20 z-40"
            id="mobile-navigation"
          >
            <div className="px-5 pt-6 pb-24 space-y-5 text-left">
              
              {/* Home */}
              <div 
                onClick={() => { onNavigate("home"); setIsOpen(false); }} 
                className="block pb-2.5 font-display font-bold text-lg text-slate-800 hover:text-blue-600 border-b border-slate-150 cursor-pointer"
              >
                Home
              </div>

              {/* Accordion 1: Services + */}
              <div className="space-y-2 border-b border-slate-100 pb-3">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left font-display font-bold text-lg text-slate-800 focus:outline-none"
                >
                  <span>Services</span>
                  <span className="text-xl font-mono text-slate-400">
                    {mobileServicesOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 overflow-hidden py-1"
                    >
                      {serviceItems.map((subItem) => (
                        <div 
                          key={subItem.id}
                          onClick={() => { onNavigate("services", subItem.id); setIsOpen(false); }}
                          className="block py-1.5 text-sm font-medium text-slate-500 hover:text-blue-600 cursor-pointer"
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 2: Technologies + */}
              <div className="space-y-2 border-b border-slate-100 pb-3">
                <button 
                  onClick={() => setMobileTechOpen(!mobileTechOpen)}
                  className="w-full flex items-center justify-between text-left font-display font-bold text-lg text-slate-800 focus:outline-none"
                >
                  <span>Technologies</span>
                  <span className="text-xl font-mono text-slate-400">
                    {mobileTechOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {mobileTechOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2.5 overflow-hidden py-1"
                    >
                      {techMegaMenu.map((cat, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                            {cat.title}
                          </span>
                          {cat.items.map((t) => (
                            <div 
                              key={t.id}
                              onClick={() => { onNavigate("technologies", t.routeId); setIsOpen(false); }}
                              className="block py-0.5 text-sm font-medium text-slate-600 hover:text-purple-600 cursor-pointer pl-2"
                            >
                              • {t.name}
                            </div>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 3: Products + */}
              <div className="space-y-2 border-b border-slate-100 pb-3">
                <button 
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between text-left font-display font-bold text-lg text-slate-800 focus:outline-none"
                >
                  <span>Products</span>
                  <span className="text-xl font-mono text-slate-400">
                    {mobileProductsOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1.5 overflow-hidden py-1"
                    >
                      {productItems.map((subItem, idx) => (
                        <div 
                          key={idx}
                          onClick={() => { onNavigate("products", subItem.id); setIsOpen(false); }}
                          className="block py-1 text-sm font-medium text-slate-500 hover:text-blue-600 cursor-pointer"
                        >
                          {subItem.name} {subItem.badge && `(${subItem.badge})`}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portfolio */}
              <div 
                onClick={() => { onNavigate("portfolio"); setIsOpen(false); }} 
                className="block pb-2.5 font-display font-bold text-lg text-slate-800 hover:text-blue-600 border-b border-slate-100 cursor-pointer"
              >
                Portfolio
              </div>

              {/* About Us */}
              <div 
                onClick={() => { onNavigate("about"); setIsOpen(false); }} 
                className="block pb-2.5 font-display font-bold text-lg text-slate-800 hover:text-blue-600 border-b border-slate-100 cursor-pointer"
              >
                About Us
              </div>

              {/* Blog */}
              <div 
                onClick={() => { onNavigate("blog"); setIsOpen(false); }} 
                className="block pb-2.5 font-display font-bold text-lg text-slate-800 hover:text-blue-600 border-b border-slate-100 cursor-pointer"
              >
                Blog
              </div>

              {/* CTA button inside Mobile Menu */}
              <div className="pt-6">
                <button 
                  onClick={() => { onNavigate("contact"); setIsOpen(false); }}
                  className="w-full text-center px-4 py-4 rounded-xl block text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
