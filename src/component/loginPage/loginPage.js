import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators';
import { Input } from '../Preloader/FormControls';
import  '../Preloader/formControl.css'
 


const maxLength10 = maxLengthCreator(33)
const LoginForm = ({handleSubmit,error} )=> {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={"LOgin"} validate ={[required, maxLength10]} name={"email"} component ={Input}/>
      </div>
      <div>
        <Field placeholder={"Password"} validate ={[required, maxLength10]} name={"password"}   component ={Input}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />  remembe me
      </div>
      { error && <div className ="formSummaryError">{error}</div>}
      <div>
        <button> LOgin</button>
      </div>
    </form>
  )
}

const LoginPage =(props)=> {
  const onSubmit =(formData)=>{
    console.log(formData);
    props.login(formData.email,formData.password,formData.rememberMe)
    
  }
  
  if(props.isAuth){
    return<Redirect to={"/Profile"}/>
  }

  return (
   <div  >
     <h1>login</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
   </div>
 )
}
const mapStatetoProps=(state)=>(
  {
    isAuth : state.auth.isAuth
  }
)
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
export default connect(mapStatetoProps,{login}) (LoginPage)