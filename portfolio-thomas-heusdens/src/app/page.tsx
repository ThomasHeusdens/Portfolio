import Name from "../components/name";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col w-4/5 h-screen">
        <div className="group flex items-center justify-center w-full flex-[3] border-2 border-zinc-500 mt-2 relative">
          <h3 className="text-center text-xl text-white group-hover:opacity-0 transition-opacity duration-300">
            What I offer
          </h3>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/webdevelopment" className="flex-1 flex flex-col items-center justify-center p-4 text-white border-2 border-zinc-500 h-5/6 ml-5 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/web.png"
                  alt="Background pattern"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-10 transition-opacity duration-300 hover:opacity-25"
                />
              </div>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center z-10">
                <Image
                  src="/programmer.png"
                  alt="Full stack development"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className="object-contain grayscale transform transition-transform duration-300 hover:scale-125 hover:grayscale-0"
                />
              </div>
            </Link>

            <Link href="/mobileapp" className="flex-1 flex flex-col items-center justify-center p-4 text-white border-2 border-zinc-500 h-5/6 ml-5 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/app.png"
                  alt="Background pattern"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-10 transition-opacity duration-300 hover:opacity-25"
                />
              </div>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center z-10">
                <Image
                  src="/mobile.png"
                  alt="Mobile app"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className="object-contain grayscale transform transition-transform duration-300 hover:scale-125 hover:grayscale-0"
                />
              </div>
            </Link>

            <Link href="/uxuidesign" className="flex-1 flex flex-col items-center justify-center p-4 text-white border-2 border-zinc-500 h-5/6 m-5 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/uxui.png"
                  alt="Background pattern"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-10 transition-opacity duration-300 hover:opacity-25"
                />
              </div>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center z-10">
                <Image
                  src="/design.png"
                  alt="UX/UI Design"
                  layout="intrinsic"
                  width={150}
                  height={150}
                  className="object-contain grayscale transform transition-transform duration-300 hover:scale-125 hover:grayscale-0"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full flex-[1]">
          <Name />
        </div>

        <div className="flex w-full flex-[3] space-x-2">
          <div className="flex-1 flex items-center justify-center border-2 border-zinc-500 mb-2">
            <h3 className="text-center text-xl text-white">About me</h3>
          </div>
          <div className="flex-1 flex items-center justify-center border-2 border-zinc-500 mb-2">
            <h3 className="text-center text-xl text-white">Contact me</h3>
          </div>
        </div>
      </main>
    </div>
  );
}