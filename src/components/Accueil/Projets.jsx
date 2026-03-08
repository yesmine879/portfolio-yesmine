import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
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
} from 'react-icons/fa';

const getSortedMedia = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map(([, mod]) => mod.default ?? mod);

// ===== DEMOS =====
const cookmateImages = getSortedMedia(
  import.meta.glob('../../assets/image Cookmate/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
);

const gestionMaterielImages = getSortedMedia(
  import.meta.glob('../../assets/image gestion materiel/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
);

const pfaImages = getSortedMedia(
  import.meta.glob('../../assets/image PFA/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
);

const pfaVideos = getSortedMedia(
  import.meta.glob('../../assets/image PFA/*.{mp4,webm,ogg,mov}', {
    eager: true,
    import: 'default',
  })
);

const burgerImages = getSortedMedia(
  import.meta.glob('../../assets/image siter berger/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
);

const portfolioImages = [];

const categories = [
  {
    key: 'web',
    title: 'Projets Web',
    icon: <FaGlobe className="text-3xl text-indigo-600" />,
    projects: [
      {
        titre: 'portfolio-yesmine',
        techno: 'React • Vite',
        github: 'https://github.com/yesmine879/portfolio-yesmine',
        description:
          "Portfolio personnel développé avec React et Vite pour présenter mon profil, mes compétences, mes projets, mes certifications et mes liens professionnels dans une interface moderne, responsive et animée.",
        demo: { images: portfolioImages, videos: [] },
      },
      {
        titre: 'burger-house-website',
        techno: 'HTML • CSS • JavaScript',
        github: 'https://github.com/yesmine879/burger-house-website',
        description:
          "Site web responsive conçu avec HTML, CSS et JavaScript autour d’un concept Burger House. Le projet met l’accent sur le design visuel, la mise en page, la présentation du contenu et l’adaptation aux écrans mobiles.",
        demo: { images: burgerImages, videos: [] },
      },
      {
        titre: 'event-management-system',
        techno: 'Laravel • Angular • Node.js • MySQL',
        github: 'https://github.com/yesmine879/event-management-system',
        description:
          "Application web full-stack de gestion d’événements avec gestion des événements, participation, pages d’interface, logique administrative et expérience utilisateur moderne.",
        demo: { images: pfaImages, videos: pfaVideos },
      },
      {
        titre: 'material-management-system',
        techno: 'Laravel • Angular • MySQL',
        github: 'https://github.com/yesmine879/material-management-system',
        description:
          "Application web full-stack de gestion de matériel avec interface d’administration, organisation des données, opérations CRUD et structuration backend/frontend.",
        demo: { images: gestionMaterielImages, videos: [] },
      },
      {
        titre: 'WebProject',
        techno: 'PHP • CRUD',
        github: 'https://github.com/yesmine879/WebProject',
        description:
          "Projet web simple autour des opérations CRUD pour manipuler des données, organiser les traitements et mettre en pratique les bases du développement web dynamique.",
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'ml',
    title: 'Projets IA / Machine Learning',
    icon: <FaBrain className="text-3xl text-pink-600" />,
    projects: [
      {
        titre: 'machine-learning-labs',
        techno: 'Python • Jupyter Notebook • Data Science',
        github: 'https://github.com/yesmine879/machine-learning-labs',
        description:
          "Travaux pratiques, notebooks et exercices en machine learning et data science couvrant différents algorithmes, la préparation des données et l’expérimentation sur plusieurs datasets.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'heart-disease-prediction',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/heart-disease-prediction',
        description:
          "Projet de classification pour la prédiction des maladies cardiaques à partir de données médicales, avec entraînement de modèles et analyse des résultats.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'diabetes-prediction-ml',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/diabetes-prediction-ml',
        description:
          "Modèle de prédiction du diabète à partir de données médicales, avec traitement des données, apprentissage supervisé et évaluation des performances.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'spam-classification',
        techno: 'Python • NLP • Classification',
        github: 'https://github.com/yesmine879/spam-classification',
        description:
          "Projet de classification de messages spam avec traitement de texte, vectorisation, entraînement de modèle et analyse de performance.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'market-basket-optimization',
        techno: 'Python • Data Mining',
        github: 'https://github.com/yesmine879/market-basket-optimization',
        description:
          "Analyse des associations de produits en data mining à travers les règles d’association pour identifier des comportements d’achat fréquents.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'mall-customers-segmentation',
        techno: 'Python • Clustering',
        github: 'https://github.com/yesmine879/mall-customers-segmentation',
        description:
          "Projet de segmentation de clients à l’aide d’algorithmes de clustering pour distinguer différents profils de consommateurs.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'titanic-ml-project',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/titanic-ml-project',
        description:
          "Projet de prédiction de survie sur le dataset Titanic avec préparation des données, sélection de variables et modèles de classification.",
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'mobile',
    title: 'Projets Mobile',
    icon: <FaMobileAlt className="text-3xl text-cyan-600" />,
    projects: [
      {
        titre: 'cookmate',
        techno: 'Flutter',
        github: 'https://github.com/yesmine879/cookmate',
        description:
          "Application mobile Flutter dédiée aux recettes de cuisine avec interfaces modernes, navigation entre écrans et expérience utilisateur fluide.",
        demo: { images: cookmateImages, videos: [] },
      },
    ],
  },
  {
    key: 'backend',
    title: 'Backend / Microservices',
    icon: <FaServer className="text-3xl text-emerald-600" />,
    projects: [
      {
        titre: 'order-management-microservices',
        techno: 'Spring Boot • Microservices • Java',
        github: 'https://github.com/yesmine879/order-management-microservices',
        description:
          "Système de gestion de commandes basé sur Spring Boot et les microservices, avec séparation des services, logique distribuée et organisation modulaire.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'flask-chatbot',
        techno: 'Python • Flask',
        github: 'https://github.com/yesmine879/flask-chatbot',
        description:
          "Application web chatbot développée avec Python et Flask pour expérimenter les interfaces conversationnelles et la logique backend.",
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'csharp',
    title: 'Projets C# / Jeux',
    icon: <FaGamepad className="text-3xl text-violet-600" />,
    projects: [
      {
        titre: 'pharmacy-management',
        techno: 'ASP.NET • C#',
        github: 'https://github.com/yesmine879/pharmacy-management',
        description:
          "Application de gestion de pharmacie développée en ASP.NET et C# avec organisation des modules métiers et gestion des données.",
        demo: { images: [], videos: [] },
      },
      {
        titre: 'angry-birds',
        techno: 'Unity • C#',
        github: 'https://github.com/yesmine879/angry-birds',
        description:
          "Jeu 2D inspiré d’Angry Birds, développé avec Unity et C#, intégrant logique de gameplay et interactions physiques.",
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'java',
    title: 'Projets Java',
    icon: <FaJava className="text-3xl text-orange-600" />,
    projects: [
      {
        titre: 'CRUD',
        techno: 'Java',
        github: 'https://github.com/yesmine879/CRUD',
        description:
          "Application CRUD simple réalisée en Java pour mettre en pratique les opérations de base, la structuration du code et la logique applicative.",
        demo: { images: [], videos: [] },
      },
    ],
  },
];

const ProjectCard = ({ projet, index }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const media = useMemo(() => {
    const images = projet.demo?.images?.map((src) => ({ type: 'image', src })) || [];
    const videos = projet.demo?.videos?.map((src) => ({ type: 'video', src })) || [];
    return [...videos, ...images];
  }, [projet]);

  const hasDemo = media.length > 0;

  const closeModals = () => {
    setDescriptionOpen(false);
    setDemoOpen(false);
    setSelectedMediaIndex(0);
  };

  const nextMedia = () => {
    if (!media.length) return;
    setSelectedMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    if (!media.length) return;
    setSelectedMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06 }}
        viewport={{ once: true }}
        className="group bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
      >
        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition">
          {projet.titre}
        </h4>

        <p className="text-gray-600 mb-6 min-h-[52px]">{projet.techno}</p>

        <div className="flex flex-wrap gap-3">
          <a
            href={projet.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-900 text-white hover:bg-indigo-700 transition font-semibold"
          >
            <FaGithub />
            Code
          </a>

          <button
            onClick={() => setDescriptionOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition font-semibold"
          >
            <FaInfoCircle />
            Description
          </button>

          <button
            onClick={() => hasDemo && setDemoOpen(true)}
            disabled={!hasDemo}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-2xl transition font-semibold ${
              hasDemo
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-[1.02]'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaExternalLinkAlt />
            Demo
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {descriptionOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="fixed inset-0 z-[110] flex items-start justify-center p-4 pt-28 overflow-y-auto"
            >
              <button
                onClick={closeModals}
                className="fixed top-24 right-6 z-[120] p-3 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-100 transition"
              >
                <FaTimes className="text-gray-700 text-2xl" />
              </button>

              <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-h-[calc(100vh-8rem)] flex flex-col">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">{projet.titre}</h3>
                  <p className="text-gray-500 mt-1">{projet.techno}</p>
                </div>

                <div className="px-6 py-6 overflow-y-auto">
                  <p className="text-gray-700 text-lg leading-relaxed">{projet.description}</p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={projet.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:bg-indigo-700 transition font-semibold"
                    >
                      <FaGithub />
                      Voir le code
                    </a>

                    <button
                      onClick={() => {
                        setDescriptionOpen(false);
                        if (hasDemo) setDemoOpen(true);
                      }}
                      disabled={!hasDemo}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl transition font-semibold ${
                        hasDemo
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <FaImages />
                      Voir la démo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {demoOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="fixed inset-0 z-[110] flex items-start justify-center p-4 pt-28 overflow-y-auto"
            >
              <button
                onClick={closeModals}
                className="fixed top-24 right-6 z-[120] p-3 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-100 transition"
              >
                <FaTimes className="text-gray-700 text-2xl" />
              </button>

              <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-h-[calc(100vh-8rem)] flex flex-col">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900">Démo — {projet.titre}</h3>
                  <p className="text-gray-500 mt-1">{projet.techno}</p>
                </div>

                <div className="p-6 overflow-y-auto">
                  {!hasDemo ? (
                    <div className="text-center py-16">
                      <FaPlayCircle className="mx-auto text-5xl text-gray-300 mb-4" />
                      <p className="text-xl text-gray-500">
                        Aucune image ou vidéo disponible pour ce projet.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="relative bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 min-h-[420px] flex items-center justify-center">
                        {media[selectedMediaIndex]?.type === 'video' ? (
                          <video
                            src={media[selectedMediaIndex].src}
                            controls
                            className="w-full max-h-[70vh] object-contain bg-black"
                          />
                        ) : (
                          <img
                            src={media[selectedMediaIndex]?.src}
                            alt={`demo-${selectedMediaIndex + 1}`}
                            className="w-full max-h-[70vh] object-contain"
                          />
                        )}

                        {media.length > 1 && (
                          <>
                            <button
                              onClick={prevMedia}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition"
                            >
                              <FaChevronLeft className="text-gray-700" />
                            </button>

                            <button
                              onClick={nextMedia}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition"
                            >
                              <FaChevronRight className="text-gray-700" />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                        {media.map((item, idx) => (
                          <button
                            key={`${item.src}-${idx}`}
                            onClick={() => setSelectedMediaIndex(idx)}
                            className={`relative rounded-2xl overflow-hidden border-2 transition ${
                              selectedMediaIndex === idx
                                ? 'border-indigo-500 shadow-lg'
                                : 'border-gray-200 hover:border-indigo-300'
                            }`}
                          >
                            {item.type === 'video' ? (
                              <div className="h-28 bg-gray-900 flex items-center justify-center">
                                <FaPlayCircle className="text-white text-3xl" />
                              </div>
                            ) : (
                              <img
                                src={item.src}
                                alt={`thumb-${idx + 1}`}
                                className="w-full h-28 object-cover"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Projets = () => {
  return (
    <section
  id="projets"
  className="scroll-mt-32 relative py-24 lg:py-32 overflow-hidden bg-gray-50"
>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Des projets classés par domaine, avec accès au code, à la description et aux démonstrations disponibles.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.projects.map((projet, index) => (
                  <ProjectCard
                    key={`${category.key}-${projet.titre}`}
                    projet={projet}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;