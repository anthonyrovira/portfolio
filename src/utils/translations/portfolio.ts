import { techStack } from "../projectsData";
import { Language, PortfolioTranslations } from "./types";

const en: PortfolioTranslations = {
  title: "Portfolio",
  subtitle: "Check out some of my recent projects",
  viewLive: "Live Demo",
  tabs: {
    projects: {
      subtitle: "Check out some of my recent projects",
      tabName: "Projects",
      content: [
        {
          id: "portfolio",
          title: "Personal Portfolio",
          description:
            "A modern personal portfolio website built with React and Typescript, showcasing my projects, skills, and experiences.",
          imageSrc: "pictures/portfolio.webp",
          tags: ["react", "typescript", "tailwindcss", "firebase", "vercel"],
          demoUrl: "https://anthonyrovira.com/",
          repoUrl: ["https://github.com/anthonyrovira/portfolio"],
        },
        {
          id: "ichiban-clone",
          title: "Ichiban Clone",
          description:
            "A powerful replication of the Ichiban website, built with Astro and Typescript, aiming to improve the performance and reactivity of the original site, showcasing advanced web optimization techniques",
          imageSrc: "pictures/ichiban.webp",
          tags: ["typescript", "astro", "vercel"],
          demoUrl: "https://ichiban-clone.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/ichiban-clone"],
        },
        {
          id: "insta-chef",
          title: "InstaChef",
          description:
            "A modern web application designed to help users discover recipes based on the ingredients they already have. With a user-friendly interface and efficient search capabilities.",
          imageSrc: "pictures/instachef.webp",
          tags: ["react", "typescript", "tailwindcss", "nextjs", "supabase", "vercel"],
          demoUrl: "https://instachef.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/insta-chef"],
        },
        {
          id: "terrifai",
          title: "TerrifAI",
          description: "A web application that allows users to apply spooky AI-powered transformations to their images.",
          imageSrc: "pictures/terrifai.webp",
          tags: ["react", "typescript", "tailwindcss", "astro", "vercel"],
          demoUrl: "https://terrifai.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/terrifai"],
        },
        {
          id: "marvel",
          title: "Marvel",
          description:
            "A full-stack web application that allows users to browse Marvel characters and comics, built with React and Typescript.",
          imageSrc: "pictures/marvel.webp",
          tags: ["react", "typescript", "tailwindcss", "nodejs", "express", "mongodb", "vercel"],
          demoUrl: "https://marvel.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/marvel-frontend", "https://github.com/anthonyrovira/marvel-backend"],
        },
        {
          id: "airbnb-automation",
          title: "Airbnb Automation",
          description:
            "A script that allows users to automate the process of booking Airbnb listings, built with NodeJS and Typescript.",
          imageSrc: "pictures/airbnb_automation.webp",
          tags: ["nodejs", "typescript"],
          demoUrl: "",
          repoUrl: ["https://github.com/anthonyrovira/airbnb_automation"],
        },
        // {
        //   id: "disc",
        //   title: "DISC",
        //   description:
        //     "A full-stack web application which is a personality test designed to analyze individuals' behavior and traits in a professional context, aiming to assess adaptability, behavioral preferences, and stress response.",
        //   imageSrc: "",
        //   tags: ["react", "typescript", "tailwindcss", "nestjs", "express", "prisma", "swagger"],
        //   demoUrl: "https://disc.vercel.app/",
        //   repoUrl: ["https://github.com/anthonyrovira/disc-frontend, https://github.com/anthonyrovira/disc-backend"],
        // },
      ],
    },
    career: {
      subtitle: "Professional experiences that have shaped my career",
      tabName: "Experiences",
      content: [
        {
          id: "linxea",
          company: "Linxea",
          position: "Frontend Developer",
          startDate: "2021-06-01",
          endDate: "2024-12-31",
          location: "Paris, France",
          description:
            "Specialized in savings products, Linxea is a leading online broker in France, offering a wide range of financial products and services to its clients.",
          bulletPoints: [
            "Developed a React codebase with TypeScript.",
            "Used Redux, Redux-Saga, Formik, and React-Query for state management and forms.",
            "Implemented unit tests using Jest and Testing Library.",
            "Created and managed Storybook to build a comprehensive Design System.",
            "Contributed to the implementation of end-to-end tests with Playwright.",
            "Wrote technical documentation (code conventions, feature documentation, training materials, etc.).",
          ],
          url: "https://www.linxea.com/",
          tags: [
            "react",
            "typescript",
            "redux",
            "storybook",
            "jest",
            "sass",
            "redux-saga",
            "formik",
            "react-query",
            "playwright",
          ],
          imageSrc: "pictures/linxea.webp",
        },
        {
          id: "noirot-1",
          company: "Noirot",
          position: "R&D Project Manager",
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          location: "Laon, France",
          description:
            "Noirot is a leading French manufacturer of electric radiators and heating solutions, with a strong focus on innovation and sustainable development.",
          bulletPoints: [
            "Collaborated with internal teams to propose innovative ideas for electric radiators, evaluating their technological feasibility and market acceptance potential.",
            "Conducted in-depth feasibility studies to assess the technical viability of projects in close collaboration with engineers and technicians.",
            "Worked closely with marketing teams to analyze the appeal of proposed innovations, identify market needs, and adjust projects accordingly.",
            "Defined clear specifications for R&D projects, establishing objectives, success criteria, and timelines.",
            "Led the planning, coordination, and execution of projects, managing development stages, resources, budgets, and deadlines.",
          ],
          url: "https://intuis.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "glen-dimplex",
          company: "Glen Dimplex",
          position: "Software Development Engineer",
          startDate: "2018-07-31",
          endDate: "2019-01-31",
          location: "Dunleer, Ireland",
          description:
            "Glen Dimplex is a leading international group delivering innovative, energy-efficient heating and ventilation solutions to customers worldwide.",
          bulletPoints: [
            "Designed and developed a supervision software for safety benches and climate chambers meeting regulatory standards.",
            "Validated and deepened my English proficiency through a rewarding international experience in Ireland.",
          ],
          url: "https://www.glendimplex.com/",
          tags: ["labview", "matlab", "simulink"],
          imageSrc: "pictures/glen-dimplex.webp",
        },
        {
          id: "noirot-2",
          company: "Noirot",
          position: "Software Engineer",
          startDate: "2016-03-01",
          endDate: "2017-12-31",
          location: "Laon, France",
          description:
            "Noirot is a leading French manufacturer of electric radiators and heating solutions, with a strong focus on innovation and sustainable development.",
          bulletPoints: [
            "Managed technical projects for the development of internal tools and software.",
            "Designed and developed control and monitoring software for climate test benches.",
            "Collaborated with engineering teams to integrate sensors and control systems into the software, ensuring accurate climate measurements.",
            "Contributed to the continuous improvement of software and processes related to climate test benches.",
            "Oversaw the assignment of internship projects and provided guidance to laboratory interns.",
          ],
          url: "https://www.noirot.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "abc",
          company: "ABC Essais",
          position: "Mechatronic Design Trainee",
          startDate: "2012-09-01",
          endDate: "2014-09-30",
          location: "Gonesse, France",
          description:
            "ABC Essais is an engineering company specializing in the design and manufacturing of test benches for clients in the aerospace and automotive sectors.",
          bulletPoints: [
            "Conducted mechatronic studies and design of test benches for clients in the aerospace and automotive sectors.",
            "Created mechanical components from scratch using SolidWorks, including 3D modeling, constrained assembly design, and production of standardized technical drawings for part manufacturing.",
            "Collaborated with engineering teams to meet client specifications and ensure test benches complied with applicable standards.",
            "Actively participated in design reviews and supported the technical and industrial validation phases.",
          ],
          url: "https://abc-essais.com/",
          tags: ["solidworks"],
          imageSrc: "pictures/abc.webp",
        },
      ],
    },
    skills: {
      subtitle: "Technologies and tools I use to create modern web applications",
      tabName: "Skills",
      content: techStack,
    },
  },
};

const fr: PortfolioTranslations = {
  title: "Portfolio",
  subtitle: "Découvrez certains de mes projets récents",
  viewLive: "Démo Live",
  tabs: {
    projects: {
      subtitle: "Découvrez certains de mes récents projets",
      tabName: "Projets",
      content: [
        {
          id: "portfolio",
          title: "Portfolio Personnel",
          description:
            "Un site web de portfolio personnel moderne construit avec React et Typescript, présentant mes projets, compétences et expériences.",
          imageSrc: "pictures/portfolio.webp",
          tags: ["react", "typescript", "tailwindcss", "firebase", "vercel"],
          demoUrl: "https://anthonyrovira.com/",
          repoUrl: ["https://github.com/anthonyrovira/portfolio"],
        },
        {
          id: "ichiban-clone",
          title: "Ichiban Clone",
          description:
            "Une réplication du site web d'Ichiban, construite avec React et Typescript, visant à reproduire l'apparence et la réactivité du site original.",
          imageSrc: "pictures/ichiban.webp",
          tags: ["react", "Typescript", "tailwindcss", "astro"],
          demoUrl: "https://ichiban-clone.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/ichiban-clone"],
        },
        {
          id: "insta-chef",
          title: "InstaChef",
          description:
            "Une application web moderne conçue pour aider les utilisateurs à découvrir des recettes en fonction des ingrédients qu'ils ont déjà. Avec une interface conviviale et des capacités de recherche efficaces.",
          imageSrc: "pictures/instachef.webp",
          tags: ["react", "typescript", "tailwindcss", "nextjs", "supabase", "vercel"],
          demoUrl: "https://instachef.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/insta-chef"],
        },
        {
          id: "terrifai",
          title: "TerrifAI",
          description:
            "Une application web qui permet aux utilisateurs d'appliquer des transformations effrayantes alimentées par l'IA à leurs images.",
          imageSrc: "pictures/terrifai.webp",
          tags: ["react", "typescript", "tailwindcss", "astro", "vercel"],
          demoUrl: "https://terrifai.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/terrifai"],
        },
        {
          id: "marvel",
          title: "Marvel",
          description:
            "Une application web full-stack qui permet aux utilisateurs de parcourir les personnages et les bandes dessinées de Marvel, construite avec React et Typescript.",
          imageSrc: "pictures/marvel.webp",
          tags: ["react", "typescript", "tailwindcss", "nodejs", "express", "mongodb", "vercel"],
          demoUrl: "https://marvel.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/marvel-frontend", "https://github.com/anthonyrovira/marvel-backend"],
        },
        {
          id: "airbnb-automation",
          title: "Airbnb Automation",
          description:
            "Un script qui permet aux utilisateurs d'automatiser le processus de réservation des annonces Airbnb, construit avec NodeJS et Typescript.",
          imageSrc: "pictures/airbnb_automation.webp",
          tags: ["nodejs", "typescript"],
          demoUrl: "",
          repoUrl: ["https://github.com/anthonyrovira/airbnb_automation"],
        },
      ],
    },
    career: {
      subtitle: "Expériences professionnelles qui ont façonné ma carrière",
      tabName: "Expériences",
      content: [
        {
          id: "linxea",
          company: "Linxea",
          position: "Développeur Frontend",
          startDate: "2021-06-01",
          endDate: "2024-12-31",
          location: "Paris, France",
          description:
            "Spécialiséée dans les produits d'épargne, Linxea est un courtier en ligne de premier plan en France, offrant une large gamme de produits et services financiers à ses clients.",
          bulletPoints: [
            "Développement d'une base de code React avec TypeScript.",
            "Création d'un tunnel de souscription comportant de multiples étapes et leurs validations intrinsèques",
            "Utilisation avancée de Redux, Redux-Saga, Formik et React-Query pour la gestion de l'état et des formulaires.",
            "Mise en place de tests unitaires avec Jest et Testing Library.",
            "Création et gestion de Storybook pour élaborer un Design System complet.",
            "Contribution à la mise en place de tests end-to-end avec Playwright.",
            "Rédaction de documentations techniques (conventions de code, documentation de fonctionnalités, supports de formation, etc.).",
          ],
          url: "https://www.linxea.com/",
          tags: [
            "react",
            "typescript",
            "redux",
            "storybook",
            "jest",
            "sass",
            "redux-saga",
            "formik",
            "react-query",
            "playwright",
          ],
          imageSrc: "pictures/linxea.webp",
        },
        {
          id: "noirot-1",
          company: "Noirot",
          position: "Chef de Projet R&D",
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          location: "Laon, France",
          description:
            "Noirot est un fabricant français de premier plan de radiateurs électriques et de solutions de chauffage, avec un fort accent sur l'innovation et le développement durable.",
          bulletPoints: [
            "Collaboration avec les équipes internes pour proposer des idées innovantes pour les radiateurs électriques, en évaluant leur faisabilité technologique et leur potentiel d'acceptation par le marché.",
            "Réalisation d'études de faisabilité approfondies pour évaluer la viabilité technique des projets en étroite collaboration avec les ingénieurs et les techniciens.",
            "Travail en étroite collaboration avec les équipes marketing pour analyser l'attrait des innovations proposées, identifier les besoins du marché et ajuster les projets en conséquence.",
            "Définition de spécifications claires pour les projets de R&D, en établissant des objectifs, des critères de réussite et des échéanciers.",
            "Direction de la planification, de la coordination et de l'exécution des projets, en gérant les étapes de développement, les ressources, les budgets et les délais.",
          ],
          url: "https://intuis.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "glen-dimplex",
          company: "Glen Dimplex",
          position: "Ingénieur de développement logiciel",
          startDate: "2018-07-31",
          endDate: "2019-01-31",
          location: "Dunleer, Ireland",
          description:
            "Glen Dimplex est un groupe international de premier plan qui fournit des solutions de chauffage et de ventilation innovantes et écoénergétiques à des clients du monde entier.",
          bulletPoints: [
            "Conception et développement d'un logiciel de supervision pour les bancs de sécurité et les chambres climatiques répondant aux normes réglementaires.",
            "Validation et approfondissement de ma maîtrise de l'anglais grâce à une expérience internationale enrichissante en Irlande.",
          ],
          url: "https://www.glendimplex.com/",
          tags: ["labview", "matlab", "simulink"],
          imageSrc: "pictures/glen-dimplex.webp",
        },
        {
          id: "noirot-2",
          company: "Noirot",
          position: "Ingénieur Logiciel",
          startDate: "2016-03-01",
          endDate: "2017-12-31",
          location: "Laon, France",
          description:
            "Noirot est un fabricant français de premier plan de radiateurs électriques et de solutions de chauffage, avec un fort accent sur l'innovation et le développement durable.",
          bulletPoints: [
            "Gestion de projets techniques pour le développement d'outils et de logiciels internes.",
            "Conception et développement de logiciels de contrôle et de surveillance pour les bancs d'essai climatiques.",
            "Collaboration avec les équipes d'ingénierie pour intégrer des capteurs et des systèmes de contrôle dans le logiciel, en assurant des mesures climatiques précises.",
            "Contribution à l'amélioration continue des logiciels et des processus liés aux bancs d'essai climatiques.",
            "Supervision de l'attribution des projets de stage et encadrement des stagiaires de laboratoire.",
          ],
          url: "https://www.noirot.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "abc",
          company: "ABC Essais",
          position: "Stagiaire en conception mécatronique",
          startDate: "2012-09-01",
          endDate: "2014-09-30",
          location: "Gonesse, France",
          description:
            "ABC Essais est une société d'ingénierie spécialisée dans la conception et la fabrication de bancs d'essai pour des clients des secteurs de l'aérospatiale et de l'automobile.",
          bulletPoints: [
            "Réalisation d'études mécatroniques et conception de bancs d'essai pour des clients des secteurs de l'aérospatiale et de l'automobile.",
            "Création de composants mécaniques à partir de zéro à l'aide de SolidWorks, y compris la modélisation 3D, la conception d'assemblages contraints et la production de dessins techniques normalisés pour la fabrication de pièces.",
            "Collaboration avec les équipes d'ingénierie pour répondre aux spécifications des clients et s'assurer que les bancs d'essai sont conformes aux normes applicables.",
            "Participation active aux revues de conception et soutien aux phases de validation technique et industrielle.",
          ],
          url: "https://abc-essais.com/",
          tags: ["solidworks"],
          imageSrc: "pictures/abc.webp",
        },
      ],
    },
    skills: {
      subtitle: "Technologies et outils que j’utilise pour créer des applications web modernes",
      tabName: "Compétences",
      content: techStack,
    },
  },
};

const es: PortfolioTranslations = {
  title: "Portafolio",
  subtitle: "Echa un vistazo a algunos de mis proyectos recientes",
  viewLive: "Demo",
  tabs: {
    projects: {
      subtitle: "Echa un vistazo a algunos de mis proyectos recientes",
      tabName: "Proyectos",
      content: [
        {
          id: "portfolio",
          title: "Portafolio Personal",
          description:
            "Un sitio web de portafolio personal moderno construido con React y Typescript, presentando mis proyectos, habilidades y experiencias.",
          imageSrc: "pictures/portfolio.webp",
          tags: ["react", "typescript", "tailwindcss", "firebase", "vercel"],
          demoUrl: "https://anthonyrovira.com/",
          repoUrl: ["https://github.com/anthonyrovira/portfolio"],
        },
        {
          id: "ichiban-clone",
          title: "Ichiban Clone",
          description:
            "Una poderosa réplica del sitio web de Ichiban, construida con Astro y Typescript, con el objetivo de mejorar el rendimiento del sitio original, mostrando técnicas avanzadas de optimización web.",
          imageSrc: "pictures/ichiban.webp",
          tags: ["typescript", "astro", "vercel"],
          demoUrl: "https://ichiban-clone.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/ichiban-clone"],
        },
        {
          id: "insta-chef",
          title: "InstaChef",
          description:
            "Una aplicación web moderna diseñada para ayudar a los usuarios a descubrir recetas basadas en los ingredientes que ya tienen.",
          imageSrc: "pictures/instachef.webp",
          tags: ["react", "typescript", "tailwindcss", "nextjs", "supabase", "vercel"],
          demoUrl: "https://instachef.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/insta-chef"],
        },
        {
          id: "terrifai",
          title: "TerrifAI",
          description:
            "Una aplicación web que permite a los usuarios aplicar transformaciones de IA espeluznantes a sus imágenes.",
          imageSrc: "pictures/terrifai.webp",
          tags: ["react", "typescript", "tailwindcss", "astro", "vercel"],
          demoUrl: "https://terrifai.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/terrifai"],
        },
        {
          id: "marvel",
          title: "Marvel",
          description:
            "Una aplicación web full-stack diseñada para permitir a los usuarios navegar por los personajes y las historietas de Marvel, construida con React y Typescript.",
          imageSrc: "pictures/marvel.webp",
          tags: ["react", "typescript", "tailwindcss", "nodejs", "express", "mongodb", "vercel"],
          demoUrl: "https://marvel.vercel.app/",
          repoUrl: ["https://github.com/anthonyrovira/marvel-frontend", "https://github.com/anthonyrovira/marvel-backend"],
        },
        {
          id: "airbnb-automation",
          title: "Airbnb Automation",
          description:
            "Un script que permite a los usuarios automatizar el proceso de reserva de anuncios de Airbnb, construido con NodeJS y Typescript.",
          imageSrc: "pictures/airbnb_automation.webp",
          tags: ["nodejs", "typescript"],
          demoUrl: "",
          repoUrl: ["https://github.com/anthonyrovira/airbnb_automation"],
        },
      ],
    },
    career: {
      subtitle: "Experiencias profesionales que han dado forma a mi carrera",
      tabName: "Experiencias",
      content: [
        //help me to translate in spanish
        {
          id: "linxea",
          company: "Linxea",
          position: "Desarrollador Frontend",
          startDate: "2021-06-01",
          endDate: "2024-12-31",
          location: "París, Francia",
          description:
            "Especializada en productos de ahorro, Linxea es un corredor en línea líder en Francia, que ofrece una amplia gama de productos y servicios financieros a sus clientes.",
          bulletPoints: [
            "Desarrollé una base de código React con TypeScript.",
            "Utilicé Redux, Redux-Saga, Formik y React-Query para la gestión de estados y formularios.",
            "Implementé pruebas unitarias utilizando Jest y Testing Library.",
            "Creé y gestioné Storybook para construir un Sistema de Diseño integral.",
            "Contribuí a la implementación de pruebas de extremo a extremo con Playwright.",
            "Escribí documentación técnica (convenciones de código, documentación de funciones, materiales de capacitación, etc.).",
          ],
          url: "https://www.linxea.com/",
          tags: [
            "react",
            "typescript",
            "redux",
            "storybook",
            "jest",
            "sass",
            "redux-saga",
            "formik",
            "react-query",
            "playwright",
          ],
          imageSrc: "pictures/linxea.webp",
        },
        {
          id: "noirot-1",
          company: "Noirot",
          position: "Gerente de Proyectos de I+D",
          startDate: "2019-02-01",
          endDate: "2021-05-31",
          location: "Laon, Francia",
          description:
            "Noirot es un fabricante francés líder de radiadores eléctricos y soluciones de calefacción, con un fuerte enfoque en la innovación y el desarrollo sostenible.",
          bulletPoints: [
            "Colaboré con equipos internos para proponer ideas innovadoras para radiadores eléctricos, evaluando su viabilidad tecnológica y su potencial de aceptación en el mercado.",
            "Realicé estudios de viabilidad en profundidad para evaluar la viabilidad técnica de los proyectos en estrecha colaboración con ingenieros y técnicos.",
            "Trabajé en estrecha colaboración con los equipos de marketing para analizar el atractivo de las innovaciones propuestas, identificar las necesidades del mercado y ajustar los proyectos en consecuencia.",
            "Definí especificaciones claras para los proyectos de I+D, estableciendo objetivos, criterios de éxito y plazos.",
            "Lideré la planificación, coordinación y ejecución de proyectos, gestionando las etapas de desarrollo, los recursos, los presupuestos y los plazos.",
          ],
          url: "https://intuis.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "glen-dimplex",
          company: "Glen Dimplex",
          position: "Ingeniero de Desarrollo de Software",
          startDate: "2018-07-31",
          endDate: "2019-01-31",
          location: "Dunleer, Irlanda",
          description:
            "Glen Dimplex es un grupo internacional líder que ofrece soluciones de calefacción y ventilación innovadoras y energéticamente eficientes a clientes de todo el mundo.",
          bulletPoints: [
            "Diseñé y desarrollé un software de supervisión para bancos de seguridad y cámaras climáticas que cumplen con los estándares regulatorios.",
            "Validé y profundicé mi dominio del inglés a través de una gratificante experiencia internacional en Irlanda.",
          ],
          url: "https://www.glendimplex.com/",
          tags: ["labview", "matlab", "simulink"],
          imageSrc: "pictures/glen-dimplex.webp",
        },
        {
          id: "noirot-2",
          company: "Noirot",
          position: "Ingeniero de Software",
          startDate: "2016-03-01",
          endDate: "2017-12-31",
          location: "Laon, Francia",
          description:
            "Noirot es un fabricante francés líder de radiadores eléctricos y soluciones de calefacción, con un fuerte enfoque en la innovación y el desarrollo sostenible.",
          bulletPoints: [
            "Gestioné proyectos técnicos para el desarrollo de herramientas y software internos.",
            "Diseñé y desarrollé software de control y monitoreo para bancos de pruebas climáticas.",
            "Colaboré con equipos de ingeniería para integrar sensores y sistemas de control en el software, asegurando mediciones climáticas precisas.",
            "Contribuí a la mejora continua del software y los procesos relacionados con los bancos de pruebas climáticas.",
            "Supervisé la asignación de proyectos de prácticas y brindé orientación a los pasantes de laboratorio.",
          ],
          url: "https://www.noirot.fr/",
          tags: ["c++", "labview", "raspberrypi", "javascript"],
          imageSrc: "pictures/noirot.webp",
        },
        {
          id: "abc",
          company: "ABC Essais",
          position: "Pasante de Diseño Mecatrónico",
          startDate: "2012-09-01",
          endDate: "2014-09-30",
          location: "Gonesse, Francia",
          description:
            "ABC Essais es una empresa de ingeniería especializada en el diseño y la fabricación de bancos de pruebas para clientes de los sectores aeroespacial y automotriz.",
          bulletPoints: [
            "Realicé estudios mecatrónicos y diseñé bancos de pruebas para clientes de los sectores aeroespacial y automotriz.",
            "Creé componentes mecánicos desde cero utilizando SolidWorks, incluyendo modelado 3D, diseño de ensamblaje restringido y producción de dibujos técnicos estandarizados para la fabricación de piezas.",
            "Colaboré con equipos de ingeniería para cumplir con las especificaciones del cliente y asegurar que los bancos de pruebas cumplieran con los estándares aplicables.",
            "Participé activamente en las revisiones de diseño y apoyé las fases de validación técnica e industrial.",
          ],
          url: "https://abc-essais.com/",
          tags: ["solidworks"],
          imageSrc: "pictures/abc.webp",
        },
      ],
    },
    skills: {
      subtitle: "Tecnologías y herramientas que utilizo para crear aplicaciones web modernas",
      tabName: "Habilidades",
      content: techStack,
    },
  },
};

export const portfolioTranslations: Record<Language, PortfolioTranslations> = {
  en,
  es,
  fr,
};
