import React from 'react';
 
import Preloader from '../Preloader/Preloader';

 

function LoginPage(props) {
  if (!props) {
    return <Preloader /> 
  }
  // console.log(props);
  //   if ( props.isAuth) {
  //     return <Redirect to="/give-accept/"  />
  //  }
  return (
    <div  >
       <h1>login</h1>
       
    </div>
  ) 
}

export default LoginPage 
