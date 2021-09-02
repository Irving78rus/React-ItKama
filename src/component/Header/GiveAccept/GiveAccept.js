import React from "react";
import { NavLink } from "react-router-dom";
 
import Preloader from "./../../Preloader/Preloader";

function GiveAccept(props) {
  console.log(props);
  if (!props.profile) {
    return <Preloader />;
  }
  
  const ProductItem = props.ProductItem.map((item) => (
    <div className="product-item" key={item.id}>
      <div className="product-img"  >
      <NavLink to=''><img src={props.profile.photos.large} alt='foto'/></NavLink>
       
      </div>
      <div className="product-list">
        <h3>{props.profile.aboutMe}</h3>

        <span className="price">{props.profile.lookingForAJob}</span>
        <div className="actions">
          <div className="add-to-cart">
          <NavLink to='' className="cart-button"><img src={props.profile.lookingForAJobDescription} alt='foto'/></NavLink>
             

            <div className="cart-name">Дмитрий</div>
          </div>
        </div>
      </div>
    </div>
  ));

  

  return (
    <div>
      <h2> отдам-приму </h2>
      <div className="main_content">{ProductItem}</div>;
    </div>
  );
}

export default GiveAccept;
