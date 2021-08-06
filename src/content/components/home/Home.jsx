import React from "react";
import Soporte from "../soporte/Soporte";
import "../../styles/home.css";
function Home() {
  return (
    <div className="contenedor-inicio">
      <div className="contenedor-contenido-inicio">
        <div className="jumbotron">
          <h1>Distribuidora Negrete C.A. </h1>
          <h5>
            La mejor Distribuidora del Estado Zulia...!
          </h5>
          <button
            onClick={() => {
              window.location.assign("/acceso");
            }}
            className="boton-sesion"
          >
            <h2>Inicia Sesion</h2>
          </button>
        </div>
        <h1 className="titulo-inicio">Nuestros Servicios</h1>
        <div className="servicios">
          <div className="servicios-elemento">
            <h1>Cerveza</h1>
            <p>
              Uno de los servicios que presta la empresa es la distribución de de todos los tipos de cervecas que ofrece Empresas Polar, siendo parte de estas la polar pilsen, solera y ice.
            </p>
          </div>
          <div className="servicios-elemento">
            <h1>Alimentos</h1>
          Tambien distribuimos los alimentos de Empresas Polar, como lo son la pasta primor, el arroz, la harina pan, rikesa, arroz entre muchas otros productos que podras encontrar en nuestro catalogo...
          </div>
          <div className="servicios-elemento">
            <h1>Refrescos</h1>
            <p>
             Ademas distribuimos todos los productos de la marca PEPSICO, como lo son los refrescos y jugos de la marca. Entre ellos podemos mencionar, pepsi, golden, yukery, migurt y muchos mas...
            </p>
          </div>
        </div>
        <h1 className="titulo-inicio">Acerca de Nosotros</h1>
        <div className="acerca-nosotros">
          <p>
           Somos una distribuidora autorizada por Empresas Polar C.A.
           Nos enfocamos en distribuir todos los productos referentes a esta empresa en todo el territorio de la zona norte de Maracaibo, estado Zulia. Atendemos a mas de 80 negocios a lo largo de toda la zona norte del estado brindando siempre la mejore atención al cliente y atendiendolos con la mayor rapidez posible. Que esperas para crear tu cuenta y vincularte con Distribuidora Negrete C.A., la mejor dsitribuidora de Maracaibo...!
          </p>
        </div>
        <Soporte />
      </div>
    </div>
  );
}

export default Home;
