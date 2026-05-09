import React from 'react';
import styles from './InterestSubjects.module.css';

export default function InterestSubjects() {
    return(
    <>
    {/* ========== INTERESTS & SUBJECTS SECTION ========== */}
        <section className={`${styles.interests} ${styles.section}`} id="interests">
            <div className={styles.container}>
                <div className={styles.section__header}>
                    <span className={styles.section__subtitle}>Lo que me apasiona</span>
                    <h2 className={styles.section__title}>Intereses & Especialidades</h2>
                    <p className={styles.section__description}>
                        Áreas tecnológicas que me entusiasman y en las que busco especializarme
                    </p>
                </div>
                
                <div className={styles.interests__grid}>
                    {/* Card 1 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-code']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Desarrollo Web</h3>
                        <p className={styles.card__description}>
                            Creación de aplicaciones web modernas con tecnologías como 
                            HTML5, CSS3, JavaScript y frameworks actuales.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>HTML/CSS</span>
                            <span className={styles.tag}>JavaScript</span>
                            <span className={styles.tag}>React</span>
                        </div>
                    </article>
                    
                    {/* Card 2 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-shield-halved']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Ciberseguridad</h3>
                        <p className={styles.card__description}>
                            Protección de sistemas y datos, análisis de vulnerabilidades 
                            y mejores prácticas de seguridad informática.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Seguridad Web</span>
                            <span className={styles.tag}>Pentesting</span>
                            <span className={styles.tag}>Redes</span>
                        </div>
                    </article>
                    
                    {/* Card 3 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-brain']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Inteligencia Artificial</h3>
                        <p className={styles.card__description}>
                            Machine Learning, procesamiento de datos y desarrollo de 
                            soluciones inteligentes con Python.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>ML</span>
                            <span className={styles.tag}>Data Science</span>
                        </div>
                    </article>
                    
                    {/* Card 4 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-database']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Bases de Datos</h3>
                        <p className={styles.card__description}>
                            Diseño, administración y optimización de bases de datos 
                            relacionales y NoSQL.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>MySQL</span>
                            <span className={styles.tag}>PostgreSQL</span>
                            <span className={styles.tag}>MongoDB</span>
                        </div>
                    </article>
                    
                    {/* Card 5 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-mobile-screen-button']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Desarrollo Móvil</h3>
                        <p className={styles.card__description}>
                            Creación de aplicaciones móviles nativas y multiplataforma 
                            para Android e iOS.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Flutter</span>
                            <span className={styles.tag}>React Native</span>
                            <span className={styles.tag}>Kotlin</span>
                        </div>
                    </article>
                    
                    {/* Card 6 */}
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}>
                            <i className={`${styles.fas} ${styles['fa-cloud']}`}></i>
                        </div>
                        <h3 className={styles.card__title}>Cloud Computing</h3>
                        <p className={styles.card__description}>
                            Servicios en la nube, arquitecturas escalables y 
                            despliegue de aplicaciones.
                        </p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>AWS</span>
                            <span className={styles.tag}>Azure</span>
                            <span className={styles.tag}>Docker</span>
                        </div>
                    </article>
                </div>
                
                {/* Relevant Subjects */}
                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className={`${styles.fas} ${styles['fa-graduation-cap']}`}></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        <span className={styles.subject}>Programación Orientada a Objetos</span>
                        <span className={styles.subject}>Estructuras de Datos</span>
                        <span className={styles.subject}>Algoritmos</span>
                        <span className={styles.subject}>Redes de Computadoras</span>
                        <span className={styles.subject}>Ingeniería de Software</span>
                        <span className={styles.subject}>Bases de Datos</span>
                        <span className={styles.subject}>Sistemas Operativos</span>
                        <span className={styles.subject}>Desarrollo Web</span>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}