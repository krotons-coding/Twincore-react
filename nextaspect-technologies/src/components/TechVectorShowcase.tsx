import { AppWindow, Cpu, Database, Server, Workflow, ShieldCheck, RefreshCw, Layers, Terminal, Cloud, Container } from "lucide-react";

interface TechVectorShowcaseProps {
  activeTechTab: "frontend" | "backend" | "erp" | "database" | "cloud";
}

export default function TechVectorShowcase({ activeTechTab }: TechVectorShowcaseProps) {
  // Return different SVG and visual maps based on active tab
  const getTabTitle = () => {
    switch (activeTechTab) {
      case "frontend": return "Client UI Engine & Layout Architecture";
      case "backend": return "Stateful Core API & Secure Authentication Gateways";
      case "erp": return "Enterprise Odoo Ledger & CRM Synchronization Pipeline";
      case "database": return "ACID Database Transactional Sharding & Scaling";
      case "cloud": return "DevOps Containerization & CI/CD Pipeline Automations";
    }
  };

  return (
    <div className="lg:col-span-7 bg-[#05070c]/90 rounded-2xl border border-white/[0.08] p-6 text-left flex flex-col justify-between min-h-[380px] relative overflow-hidden group shadow-2xl" id="dynamic-tech-vector-container">
      {/* Dynamic vector particle background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none group-hover:bg-blue-500/15 transition-colors duration-500" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-purple-500/10 blur-[60px] pointer-events-none" />

      {/* Frame header with design guidelines (no raw code text) */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] relative z-10">
        <div className="flex items-center space-x-2">
          {/* Mock Browser/Vector visual buttons */}
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[10px] font-mono tracking-wider font-extrabold text-slate-400 uppercase">
            {getTabTitle()}
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-[#10b981] font-black uppercase bg-[#10b981]/15 px-2 py-0.5 rounded border border-[#10b981]/20">
          VECTOR SCHEMATIC
        </span>
      </div>

      {/* Vector Visualization Body */}
      <div className="flex-grow flex flex-col items-center justify-center my-6 relative z-10 min-h-[220px]">
        {activeTechTab === "frontend" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <svg viewBox="0 0 500 160" fill="none" className="w-full max-w-md h-auto">
              {/* Client screen container frame */}
              <rect x="25" y="10" width="450" height="140" rx="12" fill="#080b13" stroke="#1e293b" strokeWidth="2" />
              <rect x="35" y="20" width="130" height="120" rx="6" fill="#0d1324" stroke="#3b82f6" strokeWidth="1" />
              
              {/* Screen sub panels */}
              <rect x="45" y="32" width="110" height="6" rx="3" fill="#1e293b" />
              <rect x="45" y="48" width="50" height="30" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="125" cy="63" r="10" fill="#3b82f6" fillOpacity="0.2" />
              
              <rect x="45" y="90" width="110" height="5" rx="2" fill="#1e293b" />
              <rect x="45" y="100" width="110" height="5" rx="2" fill="#1e293b" />
              <rect x="45" y="110" width="80" height="5" rx="2" fill="#1e293b" />

              {/* Central flow system */}
              <g>
                <path d="M 175 80 L 315 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 5">
                  <animate attributeName="stroke-dashoffset" values="50;0" dur="4s" repeatCount="indefinite" />
                </path>
                <circle cx="245" cy="80" r="4" fill="#3b82f6">
                  <animate attributeName="cx" values="175;315;315" dur="3s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Dynamic State Central Component */}
              <rect x="325" y="32" width="130" height="96" rx="8" fill="#111827" stroke="#10b981" strokeWidth="1.5" />
              
              <circle cx="390" cy="55" r="12" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" />
              {/* Rotating atom visual inside circles */}
              <ellipse cx="390" cy="55" rx="14" ry="6" stroke="#10b981" strokeWidth="0.8" transform="rotate(30, 390, 55)" />
              <ellipse cx="390" cy="55" rx="14" ry="6" stroke="#3b82f6" strokeWidth="0.8" transform="rotate(150, 390, 55)" />

              <text x="390" y="88" fill="#8892b0" fontSize="9" textAnchor="middle" fontFamily="sans-serif" fontWeight="semibold">React Core Runtime</text>
              <text x="390" y="102" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="bold">99.8% Core Score</text>
            </svg>
            <div className="flex space-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5"><AppWindow className="w-3.5 h-3.5 text-blue-400" /> <span>Next.js CSR/SSR</span></span>
              <span className="flex items-center space-x-1.5"><Layers className="w-3.5 h-3.5 text-emerald-400" /> <span>Tailwind v4 Sandbox</span></span>
            </div>
          </div>
        )}

        {activeTechTab === "backend" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <svg viewBox="0 0 500 160" fill="none" className="w-full max-w-md h-auto">
              <circle cx="90" cy="80" r="32" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="2" />
              <text x="90" y="76" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">REST / TLS</text>
              <text x="90" y="92" fill="#818cf8" fontSize="8" textAnchor="middle">Gateway</text>

              {/* Network flow line 1 */}
              <g>
                <path d="M 122 80 L 228 80" stroke="#818cf8" strokeWidth="2" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                </path>
                <circle cx="175" cy="80" r="3" fill="#818cf8">
                  <animate attributeName="cx" values="122;228;228" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Secure middleware node */}
              <rect x="238" y="44" width="76" height="72" rx="10" fill="#061e16" stroke="#10b981" strokeWidth="1.5" />
              <text x="276" y="74" fill="#10b981" fontSize="10" fontWeight="extrabold" textAnchor="middle">JWT</text>
              <text x="276" y="88" fill="#34d399" fontSize="8" textAnchor="middle">Guard</text>

              {/* Network flow line 2 */}
              <g>
                <path d="M 314 80 L 372 80" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4">
                  <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Core Execution Hub */}
              <rect x="382" y="32" width="96" height="96" rx="12" fill="#090d16" stroke="#a855f7" strokeWidth="2" />
              <circle cx="430" cy="70" r="18" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3">
                <animateTransform attributeName="transform" type="rotate" from="0 430 70" to="360 430 70" dur="10s" repeatCount="indefinite" />
              </circle>
              <text x="430" y="105" fill="#c084fc" fontSize="9" fontWeight="bold" textAnchor="middle">Node.js Engine</text>
            </svg>
            <div className="flex space-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> <span>HTTPS Security Guarded</span></span>
              <span className="flex items-center space-x-1.5"><Cpu className="w-3.5 h-3.5 text-purple-400" /> <span>Isolated Work Threading</span></span>
            </div>
          </div>
        )}

        {activeTechTab === "erp" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <svg viewBox="0 0 500 160" fill="none" className="w-full max-w-md h-auto">
              <rect x="20" y="44" width="112" height="72" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="76" y="76" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">Microsoft Graph</text>
              <text x="76" y="92" fill="#94a3b8" fontSize="8" textAnchor="middle">Active Connector</text>

              {/* Flow line 1 */}
              <path d="M 132 80 L 198 80" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 198 80 L 132 80" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Central Server node */}
              <circle cx="238" cy="80" r="32" fill="#083344" stroke="#06b6d4" strokeWidth="2.5" />
              <text x="238" y="76" fill="#06b6d4" fontSize="11" fontWeight="black" textAnchor="middle">Odoo ERP</text>
              <text x="238" y="92" fill="#ffffff" fontSize="8" textAnchor="middle">CENTRAL CORE</text>

              {/* Flow line 2 */}
              <g>
                <path d="M 270 80 L 372 80" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5 5">
                  <animate attributeName="stroke-dashoffset" values="50;0" dur="4s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Sync Output Client Module */}
              <rect x="382" y="32" width="100" height="96" rx="10" fill="#050508" stroke="#10b981" strokeWidth="1.5" />
              <rect x="394" y="48" width="76" height="12" rx="3" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" />
              <text x="432" y="57" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">LEDGER ACTIVE</text>
              
              <rect x="394" y="68" width="76" height="5" rx="1" fill="#1e293b" />
              <rect x="394" y="78" width="76" height="5" rx="1" fill="#1e293b" />
              <rect x="394" y="88" width="50" height="5" rx="1" fill="#1e293b" />
            </svg>
            <div className="flex space-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5"><Workflow className="w-3.5 h-3.5 text-cyan-400" /> <span>CRM Automated Flows</span></span>
              <span className="flex items-center space-x-1.5"><RefreshCw className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" /> <span>Continuous Microsoft Sync</span></span>
            </div>
          </div>
        )}

        {activeTechTab === "database" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <svg viewBox="0 0 500 160" fill="none" className="w-full max-w-md h-auto">
              {/* Stack of cylindrical database discs */}
              <g transform="translate(100, 20)">
                <ellipse cx="60" cy="30" rx="45" ry="15" fill="#111827" stroke="#14b8a6" strokeWidth="2" />
                <path d="M15,30 L15,55 A45,15 0 0,0 105,55 L105,30" fill="#111827" stroke="#14b8a6" strokeWidth="2" />
                <path d="M15,55 L15,80 A45,15 0 0,0 105,80 L105,55" fill="#111827" stroke="#14b8a6" strokeWidth="2" />
                <path d="M15,80 L15,105 A45,15 0 0,0 105,105 L105,80" fill="#111827" stroke="#14b8a6" strokeWidth="2" />
                <ellipse cx="60" cy="55" rx="45" ry="15" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="60" cy="80" rx="45" ry="15" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
                <text x="60" y="62" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="black" fontFamily="sans-serif">Postgres SQL</text>
                <text x="60" y="75" fill="#14b8a6" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="monospace">ACID Cluster</text>
              </g>

              {/* Data pathway connection */}
              <path d="M 230,70 L 330,70" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6 3">
                <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
              </path>

              {/* Document DB Node */}
              <g transform="translate(320, 25)">
                <rect x="15" y="10" width="100" height="80" rx="8" fill="#06241b" stroke="#10b981" strokeWidth="1.5" />
                <rect x="25" y="24" width="80" height="12" rx="4" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" />
                <circle cx="35" cy="30" r="3" fill="#10b981" />
                <rect x="45" y="27" width="50" height="5" rx="2" fill="#10b981" />

                <rect x="25" y="44" width="80" height="12" rx="4" fill="#1e293b" />
                <rect x="25" y="60" width="80" height="12" rx="4" fill="#1e293b" />
                <text x="65" y="96" fill="#a1a1aa" fontSize="8" textAnchor="middle" fontWeight="bold">JSON Documents</text>
              </g>
            </svg>
            <div className="flex space-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5"><Database className="w-3.5 h-3.5 text-teal-400" /> <span>Read-Write Pools</span></span>
              <span className="flex items-center space-x-1.5"><Server className="w-3.5 h-3.5 text-emerald-400" /> <span>Dynamic Cache Indexes</span></span>
            </div>
          </div>
        )}

        {activeTechTab === "cloud" && (
          <div className="w-full flex flex-col items-center space-y-4">
            <svg viewBox="0 0 500 160" fill="none" className="w-full max-w-md h-auto">
              <g transform="translate(20, 20)">
                <rect x="10" y="10" width="102" height="96" rx="10" fill="#0a0f1d" stroke="#3b82f6" strokeWidth="1.5" />
                <ellipse cx="61" cy="40" rx="18" ry="18" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3">
                  <animateTransform attributeName="transform" type="rotate" from="0 61 40" to="360 61 40" dur="8s" repeatCount="indefinite" />
                </ellipse>
                <text x="61" y="80" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">CI/CD Engine</text>
                <text x="61" y="92" fill="#3b82f6" fontSize="7" textAnchor="middle" fontWeight="black">GIT ACTION</text>
              </g>

              {/* Connected arrow 1 */}
              <g>
                <path d="M 132 80 L 222 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 3">
                  <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Central container orchestration stack */}
              <g transform="translate(232, 20)">
                <circle cx="40" cy="60" r="32" fill="#082f49" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M 28 60 L 52 60 M 40 48 L 40 72" stroke="#0ea5e9" strokeWidth="1.5" />
                <text x="40" y="104" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="extrabold">Docker Mesh</text>
              </g>

              {/* Connected arrow 2 */}
              <g>
                <path d="M 312 80 L 378 80" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="6 3">
                  <animate attributeName="stroke-dashoffset" values="30;0" dur="2s" repeatCount="indefinite" />
                </path>
              </g>

              {/* Target Ingress server clusters */}
              <g transform="translate(388, 20)">
                <rect x="10" y="10" width="92" height="96" rx="8" fill="#180b2a" stroke="#d946ef" strokeWidth="1.5" />
                <circle cx="56" cy="48" r="14" fill="#d946ef" fillOpacity="0.1" stroke="#d946ef" strokeWidth="1" />
                <text x="56" y="80" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Ingress Route</text>
                <text x="56" y="92" fill="#e879f9" fontSize="7" textAnchor="middle" fontWeight="black">CLOUD RUN</text>
              </g>
            </svg>
            <div className="flex space-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5"><Cloud className="w-3.5 h-3.5 text-blue-400" /> <span>Load Balancing Edge</span></span>
              <span className="flex items-center space-x-1.5"><Container className="w-3.5 h-3.5 text-fuchsia-400" /> <span>Orchestrated Isolation</span></span>
            </div>
          </div>
        )}
      </div>

      {/* Frame footer with status label */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between relative z-10 text-[10px] text-slate-500 font-mono">
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>AUTONOMOUS WORKFLOW SYNCED</span>
        </div>
        <span>COMPLIANT SECURE PIPELINE</span>
      </div>
    </div>
  );
}
