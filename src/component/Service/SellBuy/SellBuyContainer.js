import React from "react";
import { connect } from "react-redux";
import { getProductItem } from "../../../redux/selectors";
import Sellbuy from "./Sellbuy";

class SellBuyContainer extends React.Component {
    render() {
        return <>
            <Sellbuy {...this.props} />
        </>
    }

}
let mapStateToProps = (state) => ({
    ProductItem: getProductItem(state),
});

export default connect(mapStateToProps, {})(SellBuyContainer);
