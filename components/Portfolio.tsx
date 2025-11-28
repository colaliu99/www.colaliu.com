import React, { useState, useEffect } from 'react';
import { ContentData, PortfolioItem } from '../types';
import { X, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  content: ContentData['portfolio'];
}

const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<'marketing' | 'design'>('marketing');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Listen for hash changes to switch tabs automatically
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#marketing') {
        setActiveTab('marketing');
      } else if (hash === '#design') {
        setActiveTab('design');
      }
    };
    
    // Check on mount
    if (window.location.hash === '#marketing') setActiveTab('marketing');
    if (window.location.hash === '#design') setActiveTab('design');

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const works = {
    marketing: content.items.filter(item => item.id <= 4),
    design: content.items.filter(item => item.id > 4)
  };

  return (
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100 relative" id="portfolio">
      {/* 
        Positioned Anchors for Navigation 
        Placed relatively with negative top to account for Fixed Navbar height (80px) + some breathing room 
      */}
      <div id="marketing" className="absolute top-[-100px] md:top-[-120px] left-0"></div>
      <div id="design" className="absolute top-[-100px] md:top-[-120px] left-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 border-b border-black pb-6">
          <div className="max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-serif font-medium text-black mb-2">{content.title}</h2>
          </div>
          
          <div className="flex gap-6 md:gap-8 mt-6 md:mt-0">
            {['marketing', 'design'].map((tab) => (
                <button
                key={tab}
                onClick={() => {
                    setActiveTab(tab as 'marketing' | 'design');
                    window.history.replaceState(null, '', `#${tab}`);
                }}
                className={`pb-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeTab === tab 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-neutral-400 hover:text-neutral-600'
                }`}
                >
                {tab === 'marketing' ? content.marketingTab : content.designTab}
                </button>
            ))}
          </div>
        </div>

        {/* Grid - Mobile: 2 Cols, Desktop: 2 Cols */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-8 md:gap-y-20 animate-in fade-in duration-500">
          {works[activeTab].map((work) => {
             // Logic: ID 1 (China Mobile) and ID 3 (Tmall) need to show full content (contain).
             // Others fill the box (cover).
             const isGraphicCase = work.id === 1 || work.id === 3;

             return (
              <div 
                key={work.id} 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedItem(work)}
              >
                {/* Image Container 
                    Fixed Aspect Ratio (4:3) using pb-[75%]
                    This ensures the WINDOW size is always identical.
                */}
                <div className="relative w-full pb-[75%] mb-4 md:mb-6 bg-neutral-50 border border-neutral-100 shadow-sm transition-all duration-500 group-hover:shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500"></div>
                  
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    onError={(e) => {
                      // Smart handling: if image is missing, hide the image element
                      (e.target as HTMLImageElement).style.visibility = 'hidden';
                    }}
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 
                      ${isGraphicCase 
                        ? 'object-contain p-1 md:p-2 bg-neutral-50' 
                        : 'object-cover'
                      }
                      ${work.id === 2 ? 'object-top' : ''}
                    `}
                  />
                  
                  {/* Overlay Icon - Hidden on small mobile to keep clean */}
                  <div className="hidden md:block absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-sm">
                      <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                    <h3 className="text-sm md:text-xl font-medium text-black group-hover:underline decoration-1 underline-offset-4 font-serif leading-tight">{work.title}</h3>
                    <span className="text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1 border border-neutral-200 px-1 md:px-2 py-0.5 font-sans self-start md:self-auto">{work.year}</span>
                  </div>
                  
                  <p className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-wide mb-2 md:mb-3 font-sans truncate">{work.category}</p>
                  
                  {/* Hidden on Mobile for cleaner double-column layout */}
                  <p className="hidden md:block text-neutral-600 font-light text-sm leading-relaxed line-clamp-2 font-sans mb-4">
                    {work.description}
                  </p>

                  {/* View Details Button - Enhanced Design */}
                  <div className="mt-auto pt-2">
                    <button className="w-full md:w-auto flex items-center justify-center md:justify-start gap-1 md:gap-2 text-[10px] md:text-xs font-bold text-black uppercase tracking-widest border border-neutral-200 px-3 md:px-5 py-2 md:py-3 hover:bg-stone-900 hover:border-stone-900 hover:text-white transition-all duration-300 font-serif group-hover:border-black group-hover:translate-x-1">
                      {content.viewProject} <ArrowRight size={12} className="md:hidden" /> <ArrowRight size={14} className="hidden md:block group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md" onClick={() => setSelectedItem(null)}></div>
            
            <div className="relative bg-white w-full max-w-6xl h-full md:h-[90vh] shadow-2xl flex flex-col overflow-hidden border border-neutral-200 animate-in fade-in zoom-in-95 duration-300">
              
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto h-full">
                {selectedItem.gallery ? (
                    // DESIGN MODE
                    <div className="flex flex-col">
                        <div className="p-8 md:p-12 border-b border-neutral-100 bg-white sticky top-0 z-40 shadow-sm">
                            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 block font-sans">Project Gallery</span>
                            <h3 className="text-3xl md:text-5xl font-serif text-black mb-6">{selectedItem.title}</h3>
                            <p className="text-neutral-600 text-lg font-light leading-relaxed max-w-3xl font-sans">{selectedItem.description}</p>
                        </div>
                        <div className="bg-neutral-50 p-4 md:p-16 space-y-16">
                            {selectedItem.gallery.map((img, idx) => (
                            <div key={idx} className="w-full shadow-lg transition-opacity duration-300">
                                <img 
                                  src={img} 
                                  alt={`${selectedItem.title} ${idx + 1}`} 
                                  className="w-full h-auto" 
                                  loading="lazy"
                                  onError={(e) => {
                                    // CRITICAL FIX: If gallery image is missing (e.g. p5-11), hide the entire container div.
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) parent.style.display = 'none';
                                  }}
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // MARKETING MODE - REDESIGNED
                    <div className="flex flex-col lg:flex-row min-h-full">
                        {/* Image Side: Flex container for centering, no crop */}
                        <div className="w-full lg:w-1/2 bg-stone-100 relative min-h-[300px] lg:min-h-full border-r border-neutral-100 flex items-center justify-center p-0 md:p-12">
                            <img 
                            src={selectedItem.image} 
                            alt={selectedItem.title} 
                            onError={(e) => { (e.target as HTMLImageElement).style.visibility = 'hidden'; }}
                            className="w-full h-auto max-w-full max-h-[80vh] object-contain shadow-lg"
                            />
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 p-8 lg:p-16 bg-white overflow-y-auto">
                            <div className="mb-12 border-b border-black pb-8">
                                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-4 font-sans">Case Study</h4>
                                <h3 className="text-2xl lg:text-4xl font-serif text-black mb-6 leading-tight">{selectedItem.title}</h3>
                                <p className="text-lg text-neutral-600 font-serif italic">
                                    "{selectedItem.description}"
                                </p>
                            </div>

                            {selectedItem.details && (
                                <div className="space-y-12">
                                    <div>
                                        <h5 className="font-bold uppercase tracking-widest text-xs text-black mb-3 font-sans">Context</h5>
                                        <p className="text-neutral-600 leading-relaxed text-sm font-light font-sans">{selectedItem.details.context}</p>
                                    </div>
                                    <div className="pl-6 border-l-2 border-black">
                                        <h5 className="font-bold uppercase tracking-widest text-xs text-black mb-3 font-sans">Strategy</h5>
                                        <p className="text-neutral-800 leading-relaxed whitespace-pre-line text-sm font-sans">{selectedItem.details.strategy}</p>
                                    </div>
                                    <div className="bg-neutral-900 text-white p-6 shadow-xl">
                                        <h5 className="font-bold uppercase tracking-widest text-xs text-neutral-400 mb-3 font-sans">Key Results</h5>
                                        <p className="text-base font-medium leading-relaxed font-sans">{selectedItem.details.result}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;