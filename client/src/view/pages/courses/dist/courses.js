"use strict";
exports.__esModule = true;
// import  './course.scss';
require("./courses.scss");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
//components
var course_1 = require("./course");
// export interface coursesProps {
//     name: string;
//     hours:number;
//     lessons:string;
//     participants:string;
//     cost:number;
//   }
var courses = [{
        name: 'group lessons', hours: 5, lessons: 10, participants: "4-8", cost: 1000,
        description: 'Saturdays,Tuesdays or Wednesdays.duration 10 weeks , one lesson a week (30 minutes). working hours:9:00-18:00'
    },
    { name: 'single lesson', hours: 0.5, lessons: 1, participants: "1", cost: 110,
        description: 'Sundays,Mondays or Thursdays .signle lesson (30 minutes). working hours:9:00-18:00' }];
// { name: 'private lessons', hours: 5, lessons: 10, participants: "1", cost: 1200 },
function Courses() {
    return (React.createElement("div", { className: "maindiv" },
        React.createElement("h3", null, "Courses and private lessons"),
        React.createElement("div", { className: "courses" },
            courses.map(function (c, i) {
                return React.createElement(course_1["default"], { key: i, name: c.name, hours: c.hours, lessons: c.lessons, participants: c.participants, cost: c.cost, description: c.description });
            }),
            React.createElement(react_router_dom_1.Outlet, null))));
}
exports["default"] = Courses;
