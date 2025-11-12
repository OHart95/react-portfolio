// src/hooks/useSectionObserver.js
import { useState, useEffect } from 'react';

const useSectionObserver = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is intersecting the viewport, set it as active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // A 'target' area in the middle of the viewport
        threshold: 0 // We just care about when the element's center crosses the halfway mark
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, [sectionIds]); // Rerun if the section IDs change

  return activeSection;
};

export default useSectionObserver;