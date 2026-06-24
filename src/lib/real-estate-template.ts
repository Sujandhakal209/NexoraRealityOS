export type PropertyStatus = "For Sale" | "For Rent" | "Sold";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  status: PropertyStatus;
  type: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  featured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  image: string;
  dealsClosed: number;
  rating: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  helper: string;
}

export interface PropertyCategory {
  id: string;
  name: string;
  count: string;
  image: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
}

export const templateProperties: Property[] = [
  {
    id: "p-001",
    title: "Glasshouse Residence",
    location: "Lazimpat, Kathmandu",
    price: "NPR 8.4 Cr",
    status: "For Sale",
    type: "Villa",
    beds: 5,
    baths: 6,
    area: "6,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "p-002",
    title: "Skyline Penthouse",
    location: "Jhamsikhel, Lalitpur",
    price: "NPR 3.2 L/mo",
    status: "For Rent",
    type: "Penthouse",
    beds: 4,
    baths: 4,
    area: "3,450 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p-003",
    title: "Courtyard Family Estate",
    location: "Budhanilkantha, Kathmandu",
    price: "NPR 6.1 Cr",
    status: "Sold",
    type: "House",
    beds: 6,
    baths: 5,
    area: "8 anna",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const templateAgents: Agent[] = [
  {
    id: "a-001",
    name: "Aarav Shrestha",
    role: "Principal Broker",
    location: "Kathmandu Valley",
    phone: "+977 9800000001",
    email: "aarav@example.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    dealsClosed: 124,
    rating: 4.9,
  },
  {
    id: "a-002",
    name: "Mira Karki",
    role: "Luxury Property Advisor",
    location: "Lalitpur",
    phone: "+977 9800000002",
    email: "mira@example.com",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    dealsClosed: 88,
    rating: 4.8,
  },
  {
    id: "a-003",
    name: "Kabir Basnet",
    role: "Commercial Property Lead",
    location: "Kathmandu",
    phone: "+977 9800000003",
    email: "kabir@example.com",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    dealsClosed: 76,
    rating: 4.7,
  },
];

export const templateTestimonials: Testimonial[] = [
  {
    id: "t-001",
    quote:
      "The team understood our brief quickly, shortlisted serious options, and handled every viewing with complete professionalism.",
    name: "Suman Adhikari",
    role: "Home Buyer",
    location: "Bhaisepati",
    rating: 5,
  },
  {
    id: "t-002",
    quote:
      "Our listing received better qualified inquiries and sold faster than expected because the presentation felt premium from day one.",
    name: "Nisha Rana",
    role: "Property Seller",
    location: "Baluwatar",
    rating: 5,
  },
];

export const templateStats: Stat[] = [
  {
    id: "s-001",
    label: "Properties Sold",
    value: "680+",
    helper: "Residential, commercial, and land transactions closed.",
  },
  {
    id: "s-002",
    label: "Active Listings",
    value: "250+",
    helper: "Verified homes, villas, apartments, and land parcels.",
  },
  {
    id: "s-003",
    label: "Happy Clients",
    value: "1,200+",
    helper: "Buyers, sellers, investors, and developer partners.",
  },
  {
    id: "s-004",
    label: "Years in Business",
    value: "14",
    helper: "Local market experience with senior property advisors.",
  },
];

export const propertyCategories: PropertyCategory[] = [
  {
    id: "apartment",
    name: "Apartment",
    count: "86 Listings",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "villa",
    name: "Villa",
    count: "42 Listings",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "commercial",
    name: "Commercial",
    count: "31 Listings",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "land",
    name: "Land",
    count: "58 Listings",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
];

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    id: "advisory",
    title: "Private Advisory",
    description:
      "Senior consultants guide each buyer and seller with market context, realistic pricing, and clear next steps.",
  },
  {
    id: "verified",
    title: "Verified Inventory",
    description:
      "Listings are reviewed for location, ownership details, pricing accuracy, and presentation quality.",
  },
  {
    id: "negotiation",
    title: "Confident Negotiation",
    description:
      "Our team supports offers, site visits, legal coordination, and deal closure with disciplined communication.",
  },
];
