import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProfileStatus =(props)=> {
 
   

  let [editMode , setEditMode] = useState(false)
  let [status , setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
   
const activateEditMode =() => {
  setEditMode(true)
}
const deactivateEditMode=() => {
  setEditMode(false)
    props.updateStatusThunkCreator( status); 
}
const onStatusChange  = (e) =>  {
  setStatus(e.currentTarget.value
   )
}
// componentDidUpdate(prevProps, prevState){
//     if(prevProps.status!==this.props.status){
//       this.setState({status:this.props.status})
//     }
//       }
   

  
    return (
      <>
        {! editMode &&
        <div>
          <span onDoubleClick = {activateEditMode}> { props.status}</span>
        </div>
        }
        { editMode&&
        <div>
          <input autoFocus={true} onBlur = { deactivateEditMode} onChange={ onStatusChange }   value={ status} />
        </div>}
       
      </>
    );
   
}
export default ProfileStatus;
