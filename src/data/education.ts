export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "experience";
};

export const timeline: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "Bachelor of Software Engineering (Hons)",
    org: "UOW Malaysia",
    description:
      "Undergraduate studies focused on software engineering practices, system design, and modern development workflows.",
    type: "education",
  },
  {
    period: "2024",
    title: "IT Support Intern",
    org: "IFIXX RETAIL SDN BHD",
    description:
      "Two-month internship maintaining systems and providing technical assistance, applying technology to everyday operational problems.",
    type: "experience",
  },
  {
    period: "2022 – 2024",
    title: "Diploma in Computer Science",
    org: "INTI International College Subang",
    description:
      "Built a foundation in programming, web development, databases, and teamwork through coursework and project work.",
    type: "education",
  },
  {
    period: "2017 – 2022",
    title: "Sijil Pelajaran Malaysia (SPM)",
    org: "SMK Subang",
    description: "Completed secondary education at SMK Subang.",
    type: "education",
  },
];
