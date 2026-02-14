import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const project = {
        title: 'Error Log Classifier',
        description: `Built a machine learning-based system to classify and analyze error logs. 
      Designed preprocessing pipeline for structured log parsing, trained and evaluated classification models, 
      and automated log categorization to reduce manual debugging effort.`,
        githubUrl: 'https://github.com/preetham3127/Error-Log-Classifier-2',
    };

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <div className={styles.projectsGrid} ref={ref}>
                    <motion.div
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.projectFooter}>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
