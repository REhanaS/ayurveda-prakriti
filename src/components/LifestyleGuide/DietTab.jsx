import { useState } from 'react';
import dietData from '../../data/diet_recommendations.json';
import { DOSHA_COLORS } from '../../utils/doshaUtils';

const CATEGORY_LABELS = {
  grains: 'Grains',
  legumes: 'Legumes',
  vegetables: 'Vegetables',
  fruits: 'Fruits',
  dairy: 'Dairy',
  oils: 'Oils & Fats',
  sweeteners: 'Sweeteners',
  nuts: 'Nuts & Seeds',
  spices: 'Spices',
  meats: 'Meats',
  beverages: 'Beverages',
};

export default function DietTab({ dominant }) {
  const data = dietData.dietRecommendations[dominant];
  if (!data) return null;

  const color = DOSHA_COLORS[dominant];
  const categories = Object.keys(data.foodCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const catData = data.foodCategories[activeCategory];

  return (
    <div>
      {/* General principles */}
      <div
        className="rounded-2xl px-6 py-4 mb-6 border"
        style={{ backgroundColor: color + '15', borderColor: color + '40' }}
      >
        <p className="text-sm font-sans text-[#5c4d33] leading-relaxed">{data.generalPrinciples}</p>
      </div>

      {/* Tastes */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-5 mb-6">
        <h3 className="font-serif text-[#2d2418] text-base mb-4">Tastes (Rasa)</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-sans text-[#6b8f71] uppercase tracking-widest mb-2">Favour</p>
            <div className="flex flex-wrap gap-1.5">
              {data.tastes.favor.map((t) => (
                <span key={t} className="text-xs font-sans px-3 py-1 rounded-full bg-[#edf3ee] text-[#3d5e42] border border-[#a8c9ad]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-sans text-[#c0704a] uppercase tracking-widest mb-2">Reduce</p>
            <div className="flex flex-wrap gap-1.5">
              {data.tastes.reduce.map((t) => (
                <span key={t} className="text-xs font-sans px-3 py-1 rounded-full bg-[#f9ede6] text-[#7a3a1e] border border-[#e8b49a]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meal guidelines */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-5 mb-6">
        <h3 className="font-serif text-[#2d2418] text-base mb-4">Meal Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {Object.entries(data.mealGuidelines).map(([meal, desc]) => (
            <div key={meal} className="flex gap-3">
              <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: color, minHeight: '16px' }} />
              <div>
                <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest mb-0.5 capitalize">{meal}</p>
                <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food categories */}
      <div className="bg-white rounded-2xl border border-[#e8dcc8] overflow-hidden">
        <div className="border-b border-[#e8dcc8] px-5 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-sans uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'text-white'
                  : 'bg-[#f3ede0] text-[#5c4d33] hover:bg-[#e8dcc8]'
              }`}
              style={activeCategory === cat ? { backgroundColor: color } : {}}
            >
              {CATEGORY_LABELS[cat] || cat}
            </button>
          ))}
        </div>

        {catData && (
          <div className="grid grid-cols-2 gap-0 divide-x divide-[#e8dcc8]">
            <div className="p-5">
              <p className="text-[10px] font-sans text-[#6b8f71] uppercase tracking-widest mb-3">Favour</p>
              <ul className="space-y-1.5">
                {catData.favor?.map((item) => (
                  <li key={item} className="text-xs font-sans text-[#5c4d33] flex gap-2">
                    <span className="text-[#6b8f71] mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-sans text-[#c0704a] uppercase tracking-widest mb-3">Avoid</p>
              <ul className="space-y-1.5">
                {catData.avoid?.map((item) => (
                  <li key={item} className="text-xs font-sans text-[#5c4d33] flex gap-2">
                    <span className="text-[#c0704a] mt-0.5">×</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
