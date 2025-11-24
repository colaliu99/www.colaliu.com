import React from 'react';
import { Language, ContentData } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const navLinks = [
    { label: content.about, href: '#about' }, 
    { label: content.marketing, href: '#marketing' },
    { label: content.design, href: '#design' },
    { label: content.lifestyle, href: '#lifestyle' },
    { label: content.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Songti (Serif) */}
          <a href="#" className="flex-shrink-0 flex items-center cursor-pointer group">
            <span className="text-3xl font-serif font-bold tracking-tight text-black group-hover:opacity-70 transition-opacity">
              cola.liu
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-500 hover:text-black font-medium text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 font-sans"
              >
                {link.label}
              </a>
            ))}
            
            <button 
              onClick={toggleLang}
              className="ml-4 text-[10px] font-bold text-black border border-neutral-200 px-3 py-1 rounded-none hover:bg-black hover:text-white transition-all uppercase tracking-widest font-sans"
            >
              {lang}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLang}
              className="text-xs font-bold text-black border border-neutral-200 px-2 py-1 uppercase font-sans"
            >
              {lang}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:opacity-70 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 absolute w-full h-screen left-0 top-full shadow-xl">
          <div className="px-6 pt-12 pb-6 space-y-8 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-black hover:text-neutral-500 tracking-widest uppercase font-sans"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;