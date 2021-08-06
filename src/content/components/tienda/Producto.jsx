import React, { useState } from "react";
import Modal from "../modal/ProductAdded";
function Tienda() {
  const [data, setData] = useState("");
  function showModal(title) {
    setData(title);
    setTimeout(() => {
      setData("");
    }, 3000);
  }
  const productos = [
    {
      titulo: "Producto 1",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 2",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 3",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 4",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 5",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 6",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 7",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 8",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 9",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 10",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 11",
      imagen: "https://picsum.photos/200",
    },
    {
      titulo: "Producto 12",
      imagen: "https://picsum.photos/200",
    },
  ];
  return (
    <>
      {data && <Modal data={data} />}
      {productos.map((data) => {
        return (
          <>
            <div className="tienda-producto">
              <div
                className="producto-imagen"
                style={{
                  background: `url(${data.imagen})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f3f3f3",
                  backgroundSize: "contain",
                }}
              ></div>
              <div className="pedido-boton">
                <button
                  onClick={() => showModal(data.titulo)}
                  className="boton-sesion"
                >
                  <h2>Añadir al carrito</h2>
                </button>
              </div>
              <div className="producto-titulo">
                <h4>{data.titulo}</h4>
                <small className="descripcion-corta">
                  Lorem ipsum dolor sit amet consectetur
                </small>
              </div>
              <button
                onClick={() => showModal(data.titulo)}
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
