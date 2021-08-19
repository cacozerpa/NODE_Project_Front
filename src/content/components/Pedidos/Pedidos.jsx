import React, { useState, useEffect } from "react";
import "../../styles/pedidos.css";
import getOrders from "../../../fetchConnections/getAllOrders";
import deleteOrder from "../../../fetchConnections/deleteOrder";
import { getRes } from "../../../fetchConnections/setGetRes";

function Pedidos() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const response = await getOrders();
    setOrders(response);
  }

  useEffect(()=>{
    getAllOrders()
  },[])

  return (
    <div className="pedidos">
      <div className="barra-busqueda">
        <input type="text" placeholder="Buscar por usuario"/>
      </div>
      {orders.map((data, key) => {
        const deleteOr = async () => {
          await deleteOrder(data.order_id);
          const response = getRes();

          if(response === 'Success'){
            alert(`Orden ${data.order_id} eliminada!`)
            window.location.assign('/admin-dashboard')
          }
        }
        const toDetails = () => {
          window.location.assign('/detallespedidoadmin/' + data.order_id)
        }
        return (
          <div className="caja-pedido" key={key}>
            <div className="pedido-info" >
              <h1>{data.order_id}</h1>
              <small>
                Usuario: <b>{data.username}</b>
              </small>
              <small>
                Fecha: <b>{data.date}</b>
              </small>
              <small>
                Total: <b>${data.total}</b>
              </small>
            </div>
            <div className="pedido-botones">
              <button onClick={toDetails}>
                <h2>Ver Detalles</h2>
              </button>
              <button onClick = {deleteOr}>
                <h2>Eliminar</h2>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pedidos;
