import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
 
import { getUsersThunkCreator } from "../../../redux/GiveAcceptReducer";
import { Redirect, withRouter } from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
 
 

class GiveAcceptContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId =2
    }
    
    this.props.getUsersThunkCreator(userId)
  }
   
  render() {

    return <GiveAccept {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    ProductItem: state.GiveAcceptReducer.ProductItem,
    profile: state.GiveAcceptReducer.profile,
     
  };
};
 
 let AuthRedirectComponent = withAuthRedirect(GiveAcceptContainer)
let WithUrlContainerComponent =  withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,{getUsersThunkCreator })( WithUrlContainerComponent
);
