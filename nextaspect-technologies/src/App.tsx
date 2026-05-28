import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ServicesView from "./components/ServicesView";
import TechnologiesView from "./components/TechnologiesView";
import ProductsView from "./components/ProductsView";
import PortfolioView from "./components/PortfolioView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";
import AboutView from "./components/AboutView";
import ConsultantWidget from "./components/ConsultantWidget";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSubPage, setCurrentSubPage] = useState<string | undefined>(undefined);
  
  // Enforce light mode strictly as requested
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  // Scroll to top on page switches to mimic standard router behaviors
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, currentSubPage]);

  const handleNavigate = (page: string, subPage?: string) => {
    setCurrentPage(page);
    setCurrentSubPage(subPage);
  };

  // Rendering the active view section
  const renderPageContent = () => {
    switch (currentPage) {
      case "services":
        return <ServicesView initialSubPage={currentSubPage} onNavigate={handleNavigate} />;
      case "technologies":
        return <TechnologiesView initialCategory={currentSubPage} onNavigate={handleNavigate} />;
      case "products":
        return <ProductsView initialSubPage={currentSubPage} onNavigate={handleNavigate} />;
      case "portfolio":
        return <PortfolioView />;
      case "blog":
        return <BlogView />;
      case "contact":
        return <ContactView />;
      case "about":
        return <AboutView onNavigate={handleNavigate} />;
      case "home":
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fe] text-slate-800 font-sans relative antialiased selection:bg-primary-indigo/30 selection:text-white transition-colors duration-300" id="applet-viewport">
      
      {/* Background visual ambiance blurs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary-indigo/10 to-transparent pointer-events-none" />
      
      {/* Dynamic Nav Bar */}
      <Navbar 
        currentPage={currentPage} 
        currentSubPage={currentSubPage} 
        onNavigate={handleNavigate} 
      />

      {/* Main content body */}
      <main className="flex-grow">
        {renderPageContent()}
      </main>

      {/* Floating Scoping Advisor Assist */}
      <ConsultantWidget onNavigate={handleNavigate} />

      {/* Extensive Corporate footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
