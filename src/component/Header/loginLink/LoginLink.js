import React from "react";
import { NavLink } from "react-router-dom";
 
import Preloader from "../../Preloader/Preloader";

function LoginLink(props) {
   
  if (!props) {
    return <Preloader /> 
  }
 
  return (
     <div>
     
{props.data.isAuth? <NavLink className="nav-link" to={'/Profile'}>{props.data.login}</NavLink>: <NavLink className="nav-link" to={'/login'}>Вход</NavLink>}

     
     </div>
  
     
  )
}

export default LoginLink;
