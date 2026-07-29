import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { WORKS_DATA } from "../data/worksData";

function Works() {
  return (
    <section className="mt-24 pb-20">
      {/* 🏷️ Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 border-b border-neutral-200/80 pb-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <h2 className="text-neutral-400 text-[13px] font-medium tracking-wide uppercase">
              Works
            </h2>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-600 text-xs font-mono flex items-center gap-1.5">
              <Sparkles size={13} className="text-brand" />
              Highlighted Projects Only
            </span>
          </div>
          <span className="text-neutral-400 text-xs font-mono">2023 — Present</span>
        </div>

        {/* Descriptive Intro Sentence */}
        <p className="text-neutral-600 text-[15px] leading-relaxed max-w-2xl">
          A curated collection of production-grade Machine Learning architectures, agentic workflows,
          and LLM infrastructure built for real-world reliability and speed.
        </p>
      </motion.div>

      {/* 🎨 Asymmetric Animated Grid (Wide Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {WORKS_DATA.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className={`${project.span} ${project.height} ${project.accentGlow} bg-[#0c0c0c] rounded-2xl flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 cursor-pointer group relative overflow-hidden block border border-neutral-800/80`}
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />

            {/* Glowing Color Gradient Accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Dark Base Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            {/* Hover Arrow Icon */}
            <div className="absolute top-5 right-5 text-white/40 group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight size={22} />
            </div>

            {/* Card Content */}
            <div className="flex justify-between items-end relative z-10 gap-4">
              <div className="flex flex-col max-w-xl">
                <h3
                  className={`font-medium text-white mb-2 transition-colors ${
                    project.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-neutral-300 font-mono text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tag Badge */}
              <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-medium text-white border border-white/15 whitespace-nowrap shadow-sm group-hover:bg-white/20 transition-colors">
                {project.tag}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export { Works };