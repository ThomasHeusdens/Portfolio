"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  return (
    <div>
      <header className="absolute top-8 left-0 right-0 px-8 z-30">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Thomas Heusdens</h3>
            <p className="text-sm opacity-80">Web Developer</p>
          </div>
          <div>
            <a
              href="#"
              className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-500 transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      </header>

      <div className="min-h-screen flex flex-col mt-28 px-8 relative">
        <h1 className="text-6xl font-bold text-center mb-12 text-white">My Work</h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-96 h-auto rounded-xl overflow-hidden shadow-lg group bg-black transition-all duration-300 p-6 mb-12"
          >
            <Image
              src={project.backgroundImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-300"
            />

            <div className="relative z-10 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold text-white mb-6">{project.title}</h2>

              <Link href={project.link}>
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full grayscale group-hover:grayscale-0 transition-all duration-300 mb-6"
                >
                  See Project
                </button>
              </Link>

              <div
                className="flex flex-row gap-4 w-full p-4 rounded-xl bg-white bg-opacity-30 backdrop-blur-lg transition-all duration-300 
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
                      className="w-[100px] h-[150px] object-cover grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}