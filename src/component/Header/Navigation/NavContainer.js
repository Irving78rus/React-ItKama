import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserData } from "../../../redux/auth-reducer";
// @ts-ignore
import black from "../../../img/black.jpg";

import { Route } from "react-router-dom";
import Login from "../login/Login";
import Nav from "./Nav";

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { email, id, login } = response.data.data;
          this.props.setAuthUserData(email, id, login);
        }
      });
       
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

export default connect(mapStateToProps, { setAuthUserData })(
  NavContainer
);
