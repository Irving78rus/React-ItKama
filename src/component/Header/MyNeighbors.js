import axios from "axios";
import React from "react";
// @ts-ignore
import userPhoto from '../../assets/images/man.png'
import "../../../src/App.css";


class Users extends React.Component{

  constructor(props){
    super(props);
    
      
     
  }

    componentDidMount(){
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current}&count=${this.props.pageSize} `)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    }

    onPageChanged =(pageNumber) =>{
      this.props.setCurrentPage(pageNumber)
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
    }


  render(){
    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
    let pages =[];
    for (let i=1; i <=pagesCount; i++){
      pages.push(i)
    }
    
    return (
      <div>
         <div>
           {pages.map(p => {
             return <span className ={this.props.currentPage === p && "selected"}
             onClick= {(e)=>{this.onPageChanged(p)}}>{p}</span>
           })}
         
        
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className="photo"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    follow
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
  }
}

export default Users;
