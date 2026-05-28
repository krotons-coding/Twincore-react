import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Code, Cpu, Database, Cloud, Sparkles, Star, Users, Award, Shield, Timer, HelpCircle, Activity, Layout, Layers, Terminal, BookOpen, Send, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { servicesData, technologiesData, portfolioData, blogPostsData, testimonialsData } from "../data";
import TechVectorShowcase from "./TechVectorShowcase";

interface HomeViewProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Active technology tab
  const [activeTechTab, setActiveTechTab] = useState<"frontend" | "backend" | "erp" | "database" | "cloud">("frontend");
  
  // Stats counter simulation
  const [projectsCount, setProjectsCount] = useState(120);
  const [satisfactionCount, setSatisfactionCount] = useState(95.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProjectsCount((prev) => (prev < 184 ? prev + 1 : prev));
      setSatisfactionCount((prev) => (prev < 98.7 ? parseFloat((prev + 0.1).toFixed(1)) : prev));
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // Icon map for styling services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "SharepointIcon": return Cloud;
      case "ReactIcon": return Code;
      case "NextIcon": return Sparkles;
      case "MernIcon": return Cpu;
      case "TypeScriptIcon": return KeyIcon;
      case "OdooIcon": return Database;
      case "OdooMigrationIcon": return Activity;
      case "ErpIcon": return Layout;
      default: return Layers;
    }
  };

  const KeyIcon = Code; // fallbacks

  return (
    <div className="space-y-32 pb-24" id="home-view-canvas">
      
      {/* ----------------- SECTION 1: HERO CONTAINER ----------------- */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-dot-pattern" id="hero-section">
        
        {/* Ambient floating blurs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary-indigo/20 blur-[130px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary-cyan/15 blur-[150px] pointer-events-none animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div 
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-primary-electric/50 transition-all cursor-pointer select-none group"
                id="hero-badge"
              >
                <span className="w-2 h-2 bg-accent-neon rounded-full" />
                <span className="text-xs font-mono tracking-wider font-semibold text-gray-300">
                  NEXTASPECT IS HIRING & SCALING WORLDWIDE
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </div>

              <div className="space-y-4">
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  Transforming Ideas Into <br />
                  <span className="bg-gradient-to-r from-primary-indigo via-primary-electric to-secondary-cyan bg-clip-text text-transparent">
                    Scalable Digital
                  </span>{" "}
                  Solutions
                </h1>
                <p className="font-sans text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                  NextAspect Technologies delivers enterprise software, SharePoint cloud hubs, custom React dashboards, and robust Odoo ERP management models. Let's code your vision to reality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button 
                  onClick={() => onNavigate("contact")}
                  className="px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-primary-indigo to-primary-electric hover:shadow-xl hover:shadow-primary-indigo/35 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center space-x-2"
                  id="btn-hero-consult"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate("services")}
                  className="px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-gray-300 bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center"
                  id="btn-hero-services"
                >
                  View Services Index
                </button>
              </div>

              {/* Quick Feature Flags */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/[0.05]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-neon flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium font-mono">ISO Centered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-neon flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium font-mono">Microsoft Gold</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent-neon flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium font-mono">Odoo Certified</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Vector Image Panel */}
            <div className="lg:col-span-5 relative" id="hero-interactive-vector">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mx-auto max-w-md lg:max-w-none rounded-2xl glass-panel p-6 border border-primary-indigo/15 shadow-2xl shadow-primary-indigo/10 bg-white/65 group overflow-hidden"
              >
                {/* Clean tech geometric dot backdrop */}
                <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
                
                {/* Animated Gradient Orbs inside Vector space */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-tr from-primary-electric/25 to-secondary-cyan/15 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tr from-secondary-purple/20 to-primary-indigo/15 rounded-full blur-3xl opacity-50 animate-pulse-slow" />

                {/* Primary SVG Vector Drawing */}
                <svg
                  viewBox="0 0 500 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-md relative z-10"
                >
                  {/* Definition for high-end gradients and patterns */}
                  <defs>
                    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Radiating concentric network circles */}
                  <circle cx="250" cy="225" r="160" stroke="rgba(79, 70, 229, 0.12)" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="250" cy="225" r="110" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1.5" />
                  <circle cx="250" cy="225" r="60" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="1.8" strokeDasharray="6 3" />
                  <circle cx="250" cy="225" r="220" stroke="rgba(79, 70, 229, 0.04)" strokeWidth="1" />

                  {/* Ambient backdrop sphere glow */}
                  <circle cx="250" cy="225" r="135" fill="url(#sphereGlow)" />

                  {/* Connected vector path lines (Star Network Topology) */}
                  <path d="M 250 90 L 250 225" stroke="rgba(37, 99, 235, 0.35)" strokeWidth="2.5" strokeDasharray="5 5" />
                  <path d="M 390 160 L 250 225" stroke="rgba(124, 58, 237, 0.35)" strokeWidth="2.5" strokeDasharray="5 5" />
                  <path d="M 360 330 L 250 225" stroke="rgba(6, 182, 212, 0.35)" strokeWidth="2.5" />
                  <path d="M 140 330 L 250 225" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="2.5" />
                  <path d="M 110 160 L 250 225" stroke="rgba(79, 70, 229, 0.35)" strokeWidth="2.5" strokeDasharray="3 3" />

                  {/* Center Node: The Aspect Core Hub */}
                  <g className="cursor-pointer">
                    <circle cx="250" cy="225" r="38" fill="url(#primaryGrad)" />
                    <circle cx="250" cy="225" r="30" fill="#ffffff" />
                    {/* Glowing Core Dot */}
                    <circle cx="250" cy="225" r="14" fill="url(#cyanGrad)" />
                    {/* Pulsing surround border */}
                    <circle cx="250" cy="225" r="44" stroke="#4f46e5" strokeWidth="1" opacity="0.4" strokeDasharray="4 2">
                      <animate attributeName="r" values="38;48;38" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Node 1: ERP & CMS Tier (Top Center - Odoo & SharePoint) */}
                  <g transform="translate(250, 90)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="28" fill="url(#cyanGrad)" />
                    <circle cx="0" cy="0" r="22" fill="#ffffff" />
                    {/* ERP Cloud graphic */}
                    <rect x="-7" y="-7" width="14" height="14" rx="2.5" fill="url(#cyanGrad)" />
                    <path d="M-3.5 -2.5 L3.5 -2.5 M-3.5 1.5 L3.5 1.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Animated aura ring */}
                    <circle cx="0" cy="0" r="32" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 1" opacity="0.6">
                      <animate attributeName="r" values="28;36;28" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Node 2: Next-Gen Frontend Tier (Top Right - React & Next.js & TS) */}
                  <g transform="translate(390, 160)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="28" fill="url(#purpleGrad)" />
                    <circle cx="0" cy="0" r="22" fill="#ffffff" />
                    {/* React Atom Symbol code */}
                    <ellipse rx="8" ry="3" stroke="url(#purpleGrad)" strokeWidth="1.2" transform="rotate(30)" />
                    <ellipse rx="8" ry="3" stroke="url(#purpleGrad)" strokeWidth="1.2" transform="rotate(90)" />
                    <ellipse rx="8" ry="3" stroke="url(#purpleGrad)" strokeWidth="1.2" transform="rotate(150)" />
                    <circle cx="0" cy="0" r="1.5" fill="#7c3aed" />
                    {/* Animated aura ring */}
                    <circle cx="0" cy="0" r="32" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 1" opacity="0.6">
                      <animate attributeName="r" values="32;28;32" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Node 3: Cloud & Container Tier (Bottom Right - Docker & AWS & Azure) */}
                  <g transform="translate(360, 330)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="28" fill="url(#primaryGrad)" />
                    <circle cx="0" cy="0" r="22" fill="#ffffff" />
                    {/* Container Stack Graphic */}
                    <rect x="-6" y="-6" width="12" height="4" rx="1" fill="#4f46e5" />
                    <rect x="-6" y="-1" width="12" height="4" rx="1" fill="#3b82f6" />
                    <rect x="-6" y="4" width="12" height="4" rx="1" fill="#06b6d4" />
                  </g>

                  {/* Node 4: Transactional Databases (Bottom Left - PostgreSQL & MongoDB) */}
                  <g transform="translate(140, 330)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="28" fill="url(#emeraldGrad)" />
                    <circle cx="0" cy="0" r="22" fill="#ffffff" />
                    {/* Database cylinders */}
                    <path d="M-6 -6 H6 V-2 H-6 Z M-6 -1 H6 V3 H-6 Z M-6 4 H6 V8 H-6 Z" fill="url(#emeraldGrad)" />
                  </g>

                  {/* Node 5: Backend & API Tier (Top Left - Node.js, Express, Python) */}
                  <g transform="translate(110, 160)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="rgba(79, 70, 229, 0.45)" strokeWidth="2" />
                    <circle cx="0" cy="0" r="20" fill="rgba(79, 70, 229, 0.08)" />
                    {/* Bolt icon */}
                    <path d="M-2 -7 L3 -2 L-1 0 L2 5 L-3 1 L1 -1 Z" fill="#4f46e5" />
                  </g>

                  {/* Moving Flow Signals along the paths (vector particles) */}
                  <circle cx="0" cy="0" r="4.5" fill="#2563eb" filter="drop-shadow(0 0 5px #2563eb)">
                    <animateMotion
                      path="M 250 225 L 250 90"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#7c3aed" filter="drop-shadow(0 0 5px #7c3aed)">
                    <animateMotion
                      path="M 250 225 L 390 160"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#06b6d4" filter="drop-shadow(0 0 5px #06b6d4)">
                    <animateMotion
                      path="M 250 225 L 360 330"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#10b981" filter="drop-shadow(0 0 5px #10b981)">
                    <animateMotion
                      path="M 250 225 L 140 330"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="4.5" fill="#4f46e5" filter="drop-shadow(0 0 5px #4f46e5)">
                    <animateMotion
                      path="M 250 225 L 110 160"
                      dur="2.9s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Text labels pointing out active sectors within SVG vector */}
                  <text x="250" y="48" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="Sora">Odoo & SharePoint Hub</text>
                  <text x="250" y="58" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">ERP & COLLABORATION</text>

                  <text x="432" y="152" textAnchor="start" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="Sora">React & Next.js Stack</text>
                  <text x="432" y="162" textAnchor="start" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">UI/UX SPECIALLISTS</text>

                  <text x="390" y="328" textAnchor="start" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="Sora">AWS / Docker / Azure</text>
                  <text x="390" y="338" textAnchor="start" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">DEPLOYMENT & INFRA</text>

                  <text x="106" y="328" textAnchor="end" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="Sora">PostgreSQL & MongoDB</text>
                  <text x="106" y="338" textAnchor="end" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">ACID DATA TIERS</text>

                  <text x="64" y="152" textAnchor="end" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="Sora">Node & Express & Python</text>
                  <text x="64" y="162" textAnchor="end" fill="#64748b" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">SECURE API DRIVERS</text>

                  {/* Center Node Title */}
                  <text x="250" y="274" textAnchor="middle" fill="#4f46e5" fontSize="11" fontWeight="extrabold" fontFamily="Sora">NextAspect Core Service Mesh</text>
                  <text x="250" y="284" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono">ALL TECH STACK ORCHESTRATION</text>

                </svg>

                {/* Overlapping secondary stats glass card - beautiful light mode theme */}
                <div className="absolute -bottom-4 -left-4 rounded-xl glass-panel p-4 max-w-[210px] shadow-xl border border-primary-indigo/15 bg-white/95 hidden sm:block animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-tr from-primary-electric/10 to-secondary-cyan/15 rounded-lg text-primary-electric">
                      <Timer className="w-5 h-5 text-primary-electric" />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-mono text-slate-800 uppercase tracking-wider font-extrabold">DELIVERY TIME</span>
                      <span className="block text-sm font-extrabold text-black mt-0.5">Under 4 Weeks</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: CLIENTS / TRUSTED LOGOS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="clients-section">
        <div className="text-center space-y-4">
          <p className="text-xs font-mono tracking-widest text-[#a855f7] uppercase font-bold">
            TRUSTED PARTNERSHIPS
          </p>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            Trusted by startups, enterprises, and growing businesses worldwide
          </h2>
          
          {/* Logo Grid (Unique, stylized responsive row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-6" id="logos-grid">
            {[
              { name: "Apex Logistics", tag: "Logistics" },
              { name: "Sterling Mutual", tag: "Fintech" },
              { name: "Vanguard Care", tag: "Healthcare" },
              { name: "Trident Trade", tag: "Wholesale" },
              { name: "Scribe SaaS", tag: "SaaS" }
            ].map((client) => (
              <div 
                key={client.name}
                className="py-5 px-6 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/10 transition-colors cursor-default text-center group"
              >
                <div className="font-display font-bold text-sm tracking-wide text-gray-500 group-hover:text-white transition-colors duration-200">
                  {client.name}
                </div>
                <div className="text-[9px] font-mono text-gray-600 group-hover:text-primary-electric tracking-widest uppercase mt-0.5 transition-colors">
                  {client.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 3: ABOUT COMPANY ----------------- */}
      <section className="bg-gradient-to-r from-dark-panel/20 to-[#0e1220]/25 py-20 border-y border-white/[0.03] bg-dot-pattern" id="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Creative text description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-mono tracking-widest text-primary-electric uppercase font-bold block">
                ABOUT SYSTEM INNOVATION
              </span>
              <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
                Who We Are: Architecture, Automation, and Acceleration
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                NextAspect Technologies represents a modern software development and Odoo ERP consulting agency. We replace manual bottlenecks with flawless serverless, clean interface, and relational database automation pipelines. 
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whether deploying containerized Odoo ERP modules on AWS clusters, refactoring custom React/Next JS dashboards, or configuring multi-school/hospital SharePoint DMS systems, NextAspect enforces strict, scalable, and fully secure code.
              </p>
              
              <div className="pt-4 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-indigo text-xs font-bold font-sans text-white border-2 border-dark-bg flex items-center justify-center">E</div>
                  <div className="w-8 h-8 rounded-full bg-secondary-purple text-xs font-bold font-sans text-white border-2 border-dark-bg flex items-center justify-center">S</div>
                  <div className="w-8 h-8 rounded-full bg-[#10b981] text-xs font-bold font-sans text-white border-2 border-dark-bg flex items-center justify-center">M</div>
                </div>
                <span className="text-xs text-gray-400">Led by certified Scrum & Solution Masters</span>
              </div>
            </div>

            {/* Right Col: Animated statistics cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="stats-dashboard">
              
              <div className="p-6 rounded-2xl glass-panel text-left space-y-2 border-b-2 border-b-primary-indigo">
                <span className="block text-3xl font-display font-bold text-white tracking-tight">
                  {projectsCount}+
                </span>
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Projects Delivered
                </span>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Fully deployed CRM, DMS, and custom SaaS web configurations.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel text-left space-y-2 border-b-2 border-b-secondary-cyan">
                <span className="block text-3xl font-display font-bold text-white tracking-tight">
                  {satisfactionCount}%
                </span>
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Client Satisfaction
                </span>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Repeat consultancy commitments across logistics & tech sectors.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel text-left space-y-2 border-b-2 border-b-accent-neon">
                <span className="block text-3xl font-display font-bold text-white tracking-tight">
                  12+ Years
                </span>
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Systems Experience
                </span>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Deep technical roots across MS 365, Python, Docker, and SQL.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel text-left space-y-2 border-b-2 border-b-[#a855f7]">
                <span className="block text-3xl font-display font-bold text-white tracking-tight">
                  25+ Core
                </span>
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Frameworks Mastered
                </span>
                <p className="text-[11px] text-gray-500 leading-tight">
                  React JS, Next.js, Odoo, Express, PowerShell scripting.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ----------------- BUSINESS SCOPE SECTION ----------------- */}
      <section className="bg-white py-20 border-y border-slate-200/50 relative overflow-hidden text-left" id="scope-of-business-section">
        {/* Decorative Grid Line vectors */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#2563eb] uppercase font-bold bg-[#2563eb]/5 px-3 py-1.5 rounded-full inline-block">
              COMMERCIAL SECTORS & DOMAINS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900">
              Our core scope of business
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We engineer specialized information ecosystems, automated ERP workflows, and secure databases calibrated to the operational biology of targeted industry domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="business-scope-grid">
            
            {/* IT & Cloud Companies */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-400 to-[#2563eb] flex items-center justify-center text-white shadow-md shadow-sky-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">IT & Cloud Systems</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">SaaS • DevOps • Microservices</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scaffold containerized REST APIs, headless Node/Express engines, TypeScript components, automatic GitHub CI/CD pathways, and AWS server clustering infrastructure.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>99.99% Availability Specs</span>
                <span className="text-[#10b981] font-bold">AWS PARTNER</span>
              </div>
            </div>

            {/* Manufacturing & ERP */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-[#2563eb] flex items-center justify-center text-white shadow-md shadow-indigo-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Manufacturing (MRP)</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">Bills of Materials • Routing</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrate Odoo MRP custom routing, work center scheduling terminals, barcode scanners, automatic reordering systems, and double-entry general ledger configurations.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>60% Setup Cycle Reductions</span>
                <span className="text-[#a855f7] font-bold">ODOO TECH</span>
              </div>
            </div>

            {/* Healthcare & Biotech */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#10b981] to-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Healthcare & Biotech</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">HIPAA compliance • SharePoint</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Design compliant SharePoint Document Management Systems (DMS) with clinical vault tagging, electronic record signature routes, and immutable audit logging.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>HIPAA & GDPR Audited</span>
                <span className="text-[#10b981] font-bold">MUTUAL SECURE</span>
              </div>
            </div>

            {/* Telecom Operations */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-[#10b981] flex items-center justify-center text-white shadow-md shadow-cyan-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Telecom Platforms</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">Middleware • Queue sync</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Construct high-throughput middleware networks, event brokers, asynchronous webhook routes, and API relays that align communication loops instantly.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>Over 1M events/sec load</span>
                <span className="text-cyan-600 font-bold">FAST PIPES</span>
              </div>
            </div>

            {/* Media & Entertainment */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500 to-[#7c3aed] flex items-center justify-center text-white shadow-md shadow-purple-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Entertainment & Media</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">UX portals • Flow layouts</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Build responsive frontend rendering engines, media catalog lists, and optimized streaming assets pipelines that keep scrolling and hover actions snug.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>Interactive motion.js layouts</span>
                <span className="text-violet-600 font-bold">NEXT UI</span>
              </div>
            </div>

            {/* Fintech Solutions */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-700 flex items-center justify-center text-white shadow-md shadow-indigo-600/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M17 12H7"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Fintech & Banking</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">Security JWT • Strict SQL</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Design type-safe transaction monitors, ledger reconciliation routines, automated invoice trackers, and encrypted OAuth user sessions.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>AES-256 Token Encryption</span>
                <span className="text-[#2563eb] font-bold">SECURE VAULT</span>
              </div>
            </div>

            {/* Ecommerce Networks */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-400 to-[#e11d48] flex items-center justify-center text-white shadow-md shadow-rose-500/15 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">E-commerce Networks</h3>
                  <p className="text-xs text-slate-500 font-mono font-bold text-primary-electric uppercase">Cart sync • Stripe API</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deploy storefront pipelines, Stripe or global checkout integrations, warehouse supply tracking maps, and live inventory sync configurations.
                </p>
              </div>
              <div className="text-[10px] font-mono text-slate-400 border-t border-slate-100 pt-3 flex items-center justify-between">
                <span>Fully mobile optimized</span>
                <span className="text-rose-600 font-bold">SLA ACCELERATED</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- METHODOLOGY: END-TO-END SDLC FLOW ----------------- */}
      <section className="bg-slate-50 py-20 border-b border-slate-200/50 text-left" id="sdlc-flow-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-[#2563eb] uppercase font-bold bg-[#2563eb]/5 px-3 py-1.5 rounded-full inline-block">
              OUR INTERNAL DELIVERY STANDARD
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900">
              End-to-End SDLC Project Execution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              How NextAspect executes, codes, templates, and delivers completely functional commercial platforms in weeks instead of months.
            </p>
          </div>

          {/* Grid covering horizontal detailed step boxes with customized vector drawings inside each */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="sdlc-steps-grid">
            
            {/* Step 1: Discovery & Scoping */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">01</span>
                  <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 py-0.5 px-2 rounded-md font-bold">DISCOVERY</span>
                </div>
                
                {/* Vector Drawing 1: Scoping Document Checklist */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-slate-400">
                    <rect x="75" y="10" width="50" height="60" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                    <line x1="85" y1="22" x2="115" y2="22" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="85" y1="34" x2="115" y2="34" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="85" y1="46" x2="105" y2="46" stroke="#94a3b8" strokeWidth="1.5" />
                    <circle cx="50" cy="40" r="12" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.5" />
                    <polyline points="46,40 49,43 54,37" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Requirements Discovery</h3>
                  <p className="text-xs text-slate-500 font-semibold">Discovery workshops & catalog audits</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We hold intensive consulting loops to map manual spreadsheet gaps, document processes, audits, and create technical scope lists within the workspace.
                </p>
              </div>
            </div>

            {/* Step 2: Blueprint Architecture */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">02</span>
                  <span className="text-[10px] font-mono uppercase bg-[#2563eb]/10 text-primary-electric py-0.5 px-2 rounded-md font-bold">BLUEPRINT</span>
                </div>
                
                {/* Vector Drawing 2: Flow blueprint cube */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 fill-none flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full">
                    {/* Isometric wireframe cube diagram */}
                    <path d="M 100 15 L 122 24 L 100 33 L 78 24 Z" fill="rgba(79, 70, 229, 0.1)" stroke="#4f46e5" strokeWidth="1.5" />
                    <path d="M 78 24 L 100 33 L 100 55 L 78 46 Z" fill="rgba(37, 99, 235, 0.1)" stroke="#2563eb" strokeWidth="1.5" />
                    <path d="M 122 24 L 100 33 L 100 55 L 122 46 Z" fill="rgba(124, 58, 237, 0.15)" stroke="#7c3aed" strokeWidth="1.5" />
                    <line x1="100" y1="33" x2="100" y2="55" stroke="#cbd5e1" strokeWidth="1" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">System Blueprint Mapping</h3>
                  <p className="text-xs text-slate-500 font-semibold">Data Relational models & flowcharts</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Before we draft code, we establish robust data catalogs, map API paths, configure double-entry bookkeeping rulesets, and deliver technical workflow charts.
                </p>
              </div>
            </div>

            {/* Step 3: Agile Coding */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">03</span>
                  <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-600 py-0.5 px-2 rounded-md font-bold">DEVELOPMENT</span>
                </div>
                
                {/* Vector Drawing 3: Code command terminal */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-slate-400">
                    <rect x="60" y="10" width="80" height="60" rx="6" fill="#0c0e17" stroke="#334155" strokeWidth="1.5" />
                    <text x="70" y="28" fill="#10b981" fontSize="9" fontFamily="monospace">&gt;_ build_pipeline</text>
                    <line x1="70" y1="38" x2="120" y2="38" stroke="#38bdf8" strokeWidth="1.5" />
                    <line x1="70" y1="46" x2="105" y2="46" stroke="#a78bfa" strokeWidth="1.5" />
                    <line x1="70" y1="54" x2="115" y2="54" stroke="#94a3b8" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Agile Iteration</h3>
                  <p className="text-xs text-slate-500 font-semibold">Strict TypeScript & unit test verification</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We execute development branches concurrently. We write clean Odoo modules, SPFx widgets, or React views utilizing rigorous type declarations.
                </p>
              </div>
            </div>

            {/* Step 4: Integration testing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">04</span>
                  <span className="text-[10px] font-mono uppercase bg-[#7c3aed]/10 text-purple-600 py-0.5 px-2 rounded-md font-bold">INTEGRATIONS</span>
                </div>
                
                {/* Vector Drawing 4: Bidirectional node checks */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-slate-400">
                    <circle cx="60" cy="40" r="16" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                    <rect x="48" y="32" width="24" height="16" rx="2" fill="#e0f2fe" />
                    <circle cx="140" cy="40" r="16" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5" />
                    <rect x="128" y="32" width="24" height="16" rx="2" fill="#f3e8ff" />
                    <path d="M 82 35 L 118 35" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3"/>
                    <path d="M 118 45 L 82 45" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3"/>
                    <polygon points="118,35 112,32 112,38" fill="#10b981" />
                    <polygon points="82,45 88,42 88,48" fill="#10b981" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">API QA & Integration</h3>
                  <p className="text-xs text-slate-500 font-semibold font-mono font-bold uppercase tracking-wider text-primary-electric">Endpoint checks & schema logs</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We dry-run complex integrations in staging environments, validating webhook payloads, schema structures, and data replication indexes.
                </p>
              </div>
            </div>

            {/* Step 5: Zero Downtime Deploy */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">05</span>
                  <span className="text-[10px] font-mono uppercase bg-yellow-100 text-amber-600 py-0.5 px-2 rounded-md font-bold">DEPLOYMENT</span>
                </div>
                
                {/* Vector Drawing 5: Server migration route */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-slate-400">
                    <rect x="40" y="20" width="45" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                    <circle cx="62" cy="40" r="10" fill="#2563eb" fillOpacity="0.1" />
                    <rect x="115" y="20" width="45" height="40" rx="4" fill="#1e293b" />
                    <circle cx="137" cy="40" r="10" fill="#10b981" />
                    <path d="M 90 40 L 110 40" stroke="#10b981" strokeWidth="2" />
                    <polygon points="110,40 105,36 105,44" fill="#10b981" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">Zero-Downtime Rollout</h3>
                  <p className="text-xs text-slate-500 font-semibold font-mono font-bold uppercase tracking-wider text-primary-electric">Containerized production transfers</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule transitions and ETL migrations during off-hours, moving databases via Docker structures so current services remain fully active.
                </p>
              </div>
            </div>

            {/* Step 6: 24/7 Ops */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-slate-300">06</span>
                  <span className="text-[10px] font-mono uppercase bg-red-100 text-red-600 py-0.5 px-2 rounded-md font-bold">OPERATIONS</span>
                </div>
                
                {/* Vector Drawing 6: Realtime telemetry monitor */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center h-28 relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full text-slate-400">
                    <rect x="50" y="15" width="100" height="50" rx="6" fill="#020617" stroke="#334155" strokeWidth="1.5" />
                    <path d="M 60 40 L 80 40 L 90 20 L 100 60 L 110 40 L 140 40" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="100" cy="60" r="3" fill="#ef4444" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-tight">SLA Support & Operations</h3>
                  <p className="text-xs text-slate-500 font-semibold font-mono font-bold uppercase tracking-wider text-primary-electric">Telemetry & regular logs audits</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We monitor latency, query loads, error thresholds, and configure nightly secure datastore backups under strict SLAs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 4: SERVICES PREVIEW ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-preview-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold">
            HIGH-CONVERTING SERVICES
          </span>
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            Our Enterprise Software Capabilities
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            We engineer high-fidelity software modules tailored specifically around your proprietary workflows. Discover our services matrix below.
          </p>
        </div>

        {/* Services Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12" id="home-services-grid">
          {servicesData.slice(0, 6).map((srv) => {
            const Icon = getServiceIcon(srv.iconName);
            return (
              <div 
                key={srv.id}
                onClick={() => onNavigate("services", srv.id)}
                className="group relative p-6 rounded-2xl glass-card text-left space-y-4 relative overflow-hidden flex flex-col justify-between cursor-pointer border border-white/[0.04]"
              >
                {/* Visual hover background glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-primary-indigo/5 blur-2xl group-hover:bg-primary-indigo/15 transition-all" />
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0c101a] border border-white/5 flex items-center justify-center text-primary-electric group-hover:text-[#10b981] group-hover:border-primary-electric/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white tracking-wide text-base group-hover:text-primary-electric transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                <div 
                  className="pt-2 text-xs font-semibold text-primary-electric flex items-center space-x-1 hover:underline"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => onNavigate("services")}
            className="px-6 py-3 rounded-xl text-xs font-bold tracking-wide text-white border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
            id="btn-all-services"
          >
            Explore All 12 Structured Services &rarr;
          </button>
        </div>
      </section>

      {/* ----------------- SECTION 5: WHY CHOOSE US ----------------- */}
      <section className="bg-gradient-to-b from-[#0b0f19] to-[#080b12] py-20 border-y border-white/[0.03] dark-parent" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Feature checklist cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" id="features-blocks">
              {[
                { title: "Agile Development Cycles", desc: "Two-week scrum intervals with live sandbox review ports.", icon: Timer },
                { title: "Enterprise Security Protocols", desc: "Military-grade data structures and Microsoft Graph compliance.", icon: Shield },
                { title: "Scalable Containers", desc: "We deploy isolated Docker packages ready for scaling.", icon: Layers },
                { title: "24/7 Committed Support", desc: "Continuous uptime support backed by SLAs.", icon: Users },
                { title: "Modern Tech Integration", desc: "Sleek frontend codes powered by TypeScript and Tailwind v4.", icon: Cpu },
                { title: "Transparent Communications", desc: "Real-time access to active development boards and logs.", icon: Layout }
              ].map((feat) => {
                const FeatIcon = feat.icon;
                return (
                  <div 
                    key={feat.title}
                    className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-left space-y-2 font-sans"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-indigo/30 text-white flex items-center justify-center">
                      <FeatIcon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-white tracking-wide">{feat.title}</h3>
                    <p className="text-[11px] text-slate-100 font-medium leading-normal">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Right side: Scoping Callout with white colors */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-mono tracking-widest text-white uppercase font-black block drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                WHY WORK WITH NEXTASPECT
              </span>
              <h2 className="text-3xl font-display font-bold tracking-tight text-white leading-tight">
                Designed for speed, built for reliability, optimized for scale
              </h2>
              <p className="text-sm text-slate-100 font-medium leading-relaxed">
                Most agencies write loose software code that falls apart during standard database updates. NextAspect Technologies uses comprehensive type-checking frameworks and containerization architectures right from step one.
              </p>
              
              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/20 space-y-3">
                <p className="text-xs text-white leading-relaxed font-semibold italic">
                  &ldquo;NextAspect replaced five of our legacy systems with custom Odoo ERP, shaving off substantial monthly software license spend.&rdquo;
                </p>
                <div className="text-[10px] text-white/90 font-mono font-bold tracking-widest uppercase">
                  Arthur P, Trident Operations Lead
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- SECTION 6: INTERACTIVE TECH SHOWCASE ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="tech-showcase-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-primary-electric uppercase font-bold">
            TECHNOLOGIES SECTION
          </span>
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Solid Engineering Foundations
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Choose the tech stacks customized to execute your precise operations. Select active category tabs to explore our configurations.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap justify-center gap-2 mt-8" id="tech-tabs-list">
          {[
            { id: "frontend", name: "Frontend Development" },
            { id: "backend", name: "Backend APIs & Core" },
            { id: "erp", name: "Odoo ERP & M365" },
            { id: "database", name: "Storage Databases" },
            { id: "cloud", name: "DevOps & Server Pipelines" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTechTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                activeTechTab === tab.id 
                  ? "bg-primary-indigo text-white border-primary-indigo shadow-md font-bold" 
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80 hover:text-slate-900"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 text-left" id="active-tech-panel">
          
          {/* Active tech left stack list */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-primary-indigo uppercase font-bold block">
              ENGAGED ECOSYSTEM
            </span>
            <div className="space-y-3">
              {technologiesData
                .filter((t) => t.category === activeTechTab)
                .map((t) => (
                  <div 
                    key={t.id}
                    onClick={() => onNavigate("technologies", activeTechTab)}
                    className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer group flex items-start space-x-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-205 text-primary-indigo flex items-center justify-center font-bold font-mono text-xs group-hover:bg-primary-indigo group-hover:text-white transition-all">
                      {t.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-black transition-colors">{t.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-tight group-hover:text-slate-800 transition-colors">{t.overview}</p>
                    </div>
                  </div>
                ))}
            </div>
            
            <button 
              onClick={() => onNavigate("technologies", activeTechTab)}
              className="mt-2 text-xs font-semibold text-primary-indigo hover:text-primary-electric hover:underline cursor-pointer inline-flex items-center space-x-1"
            >
              <span>Explore Detailed {activeTechTab} Specifications</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Active tech right mockup display (Replaced console log panel with SVG vector schematic) */}
          <TechVectorShowcase activeTechTab={activeTechTab} />

        </div>
      </section>

      {/* ----------------- SECTION 7: PORTFOLIO BRIEF ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-preview-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#a855f7] uppercase font-bold">
            CLIENT CASE STUDIES
          </span>
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            Solutions That Drive Tangible Success
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Review detailed case blueprints displaying authentic business metrics from logistics, fintech, and medical networks.
          </p>
        </div>

        {/* Portfolio List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12" id="home-portfolio-grid">
          {portfolioData.map((item) => (
            <div 
              key={item.id}
              onClick={() => onNavigate("portfolio")}
              className="p-6 rounded-2xl glass-card text-left flex flex-col justify-between border border-white/[0.04] cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 text-xs">
                  <span className="font-mono text-primary-electric font-semibold uppercase">{item.category}</span>
                  <span className="text-gray-500 font-medium">{item.industry}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-primary-electric transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Metric visual callout */}
                <div className="p-3 bg-[#0a0e18] rounded-xl border border-white/[0.03] flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 tracking-wider font-mono font-bold uppercase">{item.metricLabel}</span>
                  <span className="text-accent-neon font-extrabold text-base tracking-tight">{item.metric}</span>
                </div>
              </div>

              <div className="pt-4 text-xs font-semibold text-primary-electric hover:underline flex items-center space-x-1">
                <span>Decode Full Blueprint Analysis</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- SECTION 8: PROCESS ROADMAP TIMELINE ----------------- */}
      <section className="bg-gradient-to-r from-dark-panel/10 via-[#0a0e18]/20 to-dark-panel/10 py-20 border-y border-white/[0.03] bg-dot-pattern font-sans" id="process-timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 pb-12">
            <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold">
              ENGINEERING TIMELINE
            </span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Our Visualized Development Lifecycle
            </h2>
            <p className="text-sm text-gray-400">
              We translate abstract objectives into stable production code in seven transparent steps.
            </p>
          </div>

          {/* Timeline Node Chain */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4" id="timeline-steps">
            {[
              { num: "01", name: "Discovery", desc: "Audit business bottlenecks under workshops." },
              { num: "02", name: "Planning", desc: "Draft architectural maps and database schemas." },
              { num: "03", name: "UI/UX Design", desc: "Build tactile Figma high fidelity flows." },
              { num: "04", name: "Development", desc: "Code strict TypeScript and Odoo modules." },
              { num: "05", name: "Testing", desc: "Validate parameters and run SQL safety scans." },
              { num: "06", name: "Deployment", desc: "Dockerize systems onto AWS servers." },
              { num: "07", name: "Support", desc: "24/7 technical monitoring & system updates." }
            ].map((st, index) => (
              <div 
                key={st.num}
                className="relative p-5 rounded-xl border border-white/[0.03] bg-white/[0.01] text-left space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-primary-electric">{st.num}</span>
                  {index < 6 && (
                    <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-2 h-2 rounded-full bg-white/20" />
                  )}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-white text-xs tracking-wide">{st.name}</h4>
                  <p className="text-[10px] text-gray-400 leading-normal">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 9: CTA BANNER ----------------- */}
      <section className="max-w-5xl mx-auto px-4" id="cta-banner-section">
        <div className="relative rounded-3xl overflow-hidden glass-panel p-10 sm:p-14 border border-white/15 text-center space-y-6 shadow-2xl bg-gradient-to-tr from-primary-indigo/30 via-dark-panel/40 to-secondary-cyan/15">
          
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest text-[#10b981] uppercase font-bold block">
              COLLABORATIVE DISCOVERY CALL
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Let's Build Your Next Digital Success Story
            </h2>
            <p className="text-sm text-gray-400">
              Schedule an interactive systems workshop directly with NextAspect’s Lead Solutions Architect. We scope Odoo ERP components and custom React integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 max-w-sm sm:max-w-md mx-auto relative z-10">
            <button 
              onClick={() => onNavigate("contact")}
              className="py-3 px-6 rounded-xl text-xs font-bold bg-white text-[#0b0f19] hover:bg-white/90 shadow-md shadow-white/5 transition-all cursor-pointer"
            >
              Schedule Scoping Call Now
            </button>
            <button 
              onClick={() => onNavigate("services")}
              className="py-3 px-6 rounded-xl text-xs font-bold text-white border border-white/10 hover:bg-white/[0.03] transition-all cursor-pointer"
            >
              Analyze Services Matrix &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 10: BLOG IN BRIEF ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="blog-preview-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-widest text-primary-electric uppercase font-bold">
            BUSINESS BRIEFS
          </span>
          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            NextAspect Solutions Journal
          </h2>
          <p className="text-sm text-gray-400">
            Discover technical insights on ERP optimization, Next.js setups, and document compliance frameworks.
          </p>
        </div>

        {/* Blog Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12" id="home-blog-grid">
          {blogPostsData.map((post) => (
            <div 
              key={post.id}
              onClick={() => onNavigate("blog")}
              className="p-5 rounded-2xl glass-panel hover:bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-colors text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-secondary-purple uppercase font-bold">{post.category}</span>
                <h3 className="font-display font-bold text-white tracking-wide text-sm group-hover:text-primary-electric transition-colors">{post.title}</h3>
                <p className="text-[11px] text-gray-400 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-white/[0.05] mt-4 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{post.date}</span>
                <span className="text-primary-electric hover:underline font-semibold flex items-center space-x-0.5">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- SECTION 11: CONTACT SHORT PREVIEW ----------------- */}
      <section className="max-w-4xl mx-auto px-4" id="address-preview-section">
        <div className="rounded-2xl border border-white/[0.04] p-8 bg-[#0a0e18] grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-primary-indigo/15 text-primary-electric flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase font-mono">Solutions Desk</h4>
            <a href="mailto:solutions@nextaspect.tech" className="text-xs text-gray-400 hover:underline block pt-1">solutions@nextaspect.tech</a>
          </div>

          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-secondary-purple/15 text-secondary-purple flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase font-mono">Corporate Phone</h4>
            <a href="tel:+18005550180" className="text-xs text-gray-400 hover:underline block pt-1">+1 (800) 555-0180</a>
          </div>

          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-accent-neon/15 text-accent-neon flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white uppercase font-mono">Tech Headquarters</h4>
            <span className="text-xs text-gray-400 block pt-1">NextAspect Tower, Tech Hub, IN.</span>
          </div>

        </div>
      </section>

    </div>
  );
}
