import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil"
import Pedidos from "../PedidoUsuario/PedidoUsuario";
import "../../styles/dashboard.css";
function Dashboard() {
  return (
    <div className="contenedor-dashboard">
      <div className="contenedor-info-perfil">
        <Perfil/>
      </div>
      <div className="contenedor-contenido-dashboard">
        <Pedidos />
        <Soporte />
      </div>
    </div>
  );
}

export default Dashboard;
