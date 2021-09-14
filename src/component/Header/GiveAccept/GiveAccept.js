import React from "react";
import { NavLink } from "react-router-dom";

import Preloader from "./../../Preloader/Preloader";

class GiveAccept extends React.Component {
   
  CheckForDownload = () => {
    if (!this.props.profile) {
      return <Preloader />;
    } else {
      return (this.ProductItem = this.props.ProductItem.map((item) => (
        <div className="product-item" key={item.id}>
          <div className="product-img">
            <NavLink to="">
              <img src={this.props.profile.photos.large} alt="foto" />
            </NavLink>
          </div>
          <div className="product-list">
            <h3>{this.props.profile.aboutMe}</h3>

            <span className="price">{this.props.profile.lookingForAJob}</span>
            <div className="actions">
              <div className="add-to-cart">
                <NavLink to="" className="cart-button">
                  <img
                    src={this.props.profile.lookingForAJobDescription}
                    alt="foto"
                  />
                </NavLink>

                <div className="cart-name">Дмитрий</div>
              </div>
            </div>
          </div>
        </div>
      )));
    }
  };
 
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {


    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusThunkCreator(this.state.status);
  };
  onStatusChange  = (e) =>  {
      this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState){
if(prevProps.status!==this.props.status){
  this.setState({status:this.props.status})
}
  }
  render() {
     
     
    this.CheckForDownload(); 
    return (
      <div>
        
        {!this.state.editMode &&  
          <div>
            <span onDoubleClick={this.activateEditMode}>
              
              {this.props.status}
            </span>
          </div>
         }
        {this.state.editMode &&  
          <div>
            <input
            autoFocus={true}
              onChange={this.onStatusChange }
              
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
         }
        <div className="main_content">{this.ProductItem}</div>;
      </div>
    );
  }
  
}
   
export default GiveAccept 
