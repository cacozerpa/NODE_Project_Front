import React, { useState } from "react";
import Soporte from "../soporte/Soporte";
import Ingreso from "./IngresoAdmin";
import Registro from "./RegistroAdmin";
import "../../styles/access.css";
function Access() {
  const [form, setForm] = useState(false);
  return (
    <div className="contenedor-inicio">
      <div className="contenedor-contenido-inicio">
        <div className="contenedor-acceso">
          <div className="caja-acceso">
            <div className="botones-formulario">
              <div
                className="formulario-boton"
                style={form ? { background: "#f3f3f3" } : {}}
                onClick={() => {
                  setForm(true);
                }}
              >
                <h2>Ingresa</h2>
              </div>
              <div
                className="formulario-boton"
                onClick={() => {
                  setForm(false);
                }}
                style={form ? {} : { background: "#f3f3f3" }}
              >
                <h2>Registrate</h2>
              </div>
            </div>
            <hr />
            {form ? <Ingreso /> : <Registro />}
          </div>
        </div>
        <Soporte />
      </div>
    </div>
  );
}

export default Access;