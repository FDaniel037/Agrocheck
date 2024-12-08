import React from "react";
import "./Login.css";
import logo from "../assets/images/logo AGROCHECK.png";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        {/* Header con logo y texto */}
        <div className="logo-header">
          <img src={logo} alt="Logo AgroCheck" className="logo" />
          <h1 className="green">Agrocheck</h1>
        </div>

        {/* Texto adicional entre el logo y el formulario */}
        <p className="intro-text">Inicia sesión para continuar</p>

        {/* Formulario de inicio de sesión */}
        <form>
          <div className="form-group">
            <label htmlFor="username">Correo Electrónico</label>
            <input
              type="email"
              id="username"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {/* Botón para el inicio de sesión */}
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>

        {/* Sección de "¿Olvidaste tu contraseña?" */}
        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        {/* Sección para crear una cuenta */}
        <div className="create-account">
          <p>
            ¿Aún no tienes una cuenta?{" "}
            <a href="/register" className="register-link">Crea una cuenta</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
