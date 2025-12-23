"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectsCard from "./ProjectsCard";
import { Icon } from "@iconify/react";

type ProjectsCarouselProps = {
    projects: any[];
    categories: any[];
};

const ProjectsCarousel = ({ projects, categories }: ProjectsCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        duration: 20,
        watchDrag: projects.length > 1 ? true : false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Update selected index for pagination dots
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

        emblaApi.on("select", onSelect);
        onSelect(); // initialize

        // Cleanup
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    // Reset selected index when switching category
    useEffect(() => {
        setSelectedIndex(0);
    }, [projects]);

    return (
        <>
            <div className="relative">
                <div
                    ref={emblaRef}
                    className="relative overflow-hidden border rounded-md select-none dark:border-zinc-700"
                >
                    {/* Carousel */}
                    <div className="flex">
                        {projects.map((project, index) => (
                            <div key={index} className="flex-[0_0_100%]">
                                <ProjectsCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* NAVIGATION BUTTONS */}
                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className={`hidden sm:flex absolute  items-center justify-center w-14 h-14 transition -translate-y-1/2 border rounded-full hover:bg-gray-100 bg-primary1 top-1/2 -left-16 dark:bg-primary1-dark dark:border-zinc-700 ${
                        projects.length == 1
                            ? "text-primary5 dark:text-primary5-dark cursor-default hover:bg-primary1 dark:hover:bg-primary1-dark"
                            : "dark:hover:bg-primary3-dark"
                    }`}
                >
                    <Icon
                        icon="basil:caret-left-solid"
                        width={30}
                        height={30}
                    />
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className={`absolute hidden sm:flex  w-14 h-14 text-5xl items-center justify-center transition -translate-y-1/2 border rounded-full hover:bg-gray-100 bg-primary1 top-1/2 -right-16 dark:bg-primary1-dark dark:border-zinc-700  ${
                        projects.length == 1
                            ? "dark:text-primary5-dark text-primary5 cursor-default hover:bg-primary1 dark:hover:bg-primary1-dark"
                            : "dark:hover:bg-primary3-dark"
                    }`}
                >
                    <Icon
                        icon="basil:caret-right-solid"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            {/* Pagination Dots */}
            <div className={`flex justify-center gap-2 mt-4 `}>
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index, true)}
                        className={`w-6 h-6 border select-none dark:border-zinc-700 flex items-center justify-center rounded-full transition-colors ${
                            selectedIndex === index
                                ? "bg-accent text-white border-0"
                                : "bg-white dark:bg-primary1-dark"
                        }`}
                    >
                        <p className={`text-xs `}>{index + 1}</p>
                    </button>
                ))}
            </div>
        </>
    );
};

export default ProjectsCarousel;
