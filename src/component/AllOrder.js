import "../App.css";
import React from "react";
import OrderPush from "./OrderPush";
import ButtonOrderCreate from "./ButtonOrderCreate";
import OrderItems  from "./OrderItems";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import OrderPushContainer from "./OrderPushContainer";
import OrderItemsContainer from "./OrderItemsContainer";
function AllOrder(props) {
   
  return (
    <BrowserRouter>
      <div>
        <h2>Совместные заказы </h2>
      
       
        <Route exact path="/AllOrder" render={() => <ButtonOrderCreate  />} />

        
        <Route exact path="/AllOrder/OrderPush" render={() => <OrderPushContainer />} />
        {/* NewOrder={props.NewOrder}   dispatch={props.dispatch} */}
         <OrderItemsContainer   CreatedOrders={props.CreatedOrders}  />  
          
        
      </div>
    </BrowserRouter>
  ) 
}

export default AllOrder;
