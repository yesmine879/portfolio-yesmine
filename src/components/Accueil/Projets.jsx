import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

import {
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaPlayCircle,
  FaGlobe,
  FaBrain,
  FaMobileAlt,
  FaServer,
  FaGamepad,
  FaJava,
  FaRobot,
  FaLayerGroup,
  FaSearch,
  FaArrowRight,
  FaEye,
  FaShieldAlt,
  FaFilePdf,
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext.jsx';

/* =========================================================
   REAL OPTICUST ASSETS
========================================================= */

import opticustLogo from '../../assets/images/opticust_logo.png';
import pfeReport from '../../assets/pdf/rapport.pdf';

/* =========================================================
   MEDIA HELPER
========================================================= */

const getSortedMedia = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    )
    .map(([, mod]) => mod.default ?? mod);

/* =========================================================
   PROJECT MEDIA
========================================================= */

const cookmateImages = getSortedMedia(
  import.meta.glob(
    '../../assets/image Cookmate/*.{png,jpg,jpeg,webp}',
    {
      eager: true,
      import: 'default',
    }
  )
);

const gestionMaterielImages = getSortedMedia(
  import.meta.glob(
    '../../assets/image gestion materiel/*.{png,jpg,jpeg,webp}',
    {
      eager: true,
      import: 'default',
    }
  )
);

const pfaImages = getSortedMedia(
  import.meta.glob(
    '../../assets/image PFA/*.{png,jpg,jpeg,webp}',
    {
      eager: true,
      import: 'default',
    }
  )
);

const pfaVideos = getSortedMedia(
  import.meta.glob(
    '../../assets/image PFA/*.{mp4,webm,ogg,mov}',
    {
      eager: true,
      import: 'default',
    }
  )
);

const burgerImages = getSortedMedia(
  import.meta.glob(
    '../../assets/image siter berger/*.{png,jpg,jpeg,webp}',
    {
      eager: true,
      import: 'default',
    }
  )
);

const portfolioImages = [];

/* =========================================================
   CATEGORY CONFIG
========================================================= */

const categoryConfig = {
  web: {
    label: 'WEB',
    icon: FaGlobe,
    gradient:
      'from-violet-950 via-purple-900 to-fuchsia-900',
  },

  ml: {
    label: 'AI / ML',
    icon: FaBrain,
    gradient:
      'from-fuchsia-950 via-violet-900 to-indigo-950',
  },

  mobile: {
    label: 'MOBILE',
    icon: FaMobileAlt,
    gradient:
      'from-indigo-950 via-violet-900 to-cyan-950',
  },

  backend: {
    label: 'BACKEND',
    icon: FaServer,
    gradient:
      'from-slate-950 via-violet-950 to-purple-900',
  },

  robotics: {
    label: 'ROBOTICS',
    icon: FaRobot,
    gradient:
      'from-emerald-950 via-teal-900 to-violet-950',
  },

  csharp: {
    label: 'C# / GAMES',
    icon: FaGamepad,
    gradient:
      'from-blue-950 via-indigo-950 to-violet-950',
  },

  java: {
    label: 'JAVA',
    icon: FaJava,
    gradient:
      'from-orange-900 via-red-950 to-violet-950',
  },
};

const categoryKeys = [
  'all',
  'web',
  'ml',
  'mobile',
  'backend',
  'robotics',
  'csharp',
  'java',
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  /* =======================================================
     FEATURED PFE
  ======================================================= */

  {
    id: 'opticust',
    category: 'web',
    featured: true,

    title: 'OptiCust',

    subtitle:
      'Customer Complaints & Satisfaction Management Platform',

    period: 'PFE · 2026',

    tech: [
      'Angular',
      'Laravel',
      'Keycloak',
      'AI',
      'Power BI',
      'MySQL',
    ],

    github: null,
    confidential: true,

    report: pfeReport,

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Web platform developed to centralize customer-related information and optimize complaint management, satisfaction monitoring, alerts, dashboards, reporting, and intelligent analysis. The solution integrates modules dedicated to clients, products, contracts, payments, complaints, and satisfaction campaigns, providing a structured and data-oriented environment to support operational monitoring and decision-making.',

    stats: [
      { label: 'Modules', value: '6' },
      { label: 'AI-assisted', value: 'Yes' },
      { label: 'Dashboards', value: 'Live' },
    ],

    highlights: [
      'Centralized customer information',
      'Complaint management and follow-up',
      'Customer satisfaction campaigns',
      'Alerts and operational monitoring',
      'Interactive dashboards and reporting',
      'AI-assisted customer feedback analysis',
    ],
  },

  /* =======================================================
     WEB
  ======================================================= */

  {
    id: 'portfolio-yesmine',
    category: 'web',
    title: 'Portfolio',
    subtitle: 'Personal Developer Portfolio',
    tech: ['React', 'Vite'],
    github:
      'https://github.com/yesmine879/portfolio-yesmine',

    demo: {
      images: portfolioImages,
      videos: [],
    },

    description:
      'Personal portfolio developed with React and Vite to showcase my academic background, technical skills, professional experiences, certifications, and projects. The interface focuses on a modern visual identity, responsive layouts, smooth animations, interactive sections, and a clean user experience across desktop and mobile devices.',
  },

  {
    id: 'burger-house-website',
    category: 'web',
    title: 'Burger House',
    subtitle: 'Responsive Restaurant Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github:
      'https://github.com/yesmine879/burger-house-website',

    demo: {
      images: burgerImages,
      videos: [],
    },

    description:
      'Responsive restaurant website created around a Burger House concept. The project focuses on modern visual presentation, structured content sections, responsive design, navigation, typography, and interactive front-end behavior using vanilla JavaScript.',
  },

  {
    id: 'event-management-system',
    category: 'web',
    title: 'Event Management',
    subtitle: 'Full-Stack Event Platform',
    tech: [
      'Laravel',
      'Angular',
      'Node.js',
      'MySQL',
    ],
    github:
      'https://github.com/yesmine879/event-management-system',

    demo: {
      images: pfaImages,
      videos: pfaVideos,
    },

    description:
      'Full-stack event management platform developed to organize events, manage participants, structure application data, and provide an efficient user experience. The project combines Angular for the front end with Laravel and Node.js technologies for backend logic and MySQL for persistent data management.',
  },

  {
    id: 'material-management-system',
    category: 'web',
    title: 'Material Management',
    subtitle: 'Management & CRUD Platform',
    tech: ['Laravel', 'Angular', 'MySQL'],
    github:
      'https://github.com/yesmine879/material-management-system',

    demo: {
      images: gestionMaterielImages,
      videos: [],
    },

    description:
      'Full-stack material management application designed around structured data management and CRUD operations. The platform includes an administrative interface, organized records, reusable components, backend services, and database persistence using MySQL.',
  },

  {
    id: 'WebProject',
    category: 'web',
    title: 'WebProject',
    subtitle: 'PHP CRUD Application',
    tech: ['PHP', 'CRUD'],
    github:
      'https://github.com/yesmine879/WebProject',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Dynamic web application developed to practice the fundamental concepts of PHP web development. The project focuses on CRUD operations, database interaction, form processing, data manipulation, and the organization of a simple web application architecture.',
  },

  /* =======================================================
     AI / ML
  ======================================================= */

  {
    id: 'machine-learning-labs',
    category: 'ml',
    title: 'ML Labs',
    subtitle: 'Machine Learning Experiments',
    tech: [
      'Python',
      'Jupyter Notebook',
      'Data Science',
    ],
    github:
      'https://github.com/yesmine879/machine-learning-labs',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Collection of practical machine learning laboratories and notebooks covering data preparation, exploratory analysis, feature processing, model experimentation, algorithm comparison, and evaluation on different datasets.',
  },

  {
    id: 'heart-disease-prediction',
    category: 'ml',
    title: 'Heart Disease',
    subtitle: 'Predictive Classification',
    tech: ['Python', 'Classification'],
    github:
      'https://github.com/yesmine879/heart-disease-prediction',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Machine learning classification project focused on predicting the presence of heart disease from structured medical data. The project covers preprocessing, feature preparation, model training, prediction, and evaluation of classification results.',
  },

  {
    id: 'diabetes-prediction-ml',
    category: 'ml',
    title: 'Diabetes Prediction',
    subtitle: 'Supervised Machine Learning',
    tech: ['Python', 'Classification'],
    github:
      'https://github.com/yesmine879/diabetes-prediction-ml',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Supervised machine learning project for diabetes prediction using medical features. It includes data preparation, classification model development, prediction, and performance analysis to understand the quality of the resulting model.',
  },

  {
    id: 'spam-classification',
    category: 'ml',
    title: 'Spam Classification',
    subtitle: 'Natural Language Processing',
    tech: ['Python', 'NLP', 'Classification'],
    github:
      'https://github.com/yesmine879/spam-classification',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Natural language processing project designed to classify messages as spam or legitimate content. The workflow includes text preprocessing, feature representation, classification, model training, and evaluation of prediction performance.',
  },

  {
    id: 'market-basket-optimization',
    category: 'ml',
    title: 'Market Basket',
    subtitle: 'Association Analysis',
    tech: ['Python', 'Data Mining'],
    github:
      'https://github.com/yesmine879/market-basket-optimization',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Data mining project based on association analysis to discover frequent purchasing patterns and relationships between products. The objective is to identify useful associations that can support recommendation and business decision-making.',
  },

  {
    id: 'mall-customers-segmentation',
    category: 'ml',
    title: 'Customer Segmentation',
    subtitle: 'Unsupervised Learning',
    tech: ['Python', 'Clustering'],
    github:
      'https://github.com/yesmine879/mall-customers-segmentation',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Customer segmentation project using unsupervised learning techniques to identify groups of customers with similar characteristics and behaviors. The project focuses on clustering, interpretation of customer profiles, and visualization of segmentation results.',
  },

  {
    id: 'titanic-ml-project',
    category: 'ml',
    title: 'Titanic Prediction',
    subtitle: 'Machine Learning Classification',
    tech: ['Python', 'Classification'],
    github:
      'https://github.com/yesmine879/titanic-ml-project',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Machine learning project based on the Titanic dataset to predict passenger survival. The workflow includes data cleaning, feature preparation, model training, classification, and evaluation of predictive performance.',
  },

  /* =======================================================
     MOBILE
  ======================================================= */

  {
    id: 'cookmate',
    category: 'mobile',
    title: 'CookMate',
    subtitle: 'Recipe Discovery Mobile App',
    tech: ['Flutter'],
    github:
      'https://github.com/yesmine879/cookmate',

    demo: {
      images: cookmateImages,
      videos: [],
    },

    description:
      'Flutter mobile application designed around cooking recipes and food discovery. The application focuses on clean mobile interfaces, screen navigation, structured recipe presentation, reusable UI components, and a smooth user experience.',
  },

  /* =======================================================
     BACKEND
  ======================================================= */

  {
    id: 'order-management-microservices',
    category: 'backend',
    title: 'OrderFlow',
    subtitle: 'Microservices Architecture',
    tech: [
      'Spring Boot',
      'Microservices',
      'Java',
    ],
    github:
      'https://github.com/yesmine879/order-management-microservices',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Order management platform developed using a microservices architecture with Spring Boot and Java. The application separates business responsibilities into dedicated services and explores distributed application design, service communication, modularity, service discovery, centralized configuration, API Gateway integration, and backend scalability.',
  },

  {
    id: 'flask-chatbot',
    category: 'backend',
    title: 'Flask Chatbot',
    subtitle: 'Conversational Web Application',
    tech: ['Python', 'Flask'],
    github:
      'https://github.com/yesmine879/flask-chatbot',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Conversational web application developed with Python and Flask. The project explores backend routing, conversational interaction, request handling, and the integration of chatbot logic into a lightweight web application.',
  },

  /* =======================================================
     ROBOTICS
  ======================================================= */

  {
    id: 'line-follower',
    category: 'robotics',
    title: 'Line Follower',
    subtitle: 'Autonomous Robotics Project',
    tech: [
      'Arduino',
      'C/C++',
      'IR Sensors',
      'Robotics',
    ],
    github: null,

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Autonomous line-following robot developed with Arduino and infrared sensors. The system detects the path using IR sensors and controls the motors according to the detected trajectory. The project provided practical experience with embedded programming, sensor integration, motor control, and real-time decision-making.',
  },

  /* =======================================================
     C#
  ======================================================= */

  {
    id: 'pharmacy-management',
    category: 'csharp',
    title: 'PharmaCare',
    subtitle: 'Pharmacy Management System',
    tech: ['ASP.NET', 'C#'],
    github:
      'https://github.com/yesmine879/pharmacy-management',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Pharmacy management application developed with ASP.NET and C#. The project focuses on organizing application modules, managing business data, implementing application logic, and structuring a complete management-oriented solution.',
  },

  {
    id: 'angry-birds',
    category: 'csharp',
    title: 'Angry Birds',
    subtitle: '2D Unity Game',
    tech: ['Unity', 'C#'],
    github:
      'https://github.com/yesmine879/angry-birds',

    demo: {
      images: [],
      videos: [],
    },

    description:
      '2D game inspired by Angry Birds and developed using Unity and C#. The project explores game mechanics, object interactions, physics-based behavior, player interaction, and the implementation of a simple interactive game environment.',
  },

  /* =======================================================
     JAVA
  ======================================================= */

  {
    id: 'CRUD',
    category: 'java',
    title: 'Java CRUD',
    subtitle: 'CRUD Management Application',
    tech: ['Java'],
    github:
      'https://github.com/yesmine879/CRUD',

    demo: {
      images: [],
      videos: [],
    },

    description:
      'Java CRUD application developed to practice core programming concepts, structured application logic, data manipulation, and the implementation of Create, Read, Update, and Delete operations.',
  },
];

const frenchProjectContent = {
  opticust: {
    subtitle: 'Plateforme de gestion des réclamations et de satisfaction client',
    description: 'Plateforme web centralisant les données clients et optimisant la gestion des réclamations, le suivi de satisfaction, les alertes, les tableaux de bord, le reporting et l’analyse intelligente. La solution intègre les clients, produits, contrats, paiements, réclamations et campagnes de satisfaction pour accompagner le pilotage opérationnel.',
    stats: [{ label: 'Modules', value: '6' }, { label: 'Assistée par l’IA', value: 'Oui' }, { label: 'Tableaux de bord', value: 'En direct' }],
    highlights: ['Informations client centralisées', 'Gestion et suivi des réclamations', 'Campagnes de satisfaction client', 'Alertes et suivi opérationnel', 'Tableaux de bord et reporting interactifs', 'Analyse des retours client assistée par IA'],
  },
  'portfolio-yesmine': { subtitle: 'Portfolio personnel de développeuse', description: 'Portfolio personnel développé avec React et Vite pour présenter mon parcours académique, mes compétences, expériences, certifications et projets. L’interface privilégie une identité visuelle moderne, des mises en page responsives, des animations fluides et une expérience cohérente sur ordinateur comme sur mobile.' },
  'burger-house-website': { subtitle: 'Site web de restaurant responsive', description: 'Site web responsive conçu autour du concept Burger House. Le projet met l’accent sur une présentation moderne, des sections structurées, le responsive design, la navigation, la typographie et les interactions front-end en JavaScript.' },
  'event-management-system': { subtitle: 'Plateforme complète de gestion d’événements', description: 'Plateforme full-stack dédiée à l’organisation d’événements, la gestion des participants et la structuration des données. Elle combine Angular côté front-end, Laravel et Node.js côté back-end, avec MySQL pour la persistance.' },
  'material-management-system': { subtitle: 'Plateforme de gestion et CRUD', description: 'Application full-stack de gestion de matériel, structurée autour de la gestion de données et des opérations CRUD. Elle comprend une interface d’administration, des enregistrements organisés, des composants réutilisables, des services back-end et MySQL.' },
  WebProject: { subtitle: 'Application CRUD en PHP', description: 'Application web dynamique développée pour pratiquer les fondamentaux du développement PHP : opérations CRUD, interaction avec la base de données, traitement de formulaires et organisation d’une application web simple.' },
  'machine-learning-labs': { subtitle: 'Expérimentations en machine learning', description: 'Collection de laboratoires et notebooks pratiques couvrant la préparation des données, l’analyse exploratoire, le traitement des variables, l’expérimentation et la comparaison de modèles.' },
  'heart-disease-prediction': { subtitle: 'Classification prédictive', description: 'Projet de classification visant à prédire la présence de maladies cardiaques à partir de données médicales structurées, incluant prétraitement, entraînement et évaluation.' },
  'diabetes-prediction-ml': { subtitle: 'Machine learning supervisé', description: 'Projet de prédiction du diabète à partir de caractéristiques médicales. Il couvre la préparation des données, le développement d’un modèle de classification et l’analyse de ses performances.' },
  'spam-classification': { subtitle: 'Traitement automatique du langage', description: 'Projet de traitement du langage naturel destiné à classer les messages comme spam ou légitimes, avec prétraitement, représentation textuelle, entraînement et évaluation.' },
  'market-basket-optimization': { subtitle: 'Analyse d’associations', description: 'Projet de data mining basé sur l’analyse d’associations pour révéler les habitudes d’achat fréquentes et soutenir la recommandation ou la prise de décision.' },
  'mall-customers-segmentation': { subtitle: 'Apprentissage non supervisé', description: 'Projet de segmentation client utilisant le clustering pour identifier des groupes de clients aux profils et comportements similaires.' },
  'titanic-ml-project': { subtitle: 'Classification en machine learning', description: 'Projet basé sur les données du Titanic afin de prédire la survie des passagers, avec nettoyage, préparation des variables, entraînement et évaluation.' },
  cookmate: { subtitle: 'Application mobile de découverte de recettes', description: 'Application Flutter dédiée aux recettes et à la découverte culinaire, avec interfaces mobiles soignées, navigation entre écrans et composants réutilisables.' },
  'order-management-microservices': { subtitle: 'Architecture de microservices', description: 'Plateforme de gestion de commandes développée avec une architecture de microservices Spring Boot et Java, explorant la communication entre services, la modularité, la découverte de services, la configuration centralisée et l’API Gateway.' },
  'flask-chatbot': { subtitle: 'Application web conversationnelle', description: 'Application web conversationnelle développée avec Python et Flask, explorant le routage, la gestion des requêtes et l’intégration d’une logique de chatbot légère.' },
  'line-follower': { subtitle: 'Projet de robotique autonome', description: 'Robot autonome suiveur de ligne conçu avec Arduino et des capteurs infrarouges. Le système détecte la trajectoire et contrôle les moteurs en temps réel.' },
  'pharmacy-management': { subtitle: 'Système de gestion de pharmacie', description: 'Application de gestion de pharmacie développée avec ASP.NET et C#, centrée sur l’organisation des modules, les données métier et la structuration d’une solution complète.' },
  'angry-birds': { subtitle: 'Jeu Unity 2D', description: 'Jeu 2D inspiré d’Angry Birds et développé avec Unity et C#, explorant les mécaniques de jeu, les interactions d’objets, la physique et les comportements interactifs.' },
  CRUD: { subtitle: 'Application de gestion CRUD', description: 'Application CRUD en Java développée pour pratiquer la programmation fondamentale, la logique applicative structurée et les opérations de création, lecture, modification et suppression.' },
};

/* =========================================================
   DECORATIVE BACKGROUND
========================================================= */

const BackgroundParticles = () => {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      // Keep the ambience subtle without competing with navigation scrolling.
      Array.from({ length: 16 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1.5 + Math.random() * 3.5,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 5,
        drift: 10 + Math.random() * 18,
        hue:
          Math.random() > 0.5
            ? 'violet'
            : 'fuchsia',
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full ${
            particle.hue === 'violet'
              ? 'bg-violet-300/25 shadow-[0_0_10px_rgba(196,181,253,.5)]'
              : 'bg-fuchsia-300/25 shadow-[0_0_10px_rgba(240,171,252,.5)]'
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? {
                  opacity: 0.25,
                }
              : {
                  y: [
                    0,
                    -particle.drift,
                    0,
                  ],
                  x: [
                    0,
                    particle.drift / 3,
                    0,
                  ],
                  opacity: [
                    0.1,
                    0.55,
                    0.1,
                  ],
                  scale: [1, 1.3, 1],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />
      ))}
    </div>
  );
};

/* =========================================================
   AMBIENT GLOWS
========================================================= */

const AmbientGlows = () => {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = (animate, transition) =>
    prefersReducedMotion
      ? {
          animate: {},
          transition: { duration: 0 },
        }
      : {
          animate,
          transition,
        };

  return (
    <>
      <motion.div
        className="absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-violet-800/14 blur-[150px]"
        {...motionProps(
          {
            x: [0, 40, 0],
            y: [0, 30, 0],
            opacity: [0.7, 1, 0.7],
          },
          {
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        )}
      />

      <motion.div
        className="absolute right-[-12%] top-[20%] h-[650px] w-[650px] rounded-full bg-fuchsia-800/10 blur-[170px]"
        {...motionProps(
          {
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.6, 1, 0.6],
          },
          {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }
        )}
      />

      <motion.div
        className="absolute bottom-[-15%] left-[20%] h-[600px] w-[600px] rounded-full bg-indigo-900/12 blur-[170px]"
        {...motionProps(
          {
            x: [0, 30, 0],
            y: [0, -35, 0],
            opacity: [0.65, 1, 0.65],
          },
          {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }
        )}
      />

      <motion.div
        className="absolute left-[35%] top-[25%] h-[350px] w-[350px] rounded-full bg-violet-600/6 blur-[130px]"
        {...motionProps(
          {
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.9, 0.5],
          },
          {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        )}
      />

      <motion.div
        className="absolute right-[10%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-fuchsia-500/8 blur-[140px]"
        {...motionProps(
          {
            x: [0, -25, 0],
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
          },
          {
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }
        )}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        {...motionProps(
          {
            backgroundPosition: [
              '0px 0px',
              '60px 60px',
            ],
          },
          {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }
        )}
      />
    </>
  );
};

/* =========================================================
   HOVER BUTTON
========================================================= */

const HoverButton = ({
  as: Component = 'button',
  baseStyle = {},
  hoverStyle = {},
  className = '',
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}) => {
  const [hovered, setHovered] =
    useState(false);

  return (
    <Component
      {...rest}
      className={className}
      style={{
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
      }}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(false);
        onMouseLeave?.(event);
      }}
    >
      {children}
    </Component>
  );
};

/* =========================================================
   OPTICUST FEATURED VISUAL
========================================================= */

const OptiCustVisual = ({ stats = [] }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#160227] via-[#320754] to-[#4c0f6e]">
      <div
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/12 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-fuchsia-500/14 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="absolute left-[45%] top-[20%] h-32 w-32 rounded-full bg-indigo-400/8 blur-[60px]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <motion.div
        className="absolute right-[-80px] top-[55px] h-[330px] w-[330px] rounded-full border border-white/10"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { rotate: 360 }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute right-[-30px] top-[105px] h-[230px] w-[230px] rounded-full border border-fuchsia-200/10"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { rotate: -360 }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 flex h-full flex-1 flex-col justify-between p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">
            <span
              className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_15px_rgba(255,150,255,.8)]"
              aria-hidden="true"
            />
            Featured PFE
          </div>

          <span className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-xs font-black text-white/70 backdrop-blur-xl">
            01
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-6">
          <motion.div
            className="relative flex h-44 w-44 items-center justify-center rounded-[38px] border border-white/15 bg-white/[0.07] p-7 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-xl sm:h-48 sm:w-48"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className="absolute inset-3 rounded-[30px] border border-white/10"
              aria-hidden="true"
            />

            <img
              src={opticustLogo}
              alt="OptiCust logo"
              className="relative z-10 max-h-full max-w-full object-contain"
            />
          </motion.div>

          {stats.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3.5 py-2 backdrop-blur-xl"
                >
                  <span className="text-sm font-black text-white">
                    {stat.value}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
            Customer Experience · Data · Intelligence
          </p>

          <h3 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
            OptiCust
          </h3>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   STANDARD PROJECT VISUAL
========================================================= */

const ProjectVisual = ({
  project,
  index,
}) => {
  const config =
    categoryConfig[project.category];

  const Icon = config.icon;

  const cover =
    project.demo?.images?.length > 0
      ? project.demo.images[0]
      : null;

  return (
    <div className="relative h-[275px] overflow-hidden rounded-[28px]">
      {cover ? (
        <>
          <motion.img
            src={cover}
            alt={`${project.title} preview`}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7 }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0c0313] via-[#1e0a2c]/45 to-transparent"
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${config.gradient}`}
        >
          <div
            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/8 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-fuchsia-300/8 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                backgroundSize: '38px 38px',
              }}
            />
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/8"
            aria-hidden="true"
            animate={{
              rotate: [0, 6, -6, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon className="text-[145px]" />
          </motion.div>

          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-6xl font-black tracking-[-0.08em] text-white/80">
              {project.category === 'ml'
                ? 'AI'
                : project.category ===
                  'backend'
                ? '</>'
                : project.category ===
                  'mobile'
                ? 'APP'
                : project.category ===
                  'robotics'
                ? 'BOT'
                : project.category ===
                  'java'
                ? 'J'
                : project.category ===
                  'csharp'
                ? 'C#'
                : 'WEB'}
            </span>
          </div>
        </div>
      )}

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
        <Icon aria-hidden="true" />
        {config.label}
      </div>

      <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/35 px-3.5 py-2 text-xs font-black text-white backdrop-blur-xl">
        {String(index).padStart(2, '0')}
      </div>

      {(project.demo?.images?.length > 0 ||
        project.demo?.videos?.length > 0) && (
        <div className="absolute right-5 top-[68px] flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[10px] font-bold text-white backdrop-blur-xl">
          <FaEye aria-hidden="true" />
          Preview
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.23em] text-white/65">
          {project.subtitle}
        </p>

        <h3 className="text-3xl font-black tracking-[-0.045em] text-white">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

/* =========================================================
   STANDARD PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  index,
  onDetails,
  onDemo,
}) => {
  const { t } = useLanguage();
  const cardRef = useRef(null);

  const prefersReducedMotion =
    useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [-0.5, 0.5],
      [2, -2]
    ),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      [-2, 2]
    ),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const handleMouseMove = (event) => {
    if (
      prefersReducedMotion ||
      !cardRef.current
    ) {
      return;
    }

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const hasDemo =
    project.demo?.images?.length > 0 ||
    project.demo?.videos?.length > 0;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: prefersReducedMotion
          ? 0.2
          : 0.65,
        delay: prefersReducedMotion
          ? 0
          : (index % 3) * 0.07,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -7 }
      }
      className="group relative overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.035] p-2 shadow-[0_20px_70px_rgba(0,0,0,.35)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(0,0,0,.45)]"
    >
      <ProjectVisual
        project={project}
        index={index}
      />

      <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
        <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          {project.tech.map(
            (technology, techIndex) => (
              <React.Fragment key={technology}>
                <span className="text-xs font-bold text-violet-200">
                  {technology}
                </span>

                {techIndex <
                  project.tech.length - 1 && (
                  <span
                    className="text-violet-500"
                    aria-hidden="true"
                  >
                    •
                  </span>
                )}
              </React.Fragment>
            )
          )}
        </div>

        <p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-violet-100/50">
          {project.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <HoverButton
            type="button"
            onClick={() =>
              onDetails(project)
            }
            className="group/btn flex items-center gap-2 border-0 text-sm font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0518]"
            baseStyle={{
              backgroundColor:
                'transparent',
              color: '#ffffff',
            }}
            hoverStyle={{
              color: '#f0abfc',
            }}
          >
            {t('exploreProject')}

            <FaArrowRight
              aria-hidden="true"
              className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </HoverButton>

          <div className="flex items-center gap-2">
            {hasDemo && (
              <HoverButton
                type="button"
                onClick={() =>
                  onDemo(project)
                }
                aria-label={t('viewProjectPreview')}
                className="flex h-10 w-10 items-center justify-center rounded-full border-0 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                baseStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.1)',
                  color: '#ddd6fe',
                  padding: 0,
                }}
                hoverStyle={{
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                }}
              >
                <FaImages aria-hidden="true" />
              </HoverButton>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('openGithub')}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-[#1c0a2b] transition-all duration-300 hover:-translate-y-1 hover:bg-fuchsia-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <FaGithub aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   FEATURED OPTICUST CARD
========================================================= */

const FeaturedProject = ({
  project,
  onDetails,
}) => {
  const { t } = useLanguage();
  const prefersReducedMotion =
    useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: prefersReducedMotion
          ? 0.2
          : 0.8,
      }}
      className="group relative overflow-hidden rounded-[38px] border border-white/8 bg-white/[0.035] p-2 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl"
    >
      <div className="grid items-stretch lg:grid-cols-2">
        <OptiCustVisual
          stats={project.stats}
        />

        <div className="flex h-full flex-col gap-7 p-7 sm:p-10 lg:p-12">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-200">
                {t('finalYearProject')}
              </span>

              <span className="text-xs font-semibold text-white/40">
                2026
              </span>
            </div>

            <h3 className="text-5xl font-black tracking-[-0.065em] text-white sm:text-6xl">
              OptiCust
            </h3>

            <p className="mt-4 text-lg font-semibold leading-7 text-violet-200/80">
              {t('opticustSubtitle')}
            </p>

            <p className="mt-6 text-sm leading-7 text-violet-100/55 sm:text-base">
              {project.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-violet-300/60">
              {t('mainCapabilities')}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.highlights.map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3.5"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-[9px] font-black text-violet-200">
                      {index + 1}
                    </span>

                    <span className="text-xs leading-5 text-white/60">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="border-t border-white/8 pt-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-violet-300/20 bg-violet-400/15 px-3 py-1.5 text-[11px] font-bold text-violet-200"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3">
            <HoverButton
              type="button"
              onClick={() =>
                onDetails(project)
              }
              className="site-text-control group inline-flex min-w-[190px] items-center justify-center gap-3 whitespace-nowrap rounded-full border-0 px-7 py-3.5 text-center text-sm font-black shadow-[0_10px_30px_rgba(168,20,180,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(168,20,180,.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              baseStyle={{
                backgroundImage:
                  'linear-gradient(to right, #d946ef, #7c3aed)',
                color: '#ffffff',
              }}
            >
              Discover OptiCust

              <FaArrowRight
                aria-hidden="true"
                className="text-xs transition-transform duration-300 group-hover:translate-x-1"
              />
            </HoverButton>

            <a
              href={project.report}
              download
              className="site-text-control group inline-flex min-w-[220px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            >
              <FaFilePdf
                className="text-fuchsia-300"
                aria-hidden="true"
              />
              Download PFE Report

              <FaArrowRight
                aria-hidden="true"
                className="text-[10px] opacity-40 transition-transform group-hover:translate-x-1"
              />
            </a>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-white/35">
              <FaShieldAlt aria-hidden="true" />
              Confidential
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   DETAILS MODAL
========================================================= */

const DetailsModal = ({
  project,
  onClose,
  onDemo,
}) => {
  const { t } = useLanguage();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const prefersReducedMotion =
    useReducedMotion();

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'Tab') {
        const modal = modalRef.current;

        if (!modal) return;

        const focusable = modal.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last =
          focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [project, onClose]);

  if (!project) return null;

  const config =
    categoryConfig[project.category];

  const Icon = config.icon;

  const hasDemo =
    project.demo?.images?.length > 0 ||
    project.demo?.videos?.length > 0;

  const isFeatured = project.featured;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: prefersReducedMotion
          ? 0.15
          : 0.25,
      }}
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{
          opacity: 0,
          scale: prefersReducedMotion
            ? 1
            : 0.95,
          y: prefersReducedMotion
            ? 0
            : 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: prefersReducedMotion
            ? 1
            : 0.95,
          y: prefersReducedMotion
            ? 0
            : 20,
        }}
        transition={{
          duration: prefersReducedMotion
            ? 0.15
            : 0.3,
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/8 bg-[#160a20] shadow-2xl"
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${
            isFeatured
              ? 'from-[#1e0433] via-[#3c0a58] to-[#5c1470]'
              : config.gradient
          } px-7 py-10 sm:px-10`}
        >
          <div
            className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/8 blur-3xl"
            aria-hidden="true"
          />

          <HoverButton
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t('closeProjectDetails')}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 backdrop-blur-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            baseStyle={{
              backgroundColor:
                'rgba(0,0,0,0.2)',
              color: '#ffffff',
              padding: 0,
            }}
            hoverStyle={{
              backgroundColor:
                'rgba(0,0,0,0.35)',
            }}
          >
            <FaTimes aria-hidden="true" />
          </HoverButton>

          <div className="relative">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              <span className="flex items-center gap-2">
                <Icon aria-hidden="true" />

                {isFeatured
                  ? 'PFE · 2026'
                  : config.label}
              </span>

              {project.confidential && (
                <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[9px]">
                  <FaShieldAlt aria-hidden="true" />
                  {t('confidential')}
                </span>
              )}
            </div>

            <h2
              id="project-modal-title"
              className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl"
            >
              {project.title}
            </h2>

            <p className="mt-3 max-w-2xl text-white/65">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <div className="mb-8">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-violet-300">
              {t('aboutProject')}
            </p>

            <p className="text-base leading-8 text-violet-100/60">
              {project.description}
            </p>
          </div>

          {project.highlights?.length > 0 && (
            <div className="mb-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-violet-300">
                {t('mainCapabilities')}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-white/60"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <div className="mb-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-violet-300">
              {t('technologies')}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-violet-300/20 bg-violet-400/15 px-4 py-2 text-sm font-bold text-violet-200"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-3 text-sm font-bold text-[#1c0a2b] transition hover:-translate-y-1 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <FaGithub aria-hidden="true" />
                {t('viewOnGithub')}
              </a>
            )}

            {hasDemo && (
              <HoverButton
                type="button"
                onClick={() => {
                  onClose();
                  onDemo(project);
                }}
                className="inline-flex items-center gap-2 rounded-full border-0 px-5 py-3 text-sm font-bold transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                baseStyle={{
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                }}
                hoverStyle={{
                  backgroundColor: '#8b5cf6',
                }}
              >
                <FaImages aria-hidden="true" />
                {t('viewPreview')}
              </HoverButton>
            )}

            {project.report && (
              <a
                href={project.report}
                download
                className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-fuchsia-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <FaFilePdf aria-hidden="true" />
                {t('downloadReport')}
              </a>
            )}

            {project.confidential && (
              <div className="flex w-full items-center gap-2 pt-2 text-xs leading-5 text-white/35">
                <FaShieldAlt aria-hidden="true" />

                {t('confidentialDescription')}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MEDIA MODAL
========================================================= */

const MediaModal = ({
  project,
  onClose,
}) => {
  const { t } = useLanguage();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const prefersReducedMotion =
    useReducedMotion();

  const images =
    project?.demo?.images || [];

  const videos =
    project?.demo?.videos || [];

  const media = useMemo(
    () => [
      ...images.map((src) => ({
        type: 'image',
        src,
      })),
      ...videos.map((src) => ({
        type: 'video',
        src,
      })),
    ],
    [images, videos]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (
        event.key === 'ArrowRight' &&
        media.length > 1
      ) {
        setCurrentIndex(
          (prev) =>
            (prev + 1) % media.length
        );
      }

      if (
        event.key === 'ArrowLeft' &&
        media.length > 1
      ) {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + media.length) %
            media.length
        );
      }

      if (event.key === 'Tab') {
        const modal = modalRef.current;

        if (!modal) return;

        const focusable =
          modal.querySelectorAll(
            'a[href], button:not([disabled]), video, [tabindex]:not([tabindex="-1"])'
          );

        if (!focusable.length) return;

        const first = focusable[0];
        const last =
          focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [project, media.length, onClose]);

  if (!project || media.length === 0) {
    return null;
  }

  const current =
    media[currentIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-modal-title"
        initial={{
          opacity: 0,
          scale: prefersReducedMotion
            ? 1
            : 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: prefersReducedMotion
            ? 1
            : 0.95,
        }}
        className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-[#0d0714]"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Project preview
            </p>

            <h3
              id="media-modal-title"
              className="mt-1 text-lg font-black text-white"
            >
              {project.title}
            </h3>
          </div>

          <HoverButton
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t('closeProjectPreview')}
            className="flex h-10 w-10 items-center justify-center rounded-full border-0 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
            baseStyle={{
              backgroundColor:
                'rgba(255,255,255,0.1)',
              color: '#ffffff',
              padding: 0,
            }}
            hoverStyle={{
              backgroundColor:
                'rgba(255,255,255,0.2)',
            }}
          >
            <FaTimes aria-hidden="true" />
          </HoverButton>
        </div>

        <div className="relative flex min-h-[55vh] flex-1 items-center justify-center bg-black p-4 sm:p-8">
          {current.type === 'image' ? (
            <motion.img
              key={current.src}
              src={current.src}
              alt={`${project.title} preview`}
              className="max-h-[68vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{
                opacity: 0,
                scale: prefersReducedMotion
                  ? 1
                  : 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            />
          ) : (
            <motion.video
              key={current.src}
              src={current.src}
              controls
              playsInline
              className="max-h-[68vh] max-w-full rounded-2xl shadow-2xl"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            />
          )}

          {media.length > 1 && (
            <>
              <HoverButton
                type="button"
                onClick={() =>
                  setCurrentIndex(
                    (prev) =>
                      (prev -
                        1 +
                        media.length) %
                      media.length
                  )
                }
                aria-label={t('previousPreview')}
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border-0 backdrop-blur-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 sm:left-8"
                baseStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  padding: 0,
                }}
                hoverStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.2)',
                }}
              >
                <FaChevronLeft aria-hidden="true" />
              </HoverButton>

              <HoverButton
                type="button"
                onClick={() =>
                  setCurrentIndex(
                    (prev) =>
                      (prev + 1) %
                      media.length
                  )
                }
                aria-label={t('nextPreview')}
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border-0 backdrop-blur-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 sm:right-8"
                baseStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  padding: 0,
                }}
                hoverStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.2)',
                }}
              >
                <FaChevronRight aria-hidden="true" />
              </HoverButton>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/8 px-5 py-4">
          <div className="flex items-center gap-2 text-sm text-white/50">
            {current.type === 'video' ? (
              <FaPlayCircle aria-hidden="true" />
            ) : (
              <FaImages aria-hidden="true" />
            )}

            {currentIndex + 1} /{' '}
            {media.length}
          </div>

          <div className="flex gap-1.5">
            {media.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() =>
                  setCurrentIndex(index)
                }
                aria-label={`Show preview ${
                  index + 1
                }`}
                aria-current={
                  index === currentIndex
                    ? 'true'
                    : undefined
                }
                className="rounded-full border-0 p-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                style={{
                  height: '6px',
                  width:
                    index === currentIndex
                      ? '32px'
                      : '8px',
                  backgroundColor:
                    index === currentIndex
                      ? '#8b5cf6'
                      : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Projets = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] =
    useState('all');

  const [search, setSearch] =
    useState('');

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [mediaProject, setMediaProject] =
    useState(null);

  const localizedProjects = useMemo(
    () => projects.map((project) => (
      language === 'fr' && frenchProjectContent[project.id]
        ? { ...project, ...frenchProjectContent[project.id] }
        : project
    )),
    [language]
  );

  const featuredProject = localizedProjects.find(
    (project) => project.featured
  );

  const normalProjects = useMemo(
    () => localizedProjects.filter((project) => !project.featured),
    [localizedProjects]
  );

  const filteredProjects = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return normalProjects.filter(
      (project) => {
        const matchesCategory =
          activeCategory === 'all' ||
          project.category ===
            activeCategory;

        const searchableText = [
          project.title,
          project.subtitle,
          project.description,
          ...project.tech,
        ]
          .join(' ')
          .toLowerCase();

        const matchesSearch =
          !normalizedSearch ||
          searchableText.includes(
            normalizedSearch
          );

        return (
          matchesCategory &&
          matchesSearch
        );
      }
    );
  }, [
    activeCategory,
    search,
    normalProjects,
  ]);

  const totalProjects = localizedProjects.length;

  const categoryCount = (category) => {
    if (category === 'all') {
      return totalProjects;
    }

    return localizedProjects.filter(
      (project) =>
        project.category === category
      ).length;
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <AmbientGlows />
        <BackgroundParticles />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-px w-10 bg-fuchsia-400"
              aria-hidden="true"
            />

            <span className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-300">
              {t('projectsLabel')}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                {t('projectHeading')}
                <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
                  {t('projectHeadingAccent')}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-violet-100/45 sm:text-lg">
                {t('projectIntro')}
              </p>
            </div>

            <div className="hidden rounded-[28px] border border-white/8 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl lg:block">
              <div className="text-5xl font-black tracking-[-0.05em] text-white">
                {String(totalProjects).padStart(
                  2,
                  '0'
                )}
              </div>

              <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-200/30">
                {t('projectCount')}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FEATURED PFE */}

        {featuredProject && (
          <div className="mb-14">
            <FeaturedProject
              project={featuredProject}
              onDetails={
                setSelectedProject
              }
            />
          </div>
        )}

        {/* SEARCH */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-6"
        >
          <div className="relative max-w-md">
            <FaSearch
              className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-violet-300/50"
              aria-hidden="true"
            />

            <input
              id="project-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder={t('searchProjects')}
              aria-label={t('searchProjects')}
              autoComplete="off"
              className="h-14 w-full rounded-full border border-white/8 bg-white/[0.04] pl-12 pr-12 text-sm font-medium text-white outline-none backdrop-blur-xl transition focus:border-fuchsia-400/40 focus:ring-4 focus:ring-violet-500/10 placeholder:text-violet-200/25"
            />

            {search && (
              <HoverButton
                type="button"
                onClick={() =>
                  setSearch('')
                }
                aria-label={t('clearProjectSearch')}
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-0 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                baseStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.1)',
                  color: '#ddd6fe',
                  padding: 0,
                }}
                hoverStyle={{
                  backgroundColor:
                    'rgba(255,255,255,0.15)',
                }}
              >
                <FaTimes
                  className="text-xs"
                  aria-hidden="true"
                />
              </HoverButton>
            )}
          </div>
        </motion.div>

        {/* FILTERS */}

        <div className="mb-14 overflow-x-auto pb-2">
          <div
            className="flex min-w-max gap-2"
            role="group"
            aria-label={t('projectCategories')}
          >
            {categoryKeys.map(
              (category) => {
                const Icon =
                  category === 'all'
                    ? FaLayerGroup
                    : categoryConfig[
                        category
                      ].icon;

                const isActive =
                  activeCategory ===
                  category;

                return (
                  <HoverButton
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                    aria-pressed={isActive}
                    className={`site-text-control group inline-flex min-h-[46px] min-w-max items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 ${
                      isActive
                        ? 'border-fuchsia-300/60 shadow-[0_0_18px_rgba(217,70,239,.42),0_10px_28px_rgba(124,58,237,.24)]'
                        : 'border-white/15 shadow-[0_6px_18px_rgba(0,0,0,.18)] hover:border-fuchsia-300/45 hover:shadow-[0_0_16px_rgba(217,70,239,.22)]'
                    }`}
                    baseStyle={
                      isActive
                        ? {
                            backgroundColor:
                              'linear-gradient(135deg, rgba(168,85,247,.58), rgba(217,70,239,.42))',
                            color: '#ffffff',
                          }
                        : {
                            backgroundColor:
                              'rgba(255,255,255,0.065)',
                            color:
                              'rgba(237,233,254,0.78)',
                          }
                    }
                    hoverStyle={
                      isActive
                        ? {}
                        : {
                            backgroundColor:
                              'rgba(217,70,239,0.16)',
                            color: '#ffffff',
                          }
                    }
                  >
                    <Icon aria-hidden="true" />

                    {t(`categories.${category}`)}

                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-extrabold leading-none"
                      aria-hidden="true"
                      style={
                        isActive
                          ? {
                              backgroundColor:
                                'rgba(35,10,55,0.42)',
                              color:
                                '#f5d0fe',
                            }
                          : {
                              backgroundColor:
                                'rgba(255,255,255,0.1)',
                              color:
                                'rgba(221,214,254,0.72)',
                            }
                      }
                    >
                      {categoryCount(
                        category
                      )}
                    </span>
                  </HoverButton>
                );
              }
            )}
          </div>
        </div>

        {/* PROJECT GRID */}

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${search}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map(
                (project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + 2}
                    onDetails={
                      setSelectedProject
                    }
                    onDemo={
                      setMediaProject
                    }
                  />
                )
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="rounded-[32px] border border-white/8 bg-white/[0.03] px-6 py-20 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-violet-300">
                <FaSearch aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-black text-white">
                {t('noProject')}
              </h3>

              <p className="mt-2 text-sm text-violet-100/40">
                {t('tryAnother')}
              </p>

              <HoverButton
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
                className="mt-6 rounded-full border-0 px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                baseStyle={{
                  backgroundColor:
                    '#7c3aed',
                  color: '#ffffff',
                }}
                hoverStyle={{
                  backgroundColor:
                    '#8b5cf6',
                }}
              >
                {t('showAll')}
              </HoverButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DETAILS MODAL */}

      <AnimatePresence>
        {selectedProject && (
          <DetailsModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
            onDemo={setMediaProject}
          />
        )}
      </AnimatePresence>

      {/* MEDIA MODAL */}

      <AnimatePresence>
        {mediaProject && (
          <MediaModal
            project={mediaProject}
            onClose={() =>
              setMediaProject(null)
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projets;
