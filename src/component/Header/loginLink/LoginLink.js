import React from "react";
import { NavLink } from "react-router-dom";
 
import Preloader from "../../Preloader/Preloader";

function LoginLink(props) {
  console.log(props);
  if (!props) {
    return <Preloader /> 
  }

  return (
     <div>
     
{props.data.isAuth? <NavLink className="nav-link" to={'/login'}>{props.data.login}</NavLink>: <NavLink className="nav-link" to={'/login'}>Вход</NavLink>}

     
     </div>
  
     
  )
}

export default LoginLink;
