import "../../../App.css";
import React from "react";
import { BrowserRouter,Route} from "react-router-dom";
import ButtonOrderCreate from "../../Order/ButtonOrderCreate";
import OrderItemsContainer from "../../Order/OrderItemsContainer";
import OrderPushContainer from "../../Order/OrderPushContainer";
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
