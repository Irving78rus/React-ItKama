import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from "../Preloader/Preloader";
import { getUsersThunkCreator } from "../../redux/GiveAcceptReducer";
import Profile from "./Profile";
import { compose } from "redux";
import { getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/ProfileReducer";

class ProfileConainer extends React.Component {


  componentDidMount() {
      
    let userId = this.props.id
    if (!userId) {
      userId = this.props.authorizedUserId
      if(!userId){
        this.props.history.push("login")
      }
    }

    this.props.getUsersThunkCreator(userId)
    this.props.getStatusThunkCreator(userId)
    

  }
  render() {
 
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile {...this.props} />;
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
  connect(mapStateToProps, { getUsersThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
  withRouter,
  withAuthRedirect,
)(ProfileConainer)
