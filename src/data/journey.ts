export type Degree = {
  status: string;
  title: string;
  institution: string;
  period: string;
  description: string;
};

export type Milestone = {
  period: string;
  title: string;
  category: string;
  description: string;
  href?: string;
  hrefLabel?: string;
};

export type Hobby = {
  id: string;
  title: string;
  tagline: string;
  description: string;
};

export const degrees: Degree[] = [
  {
    status: "In progress",
    title: "Bachelor of Software Engineering (Hons)",
    institution: "UOW Malaysia",
    period: "2024 – Present",
    description:
      "Undergraduate studies focused on software engineering practices, system design, and modern development workflows.",
  },
  {
    status: "Completed",
    title: "Diploma in Computer Science",
    institution: "INTI International College Subang",
    period: "2022 – 2024",
    description:
      "Built a foundation in programming, web development, databases, and teamwork through coursework and project work.",
  },
];

export const milestones: Milestone[] = [
  {
    period: "2024",
    title: "IT Support Internship",
    category: "Experience",
    description:
      "Two months at IFIXX RETAIL SDN BHD — hands-on systems support, troubleshooting, and learning how tech helps a real retail team day to day.",
  },
  {
    period: "Community",
    title: "Free Tree Volunteering (Team Trees)",
    category: "Volunteer",
    description:
      "Joined Team Trees volunteering with peers — giving time to environmental outreach alongside academic life.",
  },
  {
    period: "Recognition",
    title: "Certificate of Appreciation",
    category: "Award",
    description:
      "Recognised with a Certificate of Appreciation — a reminder that effort and contribution matter beyond grades alone.",
    href: "/assets/Certificate_of_Appreciation.pdf",
    hrefLabel: "View certificate",
  },
];

export const hobbies: Hobby[] = [
  {
    id: "speedcubing",
    title: "Speedcubing",
    tagline: "Focus under the clock",
    description:
      "Solving Rubik’s cubes for speed trains pattern recognition, calm under pressure, and the habit of breaking a hard problem into cleaner moves.",
  },
  {
    id: "wing-chun",
    title: "Wing Chun Martial Art",
    tagline: "Structure, timing, discipline",
    description:
      "Practising Wing Chun builds body awareness, patience, and respect for fundamentals — the same mindset I try to bring into learning software.",
  },
  {
    id: "gaming",
    title: "Gaming",
    tagline: "Systems, stories, and play",
    description:
      "Games keep me curious about interaction design, pacing, and how systems reward (or frustrate) players — ideas that often spill into how I think about UX.",
  },
];
