import React from "react";
import "./styles/index.scss";
import { Router, Switch, Route } from "react-router-dom";

import history from "./helpers/history";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Chat from "./pages/Chat/Chat";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
