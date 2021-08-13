import React, {useState, useEffect} from "react";
import Soporte from "../soporte/Soporte";
import Perfil from "../dashboard/Perfil";
import Productos from "./ProductoCarrito";
import "../../styles/tienda.css";

import createOrder from '../../../fetchConnections/createOrder';
import getCar from "../../../fetchConnections/getCar";
import { getRes } from '../../../fetchConnections/setGetRes';

function Carrito() {
  
  const [productos, setProductos] = useState([]);

  const order = async () => {
    console.log(total)
    await createOrder(total);
    const response = getRes();

    if(response === 'Success'){
      alert('Orden Creada!')
      window.location.assign('/dashboard')
    }else{
      alert('Error!');
    }
  }

  
  const getItems = async () => {
    const products = await getCar();
    setProductos(products);
  }

  useEffect(()=> {
    getItems();
  }, [])

  const total = productos.reduce((prev, current) => prev + current.price * current.qty,0);

  return (
    <>
      <div className="contenedor-dashboard">
        <div className="contenedor-info-perfil">
          <Perfil />
        </div>
        <div className="contenedor-contenido-dashboard">
          <h1>Carrito</h1>
          <small className="tienda-lorem">
            Aqui podras ver los productos que tienes actualmente en tu carrito!
          </small>
          <h2>Total: ${total}</h2>
          <hr className="tienda-hr" />
          <div className="tienda">
            <Productos productos={productos}/>
          </div>
          <div className='orden-boton'>
            <button className='boton-sesion' onClick={order}>
              <h2>Crear Pedido</h2>
            </button>
          </div>
          <Soporte />
        </div>
      </div>
    </>
  );
}

export default Carrito;