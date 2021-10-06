import React from "react";
// @ts-ignore
import "../../../App.css";
import Paginator from "./paginator";
import User from "./User";
 


let Users = (props) => {
 
  return <div>

    <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize} onPageChanged={props.onPageChanged} />

    {props.users.map((u) => <User user={u}
      followingInProgress={props.followingInProgress}
      key={u.id}
      unFollow={props.unFollow}
      Follow={props.Follow}

    />)}
  </div>

}

export default Users;
