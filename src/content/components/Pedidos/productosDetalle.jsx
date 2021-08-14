import React from "react";

import deleteDetail from '../../../fetchConnections/deleteDetail';
import {getRes} from '../../../fetchConnections/setGetRes';

function Detallespedido({productos}) {

  console.log(productos)
 
    return (
   <>
        {productos.map((product) => {
          
    const deleteitem = async ()=> {
        await deleteDetail(product.id)
        const response = getRes()
        if(response === 'Success'){
            window.location.assign('/detallespedidoadmin/' + product.idorder);
            alert('Producto Eliminado!')
        }else{
            alert('Error Eliminando Producto!')
        }
    }
          return (
            <>
              <div key= {product.id} className="tienda-item">
                <div
                  className="producto-imagen"
                  style={{
                    background: `black`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#f3f3f3",
                    backgroundSize: "contain",
                  }}
                ></div>
              <div className="delete">
                <button
                onClick = {deleteitem}
                  className="boton-sesion"
                >
                  <h2>Eliminar</h2>
                </button>
              </div>
               
                <div className="producto-titulo">
                  <h4>{product.prod_name}</h4>
                  <small>
                    Cantidad: {product.qty}            
                  </small>
                  <small>
                    Precio/und: {product.prod_price}$
                  </small>
                </div>
              </div>
            </>
          );
        })}
      </>
      );
  }
  
  export default Detallespedido;