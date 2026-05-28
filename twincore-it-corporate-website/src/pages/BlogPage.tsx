import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Plus, 
  Edit3, 
  Trash2, 
  Lock, 
  Unlock, 
  Check, 
  X, 
  Calendar, 
  User, 
  ArrowLeft,
  ChevronRight,
  Flame,
  Layout,
  FileText,
  AlertCircle
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
  featured?: boolean;
}

const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "odoo-18-upgrade",
    title: "Odoo 18 Migration Blueprint: Seamless ERP Upgrades",
    category: "Odoo ERP",
    author: "Marcus Vance (Principal Architect)",
    readTime: "6 min read",
    date: "May 24, 2026",
    summary: "An architectural review of migration strategies, staging environments, custom module translations, and data schema validation while transitioning legacy Odoo to version 18.",
    content: `Upgrading to Odoo 18 presents unprecedented capabilities in standard accounting pipelines, barcode picking loops, and smart multi-company inventory management. However, moving complex historical entries requires a strictly staged SDLC protocol.

### 1. Establish the Staging Sandboxes
Never execute a pipeline migration directly on your live PostgreSQL server. Establish a dedicated, identical staging instance backed securely by daily snapshots. Ensure all background SMTP controllers and automated webhooks are disconnected to prevent unintended test emails to customers.

### 2. Custom Module Audit & Translation
Odoo core models undergo severe refactoring between versions. Custom Python models and module hooks must be audited. Any third-party dependencies must either be substituted, upgraded through their vendor paths, or refactored to align with Odoo 18's new unified API contracts.

### 3. Key Schema Validation
Run testing scripts to confirm that critical relational integrity fields match correctly (e.g. stock moves, accounts ledgers, tax rules). By executing iterative data migration scripts under close developer supervision, Twincore achieves zero operational downtime deployments for global enterprises.`,
    featured: true
  },
  {
    id: "react-memoization-leaks",
    title: "Optimizing React State and Preventing UI Rendering Lag",
    category: "Custom Web",
    author: "Sarah Jenkins (Frontend Lead)",
    readTime: "8 min read",
    date: "May 18, 2026",
    summary: "How to eliminate heavy React re-renders, isolate deep state updates, optimize list iterations, and prevent memory leaks in complex technical dashboards.",
    content: `When dealing with fast-updating IoT, stock, or fleet coordinates, high-frequency state adjustments can introduce noticeable typing lag and animation frames dropping. Here at Twincore, we apply strict design patterns to keep rendering pipelines fluid.

### Identify and Fix Render Loops
A common performance killer is placing direct state mutations or unmemoized object structures inside component render blocks. These structures trigger cascading useEffect re-evaluations.

- Isolate localized UI states like popups and inputs from the primary application level.
- Stabilize complex objects, dynamic filters, and dependency references using useMemo and useCallback.
- Leverage optimized context layers or external stores to broadcast metrics with selective component updates.
- Employ CSS-only layout transitions via hardware-accelerated transforms rather than triggering continuous JavaScript recalculations.`,
    featured: false
  },
  {
    id: "agentic-ai-pipelines",
    title: "Deploying Agentic AI: Transforming Simple Webhooks Into Contextual Workflows",
    category: "AI & Innovation",
    author: "Dr. Elena Rostova (AI Lead)",
    readTime: "5 min read",
    date: "May 10, 2026",
    summary: "Shifting from standard predictive machine learning and simple triggered webhooks to autonomous, decision-oriented Agentic loops equipped with dynamic memory.",
    content: `Standard automation systems depend on rigid 'If-This-Then-That' models that break when confronting inconsistent corporate raw data. Agentic AI platforms resolve this structural layout by using language models combined with objective-driven search libraries.

### The Power of Dynamic Self-Correction
Rather than just forwarding a database alert to Slack, an autonomous operational agent can:
1. Parse the alert payload context.
2. Search standard API logs and indices to correlate the error.
3. Formulate and score 3 distinct corrective paths.
4. Submit the best path to your human developer via adaptive cards inside Microsoft Teams, requiring only a simple click for secure execution.
By deploying robust type-safe backend environments, we help enterprise clients leverage AI securely with deep guardrails and detailed audit logs.`,
    featured: false
  }
];

export const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('twincore-blogs');
    return saved ? JSON.parse(saved) : DEFAULT_BLOGS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Odoo ERP' | 'Custom Web' | 'AI & Innovation'>('All');
  const [readingBlogPost, setReadingBlogPost] = useState<BlogPost | null>(null);

  // Admin states
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [adminError, setAdminError] = useState('');
  
  // Blog editor state
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [editorTitle, setEditorTitle] = useState('');
  const [editorCategory, setEditorCategory] = useState('Odoo ERP');
  const [editorAuthor, setEditorAuthor] = useState('');
  const [editorReadTime, setEditorReadTime] = useState('5 min read');
  const [editorSummary, setEditorSummary] = useState('');
  const [editorContent, setEditorContent] = useState('');
  
  useEffect(() => {
    localStorage.setItem('twincore-blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleLoginAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authorization gate (e.g. PIN 1234 or "admin")
    if (adminPin === '1234' || adminPin.toLowerCase() === 'admin') {
      setAdminAuthenticated(true);
      setAdminError('');
    } else {
      setAdminError('Invalid Security PIN. (Hint: Use pin "1234" to enter admin mode)');
    }
  };

  const handleCreateOrUpdateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editorTitle || !editorAuthor || !editorSummary || !editorContent) {
      alert('Please fill out all fields.');
      return;
    }

    if (editingBlogId) {
      // Edit mode
      setBlogs(prev => prev.map(b => b.id === editingBlogId ? {
        ...b,
        title: editorTitle,
        category: editorCategory,
        author: editorAuthor,
        readTime: editorReadTime,
        summary: editorSummary,
        content: editorContent
      } : b));
      setEditingBlogId(null);
    } else {
      // Create mode
      const newBlog: BlogPost = {
        id: 'blog-' + Date.now(),
        title: editorTitle,
        category: editorCategory,
        author: editorAuthor,
        readTime: editorReadTime,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        summary: editorSummary,
        content: editorContent
      };
      setBlogs(prev => [newBlog, ...prev]);
    }

    // Reset fields
    setEditorTitle('');
    setEditorAuthor('');
    setEditorSummary('');
    setEditorContent('');
    setSelectedCategory('All');
  };

  const handleEditSetup = (blog: BlogPost) => {
    setEditingBlogId(blog.id);
    setEditorTitle(blog.title);
    setEditorCategory(blog.category);
    setEditorAuthor(blog.author);
    setEditorReadTime(blog.readTime);
    setEditorSummary(blog.summary);
    setEditorContent(blog.content);

    // Smooth scroll to the form
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleDeleteBlog = (blogId: string) => {
    if (confirm('Are you absolute sure you want to delete this press/blog article from the database?')) {
      setBlogs(prev => prev.filter(b => b.id !== blogId));
      if (readingBlogPost && readingBlogPost.id === blogId) {
        setReadingBlogPost(null);
      }
    }
  };

  const handleResetDefaultBlogs = () => {
    if (confirm('Verify: Reset to initial system seed blogs? (All customized custom posts will be overwritten)')) {
      setBlogs(DEFAULT_BLOGS);
      setEditingBlogId(null);
    }
  };

  // Filter logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchCat = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchQuery = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 text-left select-none space-y-12 text-slate-800 dark:text-neutral-100 transition-colors">
      
      {/* Top Banner section with toggling Admin Panel Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-2xl">
          <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3 tracking-tight">
            Twincore Architectural Press & Blogs
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Review live technology deployment strategies, custom Odoo upgrade guidelines, performance fixes, and AI-driven workflow insights from our principal consulting engineers.
          </p>
        </div>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsAdminMode(!isAdminMode);
              setAdminError('');
            }}
            className={`flex items-center gap-1.5 text-xs font-extrabold px-4.5 py-3 rounded-xl border transition-all cursor-pointer ${
              isAdminMode 
                ? 'bg-slate-900 border-slate-950 text-white dark:bg-slate-800 dark:border-slate-700' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850 dark:text-slate-200'
            }`}
          >
            {isAdminMode ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-blue-500" />
                <span>Exit Admin Console</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Publishing & Manage Admin Portal</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Admin Panel Stage */}
      <AnimatePresence>
        {isAdminMode && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
              
              {!adminAuthenticated ? (
                // Admin Login Verification State
                <form onSubmit={handleLoginAdmin} className="max-w-md mx-auto space-y-4 text-center py-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 flex items-center justify-center mx-auto text-blue-600 dark:text-blue-400">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight">Security Access Required</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">To protect official publishing records, enter your secure system PIN.</p>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="password"
                      placeholder="Enter security PIN. (Try '1234' or 'admin')"
                      value={adminPin}
                      onChange={(e) => setAdminPin(e.target.value)}
                      className="w-full bg-white dark:bg-slate-850 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-center focus:ring-1 focus:ring-blue-500 focus:outline-none text-slate-900 dark:text-white"
                      autoFocus
                    />
                    {adminError && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 font-semibold flex items-center justify-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {adminError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-705 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition cursor-pointer"
                  >
                    Authenticate Console Credentials
                  </button>
                </form>
              ) : (
                // Authenticated Admin Dashboard Workspace
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-250 dark:border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Direct Publishing Engine (Local Session Mode)</h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add or adjust standard architecture papers. These edits are saved securely onto your browser's LocalStorage.</p>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetDefaultBlogs}
                      className="text-[10px] bg-red-50 hover:bg-red-100 text-red-600 font-bold px-3 py-1.5 rounded-lg border border-red-200 dark:bg-red-950/20 dark:border-red-900/40 dark:text-red-400 transition cursor-pointer"
                    >
                      Reset Seed Articles
                    </button>
                  </div>

                  {/* Blog Edit/Create Form */}
                  <form onSubmit={handleCreateOrUpdateBlog} className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                    <div className="col-span-12 md:col-span-8 space-y-4">
                      
                      {/* Title */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Article Header Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Navigating Multi-Region Sharded Database Clusters"
                          value={editorTitle}
                          onChange={(e) => setEditorTitle(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Summary */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Brief Abstract / Summary *</label>
                        <textarea
                          required
                          rows={2}
                          placeholder="Give a brief summary to represent in the cards explorer..."
                          value={editorSummary}
                          onChange={(e) => setEditorSummary(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Major Content Draft (Markdown supported) */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Core Copy Content Writer (Supports Sub-headings) *</label>
                        <textarea
                          required
                          rows={6}
                          placeholder="Explain technical configurations, step guides, architectures or code blocks..."
                          value={editorContent}
                          onChange={(e) => setEditorContent(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                        />
                      </div>

                    </div>

                    {/* Metadata column */}
                    <div className="col-span-12 md:col-span-4 space-y-4 border-l border-slate-100 dark:border-slate-800 md:pl-6">
                      
                      {/* Author */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Author Name & Role *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Richard Hendricks (Senior Dev)"
                          value={editorAuthor}
                          onChange={(e) => setEditorAuthor(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Engineering Category</label>
                        <select
                          value={editorCategory}
                          onChange={(e) => setEditorCategory(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                        >
                          <option value="Odoo ERP">Odoo ERP</option>
                          <option value="Custom Web">Custom Web</option>
                          <option value="AI & Innovation">AI & Innovation</option>
                        </select>
                      </div>

                      {/* Reading Estimation */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-1">Estimated Reading Span</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 5 min read"
                          value={editorReadTime}
                          onChange={(e) => setEditorReadTime(e.target.value)}
                          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 flex flex-col gap-2">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Check className="w-4 h-4" />
                          {editingBlogId ? "Save Article Edits" : "Publish to Explorer"}
                        </button>

                        {editingBlogId && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingBlogId(null);
                              setEditorTitle('');
                              setEditorAuthor('');
                              setEditorSummary('');
                              setEditorContent('');
                            }}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 rounded-xl transition dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750 cursor-pointer"
                          >
                            Cancel Edit
                          </button>
                        )}
                      </div>

                    </div>
                  </form>

                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main split reading interface or list layout */}
      <AnimatePresence mode="wait">
        {readingBlogPost ? (
          // Active Full Reading Node
          <motion.article 
            key="active-blog-read"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            {/* Back button */}
            <button
              type="button"
              onClick={() => setReadingBlogPost(null)}
              className="flex items-center gap-1.5 text-xs font-black text-slate-500 dark:text-slate-450 hover:text-blue-600 dark:hover:text-blue-400 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Return to Catalog Press
            </button>

            {/* Main Article Card styling */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-md relative overflow-hidden space-y-6">
              
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 border border-blue-150 dark:border-blue-900/60 px-3 py-1.5 rounded-full text-blue-800 dark:text-blue-300 inline-block">
                  {readingBlogPost.category}
                </span>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {readingBlogPost.title}
                </h1>
                
                {/* Meta tags */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    By {readingBlogPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {readingBlogPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 animate-pulse" />
                    {readingBlogPost.readTime}
                  </span>
                </div>
              </div>

              <hr className="border-slate-100 dark:border-slate-800" />

              {/* Main Text Content */}
              <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans whitespace-pre-line space-y-4">
                {readingBlogPost.content}
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-slate-450 dark:text-slate-500">A verified architectural perspective from Twincore consulting team.</span>
                </div>

                <div className="flex gap-2">
                  {isAdminMode && adminAuthenticated && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleEditSetup(readingBlogPost)}
                        className="p-2 text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-xl dark:text-blue-400 dark:hover:bg-blue-950/40 dark:border-blue-900 cursor-pointer"
                        title="Edit Post"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(readingBlogPost.id)}
                        className="p-2 text-red-650 hover:bg-red-50 border border-red-200 rounded-xl dark:text-red-400 dark:hover:bg-red-950/20 dark:border-red-900/40 cursor-pointer"
                        title="Delete Post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  
                  <button
                    type="button"
                    onClick={() => setReadingBlogPost(null)}
                    className="bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition"
                  >
                    Back to Articles
                  </button>
                </div>
              </div>

            </div>
          </motion.article>
        ) : (
          // General Explorer State
          <motion.div 
            key="blog-catalog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10"
          >
            {/* Filter and Search controls Row */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-5 rounded-3xl shadow-sm">
              
              {/* Category buttons tab list */}
              <div className="flex flex-wrap bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1 shrink-0">
                {(['All', 'Odoo ERP', 'Custom Web', 'AI & Innovation'] as const).map((catName) => {
                  const IsActive = selectedCategory === catName;
                  return (
                    <button
                      key={catName}
                      type="button"
                      onClick={() => setSelectedCategory(catName)}
                      className={`text-xs font-bold px-4 py-2 rounded-lg transition select-none cursor-pointer ${
                        IsActive 
                          ? 'bg-blue-600 shadow-sm text-white' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {catName}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic search bar input */}
              <div className="relative flex-grow md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles by title, abstract or engineer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>

            </div>

            {/* Grid Layout representing published posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                  <motion.div
                    key={post.id}
                    layout="position"
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 p-6 sm:p-7 hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-150/50 dark:border-blue-900/60 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        
                        <span className="text-[10px] text-slate-400 font-mono font-medium">
                          {post.readTime}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                          {post.date} • {post.author.split('(')[0].trim()}
                        </p>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setReadingBlogPost(post);
                          window.scrollTo({ top: 0, behavior: 'auto' });
                        }}
                        className="text-xs font-black text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                      >
                        Read Entire Paper
                        <ChevronRight className="w-4 h-4 ml-0.5" />
                      </button>

                      {isAdminMode && adminAuthenticated && (
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => handleEditSetup(post)}
                            className="p-1.5 text-blue-600 hover:bg-blue-50 border border-slate-200 rounded-lg dark:text-blue-400 dark:hover:bg-blue-950 cursor-pointer"
                            title="Edit"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteBlog(post.id)}
                            className="p-1.5 text-red-650 hover:bg-red-50 border border-slate-200 rounded-lg dark:text-red-400 dark:hover:bg-red-950 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-3">
                  <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">No blog articles match "{searchQuery}"</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 max-w-sm mx-auto">
                    Try searching with simplified terms or change the tag filter category above.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-bold px-4 py-2 rounded-xl transition"
                  >
                    Reset Filter Search
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
