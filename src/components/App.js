import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./navigation/NavBar";
import StockDetail from "./stockDetails/StockDetail";

// MATERIAL UI
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Normalize CSS */}
        <CssBaseline />
        <Navbar />

        <div className="main-content">
          <Switch>
            <Route exact path="/stock/:symbol">
              <StockDetail />
            </Route>
            <Route path="/form">
              <div>Div</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
