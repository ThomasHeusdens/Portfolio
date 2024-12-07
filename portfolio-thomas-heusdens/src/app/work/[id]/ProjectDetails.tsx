"use client";

import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../../types"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../app/globals.css";

export default function ProjectDetails({ project }: { project: Project }) {
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

      <div className="flex flex-col mt-28 px-8 relative">
        <Link href="/work">
          <div className="absolute left-8 mt-54">
            <Image
              src="/back-arrow.png"
              alt="Back to work page"
              width={50}
              height={50}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
        <h1 className="text-6xl font-bold text-center mb-12 text-white">{project.name}</h1>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Carousel Section */}
          <div className="w-full lg:w-1/2">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showArrows={true}
            showIndicators={true}
            showStatus={false}
            className="rounded-xl overflow-hidden"
            >
                {project.projectImages?.map((image: string, idx: number) => (
                    <div
                    key={idx}
                    className="relative w-[800px] h-[362.7px] bg-black flex items-center justify-center overflow-hidden"
                    >
                    <div className="absolute w-full h-full">
                        <Image
                        src={image}
                        alt={`Project Image ${idx + 1}`}
                        fill
                        className="object-cover object-center"
                        />
                    </div>
                    </div>
                ))}
            </Carousel>

          </div>

          {/* Project Details Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Description of the project</h2>
            </div>

            <div>
              <p className="text-lg text-gray-300">{project.description}</p>
            </div>

            <div>
              <h2 className="text-2xl text-bold text-white">Technologies used:</h2>
              <p className="text-gray-300">{project.technologies}</p>
            </div>

            <div>
              <a
                href={project.githubLink}
                target="_blank"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
