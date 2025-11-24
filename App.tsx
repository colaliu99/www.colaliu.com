
import React, { useState } from 'react';
import { CONTENT, PROFILE_IMAGE } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Lifestyle from './components/Lifestyle';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  
  const currentContent = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar lang={lang} setLang={setLang} content={currentContent.nav} />
      
      <main>
        <Hero content={currentContent.hero} imageSrc={PROFILE_IMAGE} />
        <Experience content={currentContent.experience} />
        <Portfolio content={currentContent.portfolio} />
        <Lifestyle content={currentContent.lifestyle} />
        <Stats content={currentContent.stats} />
      </main>

      <Footer content={currentContent.contact} />
    </div>
  );
};

export default App;
