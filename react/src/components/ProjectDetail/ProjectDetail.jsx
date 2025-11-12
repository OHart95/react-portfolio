// src/components/ProjectsSection/ProjectDetail.jsx
import styles from './ProjectDetail.module.css';

const ProjectDetail = ({ project, onClose }) => {
    // Destructure properties for cleaner JSX
    const { title, fullDesc, techStack, keyLearning, videoPath } = project;

    return (
        <div className={styles.expandedView}> 
            <button className={styles.closeButton} onClick={onClose}>
                &times; Close
            </button>
            
            {/* Reusing the content-container structure for central readability */}
            <div className={styles.detailContent}>
                
                {/* --- HEADER --- */}
                <h1 className={styles.detailTitle}>{title}</h1>
                
                {/* --- TECH STACK --- */}
                <div className={styles.techStackContainer}>
                    <h3 className={styles.techStackTitle}>Core Technologies:</h3>
                    <div className={styles.techStackList}>
                        {/* Map over the techStack array */}
                        {techStack.map(tech => (
                            <span key={tech} className={styles.techBadge}>{tech}</span>
                        ))}
                    </div>
                </div>

                {/* --- FULL DESCRIPTION --- */}
                <p className={styles.fullDescription}>{fullDesc}</p>
                
                <hr className={styles.divider} /> 

                {/* --- VIDEO DEMONSTRATION --- */}
                <h2 className={styles.sectionHeading}>Take a look</h2>
                    <div className={styles.videoWrapper}>
                        {/* Conditional Logic: Check if videoPath is defined */}
                        {project.videoPath ? (
                            // --- Scenario 1: Video is present (Render full player) ---
                            <video 
                                className={styles.projectVideo} 
                                src={project.videoPath} 
                                // Only include 'controls' and playback attributes if a video is available
                                controls 
                                //autoPlay 
                                //loop 
                                muted 
                                poster={project.image} // Use the thumbnail as a poster image
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            // --- Scenario 2: Video is NOT present (Render static image) ---
                            <img
                                src={project.image} 
                                alt={`Image of ${project.title}`} 
                                className={styles.projectVideo} // Re-use the same class name for consistent styling/sizing
                            />
                        )}
                    </div>
                
                <hr className={styles.divider} /> 
                
                {/* --- KEY LEARNINGS --- */}
                <h2 className={styles.sectionHeading}>Key Learnings</h2>
                
                <div className={styles.keyLearningsGrid}>
                    {/* Map over the complex keyLearning array */}
                    {keyLearning.map((item, index) => (
                        <div key={index} className={styles.learningCard}>
                            <h3 className={styles.learningCategory}>
                                🚀 {item.category}
                            </h3>
                            <p className={styles.learningBody}>{item.body}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default ProjectDetail;