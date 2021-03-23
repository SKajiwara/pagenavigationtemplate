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
  const contents = [
    {
      id: "543653",
      name: "Pointman Mobile",
      contents: [
        {
          id: "asdawt4534fsdfs",
          type: { video: true, article: false },
          name: "How to use",
          content: "This is a tutorial content 1",
          viodeUrl: "youtube.com",
          articleUrl: "",
          quizId: "d23safaao22ada"
        },
        {
          id: "f45jg34dssgfsdfs",
          type: { video: true, article: false },
          name: "Who uses it",
          content: "This is a tutorial content 2",
          viodeUrl: "youtube.com",
          articleUrl: "",
          quizId: "d23safaao22ada"
        }
      ]
    }
  ];
  const content = contents.find(({ id }) => {
    console.log(id, courseId);
    return id === courseId;
  });
  console.log(content);

  return <h1>Welcome to {courseId}</h1>;
}

export default Course;
