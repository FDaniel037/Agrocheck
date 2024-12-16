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
          Nuestro equipo está formado por estudiantes de Ingeniería Agroindustrial apasionados por ayudar a las personas que lo necesitan.
          Estudiantes de la Universidad Nacional del Santa,
        </p>
      </section>

      {/* Contenedor principal */}
      <section className="grid-container">
        {/* Primera fila */}
        <div className="profile">
          <img src={portrait1} alt="Estudiante 1" className="portrait" />
          <br />
          <h2><b>Cervera Julca Luis Eusebio</b></h2>
          <br />  
          <p>Estudiante de Ing. Agroindustrial en la Universidad Nacional del Santa con nivel de inglés intermedio concluido.</p> 
          <br />  
          <p>Con la capacidad de adapte a distintas situaciones que se puedan presentar en el trabajo generando un buen ambiente 
            laboral con mis compañeros, al igual que poseo la vocación por el servicio de atención al cliente brindando un trato amable y grato. </p>
            <br /> 
            <p>Por último, poseo Ofimática a nivel avanzado, con conocimientos puntuales del servicio de Microsoft Office.</p>
        </div>
        <div className="side-image-container">
          <img src={sideImage} alt="Logo UNS" className="side-image" />
        </div>
        <div className="profile">
          <img src={portrait3} alt="Estudiante 3" className="portrait" />
          <br />
          <h2><b>Angie Lucero Ponce Vásquez</b></h2>
          <br />
          <p>Estudiante de décimo ciclo de Ingeniería Agroindustrial en la Universidad Nacional del Santa, cuento con un nivel 
            intermedio de inglés y certificado en SAP PP (Planificación de Producción). </p>  
          <br />
          <p>Además con conocimientos en procesos de calidad, 
            buenas prácticas de manufactura (BPM) y control de inventarios. Manejo Microsoft Office y me destaco por la responsabilidad, 
            adaptabilidad y compromiso. Poseo habilidades para el trabajo en equipo  mostrando siempre respeto y disposición para aprender.</p>
        </div>

        {/* Segunda fila */}
        <div className="profile">
          <img src={portrait4} alt="Estudiante 4" className="portrait" />
          <br />
          <h2><b>María Guadalupe Cortez Salas</b></h2>
          <br />
          <p>Estudiante de Ingeniería Agroindustrial de la Universidad Nacional del Santa, cuento con la capacidad de adaptarme a nuevos 
            retos que generen un ambiente laboral grupal, fomentando un ambiente armonioso, además de tener un trato amigable y respetuoso 
            con las demás personas. </p>
          <br />
          <p>Cuento con nivel intermedio de ingles, además de una certificación en Ofimática empresarial, manejando 
            las distintas herramientas de Microsoft Office, así desarrolle experiencia dentro del área de control de calidad en una empresa 
            Agroindustrial, asegurando los estándares de los productos, así mismo empleando las buenas prácticas de manufactura (BPM) y 
            conocimiento en control de inventarios.</p>
        </div>
        <div className="profile">
          <img src={portrait2} alt="Estudiante 2" className="portrait" />
          <br />
          <h2><b>Maza Valverde Xiomi Romina</b></h2>
          <br />
          <p>Estudiante de Ingeniería Agroindustrial en la Universidad Nacional del Santa, destaco por mi capacidad de adaptación 
            y promoción de entornos laborales eficientes. </p>
            <br />
            <p>Poseo experiencia en atención al cliente, nivel intermedio certificado en inglés, 
            especialización en Ofimática Empresarial y competencias en control de calidad en el sector agroindustrial, enfocándome 
            en la evaluación de procesos productivos y el cumplimiento de estándares.</p>
            <br /> 
            <p>Mi orientación está dirigida a la optimización 
            de procesos y la adherencia a normativas, asegurando actividades operativas seguras y eficientes.</p>
        </div>
        
        <div className="profile">
          <img src={portrait5} alt="Estudiante 5" className="portrait" />
          <br />
          <h2>Nombre Apellido</h2>
          <p>Estudiante de X ciclo de la carrera de Ingeniería Agroindustrial</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
