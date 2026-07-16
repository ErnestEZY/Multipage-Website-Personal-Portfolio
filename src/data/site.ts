export const site = {
  name: "Eh Zhong Yu (Ernest)",
  brand: "Zhong Yu",
  role: "Software Engineering Student & Developer",
  tagline:
    "Building web and app experiences with clean code, thoughtful design, and a focus on real-world usefulness.",
  location: "Bandar Pinggiran Subang 2, Shah Alam Selangor",
  email: "ernesteh.zy04@gmail.com",
  phone: "+6016-981 9647",
  resume: "/assets/EhZhongYu_Resume.pdf",
  photo: "/assets/my-photo.jpg",
  footerBlurb:
    "Software Engineering student at UOW Malaysia with a Diploma in Computer Science from INTI, building web and app projects that solve practical problems.",
  socials: [
    // Add real URLs when ready — icons stay hidden while href is empty
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
] as const;

export const faqs = [
  {
    question: "What kind of work do you focus on?",
    answer:
      "Web development, application programming, and practical system projects — from coursework builds to internship support work.",
  },
  {
    question: "Which technologies are you most comfortable with?",
    answer:
      "JavaScript, Python, HTML/CSS, Java, PHP, MySQL, and related tools from my diploma and bachelor studies — plus whatever the project needs next.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form on this page, or email me directly. I usually reply within a few days.",
  },
] as const;
