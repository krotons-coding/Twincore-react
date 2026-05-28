import { useState } from "react";
import { Clock, User, ArrowLeft, Calendar, Tag, BookOpen, Send, Sparkles, AlertCircle } from "lucide-react";
import { blogPostsData } from "../data";
import { BlogPost } from "../types";

export default function BlogView() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left font-sans" id="blog-view-canvas">
      
      {activeArticle ? (
        /* Immersive complete Article Reader layout */
        <div className="max-w-3xl mx-auto space-y-8" id="blog-reader-view">
          
          <button 
            onClick={() => setActiveArticle(null)}
            className="flex items-center space-x-2 text-xs font-semibold text-[#06b6d4] hover:underline cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles Listing</span>
          </button>

          {/* Article Banner Metas */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase text-secondary-purple font-extrabold tracking-widest">{activeArticle.category}</span>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-snug">
              {activeArticle.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-b border-white/[0.05] pb-4">
              <div className="flex items-center space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-primary-indigo text-white font-mono text-[10px] font-bold flex items-center justify-center">
                  {activeArticle.author.avatar}
                </div>
                <span className="text-gray-300 font-medium">{activeArticle.author.name}</span>
                <span className="text-gray-500 font-mono">({activeArticle.author.role})</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activeArticle.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Core Story Body Content */}
          <div className="space-y-6 text-sm text-gray-300 leading-relaxed text-left" id="article-payload-story">
            <p className="font-medium text-white italic text-base leading-relaxed">
              {activeArticle.excerpt}
            </p>
            
            {/* Split full body text into paragraph lists */}
            {activeArticle.content.split("\n\n").map((chunk, idx) => (
              <p key={idx} className="leading-relaxed">
                {chunk}
              </p>
            ))}

            <div className="p-4 rounded-xl bg-primary-indigo/10 border border-primary-indigo/15 text-xs text-gray-300 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-primary-electric flex-shrink-0 mt-0.5" />
              <span>
                <strong>NextAspect Advisory:</strong> Systems planning and compliance upgrades prevent technical debt bottlenecks. Ask our advisors directly about Odoo or React scoping maps.
              </span>
            </div>
          </div>

          {/* Tag row */}
          <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-gray-500" />
            {activeArticle.tags.map((tg) => (
              <span key={tg} className="text-[10px] font-mono py-0.5 px-2 bg-white/[0.03] text-gray-400 border border-white/5 rounded">
                #{tg}
              </span>
            ))}
          </div>

        </div>
      ) : (
        /* Standard Article List Dashboard */
        <div className="space-y-12">
          
          {/* Headline banner */}
          <div className="border-b border-white/[0.06] pb-8 mb-12 space-y-4">
            <span className="text-xs font-mono tracking-widest text-[#8b5cf6] uppercase font-bold block">
              NEXTASPECT SOLUTIONS JOURNAL & TECHNICAL BLOG
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Solutions Journal
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              We publish detailed design reviews, micro-optimizations briefs, and system migration roadmaps compiled directly from active enterprise client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-articles-grid">
            {blogPostsData.map((post) => (
              <div 
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="p-6 rounded-2xl glass-panel hover:bg-white/[0.01] border border-white/[0.05] hover:border-primary-electric/25 transition-all cursor-pointer flex flex-col justify-between space-y-6 group"
              >
                
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-white/[0.05] pb-3.5 text-xs">
                    <span className="font-mono text-[#06b6d4] font-semibold uppercase">{post.category}</span>
                    <span className="text-gray-500 font-mono">{post.readTime}</span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-primary-electric transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <div className="w-5 h-5 rounded-full bg-primary-indigo text-white font-mono text-[8px] font-bold flex items-center justify-center">
                      {post.author.avatar}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">{post.author.name}</span>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/[0.05] text-xs font-semibold text-primary-electric flex items-center space-x-1">
                  <span>Open Complete Story Review</span>
                  <BookOpen className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
