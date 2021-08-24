import React from "react";
import { NavLink } from "react-router-dom";
 
import Preloader from "../../Preloader/Preloader";

function Login(props) {
  console.log(props);
  if (!props) {
    return <Preloader /> 
  }

  return (
     <div>
     
{props.isAuth? <NavLink className="nav-link" to={'/login'}>{props.login}</NavLink>: <NavLink className="nav-link" to={'/login'}>Вход</NavLink>}

     
     </div>
  
     
  )
}

export default Login;
