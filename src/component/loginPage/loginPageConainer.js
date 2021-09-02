import React from "react";
import { connect } from "react-redux";
 
import LoginPage from "./loginPage";

class LoginPageConainer extends React.Component {
    render() {

        return <>
             
            <LoginPage {...this.props} />;
        </>
    }

}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
});
 

export default connect(mapStateToProps, {})(LoginPageConainer);
