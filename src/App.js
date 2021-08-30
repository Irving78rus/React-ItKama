// import logo from "./logo.svg";
// import imgg from "./96.png";
 
import React from "react";
import Service from "./component/Header/Service";
import Rent from "./component/Header/Rent";
import "./App.css";
import Sellbuy from "./component/Header/Sellbuy";
 
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/redux-store.js";
import AllOrder from "./component/Header/AllOrder";

 
import GiveAcceptContainer from "./component/Header/GiveAccept/GiveAcceptContainer";
 
import NavContainer from "./component/Header/Navigation/NavContainer";
 
import NeighborsContainer from "./component/Header/NeighborsContainer";
import LoginPage from "./component/loginPage/loginPage";
import LoginPageConainer from "./component/loginPage/loginPageConainer";

function App(props) {
 
  return (
    <BrowserRouter>
      <div className="body">
        <header className="header">
          <div className="container">
            <NavContainer/>
            <Service />
          </div>
        </header>
        <div className="main container">
        <Route path="/login" render={() =>  <LoginPageConainer />} />
          <Route exact path="/ " component={App} />
          <Route path="/Rent" render={() => <Rent data={store.getState().Product} />} />
          <Route path="/give-accept/:userId?" render={() => <GiveAcceptContainer/>} />
          <Route path="/Sellbuy" render={() => <Sellbuy data={store.getState().Product} />} />
          <Route path="/AllOrder" render={() => <AllOrder CreatedOrders={store.getState().Orders.CreatedOrders} />} />
          <Route path="/neighbors" render={() =>  <NeighborsContainer/>} />
         
          
          
        </div>
      </div>
    </BrowserRouter>
  ) 
}

export default App;
