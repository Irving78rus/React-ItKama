// import logo from "./logo.svg";
// import imgg from "./96.png";
import Nav from "./component/Header/Nav";
import React from "react";
import Service from "./component/Header/Service";
import Rent from "./component/Header/Rent";
import "./App.css";
import Sellbuy from "./component/Header/Sellbuy";
 
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/redux-store.js";
import AllOrder from "./component/Header/AllOrder";

import NeighborsContainer from "./component/Header/NeighborsContainer";
import GiveAcceptContainer from "./component/Header/GiveAccept/GiveAcceptContainer";


function App(props) {
 
  return (
    <BrowserRouter>
      <div className="body">
        <header className="header">
          <div className="container">
            <Nav />
            <Service />
          </div>
        </header>
        <div className="main container">
          <Route exact path="/ " component={App} />
          <Route path="/Rent" render={() => <Rent data={store.getState().Product} />} />
          <Route path="/give-accept" render={() => <GiveAcceptContainer/>} />
          <Route path="/Sellbuy" render={() => <Sellbuy data={store.getState().Product} />} />
          <Route path="/AllOrder" render={() => <AllOrder CreatedOrders={store.getState().Orders.CreatedOrders} />} />
          <Route path="/neighbors" render={() =>  <NeighborsContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
