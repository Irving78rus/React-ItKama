import React from "react";
import { connect } from "react-redux";
 
import { setAuthThunkCreator } from "../../../redux/auth-reducer";
import Login from "./Login";
 

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setAuthThunkCreator( )
  }

  render() {
    return (
      <>
         
        <Login {...this.props} /> 
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

        export default connect(mapStateToProps, {setAuthThunkCreator})(LoginContainer);
