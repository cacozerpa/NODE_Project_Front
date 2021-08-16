import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Productos from "./productosDetalle";
import "../../styles/tienda.css";

import getOrderDetails from '../../../fetchConnections/getOrderDetails'; 

function DetallesPedido() {
  const {id} = useParams();

  const [productos, setProductos] = useState([0]);
  
  const getDetails = async () => {
    const products = await getOrderDetails(id);
    setProductos(products);
    console.log(products)
  }
  
  useEffect(()=> {
    getDetails();
  }, [])


  return (
    <>
      <div className="contenedor-dashboard">
        <div className="contenedor-info-perfil">
          <Perfil />
        </div>
        <div className="contenedor-contenido-dashboard">
          <h1>Detalles del pedido #{productos[0].idorder}</h1>
          <h2>Total: ${productos[0].total} </h2>
          <hr className="tienda-hr" />
          <div className="tienda">
            <Productos key={productos.id} productos={productos} />
          </div>
          <Soporte />
        </div>
      </div>
    </>
  );
}

export default DetallesPedido;