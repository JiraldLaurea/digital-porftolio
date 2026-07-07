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
      <div className="relative w-full overflow-hidden aspect-4/5 sm:aspect-video bg-zinc-200 dark:bg-primary3-dark">
        {/* Background: screenshot or placeholder */}
        {imgSrc ? (
          <Image
            src={`/img/${imgSrc}`}
            alt={name}
            className="object-cover object-top"
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

        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              {category && (
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  {category}
                </span>
              )}
              {year && (
                <span className="text-xs font-medium tracking-wide text-white/60">
                  {year}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {name}
            </h3>
            <p className="mt-2 text-sm text-white/70 sm:mt-3 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 shrink-0">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-5 h-11 text-sm font-medium text-black transition-colors bg-white rounded-full hover:bg-white/85"
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
                className="flex items-center px-5 text-sm font-medium text-white transition-colors border rounded-full h-11 border-white/25 bg-white/10 backdrop-blur hover:bg-white/20"
              >
                Source Code
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-5 text-sm font-medium text-white transition-colors border rounded-full h-11 border-white/25 bg-white/10 backdrop-blur hover:bg-white/20"
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
