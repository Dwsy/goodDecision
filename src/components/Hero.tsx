import { Brain, Zap, Target } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-slate-950 to-cyan-950/20" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 text-sm font-medium text-emerald-400">
              Cognitive Science × Decision Making
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              好的决策
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-slate-400">
              把自己当作变量
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We are products of evolution. Our intuition and cognitive heuristics, shaped by millions of years of natural selection,
            often fail in modern environments. True freedom lies in calibrating System 1 with System 2.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all group">
              <Brain className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Evolutionary Lag</h3>
              <p className="text-sm text-slate-400">
                Our neural networks still run on ancient code, mismatched with modern complexity
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
              <Zap className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Cognitive Biases</h3>
              <p className="text-sm text-slate-400">
                Systematic errors born from heuristics: availability, confirmation, anchoring...
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
              <Target className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Parameter Tuning</h3>
              <p className="text-sm text-slate-400">
                Become your own "parameter adjuster" through metacognition and deliberate practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
