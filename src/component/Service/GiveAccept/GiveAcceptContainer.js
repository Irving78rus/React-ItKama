import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
import { getStatusThunkCreator, getUsersThunkCreator, updateStatusThunkCreator } from "../../../redux/GiveAcceptReducer";
import { withRouter } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { compose } from "redux";
import { getAuthId, getIsAuth, getProductItem, getStatusSuperSelector, Profile } from "../../../redux/selectors";


class GiveAcceptContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }

    this.props.getUsersThunkCreator(userId)
    this.props.getStatusThunkCreator(userId)

    // let status = this.props.status
    // this.props.updateStatusThunkCreator (status)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <GiveAccept
        getStatusThunkCreator={this.props.getStatusThunkCreator}
        updateStatusThunkCreator={this.props.updateStatusThunkCreator}
        {...this.props}
        
      />
    </>
  }


}

let mapStateToProps = (state) => {
  return {
    status: getStatusSuperSelector(state),
    ProductItem: getProductItem(state),
    profile: Profile(state),
    authorizedUserId: getAuthId(state),
    isAuth: getIsAuth(state),
    // id: state.auth.id,
  };
};
export default compose(
  connect(mapStateToProps, { getUsersThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
  withRouter,
  // withAuthRedirect,
)(GiveAcceptContainer)





