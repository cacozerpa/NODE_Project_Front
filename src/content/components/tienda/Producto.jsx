import React, { useState, useEffect } from "react";
import Modal from "../modal/ProductAdded";

import getProductsFetch from '../../../fetchConnections/getProductsFetch'

function Tienda() {
  const [data, setData] = useState("");
  const [productos, setProductos] = useState([]);

  function showModal(title) {
    setData(title);
    setTimeout(() => {
      setData("");
    }, 3000);
  }
  const getProducts = async () => {
    const products = await getProductsFetch();
    setProductos(products);
  }

  useEffect(()=> {
    getProducts()
  }, [])

  return (
    <>
      {data && <Modal data={data} />}
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
              <div className="pedido-boton">
                <button
                  onClick={() => showModal(product.name)}
                  className="boton-sesion"
                >
                  <h2>Añadir al carrito</h2>
                </button>
              </div>
              <div className="producto-titulo">
                <h4>{product.name}</h4>
                <small className="descripcion-corta">
                  {product.description}
                </small>
              </div>
              <button
                onClick={() => showModal(product.name)}
                className="boton-sesion boton-tlf"
              >
                <h2>Añadir al carrito</h2>
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Tienda;
