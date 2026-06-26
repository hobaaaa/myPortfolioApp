import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
