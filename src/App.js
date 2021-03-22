import React from "react";
import "../src/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Courses from "./Courses.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/menu" component={Menu} />
            <Route path="/menu/:categoryId" component={Courses} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          {/* TODO: */}
          <Link to="/menu">
            <a className="submit" align="center">
              Sign in
            </a>
          </Link>
          {/* 
          <p className="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p>
          */}
        </form>
      </div>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div className="flex-parent jc-center">
        {/* TODO: */}
        <Link to="/Courses">
          <button type="button">Developer/QA</button>
        </Link>
        <Link to="/Courses">
          <button type="button">Sales</button>
        </Link>
        <Link to="/Courses">
          <button type="button">Learn About Product</button>
        </Link>
      </div>
    );
  }
}
function NotFoundPage() {
  return <h3>Page not found (404)</h3>;
}
export default App;
