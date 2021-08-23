import React from "react";
import { connect } from "react-redux";
import GiveAccept from "./GiveAccept";
import axios from "axios";
import { setUserProfileAC } from "../../redux/GiveAcceptReducer";

class GiveAcceptContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        console.log(response);

        this.props.setUserProfileAC(response.data);
      });
  }

  render() {
    return <GiveAccept {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.GiveAcceptReducer.profile,
  };
};

export default connect(mapStateToProps, { setUserProfileAC })(
  GiveAcceptContainer
);
