// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import RootContainer from "../router/index.js";

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <RootContainer />
    </AppContainer>
  ), document.getElementById("app")
  );
};

render();

if (module.hot) {
  const index = require("../router/index").default;
  module.hot.accept(index, () => {
    render();
  });
}

