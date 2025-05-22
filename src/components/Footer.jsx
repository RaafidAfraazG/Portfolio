import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const socialLinks = [
    { icon: Github, href: 'https://github.com/RaafidAfraazG', hoverColor: 'hover:text-black' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/RaafidAfraazG', hoverColor: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/raafu_raafid', hoverColor: 'hover:text-pink-400' },
    { icon: Mail, href: 'mailto:raafid122@gmail.com', hoverColor: 'hover:text-green-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 font-medium text-xs sm:text-sm uppercase tracking-wider text-gray-300">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`} 
              className="hover:text-blue-400 transition px-2 py-1"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`${social.hoverColor} transition-colors duration-300`}
            >
              <social.icon size={18} className="sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-gray-400 px-4">
          Designed and Developed By <span className="text-blue-400 font-semibold">RAAFID AFRAAZ</span> © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;