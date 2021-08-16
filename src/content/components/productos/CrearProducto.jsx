import React, {useState, useEffect} from "react";

import {getRes} from "../../../fetchConnections/setGetRes";
import createProduct from "../../../fetchConnections/createProduct";

function CrearProducto() {
 
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const create = async (e) => {
    e.preventDefault();
    await createProduct(name, price, description, img);

    const response= getRes();
    console.log(response)

    if(response === "Success"){
      alert('Producto Registrado Exitosamente!')
      window.location.assign("/productos");
    }else{
      alert('Error Registrando el producto!');
      window.location.assign("/crearproducto");
    } 
  }

  return (
    <>
      <form onSubmit = {(e) => {e.preventDefault()}}className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
            <small>Nombre</small>
          <input type="text" name="nombre" id="nombre" value={name} onChange = {(name) => setName(name.target.value)}/>
          <small>Precio($)</small>
          <input type="text" name="username" id="username" value={price}  onChange = {(price) => setPrice(price.target.value)}/>
        </div>
        <div className="area-formulario">
          <small>Descrip:</small>
          <input type="text" name="text" value={description} onChange = {(description) => setDescription(description.target.value)}/>
        </div>
        <div className="area-formulario">
          <small>Imagen:</small>
          <input type="text" name="text" value={img} onChange = {(img) => setImg(img.target.value)}/>
        </div>
        <button
          onClick = {create}
          className="boton-sesion"
        >
          <h2>Crear</h2>
        </button>
      </form>
    </>
  );
}

export default CrearProducto;