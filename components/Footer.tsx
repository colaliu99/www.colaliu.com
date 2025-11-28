import React from 'react';
import { ContentData } from '../types';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  content: ContentData['contact'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-stone-900 text-white py-12 md:py-20 scroll-mt-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-5xl font-serif font-bold mb-8 md:mb-12 tracking-tight">{content.title}</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-10 md:mb-16">
          <a 
            href={`mailto:${content.email}`}
            className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all group border border-stone-800 hover:border-stone-700"
          >
            <Mail className="text-stone-400 group-hover:text-white transition-colors" size={18} />
            <span className="text-sm md:text-lg font-light tracking-wide">{content.email}</span>
          </a>
          
          <a 
            href={`tel:${content.phone}`}
            className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all group border border-stone-800 hover:border-stone-700"
          >
            <Phone className="text-stone-400 group-hover:text-white transition-colors" size={18} />
            <span className="text-sm md:text-lg font-light tracking-wide">{content.phone}</span>
          </a>
        </div>

        <div className="border-t border-stone-800 pt-6 md:pt-8">
          <p className="text-stone-500 text-[10px] md:text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Cola Liu. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;