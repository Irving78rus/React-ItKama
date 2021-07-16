import "../App.css";
import React from "react";
 

function OrderItems(props) {
  console.log(props);
  const OrdersItem = props.CreatedOrders.map((item) => (
    <div className="Orders_content">
      <div className="product-img">
        <p>
          {item.NewOrderText}  
        </p>
      </div>
      <div className="product-list">
         
        <span className="price">Дата заказа {item.NewOrderDate}</span>
        <div className="actions">
          <div className="add-to-cart">
            <a href="" className="cart-button">
              {item.NewOrderPhone}
            </a>
  
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
