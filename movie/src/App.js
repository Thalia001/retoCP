import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Dulceria from "./pages/dulceria";
import Pago from "./pages/pago";
import Header from "./componentes/header";
import Login from "./pages/login/login";
import Cart from "./componentes/miniCart";
import ThankYou from "./pages/thankyou";
import { DataProvider } from "./componentes/context/DataProvider";

const App = () => {
  return(
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Cart/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/inicia-sesion">
            <Login/>
          </Route>
          <Route path="/dulceria">
            <Dulceria/>
          </Route>
          <Route path="/pago">
            <Pago/>
          </Route>
          <Route path="/thank-you">
            <ThankYou/>
          </Route>
        </Switch>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;


