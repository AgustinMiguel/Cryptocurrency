import React, { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import List from "./components/List.tsx";
import Coin from "./components/Coin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" exact component={List} />
          <Route path="/list/:id" component={Coin} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
