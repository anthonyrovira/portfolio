export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "other";

export interface SkillItem {
  id: string;
  name: string;
  imageSrc: string;
  category: SkillCategory[];
  proficiency: number; // 1-5 scale
}

export const techStack: SkillItem[] = [
  // Backend
  {
    id: "nestjs",
    name: "NestJS",
    category: ["backend"],
    imageSrc: "pictures/nestjs.webp",
    proficiency: 2,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: ["backend"],
    imageSrc: "pictures/nodejs.webp",
    proficiency: 4,
  },

  {
    id: "swagger",
    name: "Swagger",
    category: ["backend"],
    imageSrc: "pictures/swagger.webp",
    proficiency: 3,
  },

  // Database
  {
    id: "firebase",
    name: "Firebase",
    category: ["database"],
    imageSrc: "pictures/firebase.webp",
    proficiency: 3,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: ["database"],
    imageSrc: "pictures/mongodb.webp",
    proficiency: 4,
  },
  {
    id: "sql",
    name: "SQL",
    category: ["database"],
    imageSrc: "pictures/sqldatabase.webp",
    proficiency: 4,
  },
  {
    id: "supabase",
    name: "Supabase",
    category: ["database"],
    imageSrc: "pictures/supabase.webp",
    proficiency: 4,
  },

  // DevOps
  {
    id: "ansible",
    name: "Ansible",
    category: ["devops"],
    imageSrc: "pictures/ansible.webp",
    proficiency: 2,
  },
  {
    id: "aws",
    name: "AWS",
    category: ["devops"],
    imageSrc: "pictures/aws.webp",
    proficiency: 2,
  },
  {
    id: "docker",
    name: "Docker",
    category: ["devops"],
    imageSrc: "pictures/docker.webp",
    proficiency: 4,
  },
  {
    id: "git",
    name: "Git",
    category: ["devops"],
    imageSrc: "pictures/git.webp",
    proficiency: 4,
  },
  {
    id: "grafana",
    name: "Grafana",
    category: ["devops"],
    imageSrc: "pictures/grafana.webp",
    proficiency: 4,
  },
  {
    id: "prometheus",
    name: "Prometheus",
    category: ["devops"],
    imageSrc: "pictures/prometheus.webp",
    proficiency: 3,
  },
  {
    id: "terraform",
    name: "Terraform",
    category: ["devops"],
    imageSrc: "pictures/terraform.webp",
    proficiency: 1,
  },

  // Frontend
  {
    id: "astro",
    name: "Astro",
    category: ["frontend"],
    imageSrc: "pictures/astro.webp",
    proficiency: 4,
  },
  {
    id: "css",
    name: "CSS",
    category: ["frontend"],
    imageSrc: "pictures/css.webp",
    proficiency: 5,
  },
  {
    id: "figma",
    name: "Figma",
    category: ["frontend"],
    imageSrc: "pictures/figma.webp",
    proficiency: 4,
  },
  {
    id: "html",
    name: "HTML",
    category: ["frontend"],
    imageSrc: "pictures/html.webp",
    proficiency: 5,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: ["frontend", "backend"],
    imageSrc: "pictures/javascript.webp",
    proficiency: 5,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: ["frontend"],
    imageSrc: "pictures/nextjs.webp",
    proficiency: 4,
  },
  {
    id: "playwright",
    name: "Playwright",
    category: ["frontend"],
    imageSrc: "pictures/playwright.webp",
    proficiency: 4,
  },
  {
    id: "react",
    name: "React",
    category: ["frontend"],
    imageSrc: "pictures/react.webp",
    proficiency: 5,
  },
  {
    id: "react-native",
    name: "React Native",
    category: ["frontend"],
    imageSrc: "pictures/react.webp",
    proficiency: 3,
  },
  {
    id: "redux",
    name: "Redux",
    category: ["frontend"],
    imageSrc: "pictures/redux.webp",
    proficiency: 5,
  },
  {
    id: "sass",
    name: "Sass",
    category: ["frontend"],
    imageSrc: "pictures/sass.webp",
    proficiency: 5,
  },
  {
    id: "storybook",
    name: "Storybook",
    category: ["frontend"],
    imageSrc: "pictures/storybook.webp",
    proficiency: 5,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: ["frontend"],
    imageSrc: "pictures/tailwindcss.webp",
    proficiency: 5,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: ["frontend", "backend"],
    imageSrc: "pictures/typescript.webp",
    proficiency: 5,
  },
  {
    id: "vitest",
    name: "Vitest",
    category: ["frontend"],
    imageSrc: "pictures/vitest.webp",
    proficiency: 5,
  },

  // Other
  {
    id: "browserstack",
    name: "BrowserStack",
    category: ["other"],
    imageSrc: "pictures/browserstack.webp",
    proficiency: 2,
  },
  {
    id: "cpp",
    name: "C++",
    category: ["other"],
    imageSrc: "pictures/cpp.webp",
    proficiency: 4,
  },
  {
    id: "labview",
    name: "LabVIEW",
    category: ["other"],
    imageSrc: "pictures/labview.webp",
    proficiency: 5,
  },
];
