import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-md">
        <Sparkles className="w-12 h-12 text-amber-400 mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Tailwind v4 Ready!
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          React + Tailwind CSS v4 setup is successful. Ready to start building your portfolio.
        </p>
      </div>
    </div>
  );
}