import React from "react";
import { connect } from "react-redux";
import {
  addOrderActionsCreater,
  UpdateAllOrderActionsCreater,
} from "../redux/AllOrdersReducer";
import OrderItems from "./OrderItems";
 

const mapStateToProps = (state) => {
  return {
    NewOrder: state.Orders.NewOrder,
    CreatedOrders: state.Orders.CreatedOrders,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    addOrder: () => {
      dispatch(addOrderActionsCreater());
    },
    UpdateAllOrder: (message, date, phone, name) => {
      dispatch(UpdateAllOrderActionsCreater(message, date, phone, name));
    },
  };
}
const OrderItemsContainer = connect(mapStateToProps,mapDispatchToProps)(OrderItems);

export default OrderItemsContainer;
