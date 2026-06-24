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
    label: "Premium Listings",
    value: "250+",
    helper: "Verified homes, villas, apartments, and land parcels.",
  },
  {
    id: "s-002",
    label: "Deal Value",
    value: "NPR 3.8B",
    helper: "Closed across residential and developer projects.",
  },
  {
    id: "s-003",
    label: "Client Rating",
    value: "4.9/5",
    helper: "Average score from buyers, sellers, and investors.",
  },
];
