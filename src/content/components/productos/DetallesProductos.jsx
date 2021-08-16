import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

import {getRes} from "../../../fetchConnections/setGetRes";
import getProductDetails from "../../../fetchConnections/getProductDetails";
import updateProduct from "../../../fetchConnections/updateProduct";
import deleteProduct from "../../../fetchConnections/deleteProd";

function DetallesProductos() {
  const {id} = useParams();

  const [data, setData] = useState({});
    
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const update = async () => {

      await updateProduct(id, name, price, description, img);

      const response= getRes();
      console.log(response)
  
      if(response === "Success"){
        alert('Producto Actualizado Exitosamente!')
        window.location.assign("/productos");
      }else{
        alert('Error Actualizando el producto!');
      } 
  }

  const deleteProd = async () => {
    await deleteProduct(id);

    const response = getRes();

    if(response === "Success"){
      alert('Producto eliminado Exitosamente!')
      window.location.assign('/productos');
    }else{
      alert('Error Deleting Product!')
    }
  }

  const getDetails =  async () => {
    const resp = await getProductDetails(id);
    setData(resp);
  }

  useEffect(() => {
    getDetails();
  },[])

  useEffect(() => {
    console.log(data)
    setName(data.name)
    setPrice(data.price)
    setDescription(data.description);
    setImg(data.img)
  },[data])
  
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
          onClick={update}
          className="boton-sesion"
        >
          <h2>Actualizar</h2>
        </button>
        <button 
        onClick={deleteProd}
        className= "boton-sesion">
            <h2>Eliminar</h2>
        </button>
      </form>
    </>
  );
}

export default DetallesProductos;