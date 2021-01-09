import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import PrivateRoutes from "./components/common/PrivateRoutes/PrivateRoutes";

const LoginScreen = lazy(() =>
  import("./containers/screens/LoginScreen/Login/Login")
);

const SignupScreen = lazy(() =>
  import("./containers/screens/LoginScreen/Register/Register")
);

const HomeScreen = lazy(() =>
  import("./containers/screens/HomeScreen/HomeScreen")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoutes path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  );
}

export default App;
