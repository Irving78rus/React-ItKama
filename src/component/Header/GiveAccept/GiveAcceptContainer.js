import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
 
import { getUsersThunkCreator } from "../../../redux/GiveAcceptReducer";
import { withRouter } from "react-router-dom";
 

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
let WithUrlContainerComponent =  withRouter(GiveAcceptContainer)

export default connect(mapStateToProps,
   { 
    getUsersThunkCreator })(
  WithUrlContainerComponent
);
