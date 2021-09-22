import { connect } from "react-redux";
import {
  addOrderActionsCreater,
 
} from "../../redux/AllOrdersReducer";

import OrderPush from "./OrderPush";

const mapStateToProps = (state) => {
  return {
    NewOrder: state.Orders.NewOrder,
    CreatedOrders: state.Orders.CreatedOrders,
    
  };
};
function mapDispatchToProps(dispatch) {
  return {
    addOrder: (message, date, phone, name) => {
      dispatch(addOrderActionsCreater(message, date, phone, name));
    },
     
  };
}
const OrderPushContainer = connect(mapStateToProps,mapDispatchToProps)(OrderPush);

export default OrderPushContainer;
