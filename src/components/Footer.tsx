import { BookOpen, Github, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-md py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  好的决策
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Treating yourself as a variable. A practical guide to metacognition,
                cognitive biases, and better decision-making in modern environments.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Key Concepts</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Evolutionary Lag & Heuristics</li>
                <li>• System 1 vs System 2</li>
                <li>• Cognitive Biases Catalog</li>
                <li>• Metacognition Practice</li>
                <li>• Freedom as Self-Calibration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Philosophers Referenced</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Daniel Kahneman (Thinking, Fast and Slow)</li>
                <li>• Gerd Gigerenzer (Simple Heuristics)</li>
                <li>• Immanuel Kant (Autonomy)</li>
                <li>• Baruch Spinoza (Necessity)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              Based on the book by <strong className="text-slate-400">大问题 Dialectic</strong>
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.youtube.com/channel/UCC9X5bLhdMeLvPxlMb-GShw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-600">
              "Freedom is not the absence of constraints, but the recognition of necessity and the capacity to calibrate our responses."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
