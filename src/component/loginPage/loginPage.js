import React from 'react';
import { Field, reduxForm } from 'redux-form';
 



const LoginForm = (props)=> {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"LOgin"} name={"login"} component ={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component ={"input"}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />  remembe me
      </div>
      <div>
        <button> LOgin</button>
      </div>
    </form>
  )
}

const LoginPage =(props)=> {
  const onSubmit =(formData)=>{
    console.log(formData);
  }
  return (
   <div  >
     <h1>login</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
   </div>
 )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
export default LoginPage
