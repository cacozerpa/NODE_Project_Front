import React, {useState, useEffect} from "react";

import {getRes} from "../../../fetchConnections/setGetRes";
import getUserByIdFetch from "../../../fetchConnections/getUserById";
import updateUser from "../../../fetchConnections/updateUser";

function Perfil() {

  const [data, setData] = useState({});
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  
  const update = async () => {

      await updateUser(email);

      const response= getRes();
      console.log(response)
  
      if(response === "Success"){
        alert('Usuario Actualizado Exitosamente!')
        window.location.assign("/dashboard");
      }else{
        alert('Error Actualizando el usuario!');
      } 
  }

  const getUser =  async () => {
    const resp = await getUserByIdFetch();
    setData(resp);
  }

  useEffect(() => {
    getUser();
  },[])

  useEffect(() => {
      console.log(data)
    setEmail(data.email);
    setName(data.name)
    setUsername(data.username)
    setPassword(data.password);
    setDireccion(data.direccion)
  },[data])
  

  return (
    <>
      <form onSubmit = {(e) => {e.preventDefault()}}className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="nombre" value={name} disabled/>
          <input type="text" name="username" id="username" value={username}  disabled/>
        </div>
        <div className="area-formulario">
          <input type="email" name="email" value={email} onChange = {(email) => setEmail(email.target.value)}/>
        </div>
        <div className="area-formulario">
            
          <input type="password" name="password" value={password} disabled/>
        </div>
        <div className="area-formulario">
          <input type="text" name="direccion" value={direccion} disabled/>
        </div>
        <button
          onClick={update}
          className="boton-sesion"
        >
          <h2>Actualizar</h2>
        </button>
      </form>
    </>
  );
}

export default Perfil;