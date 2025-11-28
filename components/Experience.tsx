import React from 'react';
import { ContentData } from '../types';

interface ExperienceProps {
  content: ContentData['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section className="py-20 md:py-32 bg-neutral-50 border-t border-neutral-100 scroll-mt-28" id="experience">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-20 flex flex-col items-start border-b border-black pb-6 md:pb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-black mb-2">{content.title}</h2>
          <p className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Career History</p>
        </div>

        <div className="space-y-0">
          {content.items.map((item, index) => (
            <div key={index} className="relative pl-0 md:pl-8 py-8 md:py-12 border-b border-neutral-200 last:border-0 group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 md:mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-1 cn-heading">{item.company}</h3>
                  <p className="text-neutral-500 font-serif italic text-base md:text-lg">{item.role}</p>
                </div>
                <span className="inline-block mt-2 md:mt-0 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black border border-neutral-200 px-2 md:px-3 py-1 bg-white">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-3 md:space-y-4">
                {item.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-4 text-neutral-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-neutral-300 rounded-full mt-2 group-hover:bg-black transition-colors"></span>
                    <span className="leading-relaxed font-light text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;