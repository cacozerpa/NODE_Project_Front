import React, { useState, useEffect } from "react";
import Modal from "../modal/ProductAdded";
import Error from "../modal/ErrorProducto";

import getCar from "../../../fetchConnections/getCar";
import addItemTocar from "../../../fetchConnections/addItemTocar";
import deleteItem from "../../../fetchConnections/deleteItem";
import {getRes} from '../../../fetchConnections/setGetRes';

function Carrito() {
  const [data, setData] = useState("");
  const [productos, setProductos] = useState([]);

  function showModal(title) {
    setData(title);
    setTimeout(() => {
      setData("");
    }, 3000);
  }

  function showError(title) {
      setData(title);
      setTimeout(() => {
          setData('');
      }, 3000);
  }

  const getItems = async () => {
    const products = await getCar();
    setProductos(products);
  }

  useEffect(()=> {
    getItems();
  }, [])

  return (
    <>
      {data && <Modal data={data} />}
      {productos.map((product) => {

        const additem = async () => {

        await addItemTocar(product.id)
        console.log(product.id)
        const response = getRes();
        if(response === 'Success'){
          showModal(product.name)
        }else{
          showError(product.name)
         }
        }

        const deleteitem = async ()=> {
            await deleteItem(product.id)
            const response = getRes()
            if(response === 'Success'){
                alert('Producto Eliminado!')
            }else{
                alert('Error Eliminando Producto!')
            }
        }

        return (
          <>
            <div key= {product.id} className="tienda-producto">
              <div
                className="producto-imagen"
                style={{
                  background: `black`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f3f3f3",
                  backgroundSize: "contain",
                }}
              ></div>
              <div className = "pedido-boton">
                <button
                onClick = {additem}
                className="boton-sesion"
                 >
                 <h2>Añadir al carrito</h2>
              </button>
              </div>
              <div className="delete-boton">
                <button
                onClick = {deleteitem}
                  className="boton-sesion"
                >
                  <h2>Eliminar Producto</h2>
                </button>
              </div>
              <div className="producto-titulo">
                <h4>{product.name}</h4>
                <small className="descripcion-corta">
                  cantidad: {product.qty}
                </small>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Carrito;