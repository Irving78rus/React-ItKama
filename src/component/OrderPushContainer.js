import React from "react";
import { connect } from "react-redux";
import {
  addOrderActionsCreater,
  UpdateAllOrderActionsCreater,
} from "../redux/AllOrdersReducer";

import OrderPush from "./OrderPush";

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
const OrderPushContainer = connect(mapStateToProps,mapDispatchToProps)(OrderPush);

export default OrderPushContainer;
