// import logo from "./logo.svg";
// import imgg from "./96.png";
import Nav from "./component/Nav";
import React from "react";
import Service from "./component/Service";
import Rent from "./component/Rent";
import "./App.css";
import Sellbuy from "./component/Sellbuy";
import AllOrder from "./component/AllOrder";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import store from "./redux/redux-store.js";

 
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
        <Route exact path="/ "  component={App} />
           <Route path="/Rent" render={() => <Rent  data = {store.getState().Product} />} />
          <Route path="/Sellbuy" render={() => <Sellbuy data = {store.getState().Product}  />} />    
          <Route path="/AllOrder" render={() => <AllOrder CreatedOrders = {store.getState().Orders.CreatedOrders} />} />
           
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
