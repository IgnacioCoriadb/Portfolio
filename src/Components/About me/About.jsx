import React from "react";
import styles from "./About.module.css";

const AboutMe = () => {
  return (
    <div>
      {/* <h1 className={styles.aboutMe}>Sobre Mi</h1> */}
      <div className={`container mt-5 ${styles['aboutContainer']} ${styles.container}`}>
        <div className="row">
          <div className={`col-md-12`}>
            <p className={styles['aboutText']}>
            ¡Hola! Soy un apasionado desarrollador de aplicaciones web con una sólida formación y experiencia en el mundo de la programación. Mi viaje comenzó en la Universidad Provincial del Sudoeste, donde me embarqué en la emocionante aventura de la tecnicatura en Desarrollo de Aplicaciones Web.

Durante mi tiempo en la universidad, tuve la oportunidad de sumergirme en una variedad de materias que sentaron las bases de mi conocimiento. Desde los fundamentos de la programación y el diseño web, hasta la programación orientada a objetos y el modelado de software, cada materia me proporcionó las habilidades y el entendimiento necesarios para crecer como profesional en el campo de la tecnología.

A lo largo de mi trayecto académico, también adquirí conocimientos esenciales en sistemas operativos, redes y comunicaciones, así como fundamentos de bases de datos y seguridad en aplicaciones web. No solo se trató de adquirir conocimientos teóricos, sino también de aplicarlos en entornos prácticos a través de talleres y proyectos de desarrollo de aplicaciones.

En el año 2022, culminé mi etapa universitaria con éxito, convirtiéndome en un graduado de la tecnicatura en Desarrollo de Aplicaciones Web. Pero mi sed de aprendizaje no se detuvo ahí. Buscando expandir mis habilidades y conocimientos, me uní al Bootcamp Henry, una experiencia transformadora donde me sumergí en tecnologías de vanguardia como React, Redux, Node.js, Sequelize y PostgreSQL. Esta inmersión en el desarrollo de aplicaciones me permitió no solo aprender nuevas tecnologías, sino también aplicarlas en proyectos prácticos y desafiantes.

Mi viaje en el mundo de la tecnología comenzó incluso antes de la universidad, ya que en 2017 completé el curso de Operador de Informática de Oficina, y al año siguiente, en 2018, tuve la oportunidad de sumergirme en el mundo de la programación a través del Curso Plan 111Mil, donde me familiaricé con el lenguaje Java.

Hoy, con una sólida base educativa y experiencias en la vida real, me encuentro listo para enfrentar nuevos desafíos en el mundo del desarrollo de aplicaciones web. Mi pasión por la tecnología y mi enfoque en el aprendizaje continuo me impulsan a seguir creciendo y contribuyendo al emocionante y en constante evolución campo de la tecnología. ¡Estoy emocionado por lo que el futuro tiene reservado y las oportunidades que vendrán!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
