import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "./helpers/history";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Chat from "./pages/Chat/Chat";
import { auth } from "./services/firebase";

const PrivateRoute = ({ component: Component, authenticated, ...rest }: routeProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authenticated, ...rest }: routeProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Component {...props} /> : <Redirect to="/chat" />
      }
    />
  );
};

// APP COMPONENT  ///////////////////////////////

type routeProps = {
  component: React.ComponentType<any>;
  authenticated: boolean;
  path: string;
};

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged((user: any) => {
      if (user) {
        setAuthenticated(true);
        setIsLoading(false);
      } else {
        setAuthenticated(false);
        setIsLoading(false);
      }
    });
  });

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/chat" authenticated={authenticated} component={Chat} />
        <PublicRoute path="/login" authenticated={authenticated} component={Login} />
        <PublicRoute path="/signup" authenticated={authenticated} component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
