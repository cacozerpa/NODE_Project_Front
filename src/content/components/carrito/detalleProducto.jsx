import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

import getItem from '../../../fetchConnections/getItemDetail';
import updateItem from "../../../fetchConnections/updateItem";
import {getRes} from '../../../fetchConnections/setGetRes';

function Detalle() {

  const {id} = useParams();

  const [data, setData] = useState({});
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');

  const getDetail = async () => {
    const resp = await getItem(id);
    setData(resp)
  }

  const update = async () => {
    await updateItem(id, qty);

    const response = getRes();

    if(response === 'Success'){
      alert('Item Actualizado!')
      window.location.assign('/carrito');
    }else{
      alert('Error Actualizado Item!');
    }
  }
  
  useEffect(() => {
      getDetail();
  },[])

  useEffect(() => {
      console.log(data)
    setName(data.name);
    setPrice(data.price)
    setQty(data.qty)
  },[data])
  

  return (
    <>
      <form onSubmit = {(e) => {e.preventDefault()}}className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          Nombre:
          <input type="text" name="nombre" id="nombre" value={name} disabled/>
          Precio$: 
          <input type="text" name="username" id="username" value={price}  disabled/>
          Cantidad:
          <input type="text" name="email" value={qty} onChange = {(qty) => setQty(qty.target.value)}/>
        </div>
        <button
          onClick = {update}
          className="boton-sesion"
        >
          <h2>Actualizar</h2>
        </button>
      </form>
    </>
  );
}

export default Detalle;