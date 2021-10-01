import React from "react";
import { NavLink } from "react-router-dom";
 
import Preloader from "../../Preloader/Preloader";
import { logout } from './../../../redux/auth-reducer';

function LoginLink(props) {
   console.log();
  if (!props) {
    return <Preloader /> 
  }
 
  return (
     <div>
     
{props.data.isAuth? <div><NavLink className="nav-link" to={'/Profile'}>{props.data.login}</NavLink>  
<button onClick={props.data.logout} >logout</button></div>


: <NavLink className="nav-link" to={'/login'}>Вход</NavLink>}

     
     </div>
  
     
  )
}

export default LoginLink;
