import React from "react";
import "./style.css";
import Courses from "./Courses.js";
import Course from "./Course.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/menu/:categoryId" component={Courses} />
            <Route
              exact
              path="/menu/:categoryId/:courseId"
              component={Course}
            />
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
          <Link to="/menu">
            <a className="submit" align="center">
              Sign in
            </a>
          </Link>
        </form>
      </div>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div className="flex-parent jc-center">
        <Link to="/menu/DevCourses">
          <button type="button">Developer/QA</button>
        </Link>
        <Link to="/menu/ProdCourses">
          <button type="button">Learn About Product</button>
        </Link>
        <Link to="/menu/SalesCourses">
          <button type="button">Sales</button>
        </Link>
      </div>
    );
  }
}
function NotFoundPage() {
  return <h3>Page not found (404)</h3>;
}
export default App;
