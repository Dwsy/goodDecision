import { useState } from 'react';
import { Zap, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface SystemFeature {
  label: string;
  system1: string;
  system2: string;
}

export function SystemsComparison() {
  const [activeSystem, setActiveSystem] = useState<'system1' | 'system2' | null>(null);

  const features: SystemFeature[] = [
    { label: 'Speed', system1: 'Fast & automatic', system2: 'Slow & deliberate' },
    { label: 'Effort', system1: 'Effortless', system2: 'Resource-intensive' },
    { label: 'Consciousness', system1: 'Unconscious', system2: 'Conscious & controlled' },
    { label: 'Examples', system1: 'Intuition, F4 (Feed/Fight/Flee)', system2: 'Logic, analysis, reasoning' },
    { label: 'Error Type', system1: 'Systematic biases', system2: 'Occasional mistakes' },
  ];

  return (
    <section id="systems" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Dual-Process Theory
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Kahneman's framework: Two systems governing human cognition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className={`bg-slate-900/50 border rounded-2xl p-8 cursor-pointer transition-all ${
                activeSystem === 'system1'
                  ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
              onMouseEnter={() => setActiveSystem('system1')}
              onMouseLeave={() => setActiveSystem(null)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-500/10 p-4 rounded-xl">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400">System 1</h3>
                  <p className="text-sm text-slate-400">Intuitive & Heuristic</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Evolved neural networks</strong> trained over millions of years
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Cognitive heuristics</strong> for quick decision-making
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Evolutionary lag</strong> creates systematic biases in modern contexts
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-400 italic">
                  "Like AlphaGo's neural network: a black box that delivers fast responses without explaining the reasoning"
                </p>
              </div>
            </div>

            <div
              className={`bg-slate-900/50 border rounded-2xl p-8 cursor-pointer transition-all ${
                activeSystem === 'system2'
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
              onMouseEnter={() => setActiveSystem('system2')}
              onMouseLeave={() => setActiveSystem(null)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan-500/10 p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">System 2</h3>
                  <p className="text-sm text-slate-400">Rational & Logical</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Deliberate reasoning</strong> with explicit logic
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Parameter tuning</strong> for System 1's outputs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>High cognitive cost</strong> limits frequent usage
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="text-sm text-slate-400 italic">
                  "Like Deep Blue's expert system: rule-based, exhaustive, but only practical for constrained domains"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">Feature Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-medium">Dimension</th>
                    <th className="text-left py-3 px-4 text-emerald-400 font-medium">System 1</th>
                    <th className="text-left py-3 px-4 text-cyan-400 font-medium">System 2</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4 font-medium">{feature.label}</td>
                      <td className="py-4 px-4 text-slate-300">{feature.system1}</td>
                      <td className="py-4 px-4 text-slate-300">{feature.system2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
