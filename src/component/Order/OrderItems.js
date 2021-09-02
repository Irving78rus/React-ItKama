import "../../../src/App.css";
import React from "react";
import { NavLink } from 'react-router-dom';
 

function OrderItems(props) {
   
  const OrdersItem = props.CreatedOrders.map((item) => (
   
    <div className="Orders_content" key={item.id}>
      <div className="product-img" >
        <p>
          {item.NewOrderText}  
        </p>
      </div>
      <div className="product-list">
         
        <span className="price">Дата заказа {item.NewOrderDate}</span>
        <div className="actions">
          <div className="add-to-cart">
            <NavLink className="cart-button" to ={''}> {item.NewOrderPhone}</NavLink>
             
  
            <div className="cart-name">{item.NewOrderName}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  
  return <div>
 
<div className="">
    
    {OrdersItem}
    </div>

  </div>
   
  
}

export default OrderItems;
