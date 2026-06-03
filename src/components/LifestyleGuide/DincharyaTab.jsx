import dincharyaData from '../../data/dincharya.json';
import { DOSHA_COLORS } from '../../utils/doshaUtils';

export default function DincharyaTab({ dominant }) {
  const data = dincharyaData.dincharya[dominant];
  if (!data) return null;

  const color = DOSHA_COLORS[dominant];

  return (
    <div>
      <div
        className="rounded-2xl px-6 py-4 mb-8 border"
        style={{ backgroundColor: color + '15', borderColor: color + '40' }}
      >
        <p className="text-sm font-sans text-[#5c4d33] italic">{data.theme}</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[60px] top-0 bottom-0 w-px"
          style={{ backgroundColor: color + '30' }}
        />

        <div className="space-y-6">
          {data.routine.map((item, i) => (
            <div key={i} className="flex gap-6 relative">
              {/* Time */}
              <div className="w-[52px] flex-shrink-0 text-right">
                <span className="text-[10px] font-sans text-[#9c8660] leading-none">{item.time}</span>
              </div>

              {/* Dot */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-3 h-3 rounded-full mt-1 border-2 bg-[#faf7f2]"
                  style={{ borderColor: color }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-serif text-[#2d2418] text-base">{item.activity}</h3>
                  {item.duration && (
                    <span className="text-[10px] font-sans text-[#9c8660] bg-[#f3ede0] px-2 py-0.5 rounded-full border border-[#e8dcc8]">
                      {item.duration}
                    </span>
                  )}
                </div>
                <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
