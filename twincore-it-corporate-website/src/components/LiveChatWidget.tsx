import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowUpRight,
  Loader,
  Clock
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

const PRESET_TOPICS = [
  { label: 'Odoo ERP Customization', text: 'How do you customize standard Odoo financial and warehouse modules?' },
  { label: 'Salesforce Integrations', text: 'Can you synchronize Salesforce leads with other messaging gateways?' },
  { label: 'SaaS Web Development', text: 'What is your software delivery process for custom web applications?' },
  { label: 'SLA Support Times', text: 'What are your support SLAs and response windows?' }
];

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Greetings! Welcome to Twincore IT secure help desk. I'm TwinBot, your dedicated cloud architect assistant. How can I help clarify your Odoo, web backend, or software delivery parameters today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // 1. Append User Message
    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setUserInput('');

    // 2. Trigger Bot Reply
    setIsTyping(true);
    setTimeout(() => {
      let botResponse = "Thank you for sharing your guidelines! Our Solutions Architect will analyze this specification. Would you like to schedule an expert syncing session? You can submit your requirements securely through our Contact Us panel.";

      const query = textToSend.toLowerCase();
      if (query.includes('odoo')) {
        botResponse = "Twincore specializes in Odoo Core implementations, VAT/IRS localized accounting integrations, and customized picking modules. We transition legacy database models to Odoo 16, 17, and 18 with zero-downtime checkpoints.";
      } else if (query.includes('salesforce') || query.includes('crm')) {
        botResponse = "We design advanced Salesforce triggers, synchronize client communication patterns, and deploy direct WhatsApp/SMS dispatch pipelines via Twilio and Meta API configurations.";
      } else if (query.includes('saas') || query.includes('web') || query.includes('custom')) {
        botResponse = "Our custom web development leverage modern React frontends coupled with secure .NET, Java, or Node enterprise services—built for sub-second, SOC-2 compliant load targets.";
      } else if (query.includes('sla') || query.includes('response') || query.includes('support')) {
        botResponse = "Our standard operational response is under 2 business hours. Enterprise projects can configure 24/7 dedicated support priority hotlines.";
      } else if (query.includes('price') || query.includes('cost') || query.includes('budget')) {
        botResponse = "We estimate requirements transparently based on system scale and modular complexity. Reach our Contact page to submit your details and receive a customized budget draft in 2 hours.";
      }

      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none text-left">
      {/* 1. Floating Action Chat Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4.5 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 duration-200 flex items-center justify-center relative cursor-pointer group border border-blue-500"
          id="chat-toggle-button"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-50 dark:border-slate-950 animate-pulse" />
          <MessageSquare className="w-6 h-6 stroke-[2.2]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-colors group-hover:pl-2 text-xs font-bold leading-none whitespace-nowrap">
            Sync with Architect
          </span>
        </button>
      )}

      {/* 2. Interactive Chat Window Panel */}
      {isOpen && (
        <div 
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl w-[350px] sm:w-[380px] h-[500px] flex flex-col justify-between overflow-hidden animate-fadeIn"
          id="chat-window-panel"
        >
          {/* Header Title Bar */}
          <div className="bg-slate-900 dark:bg-slate-950 px-5 py-4 border-b border-slate-800 flex justify-between items-center text-white relative">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-900" />
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-tight flex items-center gap-1.5 text-white">
                  TwinBot Core Sync <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </h4>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" /> Active • Sub-2h SLA Reply
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Chat Bubble List stage */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/60 flex flex-col scrollbar-thin">
            {messages.map((msg) => {
              const IsBot = msg.sender === 'bot';
              return (
                <div 
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[85%] ${IsBot ? 'self-start text-left' : 'self-end flex-row-reverse text-right'}`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-[10px] uppercase font-black ${
                    IsBot ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                  }`}>
                    {IsBot ? 'B' : 'U'}
                  </div>

                  <div className="space-y-1">
                    <div className={`p-3 rounded-2xl text-xs leading-relaxed border shadow-xs ${
                      IsBot 
                        ? 'bg-white text-slate-800 border-slate-200 dark:bg-slate-900 dark:text-slate-150 dark:border-slate-800' 
                        : 'bg-blue-600 text-white border-blue-500 dark:text-blue-50'
                    }`}>
                      {msg.text}
                    </div>
                    <p className="text-[9px] text-slate-400 px-1 font-mono">{msg.timestamp}</p>
                  </div>
                </div>
              );
            })}

            {/* Simulating live engineering typing */}
            {isTyping && (
              <div className="flex gap-2.5 max-w-[80%] self-start">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 text-[10px] font-black">
                  B
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-xs">
                  <Loader className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                  <span className="text-[10px] text-slate-400 font-medium">TwinBot is analyzing parameters...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Shortcut segment */}
          {messages.length <= 2 && !isTyping && (
            <div className="p-3 border-t border-slate-200/55 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900 space-y-1.5">
              <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest px-1">Common Inquiries</p>
              <div className="flex flex-wrap gap-1">
                {PRESET_TOPICS.map((topic, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSendMessage(topic.text)}
                    className="text-[10px] bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 dark:bg-slate-850 dark:border-slate-750 dark:hover:bg-slate-800 dark:text-slate-350 dark:hover:text-blue-400 text-slate-700 px-2 py-1 rounded-lg font-semibold transition cursor-pointer select-none inline-flex items-center gap-1"
                  >
                    {topic.label} <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input dispatch bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(userInput);
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-150 dark:border-slate-800 flex gap-2 items-center"
          >
            <input
              type="text"
              placeholder="Ask about pricing, Odoo specs, SLAs..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-grow bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={!userInput.trim() || isTyping}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2 rounded-xl transition duration-150 flex items-center justify-center cursor-pointer shrink-0 border border-blue-500"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
