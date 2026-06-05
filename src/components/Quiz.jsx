import { useState } from 'react';
import questionsData from '../data/dosha_questions.json';

const CATEGORY_LABELS = {
  physical: 'Physical Traits',
  physiological: 'Physiological Traits',
  mental: 'Mental Traits',
  behavioral: 'Behavioral Patterns',
  emotional: 'Emotional Tendencies',
};

export default function Quiz({ onComplete, onBack }) {
  const questions = questionsData.questions;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: { dosha, score } }
  const [selected, setSelected] = useState(null);

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const isLast = current === questions.length - 1;

  const handleNext = () => {
    if (!selected) return;

    const newAnswers = {
      ...answers,
      [question.id]: selected,
    };
    setAnswers(newAnswers);

    if (isLast) {
      const scores = { vata: 0, pitta: 0, kapha: 0 };
      Object.values(newAnswers).forEach(({ dosha, score }) => {
        scores[dosha] += score;
      });
      onComplete(scores);
    } else {
      const nextQ = questions[current + 1];
      setSelected(newAnswers[nextQ.id] || null);
      setCurrent(current + 1);
    }
  };

  const handleBack = () => {
    if (current === 0) {
      onBack();
      return;
    }
    const prevQ = questions[current - 1];
    setSelected(answers[prevQ.id] || null);
    setCurrent(current - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2]">
      {/* Sticky header + progress */}
      <div className="sticky top-0 z-10 bg-[#faf7f2] border-b border-[#e8dcc8]">
        <div className="max-w-xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] text-[#9c8660] font-sans uppercase tracking-widest">
              {CATEGORY_LABELS[question.category]}
            </span>
            <span className="text-[10px] text-[#9c8660] font-sans">
              {current + 1}&nbsp;/&nbsp;{questions.length}
            </span>
          </div>
          <div className="h-0.5 bg-[#e8dcc8] rounded-full overflow-hidden">
            <div
              className="h-0.5 bg-[#c0704a] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question body */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full">
          <p className="text-[#9c8660] text-xs font-sans uppercase tracking-widest mb-4">
            Question {current + 1}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#2d2418] leading-snug mb-8">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, i) => {
              const isActive = selected?.dosha === option.dosha;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(option)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-150 font-sans text-sm leading-relaxed cursor-pointer ${
                    isActive
                      ? 'border-[#c0704a] bg-[#f9ede6] text-[#2d2418]'
                      : 'border-[#e8dcc8] bg-white text-[#5c4d33] hover:border-[#d4c4a8] hover:bg-[#fdf9f5]'
                  }`}
                >
                  <span
                    className={`inline-block w-5 h-5 rounded-full border-2 mr-3 flex-shrink-0 align-middle transition-all ${
                      isActive
                        ? 'border-[#c0704a] bg-[#c0704a]'
                        : 'border-[#d4c4a8] bg-white'
                    }`}
                  />
                  {option.text}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={handleBack}
              className="px-6 py-3 rounded-full text-xs font-sans uppercase tracking-widest text-[#9c8660] border border-[#d4c4a8] hover:border-[#9c8660] transition-colors cursor-pointer"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selected}
              className="px-8 py-3 rounded-full text-xs font-sans uppercase tracking-widest bg-[#2d2418] text-[#faf7f2] hover:bg-[#5c4d33] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLast ? 'See Results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
