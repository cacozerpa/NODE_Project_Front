import React, { useState, useEffect } from "react";
import "../../styles/pedidos.css";
import getUsers from "../../../fetchConnections/getUsers";

function Pedidos() {
  const [users, setUsers] = useState([]);

  const getAllUsers= async () => {
    const response = await getUsers();
    setUsers(response);
  }

  useEffect(()=>{
    getAllUsers()
  },[])

  return (
    <div className="pedidos">
      {users.map((data) => {
    
        const toDetails = () => {
          window.location.assign('/detallesusuario/' + data.id)
        }
        return (
          <div className="caja-pedido" key={data.id}>
            <div className="pedido-info" >
              <h1>{data.username}</h1>
              <small>
                ID: <b>{data.id}</b>
              </small>
              <small>
                Nombre: <b>{data.name}</b>
              </small>
              <small>
                Email: <b>{data.email}</b>
              </small>
              <small>
                Direccion: <b>{data.direccion}</b>
              </small>
              <small>
                Role: <b>{data.role}</b>
              </small>
            </div>
            <div className="pedido-botones">
              <button onClick={toDetails}>
                <h2>Ver Detalles</h2>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pedidos;
