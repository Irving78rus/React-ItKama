import "../../../src/App.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Sellbuy(props) {
  debugger
  const ProductItem = props.ProductItem.map((item) => (
    <div className="product-item" key={item.id}>
      <div className="product-img">
        <NavLink to="">
          <img src={item.foto} alt="foto" />
        </NavLink>
      </div>
      <div className="product-list">
        <h3>Домик у моря</h3>

        <span className="price">{item.price}</span>
        <div className="actions">
          <div className="add-to-cart">
            <NavLink to="" className="cart-button">
             {item.phone}    
            </NavLink>

            <div className="cart-name">Дмитрий</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Куплю-Продам </h2>
      <div className="main_content">{ProductItem}</div>;
    </div>
  );
}

export default Sellbuy;
