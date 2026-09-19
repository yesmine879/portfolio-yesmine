import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaPlay,
  FaTimes,
  FaVideo,
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext.jsx';

/* ------------------------------------------------------------------ */
/*  MEDIA DATA                                                        */
/* ------------------------------------------------------------------ */

const BASE = '/club-event-placeholders';

const img = (folder, file) => ({
  type: 'image',
  src: `${BASE}/${folder}/${file}`,
});

const vid = (folder, file) => ({
  type: 'video',
  src: `${BASE}/${folder}/${file}`,
});

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

/* ------------------------------------------------------------------ */
/*  IEEE                                                              */
/*  Existing: 1-6, 8, 9                                               */
/*  New: A B C D E F G H K                                             */
/*  Videos: v1-v8                                                      */
/* ------------------------------------------------------------------ */

const ieeeMedia = [
  // Existing IEEE photos
  ...range(1, 9)
    .filter((n) => n !== 7)
    .map((n) => img('ieee-event', `${n}.jpeg`)),

  // New IEEE photos
  ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K'].map((letter) =>
    img('ieee-event', `${letter}.jpg`)
  ),

  // IEEE videos
  ...range(1, 8).map((n) =>
    vid('ieee-event', `v${n}.mp4`)
  ),
];

/* ------------------------------------------------------------------ */
/*  ACM                                                               */
/* ------------------------------------------------------------------ */

const acmMedia = [
  img('acm-event', '1.jpeg'),
];

/* ------------------------------------------------------------------ */
/*  MTC                                                               */
/* ------------------------------------------------------------------ */

const mtcMedia = [
  ...range(1, 15).map((n) =>
    img('mtc-event', `${n}.jpeg`)
  ),
];

/* ------------------------------------------------------------------ */
/*  SOS VILLAGE                                                       */
/* ------------------------------------------------------------------ */

const sosMedia = [
  img('sos-village-event', '1.jpeg'),
  vid('sos-village-event', '2.mp4'),
];

/* ------------------------------------------------------------------ */
/*  IIT                                                               */
/*  1 → 31, except 14 and 28                                         */
/*  3 and 5 are videos                                                */
/* ------------------------------------------------------------------ */

const iitMedia = range(1, 31)
  .filter((n) => n !== 3 && n !== 14 && n !== 28)
  .map((n) =>
    n === 5
      ? vid('iit-event', `${n}.mp4`)
      : img('iit-event', `${n}.jpeg`)
  );

/* ------------------------------------------------------------------ */
/*  ROBOTICS                                                          */
/*  Existing: 1.jpeg, 2.jpg → 5.jpg                                  */
/*  New: A B C D E                                                    */
/* ------------------------------------------------------------------ */

const roboticMedia = [
  // Existing Robotics photos
  img('robotic-event', '1.jpeg'),

  ...range(2, 5).map((n) =>
    img('robotic-event', `${n}.jpg`)
  ),

  // New Robotics photos
  ...['A', 'B', 'C', 'D', 'E'].map((letter) =>
    img('robotic-event', `${letter}.jpg`)
  ),
];

/* ------------------------------------------------------------------ */
/*  CLUBS                                                             */
/* ------------------------------------------------------------------ */

const clubs = [
  {
    id: 'ieee',
    name: 'IEEE',
    logo: `${BASE}/ieee-event/logo_ieee.jpeg`,
    media: ieeeMedia,
    accent: 'from-sky-400 to-blue-500',
  },

  {
    id: 'mtc',
    name: 'MTC',
    logo: `${BASE}/mtc-event/logo_mtc.jpg`,
    media: mtcMedia,
    accent: 'from-violet-400 to-fuchsia-500',
  },

  {
    id: 'acm',
    name: 'ACM',
    logo: `${BASE}/acm-event/logo_acm.jpeg`,
    media: acmMedia,
    accent: 'from-emerald-400 to-teal-500',
  },

  {
    id: 'sos',
    name: 'SOS Village',
    logo: `${BASE}/sos-village-event/logo_sos.jpg`,
    media: sosMedia,
    accent: 'from-pink-400 to-rose-500',
  },

  {
    id: 'iit',
    name: 'IIT Event',
    logo: `${BASE}/iit-event/logo_iit.jpeg`,
    media: iitMedia,
    accent: 'from-orange-400 to-amber-500',
  },

  {
    id: 'robotic',
    name: 'Robotics Club',
    logo: `${BASE}/robotic-event/logo_robots.jpeg`,
    media: roboticMedia,
    accent: 'from-cyan-400 to-indigo-500',
  },
];

/* ------------------------------------------------------------------ */
/*  AUTO SLIDER                                                       */
/* ------------------------------------------------------------------ */

const AutoSlider = ({
  media,
  className = '',
  interval = 3200,
  alt = '',
}) => {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || media.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % media.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [media.length, interval, reducedMotion]);

  const current = media[index];

  if (!current) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait">
        {current.type === 'video' ? (
          <motion.video
            key={`${current.src}-${index}`}
            src={current.src}
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          />
        ) : (
          <motion.img
            key={`${current.src}-${index}`}
            src={current.src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          />
        )}
      </AnimatePresence>

      {media.length > 1 && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex max-w-[80%] -translate-x-1/2 gap-1.5 overflow-hidden">
          {media.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-5 bg-white'
                  : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  LIGHTBOX                                                          */
/* ------------------------------------------------------------------ */

const Lightbox = ({
  media,
  index,
  onIndexChange,
  onClose,
  t,
}) => {
  const item = media[index];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        onIndexChange(
          (index + 1) % media.length
        );
      }

      if (event.key === 'ArrowLeft') {
        onIndexChange(
          (index - 1 + media.length) % media.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () =>
      window.removeEventListener('keydown', onKeyDown);
  }, [
    index,
    media.length,
    onClose,
    onIndexChange,
  ]);

  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 sm:p-8"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label={t('closeClubGallery')}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
      >
        <FaTimes />
      </button>

      {/* Previous / Next */}
      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              onIndexChange(
                (index - 1 + media.length) %
                  media.length
              );
            }}
            aria-label={t('prevMedia')}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              onIndexChange(
                (index + 1) % media.length
              );
            }}
            aria-label={t('nextMedia')}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* Media */}
      <motion.div
        key={item.src}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.22,
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="relative flex max-h-[85vh] max-w-5xl items-center justify-center"
      >
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            alt=""
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        )}
      </motion.div>

      {/* Counter */}
      {media.length > 1 && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold text-white">
          {index + 1} / {media.length}
        </span>
      )}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  CLUB MODAL                                                        */
/* ------------------------------------------------------------------ */

const ClubModal = ({
  club,
  onClose,
  t,
}) => {
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [lightboxIndex, setLightboxIndex] =
    useState(null);

  const { media } = club;

  const galleryAlt = t(
    `clubsData.${club.id}.galleryAlt`
  );

  /* Reset gallery when club changes */
  useEffect(() => {
    setActiveIndex(0);
    setLightboxIndex(null);
  }, [club.id]);

  /* Auto-slide modal */
  useEffect(() => {
    if (
      reducedMotion ||
      lightboxIndex !== null ||
      media.length <= 1
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(
        (i) => (i + 1) % media.length
      );
    }, 4200);

    return () =>
      window.clearInterval(timer);
  }, [
    club.id,
    media.length,
    reducedMotion,
    lightboxIndex,
  ]);

  /* Escape modal */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        event.key === 'Escape' &&
        lightboxIndex === null
      ) {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      onKeyDown
    );

    return () =>
      window.removeEventListener(
        'keydown',
        onKeyDown
      );
  }, [
    onClose,
    lightboxIndex,
  ]);

  const active = media[activeIndex];

  if (!active) return null;

  return (
    <>
      {/* ============================================================ */}
      {/* CLUB MODAL                                                    */}
      {/* ============================================================ */}

      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05030d]/90 p-4 backdrop-blur-sm"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={onClose}
      >
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label={t(
            'clubDialogLabel'
          )}
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 20,
            scale: reducedMotion ? 1 : 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: reducedMotion ? 0 : 12,
          }}
          transition={{
            duration: reducedMotion
              ? 0.15
              : 0.28,
          }}
          onClick={(event) =>
            event.stopPropagation()
          }
          className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#100a19] shadow-2xl"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t(
              'closeClubGallery'
            )}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:bg-white/15"
          >
            <FaTimes />
          </button>

          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            {/* ====================================================== */}
            {/* LEFT                                                     */}
            {/* ====================================================== */}

            <div className="p-8 sm:p-10">
              {/* Logo */}
              <img
                src={club.logo}
                alt={`${club.name} ${t(
                  'clubLogo'
                )}`}
                className="h-20 w-20 rounded-3xl object-cover shadow-lg"
              />

              {/* Club name */}
              <p className="mt-8 text-xs font-black uppercase tracking-[.25em] text-fuchsia-300">
                {club.name}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
                {t(
                  `clubsData.${club.id}.title`
                )}
              </h3>

              {/* About */}
              <p className="mt-6 leading-8 text-violet-100/65">
                {t(
                  `clubsData.${club.id}.about`
                )}
              </p>

              {/* Story */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.045] p-5">
                <p className="text-xs font-black uppercase tracking-[.18em] text-violet-300">
                  {t('clubEventStory')}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {t(
                    `clubsData.${club.id}.story`
                  )}
                </p>
              </div>
            </div>

            {/* ====================================================== */}
            {/* RIGHT                                                    */}
            {/* ====================================================== */}

            <div className="bg-black/20 p-5 sm:p-7">
              {/* Main media */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    activeIndex
                  )
                }
                aria-label={t(
                  'clubExpandMedia'
                )}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 bg-black/30"
              >
                <AnimatePresence mode="wait">
                  {active.type === 'video' ? (
                    <motion.video
                      key={`${club.id}-${activeIndex}`}
                      src={active.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    />
                  ) : (
                    <motion.img
                      key={`${club.id}-${activeIndex}`}
                      src={active.src}
                      alt={galleryAlt}
                      className="h-full w-full object-cover"
                      initial={{
                        opacity: 0,
                        scale: 1.03,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                    <FaExpand />
                    {t(
                      'clubExpandMedia'
                    )}
                  </span>
                </div>

                {/* Counter */}
                <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-bold text-white">
                  {activeIndex + 1} /{' '}
                  {media.length}
                </span>
              </button>

              {/* ==================================================== */}
              {/* THUMBNAILS                                              */}
              {/* ==================================================== */}

              <div className="mt-4 grid max-h-[280px] grid-cols-4 gap-3 overflow-y-auto pr-1 sm:grid-cols-5">
                {media.map(
                  (item, index) => (
                    <button
                      type="button"
                      key={`${item.src}-${index}`}
                      onClick={() =>
                        setActiveIndex(
                          index
                        )
                      }
                      onDoubleClick={() =>
                        setLightboxIndex(
                          index
                        )
                      }
                      aria-label={`${t(
                        'viewGallery'
                      )} ${index + 1}`}
                      className={`relative aspect-square overflow-hidden rounded-xl border transition ${
                        index ===
                        activeIndex
                          ? 'border-fuchsia-300 ring-1 ring-fuchsia-300/30'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {item.type ===
                      'video' ? (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      )}

                      {/* Video icon */}
                      {item.type ===
                        'video' && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                            <FaPlay
                              size={
                                11
                              }
                            />
                          </span>
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>

              {/* Hint */}
              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                {t(
                  'clubGalleryHint'
                )}
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* ============================================================ */}
      {/* LIGHTBOX                                                      */}
      {/* ============================================================ */}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            media={media}
            index={lightboxIndex}
            onIndexChange={
              setLightboxIndex
            }
            onClose={() =>
              setLightboxIndex(null)
            }
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  CLUB CARD                                                         */
/* ------------------------------------------------------------------ */

const ClubCard = ({
  club,
  index,
  onOpen,
  t,
}) => {
  const reducedMotion =
    useReducedMotion();

  const hasVideo = useMemo(
    () =>
      club.media.some(
        (m) => m.type === 'video'
      ),
    [club.media]
  );

  const galleryAlt = t(
    `clubsData.${club.id}.galleryAlt`
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 30,
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
        duration: reducedMotion
          ? 0.2
          : 0.55,
        delay: reducedMotion
          ? 0
          : index * 0.07,
      }}
      className="group relative grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-stretch"
    >
      {/* ========================================================== */}
      {/* INFORMATION CARD                                             */}
      {/* ========================================================== */}

      <button
        type="button"
        onClick={() => onOpen(club)}
        className="
          group/card relative min-h-[310px] overflow-hidden
          rounded-[30px]
          border border-white/[0.09]
          bg-[#111018]/80
          p-7 text-left
          shadow-[0_25px_80px_rgba(0,0,0,.28)]
          backdrop-blur-xl
          transition-all duration-500
          hover:-translate-y-1
          hover:border-fuchsia-400/35
          hover:shadow-[0_30px_90px_rgba(139,92,246,.16)]
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-fuchsia-400
          sm:p-9
        "
      >
        {/* Top gradient */}
        <span
          aria-hidden="true"
          className={`
            absolute inset-x-0 top-0 h-[2px]
            bg-gradient-to-r ${club.accent}
            opacity-70
            transition-opacity duration-500
            group-hover/card:opacity-100
          `}
        />

        {/* Glow */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-24 -top-28 h-64 w-64
            rounded-full bg-fuchsia-500/[0.09]
            blur-3xl
            transition-all duration-700
            group-hover/card:bg-fuchsia-500/[0.16]
            group-hover/card:scale-110
          "
        />

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-32 -left-24 h-64 w-64
            rounded-full bg-violet-500/[0.08]
            blur-3xl
          "
        />

        {/* Number */}
        <span
          className="
            pointer-events-none absolute right-7 top-7
            text-5xl font-black
            tracking-[-0.08em]
            text-white/[0.035]
            transition-colors duration-500
            group-hover/card:text-fuchsia-300/[0.08]
            sm:right-9 sm:top-8
          "
        >
          {String(index + 1).padStart(
            2,
            '0'
          )}
        </span>

        {/* Label */}
        <div className="relative z-10 flex items-center justify-between">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.035]
              px-3 py-1.5
              text-[9px] font-black uppercase
              tracking-[0.2em]
              text-slate-300/70
            "
          >
            <span
              className={`
                h-1.5 w-1.5 rounded-full
                bg-gradient-to-r ${club.accent}
                shadow-[0_0_12px_rgba(217,70,239,.65)]
              `}
            />

            Student Community
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/20">
            {club.media.length}{' '}
            {club.media.length === 1
              ? 'media'
              : 'médias'}
          </span>
        </div>

        {/* Logo + title */}
        <div className="relative z-10 mt-7 flex items-center gap-5">
          <div
            className="
              relative flex h-[76px] w-[76px] shrink-0
              items-center justify-center
              rounded-[22px]
              border border-white/[0.11]
              bg-black/30
              p-2
              shadow-[0_15px_40px_rgba(0,0,0,.35)]
              transition-all duration-500
              group-hover/card:scale-105
              group-hover/card:border-fuchsia-300/30
              group-hover/card:shadow-[0_15px_45px_rgba(217,70,239,.12)]
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute inset-0 rounded-[22px]
                bg-gradient-to-br from-fuchsia-400/10 to-violet-500/10
                opacity-0 blur-xl
                transition-opacity duration-500
                group-hover/card:opacity-100
              "
            />

            <img
              src={club.logo}
              alt={`${club.name} ${t(
                'clubLogo'
              )}`}
              className="
                relative z-10 h-full w-full
                rounded-[16px]
                object-cover
              "
            />
          </div>

          <div className="min-w-0 pr-10">
            <p
              className={`
                text-[10px] font-black uppercase
                tracking-[0.25em]
                bg-gradient-to-r ${club.accent}
                bg-clip-text text-transparent
              `}
            >
              {club.name}
            </p>

            <h3
              className="
                mt-2 text-[24px] font-black
                leading-tight tracking-[-0.045em]
                text-white
                transition-colors duration-300
                group-hover/card:text-violet-100
                sm:text-[28px]
              "
            >
              {t(
                `clubsData.${club.id}.title`
              )}
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="
            relative z-10 my-7 h-px
            bg-gradient-to-r
            from-white/[0.12]
            via-white/[0.05]
            to-transparent
          "
        />

        {/* Description */}
        <p
          className="
            relative z-10 max-w-xl
            text-[14px] leading-7
            text-slate-300/65
            transition-colors duration-300
            group-hover/card:text-slate-200/80
          "
        >
          {t(
            `clubsData.${club.id}.about`
          )}
        </p>

        {/* CTA */}
        <div className="relative z-10 mt-8 flex items-center justify-between">
          <span
            className={`
              inline-flex items-center gap-3
              text-sm font-black
              bg-gradient-to-r ${club.accent}
              bg-clip-text text-transparent
            `}
          >
            {t('exploreClub')}

            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-fuchsia-400/25
                bg-fuchsia-400/[0.08]
                text-fuchsia-300
                transition-all duration-300
                group-hover/card:translate-x-1
                group-hover/card:border-fuchsia-300/50
                group-hover/card:bg-fuchsia-400/[0.16]
              "
            >
              <FaArrowRight size={11} />
            </span>
          </span>

          <span
            className="
              hidden text-[9px] font-black uppercase
              tracking-[0.2em] text-white/20
              transition-colors duration-300
              group-hover/card:text-white/40
              sm:block
            "
          >
            View details
          </span>
        </div>
      </button>

      {/* ========================================================== */}
      {/* MEDIA CARD                                                   */}
      {/* ========================================================== */}

      <button
        type="button"
        onClick={() => onOpen(club)}
        aria-label={`${t(
          'openClubGallery'
        )}: ${club.name}`}
        className="
          group/media relative min-h-[310px]
          overflow-hidden rounded-[30px]
          border border-white/[0.09]
          bg-black/30
          text-left
          shadow-[0_25px_80px_rgba(0,0,0,.30)]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-fuchsia-400/35
          hover:shadow-[0_30px_90px_rgba(139,92,246,.17)]
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-fuchsia-400
        "
      >
        <AutoSlider
          media={club.media}
          className="h-full min-h-[310px] w-full"
          alt={galleryAlt}
        />

        {/* Dark overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-[#07040d]
            via-[#07040d]/20
            to-transparent
          "
        />

        {/* Hover gradient */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br
            from-fuchsia-500/0
            via-transparent
            to-violet-500/0
            transition-all duration-500
            group-hover/media:from-fuchsia-500/[0.08]
            group-hover/media:to-violet-500/[0.08]
          "
        />

        {/* Gallery badge */}
        <span
          className="
            absolute right-5 top-5
            inline-flex items-center gap-2
            rounded-full
            border border-white/15
            bg-black/45
            px-3.5 py-2
            text-[10px] font-black uppercase
            tracking-[0.12em]
            text-white/80
            backdrop-blur-md
          "
        >
          {hasVideo && (
            <FaVideo className="text-fuchsia-300" />
          )}

          {club.media.length}{' '}
          {club.media.length === 1
            ? 'media'
            : 'médias'}
        </span>

        {/* Bottom content */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <span
            className="
              inline-flex items-center gap-2.5
              rounded-full
              border border-white/10
              bg-black/45
              px-4 py-2.5
              text-sm font-bold
              text-white
              backdrop-blur-md
              transition-all duration-300
              group-hover/media:border-fuchsia-300/25
              group-hover/media:bg-black/55
            "
          >
            {hasVideo ? (
              <FaVideo
                className="text-fuchsia-300"
                size={13}
              />
            ) : (
              <FaPlay
                className="text-fuchsia-300"
                size={12}
              />
            )}

            {t('viewGallery')}
          </span>

          <span
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full
              border border-white/15
              bg-black/45
              text-white
              opacity-0
              translate-x-2
              backdrop-blur-md
              transition-all duration-300
              group-hover/media:translate-x-0
              group-hover/media:opacity-100
            "
          >
            <FaExpand size={13} />
          </span>
        </div>
      </button>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/*  ACTIVITIES SECTION                                                 */
/* ------------------------------------------------------------------ */

const Activities = () => {
  const { t } = useLanguage();

  const prefersReducedMotion =
    useReducedMotion();

  const [selectedClub, setSelectedClub] =
    useState(null);

  return (
    <section
      id="activities"
      className="relative scroll-mt-28 overflow-hidden bg-[#0a0a0f] py-24 sm:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_at_85%_15%,rgba(168,85,247,.16),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(236,72,153,.11),transparent_42%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: prefersReducedMotion
              ? 0
              : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration:
              prefersReducedMotion
                ? 0.2
                : 0.55,
          }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs font-black uppercase tracking-[.28em] text-fuchsia-300">
            {t('nav.activities')}
          </p>

          <h2 className="text-4xl font-black tracking-[-.05em] text-white sm:text-6xl">
            {t('activitiesTitle')}
          </h2>

          <p className="mt-6 text-base leading-8 text-violet-100/60 sm:text-lg">
            {t('activitiesIntro')}
          </p>
        </motion.div>

        {/* Clubs */}
        <div className="mt-14 space-y-10">
          {clubs.map(
            (club, index) => (
              <ClubCard
                key={club.id}
                club={club}
                index={index}
                onOpen={
                  setSelectedClub
                }
                t={t}
              />
            )
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClub && (
          <ClubModal
            club={selectedClub}
            onClose={() =>
              setSelectedClub(null)
            }
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Activities;