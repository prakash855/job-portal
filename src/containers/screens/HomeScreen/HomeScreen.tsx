import React from "react";

import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";

const HomeScreen = () => {
  return (
    <div className="container-fluid">
      <Navigation />
      <Main />
    </div>
  );
};

export default HomeScreen;
