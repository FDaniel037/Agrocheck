import React from "react";
import "./AboutUs.css";
import portrait1 from "../assets/images/portrait1.jpg";
import portrait2 from "../assets/images/portrait2.jpg";
import portrait3 from "../assets/images/portrait3.jpg";
import portrait4 from "../assets/images/portrait4.jpg";
import portrait5 from "../assets/images/portrait5.jpg";
import sideImage from "../assets/images/side-image.png";

function AboutUs() {
  return (
    <div className="about">
      {/* Introducción */}
      <section className="intro">
        <h1>Conoce Agrocheck</h1>
        <p>
          En Agrocheck, buscamos la implementación del OCRA Checklist de una manera intuitiva y fácil de usar para nuestros usuarios. 
          Nuestro equipo está formado por estudiantes de la Universidad Nacional del Santa, estudiantes de Ingeniería 
          Agroindustrial apasionados por ayudar a las personas que lo necesitan.
        </p>
      </section>

      {/* Contenedor principal */}
      <section className="grid-container">
        {/* Primera fila */}
        <div className="profile">
          <img src={portrait1} alt="Estudiante 1" className="portrait" />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>
        <div className="side-image-container">
          <img src={sideImage} alt="Logo Agrocheck" className="side-image" />
        </div>
        <div className="profile">
          <img src={portrait3} alt="Estudiante 3" className="portrait" />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>

        {/* Segunda fila */}
        <div className="profile">
          <img src={portrait4} alt="Estudiante 4" className="portrait" />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>
        <div className="profile">
          <img src={portrait2} alt="Estudiante 2" className="portrait" />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>
        
        <div className="profile">
          <img src={portrait5} alt="Estudiante 5" className="portrait" />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
