import React, { Fragment, useContext, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Header from "../components/layouts/Header/Header";
import LandingPage from "../components/layouts/LandingPage/LandingPage";
import GlobalContext from "../context/global-context";
import Cart from "./layouts/Cart/Cart";
import Wishlist from "./layouts/Wishlist/Wishlist";
export default function Medium() {
  const context = useContext(GlobalContext);
  useEffect(() => {
    //only load user if has token
    if (context.auth.token) {
      context.loadUser();
    }
  }, []);
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/wishlist" component={Wishlist} />
          {/* //All Products
          <Route exact path="/products" />
          //Single Product by id
          <Route exact path="/product/:product_id" />
          //TODO::All products by category id */}
        </Switch>
      </Fragment>
    </Router>
  );
}
