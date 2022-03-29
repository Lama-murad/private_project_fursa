"use strict";
exports.__esModule = true;
require("./course.scss");
var Course = function (props) {
    var name = props.name, hours = props.hours, lessons = props.lessons, participants = props.participants, cost = props.cost, description = props.description;
    return (React.createElement("div", { className: "course" },
        React.createElement("h4", null,
            "    ",
            name),
        React.createElement("div", null,
            "     ",
            hours,
            " hours"),
        React.createElement("div", null,
            "      ",
            lessons,
            " lessons"),
        React.createElement("div", null,
            "     ",
            participants,
            " participants"),
        React.createElement("div", null,
            "cost per participant :",
            cost),
        React.createElement("p", null,
            description,
            "   ")));
};
exports["default"] = Course;
