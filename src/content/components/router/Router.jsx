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
        </Switch>
      </Router>
    </>
  );
}
export default Index;
