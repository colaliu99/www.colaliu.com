
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Lifestyle from './components/Lifestyle';
import Footer from './components/Footer';
import { CONTENT, PROFILE_IMAGE } from './constants';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const content = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <Hero content={content.hero} imageSrc={PROFILE_IMAGE} />
      <Services content={content.services} />
      <Stats content={content.stats} />
      <Portfolio content={content.portfolio} />
      <Experience content={content.experience} />
      <Lifestyle content={content.lifestyle} />
      <Footer content={content.contact} />
    </div>
  );
}

export default App;
