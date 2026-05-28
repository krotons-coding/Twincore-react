import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PRODUCTS_DATA, 
  ProductCategory, 
  ProductDetail 
} from '../data';
import { 
  Truck, 
  Barcode, 
  FileSpreadsheet, 
  Zap, 
  Layout, 
  FileCheck, 
  MessageSquare, 
  Kanban, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Sliders,
  Sparkles,
  Layers,
  Briefcase,
  BookOpen,
  Terminal,
  Grid,
  ChevronLeft,
  Settings,
  Download,
  Flame,
  Check
} from 'lucide-react';

interface ProductsPageProps {
  setCurrentPage: (page: string) => void;
  initialCategoryId?: string;
}

// Map string identification to dynamic lucide components
const IconMap: Record<string, React.FC<any>> = {
  Truck,
  Barcode,
  FileSpreadsheet,
  Zap,
  Layout,
  FileCheck,
  MessageSquare,
  Kanban,
  Briefcase,
  Layers
};

// High-fidelity details & documentation for every product
const PRODUCT_DOCS: Record<string, {
  gettingStarted: string;
  architecture: string;
  installation: string;
  mockUI: {
    title: string;
    metrics: { label: string; value: string }[];
    rows: { label: string; status: 'online' | 'warning' | 'idle'; value: string }[];
  };
}> = {
  "twincore-fleet-pro": {
    gettingStarted: "Twincore Fleet Pro operates by ingesting real-time vehicle fuel and distance loops into Odoo core standard templates. To deploy, ensure the companion GPS tracking gateways or fuel cards endpoints are synchronized. On initial load, Fleet Pro populates standard vehicle profiles and sets baseline diagnostics alerts.",
    architecture: "Ingresses GPS signals -> Kafka event loop -> Odoo RPC Broker -> PostgreSQL Driver Log instances. Features a dual backup system safeguarding telemetry data even during cloud outages.",
    installation: "1. Upload module folder inside custom Odoo directory.\n2. In developer mode, click Update Modules List.\n3. Search and click install on 'Twincore Fleet Pro'.\n4. Connect GPS webhook coordinates via Fleet settings tab.",
    mockUI: {
      title: "Fleet Telemetry Hub",
      metrics: [
        { label: "Active Trucks", value: "42 Units" },
        { label: "Average MPG", value: "14.2 mi/g" },
        { label: "Alert status", value: "0 Critical" }
      ],
      rows: [
        { label: "Rig TX-9005 GPS Lock", status: "online", value: "Austin, TX - Active" },
        { label: "Odometer sync queue", status: "online", value: "PostgreSQL Live" },
        { label: "Idle duration limit", status: "warning", value: "Exceeded 12m" }
      ]
    }
  },
  "twincore-quick-scan": {
    gettingStarted: "Twincore WMS Quick-Scan optimizes handheld scanners to process pick-lists, inventory transfers, and stock takes in sub-second cycles. It downloads active stock matrices directly into local client storage, ensuring picking doesn't stop if the warehouse Wi-Fi network drops.",
    architecture: "Handheld PDA client app -> Local SQLite Cache DB -> JSON API sync controller -> Odoo stock.picking routes.",
    installation: "1. Load .apk module inside Zebra/Honeywell handheld device.\n2. Scan standard QR configuration barcode to link Odoo database URL.\n3. Sign in securely using standard corporate credentials.",
    mockUI: {
      title: "Warehouse PDA Monitor",
      metrics: [
        { label: "Scanned Items", value: "2,415 today" },
        { label: "Unsynced scans", value: "0 records" },
        { label: "Active pickers", value: "14 active" }
      ],
      rows: [
        { label: "SQLite local sync buffer", status: "online", value: "Fully Mirrored" },
        { label: "Honeywell Scanner Engine", status: "online", value: "Active" },
        { label: "Stock adjustment grid", status: "online", value: "PostgreSQL Live" }
      ]
    }
  },
  "twincore-smart-ledger": {
    gettingStarted: "Deploying Smart Ledger automates regional VAT, localized taxation schedules, and daily dynamic balance reconciliation feeds inside of standard Odoo Accounting modules.",
    architecture: "Plaid banking API proxies -> Encrypted OAuth endpoints -> Odoo secure account.move broker.",
    installation: "1. Install standard 'twincore_smart_ledger' addon inside Odoo.\n2. Configure regional IRS or VAT brackets in core settings sheet.\n3. Connect and authorize banking secure feeds via on-screen wizard.",
    mockUI: {
      title: "Smart Ledger Live Matrix",
      metrics: [
        { label: "SLA Match Rule", value: "98.7% accuracy" },
        { label: "VAT Pending", value: "$41,012.00" },
        { label: "Direct Feed Lines", value: "8 Linked" }
      ],
      rows: [
        { label: "Plaid connection socket", status: "online", value: "AES-255 Secure" },
        { label: "IRS Tax updates query", status: "online", value: "Matched Today" },
        { label: "Ledger imbalance safety", status: "online", value: "Nominal Difference" }
      ]
    }
  },
  "smart-crm-sales-booster": {
    gettingStarted: "The Sales-Booster widget displays on the standard pipeline form, integrating instant Whatsapp template triggers, SMS dispatch routes, and automatic prioritizers based on commercial lead scoring parameters.",
    architecture: "Twilio Gateway integration -> Webhook parser queue -> React interactive sidebar -> Odoo CRM model hook.",
    installation: "1. Enable under module developer config sheet.\n2. Set standard Meta Whatsapp Business tokens inside Odoo integration panels.\n3. Build your automated trigger templates in Sales dashboard.",
    mockUI: {
      title: "Sales Trigger Dashboard",
      metrics: [
        { label: "Leads Matched", value: "128 leads" },
        { label: "Auto replies sent", value: "870 outbound" },
        { label: "Deal closure velocity", value: "+18.2%" }
      ],
      rows: [
        { label: "Whatsapp Meta API webhook", status: "online", value: "Live connected" },
        { label: "Twilio outbound sms line", status: "online", value: "Status Active" },
        { label: "Lead prioritization queue", status: "online", value: "Re-aligned" }
      ]
    }
  },
  "twincore-portal-hub": {
    gettingStarted: "Twincore Portal Hub transforms baseline Microsoft SharePoint sites. It provisions responsive widgets, milestone matrices, communication carousels, and department charts within Office 365 standard portals.",
    architecture: "SharePoint Online Modern Experience -> React SPFx Client-Side Webparts -> Graph API telemetry pipelines.",
    installation: "1. Add SPFx package (.sppkg) inside enterprise SharePoint App Catalog folder.\n2. Approve API scopes inside M365 Administration Center.\n3. Add 'Twincore Portal Hub' to any modern intranet landing pages.",
    mockUI: {
      title: "SPFx Modern Intranet Hub",
      metrics: [
        { label: "Intranet Active Users", value: "1,200 corp" },
        { label: "Page speed load", value: "0.85s (Fast)" },
        { label: "Announcements web-part", value: "Sync ok" }
      ],
      rows: [
        { label: "Azure Active Directory graph", status: "online", value: "SAML SSO Ok" },
        { label: "Shared mailbox query thread", status: "online", value: "Connected" },
        { label: "Team birthday feed module", status: "online", value: "Synclist Live" }
      ]
    }
  },
  "docflow-automator": {
    gettingStarted: "Enables secure OCR document scanning, parsing metadata attributes, and filing matching items inside SharePoint Modern Libraries. Built to parse supplier PDFs and contracts seamlessly.",
    architecture: "Azure Document Intelligence engine -> M365 Power Automate Flows -> SharePoint ingestion endpoint.",
    installation: "1. Import standard Flow template inside Power Automate web portal.\n2. Point target triggers to corporate invoices library.\n3. Map OCR dynamic fields to custom column attributes of SharePoint.",
    mockUI: {
      title: "DocFlow OCR Engine",
      metrics: [
        { label: "Processed items", value: "840 files" },
        { label: "OCR Confidence", value: "99.2%" },
        { label: "Routing approvals", value: "9 Active" }
      ],
      rows: [
        { label: "Azure AI scanning gateway", status: "online", value: "Online, v3.2 API" },
        { label: "Vendor invoice matching loop", status: "online", value: "Active scanning" },
        { label: "File cabinet PDF-A compliance", status: "online", value: "Enabled" }
      ]
    }
  },
  "twinsync-teams-connector": {
    gettingStarted: "TwinSync handles secure transit of events from remote applications into Microsoft Teams chats. This helps engineers approve database entries or receive live monitoring widgets without leaving MS Teams.",
    architecture: "Standard webhook endpoint webserver -> Adaptive Cards converter schema -> Microsoft Graph API channel broker.",
    installation: "1. Deploy standard connector package inside Teams administrator tenant portal.\n2. Set webhook URL values inside your source systems settings panels.\n3. Customize message layouts using standard layout configuration tools.",
    mockUI: {
      title: "MS Graph Channels Broker",
      metrics: [
        { label: "Adaptive Cards sent", value: "14,500 units" },
        { label: "Transit lag", value: "95ms avg" },
        { label: "Channel sockets", value: "24 connected" }
      ],
      rows: [
        { label: "Teams Graph OAuth pipe", status: "online", value: "Token Active" },
        { label: "Callback actions resolver", status: "online", value: "Port 443 Secure" },
        { label: "Spam reduction limiter", status: "online", value: "Nominal" }
      ]
    }
  },
  "flow-task-matrix": {
    gettingStarted: "Unifies developer tickets, CRM inquiries, inventory transfers, and SharePoint requests into a beautifully rendered Kanban grid with custom deadline clocks.",
    architecture: "Unified API Gateway -> Web Socket event listeners -> Front-end React state kanban dashboards.",
    installation: "1. Import SPFx Web-part package into company SharePoint app list.\n2. Generate authentication keys inside Jira or Odoo profile screens.\n3. Drag and drop onto any company administrative panel pages to consolidate tasks.",
    mockUI: {
      title: "Unified Kanban Console",
      metrics: [
        { label: "Merged Queues", value: "4 platforms" },
        { label: "SLA Deadline Warn", value: "2 triggers" },
        { label: "Daily tasks cleared", value: "48 tasks" }
      ],
      rows: [
        { label: "Jira API endpoint hook", status: "online", value: "Sync active" },
        { label: "Odoo ERP pickings pool", status: "online", value: "Mirrored live" },
        { label: "PowerAutomate matrix cache", status: "online", value: "Cleaned cache" }
      ]
    }
  }
};

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  setCurrentPage,
  initialCategoryId 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategoryId || PRODUCTS_DATA[0].id
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [docsActiveTab, setDocsActiveTab] = useState<'overview' | 'arch' | 'setup'>('overview');
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');

  // Filter products by category and/or query filter
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.map((cat) => {
      const matchedProducts = cat.products.filter((prod) => {
        const query = searchQuery.toLowerCase();
        return (
          prod.name.toLowerCase().includes(query) ||
          prod.tagline.toLowerCase().includes(query) ||
          prod.description.toLowerCase().includes(query) ||
          prod.features.some(f => f.toLowerCase().includes(query)) ||
          prod.specs.some(s => s.toLowerCase().includes(query))
        );
      });
      return {
        ...cat,
        products: matchedProducts
      };
    });
  }, [searchQuery]);

  // Find exact products in active category
  const activeCategoryData = useMemo(() => {
    const data = filteredProducts.find(cat => cat.id === activeCategory);
    return data || null;
  }, [filteredProducts, activeCategory]);

  const handleConsult = (productName: string) => {
    setSelectedProduct(null);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      // Look for simplified requirement details text area or form matching
      const element = document.getElementsByTagName('textarea')[0] as HTMLTextAreaElement;
      if (element) {
        element.value = `We are interested in a dedicated live implementation and live sandbox demo of your system product: "${productName}". Please send technical document checklists, dynamic pricing tiers, and professional architect scheduling options.`;
        // Trigger React state change if needed
        element.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 200);
  };

  const handleSimulateDownload = () => {
    setDownloadState('downloading');
    setTimeout(() => {
      setDownloadState('complete');
      setTimeout(() => setDownloadState('idle'), 2000);
    }, 1500);
  };

  const currentCategoryProductsCount = activeCategoryData?.products.length || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 text-left select-none space-y-12 text-slate-800 dark:text-neutral-100 transition-colors">
      
      {selectedProduct ? (
        // Detailed Product Documentation and Screenshot Sub-View Page
        <div className="space-y-8">
          
          {/* Breadcrumbs Action */}
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="flex items-center gap-2 text-xs font-bold text-slate-650 dark:text-slate-350 hover:text-blue-600 dark:hover:text-blue-400 group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Ready-to-Deploy Products
          </button>

          {/* Product Header Card */}
          <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 text-left">
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-blue-400 inline-block">
                  Enterprise Documentation & Visual Specs
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-white mt-1">
                  {selectedProduct.name}
                </h1>
                <p className="text-xs sm:text-sm text-blue-300 font-semibold italic">{selectedProduct.tagline}</p>
                <p className="text-slate-300 text-xs max-w-2xl leading-relaxed mt-2">{selectedProduct.description}</p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleSimulateDownload}
                  className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-bold py-3 px-5 rounded-xl border border-slate-700/60 transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {downloadState === 'downloading' ? (
                    'Preparing Docs PDF...'
                  ) : downloadState === 'complete' ? (
                    <><Check className="w-4 h-4 text-emerald-500" /> Catalog Saved</>
                  ) : (
                    <><Download className="w-4 h-4" /> Save Specifications Sheet</>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleConsult(selectedProduct.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-md shadow-blue-500/10 transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Request Dedicated Sandbox Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Screen Illustration and Tabbed Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: High-Fidelity CSS Screenshot App Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2 block">Live App Monitor Mockup</p>
                
                {/* CSS App Mockup Container */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg font-sans text-left">
                  {/* Top Bar Chrome Styling */}
                  <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/60 flex justify-between items-center text-[10px] text-slate-450 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-slate-500 truncate max-w-[170px]">https://twincore.it/product/{selectedProduct.id}</span>
                    <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  </div>

                  {/* Mock Screen Content */}
                  <div className="p-4 sm:p-5 space-y-5 text-white">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-xs font-black">T</span>
                        <h4 className="text-[11px] font-black tracking-tight">{PRODUCT_DOCS[selectedProduct.id]?.mockUI.title || "Interface Dashboard"}</h4>
                      </div>
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md font-mono flex items-center gap-1">
                        ● Live Node
                      </span>
                    </div>

                    {/* Stats Widget Rows */}
                    <div className="grid grid-cols-3 gap-2">
                      {(PRODUCT_DOCS[selectedProduct.id]?.mockUI.metrics || [
                        { label: "Processing Loop", value: "0ms Delay" },
                        { label: "Active Gate", value: "Symmetric" },
                        { label: "DB Sockets", value: "SSL Encrypted" }
                      ]).map((metric, mIdx) => (
                        <div key={mIdx} className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/50 text-center">
                          <p className="text-[8px] text-slate-450 uppercase tracking-wider">{metric.label}</p>
                          <p className="text-xs font-bold text-blue-400 mt-1">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Table Logs Mock */}
                    <div className="space-y-2">
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest pl-0.5">Automated Event Pipeline</p>
                      
                      <div className="space-y-1.5 font-mono text-[9px] leading-tight">
                        {(PRODUCT_DOCS[selectedProduct.id]?.mockUI.rows || []).map((row, rIdx) => (
                          <div key={rIdx} className="flex justify-between items-center bg-slate-950/20 p-2 rounded border border-slate-850">
                            <span className="text-slate-350">{row.label}</span>
                            <span className={`text-[8px] ${row.status === 'online' ? 'text-emerald-400' : 'text-yellow-400'} font-bold`}>
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 justify-center">
                  <Flame className="w-3.5 h-3.5 text-blue-500" />
                  <span>Interactive CSS Screenshot is rendering in secure sandbox</span>
                </div>
              </div>
            </div>

            {/* Right: Rich Multitab Documentation Sheet */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tab Selector Buttons */}
              <div className="flex bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 p-1 rounded-xl gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setDocsActiveTab('overview')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    docsActiveTab === 'overview' 
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-slate-500 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" /> Getting Started
                </button>

                <button
                  type="button"
                  onClick={() => setDocsActiveTab('arch')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    docsActiveTab === 'arch' 
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-slate-500 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Settings className="w-3.5 h-3.5" /> Architecture
                </button>

                <button
                  type="button"
                  onClick={() => setDocsActiveTab('setup')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    docsActiveTab === 'setup' 
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-slate-500 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" /> Installation Steps
                </button>
              </div>

              {/* Dynamic Tab Contents Panel */}
              <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
                
                {docsActiveTab === 'overview' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Product Setup & Description</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {PRODUCT_DOCS[selectedProduct.id]?.gettingStarted || "Initial synchronization guide is being mapped."}
                    </p>
                    <hr className="border-slate-100 dark:border-slate-800" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-550 tracking-wider mb-2">Key Included Capabilities</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProduct.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex gap-2.5 items-start bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <p className="text-[11px] text-slate-700 dark:text-slate-350 font-medium leading-relaxed">{feat}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {docsActiveTab === 'arch' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Data Pipeline & Integrations Flow</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {PRODUCT_DOCS[selectedProduct.id]?.architecture || "Relay mapping of information feeds is active."}
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-150 dark:border-slate-800/60 font-mono text-[10px] text-blue-600 dark:text-blue-400 space-y-1.5 leading-normal">
                      <p className="font-extrabold text-slate-500 uppercase tracking-widest text-[8px] mb-1">Architecture Trace Logs</p>
                      <p>• Gateway standard: HTTPS over TLS v1.3 symmetric keys</p>
                      <p>• Payload structure: application/json REST schemas</p>
                      <p>• Database connector: PostgreSQL / SPFx site assets mirror</p>
                    </div>
                  </div>
                )}

                {docsActiveTab === 'setup' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Provisioning Instructions</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                      {PRODUCT_DOCS[selectedProduct.id]?.installation || "Step-by-step custom deployment guide is being populated."}
                    </p>
                    <hr className="border-slate-100 dark:border-slate-800" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-550 tracking-wider mb-2">Platform Requirements</p>
                      <div className="grid grid-cols-1 gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-850 p-3 rounded-xl">
                        {selectedProduct.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex justify-between border-b border-dashed border-slate-200/50 dark:border-slate-800 last:border-none pb-2 text-[10px]">
                            <span>{spec.split(' ')[0]} environment:</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* High-fidelity SDLC Process Box */}
              <div className="bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
                <span className="text-[9px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">End-to-End SDLC Commitment</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">Included Support, Maintenance & Compliance:</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Every Twincore pre-engineered SaaS product is backed by our full software life-cycle gate standards: direct deployment execution, custom API webhook mappings, localized database setup, and 24/7 technical priority SLA.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 font-bold px-3 py-1 rounded-full">SOC-2 Type II Certified</span>
                  <span className="text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 font-bold px-3 py-1 rounded-full">HIPAA compliant pipelines</span>
                  <span className="text-[10px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-300 font-bold px-3 py-1 rounded-full">GDPR Safe storage</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      ) : (
        // Standard Product Directory Page
        <>
          {/* Page Hero */}
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 dark:from-slate-900 dark:to-indigo-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/10 backdrop-blur-md text-blue-300 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-blue-400/20">
                <Sparkles className="w-3.5 h-3.5" /> Twincore Catalog Sourcing
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Ready-to-Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200">Enterprise Applications</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Plug-and-play modular enhancers, localized accounting engines, and Microsoft 365 intranet utilities custom-crafted to fast-track your enterprise digitization schedule.
              </p>
            </div>
          </section>

          {/* Categories & Search Segment */}
          <section className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-5 rounded-2xl shadow-sm transition-colors">
            
            {/* Tab Controls */}
            <div className="flex flex-wrap bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl gap-1 shrink-0">
              {PRODUCTS_DATA.map((cat) => {
                const IsActive = activeCategory === cat.id;
                const CatIcon = IconMap[cat.iconName] || Briefcase;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                    }}
                    className={`flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer select-none duration-250 ${
                      IsActive 
                        ? 'bg-blue-600 shadow-md text-white' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Search Box */}
            <div className="relative flex-grow md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 mt-[-1px]" />
              <input
                type="text"
                placeholder="Search matching software modules, features or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-blue-600 transition-all placeholder-slate-400 dark:placeholder-slate-550"
              />
            </div>

          </section>

          {/* Grid View Container */}
          <section className="space-y-10">
            
            {/* Category Description Board */}
            {activeCategoryData && (
              <div className="text-left py-2 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2 animate-fadeIn">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" />
                  {activeCategoryData.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-4xl">
                  {activeCategoryData.description}
                </p>
              </div>
            )}

            {/* Dynamic Product Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {activeCategoryData && currentCategoryProductsCount > 0 ? (
                  activeCategoryData.products.map((product) => {
                    const ProdIcon = IconMap[product.iconName] || Layers;

                    return (
                      <motion.div
                        key={product.id}
                        layout="position"
                        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/65 dark:border-slate-800 p-6 sm:p-8 hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all select-none duration-300 relative group flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row and Icon Badge */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-850 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-800">
                              <ProdIcon className="w-5 h-5" />
                            </div>

                            {product.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-150 dark:border-blue-800 px-2.5 py-1 rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>

                          {/* Header Group */}
                          <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight">
                            {product.name}
                          </h3>
                          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 tracking-tight">
                            {product.tagline}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-3">
                            {product.description}
                          </p>

                          {/* Core Feature Checklist */}
                          <div className="mt-5 space-y-2 pb-4 border-b border-dashed border-slate-100 dark:border-slate-800">
                            <p className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-widest block mb-2">Key Included Capabilities</p>
                            {product.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex gap-2.5 items-start">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-[11px] text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                                  {feat}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Group Footer */}
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                          
                          {/* Visual Screenshot & Docs Button */}
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedProduct(product);
                              window.scrollTo({ top: 0, behavior: 'auto' });
                            }}
                            className="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                            <span>Docs & Screenshot</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => handleConsult(product.name)}
                            className="bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white dark:text-slate-100 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm border border-slate-200 dark:border-slate-700"
                          >
                            Request Demo <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-2 text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="text-slate-400 dark:text-slate-600 block">
                      <Search className="w-10 h-10 mx-auto" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">No applications matched "{searchQuery}"</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-450 max-w-sm mx-auto">
                      Try searching with keywords like 'WMS', 'Fleet', 'Ledger', 'Portal', or select a different category.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition"
                    >
                      Clear Search Filter
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* Estimator Quick Redirect Banner */}
          <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-indigo-950">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="bg-indigo-500/15 text-indigo-300 font-extrabold text-[10px] tracking-widest px-3.5 py-1.5 rounded-full uppercase border border-indigo-400/10 inline-block">Calculate Your Implementation</span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">Need a customized pricing quote for your system expansion?</h3>
                <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
                  We provide clear parameters for Odoo installations and custom application builds. Head to our Services tab to access our interactive Odoo implementation costing tool, or submit a request directly inside Contact Us.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs py-3.5 px-6 rounded-xl hover:shadow-xl transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Access Estimator Tool <Sliders className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

    </div>
  );
};
