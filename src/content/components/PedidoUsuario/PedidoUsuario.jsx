import React from "react";
import "../../styles/pedidos.css";
import Check from "../../images/tick.svg";
import X from "../../images/letra-x.svg";
function Pedidos() {
  const data = [
    {
      id: "1",
      usuario: "usuario",
      ubicacion: "ubicacion",
      status: "en camino",
      hora: "11:46",
    },
    {
      id: "2",
      usuario: "usuario",
      ubicacion: "ubicacion",
      status: "en camino",
      hora: "11:46",
    },
    {
      id: "3",
      usuario: "usuario",
      ubicacion: "ubicacion",
      status: "en camino",
      hora: "11:46",
    },
    {
      id: "4",
      usuario: "usuario",
      ubicacion: "ubicacion",
      status: "en camino",
      hora: "11:46",
    },
    {
      id: "5",
      usuario: "usuario",
      ubicacion: "ubicacion",
      status: "en camino",
      hora: "11:46",
    },
  ];
  return (
    <div className="pedidos">
      {data.map((data) => {
        return (
          <div className="caja-pedido">
            <div className="pedido-info">
              <h1>{data.id}</h1>
              <small>
                Usuario: <b>{data.usuario}</b>
              </small>
              <small>
                Ubicaion: <b>{data.ubicacion}</b>
              </small>
              <small>
                Estatus: <b>{data.status}</b>
              </small>
              <small>
                Hora del pedido: <b>{data.hora}</b>
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pedidos;