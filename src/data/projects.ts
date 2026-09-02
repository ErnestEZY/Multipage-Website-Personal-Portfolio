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
    id: "interview-coach-prep",
    title: "Interview Coach Prep (ICP)",
    category: "Full-Stack / AI",
    image: "/assets/work-icp.jpg",
    alt: "Interview Coach Prep platform screenshot",
    description:
      "An AI-assisted career preparation platform with resume analysis, mock interview simulation (STT/TTS), and job search — built with FastAPI, MongoDB, Vue, Flutter, and Tauri, using LlamaIndex and Mistral AI for scoring and feedback. GitHub: https://github.com/ErnestEZY/interview_coach_prep — Live: https://interview-coach-prep.onrender.com/",
    featured: true,
  },
  {
    id: "food-nutrition-tracker",
    title: "Food Nutrition Tracker",
    category: "Web App",
    image: "/assets/work-fnt.jpg",
    alt: "Food nutrition tracker dashboard",
    description:
      "A Streamlit web app for logging meals, tracking macros against BMI-based goals, and reviewing 7-day trends, streaks, and insights — backed by MongoDB for persistent food history. GitHub: https://github.com/ErnestEZY/Food-Nutrition-Tracker-App — Live: https://food-nutrition-tracker-pro.streamlit.app/",
    featured: true,
  },
  {
    id: "kpi-monitoring-system",
    title: "KPI Monitoring System",
    category: "Web System",
    image: "/assets/work-kpi.jpg",
    alt: "Supervisor KPI monitoring dashboard",
    description:
      "A supervisor-facing sales KPI system with score entry, analytics charts, reports, and browser-based predictive alerts — PHP, MySQL, Bootstrap, Chart.js, and TensorFlow.js for performance forecasting. GitHub: https://github.com/ErnestEZY/kpi_monitoring_system",
    featured: true,
  },
  {
    id: "food-ordering-system",
    title: "Food Ordering System",
    category: "Desktop / OOP",
    image: "/assets/work-fos.jpg",
    alt: "JavaFX food ordering system interface",
    description:
      "A JavaFX desktop ordering system applying OOP, JDBC, and MySQL — built through STQA and SRE coursework to practise reliable UI flows, data access, and quality-focused development. GitHub: https://github.com/ErnestEZY/food-ordering-system",
  },
  {
    id: "calculator-app",
    title: "Calculator App (.NET MAUI)",
    category: "Cross-Platform",
    image: "/assets/work-calculator.jpg",
    alt: "Cross-platform calculator app built with .NET MAUI",
    description:
      "A RAD assignment prototype demonstrating basic mobile/desktop app development with .NET MAUI and C# — arithmetic operations, clear/backspace controls, and a responsive UI across Windows and mobile targets. GitHub: https://github.com/ErnestEZY/calculator-app",
  },
  {
    id: "mini-hackathon",
    title: "Student Life Hub (Mini Hackathon)",
    category: "Frontend",
    image: "/assets/work-mini.jpg",
    alt: "Student Life Hub dashboard from mini hackathon",
    description:
      "A frontend-only student survival dashboard from a mini hackathon — classes, assignments, study plans, resources, group tasks, and grades in vanilla HTML/CSS/JS with localStorage persistence. GitHub: https://github.com/ErnestEZY/mini-hackathon",
  },
  {
    id: "hotel-booking",
    title: "Python Hotel Booking System",
    category: "Programming",
    image: "/assets/work-img-7.jpg",
    alt: "Hotel booking system screenshot",
    description:
      "A Python-based hotel booking system built for coursework — covering reservations, guest records, and core booking flows.",
  },
  {
    id: "charity-website",
    title: "Charity Website",
    category: "Web Design",
    image: "/assets/work-img-3.jpg",
    alt: "Charity website built for Kebso.Life",
    description:
      "A charity website design and build (Kebso.Life) focused on clear storytelling and easy donation pathways. Prototype / assignment demo: https://live-kebso-life.pantheonsite.io/",
  },
  {
    id: "music-library",
    title: "Java Music Library Manager",
    category: "Programming",
    image: "/assets/work-img-9.jpg",
    alt: "Music library manager interface",
    description:
      "A Java application for organising and managing a music library — catalogue, search, and playback-related workflows from diploma studies.",
  },
  {
    id: "vending-machine",
    title: "Vending Machine",
    category: "Programming",
    image: "/assets/work-img-1.jpg",
    alt: "Vending machine project",
    description:
      "Programming project modelling a vending machine — selection, stock logic, and transaction handling.",
  },
  {
    id: "library-lending",
    title: "Library Lending System",
    category: "Programming",
    image: "/assets/work-img-2.jpg",
    alt: "Library lending system",
    description:
      "A library lending system covering borrow/return flows and record keeping.",
  },
  {
    id: "online-quiz",
    title: "Online Quiz Development",
    category: "Web Development",
    image: "/assets/work-img-4.jpg",
    alt: "Online quiz application",
    description:
      "Web-based quiz experience for learners — questions, scoring, and results.",
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
      "Invoice generation and tracking system for billing workflows.",
    featured: true,
  },
  {
    id: "team-trees",
    title: "Free Tree Volunteering (Team Trees)",
    category: "Community",
    image: "/assets/work-img-8.jpg",
    alt: "Students volunteering for tree planting",
    description:
      "Community volunteering with Team Trees — contributing time to environmental outreach alongside academic life. YouTube video: https://youtu.be/rEO51iO7Gik?si=PI4waUkvn8b77GmJ",
  },
];
