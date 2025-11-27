import React, { useState, useEffect } from 'react';
import { ContentData } from '../types';
import { WECHAT_QR } from '../constants';
import Typewriter from './Typewriter';
import { QrCode, ArrowRight } from 'lucide-react';

interface HeroProps {
  content: ContentData['hero'];
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ content, imageSrc }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Listen for #about hash to switch to Slide 2
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setActiveSlide(1);
        setIsAutoPlay(false);
        // Scroll to hero if not already there
        const aboutAnchor = document.getElementById('about');
        if (aboutAnchor) {
            aboutAnchor.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Check initial load
    if (window.location.hash === '#about') {
        handleHashChange();
    }
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000); 
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section 
      id="hero"
      className="relative bg-white pt-20 h-screen min-h-[600px] max-h-[1080px] overflow-hidden border-b border-neutral-100"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Navigation Anchor for #about */}
      <div id="about" className="absolute top-0 left-0 w-full h-0 pointer-events-none" />
      
      {/* =======================
          SLIDE 1: INTRO (Strict Side-by-Side Layout)
         ======================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-white ${activeSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
           
           {/* Left: Text Content */}
           <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 lg:px-24 bg-white z-20 relative order-2 md:order-1">
              <div className="max-w-xl">
                 {/* Names Block - Songti */}
                 <div className="mb-6 md:mb-10">
                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-none tracking-tight mb-3 font-serif">
                     {content.nameEn}
                   </h1>
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-neutral-600 leading-tight tracking-wide font-serif">
                     {content.nameZh}
                   </h2>
                 </div>

                 {/* Role & Typewriter */}
                 <div className="mb-8 md:mb-14 min-h-[100px] md:min-h-[120px]">
                   <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-black uppercase mb-4 md:mb-6 font-sans border-b border-neutral-100 pb-2 inline-block">
                      {content.role}
                   </p>
                   <Typewriter 
                      prefix={content.prefix}
                      phrases={content.typewriterPhrases} 
                      className="!text-xl md:!text-2xl lg:!text-3xl text-stone-800" 
                    />
                 </div>
                 
                 {/* Buttons */}
                 <div className="flex flex-wrap gap-4">
                    <a 
                      href="#contact"
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3 font-sans"
                    >
                      {content.ctaText} <ArrowRight size={14} />
                    </a>
                    
                     <div className="group/qr relative">
                      <button className="px-6 py-3 md:px-8 md:py-4 border border-neutral-200 text-black text-xs font-bold uppercase tracking-widest hover:border-black transition-all flex items-center gap-2 font-sans bg-white">
                        <QrCode size={14} /> {content.wechatLabel}
                      </button>
                      <div className="absolute bottom-full left-0 mb-4 w-48 bg-white p-2 shadow-xl border border-neutral-100 opacity-0 translate-y-4 group-hover/qr:opacity-100 group-hover/qr:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                         <img src={WECHAT_QR} alt="WeChat" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
              </div>
           </div>

           {/* Right: Image - High-end Framed Design */}
           <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-stone-50 flex items-center justify-center order-1 md:order-2 overflow-hidden px-6 py-8 md:p-0">
               {/* Decorative Background Elements */}
               <div className="absolute w-[60%] h-full right-0 top-0 bg-[#EAEAE5] skew-x-12 origin-top-right"></div>
               
               {/* Framed Photo Container */}
               <div className="relative z-10 w-auto h-[85%] md:h-[75%] aspect-[3/4] transition-transform duration-700 hover:scale-[1.02]">
                   {/* Shadow Layer */}
                   <div className="absolute inset-0 translate-x-4 translate-y-4 bg-black/10 blur-xl rounded-sm"></div>
                   
                   {/* White Frame */}
                   <div className="absolute inset-0 bg-white shadow-2xl p-3 md:p-4 rotate-0 md:rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
                       {/* The Image */}
                       <div className="w-full h-full relative overflow-hidden bg-stone-100 border border-stone-100">
                         <img 
                            src={imageSrc} 
                            alt="Cola Liu" 
                            className="w-full h-full object-cover object-top" 
                         />
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </div>

      {/* =======================
          SLIDE 2: PROFILE
         ======================= */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-white ${activeSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
      >
        <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center py-12 md:py-24 overflow-y-auto lg:overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full items-center">
               {/* Left Column */}
               <div className="lg:col-span-5 flex flex-col justify-center relative">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 font-sans border border-neutral-200 px-3 py-1 rounded-full">About Me</span>
                    </div>
                    
                    <h2 className="text-5xl lg:text-7xl font-bold text-black mb-8 leading-none tracking-tight font-serif">
                      Driving<br/>Growth.
                    </h2>

                    <p className="text-base text-neutral-600 font-normal leading-loose mb-12 font-sans max-w-md">
                      {content.personalDescription}
                    </p>

                     <div className="flex gap-16 border-t border-neutral-100 pt-8">
                        <div>
                            <span className="block text-4xl md:text-5xl font-light text-black font-serif mb-2">10<span className="text-2xl align-top">+</span></span>
                            <span className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-sans font-bold">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-light text-black font-serif mb-2">MBA</span>
                            <span className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-sans font-bold">Education</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Column */}
               <div className="lg:col-span-7 flex flex-col justify-center relative z-10 h-auto min-h-[400px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
                      <div className="bg-white p-8 border border-neutral-100 shadow-sm flex flex-col h-full">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-8 font-sans border-b border-black pb-4">
                           {content.educationTitle}
                        </h3>
                        <div className="flex flex-col gap-8 flex-1">
                            {content.education.map((edu, i) => (
                              <div key={i} className="flex flex-col">
                                  <span className="font-bold text-lg text-black leading-tight mb-2 font-serif">{edu.school}</span>
                                  <div className="flex flex-wrap gap-2 items-center">
                                    <span className="text-sm text-neutral-500 font-sans">{edu.degree}</span>
                                    {edu.year && <span className="text-[9px] text-black font-bold bg-neutral-100 px-2 py-0.5 font-sans uppercase">{edu.year}</span>}
                                  </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="bg-stone-900 text-white p-8 shadow-2xl flex flex-col h-full">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-8 font-sans border-b border-white/20 pb-4">
                            {content.certificationTitle}
                        </h3>
                        <div className="flex flex-col gap-6 flex-1 overflow-y-auto custom-scrollbar">
                            {content.certifications.map((cert, i) => (
                              <div key={i} className="group">
                                  <div className="flex justify-between items-baseline mb-1">
                                    <p className="text-lg font-medium text-white font-serif">{cert.name}</p>
                                  </div>
                                  <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-sans">{cert.detail}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-8 lg:left-24 flex gap-3 z-30">
        <button 
          onClick={() => { setActiveSlide(0); setIsAutoPlay(false); }}
          className={`h-2 transition-all duration-300 ${activeSlide === 0 ? 'w-8 bg-black' : 'w-2 bg-neutral-300'}`}
          aria-label="Go to slide 1"
        />
        <button 
          onClick={() => { setActiveSlide(1); setIsAutoPlay(false); }}
          className={`h-2 transition-all duration-300 ${activeSlide === 1 ? 'w-8 bg-black' : 'w-2 bg-neutral-300'}`}
          aria-label="Go to slide 2"
        />
      </div>
    
    </section>
  );
};

export default Hero;