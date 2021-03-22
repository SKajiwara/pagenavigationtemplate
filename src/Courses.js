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
        { id: "234512425", name: "Pointman", url: "dsadsad" },
        { id: "412515124", name: "Cloud", url: "wgasdada" },
        { id: "741321317", name: "Mobile", url: "kvjgiuiu" }
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
    </div>
  );
}

export default Courses;
