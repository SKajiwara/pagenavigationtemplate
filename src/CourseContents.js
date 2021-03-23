import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function CourseContents() {
  let { categoryId, courseId } = useParams();
  const courses = [
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
          quizId: "gnghdrgdf3fsdf"
        }
      ]
    }
  ];
  const courseAndContents = courses.find(({ id }) => id === courseId);

  return (
    <div className="contents">
      <h1>
        Welcome to <u>{courseAndContents.name}</u> Course
      </h1>
      {courseAndContents.contents.map((content, index) => {
        return (
          <Link to={`/menu/${categoryId}/${courseId}/${content.id}`}>
            <h3 key={content.id}>
              {index + 1}
              {". " + content.name}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}

export default CourseContents;
