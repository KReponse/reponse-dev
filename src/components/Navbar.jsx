import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import logo from "../assets/logo.png";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <nav className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800' 
    : 'bg-transparent'
}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Code2 className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
            <div className="flex items-center gap-2">
  <img src={logo} alt="logo" className="w-10 h-10" />
  <span className="text-xl font-bold text-blue-400">Reponse Dev</span>
</div>
            
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
               className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
  activeSection === link.href.substring(1)
    ? 'text-blue-400'
    : 'text-gray-300'
}`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
           className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
         <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900 animate-slideDown">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-gray-50 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-gray-50'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;