import { connect } from "react-redux";
import OrderItems from "./OrderItems";
 
const mapStateToProps = (state) => {
  return {
    NewOrder: state.Orders.NewOrder,
    CreatedOrders: state.Orders.CreatedOrders,
  };
};
 
const OrderItemsContainer = connect(mapStateToProps,{})(OrderItems);

export default OrderItemsContainer;
