import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  photos: string[];
}

const slides: Slide[] = [
  {
    badge: "AI Club",
    badgeColor: "text-red-400",
    title: "Leading the AI Community",
    description:
      "As the AI Club Coordinator for my division, I organize hands-on workshops, lead discussions on LLMs and agentic AI, and create a space where students explore technology together. From beginner Python sessions to advanced ML talks, the club is about learning by building.",
    photos: ["/club-1.jpg", "/club-2.jpg", "/club-3.jpg"],
  },
  {
    badge: "Hackathon",
    badgeColor: "text-cyan-400",
    title: "Driving Innovation Through Competition",
    description:
      "I helped organize and evaluate multiple AI-focused hackathons, guiding participants through ideation, prototyping, and presentation. Teams built working AI solutions in under 48 hours — from chatbots to computer vision prototypes.",
    photos: ["/hackathon-1.jpg", "/hackathon-2.jpg"],
  },
  {
    badge: "Music",
    badgeColor: "text-green-400",
    title: "Training Voices, Building Harmonies",
    description:
      "Outside of tech, I lead choir training sessions — teaching vocal techniques, building harmonies, and preparing performances. Music has taught me discipline, collaboration, and the beauty of many voices working as one.",
    photos: ["/music-1.jpg", "/music-2.jpg", "/music-3.jpg", "/music-4.jpg", "/music-5.png"],
  },
  {
    badge: "Recognition",
    badgeColor: "text-amber-400",
    title: "Milestones That Matter",
    description:
      "Recognized for contributions and achievements across tech, leadership, and the arts. Each award reflects the support of mentors, teammates, and a community that believes in building together.",
    photos: ["/award-1.jpg"],
  },
];

function PhotoGrid({ photos, onPhotoClick }: { photos: string[]; onPhotoClick: (src: string) => void }) {
  const cols = Math.min(photos.length, 3);

  return (
    <div className="grid gap-3 w-full" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {photos.map((src, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-lg bg-white/5 cursor-pointer group ${photos.length === 1 ? "h-96" : "aspect-video"}`}
          onClick={() => onPhotoClick(src)}
        >
          <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export const BeyondTheCode = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  const slide = slides[activeIndex];

  useEffect(() => {
    if (!lightboxSrc) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxSrc]);

  return (
    <section id="beyond-code" className="min-h-screen flex flex-col bg-black text-white">
      {/* Title */}
      <div className="pt-16 pb-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-red-500 text-center"
        >
          Beyond the Code
        </motion.h2>
      </div>

      {/* Carousel */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-4">
        <div className="w-full relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <PhotoGrid photos={slide.photos} onPhotoClick={setLightboxSrc} />
              </div>

              <div className="px-6 sm:px-8 pb-8">
                <span className={`inline-block text-xs font-semibold tracking-widest uppercase ${slide.badgeColor} mb-2`}>
                  {slide.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{slide.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">{slide.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dots + counter */}
      <div className="pb-8 px-4">
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-red-500 w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">
          {activeIndex + 1} / {slides.length}
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.img
              key={lightboxSrc}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={lightboxSrc}
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
