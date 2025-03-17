import { SkillItem } from "../projectsData";

export type Language = "en" | "fr" | "es";

// Main translations types
export type NavBarTranslations = {
  home: string;
  about: string;
  portfolio: string;
  contact: string;
  language: string;
  theme: string;
};

export type HeroTranslations = {
  roles: string[];
  statusText: string;
  description: string;
  ctaButtonPrimary: string;
  ctaButtonSecondary: string;
};

export type AboutTranslations = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  job: string;
  description: string;
  cv: {
    url: string;
    buttonText: string;
  };
  cards: AboutCards;
};

export type PortfolioTranslations = {
  title: string;
  subtitle: string;
  viewLive: string;
  tabs: PortfolioTabs;
};

export type ContactTranslations = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  connect: {
    title: string;
    subtitle: string;
    emailPrefix: string;
  };
};

export type FooterTranslations = {
  copyright: string;
};

export type ReusablesTranslations = {
  showMore: string;
  showLess: string;
  themeOptions: {
    dark: string;
    light: string;
  };
  years: string;
  locale: string;
};

// -----------------

// All translations type
export type AllTranslations = {
  navbar: NavBarTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  portfolio: PortfolioTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  reusables: ReusablesTranslations;
};

/**
 * About Types
 */

type JobsElement = {
  jobTitle: string;
  startDate: string; // "YYYY-MM-DD"
  endDate?: string; // "YYYY-MM-DD"
};

type EducationElement = {
  school: string;
  date: string;
  description: string;
  score?: string;
};

type LanguageElement = {
  name: string;
  level: string;
  flag: string;
};

export interface AboutCards {
  experience: {
    title: string;
    jobs: JobsElement[];
  };
  education: {
    title: string;
    degrees: EducationElement[];
  };
  languages: {
    title: string;
    list: LanguageElement[];
  };
}
export type AboutCardType = keyof AboutCards;

/**
 * Portfolio Types
 */
interface PortfolioTabs {
  projects: {
    subtitle: string;
    tabName: string;
    content: Project[];
  };
  career: {
    subtitle: string;
    tabName: string;
    content: Experience[];
  };
  skills: {
    subtitle: string;
    tabName: string;
    content: SkillItem[];
  };
}
export type PortfolioTab = keyof PortfolioTabs;

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  imageSrc: string;
  url: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
}
