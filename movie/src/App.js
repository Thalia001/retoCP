import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Dulceria from "./pages/dulceria";
import Pago from "./pages/pago";
import Header from "./componentes/header";

const App = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/dulceria">
          <Dulceria/>
        </Route>
        <Route path="/pago">
          <Pago/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;


