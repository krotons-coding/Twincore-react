import React, { useState, useEffect } from 'react';
import { Send, Check, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface ConsultingFormProps {
  initialOdooScope?: string;
}

export const ConsultingForm: React.FC<ConsultingFormProps> = ({ initialOdooScope = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialOdooScope) {
      setFormData(prev => ({ 
        ...prev, 
        message: prev.message 
          ? `${prev.message}\n\n[Odoo Estimator Config: ${initialOdooScope}]` 
          : `We would like to request an implementation following these estimated specs: ${initialOdooScope}`
      }));
    }
  }, [initialOdooScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate real API dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl p-6 sm:p-10 select-none relative overflow-hidden text-left transition-colors">
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 dark:bg-blue-500" />
      
      {submitted ? (
        <div className="py-8 text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto shadow-md">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Requirement Dispatched!</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Thank you for reaching out to **Twincore IT**. Our Principal Solutions Architect is reviewing your details and will get in touch in less than **2 business hours**.
          </p>
          <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl text-left text-xs text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/60">
            <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">Estimated timeline:</p>
            <p className="font-medium">• Next 2 Hours: Direct call or email to schedule an architect syncing session.</p>
            <p className="mt-1 font-medium">• Next 24 Hours: Provision of clean scoping templates and structural timeline proposals.</p>
          </div>
          <button 
            type="button" 
            onClick={() => {
              setFormData({ name: '', email: '', phone: '', message: '' });
              setSubmitted(false);
            }}
            className="text-xs font-bold text-blue-600 dark:text-blue-450 hover:underline cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Initiate Scoping Consultation</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Please provide your operational guidelines to book your dedicated strategic kickoff.</p>
          </div>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase tracking-wide">
                Your Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-550">
                  <User className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Robert Vance"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl pl-10 pr-3 py-2.5 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-slate-800 dark:text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase tracking-wide">
                Email Address *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-550">
                  <Mail className="w-4 h-4" />
                </span>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl pl-10 pr-3 py-2.5 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-slate-800 dark:text-white"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase tracking-wide">
                Contact Number *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-550">
                  <Phone className="w-4 h-4" />
                </span>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +1 (555) 019-2831"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl pl-10 pr-3 py-2.5 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-slate-800 dark:text-white"
                />
              </div>
            </div>

            {/* Requirement Details */}
            <div>
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 block mb-1.5 uppercase tracking-wide">
                Requirement Details *
              </label>
              <div className="relative">
                <span className="absolute top-3 left-3.5 text-slate-400 dark:text-slate-550">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea 
                  required
                  rows={4}
                  placeholder="Describe your goals, tech stack, systems gaps, or estimated timelines..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white dark:bg-slate-850 border border-slate-200 / border-slate-750 rounded-xl pl-10 pr-3 py-2.5 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-slate-800 dark:text-white"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition hover:shadow-lg hover:shadow-blue-500/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>Submitting Scoping Details...</>
            ) : (
              <>Send Requirements & Book Session <Send className="w-4 h-4" /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
