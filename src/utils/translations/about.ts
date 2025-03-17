import { AboutTranslations, Language } from "./types";

const en: AboutTranslations = {
  title: "About",
  titleHighlight: "me",
  subtitle: "Transforming ideas into digital experiences",
  job: "Frontend Developer",
  description:
    "I'm a passionate frontend web development professional dedicated to transforming creative ideas into engaging digital experiences. With a focus on clean code and intuitive user interfaces, I bring designs to life through modern web technologies and frameworks.",
  cv: {
    url: "https://drive.google.com/uc?export=download&id=1-mcc-AHcZEPt7XG4FlXxCBHFAwBnkxvn",
    buttonText: "Download my CV",
  },
  cards: {
    experience: {
      title: "Years of experience",
      jobs: [
        {
          startDate: "2021-06-01",
          jobTitle: "Frontend Developer",
        },
        {
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          jobTitle: "R&D Project Manager",
        },
        {
          startDate: "2016-03-01",
          endDate: "2019-12-31",
          jobTitle: "Software Engineer (Manufacturing Industry)",
        },
      ],
    },
    education: {
      title: "Graduated",
      degrees: [
        {
          school: "Cambridge Assessment English",
          date: "2018",
          description: "FCE (First Certificate in English) B2",
          score: "Overall score: 174",
        },
        {
          school: "University of Paris-Saclay",
          date: "2016",
          description: "Electronics, Electrical Energy & Automation Master's degree",
        },
      ],
    },
    languages: {
      title: "Languages",
      list: [
        {
          name: "French",
          flag: "france",
          level: "Native",
        },
        {
          name: "English",
          flag: "united-kingdom",
          level: "B2 graduated",
        },
        {
          name: "Spanish",
          flag: "spain",
          level: "Fluent",
        },
      ],
    },
  },
};

const fr: AboutTranslations = {
  title: "À Propos de",
  titleHighlight: "moi",
  subtitle: "Je transforme vos idées en expériences digitales",
  job: "Développeur Frontend",
  description:
    "Je suis un développeur web frontend passionné, dédié à transformer des idées créatives en expériences numériques captivantes. Avec un accent mis sur le code propre et les interfaces utilisateur intuitives, je (re)donne vie aux designs grâce aux technologies et frameworks web modernes.",
  cv: {
    url: "https://drive.google.com/uc?export=download&id=1-jdMnhED5FLZ1X9OGENo7PHI-ORHbF8b",
    buttonText: "Télécharger mon CV",
  },
  cards: {
    experience: {
      title: "Années d’expérience",
      jobs: [
        {
          startDate: "2021-06-01",
          jobTitle: "Développeur Frontend",
        },
        {
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          jobTitle: "Chef de projet en recherche et développement",
        },
        {
          startDate: "2016-03-01",
          endDate: "2019-12-31",
          jobTitle: "Ingénieur logiciel (Industrie manufacturière)",
        },
      ],
    },
    education: {
      title: "Diplômé",
      degrees: [
        {
          school: "Cambridge Assessment English",
          date: "2018",
          description: "FCE (First Certificate in English) B2",
          score: "Score global : 174",
        },
        {
          school: "Université de Paris-Saclay",
          date: "2016",
          description: "Master en Electronique, Energie Electrique & Automatique",
        },
      ],
    },
    languages: {
      title: "Langues",
      list: [
        {
          name: "Français",
          flag: "france",
          level: "Langue Maternelle",
        },
        {
          name: "Anglais",
          flag: "united-kingdom",
          level: "Diplômé B2",
        },
        {
          name: "Espagnol",
          flag: "spain",
          level: "Avancé",
        },
      ],
    },
  },
};

const es: AboutTranslations = {
  title: "Sobre",
  titleHighlight: "mí",
  subtitle: "Transformo sus ideas en experiencias digitales",
  job: "Desarrollador Frontend",
  description:
    "Soy un profesional apasionado del desarrollo web frontend, dedicado a transformar ideas creativas en experiencias digitales atractivas. Con un enfoque en código limpio e interfaces de usuario intuitivas, doy vida a los diseños a través de tecnologías y frameworks web modernos.",
  cv: {
    url: "https://drive.google.com/uc?export=download&id=1-pBj9FVr3CoO2ifbP_KMmVrf8jOcBLBJ",
    buttonText: "Descargar mi CV",
  },
  cards: {
    experience: {
      title: "Años de experiencia",
      jobs: [
        {
          startDate: "2021-06-01",
          jobTitle: "Desarrollador Frontend",
        },
        {
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          jobTitle: "Project Manager en investigación y desarrollo",
        },
        {
          startDate: "2016-03-01",
          endDate: "2019-12-31",
          jobTitle: "Ingeniero de software (Industria manufacturera)",
        },
      ],
    },
    education: {
      title: "Graduado",
      degrees: [
        {
          school: "Cambridge Assessment English",
          date: "2018",
          description: "FCE (First Certificate in English) B2",
          score: "Puntaje global: 174",
        },
        {
          school: "Universidad de Paris-Saclay",
          date: "2016",
          description: "Máster en Electrónica, Energía Eléctrica y Automatización",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      list: [
        {
          name: "Francés",
          flag: "france",
          level: "Nativo",
        },
        {
          name: "Anglais",
          flag: "united-kingdom",
          level: "Graduado B2",
        },
        {
          name: "Español",
          flag: "spain",
          level: "Avanzado",
        },
      ],
    },
  },
};

export const aboutTranslations: Record<Language, AboutTranslations> = {
  en,
  fr,
  es,
};
