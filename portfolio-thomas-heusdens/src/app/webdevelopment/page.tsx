import WebDev from '../../components/webdev';

export default function webDevelopment() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <main className="flex flex-col w-4/5">
        <div className="flex h-[60vh] mt-2 gap-4">
          <div className="w-1/3 bg-gray-200"></div>
          <div className="w-2/3 bg-gray-400"></div>
        </div>
        <div className="flex items-center justify-center w-full flex-[1]">
          <WebDev />
        </div>
        <div className="flex h-[60vh] mb-8 gap-4">
          <div className="w-2/3 bg-gray-400"></div>
          <div className="w-1/3 bg-gray-200"></div>
        </div>

        <div className="flex h-[60vh] mt-8 mb-8 gap-4">
          <div className="w-1/3 bg-gray-200"></div>
          <div className="w-2/3 bg-gray-400"></div>
        </div>

        <div className="flex h-[60vh] mt-8 mb-8 gap-4">
          <div className="w-2/3 bg-gray-400"></div>
          <div className="w-1/3 bg-gray-200"></div>
        </div>
      </main>
    </div>
  );
}