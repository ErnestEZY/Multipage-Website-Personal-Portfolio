export const site = {
  name: "Eh Zhong Yu (Ernest)",
  brand: "Zhong Yu",
  role: "Software Engineering Student & Developer",
  tagline:
    "Building web and app experiences with clean code, thoughtful design, and a focus on real-world usefulness.",
  location: "Bandar Pinggiran Subang 2, Shah Alam Selangor",
  email: "ernesteh.zy04@gmail.com",
  phone: "+6016-981 9647",
  /** WhatsApp chat link derived from phone (digits only). */
  whatsapp: "https://wa.me/60169819647",
  resume: "/assets/EhZhongYu_Resume.pdf",
  photo: "/assets/my-photo.jpg",
  footerBlurb:
    "Software Engineering student at UOW Malaysia with a Diploma in Computer Science from INTI, building web and app projects that solve practical problems.",
  socials: [
    // Empty href keeps the link hidden in the UI
    { label: "GitHub", href: "https://github.com/ErnestEZY" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eh-zhong-yu-447911281/",
    },
    {
      label: "WCA",
      href: "https://www.worldcubeassociation.org/persons/2017YUER01",
    },
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
      "Use the contact form on this page, email me, message me on WhatsApp via the phone link, or reach out on LinkedIn.",
  },
] as const;
