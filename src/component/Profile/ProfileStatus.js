import React, { useEffect, useState } from "react";


const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatusThunkCreator(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value
    )
  }
 

  return (
    <>
      {!editMode &&
        <div>
         <b>Status: </b> <span onDoubleClick={activateEditMode}> {props.status}</span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
        </div>}

    </>
  );

}
export default ProfileStatus;
