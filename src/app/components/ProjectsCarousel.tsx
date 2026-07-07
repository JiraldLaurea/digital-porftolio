"use client";

import useEmblaCarousel from "embla-carousel-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
import { Project } from "../Types";
import ProjectsCard from "./ProjectsCard";

type ProjectsCarouselProps = {
  projects: Project[];
};

const AUTOPLAY_DELAY = 5000;

const ProjectsCarousel = memo(({ projects }: ProjectsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 30,
    watchDrag: projects.length > 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Track the selected slide for the pagination
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay via a timer (no extra dependency needed)
  const clearAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    clearAutoplay();
    if (isPlaying && emblaApi && projects.length > 1) {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, AUTOPLAY_DELAY);
    }
  }, [clearAutoplay, isPlaying, emblaApi, projects.length]);

  useEffect(() => {
    startAutoplay();
    return clearAutoplay;
  }, [startAutoplay, clearAutoplay]);

  const iconBtn =
    "flex items-center justify-center transition border rounded-full w-9 h-9 hover:bg-primary-hovered dark:border-zinc-700 dark:hover:bg-primary-hovered-dark disabled:opacity-40";

  return (
    <>
      <div
        ref={emblaRef}
        className="overflow-hidden select-none"
        onMouseEnter={clearAutoplay}
        onMouseLeave={startAutoplay}
      >
        {/* Each slide caps at the content column width and centres, so the
                    active card fills the column while neighbours bleed outside it */}
        <div className="flex">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_100%] max-w-6xl min-w-0 px-2">
              <ProjectsCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (centered) + controls (right), aligned to the column */}
      <div className="grid items-center w-full max-w-6xl grid-cols-3 px-4 mx-auto mt-6">
        <div />
        <div className="flex items-center justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to project ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === index
                  ? "w-7 bg-primary-text dark:bg-white"
                  : "w-1.5 bg-primary5 dark:bg-zinc-600 hover:bg-primary6"
              }`}
            />
          ))}
        </div>

        {projects.length > 1 ? (
          <div className="flex items-center justify-end gap-2">
            <button
              aria-label="Previous project"
              onClick={() => emblaApi?.scrollPrev()}
              className={iconBtn}
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              aria-label="Next project"
              onClick={() => emblaApi?.scrollNext()}
              className={iconBtn}
            >
              <FaChevronRight size={12} />
            </button>
            <button
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={() => setIsPlaying((prev) => !prev)}
              className={iconBtn}
            >
              {isPlaying ? (
                <FaPause size={11} />
              ) : (
                <FaPlay size={11} className="ml-0.5" />
              )}
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
});

ProjectsCarousel.displayName = "ProjectsCarousel";

export default ProjectsCarousel;
