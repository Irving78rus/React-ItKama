import '../../../src/App.css'
import React from "react";
import { NavLink } from 'react-router-dom';

function Rent(props) {
  
  const ProductItem = props.data.map((item) => (
    <div className="product-item" key={item.id}>
      
      <div className="product-img">
       
        <NavLink   to={""}><img src={item.foto} alt='foto'/> </NavLink>
          
      
      </div>
      <div className="product-list">
        <h3>Домик у моря</h3>

        <span className="price">{item.price}</span>
        <div className="actions">
          <div className="add-to-cart">
          <NavLink   to={""} className="cart-button"><img src=  {item.phone} alt='foto'/> </NavLink>
            

            <div className="cart-name">Дмитрий</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>аренда </h2>
      <div className="main_content">{ProductItem}</div>;
    </div>
  );
}

export default Rent;
