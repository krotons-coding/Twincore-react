import { motion } from "motion/react";
import { Users, Award, ShieldCheck, Heart, Sparkles, Code2, Globe, HeartHandshake } from "lucide-react";

interface AboutViewProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const stats = [
    { value: "140+", label: "Projects Completed", desc: "Enterprise systems, Custom SAP & Odoo integrations, SPFx apps" },
    { value: "99.8%", label: "Client SLA Success", desc: "Reliable system upkeep, uptime and strict software deployment" },
    { value: "15M+", label: "Lines of Scaled Code", desc: "Robust TypeScript, React frontends, Node.js clusters and API pathways" },
    { value: "18+", label: "Global Tech Experts", desc: "Passionate software architects, SharePoint experts, & Odoo engineers" }
  ];

  const coreValues = [
    {
      icon: Code2,
      title: "Technical Excellence",
      desc: "We do not believe in shortcuts or quick-fixes. Every codebase we write is layered in strict architectural integrity, typed parameters, and continuous automated verification."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Trust",
      desc: "Information segregation, complete code transparency, and solid data governance. Your custom workflows are completely customized to fit your dynamic governance guides."
    },
    {
      icon: HeartHandshake,
      title: "Collaborative Partnerships",
      desc: "We consider ourselves a core extension of your business unit. By offering high-fidelity direct access to our development engineers, communication loops are zero-friction."
    },
    {
      icon: Sparkles,
      title: "Innovation Centered",
      desc: "From modern server-side rendering to interactive headless CMS setups, we continuously monitor emerging technological curves to keep you two steps ahead of the competition."
    }
  ];

  const team = [
    {
      name: "Saurabh Mukhopadhyay",
      role: "CEO & Managing Director",
      bio: "Tech entrepreneur with 15+ years leading digital transformations across ERP architectures and enterprise software systems.",
      initials: "SM"
    },
    {
      name: "Daanish Siddiqui",
      role: "Chief Technology Officer",
      bio: "Former Mern Core engineer, specializing in multi-tenant cloud ecosystems, optimized index structures, and high frame-rate React JS dashboards.",
      initials: "DS"
    },
    {
      name: "Marcus Reynolds",
      role: "Director of Microsoft 365 Architecture",
      bio: "SharePoint & SPFx framework veteran, guiding multi-site document migrations and legacy SharePoint integrations for Fortune 500 portals.",
      initials: "MR"
    },
    {
      name: "Emily Zheng",
      role: "Principal Odoo Engineer",
      bio: "Odoo Python framework expert with deep accounting and corporate logistics workflow translation capabilities.",
      initials: "EZ"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left font-sans" id="about-canvas">
      
      {/* Title Header */}
      <div className="border-b border-white/[0.06] pb-10 mb-16 space-y-4">
        <span className="text-xs font-mono tracking-widest text-primary-electric uppercase font-bold block" id="about-badge">
          NEXTASPECT CORPORATE REGISTRY BOARD
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
          Who We Are
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          At NextAspect Technologies, we specialize in bridging enterprise operations and innovative dynamic architectures. Our collective mission is captured in our tagline: <strong className="text-primary-electric font-semibold">“Code Your Vision to Reality.”</strong>
        </p>
      </div>

      {/* Main Core Content Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" id="about-grid-brand">
        
        {/* Left Side: Brand Narrative Text Section */}
        <div className="lg:col-span-7 space-y-6" id="brand-identity-narrative">
          <h2 className="text-2xl sm:text-3.5xl font-display font-bold tracking-tight">
            We architect systems that solve real human constraints.
          </h2>
          <div className="space-y-4">
            <p className="body-text text-sm sm:text-base leading-relaxed">
              Founded on the belief that custom software should be a robust multiplier rather than a structural bottleneck, NextAspect Technologies serves as an elite digital advisory partner for growing enterprises worldwide. 
            </p>
            <p className="body-text text-sm sm:text-base leading-relaxed">
              We focus heavily on functional modularity—whether custom Odoo ERP integrations, responsive React JS dashboards, or cloud-managed SharePoint servers. Our engineers write clean, scalable TypeScript codebase structures that stand up to high traffic volumes and regulatory audits.
            </p>
            <p className="body-text text-sm sm:text-base leading-relaxed">
              By designing everything under a unified visual system and structured API loops, we avoid technical debt and give our partners absolute control over their operational pipelines.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-xl bg-primary-indigo/10 border border-primary-indigo/20 flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-primary-electric" />
              <span className="text-xs font-semibold">Clean Architecture</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-secondary-purple/10 border border-secondary-purple/20 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-secondary-purple" />
              <span className="text-xs font-semibold">Global Distribution</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-secondary-cyan/10 border border-secondary-cyan/20 flex items-center space-x-2">
              <Users className="w-4 h-4 text-secondary-cyan" />
              <span className="text-xs font-semibold">Direct Collaboration</span>
            </div>
          </div>
        </div>

        {/* Right Side: Showcase Glass Panel */}
        <div className="lg:col-span-5" id="brand-narrative-card">
          <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-electric/20 to-secondary-purple/20 blur-2xl rounded-full" />
            
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-indigo to-secondary-purple flex items-center justify-center text-white font-display font-extrabold text-2xl">
              N
            </div>
            
            <blockquote className="font-display italic text-base font-medium leading-relaxed">
              &ldquo;Software architecture is not just about writing syntax. It is the core framework that transforms raw corporate capacity into smooth, automated systems. We compile your technical visions directly into enterprise reality.&rdquo;
            </blockquote>
            
            <div className="border-t border-white/[0.08] pt-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-electric flex items-center justify-center text-white font-bold text-xs">
                SM
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold text-white">Saurabh Mukhopadhyay</span>
                <span className="block text-[11px] text-gray-400">CEO & Founder, NextAspect</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Core Values Section */}
      <div className="mb-24" id="values-block">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-secondary-cyan uppercase block">GUIDING PILLARS</span>
          <h2 className="text-2xl sm:text-4.5xl font-display font-extrabold tracking-tight">Our Operational Philosophy</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            These four custom architectural values guide every line of code as we formulate frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="values-grid">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl text-left border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-electric/5 group-hover:bg-primary-electric/10 transition-colors duration-300 rounded-full blur-3xl" />
                <div className="p-3 w-12 h-12 rounded-xl bg-white/[0.03] text-primary-electric mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-white">{value.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enterprise Statistics Grid */}
      <div className="mb-24 rounded-2xl glass-panel p-8 sm:p-12 border border-white/[0.08] relative overflow-hidden" id="stats-panel">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" id="stats-counter-rows">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 text-center md:text-left">
              <span className="block text-4xl sm:text-5xl font-sora font-extrabold text-primary-electric tracking-tight bg-gradient-to-r from-primary-electric via-primary-indigo to-secondary-purple bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="block text-sm font-bold font-display text-white">
                {stat.label}
              </span>
              <span className="block text-xs text-gray-400 leading-normal">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Showcase */}
      <div className="mb-24" id="team-showcase">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c3aed] uppercase block">THE ENGINEERING MINDS</span>
          <h2 className="text-2xl sm:text-4.5xl font-display font-extrabold tracking-tight">Our Specialists Board</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Experienced system engineers and operations experts dedicated to translating goals into concrete software architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="team-members-grid">
          {team.map((member, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/[0.04] text-left flex flex-col justify-between h-full group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-indigo/30 to-secondary-purple/20 flex items-center justify-center font-display font-bold text-[#7c3aed] group-hover:scale-105 transition-transform duration-300">
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">{member.name}</h4>
                  <span className="block text-xs text-primary-electric font-medium mt-0.5">{member.role}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About CTA Board */}
      <div className="rounded-2xl bg-gradient-to-tr from-primary-indigo/40 via-secondary-purple/20 to-secondary-cyan/10 border border-primary-indigo/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden" id="about-cta-footer">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-indigo/10 blur-3xl rounded-full" />
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h3 className="text-xl sm:text-3.5xl font-display font-extrabold text-white tracking-tight">
            Ready to deploy technical excellence?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
            Let us bridge your logistical challenges with modular codebases. Request a technical scoping call with our core engineers.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 bg-gradient-to-r from-primary-electric to-[#7c3aed] text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-primary-indigo/20 transition-all duration-200 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
