import { useState } from 'react';
import ritucharyaData from '../../data/ritucharya.json';
import { DOSHA_COLORS } from '../../utils/doshaUtils';

const SEASON_ICONS = {
  shishira: '❄️',
  vasanta: '🌸',
  grishma: '☀️',
  varsha: '🌧️',
  sharad: '🍂',
  hemanta: '🌾',
};

export default function RitucharyaTab({ dominant }) {
  const seasons = ritucharyaData.ritucharya.seasons;
  const [active, setActive] = useState(0);
  const color = DOSHA_COLORS[dominant];

  const season = seasons[active];
  const rec = season.recommendations[dominant];

  return (
    <div>
      {/* Season pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {seasons.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-xs font-sans transition-all cursor-pointer ${
              active === i
                ? 'text-white'
                : 'bg-white border border-[#e8dcc8] text-[#5c4d33] hover:border-[#9c8660]'
            }`}
            style={active === i ? { backgroundColor: color } : {}}
          >
            {SEASON_ICONS[s.id]} {s.name.split('(')[0].trim()}
          </button>
        ))}
      </div>

      {/* Season header */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-6 mb-6">
        <div className="flex flex-wrap gap-6 text-xs font-sans">
          <div>
            <p className="text-[#9c8660] uppercase tracking-widest mb-1">Months</p>
            <p className="text-[#2d2418]">{season.months}</p>
          </div>
          <div>
            <p className="text-[#9c8660] uppercase tracking-widest mb-1">Climate</p>
            <p className="text-[#2d2418]">{season.climate}</p>
          </div>
          <div>
            <p className="text-[#9c8660] uppercase tracking-widest mb-1">Agni</p>
            <p className="text-[#2d2418]">{season.agniStrength}</p>
          </div>
          <div>
            <p className="text-[#9c8660] uppercase tracking-widest mb-1">Watch</p>
            <p className="text-[#2d2418]">{season.dominantDosha}</p>
          </div>
        </div>
      </div>

      {rec && (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Diet', text: rec.diet },
            { label: 'Lifestyle', text: rec.lifestyle },
            { label: 'Exercise', text: rec.exercise },
            { label: 'Herbs & Spices', text: rec.herbs },
          ].map(({ label, text }) => (
            <div key={label} className="bg-white rounded-2xl border border-[#e8dcc8] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 rounded-full" style={{ backgroundColor: color }} />
                <h3 className="font-serif text-[#2d2418] text-sm">{label}</h3>
              </div>
              <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
