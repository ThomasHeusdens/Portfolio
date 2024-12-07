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

          <div className="relative z-20 flex flex-col items-start h-full mt-40 px-8">
            <main>
              <h1 className="text-8xl font-extrabold mb-4 text-left">
                A passionate web developer ready to work with you
              </h1>
              <Link href={"/work"} className="text-xl text-left">
                <button
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full mt-20"
                  >
                    Explore my projects
                </button>
              </Link>
            </main>
          </div>
        </div>
      </div>
  );
}