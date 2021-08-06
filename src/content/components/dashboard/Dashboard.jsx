import React from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "./Perfil";
import "../../styles/dashboard.css";
function Dashboard() {
  //   const [form, setForm] = useState(false);
  return (
    <div className="contenedor-dashboard">
      <div className="contenedor-info-perfil">
        <Perfil />
      </div>
      <div className="contenedor-contenido-dashboard">
        <div className="boton-tienda">
          <h1>Ve nuestros Productos y haz tu pedido!</h1>
          <button
            onClick={() => {
              window.location.assign("/tienda");
            }}
            className="boton-sesion"
          >
            <h2>Tienda</h2>
          </button>
        </div>
        <Soporte />
      </div>
    </div>
  );
}

export default Dashboard;
