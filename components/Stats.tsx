import React from 'react';
import { ContentData } from '../types';

interface StatsProps {
  content: ContentData['stats'];
}

const Stats: React.FC<StatsProps> = ({ content }) => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-t border-neutral-200 scroll-mt-28" id="stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-8 items-start">
            
            {/* Title Block - Left Column */}
            <div className="w-full md:col-span-1 md:pr-8 md:border-r border-neutral-300 md:h-full border-b md:border-b-0 border-neutral-200 pb-8 md:pb-0 mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-black mb-4 leading-tight">
                    {content.title}
                </h2>
                <div className="w-12 h-1 bg-black mb-4"></div>
                <p className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase font-sans leading-relaxed">
                  Proven track record of commercial success.
                </p>
            </div>

            {/* Data Blocks - Right Side Grid 
                Mobile: grid-cols-2 (2x2 Matrix)
                Desktop: grid-cols-2 (2x2 Matrix inside the 3-col span area) to fit 4 items nicely
            */}
            <div className="w-full md:col-span-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-12">
                {content.items.map((item, index) => (
                    <div 
                        key={index} 
                        className={`
                            flex flex-col md:px-0
                            ${/* Mobile: Last item no longer needs special spanning because we have 4 items */ ''}
                            col-span-1
                        `}
                    >
                        <div className="mb-3 md:mb-6 flex items-center justify-between">
                             <span className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans truncate">
                                {item.label}
                            </span>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-3xl md:text-5xl font-serif font-medium text-black mb-2 tracking-tight">
                                {item.value}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-2 md:mt-4">
                                {item.project && (
                                    <span className="px-2 py-0.5 bg-black text-white text-[9px] font-bold uppercase tracking-widest font-sans whitespace-nowrap">
                                        {item.project}
                                    </span>
                                )}
                                <p className="text-neutral-600 text-[9px] md:text-[10px] font-serif italic border-b border-neutral-200 pb-0.5">
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