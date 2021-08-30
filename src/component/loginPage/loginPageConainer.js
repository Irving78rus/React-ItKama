import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginPage from "./loginPage";



 

let mapStateToPropsqwe = (state) => ({
  isAuth: state.auth.isAuth,
});

 const LoginPageConainer =  connect(  mapStateToPropsqwe,  {})(LoginPage);
 
 export default LoginPageConainer