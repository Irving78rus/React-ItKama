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

import LoginPageConainer from "./component/loginPage/loginPageConainer";
import ProfileConainer from "./component/Profile/ProfileConainer";
import { connect } from 'react-redux';
import {  initializeApp } from "./redux/appReducer";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import Preloader from "./component/Preloader/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
    //getAuthUserData
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/> 
    }


    return (

      <BrowserRouter>
        <div className="body">
          <header className="header">
            <div className="container">
              <NavContainer />
              <Service />
            </div>
          </header>
          <div className="main container">
            <Route path="/login" render={() => <LoginPageConainer />} />
            <Route path="/Profile" render={() => <ProfileConainer />} />
            <Route exact path="/ " component={App} />
            <Route path="/Rent" render={() => <Rent data={store.getState().Product} />} />
            <Route path="/give-accept/:userId?" render={() => <GiveAcceptContainer />} />
            <Route path="/Sellbuy" render={() => <Sellbuy data={store.getState().Product} />} />
            <Route path="/AllOrder" render={() => <AllOrder CreatedOrders={store.getState().Orders.CreatedOrders} />} />
            <Route path="/neighbors" render={() => <NeighborsContainer />} />



          </div>
        </div>
      </BrowserRouter>

    )
  }

}
const mapStateToProps=(state)=>{
  return{
    initialized: state.app.initialized
  }
  
}
export default compose(
  connect (mapStateToProps,{initializeApp}),
  withRouter,
  )
 (App)


  