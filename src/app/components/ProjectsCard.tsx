"use client";
import Image from "next/image";
import { memo } from "react";
import { FiArrowUpRight, FiImage } from "react-icons/fi";
import { Project } from "../Types/index";

const ProjectsCard = memo(
  ({
    imgSrc,
    name,
    description,
    category,
    year,
    link,
    sourceCode,
    figmaLink,
  }: Project) => {
    return (
      <div className="w-full overflow-hidden bg-primary2 dark:bg-primary3-dark sm:relative sm:aspect-video sm:bg-zinc-200">
        {/* Background: screenshot or placeholder. Full, uncropped image on
            mobile (its own aspect-video box); fills the card as a cover
            background from sm up, where there's room for an overlay. */}
        <div className="relative w-full aspect-video sm:absolute sm:inset-0 sm:aspect-auto">
          {imgSrc ? (
            <Image
              src={`/img/${imgSrc}`}
              alt={name}
              className="object-contain sm:object-cover sm:object-top"
              quality={80}
              fill
              placeholder="blur"
              blurDataURL="/img/blur-placeholder.png"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-b from-zinc-200 to-zinc-300 text-zinc-400 dark:from-primary3-dark dark:to-primary1-dark dark:text-zinc-500">
              <FiImage size={40} />
              <p className="text-sm font-medium">Coming soon</p>
            </div>
          )}
        </div>

        {/* Legibility gradient: only needed where text overlays the image */}
        <div className="hidden sm:block sm:absolute sm:inset-0 sm:bg-linear-to-t sm:from-black sm:via-black/10 sm:to-transparent" />

        {/* Content: a plain panel below the image on mobile, an overlay on
            the image itself from sm up */}
        <div className="flex flex-col gap-4 p-6 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              {category && (
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  {category}
                </span>
              )}
              {year && (
                <span className="text-xs font-medium tracking-wide text-secondary-text dark:text-secondary-text-dark sm:text-white/60">
                  {year}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl sm:text-white lg:text-4xl">
              {name}
            </h3>
            <p className="mt-2 text-sm text-secondary-text dark:text-secondary-text-dark sm:mt-3 sm:text-white/70 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-5 h-11 text-sm font-medium text-primary1 dark:text-black transition-colors bg-primary-text dark:bg-white rounded-full hover:bg-primary-text/85 dark:hover:bg-white/85 sm:text-black sm:bg-white sm:hover:bg-white/85"
              >
                Live Demo
                <FiArrowUpRight size={16} />
              </a>
            )}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-5 text-sm font-medium transition-colors border rounded-full h-11 border-border-warm dark:border-zinc-700 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark sm:text-white sm:border-white/25 sm:bg-white/10 sm:backdrop-blur sm:hover:bg-white/20"
              >
                Source Code
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-5 text-sm font-medium transition-colors border rounded-full h-11 border-border-warm dark:border-zinc-700 hover:bg-primary-hovered dark:hover:bg-primary-hovered-dark sm:text-white sm:border-white/25 sm:bg-white/10 sm:backdrop-blur sm:hover:bg-white/20"
              >
                Open in Figma
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
);

ProjectsCard.displayName = "ProjectsCard";

export default ProjectsCard;
