import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/course">Course</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div>
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
            <a className="submit" align="center">
              Sign in
            </a>
            <p className="forgot" align="center">
              <a href="#">Forgot Password?</a>
            </p>
            <a href="#" />
          </form>
        </div>
        <a href="#" />
      </div>
    );
  }
}

class Courses extends React.Component {
  render() {
    return <h2>Courses</h2>;
  }
}

class Course extends React.Component {
  render() {
    return <h2>Course</h2>;
  }
}

export default App;
