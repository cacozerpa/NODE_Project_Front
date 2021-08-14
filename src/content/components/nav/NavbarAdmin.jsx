import React from "react";
import "../../styles/nav.css";
function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="logo-titulo">
          <h1>Distribuidora Negrete C.A.</h1>
        </div>
        <div className="links">
          <ul className="lista-links">
            <li className="link">
              <a href="/admin-dashboard">Inicio</a>
            </li>
            <li className="link">
              <a href="/admin-dashboard">Productos</a>
            </li>
            <li className="link">
              <a href="/dashboard-admin">Usuarios</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
