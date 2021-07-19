import '../../../src/App.css'
import React from "react";

function Sellbuy(props) {
  const ProductItem = props.data.map((item) => (
    <div className="product-item">
      <div className="product-img">
        <a href="">
          <img src={item.foto} />
        </a>
      </div>
      <div className="product-list">
        <h3>Домик у моря</h3>

        <span className="price">{item.price}</span>
        <div className="actions">
          <div className="add-to-cart">
            <a href="" className="cart-button">
              {item.phone}
            </a>

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
