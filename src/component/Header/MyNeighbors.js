import React from "react";
// @ts-ignore
import userPhoto from "../../assets/images/man.png";
import "../../../src/App.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
  followThunkCreator,
  unFollowThunkCreator,
} from "../../redux/UsersReducer";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && "selected"}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/give-accept/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className="photo"
                />
              </NavLink>
            </div>

            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unFollowThunkCreator(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunkCreator(u.id);
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
      ))}
    </div>
  );
};

export default Users;
