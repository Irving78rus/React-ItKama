import React from "react";
import { connect } from "react-redux";
import Rent from "./Rent";
import { getProductItem } from "../../../redux/selectors";

class RentContainer extends React.Component {
    render() {
        return <>
            <Rent {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => ({
    ProductItem: getProductItem(state),
});

export default connect(mapStateToProps, {})(RentContainer);
