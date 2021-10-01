import React from "react";
// @ts-ignore
import userPhoto from "../../assets/images/man.png";
import "../../../src/App.css";
import { NavLink } from "react-router-dom";



const User = (  props) => {
  
  let u = props.user
  return (
    <div>
 
      <span>
        <div>
          <NavLink to={"/give-accept/" + u.id}>
            <img
              src={ u.photos.small != null ? u.photos.small : userPhoto}
              className="photo" alt="foto"
            />
          </NavLink>
        </div>

        <div>
          {u.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.unFollow(u.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                props.Follow(u.id);
              }}
            >
              follow{" "}
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
      </span>
      <span>
        <div>{"u.location.city"}</div>
        <div>{"u.location.country"}</div>
      </span>
    </div>
      
    
  );
};

export default User;
