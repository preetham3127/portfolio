import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Education.module.css';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="education" className={styles.educationSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Education
                </motion.h2>
                <div className={styles.educationContent}>
                    <motion.div
                        ref={ref}
                        className={styles.educationItem}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -3, transition: { duration: 0.3 } }}
                    >
                        <h3 className={styles.educationInstitution}>
                            Medhavi Skills University
                        </h3>
                        <p className={styles.educationDegree}>Bachelor of Technology in AI/ML</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
