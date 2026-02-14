import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className={styles.aboutSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    About
                </motion.h2>
                <motion.div
                    ref={ref}
                    className={styles.aboutContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        Preetham is a motivated AI/ML student who enjoys building scalable systems,
                        log analysis tools, and machine learning-based developer utilities. He works
                        with Python, C++, and modern web technologies to create efficient and
                        practical solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
