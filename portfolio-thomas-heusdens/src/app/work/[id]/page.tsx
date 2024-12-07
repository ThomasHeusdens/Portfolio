import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";
import { Project } from "@/types";

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("https://portfolio-p7gcxv2lz-thomasheusdens-projects.vercel.app/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = (await response.json()) as Project[];
  return projects;
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projects = await fetchProjects();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
