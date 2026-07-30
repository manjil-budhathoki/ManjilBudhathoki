import { useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Check, Mail, ExternalLink } from "lucide-react";
import { useMousePosition } from "../hooks/useMousePosition";
import profileImage from "../assets/profile.png";
import companyImage from "../assets/company.png";
import { Link } from "react-router-dom";


function About() {
  const mousePos = useMousePosition();
  const [hoverType, setHoverType] = useState(null); // 'name' | 'company' | null
  const [copied, setCopied] = useState(false);

  const emailAddress = "manjilbbudhathoki@gmail.com";
  const companyWebsite = "https://navyaadvisors.com";

  const handleCopyMail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-6 relative">
      {/* 📸 Floating Photo Preview (Top-Center) */}
      {hoverType === "name" && (
        <div
          style={{
            left: `${mousePos.x + 16}px`,
            top: `${mousePos.y - 150}px`,
          }}
          className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        >
          <div className="w-36 h-36 rounded-2xl bg-white p-1.5 shadow-2xl border border-neutral-200/90 overflow-hidden transform -rotate-2 animate-in fade-in zoom-in-95">
            <img
              src={profileImage}
              alt="Manjil Budhathoki"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* 🌐 Floating Website Preview (Bottom-Right with offset) */}
      {hoverType === "company" && (
        <div
          style={{
            left: `${mousePos.x + 56}px`, // Further to the right
            top: `${mousePos.y + 2}px`,  // Positioned at bottom-right
          }}
          className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        >
          <div className="w-56 bg-white p-2 rounded-xl shadow-2xl border border-neutral-200/90 overflow-hidden transform rotate-1 animate-in fade-in zoom-in-95">
            <div className="w-full h-28 rounded-lg overflow-hidden relative bg-neutral-100 border border-neutral-100">
              <img
                src={companyImage}
                alt="Navya Advisors Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                <span className="text-[11px] text-white font-medium flex items-center gap-1">
                  navyaadvisors.com <ExternalLink size={10} />
                </span>
              </div>
            </div>
            <div className="p-1.5">
              <p className="text-[12px] font-semibold text-neutral-800">Navya Advisors</p>
              <p className="text-[10px] text-neutral-500">Financial Advisory & AI Solutions</p>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-neutral-400 text-[13px] font-medium tracking-wide uppercase mb-4">
        About
      </h2>

      <div className="text-[17px] leading-[1.65] text-neutral-800">
        My name is{" "}
        <span
          onMouseEnter={() => setHoverType("name")}
          onMouseLeave={() => setHoverType(null)}
          className="font-medium text-black underline decoration-neutral-300 decoration-dashed underline-offset-4 cursor-pointer hover:decoration-brand hover:text-brand transition-colors inline-block"
        >
          Manjil Budhathoki
        </span>
        , A young and passionate Machine Learning Engineer and 🧠 AI Researcher.
        I currently work at{" "}
        <a
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoverType("company")}
          onMouseLeave={() => setHoverType(null)}
          className="inline-flex items-center gap-1.5 bg-brand/10 border border-brand/20 rounded px-2 py-0.5 text-xs font-medium text-brand transition-all hover:bg-brand/20 hover:border-brand/40 cursor-pointer"
        >
          <span className="w-4 h-4 bg-brand flex items-center justify-center rounded-[4px] text-white text-[10px] font-bold shadow-xs">
            N
          </span>
          Navya Advisors
          <ExternalLink size={11} className="opacity-70" />
        </a>
        . Open to freelance projects and part-time opportunities. If you're
        looking to scale your models, let's talk.
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
        <div className="flex items-center gap-6">
          <Link
            to="/me"
            className="bg-neutral-900 text-white px-5 py-2 rounded-full text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-xs"
          >
            View Profile
          </Link>

          <button
            onClick={handleCopyMail}
            className="inline-flex items-center gap-1.5 text-[14px] text-neutral-800 hover:text-black transition-all cursor-pointer group"
          >
            {copied ? (
              <span className="inline-flex items-center gap-1.5 text-brand font-medium transition-all duration-300 animate-in fade-in">
                <Check size={15} className="text-brand" />
                Copied to clipboard!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 underline decoration-neutral-300 underline-offset-[5px] group-hover:decoration-black transition-all duration-300">
                <Mail size={15} className="text-neutral-500 group-hover:text-black transition-colors" />
                Send a mail
              </span>
            )}
          </button>
        </div>

        <div className="hidden sm:block w-px h-5 bg-neutral-300" />

        <div className="flex items-center gap-4 text-neutral-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="X / Twitter"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export { About };