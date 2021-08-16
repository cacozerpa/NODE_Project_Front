import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

import {getRes} from "../../../fetchConnections/setGetRes";
import getUserDetails from "../../../fetchConnections/getUserDetail";
import updateUser from "../../../fetchConnections/adminUpdateUser";
import delUser from "../../../fetchConnections/deleteUser";

function Perfil() {

  const {id} = useParams();

  const [data, setData] = useState({});
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [direccion, setDireccion] = useState('');

  const deletUser = async () => {
      await delUser(id);

      const response = getRes();

      if(response === "Success"){
          alert('Usuario eliminado!')
          window.location.assign('/usuarios');
      }else{
          alert('Error Eliminando Usuario!');
    }
  }
  
  const update = async () => {

      await updateUser(id, name, direccion);

      const response= getRes();
      console.log(response)
  
      if(response === "Success"){
        alert('Usuario Actualizado Exitosamente!')
        window.location.assign("/usuarios");
      }else{
        if(response === "UsernameFail"){
            alert('Usuario en Uso!');
            window.location.assign('/usuarios')  
        }else{
            if(response === "EmailFail"){
                alert('Email en Uso!');
            }else{
                alert('Error Actualizando Usuario!');
            }
      } 
      }
  }

  const getUser =  async () => {
    const resp = await getUserDetails(id);
    setData(resp);
  }

  useEffect(() => {
    getUser();
  },[])

  useEffect(() => {
    setEmail(data.email);
    setName(data.name)
    setUsername(data.username)
    setDireccion(data.direccion)
  },[data])
  

  return (
    <>
      <form onSubmit = {(e) => {e.preventDefault()}}className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="nombre" value={name} onChange = {(name) => setName(name.target.value)}/>
          <input type="text" name="username" id="username" value={username}  disabled/>
        </div>
        <div className="area-formulario">
          <input type="email" name="email" value={email} disabled/>
        </div>
        <div className="area-formulario">
          <input type="text" name="direccion" value={direccion} onChange = {(direccion) => setDireccion(direccion.target.value)}/>
        </div>
        <button
          onClick={update}
          className="boton-sesion"
        >
          <h2>Actualizar</h2>
        </button>
        <button
          onClick={deletUser}
          className="boton-sesion"
        >
          <h2>Eliminar</h2>
        </button>
      </form>
    </>
  );
}

export default Perfil;