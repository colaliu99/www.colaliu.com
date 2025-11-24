import React from 'react';
import { ContentData } from '../types';

interface LifestyleProps {
  content: ContentData['lifestyle'];
}

const Lifestyle: React.FC<LifestyleProps> = ({ content }) => {
  return (
    <section className="py-32 bg-white border-t border-neutral-100 scroll-mt-28" id="lifestyle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black pb-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-medium text-black mb-4">
              {content.title}
            </h2>
            <p className="text-neutral-500 font-light text-lg">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Bento Grid - Full Color */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
            {/* Large Item (Cycling) */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
                <img 
                    src={content.items[0].image} 
                    alt={content.items[0].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2 block border-l-2 border-white pl-2">Passion</span>
                    <h3 className="text-3xl font-serif font-bold text-white italic">{content.items[0].title}</h3>
                </div>
            </div>

            {/* Tall Item (Life) */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden bg-neutral-100">
                <img 
                    src={content.items[3].image} 
                    alt={content.items[3].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 w-full bg-white/95 translate-y-0 transition-all duration-500 border-t border-neutral-200">
                    <h3 className="text-xl font-serif font-bold text-black">{content.items[3].title}</h3>
                    <p className="text-neutral-500 text-xs mt-1">{content.items[3].description}</p>
                </div>
            </div>

            {/* Small Item 1 (Travel) */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-neutral-100">
                <img 
                    src={content.items[1].image} 
                    alt={content.items[1].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">{content.items[1].title}</h3>
                </div>
            </div>

            {/* Small Item 2 (Sports) */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-neutral-100">
                <img 
                    src={content.items[2].image} 
                    alt={content.items[2].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                 <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">{content.items[2].title}</h3>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;