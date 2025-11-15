import { useState } from 'react';
import { Workflow, GitBranch, RefreshCw } from 'lucide-react';

interface Framework {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  steps: { label: string; description: string }[];
  principle: string;
}

export function FrameworkSection() {
  const [activeFramework, setActiveFramework] = useState(0);

  const frameworks: Framework[] = [
    {
      id: 'calibration-loop',
      title: 'System 1-2 Calibration Loop',
      subtitle: '系统一—系统二调参闭环',
      icon: <RefreshCw className="w-6 h-6" />,
      steps: [
        { label: 'Trigger Recognition', description: 'Label potential biases as fast reactions occur' },
        { label: 'Evidence Review', description: 'Activate System 2 to verify facts, samples, alternatives' },
        { label: 'Parameter Adjustment', description: 'Set delays, thresholds, substitutes' },
        { label: 'Execution', description: 'Decide with minimum sufficient information' },
        { label: 'Retrospective', description: 'Log bias patterns and calibration effects' },
      ],
      principle: 'System 1 is not the enemy—it\'s a friend that needs fine-tuning through identify-calibrate-review cycles.',
    },
    {
      id: 'buffer-model',
      title: 'Pre-Set Buffer Model',
      subtitle: '预置缓冲模型',
      icon: <GitBranch className="w-6 h-6" />,
      steps: [
        { label: 'Variable Inventory', description: 'List desires/biases conflicting with goals' },
        { label: 'Naming & Tagging', description: 'Name each variable and log trigger scenarios' },
        { label: 'Buffer Preset', description: 'Design controlled indulgences or safety redundancies' },
        { label: 'Boundary Setting', description: 'Define non-negotiable lines (financial floor, health metrics)' },
        { label: 'Checkpoints', description: 'Schedule periodic self-audits and strategy updates' },
      ],
      principle: 'Acknowledging weakness is not failure—it\'s maturity. True freedom comes from "embracing human nature + proactive planning".',
    },
    {
      id: 'second-order',
      title: 'Second-Order Perspective Practice',
      subtitle: '二阶视角演练',
      icon: <Workflow className="w-6 h-6" />,
      steps: [
        { label: 'Daily Drills', description: 'Pause during small decisions: "What bias am I under?"' },
        { label: 'Dialogue Writing', description: 'Write reminders in "another self\'s" voice' },
        { label: 'Perspective Switch', description: 'Simulate friend/critic viewpoints on major decisions' },
        { label: 'Emotion Acceptance', description: 'Log and accept when biases still dominate' },
        { label: 'Archive Outcomes', description: 'Record intervention points, effects, lessons learned' },
      ],
      principle: 'Second-order freedom is limited but precious. Knowing the bias\'s name is the beginning of freedom.',
    },
  ];

  const current = frameworks[activeFramework];

  return (
    <section id="frameworks" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Actionable Frameworks
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Operational models to treat yourself as a variable
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {frameworks.map((framework, index) => (
              <button
                key={framework.id}
                onClick={() => setActiveFramework(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFramework === index
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                {framework.icon}
                <span className="hidden md:inline">{framework.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">{current.title}</h3>
              <p className="text-slate-400">{current.subtitle}</p>
            </div>

            <div className="space-y-6 mb-8">
              {current.steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center font-bold text-slate-950 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 text-cyan-400">{step.label}</h4>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core Principle
              </h4>
              <p className="text-slate-200 leading-relaxed italic">"{current.principle}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
