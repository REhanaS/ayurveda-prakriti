import { useState } from 'react';
import { calculatePrakriti, DOSHA_COLORS } from '../../utils/doshaUtils';
import DincharyaTab from './DincharyaTab';
import RitucharyaTab from './RitucharyaTab';
import DietTab from './DietTab';
import ExerciseTab from './ExerciseTab';

const TABS = [
  { id: 'dincharya', label: 'Daily Routine', sub: 'Dincharya' },
  { id: 'ritucharya', label: 'Seasonal', sub: 'Ritucharya' },
  { id: 'diet', label: 'Diet', sub: 'Ahara' },
  { id: 'exercise', label: 'Exercise', sub: 'Vyayama' },
];

const DOSHA_LABELS = { vata: 'Vata', pitta: 'Pitta', kapha: 'Kapha' };

export default function LifestyleGuide({ scores, onBack }) {
  const [activeTab, setActiveTab] = useState('dincharya');
  const prakriti = calculatePrakriti(scores);
  if (!prakriti) return null;

  const { dominant, dual, type, percentages } = prakriti;
  const color = DOSHA_COLORS[dominant];

  const prakritiLabel =
    type === 'tridoshic'
      ? 'Tridoshic'
      : type === 'dual'
      ? `${DOSHA_LABELS[dominant]}-${DOSHA_LABELS[dual]}`
      : DOSHA_LABELS[dominant];

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-[#faf7f2] border-b border-[#e8dcc8]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs font-sans text-[#9c8660] hover:text-[#5c4d33] transition-colors cursor-pointer"
          >
            ← Results
          </button>
          <div className="text-center">
            <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest">Lifestyle Guide</p>
            <p className="font-serif text-[#2d2418] text-sm">{prakritiLabel}</p>
          </div>
          <div className="flex gap-1">
            {Object.entries(percentages)
              .sort((a, b) => b[1] - a[1])
              .map(([d, pct]) => (
                <div
                  key={d}
                  title={`${DOSHA_LABELS[d]}: ${pct}%`}
                  className="w-5 h-5 rounded-full border-2 border-white"
                  style={{ backgroundColor: DOSHA_COLORS[d], opacity: pct / 100 + 0.3 }}
                />
              ))}
          </div>
        </div>

        {/* Tab bar */}
        <div className="max-w-2xl mx-auto px-6 pb-0 flex gap-0 border-t border-[#e8dcc8]">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-center transition-all cursor-pointer border-b-2 ${
                activeTab === tab.id
                  ? 'border-current'
                  : 'border-transparent text-[#9c8660] hover:text-[#5c4d33]'
              }`}
              style={activeTab === tab.id ? { color, borderColor: color } : {}}
            >
              <p className="text-[10px] font-sans font-medium uppercase tracking-widest">
                {tab.label}
              </p>
              <p className="text-[9px] font-sans text-[#9c8660] italic hidden sm:block">
                {tab.sub}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {type === 'dual' && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-white border border-[#e8dcc8] text-xs font-sans text-[#9c8660]">
            Showing recommendations for your primary dosha <strong className="text-[#2d2418]">{DOSHA_LABELS[dominant]}</strong>.
            Your secondary dosha is <strong className="text-[#2d2418]">{DOSHA_LABELS[dual]}</strong> — refer to its guide for supplementary practices.
          </div>
        )}

        {activeTab === 'dincharya' && <DincharyaTab dominant={dominant} />}
        {activeTab === 'ritucharya' && <RitucharyaTab dominant={dominant} />}
        {activeTab === 'diet' && <DietTab dominant={dominant} />}
        {activeTab === 'exercise' && <ExerciseTab dominant={dominant} />}
      </div>
    </div>
  );
}
