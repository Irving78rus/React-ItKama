import React from "react"
import { Field } from "redux-form"
import  '../utils/FormControl.css'
 


export const FormControl =({input,meta,child,...props})=>{
    const hasError = meta.touched && meta.error
    return (
        <div className = {  "formControl " + " "+ (hasError? "error ": " " )}  >
            <div>
             {props.children}
            </div>
         {meta.touched && meta.error && <span>  {meta.error}</span>}  
        </div>
    )
}

export const Textarea =(props) =>{
    const {input,meta,child,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

 
export const Input =( props ) =>{
    const {input,meta,child,...restProps} = props
return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}

export const createField = (placeholder, name,validators,component, props={}, text='')=>{
    <div>
        <Field placeholder={placeholder} name={name}
        validators={validators}
        component={component}
        {...props}/>{text}
    </div>
}