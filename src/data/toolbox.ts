export type ToolboxGroup = {
  label: string;
  note: string;
  items: string[];
};

/**
 * Low-profile skill showcase — grouped by familiarity, not percentages.
 * Edit freely; keep "Exploring" honest for early / AI-assisted tools.
 */
export const toolbox: ToolboxGroup[] = [
  {
    label: "Core",
    note: "Comfortable from coursework, projects, and internship work.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      "C++",
      "C#",
      "PHP",
      "R",
      "SAS",
      "SQL",
      "Git",
      "GitHub",
      "Agile & Incremental",
    ],
  },
  {
    label: "Worked with",
    note: "Used in real coursework, projects, or internship tasks along with AI tools.",
    items: [
      "Vue.js",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "JavaFX",
      "Spring Boot",
      "FastAPI",
      "REST API",
      "Nginx",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Streamlit",
      "Google Apps Script",
      "LlamaIndex",
      "Mistral API",
    ],
  },
  {
    label: "Exploring",
    note: "Early exposure — learning with guidance and AI-assisted practice.",
    items: [
      "Flutter",
      "Tauri",
      "Go",
      ".NET",
      "Flask",
      "Django",
      "Express.js",
      "React Native",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
];

export const waysOfWorking = [
  "Requirements Planning",
  "Software Design & Patterns",
  "Software Testing",
  "Prompt Engineering",
  "LLM Applications and Integrations",
  "Retrieval-Augmented Generation",
];
