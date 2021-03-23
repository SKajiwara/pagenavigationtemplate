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
  let { categoryId } = useParams();

  // Temp Data
  const categories = [
    {
      id: "DevCourses",
      courses: [
        { id: "543653", index: "1", name: "Pointman Mobile" },
        { id: "875324", index: "2", name: "Pointman Cloud" },
        { id: "315123", index: "3", name: "GPS Device" }
      ]
    },
    { id: "ProdCourses" },
    { id: "SalesCourses" }
  ];

  // Find Course
  const category = categories.find(({ id }) => id === categoryId);

  // Handle Error: course category not found
  if (!category) throw new Error("Course category not found (404)");

  console.log(category);
  return (
    <div className="Courses">
      <h3>Course: {categoryId}</h3>
      {category.courses.map((course, index) => {
        return (
          <Link to={`/menu/${categoryId}/${course.id}`}>
            <h5 key={course}>
              -{" "}
              <u>
                {course.name} {`(${index + 1})`}
              </u>
            </h5>
          </Link>
        );
      })}
    </div>
  );
}

export default Courses;
// List of 3 Categories -> List of Courses -> List of Course (video/article)
const mockDBdata = [
  {
    name: "Dev Course",
    courses: [
      {
        name: "Pointman Mobile",
        videos: [
          {
            name: "How to use",
            content: "This is a tutorial 1",
            viodeUrl: "youtube.com",
            quizId: "d23safaao22ada"
          },
          {
            name: "Who uses it",
            content: "This is a tutorial 1",
            videoUrl: "youtube.com",
            quitId: "khkhlh23klbhlg"
          }
        ]
      },
      { name: "Pointman Cloud", videos: [] },
      { name: "GPS Device", videos: [] }
    ]
  },
  { name: "Learn about Product course", courses: [] },
  { name: "Sales Coures ", courses: [] }
];
