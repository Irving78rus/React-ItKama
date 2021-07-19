import React from 'react'
import { connect } from 'react-redux'
import Neighbors from './MyNeighbors'
import { followAC, setUsersAC, unfollowAC } from '../../redux/UsersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
     
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },

    }
     
}

export default connect (mapStateToProps, mapDispatchToProps) (Neighbors)

 