import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Course() {
  let { courseId } = useParams();
  return <h1>Welcome to {courseId}</h1>;
}

export default Course;
