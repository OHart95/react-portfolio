import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarNav from './components/SidebarNav/SidebarNav';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import ContactSection from './sections/ContactSection/ContactSection';
import useSectionObserver from './hooks/useSectionObserver';

const SECTION_IDS = ['home', 'about', 'projects', 'contact'];

function App() {
  return (

    <div className="main-layout-container">
      
      {/* 1. The Fixed/Sticky Sidebar Navigation */}
      <SidebarNav />

      {/* 2. The Main Scrollable Content Area */}
      <main className="portfolio-content">
        <HeroSection id="home" /> 
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
        {/* Note: Ensure every section has a unique 'id' prop */}
      </main>
    </div>
  );
}

export default App;

ProjectsSection