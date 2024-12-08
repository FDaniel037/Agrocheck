import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo AGROCHECK.png"; // Asegúrate de que esta ruta existe
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Contenedor con el logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo Agrocheck" className="logo" />
        </Link>
      </div>

      {/* Menú de navegación */}
      <nav className="nav">
        <ul>
          <li>
            <Link to="/about" className="nav-link">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
