// ProjectCard.jsx

import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div 
            className={styles.projectCard}
            onClick={() => onClick(project.id)} // Pass the ID to the parent
        >
            <img className={styles.cardImage} src={project.image} alt={project.title} />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardSummary}>{project.summary}</p>
        </div>
    );
};

export default ProjectCard;