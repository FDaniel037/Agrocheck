import React, { useState } from "react";
import "./Home.css";
import { ModalForm } from "./ModalForm";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home">
      {/* Banner Section */}
      <header className="banner">
        <div className="banner-button-container">
          {/* Botón "Probar ahora" que muestra el modal */}
          <button className="btn-responsive" onClick={handleOpenModal}>
            Probar ahora
          </button>
        </div>
      </header>

      {/* Sección: Bienvenidos a AgroCheck */}
      <section className="welcome-section">
        <h2>¡Bienvenido a AgroCheck!</h2>
        <p>
          AgroCheck es una plataforma innovadora diseñada para simplificar el uso del OCRA Checklist en tu empresa. Con nuestras herramientas digitales, podrás realizar análisis eficientes de manera intuitiva y profesional.
        </p>
      </section>

      {/* Cards Section */}
      <section className="cards-container">
        <div className="card">
          <h3>¿Qué es el Checklist OCRA?</h3>
          <p>
            Herramienta para evaluar la exposición a movimientos repetitivos y determinar el nivel de riesgo en un entorno de trabajo.
          </p>
        </div>
        <div className="card">
          <h3>¿Cómo funciona?</h3>
          <p>
            Mediante un análisis guiado, el usuario responde una serie de preguntas para identificar movimientos repetitivos y calcular el puntaje de riesgo.
          </p>
        </div>
        <div className="card">
          <h3>Beneficios de usar AgroCheck</h3>
          <p>
            Optimiza la implementación de estrategias de prevención, facilita el análisis en el entorno laboral y mejora la salud de tus empleados.
          </p>
        </div>
      </section>

      {/* Mostrar el Modal solo si el estado es true */}
      {showModal && <ModalForm onClose={handleCloseModal} />}
    </div>
  );
}

export default Home;
