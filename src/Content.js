import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Content() {
  return (
    <div className="content">
      <h1>Hello</h1>
    </div>
  );
}

export default Content;
