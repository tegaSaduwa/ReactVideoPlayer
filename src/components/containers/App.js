import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound";
import WbnPlayer from "./WbnPlayer";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route exact path="/:active" component={WbnPlayer} />
      <Route component={NotFound} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
