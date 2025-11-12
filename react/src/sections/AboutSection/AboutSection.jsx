import styles from './AboutSection.module.css';

// The key to a long scroll is setting a unique ID on the section element.
const AboutSection = () => {
  return (
    <section id="about" className="section-full-height">
      <h2>About me</h2>

      <h3 className={styles.altTextColour}>A decade of business context, engineered for full-stack</h3>

      <p className={styles.aboutP}>With <b>ten years of experience</b> within the business, I bring a depth of organizational and domain context that informs every technical decision. My career has focused on delivering effective business solutions, 
      initially leveraging the agility of the Power Platform for rapid deployment. I am now executing a focused transition to full-stack engineering to meet the complex, custom needs of our organization. </p>

    <h3 className={styles.altTextColour}>End-to-end project ownership</h3>

<p className={styles.aboutP}>I approach every project with a comprehensive, end-to-end mindset:</p>

<ul className={styles.aboutUL}>
  <li><b>Discovery & Design</b>: I am proficient in <b>requirement gathering</b> and translating business needs into actionable technical and visual designs, including wireframing and prototyping using tools like <b>Figma</b>.</li>
  <li><b>Deployment & Delivery</b>: I have managed the complete delivery cycle, ensuring successful <b>deployment</b> and adoption.</li>
</ul>

<h3 className={styles.altTextColour}>Core technical expertise</h3>

<p className={styles.aboutP}>I am building my solutions based on <b>modern, scalable architecture principles</b> and possess hands-on skills across the following key technologies:</p>
  <ul className={styles.aboutUL}>
    <li><b>Frontend</b>: Proficient in <b>HTML</b> and <b>CSS</b>, with production experience in building component-based user interfaces using <b>React</b> and efficient toolchains like <b>Vite</b>.</li>

    <li><b>Backend Logic</b>: Experience with <b>JavaScript</b> and <b>Node.js/Express</b>, having successfully developed secure API logic and proxy servers to protect sensitive keys and implement business rules.</li>

    <li><b>Data & Structure</b>: Strong background in data modeling and query optimization with <b>SQL</b>, specifically leveraging <b>Azure SQL Database</b>.</li>
  </ul>

<h3 className={styles.altTextColour}>Education & Professional Development</h3>

<p className={styles.aboutP}>My knowledge is built on a strong foundation of both academic achievement and applied, industry-focused apprenticeship experience as well as self-taught areas of interest:</p>
<ul className={styles.aboutUL}>
  <li><b>BSc (Hons) Digital and Technology Solutions Professional (2:1)</b>: Completed a Level 6 Degree Integrated Apprenticeship focusing on full-stack technology solutions, business transformation, and core computer science concepts.</li>

  <li><b>Data Science and Analytics (Level 4 apprenticeship)</b>: Achieved a Level 4 Apprenticeship specializing in data analytics concepts and tools. This included hands-on experience using Power BI to clean, model, and visualize complex datasets as well as applied Python for data manipulation and automating analytical tasks.</li>

</ul>

<p className={styles.aboutP}>Certifications & Continuous Learning:</p>

<ul className={styles.aboutUL}>
  <li><b>Microsoft Certified</b>: Holds certifications in Power Platform Fundamentals and Azure Fundamentals.</li>

  <li><b>Web Development Expertise</b>: Dedicated over a year to self-teaching modern web development, mastering component-based architectures (like React), state management, and responsive design principles.</li>
</ul>

<p className={styles.aboutP}><b>My holistic experience ensures I combine technical excellence with deep business understanding, enabling me to design, build, and deploy robust applications that solve real-world problems.</b></p>


    </section>
  );
};

export default AboutSection;