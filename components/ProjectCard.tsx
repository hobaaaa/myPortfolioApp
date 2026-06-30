"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const targetHref = project.href ?? `/portfolio#${project.slug}`;
  const [open, setOpen] = useState(false);

  const goToProject = () => {
    router.push(targetHref);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToProject();
    }
  };

  const stopCardNavigation = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const toggleCaseStudy = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((value) => !value);
  };

  return (
    <article
      id={project.slug}
      role="link"
      tabIndex={0}
      onClick={goToProject}
      onKeyDown={onKeyDown}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#0a1421] shadow-panel transition duration-300 hover:-translate-y-1.5 hover:border-accent/28 hover:shadow-[0_24px_80px_rgba(8,21,37,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={`${project.title} projesini incele`}
    >
      <div className="relative h-64 overflow-hidden bg-[#071320]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-center transform-gpu transition duration-500 group-hover:scale-[1.012]"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#071320]/82 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
        <p className="mt-5 text-sm font-medium text-accentStrong">{project.outcome}</p>

        <div className="mt-5">
          <button
            type="button"
            onClick={toggleCaseStudy}
            className="flex w-full items-center justify-between rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition duration-300 hover:border-accent/25 hover:bg-white/[0.05]"
            aria-expanded={open}
          >
            <span className="text-sm font-medium text-sky-100">Neler Yaptık</span>
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 text-sky-100 transition duration-300 ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {open ? (
            <div
              onClick={stopCardNavigation}
              className="mt-3 grid gap-3"
            >
              {[
                { label: "Amaç", value: project.challenge },
                { label: "Çözüm", value: project.solution },
                { label: "Sonuç", value: project.result }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition duration-300 group-hover:border-accent/15"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-sky-100/75">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-100 transition duration-300 group-hover:border-accent/20"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <Link
            href="/iletisim"
            onClick={stopCardNavigation}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-sky-100 transition duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-white/[0.05]"
          >
            Sizin sitenizi de bu netlikte kuralım
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
