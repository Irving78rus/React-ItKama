import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation/LoginMenu.css";

class LoginLink extends React.Component {
  
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  handleClick = () => {

    this.props.data.logout()
    this.toggleShow();
  };



  render() {
    return (
      <div>
        {this.props.data.isAuth ? <span onClick={this.toggleShow} className="nav-link"> {this.props.data.login}
        </span>
          : <NavLink className="nav-link" to={'/login'}>Вход</NavLink>}
        {this.state.show && (
          <div>
            <div className='Cover' onClick={this.toggleShow}  ></div>

            <div className='Menu'>
              <div className='MenuItem' onClick={this.handleClick}>выход</div>
              <div className="MenuItem" ><NavLink to={'/Profile'} onClick={this.toggleShow}>Profile</NavLink> </div>
            </div>

          </div>
        )}

      </div>
    )
  }



}

export default LoginLink;
