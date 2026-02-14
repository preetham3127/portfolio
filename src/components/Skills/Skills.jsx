import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'CSS'],
        },
        {
            title: 'Machine Learning',
            skills: ['Scikit-learn', 'Model Evaluation'],
        },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code'],
        },
        {
            title: 'Concepts',
            skills: ['Data Structures', 'Algorithms', 'Log Analysis'],
        },
    ];

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Skills
                </motion.h2>
                <div className={styles.skillsGrid} ref={ref}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={styles.skillCategory}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -3, transition: { duration: 0.3 } }}
                        >
                            <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                            <ul className={styles.skillList}>
                                {category.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
