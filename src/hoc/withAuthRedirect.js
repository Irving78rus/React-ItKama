import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
  return { isAuth: state.auth.isAuth };
};

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      alert("isAuth " +this.props.isAuth);
      if (this.props.isAuth) return <Redirect to="/login" />;

      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
