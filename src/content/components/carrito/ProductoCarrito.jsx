import React, { useState } from "react";
import Modal from "../modal/ProductAdded";

import addItemTocar from "../../../fetchConnections/addItemTocar";
import deleteItem from "../../../fetchConnections/deleteItem";
import {getRes} from '../../../fetchConnections/setGetRes';

function Carrito({productos}) {
  const [data, setData] = useState("");

  function showModal(title) {
    setData(title);
    setTimeout(() => {
      setData("");
    }, 3000);
  }
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
          setTimeout(()=>{
            window.location.assign('/carrito')
          }, 1500)
        }else{
          alert('Error!')
        }
        }

        const deleteitem = async ()=> {
            await deleteItem(product.id)
            const response = getRes()
            if(response === 'Success'){
                alert('Producto Eliminado!')
                window.location.assign('/carrito')

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
                  background: `url(${product.img})`,
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
                <small>
                  Cantidad: {product.qty}
                  
                </small>
                <small>
                Precio/und: ${product.price}
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