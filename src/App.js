import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { NavBar } from "./shared/NavBar";
import { Footer } from "./shared/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default hot(App);
