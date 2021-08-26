import React from "react";
import Preloader from "./../../Preloader/Preloader";

function GiveAccept(props) {
  console.log(props);
  if (!props.profile) {
    return <Preloader />;
  }
  const ProductItem = props.ProductItem.map((item) => (
    <div className="product-item">
      <div className="product-img">
        <a href="">
          <img src={props.profile.photos.large} />
        </a>
      </div>
      <div className="product-list">
        <h3>{props.profile.aboutMe}</h3>

        <span className="price">{props.profile.lookingForAJob}</span>
        <div className="actions">
          <div className="add-to-cart">
            <a href="" className="cart-button">
              {props.profile.lookingForAJobDescription}
            </a>

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
