import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
 
import { getStatusThunkCreator, getUsersThunkCreator,  updateStatusThunkCreator } from "../../../redux/GiveAcceptReducer";
import { withRouter } from "react-router-dom";
 
import Preloader from "../../Preloader/Preloader";
import { compose } from "redux";
 
 
 
 

class GiveAcceptContainer extends React.Component {
  
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    if(!userId){
      userId =2
    }
    
    this.props.getUsersThunkCreator(userId)
    this.props.getStatusThunkCreator(userId)
    
    // let status = this.props.status
    // this.props.updateStatusThunkCreator (status)
  }
   
  render() {
     
    return  <>
    {this.props.isFetching ? <Preloader /> : null}
    <GiveAccept getStatusThunkCreator={this.props.getStatusThunkCreator}  updateStatusThunkCreator={this.props.updateStatusThunkCreator}  {...this.props}   />;
     </>
  }

  
}

let mapStateToProps = (state) => {
   
  return {
    status:state.GiveAcceptReducer.status,
    ProductItem: state.GiveAcceptReducer.ProductItem,
    profile: state.GiveAcceptReducer.profile,
    // id: state.auth.id,
     
  };
};
export default  compose(
  connect(mapStateToProps,{getUsersThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
  withRouter,
  // withAuthRedirect,
 )(GiveAcceptContainer)
  
  
 
 

