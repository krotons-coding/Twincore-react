import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ProductsPage } from './pages/ProductsPage';
import { BlogPage } from './pages/BlogPage';
import { LiveChatWidget } from './components/LiveChatWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('odoo-erp');
  const [selectedTechId, setSelectedTechId] = useState<string>('frontend');
  const [selectedProductCatId, setSelectedProductCatId] = useState<string>('odoo-products');

  // Initialize day/night mode from localStorage configuration
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('twincore-theme') === 'dark';
  });

  // Apply dark class list directly to document node for Tailwind 4.0 standard compliance
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('twincore-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('twincore-theme', 'light');
    }
  }, [darkMode]);

  // Monitor location hash to support elegant single-page routing refresh bookmarks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'services', 'technology', 'about', 'contact', 'products', 'blog'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Detect initial load hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash state when tab shifts to keep deep navigation alive
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const navigateToServiceId = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handlePageChange('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTechId = (techId: string) => {
    setSelectedTechId(techId);
    handlePageChange('technology');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProductCatId = (catId: string) => {
    setSelectedProductCatId(catId);
    handlePageChange('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
      darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Simulated Live Chat Architect Sync assistant */}
      <LiveChatWidget />

      {/* Dynamic Brand Navigation Header with support for parent-child dropdown navigation */}
      <Header 
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onNavigateToService={navigateToServiceId}
        onNavigateToTech={navigateToTechId}
        onNavigateToProductCat={navigateToProductCatId}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Primary Dynamic Main Stage */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            setCurrentPage={handlePageChange}
            onNavigateToService={navigateToServiceId}
            onNavigateToTech={navigateToTechId}
            onNavigateToProductCat={navigateToProductCatId}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            initialServiceId={selectedServiceId}
            setCurrentPage={handlePageChange}
          />
        )}

        {currentPage === 'technology' && (
          <TechnologyPage 
            initialCategoryId={selectedTechId}
            setCurrentPage={handlePageChange}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            initialCategoryId={selectedProductCatId}
            setCurrentPage={handlePageChange}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage 
            setCurrentPage={handlePageChange}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage />
        )}
      </main>

      {/* High-Impact brand coordinates and interactive newsletter dispatch footer */}
      <Footer 
        setCurrentPage={handlePageChange}
        onNavigateToService={navigateToServiceId}
        onNavigateToProductCat={navigateToProductCatId}
      />
      
    </div>
  );
}
