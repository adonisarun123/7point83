export type DurationId = "r5" | "r7" | "r11" | "r21";
export type TrackId = "core" | "sleep" | "gut" | "strength" | "ayurveda" | "focus";

export type DurationProfile = {
  id: DurationId;
  label: string;
  length: number;
  tagline: string;
  summary: string;
  note: string;
  therapySessions: number;
  priceRange: string;
  dayHighlights: string[];
  integration: string;
};

export type TrackProfile = {
  id: TrackId;
  label: string;
  slug: string;
  focus: string;
  promise: string;
  summary: string;
  outcomes: string[];
  unique: string[];
  therapies: string[];
  packingNote?: string;
  emphasis: string;
};

export type RetreatDetail = {
  slug: string;
  title: string;
  description: string;
  duration: DurationProfile;
  track: TrackProfile;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/retreats", label: "Retreats" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/apply", label: "Apply" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export const heroCopy = {
  title: "7point83 Club is India-first retreats that realign your rhythm with the Earth's heartbeat.",
  subtitle:
    "We host small-group, eco-friendly immersions across India that pair mindful movement, nature, clean food, and qualified therapies to reset body, mind, and lifestyle habits.",
  ctas: [
    { href: "/retreats", label: "Explore Retreats" },
    { href: "/apply", label: "Apply Now" },
  ],
  metrics: [
    { label: "Durations", value: "4" },
    { label: "Specializations", value: "6" },
    { label: "Group size", value: "12-20" },
  ],
};

export const homeJourney = [
  {
    title: "Attune",
    detail:
      "Disconnect from the city, breathe slowly, align to morning light, and anchor in simple breath and mobility rituals.",
  },
  {
    title: "Restore",
    detail:
      "Move with intention, immerse in forests and streams, dine on conscious meals, and lean into scalable strength + therapy sessions.",
  },
  {
    title: "Integrate",
    detail:
      "Craft a calm city-life routine with digital boundaries, accountability, and post-retreat integration calls.",
  },
];

export const destinationPlaybook = [
  { title: "Coorg / Chikmagalur", detail: "Coffee estates, forest air, and quiet hills for grounding resets." },
  { title: "Wayanad", detail: "Rainforest energy, gentle climate, and lush trails perfect for stillness." },
  { title: "Nilgiris / Ooty / Coonoor", detail: "Cool mountain calm, clear skies, and spacious nature for breathwork." },
  { title: "Rishikesh / Dehradun outskirts", detail: "River energy, yogic lineage, and flowing nature immersion." },
  { title: "Himachal (Tirthan / Dharamshala outskirts)", detail: "Mountains, silence, and cool air that supports deep work." },
  { title: "Goa hinterlands", detail: "Farms, rivers, and slow living away from the party coast." },
  { title: "Konkan coastal interiors", detail: "Simple villages, coastal forests, and conscious community stays." },
];

export const corePractices = [
  {
    title: "Yoga + Mobility",
    detail: "Joint-friendly, posture-aware, and scalable movement that keeps the body resilient in every routine.",
  },
  {
    title: "Meditation + Breathwork",
    detail: "Guided focus, attention training, breath mastery, and calm protocols for nervous-system regulation.",
  },
  {
    title: "Strength & Conditioning",
    detail: "Safe progressions that build posture, mobility, and confidence—no prior experience required.",
  },
  {
    title: "Traditional Therapies",
    detail: "Ayurveda-inspired massage, steam, and recovery rituals delivered by qualified hands.",
  },
  {
    title: "Nature Immersion",
    detail: "Forest baths, sunrise rituals, barefoot grounding, and quiet treks that slow the heartbeat.",
  },
  {
    title: "Conscious Food",
    detail: "Locally sourced, seasonal preparations that support detox, digestion, and mindful eating.",
  },
];

export const applicationFlow = [
  { title: "Apply online", detail: "A 2–3 minute form to share intentions, health context, and preferences." },
  { title: "Short call", detail: "A friendly screening call to confirm fit, answer questions, and plan logistics." },
  { title: "Confirm with deposit", detail: "Secure your spot once we both agree it is the right journey." },
  { title: "Receive prep kit", detail: "Packing list, travel guidance, digital detox advice, and integration cues." },
];

export const safetyNotes = [
  "Share any injuries, chronic conditions, or pregnancy details in the application.",
  "Practices are scalable—opt out of any movement or breathwork at any time.",
  "Therapies are delivered by qualified professionals only.",
  "This experience supports wellness habits and is not a substitute for medical care.",
];

export const whatIncluded = [
  "Accommodation at an eco-friendly property (twin/private options).",
  "Three conscious meals plus herbal beverages every day.",
  "Two to four guided sessions daily (yoga, breathwork, meditation, strength).",
  "Daily nature immersion, grounding, and reflection circles.",
  "Retreat handbook, post-retreat routine guide, and integration checklist.",
  "Airport or railway coordination support where needed.",
];

export const whatNotIncluded = [
  "Travel to and from the destination.",
  "Personal shopping, room service, or optional premium therapies beyond the included quota.",
  "Medical diagnostics or medicines.",
  "Alcohol, tobacco, or substances that conflict with the retreat container.",
];

export const foodPrinciples = [
  "Clean, locally sourced ingredients.",
  "Light dinners and mindful tasting rituals.",
  "Hydration rituals with herbal infusions.",
  "No alcohol or tobacco inside the retreat container.",
];

export const packingList = [
  "Comfortable yoga/activewear (2 sets/day).",
  "Walking shoes + outdoor layers.",
  "Reusable water bottle and mug.",
  "Journal + pen for reflection circles.",
  "Personal toiletries (low fragrance).",
  "Any prescribed medications (declare in application).",
  "Sunscreen, cap, and insect balm.",
  "Torch/flashlight (if needed).",
  "Laptop only if required (avoid in digital detox track).",
  "Swimwear if the property offers safe water access.",
];

export const faqList = [
  {
    question: "Is this beginner-friendly?",
    answer: "Yes. Every practice has beginner and advanced options, and teachers guide each person with care.",
  },
  {
    question: "Can I come solo?",
    answer: "Absolutely. Most guests attend alone and quickly find a respectful, quiet community.",
  },
  {
    question: "Do I need to follow a strict diet?",
    answer: "Food is practical, clean, and nourishing. We encourage mindful eating without rigidity.",
  },
  {
    question: "Is this spiritual?",
    answer: "It can be, but we keep the approach grounded, science-informed, and optional.",
  },
  {
    question: "Can I skip strength sessions?",
    answer: "Yes. Strength work is scalable—listen to your body and modify as needed.",
  },
  {
    question: "What if I am injured or pregnant?",
    answer: "Tell us in the application. We scale every session and offer alternatives so you stay safe.",
  },
];

export const policySections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    copy: "We only use personal data to guide your application, keep it secure, and never sell it to third parties.",
  },
  {
    id: "terms",
    title: "Terms of Service",
    copy: "You agree to participate respectfully, follow the code of conduct, and honor the rhythm of the retreat container.",
  },
  {
    id: "cancellation",
    title: "Cancellation & Refunds",
    copy: "Deposits are transferable within 12 months. Full refunds are available up to 60 days before arrival, minus bank fees.",
  },
  {
    id: "health",
    title: "Health & Safety",
    copy: "Practices are guided by experienced facilitators, therapies are certified, and we operate with a clear disclaimer that this is not medical care.",
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    copy: "Small groups thrive when kindness, consent, quiet time, and ecological awareness lead every interaction.",
  },
];

export const contactPoints = [
  { label: "General Inquiries", value: "hello@7point83.club" },
  { label: "Phone", value: "+91 80 1234 5678" },
  { label: "Visiting", value: "Bengaluru + rotating India properties" },
];

export const aboutSections = [
  {
    title: "India-first reset",
    copy: "7point83 Club supports an India-only collection of eco-properties so that every retreat feels rooted in local culture, food, and sustainability.",
  },
  {
    title: "Belief",
    copy: "Modern life pulls us away from nature's rhythm—sleep, breath, posture, and focus. We return to these pillars through structured practice and slow living.",
  },
  {
    title: "The Promise",
    copy: "A retreat here is a structured reset that reduces stress, rebuilds habits, improves strength and sleep, and helps you carry the calm home.",
  },
  {
    title: "Small cohorts + vetting",
    copy: "Groups stay between 12 and 20 guests, and every application screens for safety, commitment, and intent.",
  },
];

export const applyHighlights = [
  "Application takes 2–3 minutes and includes your goals, medical history, and travel details.",
  "Short call with a curator to align on focus and safety.",
  "Deposit locks in your place; you then receive prep materials and packing guidance.",
  "Integration calls + habit checklist keep the momentum going after you return home.",
];

export const footerSections = [
  {
    title: "Explore",
    links: navLinks.slice(0, 4),
  },
  {
    title: "Support",
    links: [
      { href: "/faqs", label: "FAQs" },
      { href: "/policies", label: "Policies" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const durations: DurationProfile[] = [
  {
    id: "r5",
    label: "5-Day Reset",
    length: 5,
    tagline: "Fast reset",
    summary: "Simple repeatable routines, daily nature, and a strong focus on nervous system repair.",
    note: "Quick reset format with conscious rhythm cues.",
    therapySessions: 1,
    priceRange: "₹29,000 – ₹55,000",
    dayHighlights: [
      "Day 1: Arrival + orientation + gentle mobility and sleep ritual setup.",
      "Day 2: Nervous system downshift with breathwork, yoga, and nature grounding.",
      "Day 3: Clean energy focus on posture, core, and mindful nutrition.",
      "Day 4: Strength introduction with recovery rituals.",
      "Day 5: Integration plan, closing circle, and departure support.",
    ],
    integration: "14-day post-retreat routine guide, optional integration calls, and habit checklist.",
  },
  {
    id: "r7",
    label: "7-Day Rebalance",
    length: 7,
    tagline: "Deep rebalance + therapies",
    summary: "Adds deeper practice blocks, therapy focus days, and a longer silence window.",
    note: "Includes deeper therapy blocks and a low-speaking half day.",
    therapySessions: 2,
    priceRange: "₹45,000 – ₹85,000",
    dayHighlights: [
      "Day 1: Arrival, intention, breath basics, and gentle yoga.",
      "Day 2: Detox + rest with nature immersion + recovery workshop.",
      "Day 3: Strength foundation and optional therapy.",
      "Day 4: Deeper stillness with restorative work and sound sessions.",
      "Day 5: Habit rebuild with meal rhythm, posture, and trekking.",
      "Day 6: Confidence day featuring strength progressions and integration coaching.",
      "Day 7: Integration planning, closing circle, and departure.",
    ],
    integration: "Post-retreat group integration call and a concise routine map.",
  },
  {
    id: "r11",
    label: "11-Day Deep Work",
    length: 11,
    tagline: "Deep work + lifestyle redesign",
    summary: "Skill workshops, stronger breath and strength progressions, and mindful habit architecture.",
    note: "Adds skill workshops, deeper breath mastery, and stronger strength progressions.",
    therapySessions: 3,
    priceRange: "₹75,000 – ₹1,45,000",
    dayHighlights: [
      "Day 1: Arrival, screening, intention, and gentle mobility.",
      "Day 2: Downshift with breath mechanics and grounding yoga.",
      "Day 3: Strength foundation and attention training.",
      "Day 4: Deep rest with restorative practices and silence.",
      "Day 5: Body rebuild, mobility, and movement hygiene workshops.",
      "Day 6: Mind mastery with resilience breath protocols.",
      "Day 7: Therapy and recovery focus with early sleep.",
      "Day 8: Strength progression 2 with core endurance.",
      "Day 9: Lifestyle redesign workshop with habit architecture.",
      "Day 10: Integration rehearsal (simulated city day, 1:1 check-in).",
      "Day 11: Departure with final plan and closing circle.",
    ],
    integration: "Two post-retreat integration calls plus a habit checklist and lifestyle roadmap.",
  },
  {
    id: "r21",
    label: "21-Day Transformation",
    length: 21,
    tagline: "Full transformation + integration",
    summary: "Extended phases that weave detox, strength, deep work, and finish with an integration week.",
    note: "Staged transformation phases, integration days, and extended recovery/silence blocks.",
    therapySessions: 6,
    priceRange: "₹1,65,000 – ₹3,50,000",
    dayHighlights: [
      "Days 1-3: Arrival & downshift with screening, breath reset, and gentle yoga.",
      "Days 4-7: Detox & recovery featuring therapy blocks and restorative routines.",
      "Days 8-12: Strength + stability with progressive training and meditation depth.",
      "Days 13-16: Deep work & identity shift, habit workshops, and therapy integration.",
      "Days 17-19: Integration week building city-life routine design and accountability.",
      "Days 20-21: Graduation with final assessments, roadmap, and closing ceremony.",
    ],
    integration: "Four-week integration plan, three follow-up calls, and two 1:1 coaching sessions.",
  },
];

export const tracks: TrackProfile[] = [
  {
    id: "core",
    slug: "core-signature-rhythm-retreat",
    label: "Signature Rhythm",
    focus: "Balanced yoga, meditation, nature immersion, strength, and therapy support.",
    promise: "A holistic rhythm that nurtures rest, movement, and reflection in every day.",
    summary: "A gentle, balanced blend of movement, breath, nourishment, and community reflection.",
    outcomes: [
      "More stable energy",
      "Better sleep routines",
      "Cleaner daily habits",
      "Improved flexibility + posture",
    ],
    unique: [
      "Daily nature immersion and reflection circle",
      "Balanced yoga + strength with conscious food rhythm",
      "Habit architecture + post-retreat checklist",
    ],
    therapies: ["Relaxation massage", "Steam therapy", "Foot soak rituals", "Stretch-assisted bodywork"],
    emphasis: "Balanced practice across movement, stillness, nature, and nourishment.",
    packingNote: "Bring light layers and a journal for reflection circles.",
  },
  {
    id: "sleep",
    slug: "sleep-sleep-stress-recovery",
    label: "Sleep & Stress Recovery",
    focus: "Burnout reset with HRV-friendly routines and evening downshift protocols.",
    promise: "Calm energy, deeper sleep, and a nervous system that can rest on cue.",
    summary: "Low-stimulation schedule with breathwork, sleep hygiene workshops, and breath circuits for calm.",
    outcomes: [
      "Faster sleep onset",
      "Deeper sleep quality",
      "Lower stress reactivity",
      "Calmer evenings",
    ],
    unique: [
      "Evening downshift protocols",
      "Breathwork + nasal training",
      "Head/shoulder relaxation therapy where available",
    ],
    therapies: [
      "Relaxation massage",
      "Steam therapy",
      "Foot soak + recovery rituals",
      "Evening head/shoulder therapy",
    ],
    emphasis: "Extra sleep protocols, nervous system regulation, and longer evenings of stillness.",
  },
  {
    id: "gut",
    slug: "gut-gut-metabolic-reset",
    label: "Gut & Metabolic Reset",
    focus: "Mindful eating rituals, kitchen workshops, and digestive-friendly movement.",
    promise: "A grounded food and movement rhythm that soothes digestion and stabilizes energy.",
    summary: "Clean ingredients, kitchen fundamentals, slow post-meal walks, and digestion workshops.",
    outcomes: ["Cleaner eating rhythm", "Less bloating", "Better appetite cues", "Stable energy"],
    unique: [
      "Mindful eating ritual",
      "Gut-friendly menu blueprint",
      "Kitchen workshop + digestion tools",
    ],
    therapies: ["Abdominal relaxation massage", "Steam therapy", "Foot soak rituals", "Stretch-assisted bodywork"],
    emphasis: "Gut-friendly menu rules, mindful eating, and digestion rituals.",
  },
  {
    id: "strength",
    slug: "strength-strength-mobility-rebuild",
    label: "Strength & Mobility Rebuild",
    focus: "Safe strength progressions, posture, and joint care for everyday resilience.",
    promise: "A confident body that moves with control, stability, and ease.",
    summary: "Technique-focused strength circuits paired with mobility, posture, and recovery protocols.",
    outcomes: ["Stronger core + posture", "Better joint mobility", "Safer movement patterns", "Improved stamina"],
    unique: [
      "Strength progression plan",
      "Posture + mobility screening",
      "Sports recovery massage + myofascial work",
    ],
    therapies: [
      "Sports recovery massage",
      "Stretch-assisted bodywork",
      "Steam therapy",
      "Foot soak + recovery rituals",
    ],
    emphasis: "Strength blocks, mobility reset, and safe progressive overload.",
  },
  {
    id: "ayurveda",
    slug: "ayurveda-traditional-rejuvenation",
    label: "Traditional Rejuvenation",
    focus: "Ayurveda-inspired therapies, cleansing, and restorative movement.",
    promise: "Deep relaxation, nervous system rest, and aromatic, soothing recovery.",
    summary: "Oil massages, steam, restorative yoga, herbal infusions, and gentle detox protocols.",
    outcomes: ["Deep relaxation", "Rested nervous system", "Lightness and calm", "Better recovery routines"],
    unique: [
      "Abhyanga-style massages",
      "Steam + shirodhara-style sessions",
      "Herbal compresses and poultices",
    ],
    therapies: ["Abhyanga oil massage", "Steam therapy", "Shirodhara-style session", "Herbal compress"],
    emphasis: "Therapy-forward restorative rhythm and cleansing routines.",
  },
  {
    id: "focus",
    slug: "focus-digital-detox-deep-focus",
    label: "Digital Detox & Deep Focus",
    focus: "Attention reset, screen detox, and clarity-building deep work.",
    promise: "Sharper attention, calmer mind, and a practical deep-work routine.",
    summary: "Screen-free container with attention meditations, deep-work habits, and quiet time blocks.",
    outcomes: [
      "Reduced screen dependency",
      "Better attention span",
      "Clearer thinking",
      "Sustainable deep-work routine",
    ],
    unique: [
      "Digital detox container",
      "Attention training meditations",
      "Quiet time + focus workshops",
    ],
    therapies: ["Relaxation massage", "Steam therapy", "Foot soak", "Stretch-assisted bodywork"],
    packingNote: "Laptop only if absolutely required; we encourage a full digital reset.",
    emphasis: "Digital detox protocols, clarity practices, and deep-work habits.",
  },
];

export const sampleDailyFlow = [
  { time: "06:00", session: "Wake + hydration + light mobility" },
  { time: "06:30", session: "Guided breathwork" },
  { time: "07:15", session: "Yoga / Mobility" },
  { time: "08:30", session: "Breakfast (conscious, gut-friendly)" },
  { time: "10:00", session: "Nature immersion / walk" },
  { time: "12:30", session: "Lunch (balanced, seasonal)" },
  { time: "14:00", session: "Rest, journaling, optional therapy" },
  { time: "16:00", session: "Strength & Conditioning / posture" },
  { time: "17:30", session: "Sunset stillness (meditation/sound)" },
  { time: "19:00", session: "Dinner (light)" },
  { time: "20:15", session: "Circle + reflection + sleep ritual" },
];

export const retreatMatrix = durations.map((duration) => ({
  duration,
  tracks: tracks.map((track) => ({
    track,
    slug: `${duration.id}-${track.slug}`,
  })),
}));

export const retreatCatalog: RetreatDetail[] = durations.flatMap((duration) =>
  tracks.map((track) => ({
    slug: `${duration.id}-${track.slug}`,
    title: `${duration.label} — ${track.label}`,
    description: `${track.focus} delivered through a ${duration.tagline.toLowerCase()} format with guided rituals, clean food, and curated therapy blocks.`,
    duration,
    track,
  }))
);

const retreatLookup: Record<string, RetreatDetail> = Object.fromEntries(
  retreatCatalog.map((retreat) => [retreat.slug, retreat])
);

export function getRetreatBySlug(slug: string) {
  return retreatLookup[slug];
}
