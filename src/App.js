import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import LoadableLoginpage from "./loadable/LoadableLoginpage";
import theme from "./utils/theme";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import LoadableHomepage from "./loadable/LoadableHomepage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <Switch>
                <Route path="/login" component={LoadableLoginpage} />
                <Route path="/home" component={LoadableHomepage} />
                <Route
                    path="/"
                    render={() => {
                      if (sessionStorage.getItem('userData')) {
                        return <Redirect to="/home" />;
                      } else {
                        return <Redirect to="/login" />;
                      }
                    }}
                  />
              </Switch>
            </MuiThemeProvider>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
