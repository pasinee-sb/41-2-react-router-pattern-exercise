import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Doglist from "./Doglist";
import DogDetail from "./DogDetail";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dogs">
        <Doglist />
        {/* // what props will this need? */}
      </Route>
      <Route path="/dogs/:name">
        <DogDetail />
        {/* // what props will this need? */}
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
