import React from "react"
 
import { Field, reduxForm } from "redux-form"
 
import {   Input, Textarea } from "../../utils/FormControls"



const ProfileDataForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><button  >save</button></div>
                <div>
                    <div>
                        <div> <b>Full Name :</b>
                            <Field
                                placeholder="Full Name"
                                name={"fullName"}
                                component={Input}
                            /> 
                        </div>
                        <div> <b>looking for a job :</b>
                            <Field
                             type={"checkbox"}
                             name={"lookingForAJob"}
                             component={Input}
                            /> 
                        </div>
                        <div> <b>My skils:</b>
                            <Field
                                placeholder="lookingForAJobDescription"
                                name={"lookingForAJobDescription"}
                                component={Input}
                            /> 
                        </div>
                        
                        <div> <b>  about mme:</b>
                            <Field
                                placeholder="aboutMe"
                                name={"aboutMe"}
                                component={Textarea}
                            /> 
                        </div>
                    </div>
                      <div> <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                        return <div><b>{key}</b> <Field
                        placeholder={key}
                        name={"contacts." + key}
                        component={Input}
                    />  </div>
                    })}
                    </div>  
                    {props.isOwner && <div><button onClick={() => { }} >edit</button></div>}
                </div>
            </form>
        </div>
    )


}





const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormReduxForm