import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Perfil from "../perfil/Perfil"
import NavbarSession from "../nav/NavbavSession"
import Home from "../home/Home";
import Access from "../acceso/Access";
import Dashboard from "../dashboard/Dashboard.jsx";
import Tienda from "../tienda/Tienda";
import AdminDashboard from "../dashboard/AdminDashboard";
import Soporte from "../soporte/SoporteFull";
import Carrito from "../carrito/Carrito";
import Pedido from "../Pedidos/Pedidos";
import PedidoUsuario from "../PedidoUsuario/Pedidos";
import DetallesPedido from "../PedidoUsuario/DetallesPedido";
import AccessAdmin from "../acceso/AccessAdmin";
import NavAdmin from "../nav/NavbarAdmin";
import DetallespedidoAdmin from "../Pedidos/DetallesPedido";
import VistaProductos from "../productos/VistaProductos";
import DetallesProductos from "../productos/DetallesProductos";
import CrearProducto from "../productos/CrearProducto";
import Usuarios from '../usuarios/Usuarios';
import DetallesUsuario from '../usuarios/DetallesUsuario';
import "../../styles/style.css";
function Index() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/acceso">
            <Access />
          </Route>
          <Route path="/dashboard">
            <NavbarSession />
            <Dashboard />
          </Route>
          <Route path="/tienda">
          <NavbarSession/>
            <Tienda />
          </Route>
          <Route path="/admin-dashboard">
          <NavAdmin/>
            <AdminDashboard />
          </Route>
          <Route path="/soporte">
            <Soporte />
          </Route>
          <Route path="/perfil">
          <NavbarSession/>
            <Perfil/>
          </Route>
          <Route path="/carrito">
            <NavbarSession/>
            <Carrito/>
          </Route>
          <Route path ="/pedido">
            <NavbarSession/>
            <Pedido/>
          </Route>
          <Route path ="/pedidosusuario">
            <NavbarSession/>
            <PedidoUsuario/>
          </Route>
          <Route path ="/detalles/:id">
            <NavbarSession/>
            <DetallesPedido/>
          </Route>
        </Switch>
        <Route path="/accesoadmin">
            <AccessAdmin />
          </Route>
          <Route path='/detallespedidoadmin/:id'>
            <NavAdmin/>
            <DetallespedidoAdmin/>
          </Route>
          <Route path = '/productos'>
            <NavAdmin/>
            <VistaProductos/>
          </Route>
          <Route path = '/detallesproducto/:id'>
            <NavAdmin/>
            <DetallesProductos/>
          </Route>
          <Route path = '/crearproducto'>
            <NavAdmin/>
            <CrearProducto/>
          </Route>
          <Route path="/usuarios">
            <NavAdmin/>
            <Usuarios/>
          </Route>
          <Route path="/detallesusuario/:id">
            <NavAdmin/>
            <DetallesUsuario/>
          </Route>
      </Router>
    </>
  );
}
export default Index;
