import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./navigation/NavBar";
import StockDetail from "./stockdetails/StockDetail";
import Home from "./homepage/Home";

// Material UI
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {/* Normalize CSS */}
          <CssBaseline />
          <Navbar />

          <div className="main-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
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
    </ThemeProvider>
  );
};

export default App;
