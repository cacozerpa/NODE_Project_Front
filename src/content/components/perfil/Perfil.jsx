import React, {useState, useEffect} from "react";

import getUserByIdFetch from "../../../fetchConnections/getUserById";

function Perfil() {

  const [data, setData] = useState('');

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUser =  async () => {
    const resp = await getUserByIdFetch();
    setData(resp);
  }

  useEffect(() => {
    getUser();
  },[])


  return (
    <>
      <form className="contenedor-formulario">
        <div className="titulo-formulario">
          <h1>Registrate</h1>
        </div>
        <div className="area-formulario">
          <input type="text" name="nombre" id="nombre" value={data.name} disabled/>
          <input type="text" name="username" id="username" value={data.username} onChange = {(username) => setUsername(username.target.value)} disabled/>
        </div>
        <div className="area-formulario">
          <input type="email" name="email" value={data.email} onChange = {(email) => setEmail(email.target.value)}/>
        </div>
        <div className="area-formulario">
            
          <input type="password" name="password" value={data.password} onChange = {(password) => setPassword(password.target.value)} disabled/>
        </div>
        <div className="area-formulario">
          <input type="text"  />
        </div>
        <button
        
          className="boton-sesion"
        >
          <h2>Actualizar</h2>
        </button>
      </form>
    </>
  );
}

export default Perfil;