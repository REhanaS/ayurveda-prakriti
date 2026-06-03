import exerciseData from '../../data/exercise_recommendations.json';
import { DOSHA_COLORS } from '../../utils/doshaUtils';

export default function ExerciseTab({ dominant }) {
  const data = exerciseData.exerciseRecommendations[dominant];
  if (!data) return null;

  const color = DOSHA_COLORS[dominant];

  return (
    <div>
      {/* Principle banner */}
      <div
        className="rounded-2xl px-6 py-4 mb-6 border"
        style={{ backgroundColor: color + '15', borderColor: color + '40' }}
      >
        <p className="text-sm font-sans text-[#5c4d33] leading-relaxed italic">{data.principle}</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Intensity', value: data.intensity },
          { label: 'Frequency', value: data.frequency },
          { label: 'Best Time', value: data.bestTiming.split('.')[0] },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-2xl border border-[#e8dcc8] p-4 text-center">
            <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest mb-1">{label}</p>
            <p className="text-xs font-sans text-[#2d2418] leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* Capacity rule */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-1 rounded-full flex-shrink-0 mt-1 self-stretch" style={{ backgroundColor: color }} />
          <div>
            <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest mb-1">Capacity Rule</p>
            <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{data.capacityRule}</p>
          </div>
        </div>
      </div>

      {/* Recommended activities */}
      <h3 className="font-serif text-[#2d2418] text-base mb-4">Recommended Activities</h3>
      <div className="space-y-3 mb-6">
        {data.recommended.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#e8dcc8] p-5">
            <div className="flex items-baseline justify-between mb-2">
              <h4 className="font-serif text-[#2d2418] text-sm">{item.activity}</h4>
              <span
                className="text-[10px] font-sans px-2.5 py-0.5 rounded-full ml-3 flex-shrink-0"
                style={{ color, backgroundColor: color + '20', border: `1px solid ${color}40` }}
              >
                {item.frequency}
              </span>
            </div>
            <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{item.details}</p>
          </div>
        ))}
      </div>

      {/* Avoid */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-5 mb-6">
        <h3 className="font-serif text-[#2d2418] text-base mb-4">Avoid</h3>
        <div className="grid md:grid-cols-2 gap-1.5">
          {data.avoid.map((item, i) => (
            <div key={i} className="flex gap-2 text-xs font-sans text-[#5c4d33]">
              <span className="text-[#c0704a] flex-shrink-0">×</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Yoga & Pranayama */}
      {data.yogaPranayama && (
        <div className="bg-white rounded-2xl border border-[#e8dcc8] p-5">
          <h3 className="font-serif text-[#2d2418] text-base mb-4">Yoga & Pranayama</h3>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest mb-2">Recommended Asanas</p>
              <div className="flex flex-wrap gap-1.5">
                {data.yogaPranayama.asanas.map((a) => (
                  <span key={a} className="text-xs font-sans px-3 py-1 rounded-full bg-[#f3ede0] text-[#5c4d33] border border-[#e8dcc8]">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest mb-2">Pranayama</p>
              <div className="flex flex-wrap gap-1.5">
                {data.yogaPranayama.pranayama.map((p) => (
                  <span key={p} className="text-xs font-sans px-3 py-1 rounded-full bg-[#f3ede0] text-[#5c4d33] border border-[#e8dcc8]">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            {data.yogaPranayama.avoid && (
              <div>
                <p className="text-[10px] font-sans text-[#c0704a] uppercase tracking-widest mb-2">Avoid</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.yogaPranayama.avoid.map((a) => (
                    <span key={a} className="text-xs font-sans px-3 py-1 rounded-full bg-[#f9ede6] text-[#7a3a1e] border border-[#e8b49a]">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
