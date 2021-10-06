import React from "react";
import Service from "./component/Service/Service";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/redux-store.js";
import AllOrder from "./component/Service/Orders/AllOrder";
import GiveAcceptContainer from "./component/Service/GiveAccept/GiveAcceptContainer";
import NavContainer from "./component/Header/Navigation/NavContainer";
import LoginPageConainer from "./component/loginPage/loginPageConainer";
import ProfileConainer from "./component/Profile/ProfileConainer";
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import Preloader from "./component/Preloader/Preloader";
import { WithSuspense } from "./hoc/withSuspense";
import NeighborsContainer from "./component/Service/Neighbors/NeighborsContainer";
 
 
  const RentContainer = React.lazy(() => import("./component/Service/Rent/RentContainer"))
  const SellBuyContainer = React.lazy(() => import("./component/Service/SellBuy/SellBuyContainer"))


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
    //getAuthUserData
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (

      // <BrowserRouter>
      <div className="body">
        <header className="header">
          <div className="container">
            <NavContainer />
            <Service />
          </div>
        </header>
        <div className="main container">
          <Route path="/login" render={() => <LoginPageConainer />} />
          <Route path="/Profile" render={() => <ProfileConainer />} />
          <Route exact path="/ " component={App} />
          <Route path="/Rent" render= {WithSuspense(RentContainer)} />
          <Route path="/give-accept/:userId?" render={() => <GiveAcceptContainer />} />
          <Route path="/Sellbuy" render={WithSuspense(SellBuyContainer)} />
          <Route path="/AllOrder" render={() => <AllOrder CreatedOrders={store.getState().Orders.CreatedOrders} />} />
          <Route path="/neighbors" render={() => <NeighborsContainer />} />


          {/* <Sellbuy data={store.getState().Product} /> */}
        </div>
      </div>
      // </BrowserRouter>

    )
  }

}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }

}
let AppConainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)
  (App)

let SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppConainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp
