import WebDev from '../../components/webdev';
import Image from 'next/image';
import Link from "next/link";

export default function webDevelopment() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="flex flex-col w-4/5">
        <div className="flex h-[60vh] mt-2 gap-4">
          <Link href={"/astronomy"} className="w-1/3 relative group">
            <Image
              src="/3dastronomy.jpg" 
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">3D Astronomy Test</p>
            </div>
          </Link>
          <Link href={'/astronomy'} className="w-2/3 relative group">
            <Image
              src="/scraping.jpg" 
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Scraping Website</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full flex-[1]">
          <WebDev />
        </div>
        <div className="flex h-[60vh] mb-8 gap-4">
        <Link href={'/astronomy'} className="w-2/3 relative group">
            <Image
              src="/django-angular.jpg" 
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">CineCritique Website</p>
            </div>
          </Link>
          <Link href={"/astronomy"} className="w-1/3 relative group">
            <Image
              src="/who.jpg" 
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Who&apos;Story</p>
            </div>
          </Link>
        </div>

        {/* Third Section */}
        <div className="flex h-[60vh] mt-8 mb-8 gap-4">
          <div className="w-1/3 bg-gray-200"></div>
          <div className="w-2/3 bg-gray-400"></div>
        </div>

        {/* Fourth Section */}
        <div className="flex h-[60vh] mt-8 mb-8 gap-4">
          <div className="w-2/3 bg-gray-400"></div>
          <div className="w-1/3 bg-gray-200"></div>
        </div>
      </main>
    </div>
  );
}