import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const contacts = [
        {
            label: 'Email',
            value: 'ghorpadepreetham31@gmail.com',
            href: 'mailto:ghorpadepreetham31@gmail.com',
        },
        {
            label: 'Phone',
            value: '+91 8549021228',
            href: 'tel:+918549021228',
        },
        {
            label: 'GitHub',
            value: 'github.com/preetham3127',
            href: 'https://github.com/preetham3127',
            external: true,
        },
    ];

    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact
                </motion.h2>
                <div className={styles.contactContent} ref={ref}>
                    <div className={styles.contactInfo}>
                        {contacts.map((contact, index) => (
                            <motion.div
                                key={contact.label}
                                className={styles.contactItem}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <span className={styles.contactLabel}>{contact.label}:</span>
                                <a
                                    href={contact.href}
                                    className={styles.contactLink}
                                    target={contact.external ? '_blank' : undefined}
                                    rel={contact.external ? 'noopener noreferrer' : undefined}
                                >
                                    {contact.value}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
