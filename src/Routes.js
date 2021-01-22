import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./core/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import UiKits from "./screens/UiKits";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/ui-kits" exact component={UiKits} />
      </Switch>
    </Router>
  );
}
