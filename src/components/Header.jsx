import { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animated, setAnimated] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/RaafidAfraazG' },
    { icon: Github, href: 'https://github.com/RaafidAfraazG' },
    { icon: Mail, href: 'mailto:raafid122@gmail.com' },
    { icon: Instagram, href: 'https://instagram.com/raafu_raafid' }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    setAnimated(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="md:hidden p-2 focus:outline-none mr-2 sm:mr-4" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1">
              <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${menuOpen ? 'w-full rotate-45 translate-y-1.5' : 'w-full'}`}></span>
              <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-5/6'}`}></span>
              <span className={`block h-0.5 bg-blue-400 transition-all duration-300 ${menuOpen ? 'w-full -rotate-45 -translate-y-1.5' : 'w-4/6'}`}></span>
            </div>
          </button>

          <nav className={`hidden md:flex space-x-4 lg:space-x-8 ${animated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            {navItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`}
                className={`relative overflow-hidden group transition-all duration-300 text-white hover:text-blue-400 ${
                  index === 0 ? 'text-blue-400' : ''
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        <div className={`hidden md:flex space-x-4 lg:space-x-6 items-center ${animated ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-200`}>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label={`Visit ${social.icon.name}`}
            >
              <social.icon size={18} className="sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </div>

      <div 
        className={`md:hidden bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="p-4 sm:p-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`} 
                className={`transform transition-all duration-300 text-white text-base sm:text-lg ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                } hover:text-blue-400 hover:pl-2`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}

            <div className={`flex space-x-6 pt-4 transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '350ms' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;