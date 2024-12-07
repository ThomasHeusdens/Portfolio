import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";

async function fetchProjects() {
  const response = await fetch("http://localhost:3000/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projects = await fetchProjects();
  const project = projects.find((proj: any) => proj.id === params.id);

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}