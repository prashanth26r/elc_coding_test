import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import Home from './home';
import GoodBuys from './GoodBuys'

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/goodBuys" component={GoodBuys} />      
      <Route path="*" component={Home} />
    </Switch>
    </BrowserRouter>
  );
}