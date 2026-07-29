export default function Library() {
  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-medium text-neutral-900 mb-2">Library & Stack</h1>
      <p className="text-sm font-mono text-neutral-500 mb-8">
        Curated tools, frameworks, and foundational reading list.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-xl border border-neutral-200/80">
          <h4 className="font-medium text-neutral-900 text-sm">Core Stack</h4>
          <p className="text-xs text-neutral-500 font-mono mt-1">PyTorch, vLLM, LangGraph, FastAPI, Docker</p>
        </div>
      </div>
    </div>
  );
}