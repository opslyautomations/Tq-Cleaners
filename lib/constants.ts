export const SITE = {
  name: "TQ Cleaners",
  domain: "https://tqcleaners.com",
  phone: "(956) 306-6378",
  phoneTel: "+19563066378",
  email: "info@tqcleaners.com",
  tagline: "Spotless Homes, Effortless Living — Across Texas.",
  hours: "Mon–Sat 8 AM – 6 PM",
  hoursLong: "Monday–Saturday 8:00 AM – 6:00 PM, Sunday Closed",
  address: "Mobile Service — We Come to You",
  city: "San Antonio",
  state: "TX",
};

export const SERVICES = [
  {
    slug: "standard-house-cleaning",
    name: "Standard House Cleaning",
    shortDesc: "Recurring weekly, bi-weekly, or monthly cleaning for busy households.",
    icon: "Home",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortDesc: "Top-to-bottom 50-point reset — inside appliances, baseboards, vents, and more.",
    icon: "Sparkles",
  },
  {
    slug: "move-in-move-out",
    name: "Move-In / Move-Out",
    shortDesc: "Complete turnover cleans with deposit-back guarantee for tenants and landlords.",
    icon: "Truck",
  },
  {
    slug: "short-term-rental-airbnb",
    name: "Short-Term Rental / Airbnb",
    shortDesc: "Hotel-quality resets between guests — linens, restock, and damage reports included.",
    icon: "Star",
  },
  {
    slug: "office-commercial",
    name: "Office & Commercial",
    shortDesc: "Flexible after-hours commercial cleaning with full COI available in 24 hours.",
    icon: "Building2",
  },
  {
    slug: "custom-packages",
    name: "Custom Packages",
    shortDesc: "Fully tailored cleaning plans for unique homes, estates, and businesses.",
    icon: "Settings",
  },
];

export const METROS = [
  {
    slug: "san-antonio-metro",
    name: "San Antonio Metro",
    cities: [
      { slug: "san-antonio", name: "San Antonio" },
      { slug: "alamo-heights", name: "Alamo Heights" },
      { slug: "helotes", name: "Helotes" },
      { slug: "leon-valley", name: "Leon Valley" },
      { slug: "converse", name: "Converse" },
      { slug: "universal-city", name: "Universal City" },
      { slug: "schertz", name: "Schertz" },
      { slug: "new-braunfels", name: "New Braunfels" },
      { slug: "boerne", name: "Boerne" },
      { slug: "stone-oak", name: "Stone Oak" },
      { slug: "the-dominion", name: "The Dominion" },
    ],
  },
  {
    slug: "austin-metro",
    name: "Austin Metro",
    cities: [
      { slug: "austin", name: "Austin" },
      { slug: "round-rock", name: "Round Rock" },
      { slug: "pflugerville", name: "Pflugerville" },
      { slug: "cedar-park", name: "Cedar Park" },
      { slug: "kyle", name: "Kyle" },
      { slug: "buda", name: "Buda" },
      { slug: "leander", name: "Leander" },
      { slug: "georgetown", name: "Georgetown" },
      { slug: "lakeway", name: "Lakeway" },
      { slug: "bee-cave", name: "Bee Cave" },
      { slug: "dripping-springs", name: "Dripping Springs" },
    ],
  },
  {
    slug: "dallas-metro",
    name: "Dallas Metro",
    cities: [
      { slug: "dallas", name: "Dallas" },
      { slug: "plano", name: "Plano" },
      { slug: "frisco", name: "Frisco" },
      { slug: "richardson", name: "Richardson" },
    ],
  },
  {
    slug: "fort-worth-metro",
    name: "Fort Worth Metro",
    cities: [
      { slug: "fort-worth", name: "Fort Worth" },
      { slug: "arlington", name: "Arlington" },
      { slug: "grapevine", name: "Grapevine" },
      { slug: "southlake", name: "Southlake" },
    ],
  },
];

export interface Review {
  id: number;
  name: string;
  city: string;
  date: string;
  rating: number;
  body: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Maria G.",
    city: "San Antonio, TX",
    date: "2026-01-15",
    rating: 5,
    body: "TQ Cleaners has been cleaning our home bi-weekly for six months and the consistency is incredible. Same team every time, never a missed spot, and they work around our crazy schedule. Easily the best cleaning service in San Antonio we've tried.",
  },
  {
    id: 2,
    name: "Jason R.",
    city: "Austin, TX",
    date: "2026-02-03",
    rating: 5,
    body: "Booked a deep clean before listing our house and the buyers commented on how spotless it was at the showing. Luis's team was on time, thorough, and used products safe for our dog. 10/10 Austin cleaning service.",
  },
  {
    id: 3,
    name: "Priya S.",
    city: "Plano, TX",
    date: "2026-01-28",
    rating: 5,
    body: "We relocated to Plano from California and needed a move-in cleaning on 24 hours' notice. TQ Cleaners made it happen and the place sparkled. Already booked them for recurring service.",
  },
  {
    id: 4,
    name: "Trevor H.",
    city: "Fort Worth, TX",
    date: "2026-02-10",
    rating: 5,
    body: "I run a 12-unit Airbnb portfolio in Fort Worth and Grapevine and TQ has become our go-to for same-day turnovers. Host-friendly communication, photo damage reports, fresh linens every time. Game changer.",
  },
  {
    id: 5,
    name: "Rebecca M.",
    city: "Cedar Park, TX",
    date: "2026-01-20",
    rating: 5,
    body: "Honest flat-rate pricing — no surprises, no upsells. I used another cleaning service in Cedar Park for two years and was constantly nickel-and-dimed. TQ quoted it, stuck to it, and did a better job.",
  },
  {
    id: 6,
    name: "Carlos V.",
    city: "Frisco, TX",
    date: "2026-02-18",
    rating: 5,
    body: "Our Frisco house is big and I was worried no one would do it justice. TQ sent a four-person team, knocked it out in half a day, and the baseboards haven't looked this good since the builder walk-through.",
  },
  {
    id: 7,
    name: "Amanda T.",
    city: "Round Rock, TX",
    date: "2026-01-12",
    rating: 5,
    body: "Moved out of our Round Rock rental and got every penny of our deposit back. The property manager specifically mentioned the cleaning. Worth every dollar.",
  },
  {
    id: 8,
    name: "Derek L.",
    city: "Dallas, TX",
    date: "2026-02-25",
    rating: 5,
    body: "I manage a small downtown Dallas office and needed after-hours commercial cleaning with a real COI. TQ had the certificate to my building in 24 hours and has been flawless for six months. Top-tier Dallas commercial cleaning service.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "how-often-should-you-deep-clean-your-house-texas-edition",
    title: "How Often Should You Deep Clean Your House? A Texas Homeowner's Guide",
    excerpt: "Texas heat, humidity, and cedar-fever allergens create unique cleaning challenges. Here's how often to deep-clean in San Antonio, Austin, Dallas, or Fort Worth.",
    date: "2026-01-08",
    category: "Cleaning Tips",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "move-out-cleaning-checklist-texas-rental",
    title: "The Ultimate Move-Out Cleaning Checklist for Getting Your Texas Deposit Back",
    excerpt: "Most Texas tenants lose hundreds off their deposit over cleaning issues. Use this checklist to get every dollar back.",
    date: "2026-01-22",
    category: "Move Guides",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    slug: "airbnb-cleaning-checklist-5-star-reviews",
    title: "The Airbnb Cleaning Checklist That Wins 5-Star Reviews",
    excerpt: "Hosts in Austin, New Braunfels, Grapevine, and Dallas share what separates a 5-star cleaning from a deal-breaker.",
    date: "2026-02-05",
    category: "Airbnb Hosting",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    slug: "eco-friendly-cleaning-products-pet-safe-texas",
    title: "Eco-Friendly Cleaning in Texas: What's Actually Safe for Kids, Pets, and Allergy-Prone Families",
    excerpt: "Not all 'green' products are created equal. Here's what Texas families should actually look for — and avoid.",
    date: "2026-02-19",
    category: "Cleaning Tips",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
  },
  {
    slug: "commercial-cleaning-office-productivity-texas",
    title: "How Commercial Cleaning Affects Office Productivity: What Texas Businesses Should Know",
    excerpt: "A clean office isn't just nice to have — it directly impacts sick days, focus, and employee retention.",
    date: "2026-03-04",
    category: "Commercial Cleaning",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];
