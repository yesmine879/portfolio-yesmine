import { createContext, useContext, useEffect, useMemo, useState } from 'react';

/*
const pageTranslations = [
  ['Computer science engineering student,', 'Élève ingénieure en informatique,'],
  ['full-stack, data & AI', 'full-stack, data & IA'],
  ["I'm in the engineering cycle at IIT Sfax, after a Bachelor's degree in Software Engineering and Information Systems. I build complete web applications with Angular, Laravel, Node.js, Next.js, and NestJS, and I work on data analysis and machine learning in Python.", "Je suis en cycle d’ingénieur à l’IIT Sfax après une licence en génie logiciel et systèmes d’information. Je développe des applications web complètes avec Angular, Laravel, Node.js, Next.js et NestJS, et je travaille sur l’analyse de données et le machine learning avec Python."],
  ['Certificates', 'Certificats'],
  ['Experiences', 'Expériences'],
  ['Languages', 'Langues'],
  ['Technical skills', 'Compétences techniques'],
  ['Programming Languages', 'Langages de programmation'],
  ['Frameworks & Libraries', 'Frameworks et bibliothèques'],
  ['Databases', 'Bases de données'],
  ['Data & AI', 'Data et IA'],
  ['Tools & Methods', 'Outils et méthodes'],
  ['View certificate', 'Voir le certificat'],
  ['Download', 'Télécharger'],
  ['Education', 'Formation'],
  ['Professional Experience', 'Expérience professionnelle'],
  ['Activities & Certifications', 'Activités et certifications'],
  ['View certificate', 'Voir le certificat'],
  ['Search a project, technology...', 'Rechercher un projet, une technologie...'],
  ['Project details', 'Détails du projet'],
  ['View demo', 'Voir la démo'],
  ['Source code', 'Code source'],
  ['Confidential project', 'Projet confidentiel'],
  ['Key highlights', 'Points clés'],
  ['Close', 'Fermer'],
  ['Previous', 'Précédent'],
  ['Next', 'Suivant'],
  ['Email', 'E-mail'],
  ['Phone', 'Téléphone'],
  ['Location', 'Localisation'],
  ['Contact information', 'Informations de contact'],
  ['Message sent successfully', 'Message envoyé avec succès'],
  ['Thank you for your message. I will get back to you shortly.', 'Merci pour votre message. Je vous répondrai bientôt.'],
  ['Message not sent', 'Message non envoyé'],
  ['Please try again or contact me directly.', 'Veuillez réessayer ou me contacter directement.'],
  ['Contact me directly', 'Me contacter directement'],
  ['Available for opportunities', 'Disponible pour des opportunités'],
  ['Internship, work-study, freelance or full-time role.', 'Stage, alternance, freelance ou poste à temps plein.'],
  ['Name is required.', 'Le nom est obligatoire.'],
  ['A valid email is required.', 'Une adresse e-mail valide est obligatoire.'],
  ['Message is too short (minimum 10 characters).', 'Le message est trop court (10 caractères minimum).'],
  ['Academic Education', 'Formation académique'],
  ['Selected work', 'Projets sélectionnés'],
];

const translatePageText = (text, language) => pageTranslations.reduce(
  (result, [english, french]) => result.replaceAll(
    language === 'fr' ? english : french,
    language === 'fr' ? french : english
  ),
  text
);

*/

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', journey: 'Journey', activities: 'Activities', projects: 'Projects', contact: 'Contact' },
    language: 'Language',
    academicStatus: 'Current Academic Status',
    engineeringCycle: 'Computer Science Engineering Student',
    footerBio: 'Full Stack Developer passionate about web development, Data, and Artificial Intelligence.',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
    madeWith: 'Made with',
    heroBadge: 'Engineering Cycle · IIT Sfax',
    heroDescription: 'Engineering student passionate about Full Stack Development and Data & Artificial Intelligence. I build business-oriented web applications using modern technologies such as Angular, Laravel, Keycloak, Python, and Spring Boot.',
    viewProjects: 'View my projects',
    downloadCv: 'Download my CV',
    availability: 'Open to collaboration and software projects',
    openToCollaboration: 'Open to collaboration',
    about: 'About',
    journey: 'Journey',
    projectsLabel: 'Selected work',
    projectHeading: 'Projects that',
    projectHeadingAccent: 'turn ideas into products.',
    projectIntro: 'A selection of web, mobile, backend, AI, and software engineering projects developed throughout my academic and professional journey.',
    projectCount: 'Projects',
    searchProjects: 'Search a project, technology...',
    noProject: 'No project found',
    tryAnother: 'Try another keyword or category.',
    showAll: 'Show all projects',
    journeyTitle: 'Education & Experience',
    journeyIntro: 'My academic journey, professional experiences, and activities that shaped my path in technology.',
    academicEducation: 'Academic Education',
    associativeExperience: 'Associative Experience',
    interests: 'Interests',
    professionalExperience: 'Professional Experience',
    activitiesTitle: 'Activities & involvement',
    activitiesIntro: 'Beyond coursework, I contribute to student communities and collaborative events that strengthen my communication, teamwork, and technical skills.',
    ieeeTitle: 'IEEE Student Branch',
    ieeeDescription: 'Officer involved in technical projects, student events, and community initiatives.',
    osiTitle: 'OSI organization team',
    osiDescription: 'Planned and coordinated student activities with a focus on teamwork and communication.',
    activitiesFocus: 'What these experiences bring',
    activitiesFocusDescription: 'Collaboration, initiative, event coordination, and clear communication.',
    viewCertificate: 'View certificate',
    hideCertificate: 'Hide certificate',
    openPdf: 'Open PDF',
    download: 'Download',
    contactEyebrow: 'Let’s stay in touch',
    contactTitle: 'Contact me',
    contactIntro: 'Do you have an opportunity, internship, work-study program, or project? Send me a message and I will get back to you as soon as possible.',
    sendMessage: 'Send message',
    fullName: 'Full name',
    yourMessage: 'Your message',
    sending: 'Sending...',
    contactDetails: 'Contact details',
    emailAddress: 'Email address',
    messagePlaceholder: 'Tell me about your project, internship, work-study program, or collaboration...',
    contactInformation: 'Contact information',
    phone: 'Phone',
    location: 'Location',
    availableFor: 'Available for',
    currentStatus: 'Current status · 2026',
    formNameRequired: 'Please enter your name.',
    formEmailRequired: 'Please enter your email address.',
    formEmailInvalid: 'Enter a valid email address.',
    formMessageRequired: 'Please enter your message.',
    formMessageShort: 'Message is too short (minimum 10 characters).',
    messageNotSent: 'Message not sent',
    messageNotSentDescription: 'Something went wrong. Please try again, or email me directly at',
    exploreProject: 'Explore project',
    finalYearProject: 'Final Year Project',
    opticustSubtitle: 'Customer Complaints & Satisfaction Management Platform',
    mainCapabilities: 'Main capabilities',
    goHome: 'Go to home',
    openNavigation: 'Open navigation menu',
    closeNavigation: 'Close navigation menu',
    mobileNavigation: 'Mobile navigation',
    profileRole: 'Full Stack · Data & AI',
    visitGithub: "Visit Yesmine's GitHub profile",
    visitLinkedin: "Visit Yesmine's LinkedIn profile",
    clearProjectSearch: 'Clear project search',
    projectCategories: 'Project categories',
    closeProjectDetails: 'Close project details',
    closeProjectPreview: 'Close project preview',
    previousPreview: 'Previous preview',
    nextPreview: 'Next preview',
    viewProjectPreview: 'View project preview',
    openGithub: 'Open project GitHub repository',
    confidential: 'Confidential',
    aboutProject: 'About the project',
    technologies: 'Technologies',
    viewOnGithub: 'View on GitHub',
    viewPreview: 'View preview',
    downloadReport: 'Download PFE report',
    confidentialDescription: 'Project implementation details, source code, and demonstration materials are not publicly shared due to confidentiality.',
    internship: 'Final-year internship',
    workStudy: 'Work-study program',
    freelance: 'Freelance',
    collaboration: 'Collaboration',
    availabilityDescription: 'I am open to opportunities in Full Stack development, Data / AI, and modern web projects.',
    currentEducation: 'Engineering Cycle in Computer Science',
    currentEducationPeriod: 'IIT Sfax · 2026–Present',
    contactDirectly: 'Contact me directly',
    sfaxTunisia: 'Sfax, Tunisia',
    clubsEyebrow: 'Community & events',
    clubsTitle: 'Learning beyond the classroom.',
    clubsIntro: 'A space for the events, communities, and initiatives that helped shape my student experience. Each card can become a visual story of the people, ideas, and moments behind the event.',
    exploreClub: 'Explore club', viewGallery: 'View gallery', openClubGallery: 'Open club gallery', closeClubGallery: 'Close club gallery', clubDialogLabel: 'Club details and gallery', clubLogo: 'logo', clubEventStory: 'Event story', galleryEditHint: 'Replace the placeholders in this gallery with your own event photos or video clips.', prevMedia: 'Previous media', nextMedia: 'Next media', clubExpandMedia: 'Expand media', clubGalleryHint: 'Click to select · Double-click or click preview to view full screen',
    clubsData: {
      ieee: { title: 'IEEE Student Branch', about: 'A community for technology, innovation, and student-led initiatives. Add your club description here to introduce its mission and the work you did with the team.', story: 'Describe a workshop, competition, or technical event: your role, the audience, the outcome, and what you learned.', galleryAlt: 'IEEE activity gallery placeholder' },
      mtc: { title: 'MTC community', about: 'Present MTC’s identity, mission, and the kinds of creative or technical experiences it brings to campus.', story: 'Add the story behind a memorable MTC event and the contribution you made to it.', galleryAlt: 'MTC activity gallery placeholder' },
      acm: { title: 'ACM community', about: 'Introduce ACM and its role in connecting students around computing, peer learning, and hands-on technology events.', story: 'Share a talk, hackathon, workshop, or other ACM activity that reflects your involvement.', galleryAlt: 'ACM activity gallery placeholder' },
      sos: { title: 'SOS Village initiative', about: 'Highlight the purpose of SOS Village and the community values that make its initiatives meaningful.', story: 'Tell visitors about this initiative’s impact, the people involved, and the memory you want to preserve.', galleryAlt: 'SOS Village activity gallery placeholder' },
      iit: { title: 'IIT events', about: 'Use this space for university events, conferences, ceremonies, and campus initiatives that are part of your journey.', story: 'Describe the occasion, your role, and the value this event added to your academic experience.', galleryAlt: 'IIT event gallery placeholder' },
      robotic: { title: 'Robotics Club', about: 'Explore robotics, embedded systems, and hardware-software integration through hands-on student projects and competitions.', story: 'Participate in robotics challenges, develop automated prototypes, and collaborate on cutting-edge engineering solutions.', galleryAlt: 'Robotics Club activity gallery placeholder' },
    },
    aboutContent: {
      titleLead: 'Computer science engineering student,', titleAccent: 'full-stack, data & AI',
      intro: "I'm in the engineering cycle at IIT Sfax, after a Bachelor's degree in Software Engineering and Information Systems. I build complete web applications with Angular, Laravel, Node.js, Next.js, and NestJS, and I work on data analysis and machine learning in Python.",
      certificates: 'Certificates', experiences: 'Experiences', languages: 'Languages', technologies: 'Technologies I use',
      bio1: "I've built end-to-end business platforms: a customer complaint management system, a fleet management dashboard, an olive oil e-commerce platform in Next.js and NestJS, and an order-management microservices architecture in Spring Boot.",
      bio2: 'I care about polished interfaces, well-structured back ends, and data that actually informs decisions — hence the analytics and visualization modules I bring into my projects.',
      bio3: "I am currently pursuing an Engineering Cycle in Computer Science at IIT Sfax, building on my Bachelor's degree in Software Engineering and Information Systems.",
      certificatesTitle: 'Certificates & Participations', certificatesIntro: 'Each document is displayed as-is. Open it in a new tab, download it, copy its link, or click the preview to read it full screen.',
      search: 'Search a certificate', clearSearch: 'Clear certificate search', noResult: 'No certificate matches this search.', showAll: 'Show all',
      cta: "Let's build something meaningful together", contact: 'Contact me', downloadCv: 'Download my CV',
    },
    categories: { all: 'All', web: 'Web', ml: 'AI / ML', mobile: 'Mobile', backend: 'Backend', robotics: 'IoT', csharp: 'C# / Games', java: 'Java' },
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', journey: 'Parcours', activities: 'Activités', projects: 'Projets', contact: 'Contact' },
    language: 'Langue',
    academicStatus: 'Situation académique actuelle',
    engineeringCycle: 'Cycle d’ingénieur en informatique · IIT Sfax',
    footerBio: 'Développeuse Full Stack passionnée par le développement web, la data et l’intelligence artificielle.',
    backToTop: 'Retour en haut',
    rights: 'Tous droits réservés.',
    madeWith: 'Réalisé avec',
    heroBadge: 'Cycle d’ingénieur · IIT Sfax',
    heroDescription: 'Élève ingénieure passionnée par le développement Full Stack, la data et l’intelligence artificielle. Je conçois des applications web orientées métier avec Angular, Laravel, Keycloak, Python et Spring Boot.',
    viewProjects: 'Voir mes projets',
    downloadCv: 'Télécharger mon CV',
    availability: 'Disponible pour des collaborations et des projets logiciels',
    openToCollaboration: 'Ouverte à la collaboration',
    about: 'À propos',
    journey: 'Parcours',
    projectsLabel: 'Projets sélectionnés',
    projectHeading: 'Des projets qui',
    projectHeadingAccent: 'transforment les idées en produits.',
    projectIntro: 'Une sélection de projets web, mobile, backend, IA et logiciel développés au cours de mon parcours académique et professionnel.',
    projectCount: 'Projets',
    searchProjects: 'Rechercher un projet, une technologie...',
    noProject: 'Aucun projet trouvé',
    tryAnother: 'Essayez un autre mot-clé ou une autre catégorie.',
    showAll: 'Afficher tous les projets',
    journeyTitle: 'Formation & Expérience',
    journeyIntro: 'Mon parcours académique, mes expériences professionnelles et les activités qui ont façonné mon chemin dans la technologie.',
    academicEducation: 'Formation académique',
    associativeExperience: 'Expérience associative',
    interests: 'Centres d’intérêt',
    professionalExperience: 'Expérience professionnelle',
    activitiesTitle: 'Activités & engagement',
    activitiesIntro: 'Au-delà des études, je contribue à des communautés étudiantes et à des événements collaboratifs qui renforcent mes compétences en communication, en travail d’équipe et en technique.',
    ieeeTitle: 'IEEE Student Branch',
    ieeeDescription: 'Membre du bureau impliquée dans des projets techniques, des événements étudiants et des initiatives de communauté.',
    osiTitle: 'Équipe d’organisation OSI',
    osiDescription: 'Planification et coordination d’activités étudiantes avec un accent sur le travail d’équipe et la communication.',
    activitiesFocus: 'Ce que ces expériences m’apportent',
    activitiesFocusDescription: 'Collaboration, initiative, coordination d’événements et communication claire.',
    viewCertificate: 'Voir le certificat',
    hideCertificate: 'Masquer le certificat',
    openPdf: 'Ouvrir le PDF',
    download: 'Télécharger',
    contactEyebrow: 'Restons en contact',
    contactTitle: 'Me contacter',
    contactIntro: 'Une opportunité, un stage, une alternance ou un projet ? Envoyez-moi un message et je vous répondrai dès que possible.',
    sendMessage: 'Envoyer le message',
    fullName: 'Nom complet',
    yourMessage: 'Votre message',
    sending: 'Envoi en cours...',
    contactDetails: 'Coordonnées',
    emailAddress: 'Adresse e-mail',
    messagePlaceholder: 'Parlez-moi de votre projet, stage, alternance ou collaboration...',
    contactInformation: 'Informations de contact',
    phone: 'Téléphone',
    location: 'Localisation',
    availableFor: 'Disponible pour',
    currentStatus: 'Situation actuelle · 2026',
    formNameRequired: 'Merci d’indiquer votre nom.',
    formEmailRequired: 'Merci d’indiquer votre e-mail.',
    formEmailInvalid: 'Format d’e-mail invalide.',
    formMessageRequired: 'Merci d’indiquer votre message.',
    formMessageShort: 'Message trop court (10 caractères minimum).',
    messageNotSent: 'Message non envoyé',
    messageNotSentDescription: 'Un problème est survenu. Veuillez réessayer ou m’écrire directement à',
    exploreProject: 'Explorer le projet',
    finalYearProject: 'Projet de fin d’études',
    opticustSubtitle: 'Plateforme de gestion des réclamations et de satisfaction client',
    mainCapabilities: 'Fonctionnalités principales',
    goHome: 'Retour à l’accueil',
    openNavigation: 'Ouvrir le menu de navigation',
    closeNavigation: 'Fermer le menu de navigation',
    mobileNavigation: 'Navigation mobile',
    profileRole: 'Full Stack · Data & IA',
    visitGithub: 'Visiter le profil GitHub de Yesmine',
    visitLinkedin: 'Visiter le profil LinkedIn de Yesmine',
    clearProjectSearch: 'Effacer la recherche de projet',
    projectCategories: 'Catégories de projets',
    closeProjectDetails: 'Fermer les détails du projet',
    closeProjectPreview: 'Fermer l’aperçu du projet',
    previousPreview: 'Aperçu précédent',
    nextPreview: 'Aperçu suivant',
    viewProjectPreview: 'Voir l’aperçu du projet',
    openGithub: 'Ouvrir le dépôt GitHub du projet',
    confidential: 'Confidentiel',
    aboutProject: 'À propos du projet',
    technologies: 'Technologies',
    viewOnGithub: 'Voir sur GitHub',
    viewPreview: 'Voir l’aperçu',
    downloadReport: 'Télécharger le rapport de PFE',
    confidentialDescription: 'Les détails de réalisation, le code source et les démonstrations du projet ne sont pas publics pour des raisons de confidentialité.',
    internship: 'Stage de fin d’études',
    workStudy: 'Alternance',
    freelance: 'Freelance',
    collaboration: 'Collaboration',
    availabilityDescription: 'Je suis ouverte aux opportunités en développement Full Stack, data / IA et projets web modernes.',
    currentEducation: 'Cycle d’ingénieur en informatique',
    currentEducationPeriod: 'IIT Sfax · 2026–Aujourd’hui',
    contactDirectly: 'Me contacter directement',
    sfaxTunisia: 'Sfax, Tunisie',
    clubsEyebrow: 'Communautés & événements',
    clubsTitle: 'Apprendre au-delà de la salle de classe.',
    clubsIntro: 'Un espace consacré aux événements, communautés et initiatives qui ont façonné mon expérience étudiante. Chaque carte peut devenir le récit visuel des personnes, idées et moments qui ont marqué l’événement.',
    exploreClub: 'Découvrir le club', viewGallery: 'Voir la galerie', openClubGallery: 'Ouvrir la galerie du club', closeClubGallery: 'Fermer la galerie du club', clubDialogLabel: 'Détails du club et galerie', clubLogo: 'logo', clubEventStory: 'Histoire de l’événement', galleryEditHint: 'Remplacez les emplacements de cette galerie par vos photos ou extraits vidéo d’événements.', prevMedia: 'Média précédent', nextMedia: 'Média suivant', clubExpandMedia: 'Agrandir le média', clubGalleryHint: 'Cliquez pour sélectionner · Double-cliquez ou cliquez sur l’aperçu pour afficher en plein écran',
    clubsData: {
      ieee: { title: 'IEEE Student Branch', about: 'Une communauté dédiée à la technologie, l’innovation et aux initiatives portées par les étudiants. Ajoutez ici la description du club, sa mission et votre travail avec l’équipe.', story: 'Décrivez un atelier, une compétition ou un événement technique : votre rôle, le public, le résultat et ce que vous en avez appris.', galleryAlt: 'Emplacement pour une galerie d’activités IEEE' },
      mtc: { title: 'Communauté MTC', about: 'Présentez l’identité de MTC, sa mission et les expériences créatives ou techniques qu’il apporte sur le campus.', story: 'Ajoutez l’histoire d’un événement MTC marquant et votre contribution.', galleryAlt: 'Emplacement pour une galerie d’activités MTC' },
      acm: { title: 'Communauté ACM', about: 'Présentez ACM et son rôle dans la mise en relation des étudiants autour de l’informatique, de l’apprentissage entre pairs et d’événements pratiques.', story: 'Partagez une conférence, un hackathon, un atelier ou une autre activité ACM qui reflète votre implication.', galleryAlt: 'Emplacement pour une galerie d’activités ACM' },
      sos: { title: 'Initiative SOS Village', about: 'Mettez en avant la mission de SOS Village et les valeurs de communauté qui donnent du sens à ses initiatives.', story: 'Parlez de l’impact de cette initiative, des personnes impliquées et du souvenir que vous souhaitez préserver.', galleryAlt: 'Emplacement pour une galerie d’activités SOS Village' },
      iit: { title: 'Événements IIT', about: 'Utilisez cet espace pour les événements universitaires, conférences, cérémonies et initiatives de campus qui font partie de votre parcours.', story: 'Décrivez l’occasion, votre rôle et la valeur apportée à votre expérience académique.', galleryAlt: 'Emplacement pour une galerie d’événements IIT' },
      robotic: { title: 'Club Robotique', about: 'Explorez la robotique, les systèmes embarqués et l’intégration matériel-logiciel à travers des projets étudiants et des compétitions.', story: 'Participez à des défis de robotique, concevez des prototypes automatisés et collaborez sur des solutions d’ingénierie innovantes.', galleryAlt: 'Emplacement pour une galerie d’activités Club Robotique' },
    },
    aboutContent: {
      titleLead: 'Élève ingénieure en informatique,', titleAccent: 'full-stack, data & IA',
      intro: "Je suis en cycle d’ingénieur à l’IIT Sfax après une licence en génie logiciel et systèmes d’information. Je développe des applications web complètes avec Angular, Laravel, Node.js, Next.js et NestJS, et je travaille sur l’analyse de données et le machine learning avec Python.",
      certificates: 'Certificats', experiences: 'Expériences', languages: 'Langues', technologies: 'Technologies utilisées',
      bio1: "J’ai réalisé des plateformes métier de bout en bout : un système de gestion des réclamations clients, un tableau de bord de gestion de flotte, une plateforme e-commerce d’huile d’olive avec Next.js et NestJS, ainsi qu’une architecture de microservices de gestion de commandes avec Spring Boot.",
      bio2: 'J’accorde une grande importance aux interfaces soignées, aux back-ends bien structurés et aux données qui éclairent réellement les décisions — d’où les modules d’analyse et de visualisation intégrés à mes projets.',
      bio3: "Je poursuis actuellement un cycle d’ingénieur en informatique à l’IIT Sfax, dans la continuité de ma licence en génie logiciel et systèmes d’information.",
      certificatesTitle: 'Certificats et participations', certificatesIntro: 'Chaque document est affiché dans sa version originale. Ouvrez-le dans un nouvel onglet, téléchargez-le, copiez son lien ou cliquez sur l’aperçu pour le lire en plein écran.',
      search: 'Rechercher un certificat', clearSearch: 'Effacer la recherche', noResult: 'Aucun certificat ne correspond à cette recherche.', showAll: 'Tout afficher',
      cta: 'Construisons ensemble quelque chose qui a du sens', contact: 'Me contacter', downloadCv: 'Télécharger mon CV',
    },
    categories: { all: 'Tous', web: 'Web', ml: 'IA / ML', mobile: 'Mobile', backend: 'Backend', robotics: 'IoT', csharp: 'C# / Jeux', java: 'Java' },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);

    /* const translateNode = (node) => {
      const translated = translatePageText(node.nodeValue, language);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    };

    const translateDocument = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        if (node.parentElement && !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) {
          translateNode(node);
        }
        node = walker.nextNode();
      }
    };

    translateDocument();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') translateNode(mutation.target);
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.TEXT_NODE) translateNode(addedNode);
        });
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect(); */
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key) => key.split('.').reduce((valueAtKey, part) => valueAtKey?.[part], translations[language]) ?? key,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
