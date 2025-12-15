export type PillarSection = {
  title: string;
  text: string;
  bullets?: string[];
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
};

const pillars: PillarDetail[] = [
  {
    slug: "yoga",
    title: "Yoga + Mobility",
    heroTagline: "Joint-friendly movement that honors posture and breath.",
    summary:
      "We combine slow, layered sequencing, posture hygiene, and mobility resets so you build strength without strain and stay grounded in every chapter of the retreat.",
    heroBadge: "Posture · Presence",
    dailyRitual: "Daily asana labs, morning mobility circles, and evening restorative practices.",
    rituals:
      "Each day begins with breath-to-movement transitions, flows that awaken the spine, and quiet reflections on alignment before breakfast.",
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
          "We pair micro-movements with proprioception drills to keep shoulders, hips, and spines mobile. Each session feels like a reset for everyday posture.",
      },
      {
        title: "Integration",
        text:
          "Guests receive a printed mobility map and short video cues so the practice continues after the retreat.",
      },
    ],
    takeaway: "Movement that restores freedom, posture, and calm in a grounded, intentional space.",
  },
  {
    slug: "breath",
    title: "Meditation + Breathwork",
    heroTagline: "Attention training for clarity, calm, and presence.",
    summary:
      "Sound tools, guided focus, and mindful pauses help settle the nervous system. Sessions move from collected breath to heart-rate variability practices aligned with nature’s tempo.",
    heroBadge: "Attention · Calm",
    dailyRitual: "Guided meditations, breath labs, sound baths, and micro-silence rehearsals.",
    rituals:
      "Our mornings open with breath journaling and grounding meditations, while evenings close with sound, slow exhale work, and integration circles.",
    sections: [
      {
        title: "Opener ritual",
        text:
          "Each early session pairs a light pranayama sequence, soft acoustic elements, and journaling prompts that bring awareness to the lungs, ribs, and diaphragm.",
      },
      {
        title: "Midday focus",
        text:
          "Attention training uses breath counting, gentle mantra, and nature-sourced sound to help guests sustain calm through longer afternoons.",
        bullets: ["Guided body scans", "Focus-on-breath labs", "Nature immersion meditations"],
      },
      {
        title: "Closing",
        text:
          "A slow pranayama + sound bath at dusk flattens reactivity and teaches guests to anchor with every exhale.",
      },
    ],
    takeaway: "A daily habit kit that teaches you to breathe with intention and hold presence anywhere.",
  },
  {
    slug: "strength",
    title: "Strength & Conditioning",
    heroTagline: "Safe progressions that rebuild confidence and everyday resilience.",
    summary:
      "Our strength sessions center on posture, breath, and muscle balance instead of volume. We teach guests how to load safely, track alignment, and protect the joints.",
    heroBadge: "Stability · Power",
    dailyRitual: "Circuit blocks, breath-driven tempo sets, posture reviews, and recovery sequences.",
    rituals: "Strength work follows the morning mobility class so guests feel grounded before adding load.",
    sections: [
      {
        title: "Posture intelligence",
        text:
          "We screen posture, teach bracing, and pair breath with every lift. Platform cues help the shoulders, hips, and core move in sync.",
      },
      {
        title: "Circuit format",
        text:
          "Time-based circuits balance strength and conditioning with bodyweight, bands, and natural implements like sandbags. Each station includes intentional breath cues.",
        bullets: ["Posture-first strength coaching", "Mobility + strength mashups", "Recovery cooldowns"],
      },
      {
        title: "Recovery",
        text: "Foam rolling, breath resets, and slow lanes after each block keep the nervous system calm.",
      },
    ],
    takeaway: "Build strength that feels gentle, precise, and safe—the exact opposite of grunt work.",
  },
  {
    slug: "therapies",
    title: "Traditional Therapies",
    heroTagline: "Ayurvedic-inspired rituals delivered by seasoned practitioners.",
    summary:
      "From Abhyanga oil rituals to steam, we deliver therapies that calm the nervous system and amplify rest. Each treatment gets tailored to your constitution and current energy load.",
    heroBadge: "Rest · Restore",
    dailyRitual: "Massage, steam, oil therapies, herbal compresses, and cooling routines.",
    rituals: "Therapy days focus on slow mornings, grounded meals, and long rest + circulation work.",
    sections: [
      {
        title: "Therapy cadence",
        text:
          "Guests receive planning calls so we sequence therapies (oil massage, steam, shirodhara) with movement and breath to optimize results.",
      },
      {
        title: "Recovery rituals",
        text:
          "Post-therapy we serve warm herbal teas, quiet rooms, and breathing cues to help the body integrate oil, heat, and release work.",
      },
      {
        title: "Therapist conversation",
        text:
          "Each protocol includes an intake and short coaching on how to continue the relief once you return home.",
      },
    ],
    takeaway: "Therapies that meet modern bodies with nourishing, traditional practices.",
  },
  {
    slug: "nature",
    title: "Nature Immersion",
    heroTagline: "Daily stillness and movement in forests, rivers, and hills.",
    summary:
      "Nature is the anchor for the entire experience. Guided barefoot walks, birdwatching, river sits, and field journaling slow the system and reset circadian rhythms.",
    heroBadge: "Forest · River",
    dailyRitual: "Sunrise walks, grounding circuits, silent treks, and restorative river dips.",
    rituals:
      "We pair quiet mornings with movement along trails and meditative sits beside water, all curated to reduce noise and spark awareness.",
    sections: [
      {
        title: "Grounding",
        text:
          "Each morning begins with a grounding circuit featuring barefoot walks or forest stretching that reconnects you to the soil and breath.",
        bullets: ["Barefoot grounding", "Forest-focused breathing", "Sound walks"],
      },
      {
        title: "Immersion",
        text: "Afternoons are reserved for slow hikes, river rituals, and solitude so the senses settle into silence.",
      },
      {
        title: "Reflection",
        text:
          "Post-immersion journaling, community circles, and sunset breathwork help integrate the stillness.",
      },
    ],
    takeaway: "The forest is your co-facilitator; every stay re-teaches you how to listen to the land.",
  },
  {
    slug: "food",
    title: "Conscious Food",
    heroTagline: "Seasonal nourishment that feels light yet satisfying.",
    summary:
      "We prepare vegetarian, plant-forward menus that honor local traditions, strengthen digestion, and support the daily practices.",
    heroBadge: "Farm · Kitchen",
    dailyRitual: "Farm-to-table breakfasts, slow lunches, tonic infusions, and light dinners.",
    rituals:
      "Meals are accompanied by mindful eating prompts, hydration cues, and optional kitchen conversations.",
    sections: [
      {
        title: "Mindful meals",
        text:
          "Every plate highlights seasonal produce, simple grains, and warming spices. Guests practice mindful bites and gratitude rituals.",
      },
      {
        title: "Kitchen conversations",
        text:
          "Our curators host mini kitchen talks on fermented foods, hydration practice, and simple cooking for busy lives.",
        bullets: ["Fermented + sprouted foods", "Hydration rituals", "Kitchen stories"],
      },
      {
        title: "Integration",
        text:
          "We send home recipes, shopping lists, and a hydration tracker so your new rhythm is easy to continue.",
      },
    ],
    takeaway: "Food that nourishes the body, honors the region, and keeps your metabolism calm.",
  },
];

export function getPillarBySlug(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}

export function getAllPillars() {
  return pillars;
}
