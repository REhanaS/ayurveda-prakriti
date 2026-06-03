const SERVICES = [
  {
    title: '60-min Prakriti Consultation',
    description:
      'A deep-dive session to understand your unique constitution, current imbalances, and personalised Ayurvedic recommendations for diet, routine, and lifestyle.',
    icon: '🌿',
  },
  {
    title: '4-Week Personalised Diet Plan',
    description:
      'A structured, dosha-specific meal plan built around your Prakriti, seasonal considerations, and health goals — with practical guidance for everyday cooking.',
    icon: '🥗',
  },
];

const CREDENTIALS = [
  {
    title: 'Holistic Ayurvedic Counselor (HAC)',
    issuer: 'Certified Ayurvedic Health Counselor Programme',
    year: '2024',
  },
];

const BIO_PARAS = [
  'My Ayurveda journey began with a curiosity about holistic health and a desire to understand wellness beyond symptoms. Through my studies, I have learned how the balance of doshas influences physical, mental, and emotional well-being. Ayurveda has taught me to be more mindful of my daily habits, food choices, routines, and the connection between prevention and long-term health.',
  'These teachings have helped me develop a deeper appreciation for the body\'s natural rhythms and the importance of addressing the root causes of imbalance. This journey has been especially meaningful during a period of personal and professional transition — Ayurveda has provided a valuable framework for self-reflection, balance, and self-care, reinforcing my belief that health is an ongoing practice rather than a fixed destination.',
];

export default function Coach({ onBack }) {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-[#faf7f2] border-b border-[#e8dcc8]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs font-sans text-[#9c8660] hover:text-[#5c4d33] transition-colors cursor-pointer"
          >
            ← Back
          </button>
          <p className="text-[10px] font-sans text-[#9c8660] uppercase tracking-widest">Meet Your Coach</p>
          <div className="w-12" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Hero card */}
        <div className="bg-white rounded-3xl border border-[#e8dcc8] overflow-hidden mb-6">
          {/* Earthy gradient banner */}
          <div className="h-24 w-full" style={{
            background: 'linear-gradient(135deg, #d4c4a8 0%, #c0a882 40%, #9c8660 100%)'
          }} />

          {/* Avatar + name */}
          <div className="px-7 pb-7">
            <div className="flex items-end gap-5 -mt-10 mb-5">
              {/* Initials avatar */}
              <div
                className="w-20 h-20 rounded-2xl border-4 border-white flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #9c8660, #5c4d33)' }}
              >
                <span className="text-white font-serif text-2xl font-medium select-none">RS</span>
              </div>
              <div className="pb-1">
                <h1 className="font-serif text-[#2d2418] text-2xl">Rehana Sheikh</h1>
                <p className="text-xs font-sans text-[#9c8660] mt-0.5 uppercase tracking-wider">
                  Holistic Ayurvedic Counselor
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-3">
              {BIO_PARAS.map((para, i) => (
                <p key={i} className="text-sm font-sans text-[#5c4d33] leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="bg-white rounded-3xl border border-[#e8dcc8] p-6 mb-6">
          <h2 className="font-serif text-[#2d2418] text-lg mb-4">Credentials</h2>
          {CREDENTIALS.map((c, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#edf3ee] border border-[#a8c9ad] flex items-center justify-center flex-shrink-0 text-base">
                🎓
              </div>
              <div className="flex-1">
                <p className="text-sm font-sans font-semibold text-[#2d2418]">{c.title}</p>
                <p className="text-xs font-sans text-[#9c8660] mt-0.5">{c.issuer} · {c.year}</p>
              </div>
              <a
                href="/ayurveda-prakriti/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[10px] font-sans uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#d4c4a8] text-[#5c4d33] hover:border-[#9c8660] hover:bg-[#f3ede0] transition-all cursor-pointer"
              >
                View ↗
              </a>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-6">
          <h2 className="font-serif text-[#2d2418] text-lg mb-4">Services</h2>
          <div className="space-y-3">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8dcc8] p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-serif text-[#2d2418] text-base mb-1">{s.title}</h3>
                  <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl border border-[#e8b49a] bg-[#fdf6f2] px-5 py-4 mb-6 flex gap-3">
          <span className="text-base flex-shrink-0 mt-0.5">⚠️</span>
          <p className="text-xs font-sans text-[#5c4d33] leading-relaxed">
            Ayurvedic counseling is a complementary wellness practice and does not replace conventional medical treatment.
            Always consult your doctor for medical concerns. The key principles are <strong>moderation</strong> and <strong>body awareness</strong>.
          </p>
        </div>

        {/* Booking CTA */}
        <div className="bg-[#2d2418] rounded-3xl p-8 text-center">
          <p className="text-[#d4c4a8] text-xs font-sans uppercase tracking-widest mb-2">Ready to begin?</p>
          <h2 className="font-serif text-white text-2xl mb-2">Book a Session</h2>
          <p className="text-[#9c8660] text-sm font-sans mb-6">
            Send an email to explore how Ayurveda can support your wellbeing journey.
          </p>
          <a
            href="mailto:rehana.s.sheikh@gmail.com?subject=Ayurveda Consultation Enquiry"
            className="inline-block bg-[#c0704a] text-white px-8 py-3 rounded-full text-xs font-sans uppercase tracking-widest hover:bg-[#a85e3d] transition-colors cursor-pointer"
          >
            Email Rehana
          </a>
          <p className="text-[#5c4d33] text-[10px] font-sans mt-4">
            rehana.s.sheikh@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
