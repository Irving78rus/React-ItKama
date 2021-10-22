import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from "../Preloader/Preloader";
import { getUsersThunkCreator } from "../../redux/GiveAcceptReducer";
import Profile from "./Profile";
import { compose } from "redux";
import { getStatusThunkCreator, savePhoto, saveProfile, updateStatusThunkCreator } from "../../redux/ProfileReducer";
import { logout } from "../../redux/auth-reducer";

class ProfileConainer extends React.Component {

  refreshProfile(){
    let userId = this.props.id
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("login")
      }
    }

    this.props.getUsersThunkCreator(userId)
    this.props.getStatusThunkCreator(userId)
  }
  componentDidMount() {
     
     this.refreshProfile()
  }
  componentDidUpdate(prevProps){
    if(this.props.id!== prevProps.id){
       this.refreshProfile()}
   
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile isOwner ={this.props.id} savePhoto={this.props.savePhoto} {...this.props} /> 
    </>
  }

}

let mapStateToProps = (state) => ({
  status: state.ProfileReducer.status,
  ProductItem: state.GiveAcceptReducer.ProductItem,
  profile: state.GiveAcceptReducer.profile,
  id: state.auth.id,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,


});


export default compose(
  connect(mapStateToProps, {saveProfile, getUsersThunkCreator,savePhoto, getStatusThunkCreator, updateStatusThunkCreator,logout }),
  withRouter,
  withAuthRedirect,
)(ProfileConainer)
