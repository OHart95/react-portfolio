// src/components/HeroSection.jsx
import styles from './HeroSection.module.css';

import ReactLogo from '@/assets/react.svg';
import PersonalAvatar from '@/assets/personalAvatar2.png';
import PowerPlatformLogo from '@/assets/power-platform.svg';
import CSSLogo from '@/assets/CSS3.svg';
import DevopsLogo from '@/assets/devops.svg';
import GITLogo from '@/assets/Git.svg';
import HTML5Logo from '@/assets/HTML5.svg';
import NodeLogo from '@/assets/node.svg';
import VSCodeLogo from '@/assets/vscode.svg';
import AzureSQLLogo from '@/assets/azure-SQL.svg';
import FigmaLogo from '@/assets/figma.svg';
import ViteLogo from '@/assets/vite.svg';

import TechBubble from '@/components/TechBubble/TechBubble.jsx';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton.jsx';

// The key to a long scroll is setting a unique ID on the section element.
const HeroSection = () => {
  return (
    <section id="hero" className={styles.HeroSection}>

      <div className={styles.leftColumn}>

        <h3 className={`${styles.HeroTitleH3} ${styles.textFade} ${styles.fadeDelay1}`}>Hi<b className={styles.fullStop}>.</b></h3>
        <h1 className={`${styles.HeroTitleH1} ${styles.textFade} ${styles.fadeDelay2}`}>I'm <span className={styles.altTextColour}>Oliver</span>,</h1>
        <h3 className={`${styles.HeroTitleH3} ${styles.textFade} ${styles.fadeDelay3}`}>Low code developer and aspiring full stack developer</h3>
        <div className={`${styles.textFade} ${styles.fadeDelay4}`}>
          <PrimaryButton>
            View projects
          </PrimaryButton>
        </div>

      </div>

      <div className={styles.rightColumn}>

        <img className={styles.personalImage} src= {PersonalAvatar}/>
        
      </div>
    
      <div className={styles.skillsGrid}>

          <TechBubble 
              logoSrc={HTML5Logo}
              altText="HTML5" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={CSSLogo}
              altText="CSS3" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={ReactLogo}
              altText="React" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={NodeLogo}
              altText="Node.js" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={AzureSQLLogo}
              altText="Azure SQL database" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={DevopsLogo}
              altText="Azure DevOps" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={GITLogo}
              altText="GIT" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={VSCodeLogo}
              altText="VSCode" 
              bgColor= ""
          />

          <TechBubble 
              logoSrc={ViteLogo}
              altText="Vite.js" 
              bgColor= ""
          />
      </div>

      <div className={styles.portfolioDesc}>
            <p>This portfolio is built using a modern <b>React</b> frontend, optimized with <b>Vite</b> for performance, and uses custom <b>CSS</b> for the responsive, component-based user interface. The contact functionality utilizes a <b>Google Firestore</b> backend for secure, real-time, and serverless data storage.</p>
      </div>
    </section>
  );
};

export default HeroSection;