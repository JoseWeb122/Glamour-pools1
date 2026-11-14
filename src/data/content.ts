import {
  Compass,
  Droplets,
  Gem,
  HardHat,
  HeartHandshake,
  MessagesSquare,
  PenTool,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";

/* Pexels CDN helper — curated luxury pool photography */
const px = (id: number, w = 1600, h = 1067) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  heroSky: px(8134750, 2400, 1350),
  heroSapphire: px(24805054, 2400, 1350),
  aboutMain: px(8143671, 1400, 1100),
  aboutAerial: px(39012013, 900, 700),
  whyUs: px(12715491, 1300, 1500),
  processWide: px(20200269, 2000, 900),
  before: px(7546775, 1800, 1000),
  after: px(8134745, 1800, 1000),
  cta: px(28054849, 2400, 1200),
  contact: px(35069530, 1200, 900),
};

/* ---------------------------------- Copy ---------------------------------- */

export const HERO_COPY = {
  sky: {
    eyebrow: "Naples, Florida · Custom Pool Builders",
    titleA: "Your Backyard.",
    titleB: "Your Private Paradise.",
    sub: "Custom-designed pools and spas, expertly crafted to transform your outdoor space into something extraordinary.",
    primary: "Explore Our Work",
    secondary: "Request a Free Consultation",
    direction: "Direction A — Coastal Sky",
  },
  sapphire: {
    eyebrow: "Naples, Florida · Luxury Pool Atelier",
    titleA: "Where Luxury",
    titleB: "Meets the Water.",
    sub: "Exceptional custom pools and spas, designed with precision and built to elevate the way you experience outdoor living.",
    primary: "Discover Our Craft",
    secondary: "Start Your Project",
    direction: "Direction B — Sapphire Deep",
  },
} as const;

export const CTA_COPY = {
  sky: {
    eyebrow: "Begin Your Transformation",
    title: "Let's Build Something Extraordinary.",
    sub: "Your dream pool starts with a conversation. Let's bring your vision to life.",
    button: "Start Your Project",
  },
  sapphire: {
    eyebrow: "The Glamour Standard",
    title: "Your Vision Deserves Extraordinary Craftsmanship.",
    sub: "Let's create an outdoor space that reflects your lifestyle and your vision.",
    button: "Request Your Consultation",
  },
} as const;

/* -------------------------------- Services -------------------------------- */

export interface Service {
  id: string;
  icon: LucideIcon;
  titleSky: string;
  titleSapphire: string;
  descSky: string;
  descSapphire: string;
  longDesc: string;
  image: string;
  features: string[];
  timeline: string;
  investment: string;
}

export const services: Service[] = [
  {
    id: "pools",
    icon: Waves,
    titleSky: "Custom Concrete Pools",
    titleSapphire: "Bespoke Concrete Swimming Pools",
    descSky:
      "Beautifully engineered swimming pools designed around your home, lifestyle, and vision.",
    descSapphire:
      "Architecturally engineered gunite pools, sculpted precisely around your residence and the way you live.",
    longDesc:
      "Every Glamour pool begins as a blank canvas. Our in-house designers study your architecture, sun exposure, and sightlines, then engineer a reinforced concrete shell built to outlast generations of Florida summers. From vanishing edges to beach entries, if you can dream it, we can build it in concrete.",
    image: px(8134745, 1400, 950),
    features: [
      "3D design rendering before we break ground",
      "Steel-reinforced gunite concrete shell",
      "Pebble, quartz & glass-tile interior finishes",
      "Smart automation — control from your phone",
      "LED color lighting & saltwater systems",
      "Lifetime structural shell warranty",
    ],
    timeline: "10–14 weeks",
    investment: "From $95,000",
  },
  {
    id: "spas",
    icon: Droplets,
    titleSky: "Luxury Custom Spas",
    titleSapphire: "Luxury Custom Spas",
    descSky:
      "Relaxation spaces designed with sophisticated finishes and exceptional craftsmanship.",
    descSapphire:
      "Sanctuaries of warm, moving water — finished in glass tile and stone, tuned to the art of unwinding.",
    longDesc:
      "A Glamour spa is engineered for the senses: whisper-quiet hydrotherapy jets positioned by a specialist, spillover edges that turn water into music, and finishes — hand-laid glass mosaic, tumbled stone — chosen to glow at golden hour. Integrated or standalone, heated for year-round Naples evenings.",
    image: px(19075389, 1400, 950),
    features: [
      "Therapeutic hydrotherapy jet placement",
      "Raised spillover & perimeter-overflow designs",
      "Hand-laid glass mosaic tile options",
      "Rapid-heat systems for cool evenings",
      "Integrated LED ambiance lighting",
      "Seating sculpted to your body, not a mold",
    ],
    timeline: "6–9 weeks",
    investment: "From $28,000",
  },
  {
    id: "pavers",
    icon: Gem,
    titleSky: "Premium Paver Installations",
    titleSapphire: "Architectural Paver Installations",
    descSky:
      "Beautiful pool decks and outdoor surfaces that complement your custom pool design.",
    descSapphire:
      "Travertine, marble, and shell-stone surfaces laid with a mason's patience and an architect's eye.",
    longDesc:
      "The deck is where bare feet meet craftsmanship. We source premium travertine, marble, and coral stone, then set each piece on a compacted, laser-leveled base with drainage engineered for Florida downpours. Cool underfoot, slip-resistant, and timeless against turquoise water.",
    image: px(8134746, 1400, 950),
    features: [
      "Premium travertine, marble & shell stone",
      "Laser-leveled, drainage-engineered base",
      "Cool-deck & slip-resistant finishes",
      "Coping, steps & waterline detailing",
      "Driveways, lanais & outdoor kitchens",
      "Sealed and backed by a 10-year warranty",
    ],
    timeline: "3–6 weeks",
    investment: "From $35,000",
  },
  {
    id: "transformations",
    icon: Sparkles,
    titleSky: "Complete Backyard Transformations",
    titleSapphire: "Complete Outdoor Transformations",
    descSky:
      "Turn ordinary outdoor spaces into stunning private retreats.",
    descSapphire:
      "Entire outdoor environments — pool, fire, shade, and garden — composed as one private resort.",
    longDesc:
      "One contract, one crew, one breathtaking reveal. We reimagine the whole composition: pool and spa, outdoor kitchen, fire features, pergolas, summer kitchens, landscape lighting, and lush tropical plantings — designed together so every element belongs.",
    image: px(36777962, 1400, 950),
    features: [
      "Single design-build team, start to finish",
      "Outdoor kitchens, bars & fire features",
      "Pergolas, lanais & shade structures",
      "Tropical landscaping & privacy plantings",
      "Architectural landscape lighting design",
      "Phased plans available for larger estates",
    ],
    timeline: "12–20 weeks",
    investment: "From $150,000",
  },
];

/* -------------------------------- Projects -------------------------------- */

export type ProjectCategory =
  | "Infinity Edge"
  | "Geometric"
  | "Freeform"
  | "Spa & Stonework";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
  aspect: string;
  description: string;
  size: string;
  finish: string;
  year: string;
  highlights: string[];
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Infinity Edge",
  "Geometric",
  "Freeform",
  "Spa & Stonework",
];

export const projects: Project[] = [
  {
    id: "port-royal",
    title: "Port Royal Infinity Estate",
    location: "Port Royal, Naples",
    category: "Infinity Edge",
    image: px(12720677, 1400, 1000),
    aspect: "aspect-[4/3]",
    description:
      "A vanishing-edge masterpiece where pool, sky, and Gulf horizon dissolve into a single plane of blue. Raised glass-tile spa, sun shelf for two, and a full summer kitchen beneath the lanai.",
    size: "48' × 22'",
    finish: "Pebble Sheen® Blue Surf",
    year: "2025",
    highlights: ["Vanishing edge", "Glass-tile spa", "Sun shelf", "Summer kitchen"],
  },
  {
    id: "grey-oaks",
    title: "Grey Oaks Geometric Court",
    location: "Grey Oaks, Naples",
    category: "Geometric",
    image: px(8839767, 1000, 1350),
    aspect: "aspect-[3/4]",
    description:
      "Crisp architectural lines carved into a formal garden court. A study in symmetry — lap lane, reflection ledge, and travertine terraces aligned to the home's central axis.",
    size: "55' × 16' lap",
    finish: "QuartzScapes® Tahoe Blue",
    year: "2024",
    highlights: ["Lap lane", "Reflection ledge", "Formal terraces"],
  },
  {
    id: "marco-island",
    title: "Marco Island Freeform Lagoon",
    location: "Marco Island",
    category: "Freeform",
    image: px(29702280, 1400, 950),
    aspect: "aspect-[16/10]",
    description:
      "An organic lagoon that winds through mature palms — beach entry, grotto-style water feature, and a fire bowl that ignites at dusk. The backyard now books like a resort.",
    size: "Freeform · 38' span",
    finish: "Pebble Tec® Sandy Beach",
    year: "2025",
    highlights: ["Beach entry", "Rock grotto", "Fire bowl", "Tropical planting"],
  },
  {
    id: "pelican-bay",
    title: "Pelican Bay Spa Sanctuary",
    location: "Pelican Bay, Naples",
    category: "Spa & Stonework",
    image: px(17158686, 1400, 1000),
    aspect: "aspect-[4/3]",
    description:
      "A wellness retreat built around a raised perimeter-overflow spa in hand-cut stone. Steam, soak, and sunset — engineered for the ritual of slowing down.",
    size: "9' round spa",
    finish: "Glass mosaic & stone",
    year: "2024",
    highlights: ["Perimeter-overflow spa", "Stone terrace", "Outdoor shower"],
  },
  {
    id: "royal-harbor",
    title: "Royal Harbor Sea-View Infinity",
    location: "Royal Harbor, Naples",
    category: "Infinity Edge",
    image: px(29702291, 1400, 950),
    aspect: "aspect-[16/10]",
    description:
      "Forty feet of infinity edge aimed at the bay. By day it mirrors the sky; by night, fiber-optic star lighting turns the floor into a second firmament.",
    size: "40' × 18'",
    finish: "Pebble Sheen® Ocean Blue",
    year: "2025",
    highlights: ["40' infinity edge", "Star-floor lighting", "Bay frontage"],
  },
  {
    id: "aqualane",
    title: "Aqualane Shores Twilight Court",
    location: "Aqualane Shores, Naples",
    category: "Geometric",
    image: px(19084143, 1400, 1000),
    aspect: "aspect-[4/3]",
    description:
      "Designed for the blue hour. Linear fire-and-water bowls, warm architectural lighting, and a raised spa wall that performs as sculpture long after the swim ends.",
    size: "36' × 18'",
    finish: "Hydrazzo® Aegean",
    year: "2023",
    highlights: ["Fire & water bowls", "Raised spa wall", "Twilight lighting"],
  },
  {
    id: "naples-park",
    title: "Naples Park Modern Oasis",
    location: "Naples Park, Naples",
    category: "Geometric",
    image: px(9064008, 1400, 950),
    aspect: "aspect-[16/10]",
    description:
      "Proof that a modest footprint needs no modesty. A plunge-depth geometric pool, tanning ledge, and silver travertine deck transformed a compact lot into a daily escape.",
    size: "28' × 14'",
    finish: "QuartzScapes® Caribbean",
    year: "2024",
    highlights: ["Tanning ledge", "Silver travertine", "Compact lot"],
  },
  {
    id: "barefoot-beach",
    title: "Barefoot Beach Deck House",
    location: "Barefoot Beach, Bonita Springs",
    category: "Spa & Stonework",
    image: px(40665037, 1000, 1350),
    aspect: "aspect-[3/4]",
    description:
      "Warm ipe-wood decking wraps a raised cocktail pool and cedar soaking tub — a bare-foot luxury compound steps from the sand, built to weather salt air beautifully.",
    size: "24' cocktail pool",
    finish: "Ipe & coral stone",
    year: "2023",
    highlights: ["Ipe decking", "Cocktail pool", "Cedar soak tub"],
  },
];

/* --------------------------------- Why Us --------------------------------- */

export interface WhyItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const whyItems: WhyItem[] = [
  {
    icon: Compass,
    title: "Custom Designs",
    text: "No catalogs, no templates. Every pool is drawn around your architecture, your light, and the way your family actually lives outdoors.",
  },
  {
    icon: ShieldCheck,
    title: "Concrete Pool Expertise",
    text: "Twenty-seven years of steel-reinforced gunite construction — engineered for Florida soil, storms, and decades of swims.",
  },
  {
    icon: Gem,
    title: "Premium Paver Finishes",
    text: "Travertine, marble, and shell stone sourced from premium quarries and set by our own master masons — never subcontracted.",
  },
  {
    icon: ScanEye,
    title: "Attention to Detail",
    text: "Tile lines checked by laser, coping joints by hand. We obsess over the eighth-inch details most builders never see.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    text: "One dedicated project manager, weekly photo updates, and a founder who walks every site before the final reveal.",
  },
];

/* --------------------------------- Process -------------------------------- */

export interface ProcessStep {
  icon: LucideIcon;
  num: string;
  title: string;
  text: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: MessagesSquare,
    num: "01",
    title: "Discover Your Vision",
    text: "We walk your property together, listen to how you live, and study sun, soil, and sightlines. You talk — we take notes, measurements, and inspiration.",
    duration: "Week 0–1",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Custom Design & Planning",
    text: "Our studio renders your pool in photorealistic 3D. We refine every curve together, then handle engineering, permits, and HOA approvals for you.",
    duration: "Week 2–5",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Expert Construction",
    text: "Excavation, steel, plumbing, and gunite — executed by our own in-house crews with a dedicated project manager sending you photo updates at every milestone.",
    duration: "Week 6–12",
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Finishing & Final Details",
    text: "Interior finish, waterline tile, pavers, lighting, and landscaping. We balance the chemistry, teach you the system, and hand over the keys to paradise.",
    duration: "Week 13–14",
  },
];

/* ------------------------------- Testimonials ------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  area: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Glamour didn't build us a pool — they built the reason our grandkids never want to leave. The 3D design was beautiful; the finished backyard is somehow better.",
    name: "Margaret & Tom Ellison",
    area: "Port Royal",
    project: "Infinity Pool & Spa",
  },
  {
    quote:
      "Every crew member treated our home like their own. Weekly photo updates, spotless site, and a travertine deck that gets compliments from every single guest.",
    name: "Dr. Alan Reyes",
    area: "Grey Oaks",
    project: "Geometric Pool & Pavers",
  },
  {
    quote:
      "Three builders quoted us. Glamour was the only one who asked how we actually live. Fourteen weeks later we were watching the sunset from our spa. Flawless.",
    name: "The Castellano Family",
    area: "Marco Island",
    project: "Complete Transformation",
  },
  {
    quote:
      "From permit to first swim, one call answered everything. Our twilight pool is the envy of the street — and honestly, of us every single evening.",
    name: "Susan & David Whitmore",
    area: "Aqualane Shores",
    project: "Pool, Spa & Fire Features",
  },
];

/* ----------------------------------- FAQ ----------------------------------- */

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How long does it take to build a custom concrete pool?",
    a: "Most Glamour pools are swim-ready in 10–14 weeks from excavation. Complete backyard transformations typically run 12–20 weeks. Before we start, you receive a week-by-week schedule — and your project manager reports progress with photos at every milestone.",
  },
  {
    q: "What does a custom pool in Naples typically cost?",
    a: "Custom concrete pools generally begin around $95,000, with luxury estates and full transformations ranging well beyond $250,000. After your consultation, we provide a detailed, line-item proposal — never a vague allowance — so you know exactly where every dollar goes.",
  },
  {
    q: "Do you handle permits and HOA approvals?",
    a: "Completely. Our in-house team prepares engineering drawings, submits county permits, and manages HOA architectural review across Naples, Marco Island, and Bonita Springs. You sign; we shepherd it through.",
  },
  {
    q: "What warranty backs your work?",
    a: "Our concrete shells carry a lifetime structural warranty, paver installations a 10-year workmanship warranty, and all equipment the full manufacturer coverage — plus our own one-year white-glove service, where we maintain your pool while you learn it.",
  },
  {
    q: "Can you renovate or resurface our existing pool?",
    a: "Yes — resurfacing, retile, coping replacement, paver overlays, and full remodels are a large part of our work. Many 'renovations' evolve into complete transformations once clients see the 3D redesign of their own backyard.",
  },
  {
    q: "Saltwater or chlorine — what do you recommend?",
    a: "Most of our clients choose saltwater for its softer feel and lower day-to-day maintenance, paired with full smartphone automation. During design, we'll walk you through both systems honestly so the choice fits your lifestyle.",
  },
];

/* ---------------------------------- Misc ----------------------------------- */

export const stats = [
  { value: 480, suffix: "+", label: "Pools & Spas Crafted" },
  { value: 27, suffix: "", label: "Years in Naples" },
  { value: 98, suffix: "%", label: "Clients Who Refer Us" },
  { value: 32, suffix: "", label: "Design Awards Won" },
];

export const marqueeItems = [
  "Custom Concrete Pools",
  "Luxury Spas & Hot Tubs",
  "Travertine Pavers",
  "Infinity Edges",
  "Outdoor Living",
  "Naples · Marco Island · Bonita Springs",
];

export const CONTACT = {
  phoneDisplay: "(239) 555-0147",
  phoneHref: "tel:+12395550147",
  email: "hello@glamourpoolsnaples.com",
  address: "4120 Tamiami Trail N, Naples, FL 34103",
  hours: "Mon–Sat · 8:00am – 6:00pm",
  license: "FL Certified Pool Contractor · Lic. #CPC1458923",
};

export const projectTypeOptions = [
  "Custom Concrete Pool",
  "Luxury Custom Spa",
  "Premium Paver Installation",
  "Complete Backyard Transformation",
  "Pool Renovation / Remodel",
  "Not Sure Yet — Guide Me",
];

export const budgetOptions = [
  "$75k – $125k",
  "$125k – $200k",
  "$200k – $350k",
  "$350k+",
  "Still Exploring",
];
