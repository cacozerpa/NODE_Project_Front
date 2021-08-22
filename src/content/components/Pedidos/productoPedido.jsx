import React, { useState, useEffect } from "react";
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
      {productos.map((product) => {

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
           
              <div className="producto-titulo">
                <h4>{product.name}</h4>
                <small>
                  Cantidad: {product.qty}
                  
                </small>
                <small>
                Precio und: {product.price}Bs
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