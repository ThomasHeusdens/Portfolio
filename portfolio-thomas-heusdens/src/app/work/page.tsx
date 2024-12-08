"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "@/types";

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Error loading projects:", error.message);
        } else {
          console.error("Unknown error occurred");
        }
      });
  }, []);
  

  return (
    <div>
      <header className="absolute top-8 left-0 right-0 px-8 z-30">
        <div className="flex justify-between items-center">
            <Link href={"/"}>
                <h3 className="text-2xl font-bold">Thomas Heusdens</h3>
                <p className="text-sm opacity-80">Web Developer</p>
            </Link>
          <div>
            <a
              href="https://www.linkedin.com/in/thomas-heusdens-0bba19258/"
              target="_blank"
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              CONNECT
            </a>
          </div>
        </div>
      </header>

      <div className="min-h-screen flex flex-col my-28 px-8 relative">
        <h1 className="text-6xl font-bold text-center mb-12 text-white">My Work</h1>
        
        <div className="flex flex-wrap gap-6 justify-start">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] 
                    h-auto rounded-xl overflow-hidden shadow-lg group bg-black transition-all duration-300 p-6"
            >
              <Image
                src={project.backgroundImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full group-hover:opacity-70 transition-all duration-300"
              />

              <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl font-bold text-white mb-6">{project.title}</h2>

                <Link href={`/work/${project.id}`}>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full transition-all duration-300 mb-6"
                  >
                    See Project
                  </button>
                </Link>

                <div
                  className="flex flex-row justify-center gap-8 w-full p-4 rounded-xl bg-white bg-opacity-30 backdrop-blur-lg transition-all duration-300 
                             hover:bg-opacity-100"
                >
                  {project.previewImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-lg bg-black transition-all duration-300"
                    >
                      <Image
                        src={image}
                        alt={`Preview ${idx + 1}`}
                        width={150}
                        height={200}
                        objectFit="cover"
                        className="w-[100px] h-[150px] object-cover hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
