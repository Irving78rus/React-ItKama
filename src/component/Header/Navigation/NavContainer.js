import React from "react";
import { connect } from "react-redux";
import { logout, setAuthThunkCreator } from "../../../redux/auth-reducer";
import Nav from "./Nav";

class NavContainer extends React.Component {
 

  componentDidMount() {
    this.props.setAuthThunkCreator();
  }

  render() {
    return (
      <>
        <Nav {...this.props} />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  isAuth: state.auth.isAuth,

  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthThunkCreator,logout })(NavContainer);
