import { connect } from "react-redux";
import React from "react";
import GiveAccept from "./GiveAccept";
import axios from "axios";
import setUserProfile from "../../../redux/GiveAcceptReducer";
 

class GiveAcceptContainer extends React.Component {
   
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        debugger
        this.props.setUserProfile(response.data);
       console.log(response.data);
      });
  }
  
  render() {
     debugger
    return  <>
    <GiveAccept {...this.props} profile={this.props.profile}/>
     
    </>
    

     
      
     
     
      
   
  }
}
let mapStateToProps = (state) => {
  return {
    ProductItem: state.GiveAccept.ProductItem,
    profile: state.GiveAccept.profile
  };
};

export default connect(mapStateToProps, {setUserProfile})(
  GiveAcceptContainer
);
