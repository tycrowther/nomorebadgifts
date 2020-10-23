import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
//import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import QuizPage from "views/QuizPage/QuizPage.js";
import ResultsPage from "views/ResultsPage/ResultsPage.js";
import FriendsPage from "views/FriendsPage/FriendsPage.js";

var hist = createBrowserHistory();

// const theme = createMuiTheme({
//   palette: {
//     primary: 'purple',
//     secondary: 'green',
//     error: 'red',
//   },
// });

ReactDOM.render(
  //<MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/quiz" component={QuizPage} />
        <Route path="/friends-page" component={FriendsPage} />
        <Route path="/results-page" component={ResultsPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>,
  //</MuiThemeProvider>,
  document.getElementById("root")
);