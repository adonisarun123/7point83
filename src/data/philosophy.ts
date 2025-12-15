export type PillarSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type PillarFAQ = {
  question: string;
  answer: string;
};

export type PillarDetail = {
  slug: string;
  title: string;
  heroTagline: string;
  summary: string;
  dailyRitual: string;
  heroBadge: string;
  rituals: string;
  sections: PillarSection[];
  takeaway: string;
  tools: string[];
  schedule: string[];
  faqs: PillarFAQ[];
};

const pillars: PillarDetail[] = [
  {
    slug: "yoga",
    title: "Yoga + Mobility",
    heroTagline: "Joint-friendly movement that honors posture and breath.",
    summary:
      "We combine layered sequencing, posture hygiene, and mobility resets so you build strength without strain and stay grounded in every chapter of the retreat.",
    dailyRitual: "Daily asana labs, morning mobility circles, and evening restorative practices.",
    heroBadge: "Posture · Presence",
    rituals:
      "Each morning begins with breath-to-movement transitions, flows that awaken the spine, and quiet reflections on alignment before breakfast.",
    sections: [
      {
        title: "Practice tone",
        text:
          "Our teachers guide small groups through accessible hatha, yin, and slow flow, layering breath cues with conscious alignment so every guest can dial intensity up or down.",
        bullets: [
          "Joint-friendly sequencing for tired bodies",
          "Posture prep with bandha + breath integration",
          "Micro-routines you can carry into city life",
        ],
      },
      {
        title: "Mobility lab",
        text:
          "Micro-movements and proprioception drills keep shoulders, hips, and spines mobile so you bring calm into city posture.",
      },
      {
        title: "Tool kit",
        text: "Eco-friendly props keep alignment clear without cluttering the mat.",
        bullets: ["Cork block + strap", "Mobility band flows", "Breath-first alignment cards"],
      },
      {
        title: "Integration",
        text:
          "Guests receive a print + digital mobility map with short video cues so the practice continues after the retreat.",
      },
    ],
    takeaway: "Movement that restores freedom, posture, and calm in a grounded, intentional space.",
    tools: ["Cork block", "Breath cue cards", "Mobility bands"],
    schedule: [
      "06:00 – Breath + spinal wake-up",
      "08:00 – Mobility-focused flow before breakfast",
      "12:00 – Posture lab with bands",
      "19:00 – Restorative evening practice",
    ],
    faqs: [
      {
        question: "Is flexibility required?",
        answer: "No. We emphasize joint prep, breath, and alignment over touches-to-toes so everyone moves safely.",
      },
      {
        question: "Can I keep my own practice?",
        answer: "We love supporting your routine—our cues are designed for you to layer into whatever you already do.",
      },
      {
        question: "Will I get a at-home routine?",
        answer: "Yes, we send home a short mobility sequence plus breath reminders to keep posture upright.",
      },
    ],
  },
  {
    slug: "breath",
    title: "Meditation + Breathwork",
    heroTagline: "Attention training for clarity, calm, and presence.",
    summary:
      "Sound tools, guided focus, and mindful pauses settle the nervous system. Sessions move from collected breath to HRV practices aligned with nature’s tempo.",
    dailyRitual: "Guided meditations, breath labs, sound baths, and micro-silence rehearsals.",
    heroBadge: "Attention · Calm",
    rituals:
      "Mornings open with breath journaling and grounding meditation, while evenings close with sound, slow exhale work, and integration circles.",
    sections: [
      {
        title: "Opener ritual",
        text:
          "We pair a light pranayama sequence, soft acoustic elements, and journaling prompts that bring awareness to the ribs, lungs, and diaphragm.",
      },
      {
        title: "Midday focus",
        text:
          "Attention training uses breath counting, gentle mantra, and nature-inspired sound to help you sustain calm.",
        bullets: ["Guided body scans", "Forest meditative walks", "Breath awareness drills"],
      },
      {
        title: "Digital pause",
        text:
          "Participants leave devices behind and pair walking loops with recorded breath cues to simulate the forest stillness.",
      },
      {
        title: "Closing",
        text: "A slow pranayama + sound bath at dusk quiets reactivity and anchors you back home.",
      },
    ],
    takeaway: "A daily habit kit that teaches you to breathe with intention and hold presence anywhere.",
    tools: ["Sound bowls", "Feather-light mala", "Breath pacing journal"],
    schedule: [
      "06:15 – Breath journaling + 3:1 pranayama",
      "09:00 – Nature attention walk",
      "14:00 – Micro-meditation + HRV awareness",
      "20:00 – Sound bath with long exhale",
    ],
    faqs: [
      {
        question: "Is this safe for anxiety?",
        answer: "Yes. Every breath session is paced gently and options to rest are openly offered.",
      },
      {
        question: "Can I keep meditating once I leave?",
        answer: "We provide short audio cues and journaling ideas to keep the practice alive.",
      },
      {
        question: "Do I need silence experience?",
        answer: "No. We scale the stillness so even beginners feel welcomed.",
      },
    ],
  },
  {
    slug: "strength",
    title: "Strength & Conditioning",
    heroTagline: "Safe progressions that rebuild confidence and everyday resilience.",
    summary:
      "Strength sessions center on posture, breath, and muscle balance. We teach you how to load safely, track alignment, and protect the joints.",
    dailyRitual: "Circuit blocks, breath-driven tempo sets, posture reviews, and recovery sequences.",
    heroBadge: "Stability · Power",
    rituals: "Strength work follows the morning mobility class so you feel grounded before adding load.",
    sections: [
      {
        title: "Posture intelligence",
        text: "We screen posture, teach bracing, and pair breath with every lift so shoulders, hips, and core move in sync.",
      },
      {
        title: "Circuit format",
        text:
          "Time-based circuits balance strength + conditioning using bands, sandbags, and bodyweight. Every station includes breath cues.",
        bullets: ["Posture-first coaching", "Mobility-strength mashups", "Recovery cooldowns"],
      },
      {
        title: "Recovery",
        text: "Foam rolling, breath resets, and slow lanes after each block keep the nervous system calm.",
      },
      {
        title: "Strength cues",
        text: "Video cues support your home practice so you can check form whenever you train again.",
      },
    ],
    takeaway: "Build strength that feels gentle, precise, and mindful—the opposite of brute force.",
    tools: ["Sandbag + pin-loaded band", "Neutral spine meter", "Tempo metronome"],
    schedule: [
      "07:00 – Posture screen + breath bracing",
      "10:00 – Holistic circuit",
      "16:00 – Conditioning + grounding",
      "19:00 – Recovery protocol",
    ],
    faqs: [
      {
        question: "Will this replace my gym program?",
        answer: "No, it complements it. We focus on mobility, stability, and controlled load before you return to high-volume work.",
      },
      {
        question: "Is it OK with injuries?",
        answer: "Yes. Every block is modifiable and we coach around your limitations.",
      },
      {
        question: "Do you track progress?",
        answer: "We record alignment + tension relief markers so you feel safer each day.",
      },
    ],
  },
  {
    slug: "therapies",
    title: "Traditional Therapies",
    heroTagline: "Ayurvedic rituals delivered by seasoned practitioners.",
    summary:
      "From Abhyanga to steam, we deliver rituals that calm the nervous system and amplify rest. Treatments get tailored to your constitution and energy load.",
    dailyRitual: "Massage, steam, oil therapies, herbal compresses, and cooling routines.",
    heroBadge: "Rest · Restore",
    rituals: "Therapy days focus on slow mornings, grounded meals, and long rest + circulation.",
    sections: [
      {
        title: "Therapy cadence",
        text: "We plan therapies alongside breath + movement so heat and release feel restorative.",
      },
      {
        title: "Recovery rituals",
        text: "Post-therapy we serve herbal teas, quiet rooms, and breathing cues to integrate the release.",
      },
      {
        title: "Therapist conversation",
        text: "Intake + coaching share how to continue the relief at home.",
      },
      {
        title: "Aftercare plan",
        text: "Herbal infusions + micro breath cues protect the nervous system after massage or steam.",
      },
    ],
    takeaway: "Therapies that meet modern bodies with nourishing, traditional practices.",
    tools: ["Herbal ghee", "Steam rituals", "Essential oil kits"],
    schedule: [
      "08:30 – Oil massage + breath sync",
      "12:00 – Steam + herbal compress",
      "15:30 – Self-massage + sound rest",
      "20:00 – Cooling ritual + tea",
    ],
    faqs: [
      {
        question: "Are therapies safe for first-timers?",
        answer: "Yes. Every guest completes a health form and we recommend protocols gently.",
      },
      {
        question: "Can I skip a therapy?",
        answer: "Absolutely—we replace it with a restorative movement or breath block.",
      },
      {
        question: "Do Ayurveda consultations happen?",
        answer: "Short pulses help us understand your dosha so the rest of the program aligns.",
      },
    ],
  },
  {
    slug: "nature",
    title: "Nature Immersion",
    heroTagline: "Daily stillness and movement in forests, rivers, and hills.",
    summary:
      "Nature anchors every experience. Guided walks, river sits, bird watching, and quiet journaling calm the senses and reset circadian rhythms.",
    dailyRitual: "Sunrise walks, grounding circuits, silent treks, and restorative river dips.",
    heroBadge: "Forest · River",
    rituals:
      "We pair gentle movement with meditative sits so your senses settle in silence and grounding.",
    sections: [
      {
        title: "Grounding",
        text:
          "Each morning features barefoot walks and forest stretching that reconnect you to soil and breath.",
        bullets: ["Barefoot grounding", "Forest-focused breathing", "Sound walks"],
      },
      {
        title: "Immersion",
        text: "Afternoons are reserved for slow hikes, river rituals, and solitude so the senses settle.",
      },
      {
        title: "Reflection",
        text: "Journaling, community circles, and sunset breathwork help integrate the stillness.",
      },
      {
        title: "Digital pause",
        text: "We leave devices behind and share audio cues that pair walking loops with breath practice.",
      },
    ],
    takeaway: "The forest becomes your co-facilitator, guiding you to listen to the land.",
    tools: ["Grounding mat", "Field journal", "Plant journal"],
    schedule: [
      "06:00 – Sunrise grounding walk",
      "10:00 – Forest silence + journaling",
      "14:00 – River sit + hydration",
      "18:00 – Sunset reflection circle",
    ],
    faqs: [
      {
        question: "Is immersion strenuous?",
        answer: "Not at all. Walks are gentle and options exist for seated stillness.",
      },
      {
        question: "Do you provide gear?",
        answer: "We supply barefoot mats, water shoes, and windbreakers for cool mornings.",
      },
      {
        question: "Can I bring my own itinerary?",
        answer: "We encourage quiet afternoons; you can opt for writing, river sits, or short treks.",
      },
    ],
  },
  {
    slug: "food",
    title: "Conscious Food",
    heroTagline: "Seasonal nourishment that feels light yet satisfying.",
    summary:
      "We prepare vegetarian, plant-forward menus that honor local traditions, strengthen digestion, and support daily practices.",
    dailyRitual: "Farm-to-table breakfasts, slow lunches, tonic infusions, and light dinners.",
    heroBadge: "Farm · Kitchen",
    rituals:
      "Meals come with mindful eating prompts, hydration cues, and optional kitchen conversations.",
    sections: [
      {
        title: "Mindful meals",
        text:
          "Each plate highlights seasonal produce, simple grains, and warming spices while guests practice gratitude and slow chewing.",
      },
      {
        title: "Kitchen conversations",
        text:
          "Curators host mini talks on fermentation, hydration, and quick cooking so you feel empowered at home.",
        bullets: ["Fermented + sprouted foods", "Hydration rituals", "Kitchen stories"],
      },
      {
        title: "Seasonal ritual",
        text: "Menus rotate with the harvest so every stay tastes rooted in place.",
      },
      {
        title: "Integration",
        text: "Recipes, shopping lists, and a hydration tracker keep your new rhythm easy to follow.",
      },
    ],
    takeaway: "Food that nourishes the body, honors the region, and keeps digestion calm.",
    tools: ["Hydration tracker", "Fermentation kit", "Mindful pace timers"],
    schedule: [
      "07:30 – Hydration + gentle breakfast",
      "12:30 – Ayurvedic lunch + mindful chewing",
      "16:00 – Herbal infusion + snack",
      "19:00 – Early dinner + gratitude circle",
    ],
    faqs: [
      {
        question: "Do I need a strict diet?",
        answer: "No. Meals stay practical, flavorful, and flexible.",
      },
      {
        question: "Can I cook the recipes at home?",
        answer: "Yes, we share simple seasonal recipes and tips.",
      },
      {
        question: "Is hydration tracked?",
        answer: "Yes, every guest receives a tracker plus herbal infusion ideas.",
      },
    ],
  },
];

export function getPillarBySlug(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}

export function getAllPillars() {
  return pillars;
}
