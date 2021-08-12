import React, {useState, useEffect} from "react";

import {getRes} from "../../../fetchConnections/setGetRes";
import getUserByIdFetch from "../../../fetchConnections/getUserById";
import updateUser from "../../../fetchConnections/updateUser";

function Perfil() {

  const [data, setData] = useState('');
  
  const initialValues = { email:  data.email}

  const [email, setEmail] = useState(initialValues.email);
  
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
  

console.log(email)

  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="nombre" value={data.name} disabled/>
          <input type="text" name="username" id="username" value={data.username}  disabled/>
        </div>
        <div className="area-formulario">
          <input type="email" name="email" value={email} onChange = {(email) => setEmail(email.target.value)}/>
        </div>
        <div className="area-formulario">
            
          <input type="password" name="password" value={data.password} disabled/>
        </div>
        <div className="area-formulario">
          <input type="text" name="direccion" value={data.direccion} disabled/>
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