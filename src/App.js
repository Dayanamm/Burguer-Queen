import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WaiterOption from "./component/waiter/Waiter";
import ChefOption from "./component/chef/Chef";
import Intro from "./component/intro/Intro";
import NotFound from "./component/notFound/NotFound";
import Order from "./component/order/Order";
import Kitchen from "./component/kitchen/Kitchen";
import OrderState from "./component/orderState/OrderState";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/order-state" component={OrderState} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/order" component={Order} />
        <Route path="/chef" component={ChefOption} />
        <Route path="/waiter" component={WaiterOption} />
        <Route path="/" exact component={Intro} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
