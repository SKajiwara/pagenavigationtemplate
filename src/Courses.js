import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Courses() {
  let { categoryId } = useParams;
  return (
    <div className="Courses">
      <h3>{categoryId}</h3>
    </div>
  );
}

export default Courses;
