import React from "react";
import "../../styles/modal.css";

function Modal({ data }) {
  return (
    <>
      <div className="modal">{data} Añadido, Reacargue la pagina!!!</div>
    </>
  );
}

export default Modal;
