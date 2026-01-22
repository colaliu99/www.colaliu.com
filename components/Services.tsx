
import React from 'react';
import { ContentData } from '../types';
import { Target, Palette, Briefcase, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  content: ContentData['services'];
}

const iconMap: Record<string, any> = {
  Target,
  Palette,
  Briefcase
};

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-neutral-100 scroll-mt-28" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black pb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-4">What I Can Do</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-black mb-4">
              {content.title}
            </h2>
            <p className="text-neutral-500 font-light text-lg">
              {content.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            return (
              <div 
                key={index} 
                className="group bg-white p-10 border border-neutral-100 shadow-sm hover:shadow-2xl hover:border-black transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-black group-hover:scale-150 transition-all duration-700"></div>
                
                <div className="mb-10 relative">
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-black mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-neutral-100">
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">交付成果 / Deliverables</p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-800">
                        <CheckCircle2 size={14} className="text-stone-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
