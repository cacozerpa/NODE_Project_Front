import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Productos from "./Productos";
import "../../styles/tienda.css";
function VistaProductos() {
  const goToCreate = () => {
    window.location.assign('/crearproducto')
  }
  return (
    <>
      <div className="contenedor-dashboard">
        <div className="contenedor-info-perfil">
          <Perfil admin ={true}/>
        </div>
        <div className="contenedor-contenido-dashboard">
          <h1>Productos</h1>
          <div className = 'orden-boton'>
            <button onClick = {goToCreate}
            className = 'boton-sesion'>
              <h1> Crear Producto</h1>
            </button>
          </div>
          <hr className="tienda-hr" />
          <div className="tienda">
            <Productos />
          </div>
          <Soporte />
        </div>
      </div>
    </>
  );
}

export default VistaProductos;
