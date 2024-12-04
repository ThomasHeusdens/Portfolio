import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-gray-800 tracking-wider 
          animate-fade-in-left"
        >
          Thomas Heusdens
        </div>

        <ul 
          className="flex space-x-6 animate-fade-in-down"
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' }
          ].map((link) => (
            <li 
              key={link.href}
              className="transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Link 
                href={link.href} 
                className="relative text-gray-600 font-medium group"
              >
                <span className="transition-all duration-300 ease-in-out">
                  {link.label}
                </span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 
                  transition-all duration-300 ease-in-out group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;