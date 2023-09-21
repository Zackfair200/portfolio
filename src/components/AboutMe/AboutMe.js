import { useState } from 'react';
import hero from '../../assets/jandro.png';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  /*{
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },*/
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  /*{
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com',
  },
  {
    name: 'Materialize',
    img: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
    href: 'https://materializecss.com/',
  },
  {
    name: 'React Native',
    img: 'https://reactnative.dev/img/header_logo.svg',
    href: 'https://reactnative.dev/',
  },
  {
    name: 'Redux',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    href: 'https://redux.js.org',
  },
  {
    name: 'Webpack',
    img: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
    href: 'https://webpack.js.org',
  },*/
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy</h2>
      <p>
        Mi nombre es Alejandro y soy un apasionado desarrollador de aplicaciones
        web. <br />
        <br />
        He perfeccionado mis habilidades en el análisis de datos, gestión de
        proyectos y resolución de problemas complejos, lo que me permite abordar
        desafíos con un enfoque meticuloso en la eficiencia y calidad.
      </p>
      <h2>Trayectoria</h2>
      <p>
        Cuento con más de 10 años de experiencia en el sector farmacéutico y más
        de 2 años centrados en el desarrollo deaplicaciones web.
        <br /> <br />
        Busco ampliar mis conocimientos en la programación y obtener aún mas
        experiencia formando parte de un productivo y exitoso equipo. Tengo
        habilidad para adaptarme rapido a otras tecnologias. Estoy buscando un
        proyecto adecuado a mis habilidades que me permita desarrollarme, que me
        ponga nuevos retos y nuevos aprendizajes.
        <br /> <br />A través de mi naturaleza extrovertida y mi habilidad en
        inglés, he construido relaciones sólidas con colegas y clientes
        internacionales, creyendo firmemente que la comunicación efectiva es la
        clave para lograr resultados sobresalientes.
      </p>
      <h2>Intereses y Hobbies</h2>
      <p>
        Interesado en aprender más sobre testing, y desarrollo de aplicaciones
        con herramientas como React y Firebase.
        <br /> En mi tiempo libre me gusta pasar tiempo de calidad con amigos y
        familia jugando a juegos de mesa, me considero un amante de los
        videojuegos y de la cocina.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Grupo Studio | CF Grado superior desarrollo web (2020-2022)</h2>
      <h4>(IES Serpis)</h4>
      <p>
        Durante mis estudios en la obtuve capacidad de responsabilidad, esfuerzo
        y sacrificio, forme parte de equipos de trabajo y trabaje en un proyecto
        final centrado en el desarrollo backend.
      </p>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificados y cursos</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="Certificado GIT"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.git}
          >
            • Curso de GIT - Udemy
          </a>
        </li>
        {/*  <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.IntroduccionAPIRest}
          >
            • Escuela Js - Platzi - 20%
          </a>
        </li> */}
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        DESCARGA CV
      </button>
    </>
  );
}
function Experience() {
  return (
    <>
      <h2>Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        Timeline...
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Actualizado el 15 de Septiembre, 2023</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="Alejandro Ponce Profile"
              className={styles.img}
            />
            <h1>{'<Alejandro Ponce/>'}</h1>
            <p>Desarrollo software con 🥛 y 🍪</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  formación
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificados"
                >
                  Certificados
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiencia
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
