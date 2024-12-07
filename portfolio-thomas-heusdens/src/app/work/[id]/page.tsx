import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";
import { Project } from "@/types";

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("http://localhost:3000//projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = (await response.json()) as Project[];
  return projects;
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await the params object
  const projects = await fetchProjects(); // Fetch the projects
  const project = projects.find((proj) => proj.id === id); // Find the project by ID

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
