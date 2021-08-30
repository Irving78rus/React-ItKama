import React from 'react';
import Preloader from '../Preloader/Preloader';

 

function LoginPage(props) {
  if (!props) {
    return <Preloader /> 
  }
  return (
    <div  >
       <h1>login</h1>
     {console.log(props)}
    </div>
  ) 
}

export default LoginPage 
