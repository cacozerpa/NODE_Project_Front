import React, {useState, useEffect} from "react";
import User from "../../images/user-image.jfif";
import UserButtonResume from "../../images/resume.svg";
import UserButtonSettings from "../../images/settings.svg";
import UserButtonLogout from "../../images/logout.svg";
import "../../styles/dashboard.css";

import logoutFetch from "../../../fetchConnections/logoutFetch";
import getUserByIdFetch from "../../../fetchConnections/getUserById";
import {getRes} from '../../../fetchConnections/setGetRes';

function Perfil({ admin }) {
  const [data, setData] = useState('');

  const getUser =  async () => {
    const resp = await getUserByIdFetch();
    setData(resp);
  }
  
  const logout = async () => {
    await logoutFetch();
    const response = getRes();

    if(response === "Success"){
      alert('Sesion Cerrada Exitosamente!');
      window.location.assign('/');
    }
  }

  const profile = () => {
    window.location.assign('/perfil')
  }

  useEffect(() => {
    getUser();
  },[])

  return (
    <div className="caja-perfil">
      <img src={User} alt="" className="imagen-perfil"/>
      <h5>Bienvenido, {data.username}!</h5>
      {admin && <small>Admin</small>}
      <div className="caja-botones-perfil">
        <div className="caja-botones-perfil-item">
          <img src={UserButtonResume} alt="" onClick={profile}/>
        </div>
        <div className="caja-botones-perfil-item">
          <img src={UserButtonLogout} alt="" onClick={logout}/>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
