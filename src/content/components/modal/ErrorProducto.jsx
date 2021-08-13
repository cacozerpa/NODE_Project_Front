import React from "react";
import "../../styles/modal.css";

function Modal({ data }) {
  return (
    <>
      <div className="modal">Error Añadiendo Producto: {data} </div>
    </>
  );
}

export default Modal;
