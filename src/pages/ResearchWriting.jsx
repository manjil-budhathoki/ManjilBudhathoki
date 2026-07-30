import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  PenTool,
  Copy,
  Check,
  ArrowLeft,
  Sparkles,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RESEARCH_PAPERS, TECHNICAL_ARTICLES } from "../data/researchData";
import { Link } from "react-router-dom";


export default function ResearchWriting({ setCurrentPage }) {
  const [filter, setFilter] = useState("all"); // 'all' | 'papers' | 'articles'
  const [copiedId, setCopiedId] = useState(null);

  const featuredPaper = RESEARCH_PAPERS.find((p) => p.featured);

  const handleCopyBibtex = (e, paper) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(paper.bibtex);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="text-neutral-500 text-[13px] font-mono mb-8 inline-flex items-center gap-2 hover:text-black transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
          <span>// PUBLICATIONS & ESSAYS</span>
          <span>·</span>
          <span>03 PAPERS</span>
          <span>·</span>
          <span>03 ARTICLES</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 mb-2">
          Research & Writing
        </h1>
        <p className="text-neutral-500 text-sm leading-relaxed">
          Peer-reviewed preprints, arXiv research papers, and technical engineering essays on machine learning systems.
        </p>
      </div>

      {/* 🌟 Featured Landmark Paper Hero Banner */}
      {featuredPaper && (
        <div className="mb-12 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-neutral-800">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-brand/20 border border-brand/40 text-blue-300 text-[11px] font-mono px-2.5 py-1 rounded-md">
              <Sparkles size={12} className="text-blue-400" />
              Featured Research
            </span>
            <span className="text-neutral-400 font-mono text-xs">{featuredPaper.arxivId}</span>
          </div>

          <h2 className="text-lg sm:text-xl font-medium text-white mb-2 leading-snug">
            {featuredPaper.title}
          </h2>

          <p className="text-neutral-300 font-mono text-xs leading-relaxed mb-6">
            {featuredPaper.abstract}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
            <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/50">
              {featuredPaper.metrics}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => handleCopyBibtex(e, featuredPaper)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                {copiedId === featuredPaper.id ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check size={13} /> BibTeX Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Copy size={13} /> Copy BibTeX
                  </span>
                )}
              </button>

              <a
                href={featuredPaper.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-neutral-900 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-1"
              >
                Read PDF <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 🏷️ Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-neutral-200/80 pb-4">
        {[
          { id: "all", label: "All Works" },
          { id: "papers", label: "Research Papers", icon: BookOpen },
          { id: "articles", label: "Technical Articles", icon: PenTool },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all cursor-pointer ${
                isActive
                  ? "bg-brand text-white shadow-xs"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100/80"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 📄 Content Stream */}
      <div className="space-y-8">
        {/* Research Papers Section */}
        {(filter === "all" || filter === "papers") && (
          <div>
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText size={14} className="text-brand" /> Research Papers & Preprints
            </h2>

            <div className="space-y-4">
              {RESEARCH_PAPERS.filter((p) => !p.featured || filter === "papers").map((paper) => (
                <a
                  key={paper.id}
                  href={paper.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white rounded-2xl border border-neutral-200/90 hover:border-brand/50 hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-brand bg-brand/10 px-2 py-0.5 rounded">
                        {paper.type} · {paper.date}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {paper.metrics}
                      </span>
                    </div>
                    <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-brand transition-colors" />
                  </div>

                  <h3 className="text-base font-medium text-neutral-900 mb-1.5 group-hover:text-brand transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-mono leading-relaxed line-clamp-2">
                    {paper.abstract}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Technical Articles Section */}
        {(filter === "all" || filter === "articles") && (
          <div>
            <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <PenTool size={14} className="text-brand" /> Technical Articles & Engineering Guides
            </h2>

            <div className="space-y-3">
              {TECHNICAL_ARTICLES.map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl border border-neutral-200/90 hover:border-brand/50 hover:shadow-sm transition-all flex justify-between items-center group"
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {article.date} · {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm font-medium text-neutral-900 group-hover:text-brand transition-colors">
                      {article.title}
                    </h3>
                  </div>

                  <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-brand transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}