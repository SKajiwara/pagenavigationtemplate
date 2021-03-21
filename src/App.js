import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/menu">
              <Menu />
            </Route>
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
class Courses extends React.Component {
  render() {
    const courses = { "Course A": 1, "Course B": 2, "Course C": 3 };
    return (
      <Link to="/Course">
        <button type="button">Course</button>
      </Link>
    );
  }
}
class Course extends React.Component {
  render() {
    return <h2>Course</h2>;
  }
}
export default App;
