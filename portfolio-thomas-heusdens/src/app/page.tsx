import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <div className="relative h-screen text-white bg-black overflow-hidden">
           <div className="absolute right-0 top-0 h-full w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
              <Image
                src="/me.JPG"
                alt="Thomas Heusdens"
                layout="fill"
                style={{ objectFit: "cover" }}
                className="w-full h-full grayscale opacity-70"
              />
            </div>

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

          <div className="relative z-20 flex flex-col justify-center items-start h-full px-8">
            <main>
              <h1 className="text-8xl font-extrabold mb-4 text-left">
                Scroll to look into my school projects
              </h1>
              <Link href={"/work"} className="text-xl opacity-75 text-left">
                Explore my work
              </Link>
            </main>
          </div>
        </div>
      </div>
  );
}