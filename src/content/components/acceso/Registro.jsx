import React, {useState} from "react";

import registerFetch from "../../../fetchConnections/registerFetch";
import { getRes } from "../../../fetchConnections/setGetRes";

function Registro() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registro = async(e) => {
    e.preventDefault();
    await registerFetch(name, username, email, password);

    const response= getRes();
    console.log(response)

    if(response === "Success"){
      alert('Usuario Registrado Exitosamente!')
      window.location.assign("/acceso");
    }else{
      alert('Error Registrando el usuario!');
      window.location.assign("/acceso");
    } 
  }

  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange = {(name) => setName(name.target.value)}
/>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
            onChange = {(username) => setUsername(username.target.value)}
          />
        </div>
        <div className="area-formulario">
          <input type="email" name="email" placeholder="Correo Electronico" onChange = {(email) => setEmail(email.target.value)}
/>
        </div>
        <div className="area-formulario">
          <input type="password" name="password" placeholder="Contraseña" onChange = {(password) => setPassword(password.target.value)}/>
        </div>
        <div className="area-formulario">
          <input type="password" placeholder="Confirmar Contraseña" />
        </div>
        <button
          onClick={registro}
          className="boton-sesion"
        >
          <h2>Registrate</h2>
        </button>
      </form>
    </>
  );
}

export default Registro;
