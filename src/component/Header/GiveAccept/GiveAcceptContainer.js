import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
 
import { getUsersThunkCreator } from "../../../redux/GiveAcceptReducer";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Preloader from "../../Preloader/Preloader";
 
 
 

class GiveAcceptContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId =2
    }
     
    this.props.getUsersThunkCreator(userId)
  }
   
  render() {
    
    return  <>
    {this.props.isFetching ? <Preloader /> : null}
    <GiveAccept {...this.props} />;
     </>
  }

  
}

let mapStateToProps = (state) => {
  return {
    ProductItem: state.GiveAcceptReducer.ProductItem,
    profile: state.GiveAcceptReducer.profile,
    id: state.auth.id,
     
  };
};
 
 let  AuthRedirectComponent= withAuthRedirect(GiveAcceptContainer)
  
let WithUrlContainerComponent =  withRouter(AuthRedirectComponent)
 

export default connect(mapStateToProps,{getUsersThunkCreator })( WithUrlContainerComponent
);
