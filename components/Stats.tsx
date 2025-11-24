import React from 'react';
import { ContentData } from '../types';

interface StatsProps {
  content: ContentData['stats'];
}

const Stats: React.FC<StatsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-stone-50 border-t border-neutral-200 scroll-mt-28" id="stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
            
            {/* Title Block */}
            <div className="col-span-1 md:pr-8 md:border-r border-neutral-300 h-full">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-black mb-4 leading-tight">
                    {content.title}
                </h2>
                <div className="w-12 h-1 bg-black mb-4"></div>
                <p className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase font-sans leading-relaxed">
                  Proven track record of commercial success.
                </p>
            </div>

            {/* Data Blocks - Editorial Style */}
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                {content.items.map((item, index) => (
                    <div 
                        key={index} 
                        className={`
                            flex flex-col md:px-10
                            ${index !== content.items.length - 1 ? 'md:border-r border-neutral-300' : ''}
                        `}
                    >
                        <div className="mb-6 flex items-center justify-between">
                             <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">
                                {item.label}
                            </span>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-5xl lg:text-6xl font-serif font-medium text-black mb-2 tracking-tight">
                                {item.value}
                            </h3>
                            <div className="flex items-center gap-2 mt-4">
                                {item.project && (
                                    <span className="px-2 py-0.5 bg-black text-white text-[9px] font-bold uppercase tracking-widest font-sans">
                                        {item.project}
                                    </span>
                                )}
                                <p className="text-neutral-600 text-xs font-serif italic border-b border-neutral-200 pb-0.5">
                                    {item.subLabel}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;