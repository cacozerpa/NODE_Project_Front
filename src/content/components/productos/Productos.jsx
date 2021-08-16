import React, { useState, useEffect } from "react";
import Modal from "../modal/ProductAdded";

import getProductsFetch from '../../../fetchConnections/getProductsFetch'


function VistaProductos() {
  const [data, setData] = useState("");
  const [productos, setProductos] = useState([]);

  
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
        
      const goToDetails = async () => {
        window.location.assign('/detallesproducto/' + product.id);
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
              <div className="pedido-boton">
                <button
                  onClick={goToDetails}
                  className="boton-sesion"
                >
                  <h2>Ver Detalles</h2>
                </button>
              </div>
              <div className="producto-titulo">
                <h4>{product.name}</h4>
                <small className="descripcion-corta">
                  {product.description}
                </small>
                <small className="descripcion-corta">
                  Precio: ${product.price}
                </small>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default VistaProductos;