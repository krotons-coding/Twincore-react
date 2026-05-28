import React, { useState } from 'react';
import { Logo } from './Logo';
import { SERVICES, TECHNOLOGIES, PRODUCTS_DATA } from '../data';
import { 
  Menu, X, ChevronDown, Rocket, 
  ArrowUpRight, BookOpen, Settings, AlertCircle, HelpCircle, 
  Laptop, Settings2, Smartphone, Terminal, Briefcase, Database,
  Sun, Moon, Shield, Barcode, Truck, Layout, Layers, Kanban, Cloud, Cpu
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (cat: string) => void;
  onNavigateToService?: (serviceId: string) => void;
  onNavigateToTech?: (techId: string) => void;
  onNavigateToProductCat?: (catId: string) => void;
  darkMode?: boolean;
  setDarkMode?: (dark: boolean) => void;
}

const IconMap: Record<string, React.FC<any>> = {
  Briefcase,
  Layers,
  Laptop,
  Terminal,
  Settings2,
  Truck,
  Barcode,
  Layout,
  Kanban
};

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  setSelectedCategory,
  onNavigateToService,
  onNavigateToTech,
  onNavigateToProductCat,
  darkMode = false,
  setDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'technologies' | 'products' | null>(null);

  const handlePageSelect = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId: string) => {
    setCurrentPage('services');
    if (onNavigateToService) {
      onNavigateToService(serviceId);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleTechSelect = (techId: string) => {
    setCurrentPage('technology');
    if (onNavigateToTech) {
      onNavigateToTech(techId);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleProductCatSelect = (catId: string) => {
    setCurrentPage('products');
    if (onNavigateToProductCat) {
      onNavigateToProductCat(catId);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleTheme = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Group */}
          <button 
            type="button" 
            onClick={() => handlePageSelect('home')} 
            className="flex items-center gap-1 focus:outline-none cursor-pointer"
          >
            <Logo className="h-10" showText={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Home */}
            <button
              type="button"
              onClick={() => handlePageSelect('home')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'home' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`text-sm font-semibold flex items-center gap-1 py-4 cursor-pointer transition-colors ${
                  currentPage === 'services' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-2 border-b border-slate-50 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Modular Capabilities</p>
                  </div>
                  {SERVICES.map((serv) => (
                    <button
                      key={serv.id}
                      type="button"
                      onClick={() => handleServiceSelect(serv.id)}
                      className="text-left w-full p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {serv.id === "odoo-erp" && <Briefcase className="w-4 h-4" />}
                        {serv.id === "custom-web" && <Laptop className="w-4 h-4" />}
                        {serv.id === "mobile-apps" && <Smartphone className="w-4 h-4" />}
                        {serv.id === "sharepoint-portals" && <Layers className="w-4 h-4" />}
                        {serv.id === "ai-bigdata" && <Terminal className="w-4 h-4" />}
                        {serv.id === "devops-security" && <Cloud className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{serv.title}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-1">{serv.shortDescription}</p>
                      </div>
                    </button>
                  ))}
                  <div className="mt-2 p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Need custom Odoo implementation?</span>
                    <button
                      type="button"
                      onClick={() => handlePageSelect('contact')}
                      className="text-[10px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-0.5 hover:underline cursor-pointer"
                    >
                      Enterprise Estimator <ArrowUpRight className="w-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown (NEW CATEGORY WISE PRODUCTS) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`text-sm font-semibold flex items-center gap-1 py-4 cursor-pointer transition-colors ${
                  currentPage === 'products' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-2 border-b border-slate-50 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category-wise Solutions</p>
                  </div>
                  {PRODUCTS_DATA.map((cat) => {
                    const CatIcon = IconMap[cat.iconName] || Layers;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleProductCatSelect(cat.id)}
                        className="text-left w-full p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-start gap-3.5 cursor-pointer group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <CatIcon className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cat.title}</span>
                            <span className="text-[8px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1 rounded font-bold uppercase">Ready</span>
                          </div>
                          <p className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-1 mt-0.5">{cat.description}</p>
                        </div>
                      </button>
                    );
                  })}
                  <div className="mt-2 p-2.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold text-xs">Explore all {PRODUCTS_DATA.reduce((acc, c) => acc + c.products.length, 0)} direct apps</span>
                    <button
                      type="button"
                      onClick={() => handlePageSelect('products')}
                      className="text-[10px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-0.5 hover:underline"
                    >
                      View Catalog <ArrowUpRight className="w-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('technologies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`text-sm font-semibold flex items-center gap-1 py-4 cursor-pointer transition-colors ${
                  currentPage === 'technology' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Technology <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'technologies' ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {activeDropdown === 'technologies' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[440px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 px-3 py-1 border-b border-slate-50 dark:border-slate-800 mb-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engineering Categories</p>
                  </div>
                  {TECHNOLOGIES.map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => handleTechSelect(tech.id)}
                      className="text-left p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-wider">{tech.title.split(' ')[0]}</p>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-450 leading-normal line-clamp-2">{tech.description}</p>
                    </button>
                  ))}
                  <div className="col-span-2 mt-1 px-3 py-2 bg-slate-900 dark:bg-slate-950 text-white rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] tracking-tight font-semibold text-slate-300">Strict Type Safety Standard</span>
                    </div>
                    <span className="text-[9px] font-bold bg-blue-600 text-white tracking-widest px-1.5 py-0.5 rounded-md uppercase">TS/Vite</span>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <button
              type="button"
              onClick={() => handlePageSelect('about')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'about' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              About
            </button>

            {/* Blogs */}
            <button
              type="button"
              onClick={() => handlePageSelect('blog')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'blog' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Blogs
            </button>

            {/* Contact Us */}
            <button
              type="button"
              onClick={() => handlePageSelect('contact')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === 'contact' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right Panel (Day & Night switch and Contact CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Beautiful Day & Night switch */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors cursor-pointer select-none"
              title="Toggle Day/Night theme"
              id="theme-toggle-desktop"
            >
              {darkMode ? (
                <Sun className="w-4.5 h-4.5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handlePageSelect('contact')}
              className="bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs py-3 px-4.5 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/15 flex items-center gap-1"
            >
              Get Consultation <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburguer Toggle Button & Theme switch */}
          <div className="lg:hidden flex items-center gap-2">
            
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-850 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 focus:outline-none cursor-pointer border border-slate-100 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl max-h-[85vh] overflow-y-auto duration-200">
          <div className="px-4 py-5 space-y-4">
            
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => handlePageSelect('home')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-bold ${
                  currentPage === 'home' 
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              {/* Mobile Services section (Nested structure) */}
              <div className="py-2 px-3 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-850/50 my-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">IT Consulting Services</p>
                <div className="space-y-1.5">
                  {SERVICES.map((serv) => (
                    <button
                      key={serv.id}
                      type="button"
                      onClick={() => handleServiceSelect(serv.id)}
                      className="block w-full text-left text-xs font-semibold py-1.5 px-2.5 text-slate-600 dark:text-slate-350 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      • {serv.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Products section (NEW) */}
              <div className="py-2 px-3 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-850/50 my-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Enterprise Products & Apps</p>
                <div className="space-y-1.5">
                  {PRODUCTS_DATA.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleProductCatSelect(cat.id)}
                      className="block w-full text-left text-xs font-semibold py-1.5 px-2.5 text-slate-600 dark:text-slate-350 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      • {cat.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handlePageSelect('products')}
                    className="block w-full text-left text-xs font-bold py-1.5 px-2.5 text-blue-600 dark:text-blue-400 mt-1 hover:underline"
                  >
                    🚀 View Product Catalog
                  </button>
                </div>
              </div>

              {/* Mobile Technology section (Nested structure) */}
              <div className="py-2 px-3 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-850/50 my-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Engineering Stack</p>
                <div className="space-y-1.5">
                  {TECHNOLOGIES.map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => handleTechSelect(tech.id)}
                      className="block w-full text-left text-xs font-semibold py-1.5 px-2.5 text-slate-600 dark:text-slate-350 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      • {tech.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* About */}
              <button
                type="button"
                onClick={() => handlePageSelect('about')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-bold mt-1 ${
                  currentPage === 'about' 
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                About Us
              </button>

              {/* Blogs */}
              <button
                type="button"
                onClick={() => handlePageSelect('blog')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-bold mt-1 ${
                  currentPage === 'blog' 
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Blogs
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => handlePageSelect('contact')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-bold mt-1 ${
                  currentPage === 'contact' 
                    ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => handlePageSelect('contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-3 px-4 rounded-xl text-xs shadow-md cursor-pointer block"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
