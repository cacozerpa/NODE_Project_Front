import React, {useState} from "react";

import loginFetch from '../../../fetchConnections/loginFetch';
import {getRes} from '../../../fetchConnections/setGetRes';

function Ingreso() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const log = async(e) => {
    e.preventDefault();
    await loginFetch(username, password);

    const response = getRes();
    console.log(response)

    if(response === "Success") {
      localStorage.setItem('CREDENTIALS', JSON.stringify(username, password));
      alert('Usuario Ingresado Correctamente')
      window.location.assign("/dashboard");
    }else{
      alert('Error en los datos ingresados!');
      window.location.assign('/acceso');
    }
  }
  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Ingresa</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="username" placeholder="Nombre de Usuario" onChange = {(username) => {setUsername(username.target.value)}} />
        </div>
        <div className="area-formulario">
          <input type="password" name="password" placeholder="Contraseña" onChange = {(password) => {setPassword(password.target.value)}} />
        </div>
        <button
          className="boton-sesion"
          onClick={log}
        >
          <h2>Ingresa</h2>
        </button>
      </form>
    </>
  );
}

export default Ingreso;
