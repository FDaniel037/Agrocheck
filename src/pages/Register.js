import React from "react";
import "./Register.css";
import logo from "../assets/images/logo AGROCHECK.png";

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        {/* Header con logo y texto */}
        <div className="logo-header">
          <img src={logo} alt="Logo AgroCheck" className="logo" />
          <h1 className="green">Agrocheck</h1>
        </div>

        {/* Texto adicional entre el logo y el formulario */}
        <p className="intro-text">Regístrate para acceder a nuestras funciones</p>

        {/* Formulario de registro */}
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Crea una contraseña"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Vuelve a ingresar tu contraseña"
            />
          </div>

          {/* Botón para enviar el formulario */}
          <button type="submit" className="register-button">Crear Cuenta</button>
        </form>

        {/* Sección de enlace a inicio de sesión */}
        <div className="login-link">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="login">Inicia sesión aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
