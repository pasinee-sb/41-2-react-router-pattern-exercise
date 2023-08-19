import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";
import Doglist from "./Doglist";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dogs">
        <Doglist />
        {/* // what props will this need? */}
      </Route>
      <Route path="/dogs/:name">
        <DogDetails />
        {/* // what props will this need? */}
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
