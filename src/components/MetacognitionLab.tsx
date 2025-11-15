import { useState } from 'react';
import { Brain, Play, RotateCcw } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  system1Response: string;
  system2Questions: string[];
  biasesInvolved: string[];
}

export function MetacognitionLab() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showSystem2, setShowSystem2] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const scenarios: Scenario[] = [
    {
      id: 'food-choice',
      title: 'The Late-Night Snack',
      description: 'It\'s 11 PM. You\'re working on a bug. A food delivery app notification pops up: "30% off on your favorite burger."',
      system1Response: 'Instant craving triggered. Finger hovering over "Order Now." You\'re thinking: "I deserve this after debugging all day."',
      system2Questions: [
        'Am I actually hungry, or just stressed/bored?',
        'Is this the 3rd late-night meal this week?',
        'What are my health goals? Does this align?',
        'Could I delay this decision by 10 minutes and drink water first?',
      ],
      biasesInvolved: ['Availability Heuristic', 'Present Bias', 'Self-Serving Bias'],
    },
    {
      id: 'tech-investment',
      title: 'The Shiny Framework',
      description: 'Your Twitter feed is full of devs praising a new JS framework. "Everyone\'s migrating!" Your current stack works fine.',
      system1Response: 'FOMO activated. Thinking: "Am I falling behind? Should I rewrite everything?" You open the docs.',
      system2Questions: [
        'What specific problem does this solve that my current stack doesn\'t?',
        'What\'s the cost of migration (time, bugs, team learning)?',
        'Am I following the crowd because of actual benefits or social proof?',
        'Can I prototype in a side project first before committing?',
      ],
      biasesInvolved: ['Bandwagon Effect', 'Sunk Cost Fallacy (if you migrate)', 'Availability Heuristic'],
    },
    {
      id: 'salary-negotiation',
      title: 'The Job Offer',
      description: 'A recruiter offers $120K for a new role. You currently make $100K. Your initial thought: "That\'s a 20% raise!"',
      system1Response: 'Anchored on your current salary. The offer feels generous. Ready to accept.',
      system2Questions: [
        'What\'s the market rate for this role and my experience level?',
        'Am I anchoring on my current salary instead of my value?',
        'What\'s the total compensation (equity, benefits, remote flexibility)?',
        'Should I counter-offer or request time to evaluate?',
      ],
      biasesInvolved: ['Anchoring Effect', 'Confirmation Bias', 'Endowment Effect'],
    },
  ];

  const current = scenarios[currentScenario];

  const handleNext = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
    setShowSystem2(false);
    setAnswers({});
  };

  const handleReset = () => {
    setShowSystem2(false);
    setAnswers({});
  };

  return (
    <section id="lab" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Metacognition Lab
                </span>
              </h2>
            </div>
            <p className="text-xl text-slate-400">
              Interactive scenarios to practice System 2 intervention
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 border-b border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">{current.title}</h3>
                <span className="text-sm text-slate-400">
                  Scenario {currentScenario + 1} / {scenarios.length}
                </span>
              </div>
              <p className="text-slate-300">{current.description}</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    System 1 Response (Automatic)
                  </span>
                </div>
                <p className="text-slate-200 leading-relaxed">{current.system1Response}</p>
              </div>

              {!showSystem2 ? (
                <button
                  onClick={() => setShowSystem2(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Activate System 2
                </button>
              ) : (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                        System 2 Questions (Deliberate)
                      </span>
                    </div>
                    <div className="space-y-4">
                      {current.system2Questions.map((question, index) => (
                        <div key={index} className="space-y-2">
                          <p className="text-slate-200 font-medium">{question}</p>
                          <textarea
                            value={answers[index] || ''}
                            onChange={(e) => setAnswers({ ...answers, [index]: e.target.value })}
                            placeholder="Your reflection..."
                            className="w-full bg-slate-950/50 border border-slate-700 rounded-lg p-3 text-slate-300 placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
                            rows={2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Biases Detected
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {current.biasesInvolved.map((bias) => (
                        <span
                          key={bias}
                          className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-sm"
                        >
                          {bias}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-all"
                    >
                      Next Scenario
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
