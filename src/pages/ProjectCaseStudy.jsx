import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudiesData";

export default function ProjectCaseStudy() {
  const { projectId } = useParams();
  const project = CASE_STUDIES[projectId] || CASE_STUDIES["production-rag"];

  return (
    <article className="max-w-2xl mx-auto py-6 sm:py-10 text-neutral-800 selection:bg-neutral-200">
      {/* ⬅️ Back Navigation */}
      <Link
        to="/"
        className="text-neutral-400 text-xs font-mono mb-12 inline-flex items-center gap-1.5 hover:text-black transition-colors group cursor-pointer"
      >
        <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
        Back to works
      </Link>

      {/* 1. Large Editorial Serif Title */}
      <h1 className="font-serif text-4xl sm:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.18] mb-4">
        {project.title}
      </h1>

      {/* 2. Minimalist Meta Bar */}
      <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 mb-8">
        <span>Mar 4, 2026</span>
        <span>·</span>
        <span>4 min read</span>
        <span>·</span>
        <span className="text-neutral-600">{project.category}</span>
      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full h-px bg-neutral-200/80 mb-10" />

      {/* 3. Editorial Lead Paragraph */}
      <p className="text-[17px] sm:text-[18px] leading-[1.8] text-neutral-700 font-normal mb-10">
        {project.overview}
      </p>

      {/* 4. Framed Hero Image */}
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-900 shadow-md mb-12 bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
          alt={project.title}
          className="w-full h-[300px] sm:h-[400px] object-cover opacity-90"
        />
      </div>

      {/* 5. Editorial Content Body */}
      <div className="space-y-8 text-[16px] sm:text-[17px] leading-[1.85] text-neutral-700 font-normal">
        <p>
          There is a particular kind of engineering courage required when scaling production AI systems.
          In naive Retrieval-Augmented Generation setups, every accumulating millisecond during context retrieval compounds across the entire generation pipeline.
        </p>

        <p>
          We implemented <em className="font-serif italic text-neutral-900">PagedAttention</em> and sub-vector product quantization.
          By decoupling physical KV-cache memory allocation from logical sequence lengths, we eliminated memory fragmentation entirely.
        </p>

        {/* Callout Quote */}
        <blockquote className="border-l-2 border-neutral-900 pl-6 py-2 my-10 font-serif italic text-xl sm:text-2xl text-neutral-900 leading-snug">
          "When we optimize at the hardware level, negative latency is not absence—it is pure possibility."
        </blockquote>

        <p>
          The core challenge was eliminating sub-optimal retrieval precision when querying domain-specific legal terminology.
          By applying binary reranking directly onto the quantized vectors, we reduced P99 latency to under 35ms while preserving 98.1% context recall.
        </p>

        <p>
          Try this: run an automated evaluation benchmark using RAGAS metrics on your production endpoints.
          Observe where the context recall drops—let the hallucination points reveal exactly where your retrieval pipeline requires structural refinement.
        </p>

        <p className="font-serif text-lg text-neutral-900 pt-2">
          What remains when the hardware latency subsides is pure context. And that is more than enough.
        </p>
      </div>

      {/* 6. Footer Divider & Action Links */}
      <div className="mt-16 pt-8 border-t border-neutral-200/80 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-neutral-500">
        <div>P99 Latency: &lt;35ms · Recall: 98.1%</div>
        
        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-black transition-colors inline-flex items-center gap-1"
          >
            GitHub Repository <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}