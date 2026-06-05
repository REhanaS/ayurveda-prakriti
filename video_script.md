# Video Script — Ayurveda Prakriti App
**Target: 5 minutes | ~650 words | Comfortable speaking pace**

---

## OPENING — 0:00 to 0:30
*[Screen: Live app at https://rehanas.github.io/ayurveda-prakriti/ — Intro page visible]*

Hi, I'm Rehana Sheikh. For Week 1 of Vibe Coding, I built an **Ayurveda Prakriti Assessment app** — a tool that helps you discover your unique mind-body constitution according to Ayurveda, and gives you a fully personalised lifestyle guide based on your results.

I chose Ayurveda because I've been studying it alongside my technical work, and I wanted to build something that sits at the intersection of both worlds — data, design, and holistic wellness.

---

## WHAT I BUILT — 0:30 to 1:00
*[Stay on Intro page — point to the three dosha cards]*

In Ayurveda, every person is a unique combination of three biological energies — **Vata**, **Pitta**, and **Kapha**. Your dominant combination, called your Prakriti, shapes everything from your digestion to how you handle stress.

This app walks you through **35 questions**, calculates your dosha breakdown, shows you a percentage chart, and then generates a complete lifestyle guide — covering your daily routine, seasonal adjustments, diet, and exercise — all rooted in classical Ayurvedic texts.

It's built with **React, Tailwind CSS, and Recharts**, deployed on GitHub Pages, and all the Ayurvedic content lives in structured JSON files that I prepared beforehand.

---

## LIVE DEMO — 1:00 to 3:30

### The Quiz — 1:00 to 1:45
*[Click "Begin Assessment" — show the quiz]*

The quiz opens with a progress bar and category label at the top. Each question has three options — one for each dosha. I'll answer a few quickly so you can see how it flows.

*[Answer 5–6 questions at a natural pace — body frame, skin, digestion, memory, stress response]*

You can go back and change answers at any time. Once you've answered all 35, you hit "See Results."

### Results Page — 1:45 to 2:30
*[Complete the quiz or navigate to a pre-filled results page]*

The results page shows your **Prakriti type** — in my case, let's say Vata-Pitta — with a donut chart breaking down the percentages for each dosha.

Below that you get your physical and mental traits, what balance looks like for you, early signs of imbalance to watch for, and your dosha's elemental qualities.

*[Scroll through the results page slowly]*

From here, you have three options — view the full lifestyle guide, meet the coach, or retake the assessment.

### Lifestyle Guide — 2:30 to 3:15
*[Click "View Lifestyle Guide" — show the tabs]*

The lifestyle guide has four tabs.

**Daily Routine** — a full Dincharya timeline from wake time through to bedtime, with Ayurvedic practices like oil pulling, abhyanga, and meal timing specific to your dosha.

*[Click Seasonal tab]*

**Seasonal** — Ritucharya recommendations across all six Ayurvedic seasons. You pick the season you're in and get diet, lifestyle, exercise, and herb guidance.

*[Click Diet tab — show food categories]*

**Diet** — broken down by food category. You can see what to favour and what to avoid for your constitution. Grains, vegetables, fruits, spices — all covered.

*[Click Exercise tab]*

**Exercise** — activity recommendations, yoga asanas, pranayama, and a capacity rule so you know when to stop.

Notice the **warning banner at the top** — this was intentional. Before starting any herbal practice, always consult a qualified Ayurvedic practitioner. Moderation and body awareness are the foundation.

*[Click the ↓ PDF button]*

And you can **download the entire guide as a PDF** — a formatted five-page document you can save and refer back to.

### Coach Page — 3:15 to 3:30
*[Click "Coach" button in the header]*

The app also has a **Meet Coach page** — this is where I introduce myself, share my background in Ayurveda, my HAC certification, the services I offer, and a direct way to get in touch.

---

## HOW I USED AI — 3:30 to 4:30
*[Switch to screen showing the project folder / VS Code or just talk to camera]*

I built this entirely using **Claude Code** — Anthropic's AI coding tool — in a single session.

Here's how the workflow went:

I started with one detailed prompt describing the full feature set. Claude proposed a project structure and asked for my confirmation before every single step — scaffolding, Tailwind setup, moving files, building each component.

I didn't write a single line of code manually. But I also wasn't just pressing yes repeatedly. I was making real decisions — which deployment platform to use, what content to put on the coach page, whether to use Calendly or email for bookings, when to stop the AI from deleting files I wanted to keep.

The AI hit real obstacles — Vite wouldn't scaffold into a non-empty folder, GitHub authentication failed twice before we found the right path. Each time, Claude explained the problem clearly and offered options. I chose the path. That back-and-forth felt genuinely collaborative.

What I found most valuable: **the AI reads your data before writing code**. Claude read all six JSON files before building a single component, which meant the components matched the data structure perfectly from the start.

---

## CLOSING — 4:30 to 5:00
*[Back to live app — Intro page]*

What I took away from this week: vibe coding isn't about removing yourself from the process — it's about changing what you focus on. I spent my energy on content, product decisions, and design direction. The AI handled the implementation.

For someone like me who is at the intersection of data engineering and wellness, this workflow made it possible to build something I'm genuinely proud of in a single afternoon.

The app is live. The link is in the project notes. Try the quiz — you might learn something about yourself.

Thank you.

---

## SPEAKER NOTES

- **Pace:** Speak slowly and clearly. 650 words at a relaxed pace = ~5 minutes. Pause after each section.
- **Screen transitions:** Have the app open in a browser tab before you start recording. Pre-fill quiz answers for the demo so you're not answering all 35 live.
- **For the results demo:** Either complete the quiz live (fast answers) or open a second browser tab with a bookmarked results state.
- **Camera:** Face camera during the "How I used AI" section — it's the most personal part and lands better without a screen behind you.
- **One-liner summary** if asked to introduce the project in 10 seconds: *"An Ayurveda dosha assessment app that gives you a personalised lifestyle guide — built with React and AI coding tools in one afternoon."*
