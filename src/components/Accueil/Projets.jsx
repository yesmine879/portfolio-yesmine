// src/components/Projets.jsx
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  FaRobot,
  FaCode,
  FaLayerGroup,
  FaSearch,
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

// ===== TECH TAG COLORS =====
const techColors = {
  React: 'bg-sky-100 text-sky-700 border-sky-200',
  Vite: 'bg-purple-100 text-purple-700 border-purple-200',
  HTML: 'bg-orange-100 text-orange-700 border-orange-200',
  CSS: 'bg-blue-100 text-blue-700 border-blue-200',
  JavaScript: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Laravel: 'bg-red-100 text-red-700 border-red-200',
  Angular: 'bg-red-100 text-red-800 border-red-200',
  'Node.js': 'bg-green-100 text-green-700 border-green-200',
  MySQL: 'bg-blue-100 text-blue-800 border-blue-200',
  PHP: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  CRUD: 'bg-gray-100 text-gray-700 border-gray-200',
  Python: 'bg-blue-100 text-blue-700 border-blue-200',
  'Jupyter Notebook': 'bg-orange-100 text-orange-700 border-orange-200',
  'Data Science': 'bg-teal-100 text-teal-700 border-teal-200',
  Classification: 'bg-pink-100 text-pink-700 border-pink-200',
  NLP: 'bg-violet-100 text-violet-700 border-violet-200',
  'Data Mining': 'bg-amber-100 text-amber-700 border-amber-200',
  Clustering: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Flutter: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Spring Boot': 'bg-green-100 text-green-800 border-green-200',
  Microservices: 'bg-teal-100 text-teal-800 border-teal-200',
  Java: 'bg-orange-100 text-orange-800 border-orange-200',
  Flask: 'bg-gray-100 text-gray-800 border-gray-200',
  Arduino: 'bg-teal-100 text-teal-700 border-teal-200',
  'C/C++': 'bg-blue-100 text-blue-800 border-blue-200',
  'IR Sensors': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Robotics: 'bg-sky-100 text-sky-800 border-sky-200',
  'ASP.NET': 'bg-purple-100 text-purple-800 border-purple-200',
  'C#': 'bg-violet-100 text-violet-800 border-violet-200',
  Unity: 'bg-gray-100 text-gray-800 border-gray-200',
};

const TechBadge = ({ tech }) => {
  const cleanTech = tech.trim();
  const colorClass =
    techColors[cleanTech] || 'bg-indigo-100 text-indigo-700 border-indigo-200';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClass} transition-transform hover:scale-105`}
    >
      {cleanTech}
    </span>
  );
};

const TechBadges = ({ techno }) => {
  const techs = techno.split('•').map((t) => t.trim()).filter(Boolean);

  return (
    <div className="flex flex-wrap gap-1.5 mb-6 min-h-[52px]">
      {techs.map((tech, i) => (
        <TechBadge key={`${tech}-${i}`} tech={tech} />
      ))}
    </div>
  );
};

// ===== FLOATING PARTICLES =====
const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        moveX: Math.random() * 20 - 10,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.15 + 0.05,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.moveX, 0],
            scale: [1, 1.3, 1],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// ===== TILT CARD =====
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ===== ANIMATED COUNTER =====
const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = Math.max(1, Math.ceil(target / 30));

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ===== CATEGORY FILTER =====
const categoryKeys = ['all', 'web', 'ml', 'mobile', 'backend', 'robotics', 'csharp', 'java'];

const categoryLabels = {
  all: 'All',
  web: 'Web',
  ml: 'AI / ML',
  mobile: 'Mobile',
  backend: 'Backend',
  robotics: 'IoT',
  csharp: 'C# / Games',
  java: 'Java',
};

const categories = [
  {
    key: 'web',
    title: 'Web Projects',
    icon: <FaGlobe className="text-3xl text-indigo-600" />,
    projects: [
      {
        titre: 'portfolio-yesmine',
        techno: 'React • Vite',
        github: 'https://github.com/yesmine879/portfolio-yesmine',
        description:
          'Personal portfolio developed with React and Vite to present my profile, skills, projects, certifications, and professional links through a modern, responsive, and animated interface.',
        demo: { images: portfolioImages, videos: [] },
      },
      {
        titre: 'burger-house-website',
        techno: 'HTML • CSS • JavaScript',
        github: 'https://github.com/yesmine879/burger-house-website',
        description:
          'Responsive website built with HTML, CSS, and JavaScript around a Burger House concept. The project focuses on visual design, layout, content presentation, and mobile responsiveness.',
        demo: { images: burgerImages, videos: [] },
      },
      {
        titre: 'event-management-system',
        techno: 'Laravel • Angular • Node.js • MySQL',
        github: 'https://github.com/yesmine879/event-management-system',
        description:
          'Full-stack event management web application including event management, participation features, user interface pages, administrative logic, and a modern user experience.',
        demo: { images: pfaImages, videos: pfaVideos },
      },
      {
        titre: 'material-management-system',
        techno: 'Laravel • Angular • MySQL',
        github: 'https://github.com/yesmine879/material-management-system',
        description:
          'Full-stack material management web application with an admin interface, data organization, CRUD operations, and structured backend/frontend architecture.',
        demo: { images: gestionMaterielImages, videos: [] },
      },
      {
        titre: 'WebProject',
        techno: 'PHP • CRUD',
        github: 'https://github.com/yesmine879/WebProject',
        description:
          'Simple dynamic web project focused on CRUD operations, data manipulation, processing logic, and the fundamentals of web application development.',
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'ml',
    title: 'AI / Machine Learning Projects',
    icon: <FaBrain className="text-3xl text-pink-600" />,
    projects: [
      {
        titre: 'machine-learning-labs',
        techno: 'Python • Jupyter Notebook • Data Science',
        github: 'https://github.com/yesmine879/machine-learning-labs',
        description:
          'Practical labs, notebooks, and exercises in machine learning and data science covering different algorithms, data preparation, and experiments on multiple datasets.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'heart-disease-prediction',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/heart-disease-prediction',
        description:
          'Classification project for predicting heart disease from medical data, including model training and result analysis.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'diabetes-prediction-ml',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/diabetes-prediction-ml',
        description:
          'Diabetes prediction model based on medical data, including data processing, supervised learning, and performance evaluation.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'spam-classification',
        techno: 'Python • NLP • Classification',
        github: 'https://github.com/yesmine879/spam-classification',
        description:
          'Spam message classification project using text processing, vectorization, model training, and performance analysis.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'market-basket-optimization',
        techno: 'Python • Data Mining',
        github: 'https://github.com/yesmine879/market-basket-optimization',
        description:
          'Data mining project using association rules to identify frequent purchasing patterns and product relationships.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'mall-customers-segmentation',
        techno: 'Python • Clustering',
        github: 'https://github.com/yesmine879/mall-customers-segmentation',
        description:
          'Customer segmentation project using clustering algorithms to identify and analyze different consumer profiles.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'titanic-ml-project',
        techno: 'Python • Classification',
        github: 'https://github.com/yesmine879/titanic-ml-project',
        description:
          'Survival prediction project on the Titanic dataset, including data preparation, feature selection, and classification models.',
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'mobile',
    title: 'Mobile Projects',
    icon: <FaMobileAlt className="text-3xl text-cyan-600" />,
    projects: [
      {
        titre: 'cookmate',
        techno: 'Flutter',
        github: 'https://github.com/yesmine879/cookmate',
        description:
          'Flutter mobile application dedicated to cooking recipes, with modern interfaces, screen navigation, and a smooth user experience.',
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
          'Order management system based on Spring Boot and microservices, with service separation, distributed logic, and modular organization.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'flask-chatbot',
        techno: 'Python • Flask',
        github: 'https://github.com/yesmine879/flask-chatbot',
        description:
          'Chatbot web application developed with Python and Flask to explore conversational interfaces and backend logic.',
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'robotics',
    title: 'Robotics / IoT',
    icon: <FaRobot className="text-3xl text-sky-600" />,
    projects: [
      {
        titre: 'Line-Follower Robot',
        techno: 'Arduino • C/C++ • IR Sensors • Robotics',
        github: '#',
        description:
          'Line-follower robot project built with Arduino, using infrared sensors to detect and follow a path autonomously. This project helped me work on embedded logic, sensor-motor interaction, and robot movement control.',
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'csharp',
    title: 'C# / Game Projects',
    icon: <FaGamepad className="text-3xl text-violet-600" />,
    projects: [
      {
        titre: 'pharmacy-management',
        techno: 'ASP.NET • C#',
        github: 'https://github.com/yesmine879/pharmacy-management',
        description:
          'Pharmacy management application developed with ASP.NET and C#, including business module organization and data management.',
        demo: { images: [], videos: [] },
      },
      {
        titre: 'angry-birds',
        techno: 'Unity • C#',
        github: 'https://github.com/yesmine879/angry-birds',
        description:
          '2D game inspired by Angry Birds, developed with Unity and C#, including gameplay logic and physics-based interactions.',
        demo: { images: [], videos: [] },
      },
    ],
  },
  {
    key: 'java',
    title: 'Java Projects',
    icon: <FaJava className="text-3xl text-orange-600" />,
    projects: [
      {
        titre: 'CRUD',
        techno: 'Java',
        github: 'https://github.com/yesmine879/CRUD',
        description:
          'Simple CRUD application developed in Java to practice basic operations, code structure, and application logic.',
        demo: { images: [], videos: [] },
      },
    ],
  },
];

// ===== BUTTON =====
const ShimmerButton = ({
  onClick,
  disabled = false,
  variant = 'dark',
  children,
  title,
}) => {
  const styles = {
    dark: {
      background: disabled ? '#F1F5F9' : '#111827',
      color: disabled ? '#94A3B8' : '#FFFFFF',
      border: disabled ? '1px solid #E2E8F0' : '1px solid #111827',
      boxShadow: disabled ? 'none' : '0 10px 25px rgba(17, 24, 39, 0.12)',
      cursor: disabled ? 'not-allowed' : 'pointer',
    },
    light: {
      background: '#FFFFFF',
      color: '#334155',
      border: '1px solid #CBD5E1',
      boxShadow: '0 8px 18px rgba(15, 23, 42, 0.06)',
      cursor: 'pointer',
    },
    gradient: {
      background: disabled
        ? '#F1F5F9'
        : 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
      color: disabled ? '#94A3B8' : '#FFFFFF',
      border: disabled ? '1px solid #E2E8F0' : '1px solid transparent',
      boxShadow: disabled ? 'none' : '0 12px 28px rgba(236, 72, 153, 0.22)',
      cursor: disabled ? 'not-allowed' : 'pointer',
    },
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={styles[variant]}
      className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 min-w-[118px]"
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {!disabled && (
        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
      )}
    </button>
  );
};

// ===== PROJECT CARD =====
const ProjectCard = ({ projet, index }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const media = useMemo(() => {
    const images =
      projet.demo?.images?.map((src) => ({
        type: 'image',
        src,
      })) || [];

    const videos =
      projet.demo?.videos?.map((src) => ({
        type: 'video',
        src,
      })) || [];

    return [...videos, ...images];
  }, [projet]);

  const hasDemo = media.length > 0;
  const hasGithub = projet.github && projet.github !== '#';

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

  const openGithub = () => {
    if (!hasGithub) return;
    window.open(projet.github, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <TiltCard className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.07, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
          className="h-full group relative bg-white/95 backdrop-blur-xl rounded-3xl p-7 border border-indigo-100 hover:border-indigo-300 hover:shadow-[0_18px_55px_rgba(99,102,241,0.18)] transition-all duration-500 flex flex-col overflow-hidden"
        >
          <span
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1.5px rgba(99,102,241,0.35)' }}
          />

          <span className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

          <span className="absolute top-4 right-5 text-xs font-bold text-gray-200 group-hover:text-indigo-200 transition-colors duration-300 select-none tabular-nums">
            #{String(index + 1).padStart(2, '0')}
          </span>

          <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 pr-8 leading-snug tracking-tight">
            {projet.titre}
          </h4>

          <TechBadges techno={projet.techno} />

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
            {projet.description}
          </p>

          <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
            <ShimmerButton
              onClick={openGithub}
              disabled={!hasGithub}
              variant="dark"
              title={hasGithub ? 'View source code' : 'Code not available'}
            >
              <FaGithub className="text-base" />
              <span>Code</span>
            </ShimmerButton>

            <ShimmerButton
              onClick={() => setDescriptionOpen(true)}
              variant="light"
              title="View description"
            >
              <FaInfoCircle className="text-base" />
              <span>Description</span>
            </ShimmerButton>

            <ShimmerButton
              onClick={() => hasDemo && setDemoOpen(true)}
              disabled={!hasDemo}
              variant="gradient"
              title={hasDemo ? 'View demo' : 'Demo not available'}
            >
              <FaExternalLinkAlt className="text-base" />
              <span>Demo</span>
            </ShimmerButton>
          </div>
        </motion.div>
      </TiltCard>

      {/* DESCRIPTION MODAL */}
      <AnimatePresence>
        {descriptionOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 pt-28 overflow-y-auto"
            >
              <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-h-[82vh] flex flex-col my-auto">
                {/* CLOSE BUTTON */}
                <button
                  type="button"
                  onClick={closeModals}
                  aria-label="Close popup"
                  className="absolute top-4 right-4 z-[99999] w-12 h-12 rounded-2xl bg-white text-red-600 shadow-2xl border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="text-4xl font-black leading-none">
                    ×
                  </span>
                </button>

                <div className="relative px-7 py-6 pr-24 border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
                  <motion.div
                    className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-indigo-100 opacity-60"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  <div className="flex items-center gap-3 mb-2 relative">
                    <FaCode className="text-indigo-500 text-lg" />

                    <h3 className="text-2xl font-bold text-gray-900 pr-10">
                      {projet.titre}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 relative">
                    {projet.techno.split('•').map((t, i) => (
                      <TechBadge key={`${t}-${i}`} tech={t.trim()} />
                    ))}
                  </div>
                </div>

                <div className="px-7 py-6 overflow-y-auto">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {projet.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ShimmerButton
                      onClick={openGithub}
                      disabled={!hasGithub}
                      variant="dark"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </ShimmerButton>

                    <ShimmerButton
                      onClick={() => {
                        setDescriptionOpen(false);
                        if (hasDemo) setDemoOpen(true);
                      }}
                      disabled={!hasDemo}
                      variant="gradient"
                    >
                      <FaImages />
                      <span>View Demo</span>
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* DEMO MODAL */}
      <AnimatePresence>
        {demoOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-4 pt-28 overflow-y-auto"
            >
              <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-h-[82vh] flex flex-col my-auto">
                {/* CLOSE BUTTON */}
                <button
                  type="button"
                  onClick={closeModals}
                  aria-label="Close popup"
                  className="absolute top-4 right-4 z-[99999] w-12 h-12 rounded-2xl bg-white text-red-600 shadow-2xl border-2 border-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="text-4xl font-black leading-none">
                    ×
                  </span>
                </button>

                <div className="relative px-7 py-5 pr-24 border-b border-gray-100 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FaImages className="text-orange-500" />

                        <h3 className="text-2xl font-bold text-gray-900 pr-10">
                          Demo — {projet.titre}
                        </h3>
                      </div>

                      <p className="text-gray-500 text-sm">{projet.techno}</p>
                    </div>

                    {media.length > 0 && (
                      <span className="hidden sm:inline-block text-sm font-semibold text-gray-400 tabular-nums whitespace-nowrap mr-12">
                        {selectedMediaIndex + 1} / {media.length}
                      </span>
                    )}
                  </div>

                  {media.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((selectedMediaIndex + 1) / media.length) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </div>

                <div className="p-6 overflow-y-auto">
                  {!hasDemo ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-16"
                    >
                      <FaPlayCircle className="mx-auto text-5xl text-gray-300 mb-4" />

                      <p className="text-xl text-gray-500">
                        No image or video is available for this project.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="relative bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 min-h-[420px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedMediaIndex}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.25 }}
                            className="w-full flex items-center justify-center"
                          >
                            {media[selectedMediaIndex]?.type === 'video' ? (
                              <video
                                src={media[selectedMediaIndex].src}
                                controls
                                className="w-full max-h-[58vh] object-contain"
                              />
                            ) : (
                              <img
                                src={media[selectedMediaIndex]?.src}
                                alt={`demo-${selectedMediaIndex + 1}`}
                                className="w-full max-h-[58vh] object-contain"
                              />
                            )}
                          </motion.div>
                        </AnimatePresence>

                        {media.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={prevMedia}
                              aria-label="Previous media"
                              className="absolute left-3 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/90 hover:bg-white shadow-lg transition hover:scale-110 active:scale-95"
                            >
                              <FaChevronLeft className="text-gray-700" />
                            </button>

                            <button
                              type="button"
                              onClick={nextMedia}
                              aria-label="Next media"
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/90 hover:bg-white shadow-lg transition hover:scale-110 active:scale-95"
                            >
                              <FaChevronRight className="text-gray-700" />
                            </button>
                          </>
                        )}
                      </div>

                      {media.length > 1 && (
                        <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                          {media.map((item, idx) => (
                            <motion.button
                              type="button"
                              key={`${item.src}-${idx}`}
                              onClick={() => setSelectedMediaIndex(idx)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              className={`relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                selectedMediaIndex === idx
                                  ? 'border-indigo-500 shadow-lg shadow-indigo-100 ring-2 ring-indigo-300 ring-offset-1'
                                  : 'border-gray-200 hover:border-indigo-300 opacity-70 hover:opacity-100'
                              }`}
                            >
                              {item.type === 'video' ? (
                                <div className="w-24 h-20 bg-gray-900 flex items-center justify-center">
                                  <FaPlayCircle className="text-white text-2xl" />
                                </div>
                              ) : (
                                <img
                                  src={item.src}
                                  alt={`thumb-${idx + 1}`}
                                  className="w-24 h-20 object-cover"
                                />
                              )}

                              {selectedMediaIndex === idx && (
                                <span className="absolute inset-0 bg-indigo-500/10" />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      )}
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

// ===== CATEGORY SECTION HEADER =====
const CategoryHeader = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-8"
  >
    <motion.div
      whileHover={{ rotate: 10, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="w-14 h-14 rounded-2xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center"
    >
      {category.icon}
    </motion.div>

    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
        {category.title}
      </h3>

      <p className="text-sm text-gray-400 font-medium mt-0.5 flex items-center gap-1.5">
        <FaLayerGroup className="text-xs" />
        <AnimatedCounter target={category.projects.length} /> project
        {category.projects.length > 1 ? 's' : ''}
      </p>
    </div>
  </motion.div>
);

// ===== STATS BAR =====
const StatsBar = () => {
  const totalProjects = categories.reduce((acc, c) => acc + c.projects.length, 0);
  const totalCategories = categories.length;
  const withDemo = categories
    .flatMap((c) => c.projects)
    .filter((p) => (p.demo?.images?.length || p.demo?.videos?.length)).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-8 mb-14"
    >
      {[
        { label: 'Total Projects', value: totalProjects, suffix: '+' },
        { label: 'Fields Covered', value: totalCategories, suffix: '' },
        { label: 'With Visual Demo', value: withDemo, suffix: '' },
      ].map(({ label, value, suffix }) => (
        <div
          key={label}
          className="text-center bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl px-7 py-5 shadow-sm"
        >
          <div className="text-4xl font-black text-indigo-600 tabular-nums">
            <AnimatedCounter target={value} suffix={suffix} />
          </div>

          <div className="text-sm text-gray-500 font-medium mt-1">{label}</div>
        </div>
      ))}
    </motion.div>
  );
};

// ===== FILTER TABS =====
const FilterTabs = ({ activeFilter, setActiveFilter }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-wrap justify-center gap-3 mb-8"
  >
    {categoryKeys.map((key) => {
      const isActive = activeFilter === key;

      return (
        <motion.button
          type="button"
          key={key}
          onClick={() => setActiveFilter(key)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: isActive
              ? 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
              : '#FFFFFF',
            color: isActive ? '#FFFFFF' : '#1E293B',
            border: isActive ? '1px solid #4F46E5' : '1px solid #E0E7FF',
            boxShadow: isActive
              ? '0 12px 25px rgba(79, 70, 229, 0.28)'
              : '0 6px 16px rgba(15, 23, 42, 0.04)',
          }}
          className="relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 min-w-[86px]"
        >
          {categoryLabels[key]}
        </motion.button>
      );
    })}
  </motion.div>
);

// ===== SEARCH BAR =====
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto mb-16"
  >
    <div className="relative">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a project or technology..."
        className="w-full rounded-3xl bg-white/90 backdrop-blur-xl border border-indigo-100 pl-12 pr-12 py-4 text-gray-700 placeholder-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 hover:bg-indigo-100 transition"
        >
          ×
        </button>
      )}
    </div>
  </motion.div>
);

// ===== EMPTY STATE =====
const EmptyState = ({ searchTerm }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center bg-white/90 border border-indigo-100 rounded-3xl p-10 shadow-sm"
  >
    <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mx-auto mb-5">
      <FaSearch className="text-2xl" />
    </div>

    <p className="text-xl font-bold text-gray-800 mb-2">
      No project found
    </p>

    <p className="text-gray-500">
      No result for <span className="font-semibold text-indigo-600">"{searchTerm}"</span>.
      Try another keyword or technology.
    </p>
  </motion.div>
);

// ===== MAIN COMPONENT =====
const Projets = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    const base =
      activeFilter === 'all'
        ? categories
        : categories.filter((c) => c.key === activeFilter);

    if (!searchTerm.trim()) return base;

    const query = searchTerm.toLowerCase().trim();

    return base
      .map((category) => ({
        ...category,
        projects: category.projects.filter((project) =>
          `${project.titre} ${project.techno} ${project.description}`
            .toLowerCase()
            .includes(query)
        ),
      }))
      .filter((category) => category.projects.length > 0);
  }, [activeFilter, searchTerm]);

  return (
    <section
      id="projects"
      className="scroll-mt-32 relative py-24 lg:py-32 overflow-hidden bg-[#eef3fb]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '68px 68px',
        }}
      />

      {/* Soft white layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-white/25" />

      {/* Soft glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-300/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/10 rounded-full blur-3xl pointer-events-none" />

      <Particles />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 text-indigo-700 text-sm font-semibold mb-5 border border-indigo-200 shadow-sm"
          >
            <FaCode className="text-xs" />
            Project Portfolio
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-5">
            My{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>

              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Projects organized by field, with access to source code, descriptions,
            and available demos.
          </p>
        </motion.div>

        <StatsBar />

        <FilterTabs
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${searchTerm}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {filteredCategories.length === 0 ? (
              <EmptyState searchTerm={searchTerm} />
            ) : (
              filteredCategories.map((category, catIdx) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.05 }}
                >
                  <CategoryHeader category={category} />

                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                    {category.projects.map((projet, index) => (
                      <ProjectCard
                        key={`${category.key}-${projet.titre}`}
                        projet={projet}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projets;