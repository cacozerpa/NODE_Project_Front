function Detallespedido({productos}) {
  return (
 <>
      {productos.map((product) => {
        return (
          <>
            <div  key= {product.id} className="tienda-producto">
              <div
                className="producto-imagen"
                style={{
                  background: `url(${product.prod_img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f3f3f3",
                  backgroundSize: "contain",
                }}
              ></div>
             
              <div  className="producto-titulo">
                <h4>{product.prod_name}</h4>
                <small>
                  Cantidad: {product.qty}                  
                </small>
                <small>
                Precio und: ${product.prod_price}
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