import { ArrowUpRight, BookOpen, PenTool } from "lucide-react";

const PAPERS = [
  {
    title: "Optimizing RAG Retrieval Latency via Quantized Embeddings",
    type: "Preprint",
    date: "2024",
    description: "Comparative benchmark on sub-millisecond document retrieval using vector quantization and cross-encoder reranking.",
    link: "#",
  },
];

const BLOGS = [
  {
    title: "Building Production State Machines with LangGraph",
    date: "Oct 2024",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Quantization Deep Dive: AWQ vs GPTQ for vLLM Deployment",
    date: "Sep 2024",
    readTime: "8 min read",
    link: "#",
  },
];

export default function ResearchWriting() {
  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-medium text-neutral-900 mb-2">Research & Writing</h1>
      <p className="text-sm font-mono text-neutral-500 mb-10">
        Publications, arXiv preprints, and technical engineering essays.
      </p>

      {/* 📄 Section 1: Research Papers */}
      <div className="mb-12">
        <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <BookOpen size={14} className="text-brand" /> Research Papers
        </h2>
        <div className="space-y-4">
          {PAPERS.map((paper, i) => (
            <a
              key={i}
              href={paper.link}
              className="block p-5 bg-white rounded-2xl border border-neutral-200/80 hover:border-brand/40 transition-all shadow-xs group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-brand bg-brand/10 px-2 py-0.5 rounded">
                  {paper.type} · {paper.date}
                </span>
                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-brand transition-colors" />
              </div>
              <h3 className="text-base font-medium text-neutral-900 mb-1 group-hover:text-brand transition-colors">
                {paper.title}
              </h3>
              <p className="text-xs text-neutral-600 font-mono leading-relaxed">
                {paper.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* ✍️ Section 2: Articles & Blogs */}
      <div>
        <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <PenTool size={14} className="text-brand" /> Technical Articles
        </h2>
        <div className="space-y-3">
          {BLOGS.map((blog, i) => (
            <a
              key={i}
              href={blog.link}
              className="p-4 bg-white rounded-xl border border-neutral-200/80 hover:border-brand/40 transition-all flex justify-between items-center group shadow-xs"
            >
              <div>
                <h3 className="text-sm font-medium text-neutral-900 group-hover:text-brand transition-colors">
                  {blog.title}
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 mt-1">
                  {blog.date} · {blog.readTime}
                </p>
              </div>
              <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-brand transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}