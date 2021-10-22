import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
// @ts-ignore
import userPhoto from '../../assets/images/man.png'
import ProfileDataForm from './profileDataForm';
import { saveProfile } from '../../redux/ProfileReducer';
function Profile(props) {
  let [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <Preloader />;
  }


  const goToEditMode = () => { setEditMode(true) }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}:</b>{contactValue}</div>
  }
  const ProfileData = () => {
    return (
      <div  >
        <div> <b>Full Name :</b> {props.profile.fullName}</div>
        <div> <b>looking for a job :</b> {props.profile.lookingForAJob}</div>
        <div> <b>My skils :</b> {props.profile.lookingForAJobDescription}</div>
        <div> <b>aboutMe :</b> {props.profile.aboutMe}</div>
        {props.isOwner && <div><button onClick={goToEditMode} >edit</button></div>}

      </div>
    )
  }
  const onSubmit =(formData)=>{
    debugger
    props.saveProfile(formData);
     setEditMode(false)
    
  }

  return (
    <div>
      <h2> Профиль </h2>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} updateStatusThunkCreator={props.updateStatusThunkCreator} />

      {editMode ? <ProfileDataForm isOwner={props.isOwner} initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData />}
      <div> <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
      })}
      </div>
      <div className="product-item"  >
        <div className="product-img"  >
          <img src={props.profile.photos.large || userPhoto} alt='Myfoto' />
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        </div>
        <div className="product-list">
          <h3>{props.profile.aboutMe}</h3>
          <span className="price">{props.profile.lookingForAJob}</span>
          <div className="actions">
            <div className="add-to-cart">
              <NavLink to='' className="cart-button"> {props.profile.lookingForAJobDescription}  </NavLink>
              <div className="cart-name">Дмитрий</div>
            </div>
          </div>
        </div>
      </div>
      <button className="red" onClick={props.logout} >Выход</button>


    </div>
  );
}

export default Profile
