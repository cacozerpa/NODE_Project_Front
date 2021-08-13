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
              <a href="/dashboard">Inicio</a>
            </li>
            <li className="link">
              <a href="/pedidosusuario">Pedidos</a>
            </li>
            <li className="link">
              <a href="/perfil">Perfil</a>
            </li>
            <li className="link">
              <a href="/carrito">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
