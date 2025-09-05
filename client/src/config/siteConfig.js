// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Arslan Ahmed",
    photo: "https://app.salesgenius.co/api/user-images/6e5f208c-ba60-4fa0-8e9a-abaabd25ded0?v=49b5bb0651a74a8f76b17f07911294534cc1945bf9f041389da6a5f3660dda8d",
    phone: "(416) 655-4850",
    email: "arslan@salesgenius.co",
    company: "Executive Homes Realty Inc",
    license: "RECO #82741563"
  },
  social: {
    instagram: "https://instagram.com/executivehomesrealtyinc",
    facebook: "https://facebook.com/executivehomesrealtyinc",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// galleryImages configuration
export const galleryImages = [
  {
    id: 1,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
    alt: "80 John St Unit 2912, Toronto - modern exterior view",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004602781-2912-80 John St-04.jpg",
    alt: "Open concept living room with floor-to-ceiling windows at 80 John St Unit 2912, Toronto",
    category: "interior"
  },
  {
    id: 3,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004609515-2912-80 John St-14.jpg",
    alt: "Gourmet kitchen with enlarged island and custom cabinetry at 80 John St Unit 2912, Toronto",
    category: "kitchen"
  },
  {
    id: 4,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004627198-2912-80 John St-20.jpg",
    alt: "Primary bedroom with bright southeast light at 80 John St Unit 2912, Toronto",
    category: "bedroom"
  },
  {
    id: 5,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004643105-2912-80 John St-11.jpg",
    alt: "Luxury bathroom with floor-to-ceiling tiling at 80 John St Unit 2912, Toronto",
    category: "bathroom"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600047509807-f8e8e01a8d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "80 John St Unit 2912, Toronto - outdoor space and skyline views",
    category: "exterior"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Additional living space with sleek finishes at 80 John St Unit 2912, Toronto",
    category: "interior"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Dining area with modern lighting at 80 John St Unit 2912, Toronto",
    category: "interior"
  }
];

// homeShowcaseSections configuration
export const homeShowcaseSections = [
  {
    id: "section1",
    title: "Sunlit Living",
    description: "Expansive open-concept living and dining framed by true floor-to-ceiling glass—no bulkheads—delivering dramatic views, bright southeast light, and effortless flow to a usable 143 sq ft balcony.",
    imageUrl: "https://www.yudiz.com/codepen/studio-r/bg-living.jpg"
  },
  {
    id: "section2",
    title: "Culinary Haven",
    description: "Custom kitchen with an enlarged, function-first island featuring seating-side storage and a built-in outlet, cohesive designer finishes, and smart layout ideal for everyday cooking and entertaining.",
    imageUrl: "https://www.yudiz.com/codepen/studio-r/bg-kitchen.jpg"
  },
  {
    id: "section3",
    title: "Private Retreat",
    description: "Calming primary suite highlighted by southeast exposure and a spa-like, fully retiled ensuite with modern fixtures—crafted for quiet relaxation and daily comfort.",
    imageUrl: "https://www.yudiz.com/codepen/studio-r/bg-badroom.jpg"
  },
  {
    id: "section4",
    title: "Productive Workspace",
    description: "A real den with privacy—perfect for a quiet office or guest nook—keeps work life separate without compromising the main living area’s scale or sightlines.",
    imageUrl: "https://www.yudiz.com/codepen/studio-r/bg-office.jpg"
  }
];

// neighborhood configuration (drives NeighborhoodOverview descriptive copy)
export const neighborhood = {
  name: "Entertainment District",
  city: "Toronto",
  description: "Toronto’s Entertainment District blends world-class dining, theatre, and culture with unmatched convenience. Walk to TTC, PATH, and the Financial District while enjoying vibrant streetscapes, parks, and daily essentials within minutes.",
  highlights: [
    "Steps to theatres, TIFF, and live venues",
    "King Street restaurants and cafes nearby",
    "St Andrew Station and 504 King streetcar access",
    "Quick PATH and Financial District connections",
    "Protected bike lanes on Richmond/Adelaide"
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "CF Toronto Eaton Centre",
    distance: "0.7 miles",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Queen Street West Shopping",
    distance: "0.3 miles",
    category: "shopping",
    iconName: "Store"
  },
  {
    id: 3,
    name: "David Pecaut Square",
    distance: "0.1 miles",
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 4,
    name: "Roundhouse Park",
    distance: "0.5 miles",
    category: "recreation",
    iconName: "Activity"
  },
  {
    id: 5,
    name: "GoodLife Fitness King West",
    distance: "0.6 miles",
    category: "recreation",
    iconName: "Users"
  },
  {
    id: 6,
    name: "Ogden Junior Public School (TDSB)",
    distance: "0.7 miles",
    category: "education",
    iconName: "School"
  },
  {
    id: 7,
    name: "Byblos Downtown",
    distance: "0.2 miles",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 8,
    name: "Dineen Coffee Co. (York St)",
    distance: "0.5 miles",
    category: "dining",
    iconName: "Coffee"
  },
  {
    id: 9,
    name: "Momofuku Noodle Bar",
    distance: "0.3 miles",
    category: "dining",
    iconName: "Wine"
  },
  {
    id: 10,
    name: "St Andrew Station (Line 1)",
    distance: "0.5 miles",
    category: "transportation",
    iconName: "Train"
  },
  {
    id: 11,
    name: "Financial District Hub",
    distance: "0.4 miles",
    category: "business",
    iconName: "Wifi"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "95/100",
    caption: "Walker's Paradise",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score",
    value: "94/100",
    caption: "Excellent Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "School Rating",
    value: "8/10",
    caption: "Great Schools",
    iconName: "School",
    color: "bg-indigo-500"
  },
  {
    id: 4,
    title: "Commute Time",
    value: "8 min",
    caption: "To Financial District",
    iconName: "Clock",
    color: "bg-amber-500"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Saturday, September 6, 2025",
  time: "1:00 PM - 4:00 PM",
  host: "Arslan Ahmed",
  phone: "(416) 655-4850",
  email: "info@80johnst.com",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: true,
  virtualTourUrl: "https://tours.openhousemedia.ca/sites/80-john-st-2912-toronto-on-m5v-3x4-15850296/branded"
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 2 bedroom, 2 bathroom configuration with precise measurements and optimal room flow.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Condo Apartment sales in the Entertainment District, demonstrating strong buyer demand for larger, turnkey suites.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information",
    description: "Comprehensive overview of TDSB and TCDSB options serving downtown, including nearby elementary, secondary, and specialty programs with enrollment details.",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Feature List",
    description: "Detailed inventory highlighting true floor-to-ceiling windows (no bulkheads), enlarged island with built-in power, and fully retiled bathrooms plus full specifications.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Utility Cost Estimates",
    description: "Projected monthly utility costs for 1249 sq ft including hydro, water, HVAC, and high-speed internet based on building systems and energy-efficient lighting.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Local Amenities Guide",
    description: "Curated directory of shopping, dining, recreation, and entertainment within walking distance of 80 John St, including insider picks and transit connections.",
    iconName: "Map"
  },
  {
    id: 7,
    title: "Home Inspection Tips",
    description: "Professional inspection guidance focusing on the 2021 kitchen and bathroom renovations, curtain-wall glazing, and in-suite HVAC controls.",
    iconName: "Search"
  },
  {
    id: 8,
    title: "Financing Resources",
    description: "Mortgage pre-approval resources, down payment strategies, and competitive financing options for the $1,495,000 purchase price range.",
    iconName: "CreditCard"
  }
];

// property configuration
export const property = {
  name: "80 John St",
  address: {
    street: "80 John St Unit 2912",
    city: "Toronto",
    state: "ON",
    zip: "M5V 3X4",
    country: "Canada"
  },
  price: "$1,495,000",
  beds: 2,
  baths: 2,
  sqft: 1249,
  lotSize: "N/A (Condominium)",
  yearBuilt: 2010,
  type: "Condo Apartment",
  status: "For Sale",
  description: "Sophisticated condo apartment offering sun-filled open living, true floor-to-ceiling windows, and a cohesive $90K renovation in Toronto’s coveted Entertainment District steps to dining, theatre, and transit.",
  shortDescription: "Turnkey luxury condo with floor-to-ceiling windows in Entertainment District",
  longDescription: "This refined Entertainment District residence balances space, light, and design. Enjoy a sun-washed living/dining framed by full-height glazing (no bulkheads), a custom kitchen with enlarged island and built-in power, and two spa-like bathrooms retiled floor-to-ceiling. The smart 2-bed + den layout spans 1249 sq ft plus a usable 143 sq ft balcony. Southeast exposure, parking, and an owned locker complete this turnkey downtown retreat steps to TTC, PATH, and top dining.",
  mainFeatures: [],
  propertyType: "Condo Apartment",
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  heroCaption: "Turnkey luxury condo with floor-to-ceiling windows in Entertainment District"
};

// propertyFeatures configuration
export const propertyFeatures = [
  "Custom-designed kitchen with enlarged island, seating-side storage, and a built-in power outlet for laptops, appliances, and entertaining",
  "True floor-to-ceiling glazing in principal rooms with no bulkheads, maximizing light, views, and dramatic sightlines",
  "Southeast exposure providing bright, consistent daylight without harsh late-afternoon glare",
  "Designer-renovated bathrooms with floor-to-ceiling tiling on all walls, new vanities, modern fixtures, and upgraded toilets for a spa-like feel",
  "Cohesive 2021 renovation across kitchen and baths ensuring matching materials, finishes, and hardware for a unified aesthetic",
  "Workable den offering a quiet, functional office or guest space without compromising the main living area",
  "Energy-efficient double-pane curtain-wall windows enhancing comfort and sound attenuation",
  "Individually controlled in-suite HVAC with programmable thermostat for precise, year-round climate control",
  "Predominantly LED lighting post-renovation for improved efficiency and ambiance",
  "143 sq ft balcony sized for real dining/seating, extending the living space outdoors",
  "Owned parking space plus owned locker delivering true downtown convenience and storage",
  "Function-first island upgrade increases prep area and storage while improving flow for hosting",
  "Pre-wired for high-speed internet/cable and ready for smart add-ons like locks, lighting, and thermostats",
  "Clean, uninterrupted sightlines from entry to windows create an immediate wow factor and an expansive feel"
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "80 John St",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839",
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  footer: {
    copyrightText: "© 2024 80 John St. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "80 John St | Turnkey Luxury Condo with Views | Toronto",
  description: "Discover this renovated condo apartment featuring floor-to-ceiling windows, an enlarged island with power, and SE light in the Entertainment District. Book now.",
  keywords: "luxury condo, Toronto real estate, Entertainment District, floor-to-ceiling windows, renovated kitchen, 2 bedroom condo, downtown Toronto, parking and locker, virtual tour, 1.5M condo",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757004589506-2912-80 John St-01.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://80johnst.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "Danielle Morgan",
    role: "Recent Homebuyer",
    content: "Arslan Ahmed made the process effortless. The wall of floor-to-ceiling windows with no bulkheads and the functional den sold us. The enlarged island is perfect for work and entertaining.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Jason Patel",
    role: "Interior Designer",
    content: "The cohesive 2021 renovation is impressive—matching materials across the kitchen and baths elevate the entire suite. In this location, the natural light and clean sightlines are a rare find. Arslan presented it perfectly.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Monica Li",
    role: "Neighborhood Resident",
    content: "I’ve lived in the Entertainment District for 6 years. Being steps to theatres, TTC, and great dining is unbeatable. Suites with real outdoor space and parking like this are especially desirable here.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg"
  }
];