import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Content(props) {
  const content = props.location.state.content;
  console.log(content);
  return (
    <div className="content">
      <h1>
        Name: <u>{content.name}</u>
      </h1>
      <h3>id: {content.id}</h3>
      <h3>Video: {content.type.video ? "Yes" : "No"}</h3>
      <h3>Article: {content.type.article ? "Yes" : "No"}</h3>
      <h3>Content: {content.content}</h3>
      <h3>Quiz Id: {content.quizId}</h3>
    </div>
  );
}

export default Content;
