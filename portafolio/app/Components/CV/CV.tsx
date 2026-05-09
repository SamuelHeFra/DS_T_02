import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

export default function CV() {
    return (
        <>
        {/* ========== CV SECTION ========== */}
        <section className={`${styles.cv} ${styles.section}`} id="cv">
            <div className={styles.container}>
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className={styles.section__subtitle}>Conoce mi trayectoria</span>
                        <h2 className={styles.section__title}>Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <Link href="https://www.overleaf.com/gallery/tagged/cv" className={`${styles.btn} ${styles['btn--primary']} ${styles['btn--large']}`}>
                                <i className={`${styles.fas} ${styles['fa-download']}`}></i> Descargar CV
                            </Link>
                            <Link href="https://samuelhefra.github.io/Lab05NombreCompleto-/" className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--large']}`}>
                                <i className={`${styles.fas} ${styles['fa-eye']}`}></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>
                        <div className={styles['cv__social-links']}>
                            <Link href="https://www.linkedin.com/in/samuel-herrera-franco-1339193b0/" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <i className={`${styles.fab} ${styles['fa-linkedin-in']}`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>@samuel-herrera</span>
                                </div>
                                <i className={`${styles.fas} ${styles['fa-arrow-right']} ${styles.social__arrow}`}></i>
                            </Link>
                            
                            <Link href="https://github.com/SamuelHeFra" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <i className={`${styles.fab} ${styles['fa-github']}`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>@SamuelHeFra</span>
                                </div>
                                <i className={`${styles.fas} ${styles['fa-arrow-right']} ${styles.social__arrow}`}></i>
                            </Link>
                            
                            <Link href="mailto:samuelherrera11fh1@gmail.com" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <i className={`${styles.fas} ${styles['fa-envelope']}`}></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>samuelherrera11fh1@gmail.com</span>
                                </div>
                                <i className={`${styles.fas} ${styles['fa-arrow-right']} ${styles.social__arrow}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}