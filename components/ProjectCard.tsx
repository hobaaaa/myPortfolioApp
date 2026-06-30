import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#0a1421] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/28 hover:shadow-[0_24px_80px_rgba(8,21,37,0.45)]">
      <div className="relative -mb-px h-64 overflow-hidden bg-[#071320]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-center transform-gpu"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#071320]" />
        <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#071320]/82 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
        <p className="mt-5 text-sm font-medium text-accentStrong">{project.outcome}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <Link href="/iletisim" className="button-secondary">
            Benzer Bir Proje Planlayalım
          </Link>
        </div>
      </div>
    </article>
  );
}
