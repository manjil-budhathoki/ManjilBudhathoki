import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Video,
  FileText,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RESOURCES_DATA } from "../data/resourcesData";

const categories = [
  {
    id: "papers",
    label: "Papers",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200/80",
  },
  {
    id: "videos",
    label: "Lectures",
    icon: Video,
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-200/80",
  },
  {
    id: "blogs",
    label: "Articles",
    icon: BookOpen,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200/80",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Library({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("papers");
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const filteredResources = RESOURCES_DATA.filter(
    (r) => r.category === activeTab
  );
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPageNum - 1) * ITEMS_PER_PAGE;
  const currentResources = filteredResources.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPageNum(1);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <section>
        {/* Back to Home Link */}
        <button
          onClick={() => {
            if (setCurrentPage) setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-neutral-500 text-[13px] font-mono mb-8 inline-flex items-center gap-2 hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 tracking-tight text-neutral-900">
            The Library
          </h1>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Curated materials—papers, lectures, and articles—shaping the foundational knowledge of machine learning and AI systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "border-neutral-900 bg-neutral-900 text-white shadow-xs"
                    : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100/80"
                }`}
              >
                <Icon
                  size={14}
                  className={isActive ? "text-white" : cat.color}
                />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Resource Cards Grid */}
        <div className="min-h-[380px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {currentResources.map((item) => {
                const catMeta = categories.find((c) => c.id === item.category);
                const Icon = catMeta?.icon || FileText;

                return (
                  <motion.a
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-neutral-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-brand/50 hover:shadow-md transition-all cursor-pointer relative min-h-[200px]"
                  >
                    <div>
                      {/* Icon & External Arrow Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className={`w-9 h-9 rounded-xl ${catMeta?.bg} border flex items-center justify-center ${catMeta?.color}`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="text-neutral-400 group-hover:text-brand transition-colors">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-[15px] font-medium text-neutral-900 leading-snug mb-1.5 group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-neutral-500 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="mt-4 pt-3 border-t border-neutral-100">
                      <span className="text-[10px] font-mono text-neutral-400">
                        {item.meta}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between border-t border-neutral-200/60 pt-6">
            <button
              onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
              disabled={currentPageNum === 1}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <span className="text-xs font-mono text-neutral-400">
              {currentPageNum} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPageNum((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPageNum === totalPages}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}