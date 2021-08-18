import React from "react";
// @ts-ignore
import userPhoto from "../../assets/images/man.png";
import "../../../src/App.css";

let Users = (props) => {
  console.log(props);
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
            <span className={props.currentPage === p && "selected"}
              onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className="photo"
              />
            </div>
            <div>
              {u.followed ? (<button onClick={() => {props.unfollow(u.id); }}>unfollow</button>) : 
              (<button onClick={() => { props.follow(u.id); }}>follow </button>)}
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
