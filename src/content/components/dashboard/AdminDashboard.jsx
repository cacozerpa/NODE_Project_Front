import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "./Perfil";
import Pedidos from "../Pedidos/Pedidos";
import "../../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="contenedor-dashboard">
      <div className="contenedor-info-perfil"> 
        <Perfil admin={true} />
      </div>
      <div className="contenedor-contenido-dashboard">
        <Pedidos />
        <Soporte />
      </div>
    </div>
  );
}

export default Dashboard;
