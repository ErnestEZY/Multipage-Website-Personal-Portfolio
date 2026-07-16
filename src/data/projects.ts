export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "hotel-booking",
    title: "Python Hotel Booking System",
    category: "Programming",
    image: "/assets/work-img-7.jpg",
    alt: "Hotel booking system screenshot",
    description:
      "A Python-based hotel booking system built for coursework — covering reservations, guest records, and core booking flows. Update this summary with your own project highlights.",
    featured: true,
  },
  {
    id: "charity-website",
    title: "Charity Website",
    category: "Web Design",
    image: "/assets/work-img-3.jpg",
    alt: "Charity website built for Kebso.Life",
    description:
      "A charity website design and build (Kebso.Life) focused on clear storytelling and easy donation pathways. Replace this text with outcomes and technologies you used.",
    featured: true,
  },
  {
    id: "music-library",
    title: "Java Music Library Manager",
    category: "Programming",
    image: "/assets/work-img-9.jpg",
    alt: "Music library manager interface",
    description:
      "A Java application for organising and managing a music library — catalogue, search, and playback-related workflows from diploma studies.",
    featured: true,
  },
  {
    id: "vending-machine",
    title: "Vending Machine",
    category: "Programming",
    image: "/assets/work-img-1.jpg",
    alt: "Vending machine project",
    description:
      "Programming project modelling a vending machine — selection, stock logic, and transaction handling. Add your own technical details here.",
  },
  {
    id: "library-lending",
    title: "Library Lending System",
    category: "Programming",
    image: "/assets/work-img-2.jpg",
    alt: "Library lending system",
    description:
      "A library lending system covering borrow/return flows and record keeping. Edit this description with stack and features.",
  },
  {
    id: "online-quiz",
    title: "Online Quiz Development",
    category: "Web Development",
    image: "/assets/work-img-4.jpg",
    alt: "Online quiz application",
    description:
      "Web-based quiz experience for learners — questions, scoring, and results. Update with your implementation notes.",
  },
  {
    id: "pos-pizza",
    title: "POS Pizza System",
    category: "Programming",
    image: "/assets/work-img-5.jpg",
    alt: "Pizza point-of-sale system",
    description:
      "Point-of-sale style pizza ordering system focused on orders, menus, and checkout logic.",
  },
  {
    id: "invoice-system",
    title: "Invoice System",
    category: "System Development",
    image: "/assets/work-img-6.jpg",
    alt: "Invoice system interface",
    description:
      "Invoice generation and tracking system for billing workflows. Add client or coursework context as needed.",
  },
  {
    id: "team-trees",
    title: "Free Tree Volunteering (Team Trees)",
    category: "Community",
    image: "/assets/work-img-8.jpg",
    alt: "Students volunteering for tree planting",
    description:
      "Community volunteering with Team Trees — contributing time to environmental outreach alongside academic life.",
  },
];
