import React from "react";
import "../../styles/nav.css";
function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="logo-titulo">
          <h1>Logo o Titulo</h1>
        </div>
        <div className="barra-busqueda">
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="links">
          <ul className="lista-links">
            <li className="link">
              <a href="/">Inicio</a>
            </li>
            <li className="link">
              <a href="/">Soporte</a>
            </li>
            <li className="link">
              <a href="/">Perfil</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
