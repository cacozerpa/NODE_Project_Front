import React, {useState, useEffect} from "react";
import "../../styles/pedidos.css";
import getUserOrders from '../../../fetchConnections/getUserOrders';

function Pedidos() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await getUserOrders();
    setOrders(response);
  }
  useEffect(()=>{
    getOrders();
  },[])


  return (
    <div className="pedidos">
      {orders.map((data) => {

        const goToDetails = () => {
          window.location.assign(`/detalles` + '/' + data.order_id)
        }
        return (
          <div className="caja-pedido">
            <div className="pedido-info">
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
            <button className='sesion-boton'onClick={goToDetails}>
              <h2>Ver Detalles</h2>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Pedidos;