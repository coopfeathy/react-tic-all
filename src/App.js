import React, { Component } from "react"
import { BrowserRouter,Switch, Route, Link,  } from "react-router-dom";

import "./index.css"

import Home from './screens/home/home';
import Regular from './screens/regular/regular';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="header">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/regular">Regular</Link>
          <Link className="link" to="/fiveXfive">5X5</Link>
          <Link className="link" to="/ultamate">Ultamate</Link>
        </div>

        <hr/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/regular">
            <Regular/>
          </Route>
          <Route path="/fiveXfive">
            <h1>this is 5X5</h1>
          </Route>
          <Route path="/ultamate">
            <h1>this is ultamate</h1>
          </Route>
        </Switch>

      </BrowserRouter>
    )
  }
}

export default App
