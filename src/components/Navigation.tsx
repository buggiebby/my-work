import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Portfolio', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950 backdrop-blur-md border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-down">
          BUGGIE
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="nav-link text-white hover:text-blue-400 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-4 animate-slide-in-left">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors py-2"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
