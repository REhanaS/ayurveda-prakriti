import { useState } from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Results from './components/Results';
import LifestyleGuide from './components/LifestyleGuide/LifestyleGuide';

export default function App() {
  const [page, setPage] = useState('intro');
  const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });

  const handleQuizComplete = (finalScores) => {
    setScores(finalScores);
    setPage('results');
  };

  const handleRetake = () => {
    setScores({ vata: 0, pitta: 0, kapha: 0 });
    setPage('quiz');
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {page === 'intro' && <Intro onStart={() => setPage('quiz')} />}
      {page === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {page === 'results' && (
        <Results
          scores={scores}
          onViewGuide={() => setPage('guide')}
          onRetake={handleRetake}
        />
      )}
      {page === 'guide' && (
        <LifestyleGuide scores={scores} onBack={() => setPage('results')} />
      )}
    </div>
  );
}
