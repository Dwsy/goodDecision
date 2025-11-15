import { useState } from 'react';
import { AlertTriangle, TrendingUp, Users, Anchor, Eye, DollarSign } from 'lucide-react';

interface Bias {
  id: string;
  name: string;
  nameZh: string;
  icon: React.ReactNode;
  description: string;
  example: string;
  color: string;
}

export function BiasExplorer() {
  const [selectedBias, setSelectedBias] = useState<string | null>(null);

  const biases: Bias[] = [
    {
      id: 'availability',
      name: 'Availability Heuristic',
      nameZh: '易得性启发',
      icon: <Eye className="w-6 h-6" />,
      description: 'Judging probability by how easily examples come to mind. Media coverage of plane crashes makes us overestimate their frequency.',
      example: 'Fearing flights while ignoring car accidents (8th leading cause of death globally)',
      color: 'emerald',
    },
    {
      id: 'confirmation',
      name: 'Confirmation Bias',
      nameZh: '确认偏误',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Seeking information that confirms pre-existing beliefs while ignoring contradictory evidence.',
      example: 'Only reading news sources that align with your political views',
      color: 'cyan',
    },
    {
      id: 'bandwagon',
      name: 'Bandwagon Effect',
      nameZh: '从众效应',
      icon: <Users className="w-6 h-6" />,
      description: 'Following the crowd to reduce cognitive load. Evolutionarily adaptive but can lead to groupthink.',
      example: 'Choosing a restaurant because it has a long queue, assuming popularity equals quality',
      color: 'blue',
    },
    {
      id: 'anchoring',
      name: 'Anchoring Effect',
      nameZh: '锚定效应',
      icon: <Anchor className="w-6 h-6" />,
      description: 'Over-relying on the first piece of information offered when making decisions.',
      example: 'A $100 item seems cheap after seeing a $200 original price tag',
      color: 'violet',
    },
    {
      id: 'sunk-cost',
      name: 'Sunk Cost Fallacy',
      nameZh: '沉没成本谬误',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'Continuing an endeavor because of previously invested resources, despite current costs outweighing benefits.',
      example: 'Staying in a bad relationship because "we\'ve been together for so long"',
      color: 'amber',
    },
    {
      id: 'self-serving',
      name: 'Self-Serving Bias',
      nameZh: '自利性偏误',
      icon: <AlertTriangle className="w-6 h-6" />,
      description: 'Attributing successes to internal factors and failures to external factors.',
      example: 'Popular video: "I explained it well." Unpopular: "The audience isn\'t sophisticated enough."',
      color: 'red',
    },
  ];

  const selected = biases.find((b) => b.id === selectedBias);

  return (
    <section id="biases" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
                Cognitive Biases
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Systematic errors born from heuristics in modern environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {biases.map((bias) => (
              <button
                key={bias.id}
                onClick={() => setSelectedBias(selectedBias === bias.id ? null : bias.id)}
                className={`bg-slate-900/50 border rounded-xl p-6 text-left transition-all hover:scale-105 ${
                  selectedBias === bias.id
                    ? `border-${bias.color}-500 shadow-lg shadow-${bias.color}-500/20`
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`bg-${bias.color}-500/10 p-3 rounded-lg w-fit mb-4 text-${bias.color}-400`}>
                  {bias.icon}
                </div>
                <h3 className="font-semibold mb-1">{bias.name}</h3>
                <p className="text-sm text-slate-400">{bias.nameZh}</p>
              </button>
            ))}
          </div>

          {selected && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 animate-fadeIn">
              <div className="flex items-start gap-4 mb-6">
                <div className={`bg-${selected.color}-500/10 p-4 rounded-xl text-${selected.color}-400`}>
                  {selected.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{selected.name}</h3>
                  <p className="text-slate-400">{selected.nameZh}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Description
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selected.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Real-World Example
                  </h4>
                  <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-slate-300 italic">{selected.example}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400">
                    <strong className="text-emerald-400">Mitigation Strategy:</strong> Label and name the bias when you catch it.
                    Use System 2 to question your initial reaction. Set up external checkpoints and second opinions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
