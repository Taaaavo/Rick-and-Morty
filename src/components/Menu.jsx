import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ auth, handleAuth }) => {
  return (
    <header className="menu">
      <div className="container-logo">
        <img src="src/assets/rick.png" alt="logo" />
        <h2>Rick and Morty</h2>
        <h3>Erik Bonifaz</h3>
      </div>
      <nav className="navbar">
        <Link className="link" to="/">
          {" "}
          Inicio
        </Link>
        <Link className="link" to="/ubicaciones">
          {" "}
          Ubicaciones
        </Link>

        <Link className="link" to="/favoritos2">
          {" "}
          Favoritos
        </Link>
        <button className="sesion-button" onClick={handleAuth}>
          {auth ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
      </nav>
    </header>
  );
};

export default Menu;
