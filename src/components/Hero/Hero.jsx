import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.css';

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className={styles.heroSection}>
            <div className="container">
                <motion.div
                    ref={ref}
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.h1 className={styles.heroName} variants={itemVariants}>
                        Preetham Ghorpade
                    </motion.h1>
                    <motion.h2 className={styles.heroTitle} variants={itemVariants}>
                        Aspiring Software Developer | AI/ML Enthusiast
                    </motion.h2>
                    <motion.p className={styles.heroDescription} variants={itemVariants}>
                        I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning,
                        focused on building practical systems, machine learning models, and developer tools
                        that solve real-world problems.
                    </motion.p>
                    <motion.div className={styles.heroButtons} variants={itemVariants}>
                        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                            View Projects
                        </a>
                        <a
                            href="https://github.com/preetham3127"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.btn} ${styles.btnSecondary}`}
                        >
                            GitHub
                        </a>
                        <a href="#contact" className={`${styles.btn} ${styles.btnTertiary}`}>
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
