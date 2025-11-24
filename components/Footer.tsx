import React from 'react';
import { ContentData } from '../types';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  content: ContentData['contact'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-stone-900 text-white py-20 scroll-mt-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 tracking-tight">{content.title}</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a 
            href={`mailto:${content.email}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all group border border-stone-800 hover:border-stone-700"
          >
            <Mail className="text-stone-400 group-hover:text-white transition-colors" size={20} />
            <span className="text-lg font-light tracking-wide">{content.email}</span>
          </a>
          
          <a 
            href={`tel:${content.phone}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all group border border-stone-800 hover:border-stone-700"
          >
            <Phone className="text-stone-400 group-hover:text-white transition-colors" size={20} />
            <span className="text-lg font-light tracking-wide">{content.phone}</span>
          </a>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <p className="text-stone-500 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Cola Liu. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;