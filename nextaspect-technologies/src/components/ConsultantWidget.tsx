import React, { useState } from "react";
import { MessageSquare, X, ChevronRight, Check, Send, Award, Brain, Mail, Phone, Calculator, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConsultantWidgetProps {
  onNavigate: (page: string, subPage?: string) => void;
}

export default function ConsultantWidget({ onNavigate }: ConsultantWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"planner" | "chat">("planner");

  // Step state for Project Planner Wizard
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [selectedScale, setSelectedScale] = useState("");
  
  // Lead info
  const [leadName, setLeadName] = useState("");
  const [leadContact, setLeadContact] = useState("");
  const [plannerSubmitted, setPlannerSubmitted] = useState(false);

  // Chat chatbot state
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "advisor"; text: string }[]>([
    { sender: "advisor", text: "Hello! I am NextAspect's Technical Scoping Advisor. Ask me anything about Odoo ERP configurations, React architecture migrations, or custom SharePoint services!" }
  ]);
  const [customQuestion, setCustomQuestion] = useState("");

  const suggestedQuestions = [
    "What is the average timeline for an Odoo migration?",
    "Do you customize SharePoint on M365 accounts?",
    "Why choose React JS with TypeScript over traditional HTML templates?",
    "How do you handle enterprise cloud backup safety?"
  ];

  const handleFAQClick = (q: string) => {
    let answer = "";
    if (q.includes("Odoo")) {
      answer = "Odoo migrations take between 3 to 6 weeks. We build ETL systems to secure and transfer accounting rows, test code configurations in offline sandboxes, and perform the final deploy over a single weekend night.";
    } else if (q.includes("SharePoint")) {
      answer = "Yes! We build SPFx custom components in React that load natively inside your current Microsoft 365 license ecosystem, meaning there are absolutely no additional monthly server hosting bills.";
    } else if (q.includes("React")) {
      answer = "TypeScript injects rigid data parameters, avoiding ninety percent of browser execution crashes. Combined with React components, it delivers beautiful interfaces that load instantly and perform at sixty frames per second.";
    } else {
      answer = "We package all services into isolated Docker images, coordinate scheduled daily cloud system snapshots on AWS or Azure, and set up continuous security checks to monitor access logs twenty-four hours a day.";
    }

    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: q },
      { sender: "advisor", text: answer }
    ]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const userQ = customQuestion;
    setCustomQuestion("");
    setChatMessages((prev) => [...prev, { sender: "user", text: userQ }]);

    setTimeout(() => {
      let reply = "Thank you for that inquiry! That is currently a popular scoping question. Our physical engineering specialists can analyze this closely. Let's schedule a free consult under our Contact page to confirm solutions.";
      
      const lowerQ = userQ.toLowerCase();
      if (lowerQ.includes("price") || lowerQ.includes("cost") || lowerQ.includes("budget")) {
        reply = "Average projects range from $8,000 for simple web portals to $35,000 for major multiregional ERP software systems. Let us calculate customized pricing blueprints over a call.";
      } else if (lowerQ.includes("contact") || lowerQ.includes("hire") || lowerQ.includes("call")) {
        reply = "Feel free to submit your company details on our Contact page or click the Estimate Scoping tab above to generate an immediate estimated scope worksheet!";
      }

      setChatMessages((prev) => [...prev, { sender: "advisor", text: reply }]);
    }, 800);
  };

  // Form submission logic in Planner
  const handleEstimateQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadContact) return;
    setPlannerSubmitted(true);
  };

  const resetPlanner = () => {
    setStep(1);
    setSelectedIndustry("");
    setSelectedNeed("");
    setSelectedScale("");
    setLeadName("");
    setLeadContact("");
    setPlannerSubmitted(false);
  };

  // Calculate parameters for mock estimate
  const getBudgetBracket = () => {
    let baseMin = 10000;
    let baseMax = 18000;

    if (selectedNeed === "Odoo ERP Setup" || selectedNeed === "MERN Stack Application") {
      baseMin = 15000;
      baseMax = 30000;
    } else if (selectedNeed === "SharePoint Intranet") {
      baseMin = 8000;
      baseMax = 15000;
    }

    if (selectedScale === "11-50 users") {
      baseMin = Math.round(baseMin * 1.25);
      baseMax = Math.round(baseMax * 1.3);
    } else if (selectedScale === "51-200 users" || selectedScale === "200+ Enterprise") {
      baseMin = Math.round(baseMin * 1.6);
      baseMax = Math.round(baseMax * 1.85);
    }

    return `${baseMin.toLocaleString()} - $${baseMax.toLocaleString()}`;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-45" id="floating-scoping-advisor">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-primary-indigo via-primary-electric to-secondary-cyan text-white shadow-xl shadow-primary-indigo/35 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          id="btn-scoping-toggle"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-neon rounded-full border-2 border-[#0b0f19] animate-pulse" />
              <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wide text-white bg-dark-panel border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
                Smart IT Advisor Online
              </span>
            </>
          )}
        </button>
      </div>

      {/* Scoping Advisor Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-4 sm:right-6 z-45 w-[360px] sm:w-[400px] max-h-[580px] rounded-2xl glass-panel border border-white/[0.08] shadow-2xl overflow-hidden flex flex-col"
            id="panel-scoping-workspace"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-indigo/40 to-secondary-purple/20 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary-electric/20 flex items-center justify-center text-primary-electric">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display">NextAspect Smart Advisor</h3>
                  <div className="flex items-center space-x-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent-neon rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 font-mono uppercase">Unified Scoping Scripter</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/[0.03] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="p-2 bg-dark-panel/30 border-b border-white/[0.03] flex items-center space-x-2">
              <button 
                onClick={() => setActiveTab("planner")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center space-x-1 ${
                  activeTab === "planner" ? "bg-white/[0.04] text-white border border-white/5" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Estimate Scoping</span>
              </button>
              <button 
                onClick={() => setActiveTab("chat")}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center space-x-1 ${
                  activeTab === "chat" ? "bg-white/[0.04] text-white border border-white/5" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQ Architect Chat</span>
              </button>
            </div>

            {/* Central Workspace Canvas */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[380px]">
              
              {activeTab === "planner" ? (
                /* Tab 1: Interactive Scoping Planner */
                <div className="space-y-4" id="scoping-planner-tab">
                  {plannerSubmitted ? (
                    <div className="text-center py-6 px-4 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-accent-neon/15 text-accent-neon flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Proposal Matrix Engineered!</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Thank you {leadName}. We have saved your calculated budget target of <span className="text-accent-neon font-semibold">${getBudgetBracket()}</span> for reference. An ERP advisor will contact you shortly at {leadContact}.
                        </p>
                      </div>
                      <button 
                        onClick={resetPlanner}
                        className="py-1.5 px-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-xs font-medium text-white border border-white/5 transition-colors cursor-pointer"
                      >
                        Reset Scoping Spec
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/[0.03]">
                        <span className="text-[10px] font-mono uppercase text-gray-400 font-bold">Progress Step {step} of 4</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4].map((i) => (
                            <span 
                              key={i}
                              className={`w-4 h-1 rounded-sm transition-colors duration-200 ${
                                step >= i ? "bg-primary-electric" : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Step 1: Industry */}
                      {step === 1 && (
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-white block">What is your industry sector?</label>
                          <div className="grid grid-cols-2 gap-2">
                            {["Manufacturing/MRP", "Wholesale & Logistics", "Retail E-commerce", "Financial Services", "B2B Subscription", "Healthcare Providers"].map((ind) => (
                              <button
                                key={ind}
                                onClick={() => { setSelectedIndustry(ind); setStep(2); }}
                                className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                                  selectedIndustry === ind 
                                    ? "bg-primary-indigo/35 border-primary-electric text-white" 
                                    : "bg-white/[0.01] border-white/5 hover:border-white/10 text-gray-300"
                                }`}
                              >
                                {ind}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: System Need */}
                      {step === 2 && (
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-white block">What is your primary system target?</label>
                          <div className="space-y-2">
                            {[
                              { label: "Odoo ERP Setup", desc: "Operations, CRM, Core invoicing, accounting" },
                              { label: "SharePoint Intranet", desc: "Corporate DMS on existing Microsoft 365" },
                              { label: "React JS Application", desc: "Modern bespoke dashboard and workflows" },
                              { label: "MERN Stack Application", desc: "Bespoke fullstack database system from scratch" },
                              { label: "Cloud DevOps Integration", desc: "Dockerized server deployment & API syncs" }
                            ].map((need) => (
                              <button
                                key={need.label}
                                onClick={() => { setSelectedNeed(need.label); setStep(3); }}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex justify-between items-center ${
                                  selectedNeed === need.label 
                                    ? "bg-primary-indigo/35 border-primary-electric text-white" 
                                    : "bg-white/[0.01] border-white/5 hover:border-white/10 text-gray-300"
                                }`}
                              >
                                <div>
                                  <span className="font-semibold block">{need.label}</span>
                                  <span className="text-[10px] text-gray-400 block mt-0.5">{need.desc}</span>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                              </button>
                            ))}
                          </div>
                          <span 
                            onClick={() => setStep(1)} 
                            className="text-[10px] text-primary-electric hover:underline block cursor-pointer"
                          >
                            &larr; Back to Step 1
                          </span>
                        </div>
                      )}

                      {/* Step 3: User Scale */}
                      {step === 3 && (
                        <div className="space-y-3">
                          <label className="text-xs font-semibold text-white block">What is your target user volume?</label>
                          <div className="space-y-2">
                            {["1-10 Operations users", "11-50 Active roles", "51-200 Collaborative roles", "200+ Enterprise seats"].map((scale) => (
                              <button
                                key={scale}
                                onClick={() => { setSelectedScale(scale); setStep(4); }}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex justify-between items-center ${
                                  selectedScale === scale 
                                    ? "bg-primary-indigo/35 border-primary-electric text-white" 
                                    : "bg-white/[0.01] border-white/5 hover:border-white/10 text-gray-300"
                                }`}
                              >
                                <span>{scale}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                              </button>
                            ))}
                          </div>
                          <span 
                            onClick={() => setStep(2)} 
                            className="text-[10px] text-primary-electric hover:underline block cursor-pointer"
                          >
                            &larr; Back to Step 2
                          </span>
                        </div>
                      )}

                      {/* Step 4: Submission */}
                      {step === 4 && (
                        <form onSubmit={handleEstimateQuery} className="space-y-4" id="quote-submission-form">
                          <div className="p-3 rounded-xl bg-[#0e1220] border border-white/5 space-y-2">
                            <span className="text-[9px] font-mono uppercase text-accent-neon font-bold tracking-widest block">Scoping Specs Verified</span>
                            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400">
                              <div>Industry:</div><div className="text-white font-medium text-right">{selectedIndustry}</div>
                              <div>System Code:</div><div className="text-white font-medium text-right">{selectedNeed}</div>
                              <div>Target Seats:</div><div className="text-white font-medium text-right">{selectedScale}</div>
                              <div className="text-primary-electric font-semibold border-t border-white/5 pt-1 mt-1">Estim. Budget:</div>
                              <div className="text-accent-neon font-extrabold border-t border-white/5 pt-1 mt-1 text-right">${getBudgetBracket()}</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-semibold text-white block">Your Name</label>
                            <input 
                              type="text" 
                              required 
                              value={leadName}
                              onChange={(e) => setLeadName(e.target.value)}
                              placeholder="Alex Mercer"
                              className="w-full px-3 py-2 text-xs rounded-lg bg-white/[0.02] border border-white/10 text-white focus:outline-none focus:border-primary-electric"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-semibold text-white block">Email or Phone Number</label>
                            <input 
                              type="text" 
                              required 
                              value={leadContact}
                              onChange={(e) => setLeadContact(e.target.value)}
                              placeholder="alex@company.com"
                              className="w-full px-3 py-2 text-xs rounded-lg bg-white/[0.02] border border-white/10 text-white focus:outline-none focus:border-primary-electric"
                            />
                          </div>

                          <button 
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary-indigo to-primary-electric text-white text-xs font-semibold hover:shadow-lg hover:shadow-primary-indigo/25 transition-all cursor-pointer"
                          >
                            Submit Scoping Blueprint
                          </button>

                          <span 
                            onClick={() => setStep(3)} 
                            className="text-[10px] text-primary-electric hover:underline block text-center cursor-pointer"
                          >
                            &larr; Back to Step 3
                          </span>
                        </form>
                      )}
                    </>
                  )}
                </div>
              ) : (
                /* Tab 2: Classic FAQ Architect Chat */
                <div className="space-y-4 flex flex-col h-full" id="faq-chat-tab">
                  <div className="space-y-2 p-1">
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">Quick Reference Scenarios</span>
                    <div className="flex flex-wrap gap-1.5">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleFAQClick(q)}
                          className="text-[10px] text-left py-1 px-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] hover:border-white/10 text-gray-300 transition-colors cursor-pointer"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Messaging board */}
                  <div className="space-y-3 pt-2 max-h-[220px] overflow-y-auto pr-1">
                    {chatMessages.map((msg, index) => (
                      <div 
                        key={index}
                        className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                      >
                        <span className="text-[10px] text-gray-500 mb-0.5 px-1 font-mono">
                          {msg.sender === "user" ? "You" : "Advisor"}
                        </span>
                        <div className={`p-2.5 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                          msg.sender === "user" 
                            ? "bg-primary-indigo/40 text-white rounded-tr-none border border-primary-indigo/20" 
                            : "bg-[#0e1220] text-gray-300 rounded-tl-none border border-white/5"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input form */}
                  <form onSubmit={handleCustomSend} className="relative mt-2 flex border-t border-white/[0.05] pt-2" id="scoping-chat-form">
                    <input 
                      type="text"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      placeholder="Ask another question..."
                      className="flex-1 px-3 py-2 text-xs bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary-purple/40"
                    />
                    <button 
                      type="submit"
                      className="ml-2 p-2 rounded-lg bg-primary-indigo hover:bg-primary-indigo/80 text-white transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

            </div>

            {/* Quick Footer */}
            <div className="p-3 bg-[#080b12] border-t border-white/[0.05] text-center text-[10px] text-gray-500 flex items-center justify-center space-x-1">
              <Award className="w-3.5 h-3.5 text-accent-neon" />
              <span>Security audited & M365 compliant scoping</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
