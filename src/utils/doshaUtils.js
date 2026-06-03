export const DOSHA_COLORS = {
  vata: '#7c9eb2',
  pitta: '#c0704a',
  kapha: '#6b8f71',
};

export const DOSHA_BG = {
  vata: '#eef4f8',
  pitta: '#f9ede6',
  kapha: '#edf3ee',
};

export const DOSHA_BORDER = {
  vata: '#b8d0dc',
  pitta: '#e8b49a',
  kapha: '#a8c9ad',
};

export function calculatePrakriti(scores) {
  const total = scores.vata + scores.pitta + scores.kapha;
  if (total === 0) return null;

  const raw = {
    vata: (scores.vata / total) * 100,
    pitta: (scores.pitta / total) * 100,
    kapha: (scores.kapha / total) * 100,
  };

  const percentages = {
    vata: Math.round(raw.vata),
    pitta: Math.round(raw.pitta),
    kapha: 100 - Math.round(raw.vata) - Math.round(raw.pitta),
  };

  const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const [first, second, third] = sorted;

  if (first[1] - third[1] <= 10) {
    return { type: 'tridoshic', dominant: 'vata', dual: null, prakriti: 'tridoshic', percentages };
  }

  if (first[1] - second[1] <= 15) {
    return {
      type: 'dual',
      dominant: first[0],
      dual: second[0],
      prakriti: `${first[0]}-${second[0]}`,
      percentages,
    };
  }

  return {
    type: 'single',
    dominant: first[0],
    dual: null,
    prakriti: first[0],
    percentages,
  };
}
